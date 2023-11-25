<template>
    <div v-for="(filter, index) in filters" :key="filter.field">
        <div class="relative inline-flex">
            <select
                v-if="filter.component == 'select-filter'"
                :value="filter.value"
                @change="handleChange(index, $event.target.value)"
                class="form-select inline  border-0 focus:border-none ring-0"
                :class="{ error: errors[filter.field] }">
                <option value="" disabled>{{ filter.label }}</option>
                <option v-for="(option, key) in filter.options" :value="key" :key="key">{{ option }}</option>
            </select>

            <input
                v-if="filter.component == 'text-filter'"
                type="text"
                :value="filter.value"
                @input="handleChange(index, $event.target.value)"
                class="form-input border-0 focus:border-none ring-0"
                :class="{ error: errors[filter.field] }"
                :placeholder="filter.label"
            />
            <div v-if="filter.component == 'text-filter'" class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                    @click.prevent="handleChange(index, '')"
                    class="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0"
                >
                    <span class="sr-only">Remove search</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <button v-if="filter.component == 'select-filter'" class="btn btn-slate bg-gray-700 rounded-l-none -ml-1 z-10 inline" @click="clear(index)" title="Clear filter">X</button>
        </div>
    </div>
</template>

<script>

import find from 'lodash-es/find';
import debounce from 'lodash-es/debounce';

export default {

    props: {
        filters: {
            type: Object,
            required: true,
        },

        onChange: {
            type: Function,
            required: true,
        },
        errors: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    methods: {
        clear(key) {
            this.onChange(key, null);
        },
        handleChange: debounce(function(key, value) {
            this.onChange(key, value);
        }, 300),
    },
    computed: {
        hasEnabledFilter() {
            return find(this.filters, (filter, key) => filter.value != '' && filter.value != null) !== undefined;
        },
    },
};
</script>
