<script>

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/vue/20/solid";
import {getRange, transform} from "./pagination.js";

export default {
  components: {
    ChevronRightIcon,
    ChevronLeftIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon
  },
  emits: ['change'],
  props: {
    pagination: {
      type: Object,
      default() {
        return {
          perPage: 25,
          page: 1,
          total_pages: 0,
          record_count: 0,
        }
      }
    },
    siblingCount: {
      type: Number,
      default() {
        return 1
      }
    },
    showEdges: {
      type: Boolean,
      default() {
        return true
      }
    },
    firstPage: {
      type: Number,
      default: 1
    }
  },
  computed: {
    pageItems(){
      return transform(getRange(this.pagination.page, this.pagination.total_pages, this.siblingCount, this.showEdges))
    },
    lastPage() {
      return this.pagination.total_pages
    },
    isOnFirstPage() {
      return this.pagination.page === this.firstPage
    },
    isOnLastPage() {
      return this.pagination.page === this.lastPage
    },
    fromCount() {
      return (this.pagination.page - 1) * this.pagination.perPage + 1
    },
    toCount() {
      return Math.min(this.pagination.page * this.pagination.perPage, this.pagination.record_count)
    }
  },
  created() {

  },
  methods: {
    change(page) {
      this.$emit('change', page)
    },
    forward() {
      if (this.pagination.page !== this.totalPages) {
        this.change(this.pagination.page + 1)
      }
    },
    back() {
      if (this.pagination.page !== 1) {
        this.change(this.pagination.page - 1)
      }
    },
  }
}
</script>

<template>

  <nav
      class="bg-white py-8  mt-4 flex items-center border-t dark:border-transparent dark:bg-gray-800 dark:text-gray-200"
      v-if="pagination && pagination.record_count > 0"
  >
    <div class="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8">
      <div
          v-if="pagination.record_count > 0"
          class="block sm:flex-1 sm:flex sm:items-center justify-start xl:justify-between"
      >
        <div>
          <slot/>
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
      <div class="flex items-center ml-0 xl:ml-auto">

        <span
            @click="change(1)"
            :class="[isOnFirstPage ? 'text-gray-400 dark:bg-gray-700 cursor-not-allowed' : 'text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 ', 'relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0']">
          <span class="sr-only">Previous</span>
          <ChevronDoubleLeftIcon class="size-5" aria-hidden="true"/>
        </span>
        <span @click="back"
           :class="[isOnFirstPage ? 'text-gray-400 cursor-not-allowed' : 'text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-700', 'relative inline-flex items-center px-2 py-2 text-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0']">
          <ChevronLeftIcon class="size-5" aria-hidden="true"/>
        </span>
          <template v-for="(n, i) in pageItems" :key="i">

            <span v-if="n.type == 'page'" @click="change(n.value)"
               :class="[n.value == pagination.page ? 'cursor-not-allowed bg-gray-100 dark:bg-gray-700' : 'text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700', 'relative inline-flex items-center px-4 py-2 text-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0']"
               v-html="n.value">
            </span>
            <span v-if="n.type == 'ellipsis'" @click="change(n.value)"
               :class="['relative inline-flex items-center px-4 py-2 text-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700']">
              ...
            </span>

          </template>
        <span @click="forward"
           :class="[isOnLastPage ? 'text-gray-400 cursor-not-allowed' : 'text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-700', 'relative inline-flex items-center px-2 py-2 text-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0']">
          <ChevronRightIcon class="size-5" aria-hidden="true"/>
        </span>

        <span
            @click="change(this.pagination.total_pages)"
            :class="[isOnLastPage ? 'text-gray-400 cursor-not-allowed' : 'text-hover:bg-gray-50 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700', 'relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:z-20 focus:outline-offset-0']">
          <span class="sr-only">Next</span>
          <ChevronDoubleRightIcon class="size-5" aria-hidden="true"/>
        </span>
      </div>
    </div>
  </nav>
</template>