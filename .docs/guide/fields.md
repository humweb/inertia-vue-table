# Fields

Description of available table props.

## Field types
* ID
* Text
* Action

## Fluent API 

### Sortable 
#### `sortable(?Sort $class = null)`

Sortable allows you to enable sorting on a field.
You may also pass a class that implements `Humweb\Table\Sorts`.
The package ship with `BasicSort`, `NullLastSort`, and `CallbackSort`.
If no parameter is passed the default `BasicSort` will be used.

---

### Nullable 
#### `visible(bool $bool)`

Allows you to hide the field's column.

---

### Searchable
#### `searchable()`
The searchable setter tells the frontend that this field is searchable.
This will add an option to the search filter to allow the user to select the field for searching.

---

### Actions
#### `actions(array $actions)`
This functionality is only for the `Actions` field.
The actions setter allows you to build an actions menu for the record.
The params are used to build the route.
```php
->actions([
    ['label' => 'Edit', 'route' => 'admin.roles.edit', 'params' => ['id']]
]);
```
