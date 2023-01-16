# Table Slots

Description of available table slots.

## Slot: head

| Props       | Type     | Description                        |
|:------------|:---------|:-----------------------------------|
| columns     | Array    | Collection of column definitions.  |
| sortHandler | Function | Function to handle sorting columns |

::: details Code example
```vue-html
<Table>
    <template #head="{columns, sortHandler}">
        <tr>
            <HeaderCell
                v-for="column in columns"
                :cell="column"
                :sort="tableData.sort"
                @sort="sortHandler"
                class="dark:bg-gray-800">
                {{ column.name }}
            </HeaderCell>
            <th>Actions</th>
        </tr>
    </template>
</Table>
```
:::
## Slot: body

| Props   | Type  | Description                       |
|:--------|:------|:----------------------------------|
| records | Array | Collection of table records       |
| columns | Array | Collection of column definitions. |

::: details Code example
```vue-html
<Table>
    <template #body="{records, columns}">
        <tr v-for="record in records">
            <td v-for="field in tableData.columns" v-show="field.visible">
                {{ record[field.attribute] }}
            </td>
            <td><button>Edit</button></td>
        </tr>
    </template>
</Table>
```
:::

## Slot: action

| Props                   | Type        | Description           |
|:------------------------|:------------|:----------------------|
| record                  | Object      | The current rows data |

::: details Code example
```vue-html
<Table>
    <template #action="{row}">
        <td>
            <button @edit="editRow(row.id)">Edit</button>  
        </td>
    </template>
</Table>
```
:::


## Slot: globalSearch

| Props                   | Type        | Description                                                              |
|:------------------------|:------------|:-------------------------------------------------------------------------|
| search                  | Object      | Table search object. `table.search.global.value`                         |
| changeGlobalSearchValue | Function    | This function allows you to update the global search value on the table. |


## Slot: filters

| Props             | Type     | Description                                                             |
|:------------------|:---------|:------------------------------------------------------------------------|
| hasFilters        | Function | Helper to check if we have any filters                                  |
| filters           | Array    | Collection of filter definitions                                        |
| changeFilterValue | Function | This function allows you to update the filter value on the table.       |


## Slot: addSearch

| Props         | Type     | Description                                          |
|:--------------|:---------|:-----------------------------------------------------|
| hasSearchRows | Function | Helper to check if we have any enabled search fields |
| search        | Array    | Collection of search fields                          |
| onAdd         | Function | This function allows enable a fields search field.   |


## Slot: toggleColumns

| Props      | Type     | Description                                          |
|:-----------|:---------|:-----------------------------------------------------|
| hasColumns | Function | Helper to check if we have any enabled search fields |
| columns    | Array    | Collection of column definitions                     |
| change     | Function | This function allows enable a fields search field.   |


## Slot: searchRows

| Props        | Type     | Description                                          |
|:-------------|:---------|:-----------------------------------------------------|
| hasSearches  | Function | Helper to check if we have any enabled search fields |
| search       | Array    | Collection of search fields                          |
| removeSearch | Function | This function allows reamove a search field.         |
| updateValue  | Function | This function allows update a serahc fields value.   |

