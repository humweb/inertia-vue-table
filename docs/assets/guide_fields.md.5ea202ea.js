import{_ as a,c as e,o as s,a as l}from"./app.00cb1905.js";const b=JSON.parse('{"title":"Fields","description":"","frontmatter":{},"headers":[{"level":2,"title":"Field types","slug":"field-types","link":"#field-types","children":[]},{"level":2,"title":"Fluent API","slug":"fluent-api","link":"#fluent-api","children":[{"level":3,"title":"Sortable","slug":"sortable","link":"#sortable","children":[]},{"level":3,"title":"Nullable","slug":"nullable","link":"#nullable","children":[]},{"level":3,"title":"Searchable","slug":"searchable","link":"#searchable","children":[]},{"level":3,"title":"Actions","slug":"actions","link":"#actions","children":[]}]}],"relativePath":"guide/fields.md"}'),o={name:"guide/fields.md"},n=l(`<h1 id="fields" tabindex="-1">Fields <a class="header-anchor" href="#fields" aria-hidden="true">#</a></h1><p>Description of available table props.</p><h2 id="field-types" tabindex="-1">Field types <a class="header-anchor" href="#field-types" aria-hidden="true">#</a></h2><ul><li>ID</li><li>Text</li><li>Action</li></ul><h2 id="fluent-api" tabindex="-1">Fluent API <a class="header-anchor" href="#fluent-api" aria-hidden="true">#</a></h2><h3 id="sortable" tabindex="-1">Sortable <a class="header-anchor" href="#sortable" aria-hidden="true">#</a></h3><h4 id="sortable-sort-class-null" tabindex="-1"><code>sortable(?Sort $class = null)</code> <a class="header-anchor" href="#sortable-sort-class-null" aria-hidden="true">#</a></h4><p>Sortable allows you to enable sorting on a field. You may also pass a class that implements <code>Humweb\\Table\\Sorts</code>. The package ship with <code>BasicSort</code>, <code>NullLastSort</code>, and <code>CallbackSort</code>. If no parameter is passed the default <code>BasicSort</code> will be used.</p><hr><h3 id="nullable" tabindex="-1">Nullable <a class="header-anchor" href="#nullable" aria-hidden="true">#</a></h3><h4 id="visible-bool-bool" tabindex="-1"><code>visible(bool $bool)</code> <a class="header-anchor" href="#visible-bool-bool" aria-hidden="true">#</a></h4><p>Allows you to hide the field&#39;s column.</p><hr><h3 id="searchable" tabindex="-1">Searchable <a class="header-anchor" href="#searchable" aria-hidden="true">#</a></h3><h4 id="searchable-1" tabindex="-1"><code>searchable()</code> <a class="header-anchor" href="#searchable-1" aria-hidden="true">#</a></h4><p>The searchable setter tells the frontend that this field is searchable. This will add an option to the search filter to allow the user to select the field for searching.</p><hr><h3 id="actions" tabindex="-1">Actions <a class="header-anchor" href="#actions" aria-hidden="true">#</a></h3><h4 id="actions-array-actions" tabindex="-1"><code>actions(array $actions)</code> <a class="header-anchor" href="#actions-array-actions" aria-hidden="true">#</a></h4><p>This functionality is only for the <code>Actions</code> field. The actions setter allows you to build an actions menu for the record. The params are used to build the route.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">actions</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Edit</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">route</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">admin.roles.edit</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">params</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]]</span></span>
<span class="line"><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span></code></pre></div>`,21),t=[n];function r(i,c,p,d,h,D){return s(),e("div",null,t)}const y=a(o,[["render",r]]);export{b as __pageData,y as default};
