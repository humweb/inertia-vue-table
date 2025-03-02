<script setup lang="ts">
import {
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-vue-next';
import { getRange, transform } from './pagination.ts';
import { computed } from 'vue';

interface Pagination {
  perPage: number;
  page: number;
  total_pages: number;
  record_count: number;
}

interface Props {
  pagination: Pagination;
  siblingCount?: number;
  showEdges?: boolean;
  firstPage?: number;
}

const {
  pagination = {
    perPage: 25,
    page: 1,
    total_pages: 0,
    record_count: 0,
  },
  siblingCount = 1,
  showEdges = true,
  firstPage = 1,
} = defineProps<Props>();

const emit = defineEmits<{
  (event: 'change', page: number): void;
}>();

function change(page: number) {
  emit('change', page);
}

// Computed properties
const pageItems = computed(() => {
  return transform(getRange(pagination.page, pagination.total_pages, siblingCount, showEdges));
});

const lastPage = computed(() => pagination.total_pages);

const isOnFirstPage = computed(() => pagination.page === firstPage);

const isOnLastPage = computed(() => pagination.page === lastPage.value);

const fromCount = computed(() => (pagination.page - 1) * pagination.perPage + 1);

const toCount = computed(() =>
  Math.min(pagination.page * pagination.perPage, pagination.record_count),
);

function forward() {
  if (pagination.page !== lastPage.value) {
    change(pagination.page + 1);
  }
}

function back() {
  if (pagination.page !== 1) {
    change(pagination.page - 1);
  }
}
</script>

<template>
  <nav
    class="py-8 mt-4 flex items-center border-t"
    v-if="pagination && pagination.record_count > 0">
    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-y-8">
      <div
        v-if="pagination.record_count > 0"
        class="block sm:flex-1 sm:flex sm:items-center justify-start xl:justify-between">
        <div>
          <slot />
          <p class="inline text-sm text-gray-700 dark:text-gray-400">
            Showing
            {{ ' ' }}
            <span class="font-medium">{{ fromCount }}</span>
            {{ ' ' }}
            to
            {{ ' ' }}
            <span class="font-medium">{{ toCount }}</span>
            {{ ' ' }}
            of
            {{ ' ' }}
            <span class="font-medium">{{ pagination.record_count }}</span>
            {{ ' ' }}
            results
          </p>
        </div>
      </div>
      <div v-if="pageItems.length > 1" class="flex items-center ml-0 lg:ml-auto">
        <span
          @click="change(1)"
          :class="[
            isOnFirstPage
              ? 'text-gray-400 dark:bg-gray-700 cursor-not-allowed'
              : 'text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 ',
            'relative inline-flex items-center rounded-l-md px-2 py-2 -ml-px ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0',
          ]">
          <span class="sr-only">Previous</span>
          <ChevronsLeftIcon class="size-5" aria-hidden="true" />
        </span>
        <span
          @click="back"
          :class="[
            isOnFirstPage
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-700',
            'relative inline-flex items-center px-2 py-2 -ml-px text-sm bg-background ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0',
          ]">
          <ChevronLeftIcon class="size-5" aria-hidden="true" />
        </span>
        <template v-for="(n, i) in pageItems" :key="i">
          <span
            v-if="n.type == 'page'"
            @click="change(n.value)"
            :class="[
              n.value == pagination.page
                ? 'cursor-not-allowed bg-gray-100 dark:bg-gray-700'
                : 'text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700',
              'relative inline-flex items-center px-4 py-2 -ml-px text-sm bg-background ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0',
            ]"
            v-html="n.value"></span>
          <span
            v-if="n.type == 'ellipsis'"
            @click="change(n.value)"
            :class="[
              'relative inline-flex items-center px-4 py-2 -ml-px text-sm bg-background ring-1 ring-inset ring-gray-300 dark:ring-gray-700',
            ]">
            ...
          </span>
        </template>
        <span
          @click="forward"
          :class="[
            isOnLastPage
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-700',
            'relative inline-flex items-center px-2 py-2 -ml-px text-sm bg-background ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0',
          ]">
          <ChevronRightIcon class="size-5" aria-hidden="true" />
        </span>

        <span
          @click="change(pagination.total_pages)"
          :class="[
            isOnLastPage
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700',
            'relative inline-flex items-center rounded-r-md px-2 py-2 -ml-px bg-background ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0',
          ]">
          <span class="sr-only">Next</span>
          <ChevronsRightIcon class="size-5" aria-hidden="true" />
        </span>
      </div>
    </div>
  </nav>
</template>
