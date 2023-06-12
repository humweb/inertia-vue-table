<template>
  <div
    class="w-full bg-white dark:bg-gray-800 px-4 py-8 border dark:border-none mb-4 rounded-lg mt-4"
    v-show="hasFiltersEnabled"
  >
    <div class="flex items-center space-x-4">
      <div class="space-y-8">
        <div v-for="(search, key) in enabledFilters" :key="key" class="h-8 flex form-label items-center">
          <span class="text-sm">{{ search.label }}</span>
        </div>
      </div>

      <div class="flex-grow space-y-8">
        <div v-for="(search, key) in enabledFilters" :key="key" class="h-8 flex items-center">
          <div class="flex-grow relative">
            <input
              class="form-input"
              :ref="search.key"
              :value="search.value"
              type="text"
              @input="onChange(search.key, $event.target.value)"
            />
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                @click.prevent="onRemove(search.key)"
                class="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import filter from "lodash-es/filter";

export default {
    props: {
        rows: {
            type: Object,
            required: true,
        },

        onChange: {
            type: Function,
            required: true,
        },

        onRemove: {
            type: Function,
            required: true,
        },
    },

    methods: {
        searchOptionIsEnabled(key) {
            return this.rows[key].enabled;
        },

        focus(key) {
            const keyRef = this.$refs[key];

            if (keyRef.length === 1) {
                return keyRef[0].focus();
            }

            this.$refs[key].focus();
        },
    },

    computed: {
        hasFiltersEnabled() {
            return Object.keys(this.enabledFilters || {}).length > 0;
        },

        enabledFilters() {
            return filter(this.rows, (search) => {
                return this.searchOptionIsEnabled(search.key) && search.key !== "global";
            });
        },
    },
};
</script>
