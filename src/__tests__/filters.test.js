import {mount} from '@vue/test-utils';
import {TableFilter} from '../';
import {describe, expect, it} from 'vitest';

describe('TableFilter.vue', () => {

    it('should renders filters and allow setting values',async  () => {
        const wrapper = mount(TableFilter, {
            props: {
                onChange: (val) => console.log(val),
                filters: [
                    {
                        label: 'Status',
                        field: 'status',
                        component: 'select-filter',
                        value: 0,
                        options: {0: 'Off', 1: 'On'},
                    },
                    {label: 'Name', field: 'name', component: 'text-filter', value: ''},
                ],
            },
        });
        const select = wrapper.find('.form-select')
        const input = wrapper.find('.form-input')

        expect(select.exists()).toBe(true)
        expect(input.exists()).toBe(true)

        await input.setValue('my@email.com')
        expect(input.element.value).toBe('my@email.com')

        await select.setValue(0)
        expect(select.element.value).toBe('0')

        // Assert the rendered text of the component
        expect(wrapper.text()).toContain('Status');
    });

});

