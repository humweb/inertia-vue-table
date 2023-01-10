<template>
    <!--    <ButtonWithDropdown placement="bottom-end" :active="hasEnabledFilter" ref="dropdownFilters">-->
    <!--        <template #button>-->
    <!--            <svg-->
    <!--                xmlns="http://www.w3.org/2000/svg"-->
    <!--                class="h-5 w-5"-->
    <!--                :class="{'text-gray-400': !hasEnabledFilter, 'text-indigo-700': hasEnabledFilter}"-->
    <!--                viewBox="0 0 20 20"-->
    <!--                fill="currentColor"-->
    <!--            >-->
    <!--                <path-->
    <!--                    fill-rule="evenodd"-->
    <!--                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"-->
    <!--                    clip-rule="evenodd"-->
    <!--                />-->
    <!--            </svg>-->
    <!--        </template>-->

    <!--        <div role="menu" aria-orientation="vertical" aria-labelledby="sort-menu">-->
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
    <!--        </div>-->
    <!--    </ButtonWithDropdown>-->
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
