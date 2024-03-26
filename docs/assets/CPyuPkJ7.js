const e={path:"docs",locales:{en:"English"},localesReload:!1,servers:[],paths_by_tags:{Employees:{name:"Employees",description:`<p>Markdown headings can contain HTML as well as complex markdown</p>
<br>
<div style="background-color: #F0F0F0;padding: 12px 0px 12px 12px;border-left: 5px solid #F90258;">
  Markdown do not support colors or fancy HTML designs. However, if you need you can put some html directly inside the markup with some inline styling.
  This TIP box i designed using raw HTML inside the markdown
</div>  
<br>

<h1>The Employee Object</h1>
<p>Responses from the <code>/employees</code> endpoint are encoded as UTF-8 JSON objects with the following attributes:</p>
<table class="table">
<tr>
<th align="right">Attribute</th>
<th>Type</th>
<th align="left">Description</th>
</tr>
<tr>
<td align="right"><code>id</code></td>
<td>string</td>
<td align="left">A globally unique identifier.</td>
</tr>
<tr>
<td align="right"><code>account_id</code></td>
<td>string</td>
<td align="left">Reference to a parent account object.</td>
</tr>
<tr>
<td align="right"><code>thread_id</code></td>
<td>string</td>
<td align="left">Reference to a parent thread object (all messages have a thread).</td>
</tr>
<tr>
<td align="right"><code>tags</code></td>
<td>array</td>
<td align="left">A list of labels that you like to associate with an employee</td>
</tr>
</table>
`,isOpen:!0,items:[{name:"/employees",path:"employees",type:"get",icon:null,description:"Get list of employees"}]}},name:"Api Docs"};export{e as d};
