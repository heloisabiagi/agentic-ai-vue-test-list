<template>
  <form @submit.prevent="onSubmit" class="form">
    <input v-model="name" placeholder="Name" required />
    <input v-model="email" placeholder="Email" required />
    <button type="submit">{{ editingId ? 'Save' : 'Add User' }}</button>
    <button type="button" v-if="editingId" @click="onCancel">Cancel</button>
  </form>
</template>

<script>
export default {
  props: { userToEdit: { type: Object, default: null } },
  data() {
    return { name: '', email: '', editingId: null };
  },
  watch: {
    userToEdit: {
      immediate: true,
      handler(u) {
        if (u) {
          this.editingId = u.id;
          this.name = u.name;
          this.email = u.email;
        } else {
          this.editingId = null;
          this.name = '';
          this.email = '';
        }
      }
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', { id: this.editingId, name: this.name.trim(), email: this.email.trim() });
    },
    onCancel() {
      this.$emit('cancel');
    }
  }
};
</script>
