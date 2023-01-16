import{_ as s,c as a,o as n,a as l}from"./app.ffad3f7b.js";const i=JSON.parse('{"title":"Table Resources","description":"","frontmatter":{},"headers":[{"level":2,"title":"Defining Resources","slug":"defining-resources","link":"#defining-resources","children":[]},{"level":2,"title":"Field Definition","slug":"field-definition","link":"#field-definition","children":[]},{"level":2,"title":"Transforms for display","slug":"transforms-for-display","link":"#transforms-for-display","children":[]},{"level":2,"title":"Single field filters","slug":"single-field-filters","link":"#single-field-filters","children":[]},{"level":2,"title":"Global filter","slug":"global-filter","link":"#global-filter","children":[]}],"relativePath":"guide/resources.md"}'),p={name:"guide/resources.md"},o=l(`<h1 id="table-resources" tabindex="-1">Table Resources <a class="header-anchor" href="#table-resources" aria-hidden="true">#</a></h1><p>To be able to use Inertia Tables you first need to define a <code>Resource</code> class</p><h2 id="defining-resources" tabindex="-1">Defining Resources <a class="header-anchor" href="#defining-resources" aria-hidden="true">#</a></h2><p>Your Resources should extend <code>Humweb\\Table\\Resource</code> class</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserResource</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Resource</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">model </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#89DDFF;">::</span><span style="color:#F78C6C;">class</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="field-definition" tabindex="-1">Field Definition <a class="header-anchor" href="#field-definition" aria-hidden="true">#</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fields</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FieldCollection</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FieldCollection</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">ID</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">sortable</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">searchable</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Text</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">sortable</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">searchable</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Text</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">sortable</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">searchable</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Text</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Created</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">created_at</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">sortable</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">searchable</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Text</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Updated</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">updated_at</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">sortable</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">searchable</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="transforms-for-display" tabindex="-1">Transforms for display <a class="header-anchor" href="#transforms-for-display" aria-hidden="true">#</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">transform</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">fn</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">email</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">created_at</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">created_at</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Y-m-d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">updated_at</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">updated_at</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Y-m-d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="single-field-filters" tabindex="-1">Single field filters <a class="header-anchor" href="#single-field-filters" aria-hidden="true">#</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">filters</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FilterCollection</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">TextFilter</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">fullSearch</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">rules</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alpha</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="global-filter" tabindex="-1">Global filter <a class="header-anchor" href="#global-filter" aria-hidden="true">#</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">globalFilter</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">where</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">when</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">is_numeric</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">bool</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">orWhere</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">})-&gt;</span><span style="color:#82AAFF;">when</span><span style="color:#89DDFF;">(!</span><span style="color:#82AAFF;">is_numeric</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">bool</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">orWhere</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">like</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">orWhere</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">like</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,13),e=[o];function t(r,c,D,F,y,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
