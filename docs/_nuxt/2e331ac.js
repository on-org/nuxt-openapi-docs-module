(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{575:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(8),n(544)),c=n.n(o),d={name:"CustomPage",layout:"apidocs-layout-page",data:function(){return{content:""}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("https://jsonplaceholder.typicode.com/todos/1").then((function(t){return"<b>".concat(t.data.title,"</b>")}));case 2:t.content=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},m=n(1),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"items-top min-h-screen bg-gray-100 sm:items-center sm:pt-0"},[e("div",{domProps:{innerHTML:t._s(t.content)}}),t._v(" "),e("hr"),t._v(" "),e("div",[t._v("my custom page")])])}),[],!1,null,null,null);e.default=component.exports}}]);