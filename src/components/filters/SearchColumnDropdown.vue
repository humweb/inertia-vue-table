<template>
  <Dropdown ref="dropdown" v-if="hasRows" :disabled="!rowsLeft" :close-on-click="true" class="w-auto">
    <template #button>
      <MagnifyingGlassIcon class="h-4 w-4 my-1"/>
      <!--            <span>Search</span>-->
    </template>

    <div role="menu" aria-orientation="vertical" aria-labelledby="sort-menu">
      <div class="divide-y divide-gray-200 dark:divide-gray-600" role="menu" aria-orientation="vertical"
           aria-labelledby="options-menu">
        <div v-for="searchOption in rows"
             :key="searchOption.field"
             class="px-2">
          <button
              v-show="showRow(searchOption)"
              @click.prevent="enableSearch(searchOption.field)"
              class="text-left w-full my-2 py-2 px-4 rounded-md text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-500 dark:hover:text-gray-300"
              role="menuitem"
          >{{ searchOption.label }}
          </button>
        </div>
      </div>
    </div>
  </Dropdown>
</template>

<script>
import Dropdown from "../Dropdown.vue";
import filter from "lodash-es/filter";
import {MagnifyingGlassIcon} from '@heroicons/vue/24/outline';

export default {

  components: {
    Dropdown,
    MagnifyingGlassIcon
  },
  props: {
    rows: {
      type: Object,
      required: true,
    },

    onAdd: {
      type: Function,
      required: true,
    },
  },

  computed: {
    hasRows() {
      return filter(this.rows, (row) => row.field !== "global").length > 0;
    },

    rowsLeft() {
      return filter(this.rows, (row) => this.showRow(row)).length > 0;
    },
  },

  methods: {
    showRow(row) {
      if (row.field === "global") {
        return false;
      }

      if (row.enabled) {
        return false;
      }

      return true;
    },

    enableSearch(key) {
      this.onAdd(key);
      this.$refs.dropdown.hide();
    },
  },
};
</script>
