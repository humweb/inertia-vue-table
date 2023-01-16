# Table Resources

To be able to use Inertia Tables you first need to define a `Resource` class

## Defining Resources
Your Resources should extend `Humweb\Table\Resource` class
```php
class UserResource extends Resource
{
    protected $model = User::class;
}
````

## Field Definition
```php
public function fields(): FieldCollection
{
    return new FieldCollection([
        ID::make('ID', 'id')->sortable()->searchable(),
        Text::make('Name', 'name')->sortable()->searchable(),
        Text::make('Email')->sortable()->searchable(),
        Text::make('Created', 'created_at')->sortable()->searchable(),
        Text::make('Updated', 'updated_at')->sortable()->searchable(),
    ]);
}
````

## Transforms for display
```php
public function transform()
{
    return fn($user) => [
        'id' => $user->id,
        'name' => $user->name,
        'email' => $user->email,
        'created_at' => $user->created_at->format('Y-m-d'),
        'updated_at' => $user->updated_at->format('Y-m-d'),
    ];
}
````

## Single field filters
```php
public function filters()
{
    return new FilterCollection([
        TextFilter::make('name')
            ->fullSearch()
            ->rules('alpha'),
    ]);
}
````

## Global filter
```php
public function globalFilter($query, $value)
{
    return $query->where(function ($query) use ($value) {
        $query->when(is_numeric($value), function ($query, $bool) use ($value) {
            $query->orWhere('id', $value);
        })->when(!is_numeric($value), function ($query, $bool) use ($value) {
            $query->orWhere('name', 'like', "%{$value}%")
                ->orWhere('email', 'like', "%{$value}%");
        });
    });
}
```
