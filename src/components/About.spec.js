import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import About from './About.vue';

describe('About component', () => {

    const vm = mount(About, {});

    it('should render the component', () => {
        expect(vm.text()).toContain('edm00se');
    });
});