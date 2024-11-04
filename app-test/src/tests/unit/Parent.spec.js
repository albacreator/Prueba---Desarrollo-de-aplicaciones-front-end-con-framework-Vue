import { mount } from '@vue/test-utils';
import Parent from '../components/ParentComponent.vue'; 


describe('Parent Component', () => {
  it('should receive text from Child', async () => {
    const wrapper = mount(Parent);
    const child = wrapper.findComponent({ name: 'Child' });
    child.setData({ text: 'Hello' });
    await child.vm.sendText();
    expect(wrapper.vm.receivedText).toBe('Hello');
  });
});
