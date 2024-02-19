<template>
  <th
      v-show="cell.visible"
      :class="{'cursor-pointer': cell.sortable, 'text-right': cell.component == 'action-field', 'text-left': cell.component !== 'action-field'}"
      @click.prevent="onClick">
    <slot :direction="sortDirection">
      <div
          :class="[cell.component == 'action-field' ? 'justify-end' : 'flex flex-row items-center whitespace-nowrap']"
      >
        {{ cell.name }}
        <div
            v-if="cell.sortable"
            class="ml-2 inline-flex"
            :class="{ 'text-gray-400': !this.sort , 'text-blue-500': this.sort && this.sort.endsWith(cell.attribute) }">

          <ChevronUpDownIcon v-if="sortDirection === ''" class="size-5"/>
          <ChevronUpIcon v-if="sortDirection === 'asc'" class="size-5"/>
          <ChevronDownIcon v-if="sortDirection === 'desc'" class="size-5"/>
        </div>
      </div>
    </slot>
  </th>
</template>

<script>
import {ChevronDownIcon, ChevronUpDownIcon, ChevronUpIcon} from '@heroicons/vue/24/outline';

export default {
  props: {
    cell: {
      type: Object,
      required: true,
    },
    sort: String,
  },
  components: {
    ChevronUpDownIcon, ChevronUpIcon, ChevronDownIcon,
  },
  methods: {
    onClick() {
      if (this.cell.sortable) {
        this.$emit('sort', this.cell.attribute);
      }
    },

  },
  computed: {

    sortDirection() {
      if (`-${this.cell.attribute}` === this.sort) {
        return 'desc';
      } else if (`${this.cell.attribute}` === this.sort) {
        return 'asc';
      }
      return '';
    },
  },
};
</script>
