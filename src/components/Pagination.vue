<template>
    <nav
        class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 dark:border-gray-700 md:rounded-b-lg dark:bg-gray-800 dark:text-gray-200"
        v-if="hasPagination && pagination.total > 0"
    >

        <div class="flex-1 flex justify-between sm:hidden">
            <component
                :is="previousPageUrl ? 'Link' : 'div'"
                :href="previousPageUrl"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 dark:border-gray-800 dark:text-gray-200"
            >{{ translations.previous }}
            </component>
            <component
                :is="nextPageUrl ? 'Link' : 'div'"
                :href="nextPageUrl"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 dark:border-gray-800 dark:text-gray-200"
            >{{ translations.next }}
            </component>
        </div>
        <div
            v-if="pagination.total > 0"
            class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
        >
            <div>
                <p class="hidden lg:block text-sm text-gray-700 dark:text-gray-200">
                    <span class="font-medium">{{ pagination.from }}</span>
                    {{ translations.to }}
                    <span class="font-medium">{{ pagination.to }}</span>
                    {{ translations.of }}
                    <span class="font-medium">{{ pagination.total }}</span>
                    {{ translations.results }}
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
                        <span class="sr-only">{{ translations.previous }}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
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
                        <span class="sr-only">{{ translations.next }}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </component>
                </nav>
            </div>
        </div>
    </nav>
    <p v-if="pagination.total == 0" class="p-4 text-center">{{ translations.no_results_found }}</p>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue3'
export default {
    components:{
        Link
    },
    props: {
        pagination: {
            type: Object
        },
    },
    data() {
        return {
            defaultTranslations: {
                no_results_found: "No results found",
                previous: "Previous",
                next: "Next",
                to: "to",
                of: "of",
                results: "results",
            },


        }
    },
    methods:{
        setTranslations(translations) {
            this.defaultTranslations = translations;
        },
    },
    computed: {
        translations() {
            return this.defaultTranslations;
        },

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
