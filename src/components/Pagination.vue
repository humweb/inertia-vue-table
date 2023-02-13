<template>
    <nav
        class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 dark:border-gray-700 md:rounded-b-lg dark:bg-gray-800 dark:text-gray-200"
        v-if="hasPagination && pagination.total > 0"
    >

        <div class="flex-1 flex justify-between sm:hidden">
            <component
                :is="previousPageUrl ? 'Link' : 'div'"
                :href="previousPageUrl"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white dark:bg-gray-700 hover:text-gray-500 dark:border-gray-800 dark:text-gray-200"
            >Previous
            </component>
            <component
                :is="nextPageUrl ? 'Link' : 'div'"
                :href="nextPageUrl"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white dark:bg-gray-700 hover:text-gray-500 dark:border-gray-800 dark:text-gray-200"
            >Next
            </component>
        </div>
        <div
            v-if="pagination.total > 0"
            class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
        >
            <div>
            <slot />
                <p class="hidden sm:inline text-sm text-gray-700 dark:text-gray-200 font-medium">
                    {{ pagination.from }} to {{ pagination.to }} of {{ pagination.total }} results
                </p>
            </div>
            <div>
                <nav
                    class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                >
                    <component
                        :is="previousPageUrl ? 'Link' : 'div'"
                        :href="previousPageUrl"
                        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500 dark:text-gray-200 dark:hover:bg-gray-500"
                    >
                        <span class="sr-only">Previous</span>
                        <ChevronLeftIcon class="h-5 w-5"/>
                    </component>

                    <div v-for="(link, key) in pagination.links" :key="key">
                        <slot name="link">
                            <component
                                v-if="!isNaN(link.label) || link.label === '...'"
                                :is="link.url ? 'Link' : 'div'"
                                :href="link.url"
                                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700  dark:hover:bg-gray-500 dark:text-gray-200 dark:border-gray-500 dark:text-gray-200"
                                :class="{'hover:bg-gray-50 dark:bg-gray-800': link.url && !link.active, 'bg-gray-200 dark:bg-gray-700': link.active, 'dark:bg-gray-700': link.label === '...'}"
                            >{{ link.label }}
                            </component>
                        </slot>
                    </div>

                    <component
                        :is="nextPageUrl ? 'Link' : 'div'"
                        :href="nextPageUrl"
                        class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:text-gray-200 dark:hover:bg-gray-500"
                    >
                        <span class="sr-only">Next</span>
                        <ChevronRightIcon class="h-5 w-5" />
                    </component>
                </nav>
            </div>
        </div>
    </nav>
    <p v-if="pagination.total == 0" class="p-4 text-center">No results found</p>
</template>

<script>
import {Link} from '@inertiajs/vue3'

import {ChevronRightIcon, ChevronLeftIcon} from '@heroicons/vue/20/solid';
export default {
    components:{
        Link,
        ChevronRightIcon,
        ChevronLeftIcon
    },
    props: {
        pagination: {
            type: Object
        },
    },
    computed: {
        hasPagination() {
            return Object.keys(this.pagination).length > 0;
        },


        previousPageUrl() {
            if ("prev_page_url" in this.pagination) {
                return this.pagination.prev_page_url;
            }

            if ("links" in this.pagination) {
                return this.pagination.links.prev;
            }
        },

        nextPageUrl() {
            if ("next_page_url" in this.pagination) {
                return this.pagination.next_page_url;
            }

            if ("links" in this.pagination) {
                return this.pagination.links.next;
            }
        },
    },


};
</script>
