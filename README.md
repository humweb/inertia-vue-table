# Inertia Vue Table

# Getting Started

This section will help you set up the frontend components

## Step. 1: install package

```sh
$ composer install humweb\inertia-table
$ npm i inertia-vue-table
```

## Step. 2: Import component and mixin

```js
import {Table, HasInertiaTable} from 'inertia-vue-table';
```

Add mixin to your component

```js
mixins: [HasInertiaTable]
```

## Step. 3: Add component to your template

```html
 <Table
    :records="records"
    :pagination="pagination"
    v-model="tableData"
    @sort="sortBy"
    action-column
/>

```


## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
