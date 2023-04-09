import{_ as u,a as f,b as g,c as y,d as b}from"./SearchBlock.10c805ba.js";import{a as x,f as w,r as p,b as k,c as r,h as _,o as i}from"./entry.c6e65efe.js";import"./helpers.75b0c43c.js";import"./nuxt-link.bce30875.js";const v={name:"AppDocs",layout:"apidocs-layout-markdown",transition:{name:"fade"},head(){if(this.isInfo)return{title:"[] - Info Docs",description:""};if(this.isComponents)return{title:"[] - Components Docs",description:""};const t=this.activeRoute["x-summary-"]??this.activeRoute.summary??"",n=this.activeRoute["x-description-"]??this.activeRoute.description??"";return{title:"["+this.file+"] - "+t,description:n}},setup(){{const t=w(),n=p(t.params.locale??t.meta.locale),a=p(t.params.type??t.meta.type),o=p(t.params.path??t.meta.path);return{currentLocale:n,type:a,path:o}}},async fetch(){const t=this.$nuxt.context;try{this.currentLocale=t.route.params.locale??t.route.meta[0].locale,this.type=t.route.params.type??t.route.meta[0].type,this.path=t.route.params.path??t.route.meta[0].path}catch(n){console.error(n),console.error(t.route)}},created(){this&&this.$fetch&&this.$fetch()},data(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Markdown Content",description:"Test case to show markdown support. For more info check specification (http://spec.openapis.org/oas/v3.0.3)",version:"1.0.0"},paths:{markdown:{get:{summary:"Markdown in Description.",description:`<p>Endpoint to create and initiate a pipeline.</p>
<h3 id="paragraph">Paragraph</h3>
<p>In a hole in the ground there lived a hobbit. Not a <strong>nasty</strong>, <em>dirty</em>, <code>wet</code> hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a <a href="https://en.wikipedia.org/wiki/Hobbit#Lifestyle" title="Hobbit lifestyles">hobbit-hole</a>, and that means comfort.</p>
<h3 id="horizontal-rule----">Horizontal Rule <code>---</code></h3>
<hr>
<h3 id="number-list">Number List</h3>
<ol>
<li>Install <code>node</code>.</li>
<li>Install <code>npm</code>.</li>
<li>Open your editor</li>
<li>Create a JavaScript file</li>
</ol>
<h3 id="blockquotes">Blockquotes</h3>
<blockquote>
<p>This is a sample OpenAPI spec to test the parsing of various markdown styles
(RapiDoc supports common-mark syntax)</p>
</blockquote>
<h3 id="buleted-list">Buleted List</h3>
<ul>
<li>Install <code>node</code>.</li>
<li>Install <code>npm</code>.</li>
<li>Open you editor</li>
<li>Create a JavaScript file</li>
</ul>
<h3 id="table">Table</h3>
<table>
<thead>
<tr>
<th>Heading 1</th>
<th align="left">Left-Justified</th>
<th align="center">Centered</th>
<th align="right">Right-Justified</th>
</tr>
</thead>
<tbody><tr>
<td>text</td>
<td align="left">text</td>
<td align="center">text</td>
<td align="right">text</td>
</tr>
<tr>
<td>text</td>
<td align="left">text</td>
<td align="center">text</td>
<td align="right">text</td>
</tr>
<tr>
<td>text</td>
<td align="left">text</td>
<td align="center">text</td>
<td align="right">text</td>
</tr>
</tbody></table>
<h3 id="code">Code</h3>
<pre><code>$ curl -X POST -is -u username:password
  -H &quot;Content-Type: application/json&quot; https://example.com
  -d &#x27;{
  &quot;target&quot;: {
    &quot;ref_type&quot;: &quot;branch&quot;,
    &quot;type&quot;: &quot;pipeline_ref_target&quot;,
    &quot;ref_name&quot;: &quot;master&quot;
  }&#x27;
}
</code></pre>
<h3 id="code-with-syntax-highlight">Code (with syntax highlight)</h3>
<pre><code class="hljs language-bash">$ curl -X POST -is -u username:password
  -H <span class="hljs-string">&quot;Content-Type: application/json&quot;</span> https://example.com
  -d <span class="hljs-string">&#x27;{
  &quot;target&quot;: {
    &quot;ref_type&quot;: &quot;branch&quot;,
    &quot;type&quot;: &quot;pipeline_ref_target&quot;,
    &quot;ref_name&quot;: &quot;master&quot;
  }&#x27;</span>
}
</code></pre>
<h3 id="use-html-in-markdown">Use HTML in markdown</h3>
<br>
<div style="color: white; background-color:SlateBlue; padding: 12px; border-radius:2px">
  Markdown do not support colors or fancy HTML designs. However, if you need you can put some html directly inside the markup with some inline styling.
  This box I designed using raw HTML inside the markdown
</div>
<br>
<div style="color:#bbb; background-color:#444; padding: 12px 0px 12px 12px;border-left: 5px solid #F06560;">
  <b style="color:#F06560">TIP</b>  Here is another one, done using HTML inside markdown with two different colors to make it appear like a TIP
</div>
<br>


<h3 id="images">Images</h3>
<p>Inline Images no-gap - <img src="https://picsum.photos/100" alt="appspot image filler"><img src="https://picsum.photos/100" alt="appspot image filler"></p>
<p>Inline Images Single space gap - <img src="https://picsum.photos/100" alt="appspot image filler">
<img src="https://picsum.photos/00" alt="appspot image filler"></p>
<p>Next Line Image</p>
<p><img src="https://picsum.photos/140x100.png" alt="appspot image filler"></p>
`,parameters:[{name:"full-name",in:"query",description:`<p>Field descriptions can contain <code>Markdown</code> (Markdown must be monospaced)<br/>
<strong>CONSTRAINTS</strong></p>
<pre><code> - At least 3 characters
 - Cannot have space
 - Cannot have number
 - First Letter must be capital
</code></pre>
`,required:!0,schema:{type:"string",minimum:3}},{name:"height",in:"query",description:"Height in `inches` (inches must be monospaced)",required:!0,schema:{type:"integer",format:"int32",minimum:12,maximum:120}},{name:"interests",in:"query",required:!0,description:`<p>Default is <code>hiking</code> (hiking must be monospaced)</p>
<table>
<thead>
<tr>
<th>Heading 1</th>
<th align="left">Left-Justified</th>
<th align="center">Centered</th>
<th align="right">Right-Justified</th>
</tr>
</thead>
<tbody><tr>
<td>text</td>
<td align="left">text</td>
<td align="center">text</td>
<td align="right">text</td>
</tr>
<tr>
<td>text</td>
<td align="left">text</td>
<td align="center">text</td>
<td align="right">text</td>
</tr>
<tr>
<td>text</td>
<td align="left">text</td>
<td align="center">text</td>
<td align="right">text</td>
</tr>
</tbody></table>
`,schema:{type:"array",minItems:1,maxItems:3,items:{type:"string",enum:["computers","hiking","swiming"],default:"hiking"}}}],responses:{200:{description:"Response Schema field contains `Markdown` contents  (Markdown must be monospaced)",content:{"application/json":{schema:{type:"object",description:"Description of `Person` object (Person must be monospaced)",properties:{fullName:{description:"Person&#x27;s Full name is made up of `firstName` and `lastName` (firstName and lastName must be mono-spaced).",type:"object",properties:{firstName:{description:"_First name_ (First name should be italics)",type:"string"},lastName:{description:"`Last name` (last name must be monospaced)\n",type:"string"}}},hobbies:{type:"array",description:"list of words separated by `comma` (comma should be monospaced).",items:{type:"string"}},dependentNames:{type:"array",description:`<p>Array of <strong>Dependents</strong> (Dependents must be bold).</p>
`,items:{type:"object",description:"Full Name Object is made up of `firstName` and `lastName` (firstName and lastName must be mono-spaced).",properties:{fullName:{description:`<p>Parts of <strong>First Name</strong> (First Name must be bold)</p>
`,type:"object",properties:{firstName:{description:"Dependent First Name",type:"string"},lastName:{description:"Dependent Last Name",type:"string"}}}}}}}}}},headers:{Link:{required:!0,schema:{type:"string"},description:`<p>Pagination links are included in the Link header of responses.
It is important to follow these Link header values instead of constructing your own URLs as query parameters or cursor formats may change without notice.</p>
<table>
<thead>
<tr>
<th align="left">Link Relation</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody><tr>
<td align="left">first</td>
<td align="left">The URL of the immediate first page of results</td>
</tr>
<tr>
<td align="left">last</td>
<td align="left">The URL of the immediate last page of results</td>
</tr>
<tr>
<td align="left">next</td>
<td align="left">The URL of the immediate next page of results</td>
</tr>
<tr>
<td align="left">prev</td>
<td align="left">The URL of the immediate previous page of results</td>
</tr>
<tr>
<td align="left">self</td>
<td align="left">The URL of the immediate current page of results</td>
</tr>
</tbody></table>
`}}}},path:"/markdown",tags:["other"]}}}},isNuxt3:!0,isNuxt2:!1,locales:{en:"English"},pathsByTags:{other:{name:"other",description:"",isOpen:!0,items:[{name:"/markdown",path:"markdown",type:"get",description:`Endpoint to create and initiate a pipeline.

### Paragraph
In a hole in the ground there lived a hobbit. Not a **nasty**, _dirty_, \`wet\` hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole](https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"), and that means comfort.


### Horizontal Rule \`---\`
---

### Number List
1. Install \`node\`.
2. Install \`npm\`.
3. Open your editor
4. Create a JavaScript file

### Blockquotes
> This is a sample OpenAPI spec to test the parsing of various markdown styles
> (RapiDoc supports common-mark syntax)

### Buleted List
- Install \`node\`.
- Install \`npm\`.
- Open you editor
- Create a JavaScript file

### Table
| Heading 1 | Left-Justified | Centered | Right-Justified |
| --------- | :------------- | :------: | --------------: |
| text | text | text | text |
| text | text | text | text |
| text | text | text | text |

### Code
\`\`\`
$ curl -X POST -is -u username:password
  -H "Content-Type: application/json" https://example.com
  -d '{
  "target": {
    "ref_type": "branch",
    "type": "pipeline_ref_target",
    "ref_name": "master"
  }'
}
\`\`\`
### Code (with syntax highlight)
\`\`\`bash
$ curl -X POST -is -u username:password
  -H "Content-Type: application/json" https://example.com
  -d '{
  "target": {
    "ref_type": "branch",
    "type": "pipeline_ref_target",
    "ref_name": "master"
  }'
}
\`\`\`

### Use HTML in markdown
<br>
<div style="color: white; background-color:SlateBlue; padding: 12px; border-radius:2px">
  Markdown do not support colors or fancy HTML designs. However, if you need you can put some html directly inside the markup with some inline styling.
  This box I designed using raw HTML inside the markdown
</div>
<br>
<div style="color:#bbb; background-color:#444; padding: 12px 0px 12px 12px;border-left: 5px solid #F06560;">
  <b style="color:#F06560">TIP</b>  Here is another one, done using HTML inside markdown with two different colors to make it appear like a TIP
</div>
<br>


### Images
Inline Images no-gap - ![appspot image filler](https://picsum.photos/100)![appspot image filler](https://picsum.photos/100)

Inline Images Single space gap - ![appspot image filler](https://picsum.photos/100)
![appspot image filler](https://picsum.photos/00)

Next Line Image

![appspot image filler](https://picsum.photos/140x100.png)
`}]}},fileName:"markdown",layoutName:"apidocs-layout-markdown",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"markdown"}},watch:{"$route.meta":{handler:function(t){this.currentLocale=t.locale,this.type=t.type,this.path=t.path},deep:!0}},methods:{downloadYaml(){const t=JSON.stringify(this.doc,null,4),n=new Blob([t],{type:"application/json"}),a=URL.createObjectURL(n),o=document.createElement("a");o.href=a,o.download=this.file+".yaml",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a)}},computed:{doc(){return this.options.doc},name(){return this.options.name},isInfo(){return this.path==="info"},isComponents(){return this.path==="components"},activeRoute(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path][this.type]??null},subParams(){return!this.options.doc.paths||!this.options.doc.paths[this.path]?null:this.options.doc.paths[this.path].parameters??null},server(){return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?this.options.doc.paths[this.path].servers[0].url??null:!this.options.doc.servers||!this.options.doc.servers[0]?null:this.options.doc.servers[0].url??null}},mounted(){this.$openapidocBus.$on("downloadYamlDoc",this.downloadYaml)},unmounted(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)},destroyed(){this.$openapidocBus.$off("downloadYamlDoc",this.downloadYaml)}};function q(t,n,a,o,s,e){const l=u,d=f,c=g,m=b,h=y;return i(),k("div",null,[e.isInfo?(i(),r(l,{key:0,info:e.doc.info,servers:e.doc.servers,"current-locale":t.currentLocale},null,8,["info","servers","current-locale"])):e.isComponents?(i(),r(d,{key:1,components:e.doc.components,"current-locale":t.currentLocale},null,8,["components","current-locale"])):e.activeRoute?(i(),r(c,{key:2,route:e.activeRoute,"current-locale":t.currentLocale,method:t.type,components:e.doc.components,url:t.path,path_doc:s.path_doc,file:s.file,server:e.server,"sub-params":e.subParams},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(i(),r(m,{key:3})),_(h,{"current-locale":t.currentLocale,doc:e.doc,path:s.options.path,file:s.file},null,8,["current-locale","doc","path","file"])])}const R=x(v,[["render",q]]);export{R as default};
