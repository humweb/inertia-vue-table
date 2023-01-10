<template>
  <th v-show="cell.visible" :class="{'cursor-pointer': cell.sortable }" @click.prevent="onClick">
    <span class="flex flex-row items-center">
      <slot />

      <svg
        aria-hidden="true"
        class="w-4 h-4 ml-2"
        :class="{ 'text-gray-400': !this.sort , 'text-blue-500': this.sort && this.sort.endsWith(cell.attribute) }"
        v-if="cell.sortable"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          v-if="sortDirection == ''"
          fill="currentColor"
          d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
        />

        <path
          v-if="sortDirection === 'asc'"
          fill="currentColor"
          d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
        />

        <path
          v-if="sortDirection === 'desc'"
          fill="currentColor"
          d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
        />
      </svg>
    </span>
  </th>
</template>

<script>

export default {
    props: {
        cell: {
            type: Object,
            required: true,
        },
        sort:String,
    },

    methods: {
        onClick() {
            if (this.cell.sortable) {
                this.$emit('sort', this.cell.attribute);
            }
        },

    },
    computed:{

        sortDirection(){
            if (`-${this.cell.attribute}` == this.sort) {
                return 'desc'
            }
            else if (`${this.cell.attribute}` == this.sort) {
                return 'asc'
            }
            return ''
        }
    }
};
</script>
