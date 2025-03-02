<script setup lang="ts">
//@ts-nocheck
import Dropdown from '../Dropdown.vue';
import filter from 'lodash-es/filter';
import { Search } from 'lucide-vue-next';
import { computed, useTemplateRef } from 'vue';

interface Props {
  rows: any;
  onAdd: Function;
}

const { rows, onAdd } = defineProps<Props>();

const dropRef = useTemplateRef<InstanceType<typeof Dropdown>>('dropdown');
const hasRows = computed(() => {
  return filter(rows, (row) => row.field !== 'global').length > 0;
});

const rowsLeft = computed(() => {
  return filter(rows, (row) => showRow(row)).length > 0;
});

function showRow(row: any) {
  if (row.field === 'global') {
    return false;
  }

  return !row.enabled;
}

function enableSearch(key: string) {
  onAdd(key);
  dropRef.value?.hide();
}
</script>

<template>
  <Dropdown
    ref="dropdown"
    v-if="hasRows"
    :disabled="!rowsLeft"
    :close-on-click="true"
    class="w-auto">
    <template #button>
      <Search class="h-4 w-4 my-1" />
      <!--            <span>Search</span>-->
    </template>

    <div role="menu" aria-orientation="vertical" aria-labelledby="sort-menu">
      <div
        class="divide-y divide-gray-200 dark:divide-gray-600"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu">
        <div v-for="searchOption in rows" :key="searchOption.field" class="px-2">
          <button
            v-show="showRow(searchOption)"
            @click.prevent="enableSearch(searchOption.field)"
            class="text-left w-full my-2 py-2 px-4 rounded-md text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-500 dark:hover:text-gray-300"
            role="menuitem">
            {{ searchOption.label }}
          </button>
        </div>
      </div>
    </div>
  </Dropdown>
</template>
