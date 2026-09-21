const { mount } = require('@vue/test-utils');
const UserForm = require('../public/components/UserForm.vue').default;

describe('UserForm SFC (mounted)', () => {
  test('submitting form emits trimmed payload', async () => {
    const wrapper = mount(UserForm);
    const nameInput = wrapper.find('input[placeholder="Name"]');
    const emailInput = wrapper.find('input[placeholder="Email"]');
    await nameInput.setValue(' Alice ');
    await emailInput.setValue(' a@b.com ');
    await wrapper.find('form').trigger('submit.prevent');
    const emitted = wrapper.emitted('submit');
    expect(emitted).toBeTruthy();
    expect(emitted[0][0]).toEqual({ id: null, name: 'Alice', email: 'a@b.com' });
  });

  test('cancel button emits cancel when editing', async () => {
    const wrapper = mount(UserForm, { props: { userToEdit: { id: 2, name: 'Bob', email: 'b@b.com' } } });
    await wrapper.find('button[type="button"]').trigger('click');
    expect(wrapper.emitted('cancel')).toBeTruthy();
  });
});
