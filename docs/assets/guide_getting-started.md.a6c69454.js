import{_ as s,c as a,o as n,a as e}from"./app.00cb1905.js";const C=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Step. 1: install package","slug":"step-1-install-package","link":"#step-1-install-package","children":[]},{"level":2,"title":"Step. 2: Import component and mixin","slug":"step-2-import-component-and-mixin","link":"#step-2-import-component-and-mixin","children":[]},{"level":2,"title":"Step. 3: Add component to your template","slug":"step-3-add-component-to-your-template","link":"#step-3-add-component-to-your-template","children":[]}],"relativePath":"guide/getting-started.md"}'),t={name:"guide/getting-started.md"},l=e(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><p>This section will help you set up the frontend components</p><h2 id="step-1-install-package" tabindex="-1">Step. 1: install package <a class="header-anchor" href="#step-1-install-package" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">humweb</span><span style="color:#A6ACCD;">\\i</span><span style="color:#C3E88D;">nertia-table</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">inertia-vue-table</span></span>
<span class="line"></span></code></pre></div><h2 id="step-2-import-component-and-mixin" tabindex="-1">Step. 2: Import component and mixin <a class="header-anchor" href="#step-2-import-component-and-mixin" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Table</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">HasInertiaTable</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">inertia-vue-table</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Add mixin to your component</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">mixins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [HasInertiaTable]</span></span>
<span class="line"></span></code></pre></div><h2 id="step-3-add-component-to-your-template" tabindex="-1">Step. 3: Add component to your template <a class="header-anchor" href="#step-3-add-component-to-your-template" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Table</span></span>
<span class="line"><span style="color:#89DDFF;">    :records=&quot;records&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    :pagination=&quot;pagination&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tableData</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    @sort=&quot;sortBy&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,10),p=[l];function o(c,i,r,d,y,D){return n(),a("div",null,p)}const h=s(t,[["render",o]]);export{C as __pageData,h as default};
