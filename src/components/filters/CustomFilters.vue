<template>
    <div v-for="(filter, index) in filters" :key="filter.field">
        <div class="">
            <select
                v-if="filter.component == 'select-filter'"
                :value="filter.value"
                @change="handleChange(index, $event.target.value)"
                class="form-select"
                :class="{ error: errors[filter.field] }">
                <option value="" disabled>{{ filter.label }}</option>
                <option v-for="(option, key) in filter.options" :value="key" :key="key">{{ option }}</option>
            </select>

            <input
                v-if="filter.component == 'text-filter'"
                type="text"
                :value="filter.value"
                @input="handleChange(index, $event.target.value)"
                class="form-input"
                :class="{ error: errors[filter.field] }"
                :placeholder="filter.label"
            />
        </div>
    </div>
</template>

<script>

import find from 'lodash/find';
import debounce from 'lodash/debounce';

export default {

    components: {

    },
    props: {
        filters: {
            type: Object,
            required: true,
        },

        onChange: {
            type: Function,
            required: true,
        },
        errors:{
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        handleChange: debounce(function(key, value) {
            this.onChange(key, value);
        }, 300),
    },
    computed: {
        hasEnabledFilter() {
            return find(this.filters, (filter, key) => filter.value != '' && filter.value != null)
                ? true
                : false;
        },
    },
};
</script>
