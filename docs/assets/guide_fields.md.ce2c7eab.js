import{_ as e,c as a,o as l,a as t}from "./app.ffad3f7b.js";const p=JSON.parse('{"title":"Fields","description":"","frontmatter":{},"headers":[{"level":2,"title":"Field types","slug":"field-types","link":"#field-types","children":[]},{"level":2,"title":"Fluent API","slug":"fluent-api","link":"#fluent-api","children":[{"level":3,"title":"Sortable","slug":"sortable","link":"#sortable","children":[]},{"level":3,"title":"Nullable","slug":"nullable","link":"#nullable","children":[]},{"level":3,"title":"Searchable","slug":"searchable","link":"#searchable","children":[]}]}],"relativePath":"guide/fields.md"}'),i={name:"guide/fields.md"},s=t('<h1 id="fields" tabindex="-1">Fields <a class="header-anchor" href="#fields" aria-hidden="true">#</a></h1><p>Description of available table props.</p><h2 id="field-types" tabindex="-1">Field types <a class="header-anchor" href="#field-types" aria-hidden="true">#</a></h2><ul><li>ID</li><li>Text</li></ul><h2 id="fluent-api" tabindex="-1">Fluent API <a class="header-anchor" href="#fluent-api" aria-hidden="true">#</a></h2><h3 id="sortable" tabindex="-1">Sortable <a class="header-anchor" href="#sortable" aria-hidden="true">#</a></h3><h4 id="sortable-sort-class-null" tabindex="-1"><code>sortable(?Sort $class = null)</code> <a class="header-anchor" href="#sortable-sort-class-null" aria-hidden="true">#</a></h4><p>Sortable allows you to enable sorting on a field. You may also pass a class that implements <code>Humweb\\Table\\Sorts</code>. The package ship with <code>BasicSort</code>, <code>NullLastSort</code>, and <code>CallbackSort</code>. If no parameter is passed the default <code>BasicSort</code> will be used.</p><hr><h3 id="nullable" tabindex="-1">Nullable <a class="header-anchor" href="#nullable" aria-hidden="true">#</a></h3><h4 id="visible-bool-bool" tabindex="-1"><code>visible(bool $bool)</code> <a class="header-anchor" href="#visible-bool-bool" aria-hidden="true">#</a></h4><p>Allows you to hide the field&#39;s column.</p><hr><h3 id="searchable" tabindex="-1">Searchable <a class="header-anchor" href="#searchable" aria-hidden="true">#</a></h3><h4 id="searchable-1" tabindex="-1"><code>searchable()</code> <a class="header-anchor" href="#searchable-1" aria-hidden="true">#</a></h4><p>The searchable setter tells the frontend that this field is searchable. This will add an option to the search filter to allow the user to select the field for searching.</p>',16),r=[s];function d(o, h, c, n, b, u){return l(),a("div",null,r)}const _=e(i,[["render",d]]);export{p as __pageData,_ as default};
