<script setup lang="ts">
import Pagination from './Pagination.vue';
import SearchColumnDropdown from './filters/SearchColumnDropdown.vue';
import ColumnVisibilityToggles from './ColumnVisibilityToggles.vue';
import CustomFilters from './filters/CustomFilters.vue';
import GlobalSearch from './filters/GlobalSearch.vue';
import SearchFields from './filters/SearchFields.vue';
import THeadCell from './THeadCell.vue';
import TBodyCell from './TBodyCell.vue';
import PerPageSelect from './PerPageSelect.vue';
import filter from 'lodash-es/filter';
import { computed, nextTick, ref, useSlots, useTemplateRef, watch } from 'vue';
import { router } from '@inertiajs/vue3';
import debounce from 'lodash-es/debounce';

const modelValue = defineModel<any>();

interface Props {
  records: any[] | null;
  pagination: any;
  errors?: any;
  hideFilters?: boolean;
  filterWrapperClass?: string;
}

const {
  records = [],
  pagination,
  errors = [],
  hideFilters = false,
  filterWrapperClass = '',
} = defineProps<Props>();

const $slots = useSlots();
const rowsRef = useTemplateRef<InstanceType<typeof SearchFields>>('rows');

const table = ref(modelValue.value);

const hasFilters = computed(() => Object.keys(table.value.filters || {}).length > 0);

const hasColumns = computed(() => filter(table.value.columns, (row) => row.visibility).length > 0);

const hasSearchRows = computed(
  () => filter(table.value.search, (row) => row.field !== 'global').length > 0,
);

function handleSort(column: string) {
  table.value.page = 1;

  // Clear sort
  if (table.value.sort === `-${column}`) {
    table.value.sort = null;
  } else {
    table.value.sort = table.value.sort === column ? `-${column}` : column;
  }
}

function changePage(p: number | string) {
  table.value.page = p;
}

function removeSearch(key: string) {
  table.value.search[key].enabled = false;
  table.value.search[key].value = null;
}

async function enableSearch(key: string) {
  table.value.search[key].enabled = true;

  await nextTick();

  //@ts-ignore
  rowsRef.value?.focus(key);
}

/**
 * Update search values
 *
 * @param key
 * @param value
 */
function updateSearchValue(key: string, value: string) {
  table.value.search[key].value = value;
}

/**
 * Update global search value
 *
 * @param value
 */
function updateGlobalSearchValue(value: string) {
  updateSearchValue('global', value);
}

/**
 * Update filter values
 *
 * @param key
 * @param value
 */
function updateFilterValue(key: string, value: string) {
  table.value.filters[key].value = value;
}

/**
 * Update column visibility
 *
 * @param {string} column
 * @param {boolean} status
 */
function updateColumnVisibility(column: string, status: boolean) {
  table.value.columns[column].visible = status;
}

function concatHidden(columns: any[]) {
  return columns
    .filter((c) => !c.visible)
    .map((c) => c.attribute)
    .join(',');
}

function requestData() {
  let data: any = {};
  let hiddenColumns = concatHidden(table.value.columns);
  for (let i in table.value) {
    // Ignore empty data
    if (table.value[i] === '' || table.value[i] == null || typeof table.value[i] == 'undefined') {
      continue;
    }

    if (i === 'columns' && hiddenColumns !== '') {
      data.hidden = hiddenColumns;
    }
    if (i === 'search') {
      let keys = Object.keys(table.value.search);

      if (keys.length) {
        let search: any = {};
        keys.forEach((key: string) => {
          let value = table.value.search[key].value;
          if (value !== '' && value != null) {
            search[key] = value;
          }
        });
        if (Object.keys(search).length > 0) {
          data.search = search;
        }
      }
    } else if (i === 'filters' && Array.isArray(table.value.filters)) {
      table.value.filters
        .filter((v: any) => v.value)
        .forEach((filter: any) => {
          if (!('filters' in data)) {
            data.filters = {};
          }
          data.filters[filter.field] = filter.value;
        });
    } else if (i !== 'columns') {
      data[i] = table.value[i];
    }
  }
  router.get(location.pathname, data, {
    replace: true,
    preserveState: true,
    preserveScroll: true,
  });
}

watch(
  table,
  debounce(() => requestData(), 500, { leading: true }),
  { deep: true },
);
</script>

<template>
  <div>
    <div
      v-if="!hideFilters"
      :class="[
        'flex md:space-x-4 md:space-y-0 space-y-4 flex-col md:flex-row mb-8',
        filterWrapperClass,
      ]">
      <slot name="globalSearch" :search="table.search" :updateSearchValue="updateGlobalSearchValue">
        <div v-if="table.search && table.search.global" class="flex-grow min-w-min">
          <GlobalSearch v-model="table.search.global.value" />
        </div>
      </slot>

      <div v-if="hasFilters || hasColumns" class="flex flex-row items-center space-x-4">
        <slot
          name="filters"
          :hasFilters="hasFilters"
          :filters="table.filters"
          :changeFilterValue="updateFilterValue">
          <CustomFilters
            v-if="hasFilters"
            :filters="table.filters"
            :errors="errors"
            :on-change="updateFilterValue" />
        </slot>
        <slot
          name="addSearch"
          :hasSearchRows="hasSearchRows"
          :search="table.search"
          :onAdd="enableSearch">
          <SearchColumnDropdown v-if="hasSearchRows" :rows="table.search" :on-add="enableSearch" />
        </slot>
        <slot
          name="toggleColumns"
          :hasColumns="hasColumns"
          :columns="table.columns"
          :change="updateColumnVisibility">
          <ColumnVisibilityToggles
            v-if="hasColumns"
            :columns="table.columns"
            :on-change="updateColumnVisibility" />
        </slot>
      </div>
    </div>

    <slot
      name="searchRows"
      :hasSearches="hasSearchRows"
      :search="table.search"
      :removeSearch="removeSearch"
      :updateValue="updateSearchValue">
      <SearchFields
        ref="rows"
        v-if="hasSearchRows"
        :rows="table.search"
        :on-remove="removeSearch"
        :on-change="updateSearchValue" />
    </slot>

    <slot
      name="table"
      :records="records"
      :columns="table.columns"
      :hasFilters="hasFilters"
      :filters="table.filters"
      :changeFilterValue="updateFilterValue">
      <div class="flex flex-col w-full overflow-x-scroll rounded-lg">
        <div class="w-full">
          <div class="w-full">
            <div class="ring-1 dark:shadow-none ring-black ring-opacity-5 w-full md:rounded-t-lg">
              <table class="table">
                <thead class="bg-gray-50 dark:bg-gray-700 rounded dark:text-gray-200">
                  <slot name="head" :columns="table.columns" :sortHandler="handleSort">
                    <tr>
                      <THeadCell
                        v-for="column in table.columns"
                        :cell="column"
                        :sort="table.sort"
                        @sort="handleSort"
                        class="dark:bg-gray-800" />
                      <th v-if="$slots.action"></th>
                    </tr>
                  </slot>
                </thead>

                <tbody
                  class="bg-white text-gray-800 divide-y divide-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:divide-gray-800 overflow-x-scroll">
                  <slot name="body" :records="records" :columns="table.columns">
                    <tr v-for="record in records">
                      <TBodyCell
                        v-for="field in table.columns"
                        v-show="field.visible"
                        :record="record"
                        :field="field" />
                      <slot name="action" :record="record" />
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
          <PerPageSelect v-model="table.perPage" />
        </div>
      </Pagination>
    </slot>
  </div>
</template>
