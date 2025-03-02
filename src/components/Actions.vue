<script setup lang="ts">
// import Dropdown from './DropdownComp.vue';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { EllipsisVerticalIcon } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
// import { route } from '@/lib/routes.ts';

interface Props {
  record: any;
  actions: any[];
}

const props = defineProps<Props>();

function buildLink(action: any, record: any) {
  return action.link.replace(
    /{(\w*)}/g, //match "{id}"
    function (_: any, key: string) {
      return record.hasOwnProperty(key) ? record[key] : '';
    },
  );
}
</script>
<template>
  <DropdownMenu class="inline-flex">
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon">
        <EllipsisVerticalIcon class="size-5" />
        <span class="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <InertiaLink v-for="action in props.actions" :href="buildLink(action, props.record)">
        <DropdownMenuItem>{{ action.label }}</DropdownMenuItem>
      </InertiaLink>
      <!--      <div-->
      <!--        class="flex w-full text-left"-->
      <!--        role="menu"-->
      <!--        aria-orientation="vertical"-->
      <!--        aria-labelledby="sort-menu">-->
      <!--        <div-->
      <!--          class="w-full p-2"-->
      <!--          role="menu"-->
      <!--          aria-orientation="vertical"-->
      <!--          aria-labelledby="options-menu">-->
      <!--          <InertiaLink-->
      <!--            v-for="action in props.actions"-->
      <!--            :href="buildLink(action, props.record)"-->
      <!--            class="text-left flex w-full rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-500 dark:hover:text-gray-300"-->
      <!--            role="menuitem">-->
      <!--            {{ action.label }}-->
      <!--          </InertiaLink>-->
      <!--        </div>-->
      <!--      </div>-->
    </DropdownMenuContent>
  </DropdownMenu>
</template>
