import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import App from './App.vue';

describe('App component', () => {

    const vm = mount(App, {});

    it('should render the App component', () => {
        expect(vm).toBeDefined();
    });
});