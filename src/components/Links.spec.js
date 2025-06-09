import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Links from './Links.vue';

describe('Links component', () => {
  const mockGhUser = {
    html_url: 'https://github.com/edm00se',
    login: 'edm00se'
  };

  const vm = mount(Links, {
    props: {
      ghUser: mockGhUser
    },
  });

  it('should define the correct number of social links', () => {
    expect(vm.findAll('.social-links > a').length).toBe(5);
  });

  it('should include a GitHub user link', () => {
    expect(vm.find(`a[href='${mockGhUser.html_url}']`)).toBeDefined();
  });

  it('should define the correct number of links', () => {
    expect(vm.findAll('.link-of-links').length).toBe(6);
  });
});
