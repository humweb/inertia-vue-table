# Table Props

Description of available table props.

## Table Props

| Prop         | Type/Default | Description                      |
|:-------------|:-------------|:---------------------------------|
| modelValue   | Object       | Table configuration schema       |
| records      | Array        | Records to display in table      |
| errors       | Object       | Errors for filters               |

## Table Schema Definition
This section describes the Table schema. The data is passed to table with `v-model` 

#### Fields:
* columns `Array`
* filters `Array`
* search `Object`
* page `Nmber`
* sort `String`
* perPage `Number`

### columns `Array`
```json
[
  {
    "component": "text-field",
    "attribute": "id",
    "name": "ID",
    "nullable": false,
    "sortable": true,
    "visible": true,
    "searchable": true,
    "value": null
  },
  {
    "component": "text-field",
    "attribute": "name",
    "name": "Name",
    "nullable": false,
    "sortable": true,
    "visible": true,
    "searchable": true,
    "value": null
  }
]
```

### rules `Array`
```json
[
  {
    "component": "text-filter",
    "field": "name",
    "label": "Name",
    "value": null,
    "rules": ["alpha"]
  }
]
```

### error `Object`

