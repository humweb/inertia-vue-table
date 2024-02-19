<template>
  <Dropdown class="inline-flex">
    <template #trigger>
      <div class="btn btn-xs hover:text-gray-400">
        <EllipsisHorizontalIcon class="w-6 h-6"/>
      </div>
    </template>
    <template #content>
      <div class="flex w-full text-left" role="menu" aria-orientation="vertical" aria-labelledby="sort-menu">
        <div class="w-full p-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <Link
              v-for="action in actions"
              :href="buildLink(action, record)"
              class="text-left flex w-full rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-500 dark:hover:text-gray-300"
              role="menuitem">
            {{ action.label }}
          </Link>
        </div>
      </div>
    </template>
  </Dropdown>
</template>

<script>
import Dropdown from './DropdownComp.vue';

import {EllipsisHorizontalIcon} from '@heroicons/vue/24/outline';

export default {
  name: 'Actions',
  components: {
    Dropdown,
    EllipsisHorizontalIcon,
  },
  props: {
    record: Object,
    actions: Array,
  },
  methods: {
    buildLink(action, record) {
      return action.link
          .replace(
              /{(\w*)}/g, //match "{id}"
              function (m, key) {
                return record.hasOwnProperty(key) ? record[key] : '';
              }
          );
    }
  },

};
</script>

<style scoped>

</style>
