import forEach from 'lodash-es/forEach';
import isEqual from 'lodash-es/isEqual';
import debounce from 'lodash-es/debounce';

export default {
    props: {
        tableProps: {
            type: Object,
            required: true,
        },
        records: {
            type: Array,
        },
        pagination: Object,
        errors: {
            type: Object,
            default() {
                return {};
            },
        },
    },

    data() {
        const tableData = {
            page: this.tableProps.page || 1,
            sort: this.tableProps.sort || '',
            perPage: this.tableProps.perPage || 15,
            filters: this.tableProps.filters,
            columns: this.tableProps.columns || [],
            search: this.tableProps.search || {},
        };

        return {
            tableData,
            tableDataIteration: 0,

        };
    },

    methods: {

        getFilterForQuery(search, filters) {
            let filtersWithValue = {};

            const filtersAndSearch = Object.assign({}, filters, search);

            forEach(filtersAndSearch, (filterOrSearch) => {

                if (filterOrSearch.value) {
                    if (filterOrSearch.key in this.errors) {
                        filtersWithValue[filterOrSearch.key] = '';
                    } else {
                        filtersWithValue[filterOrSearch.key] = filterOrSearch.value;
                    }
                }
            });

            return filtersWithValue;
        },

        sortBy(column) {
            this.tableData.page = 1;

            // Clear sort
            if (this.tableData.sort === `-${column}`) {
                this.tableData.sort = null;
            }
            else {
                this.tableData.sort = this.tableData.sort === column ? `-${column}` : column;
            }
        },


        concatHidden(columns) {
            return columns.filter(c => c.visible == false).map((c) => c.attribute).join(',');
        },
        requestData() {
            if (this.$inertia) {

                let data = {};
                let hiddenColumns = this.concatHidden(this.tableData.columns);
                for (let i in this.tableData) {

                    // Ignore empty data
                    if ((this.tableData[i] == '' || this.tableData[i] == null || typeof this.tableData[i] == 'undefined')) {
                        continue;
                    }

                    if (i == 'columns' && hiddenColumns !== '') {
                        data.hidden = hiddenColumns;
                    }
                    if (i == 'search') {
                        let keys = Object.keys(this.tableData.search);

                        if (keys.length) {
                            let search = {};
                            keys.forEach((key) => {
                                let value = this.tableData.search[key].value;
                                if (value != '' && value != null) {
                                    search[key] = value;
                                }
                            });
                            if (Object.keys(search).length > 0) {
                                data.search = search;
                            }
                        }
                    } else if (i == 'filters' && Array.isArray(this.tableData.filters)) {
                        this.tableData.filters.filter((v) => v.value).forEach((filter) => {
                            if (!('filters' in data)) {
                                data.filters = {};
                            }
                            data.filters[filter.field] = filter.value;
                        });
                    } else if (i !== 'columns') {
                        data[i] = this.tableData[i];
                    }
                }
                this.$inertia.get(location.pathname, data, {
                    replace: true,
                    preserveState: true,
                    preserveScroll: true,
                });
            }
        },
    },

    computed: {},

    watch: {
        tableData: {
            deep: true,
            handler: debounce(function(newVal, oldVal) {
                this.requestData();
            }, 350),
        },
    },
};

