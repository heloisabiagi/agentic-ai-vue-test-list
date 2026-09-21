import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import UserForm from './components/UserForm.js';
import UserList from './components/UserList.js';

createApp({
  components: { UserForm, UserList },
  data() {
    return { users: [], editingUser: null };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      const res = await fetch('/api/users');
      this.users = await res.json();
    },
    async handleSubmit(payload) {
      const { id, name, email } = payload;
      if (!name || !email) return;
      if (id) {
        await fetch(`/api/users/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email })
        });
      } else {
        await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email })
        });
      }
      this.editingUser = null;
      this.fetchUsers();
    },
    editUser(user) {
      this.editingUser = user;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    cancelEdit() {
      this.editingUser = null;
    },
    async removeUser(id) {
      if (!confirm('Delete this user?')) return;
      await fetch(`/api/users/${id}`, { method: 'DELETE' });
      if (this.editingUser && this.editingUser.id === id) this.cancelEdit();
      this.fetchUsers();
    }
  }
}).mount('#app');
