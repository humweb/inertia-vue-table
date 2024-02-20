# Inertia Vue Table

# Getting Started

This section will help you set up the frontend components

## Step. 1: install package

Laravel install
```bash
composer require humweb\inertia-table
```
or

Go Adapter install

```bash
go get github.com/humweb/inertia-go
```
Checkout https://github.com/humweb/inertia-go for mor info

---

frontend package
```sh
// Laravel
npm i inertia-vue-table@1.04

// Go
npm i inertia-vue-table
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
/>

```


## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
