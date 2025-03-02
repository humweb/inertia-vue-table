<script setup lang="ts">
import find from 'lodash-es/find';
import debounce from 'lodash-es/debounce';
import { computed } from 'vue';

interface Props {
  filters: any;
  onChange: Function;
  errors?: any;
}

const { filters, onChange, errors = {} } = defineProps<Props>();

//@ts-ignore
function clear(key: string) {
  onChange(key, null);
}

const handleChange = debounce(function (key: number, value: any) {
  onChange(key, value);
}, 300);

//@ts-ignore
const hasEnabledFilter = computed(() => {
  return find(filters, (filter: any) => filter.value != '' && filter.value != null) !== undefined;
});
</script>

<template>
  <div v-for="(filter, index) in filters" :key="filter.field">
    <div class="relative inline-flex">
      <select
        v-if="filter.component == 'select'"
        :value="filter.value"
        @change="handleChange(index, ($event.target as HTMLInputElement).value)"
        class="form-select sm"
        :class="{ error: errors[filter.field] }">
        <option value="" disabled>{{ filter.label }}</option>
        <option v-for="option in filter.options" :value="option.value" :key="option.value">
          {{ option.label }}
        </option>
      </select>

      <input
        v-if="filter.component == 'text'"
        type="text"
        :value="filter.value"
        @input="handleChange(index, ($event.target as HTMLInputElement).value)"
        class="form-input sm"
        :class="{ error: errors[filter.field] }"
        :placeholder="filter.label" />
      <!--      <div v-if="filter.component == 'text'" class="absolute inset-y-0 right-0 pr-3 flex items-center">-->
      <!--        <button-->
      <!--            @click.prevent="handleChange(index, '')"-->
      <!--            class="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0"-->
      <!--        >-->
      <!--          <span class="sr-only">Remove search</span>-->
      <!--          <svg-->
      <!--              xmlns="http://www.w3.org/2000/svg"-->
      <!--              class="h-5 w-5"-->
      <!--              fill="none"-->
      <!--              viewBox="0 0 24 24"-->
      <!--              stroke="currentColor"-->
      <!--          >-->
      <!--            <path-->
      <!--                stroke-linecap="round"-->
      <!--                stroke-linejoin="round"-->
      <!--                stroke-width="2"-->
      <!--                d="M6 18L18 6M6 6l12 12"-->
      <!--            />-->
      <!--          </svg>-->
      <!--        </button>-->
      <!--      </div>-->
      <!--      <button v-if="filter.component == 'select'" class="btn btn-slate rounded-l-none -ml-1 z-10 inline" @click="clear(index)" title="Clear filter">X</button>-->
    </div>
  </div>
</template>
