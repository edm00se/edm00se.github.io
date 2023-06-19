import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import component from './404.vue';

describe('404 component', () => {

    const vm = mount(component, {});

    it('should render the component', () => {
        expect(vm.find('h1').text()).toContain('404: OMG!');
        expect(vm.text()).toContain("The tumbeasts are to be blamed, as your destination couldn't be found");
    });
});