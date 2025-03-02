<script setup lang="ts">
import filter from 'lodash-es/filter';
import { computed, ref, useTemplateRef } from 'vue';

interface Props {
  rows: any;
  onChange: Function;
  onRemove: Function;
}

const { rows, onChange, onRemove } = defineProps<Props>();

const hasFiltersEnabled = computed(() => {
  return Object.keys(enabledFilters.value || {}).length > 0;
});
interface InputRefs {
  [key: string]: any;
}
const inputRefs = ref<InputRefs>({});

const enabledFilters = computed(() => {
  inputRefs.value = {};
  return filter(rows, (search: any) => {
    inputRefs.value[search.field] = useTemplateRef<HTMLInputElement>(search.field);
    return searchOptionIsEnabled(search.field) && search.field !== 'global';
  });
});

function searchOptionIsEnabled(key: string) {
  return rows[key].enabled;
}

//@ts-ignore
function focus(key: string) {
  inputRefs.value[key].focus();
}
</script>
<template>
  <div
    class="w-full bg-white dark:bg-gray-800 px-4 py-8 border dark:border-none mb-4 rounded-lg mt-4"
    v-show="hasFiltersEnabled">
    <div class="flex items-center space-x-4">
      <div class="space-y-8">
        <div
          v-for="(search, key) in enabledFilters"
          :key="key"
          class="h-8 flex form-label items-center">
          <span class="text-sm">{{ search.label }}</span>
        </div>
      </div>

      <div class="flex-grow space-y-8">
        <div v-for="(search, key) in enabledFilters" :key="key" class="h-8 flex items-center">
          <div class="flex-grow relative">
            <input
              class="form-input sm"
              :ref="search.field"
              :value="search.value"
              type="text"
              @input="onChange(search.field, ($event.target as HTMLInputElement).value)" />
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                @click.prevent="onRemove(search.field)"
                class="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="sr-only">Remove search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
