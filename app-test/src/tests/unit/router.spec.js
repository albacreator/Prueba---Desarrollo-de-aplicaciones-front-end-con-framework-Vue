import { mount } from '@vue/test-utils';
import router from '../router/index'; 

import Home from '../views/Home.vue';
import About from '../views/About.vue';

describe('Router', () => {
  it('should navigate to home', () => {
    const wrapper = mount(Home, { router });
    expect(wrapper.exists()).toBe(true);
  });

  it('should navigate to about', () => {
    router.push('/about');
    const wrapper = mount(About, { router });
    expect(wrapper.exists()).toBe(true);
  });
});
