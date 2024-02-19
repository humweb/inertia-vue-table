<template>
  <div>

    <div
        v-if="!hideFilters"
        class="flex md:space-x-4 md:space-y-0 space-y-4 flex-col md:flex-row ">
<!--      <div-->
<!--        v-if="!hideFilters"-->
<!--        class="flex md:space-x-4 md:space-y-0 space-y-4 my-4 flex-col md:flex-row bg-white dark:bg-gray-800 p-6 shadow dark:shadow-none rounded-lg">-->
      <slot
          name="globalSearch"
          :search="table.search"
          :updateSearchValue="updateGlobalSearchValue"
      >
        <div
            v-if="table.search && table.search.global"
            class="flex-grow min-w-min">
          <GlobalSearch
              v-model="table.search.global.value"
          />
        </div>
      </slot>


      <slot
          name="filters"
          :hasFilters="hasFilters"
          :filters="table.filters"
          :changeFilterValue="updateFilterValue"
      >

        <CustomFilters
            v-if="hasFilters"
            :filters="table.filters"
            :errors="errors"
            :on-change="updateFilterValue"/>
      </slot>
      <slot
          name="addSearch"
          :hasSearchRows="hasSearchRows"
          :search="table.search"
          :onAdd="enableSearch"
      >
        <SearchColumnDropdown
            v-if="hasSearchRows"
            :rows="table.search"
            :on-add="enableSearch"
        />
      </slot>
      <slot
          name="toggleColumns"
          :hasColumns="hasColumns"
          :columns="table.columns"
          :change="updateColumnVisibility"
      >
        <ColumnVisibilityToggles
            v-if="hasColumns"
            :columns="table.columns"
            :on-change="updateColumnVisibility"/>
      </slot>
    </div>

    <slot
        name="searchRows"
        :hasSearches="hasSearchRows"
        :search="table.search"
        :removeSearch="removeSearch"
        :updateValue="updateSearchValue"
    >
      <SearchFields
          ref="rows"
          v-if="hasSearchRows"
          :rows="table.search"
          :on-remove="removeSearch"
          :on-change="updateSearchValue"
      />
    </slot>

    <slot name="table">
      <div class="mt-8 flex flex-col w-full rounded-lg overflow-hidden">
        <div class="overflow-x-auto w-full">
          <div class="overflow-x w-full">
            <div
                class="ring-1 dark:shadow-none ring-black ring-opacity-5 overflow-x-scroll w-full md:rounded-t-lg">
              <table class="table">
                <thead class="bg-gray-50 dark:bg-gray-700 rounded dark:text-gray-200">
                <slot name="head" :columns="table.columns" :sortHandler="handleSort">
                  <tr>
                    <THeadCell
                        v-for="column in table.columns"
                        :cell="column"
                        :sort="table.sort"
                        @sort="handleSort"
                        class="dark:bg-gray-800"/>
                  </tr>
                </slot>
                </thead>

                <tbody
                    class="bg-white text-gray-800 divide-y divide-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:divide-gray-800">
                <slot name="body" :records="records" :columns="table.columns">
                  <tr v-for="record in records">
                    <TBodyCell
                        v-for="field in table.columns"
                        v-show="field.visible"
                        :record="record"
                        :field="field"/>
                    <slot name="action" :record="record"/>
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
      <Pagination :pagination="pagination" @change="changePage">
        <div class="inline-flex mr-4">
          <PerPageSelect v-model="table.perPage"/>
        </div>
      </Pagination>
    </slot>
  </div>
</template>

<script>
// import Pagination from './Pagination.vue';
import Pagination from './Pagination.vue';
import SearchColumnDropdown from './filters/SearchColumnDropdown.vue';
import ColumnVisibilityToggles from './ColumnVisibilityToggles.vue';
import CustomFilters from './filters/CustomFilters.vue';
import GlobalSearch from './filters/GlobalSearch.vue';
import SearchFields from './filters/SearchFields.vue';
import THeadCell from './THeadCell.vue';
import TBodyCell from './TBodyCell.vue';
import PerPageSelect from './PerPageSelect.vue';
import filter from "lodash-es/filter";


export default {
  components: {
    PerPageSelect,
    Pagination,
    SearchColumnDropdown,
    ColumnVisibilityToggles,
    CustomFilters,
    GlobalSearch,
    SearchFields,
    THeadCell,
    TBodyCell,
  },
  props: {
    modelValue: Object,

    records: {
      type: Array,
      default: () => {
        return [];
      },
      required: false,
    },
    pagination: {
      type: Object,
      default: () => {
        return {};
      },
      required: false,
    },
    errors: {
      type: Object,
      default() {
        return {};
      },
    },
    hideFilters: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      table: this.modelValue,
    };
  },


  methods: {
    handleSort(column) {
      // this.$emit('sort', key);
      this.table.page = 1;

      // Clear sort
      if (this.table.sort === `-${column}`) {
        this.table.sort = null;
      } else {
        this.table.sort = this.table.sort === column ? `-${column}` : column;
      }
    },
    changePage(p) {
      this.table.page = p
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
        this.$emit('modelValue:input', this.table);
      },
    },
  },

  computed: {
    hasFilters() {
      return Object.keys(this.table.filters || {}).length > 0;
    },

    hasColumns() {
      return filter(this.table.columns, (row) => row.visibility).length > 0;
      // return Object.keys(this.table.columns || {}).length > 0;
    },

    hasSearchRows() {
      return filter(this.table.search, (row) => row.field !== "global").length > 0;
      // return Object.keys(this.table.search || {}).length > 0;
    },
  },
};

</script>
