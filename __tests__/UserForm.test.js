const { mount } = require('@vue/test-utils');
const UserForm = require('../public/components/UserForm.vue').default;

describe('UserForm SFC (mounted)', () => {
  test('renders a label for each input field', () => {
    const wrapper = mount(UserForm);
    expect(wrapper.find('label[for="name"]').exists()).toBe(true);
    expect(wrapper.find('label[for="email"]').exists()).toBe(true);
    expect(wrapper.find('label[for="age"]').exists()).toBe(true);
    expect(wrapper.find('label[for="name"]').text()).toBe('Name');
    expect(wrapper.find('label[for="email"]').text()).toBe('Email');
    expect(wrapper.find('label[for="age"]').text()).toBe('Age');
  });

  test('submitting form emits trimmed payload', async () => {
    const wrapper = mount(UserForm);
    const nameInput = wrapper.find('input[placeholder="Name"]');
    const emailInput = wrapper.find('input[placeholder="Email"]');
    const ageInput = wrapper.find('input[placeholder="Age"]');
    await nameInput.setValue(' Alice ');
    await emailInput.setValue(' a@b.com ');
    await ageInput.setValue('31');
    await wrapper.find('form').trigger('submit.prevent');
    const emitted = wrapper.emitted('submit');
    expect(emitted).toBeTruthy();
    expect(emitted[0][0]).toEqual({ id: null, name: 'Alice', email: 'a@b.com', age: 31 });
  });

  test('cancel button emits cancel when editing', async () => {
    const wrapper = mount(UserForm, { props: { userToEdit: { id: 2, name: 'Bob', email: 'b@b.com', age: 42 } } });
    await wrapper.find('button[type="button"]').trigger('click');
    expect(wrapper.emitted('cancel')).toBeTruthy();
  });
});
