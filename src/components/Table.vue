<template>
    <div>
        <div
            class="flex md:space-x-4 md:space-y-0 space-y-4 my-4 flex-col md:flex-row bg-white dark:bg-gray-800 p-6 shadow dark:shadow-none rounded-lg">
            <slot
                name="tableGlobalSearch"
                :search="table.search"
                :changeGlobalSearchValue="updateGlobalSearchValue"
            >
                <div v-if="table.search && table.search.global"
                     class="flex-grow min-w-min">
                    <TableGlobalSearch
                        :value="table.search.global.value"
                        :on-change="updateGlobalSearchValue"
                    />
                </div>
            </slot>


            <slot
                name="tableFilter"
                :hasFilters="hasFilters"
                :filters="table.filters"
                :changeFilterValue="updateFilterValue"
            >
                <TableFilter
                    v-if="hasFilters"
                    :filters="table.filters"
                    :errors="errors"
                    :on-change="updateFilterValue"/>
            </slot>
            <slot
                name="tableAddSearchRow"
                :hasSearchRows="hasSearchRows"
                :search="table.search"
                :onAdd="enableSearch"
            >
                <TableAddSearchRow
                    v-if="hasSearchRows"
                    :rows="table.search"
                    :on-add="enableSearch"
                />
            </slot>
            <slot
                name="tableColumns"
                :hasColumns="hasColumns"
                :columns="table.columns"
                :changeColumnStatus="updateColumnVisibility"
            >
                <TableColumns v-if="hasColumns" :columns="table.columns" :on-change="updateColumnVisibility"/>
            </slot>
        </div>

        <slot
            name="tableSearchRows"
            :hasSearchRows="hasSearchRows"
            :search="table.search"
            :removeSearch="removeSearch"
            :changeSearchValue="updateSearchValue"
        >
            <TableSearchRows
                ref="rows"
                v-if="hasSearchRows"
                :rows="table.search"
                :on-remove="removeSearch"
                :on-change="updateSearchValue"
            />
        </slot>

        <slot name="table">
            <div class="mt-8 flex flex-col">
                <div class="overflow-x-auto">
                    <div class="overflow-x">
                        <div
                            class="ring-1 dark:shadow-none ring-black ring-opacity-5 overflow-scroll w-full md:rounded-t-lg">
                            <table class="table table-responsive-xl">
                                <thead class="bg-gray-50 dark:bg-gray-800 dark:text-gray-200">
                                <slot name="head">
                                    <tr>
                                        <HeaderCell
                                            v-for="column in table.columns"
                                            :cell="column"
                                            :sort="table.sort" @sort="handleSort"
                                            class="dark:bg-gray-800">
                                            {{ column.name }}
                                        </HeaderCell>
                                        <th v-if="$slots.action || actionColumn" class="dark:bg-gray-800"></th>
                                    </tr>
                                </slot>
                                </thead>

                                <tbody
                                    class="bg-white text-gray-800 divide-y divide-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:divide-gray-800">
                                <slot name="body" :records="records" :columns="table.columns">
                                    <tr v-for="record in records">
                                        <td v-for="field in table.columns" v-show="field.visible">
                                            {{ dotGet(record, field.attribute) }}
                                        </td>
                                        <slot name="action" :record="record"></slot>
                                    </tr>
                                </slot>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </slot>

        <slot name="pagination">
            <Pagination :pagination="pagination"/>
        </slot>
    </div>
</template>

<script>
import Pagination from './Pagination.vue';
import TableAddSearchRow from './filters/TableAddSearchRow.vue';
import TableColumns from './TableColumns.vue';
import TableFilter from './filters/TableFilter.vue';
import TableGlobalSearch from './filters/TableGlobalSearch.vue';
import TableSearchRows from './filters/TableSearchRows.vue';
import get from 'lodash/get';

import HeaderCell from './HeaderCell.vue';

export default {
    components: {
        Pagination,
        TableAddSearchRow,
        TableColumns,
        TableFilter,
        TableGlobalSearch,
        TableSearchRows,
        HeaderCell
    },
    mixins: [{
        methods: {dotGet: get},
    }],
    props: {
        modelValue: Object,
        pagination: {
            type: Object,
            default: () => {
                return {};
            },
            required: false,
        },

        records: {
            type: Object,
            default: () => {
                return {};
            },
            required: false,
        },

        onUpdate: {
            type: Function,
            required: false,
        },
        errors: {
            type: Object,
            default() {
                return {};
            },
        },
        actionColumn: Boolean,
    },
    data() {
        return {
            table: this.modelValue,
        };
    },


    methods: {
        handleSort(key) {
            this.$emit('sort', key);

        },
        removeSearch(key) {
            this.table.search[key].enabled = false;
            this.table.search[key].value = null;
        },

        enableSearch(key) {

            this.table.search[key].enabled = true;

            this.$nextTick(() => {
                this.$refs.rows.focus(key);
            });
        },

        /**
         * Update search values
         *
         * @param key
         * @param value
         */
        updateSearchValue(key, value) {
            this.table.search[key].value = value;
        },

        /**
         * Update global search value
         *
         * @param value
         */
        updateGlobalSearchValue(value) {
            this.updateSearchValue('global', value);
        },

        /**
         * Update filter values
         *
         * @param key
         * @param value
         */
        updateFilterValue(key, value) {
            this.table.filters[key].value = value;
        },

        /**
         * Update column visibility
         *
         * @param {string} column
         * @param {boolean} status
         */
        updateColumnVisibility(column, status) {
            this.table.columns[column].visible = status;
        },
    },

    watch: {
        table: {
            deep: true,
            handler(value, old) {

                if (this.onUpdate) {
                    this.$emit('modelValue:input', this.table);
                }
            },
        },
    },

    computed: {
        hasFilters() {
            return Object.keys(this.table.filters || {}).length > 0;
        },

        hasColumns() {
            return Object.keys(this.table.columns || {}).length > 0;
        },

        hasSearchRows() {
            return Object.keys(this.table.search || {}).length > 0;
        },


        onlyData() {
            if (this.hasFilters || this.hasColumns || this.hasSearchRows) {
                return false;
            }

            if (!this.table.search) {
                return true;
            }

            return !this.table.search.global;
        },
    },
};

</script>
