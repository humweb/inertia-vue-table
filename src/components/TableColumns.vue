<template>
  <ButtonWithDropdown placement="bottom-end" :active="hasDisabledFilter">
    <template #button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
        />
      </svg>
    </template>

    <div role="menu" aria-orientation="vertical" aria-labelledby="sort-menu">
      <div class="">
        <ul class="divide-y divide-gray-200 dark:divide-gray-600">
          <li
            class="py-2 px-4 flex items-center justify-between"
            v-for="(column, key) in columns"
            :key="column.attribute"
          >
            <p
              class="text-sm font-medium text-gray-900 dark:text-gray-400"
              id="privacy-option-1-label"
            >{{ column.name }}</p>

            <button
              @click.prevent="toggle(key)"
              type="button"
              class="ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
              :class="{'bg-green-500': column.visible,'bg-gray-200': !column.visible, 'cursor-not-allowed': isLastEnabledFilter(column.attribute) }"
              :disabled="isLastEnabledFilter(key)"
              aria-pressed="true"
              aria-labelledby="privacy-option-1-label"
              aria-describedby="privacy-option-1-description"
            >
              <span class="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                :class="[column.visible ? 'translate-x-5' : 'translate-x-0']"
                class="inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </ButtonWithDropdown>
</template>

<script>
import ButtonWithDropdown from "./Dropdown.vue";
import filter from "lodash/filter";
import find from "lodash/find";

export default {

  components: {
    ButtonWithDropdown,
  },
    props: {
        columns: {
            type: Object,
            required: true,
        },

        onChange: {
            type: Function,
            required: true,
        },
    },

    methods: {
        toggle(key) {

            this.onChange(key, !this.columns[key].visible);
        },

        isLastEnabledFilter(key) {
            const enabledFilters = filter(
                this.columns,
                (filter, key) => filter.visible
            );

            if (enabledFilters.length === 1) {
                return enabledFilters[0].key === key;
            }

            return false;
        },
    },

    computed: {
        hasDisabledFilter() {
            return !!find(this.columns, (filter, key) => !filter.visible);
        },
    },
};
</script>
