<script setup lang="ts">
import { ChevronDownIcon, ChevronsUpDownIcon, ChevronUpIcon } from 'lucide-vue-next';
import { computed } from 'vue';

interface Props {
  cell: any;
  sort?: string;
}

const { cell, sort } = defineProps<Props>();

const sortDirection = computed(() => {
  if (`-${cell.attribute}` === sort) {
    return 'desc';
  } else if (`${cell.attribute}` === sort) {
    return 'asc';
  }
  return '';
});

const emit = defineEmits(['sort']);

function onClick() {
  if (cell.sortable) {
    emit('sort', cell.attribute);
  }
}
</script>
<template>
  <th
    v-show="cell.visible"
    :class="{
      'cursor-pointer': cell.sortable,
      'text-right': cell.component == 'action-field',
      'text-left': cell.component !== 'action-field',
    }"
    @click.prevent="onClick">
    <slot :direction="sortDirection">
      <div
        :class="[
          cell.component == 'action-field'
            ? 'justify-end'
            : 'flex flex-row items-center whitespace-nowrap',
        ]">
        {{ cell.name }}
        <div
          v-if="cell.sortable"
          class="ml-2 inline-flex"
          :class="{
            'text-gray-400': !sort,
            'text-blue-500': sort && sort.endsWith(cell.attribute),
          }">
          <ChevronsUpDownIcon v-if="sortDirection === ''" class="size-4" />
          <ChevronUpIcon v-if="sortDirection === 'asc'" class="size-4" />
          <ChevronDownIcon v-if="sortDirection === 'desc'" class="size-4" />
        </div>
      </div>
    </slot>
  </th>
</template>
