webpackJsonp([1],{Jusz:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},o,!1,function(e){n("Pe99")},null,null).exports,r=n("/ocq"),s=n("Xxa5"),c=n.n(s),d=n("Dd8w"),u=n.n(d),p=n("exGp"),l=n.n(p),m=n("mtWM"),v=n.n(m),f=(n("N+Om"),v.a.create({baseURL:"http://localhost:3000/api"})),_={name:"HelloWorld",data:function(){return{todos:[],doneItems:[],newTodo:""}},methods:{fetchData:function(){var e=this;l()(c.a.mark(function t(){var n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get();case 2:n=t.sent.data,e.todos=n.filter(function(e){return!e.done}).map(function(e){return u()({},e,{editing:!1})}),e.doneItems=n.filter(function(e){return e.done});case 5:case"end":return t.stop()}},t,e)}))()},addTodo:function(){var e=this;l()(c.a.mark(function t(){var n,a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.newTodo&&e.newTodo.trim()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,f.post("/create",{name:n});case 5:a=t.sent.data[0],e.todos.push(a),e.newTodo="";case 8:case"end":return t.stop()}},t,e)}))()},done:function(e){var t=this;l()(c.a.mark(function n(){return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.done=!0,t.todos=t.todos.filter(function(t){return e.id!==t.id}),t.doneItems.push(e),n.next=5,f.patch("/update",u()({},e));case 5:n.sent;case 6:case"end":return n.stop()}},n,t)}))()},updateTodo:function(e){var t=this;l()(c.a.mark(function n(){var a,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=e.id,o=e.name,e.editing=!e.editing,f.patch("/update",{id:a,name:o});case 4:case"end":return t.stop()}},n,t)}))()}},created:function(){this.fetchData()}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v("Todo App")]),e._v(" "),n("form",[n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],attrs:{type:"text"},domProps:{value:e.newTodo},on:{input:function(t){t.target.composing||(e.newTodo=t.target.value)}}}),e._v(" "),n("button",{staticClass:"btn btn-sm btn-success",on:{click:function(t){e.addTodo()}}},[e._v("ADD TASK")])])]),e._v(" "),n("div",{staticClass:"task-list"},[e._v("\n    Todo List:\n    "),e._l(e.todos,function(t){return n("label",{staticClass:"task-list__item",class:{"task-list__item--checked":t.done}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editing,expression:"todo.editing"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.editing)?e._i(t.editing,null)>-1:t.editing},on:{change:function(n){var a=t.editing,o=n.target,i=!!o.checked;if(Array.isArray(a)){var r=e._i(a,null);o.checked?r<0&&e.$set(t,"editing",a.concat([null])):r>-1&&e.$set(t,"editing",a.slice(0,r).concat(a.slice(r+1)))}else e.$set(t,"editing",i)}}}),e._v(" "),t.editing?n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"todo.name"}],domProps:{value:t.name},on:{keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13,n.key,"Enter"))return null;e.updateTodo(t)},input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}}):n("span",[e._v(e._s(t.name))]),e._v(" "),n("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(n){e.done(t)}}},[e._v("Done")])])})],2),e._v(" "),n("div",{staticStyle:{"margin-top":"15px"}},[e._v("\n    Done List:\n    "),n("div",{staticClass:"task-list"},e._l(e.doneItems,function(t){return n("label",{staticClass:"task-list__item"},[n("span",[e._v(" "+e._s(t.name)+" ")])])}))])])},staticRenderFns:[]};var g=n("VU/8")(_,h,!1,function(e){n("Jusz")},"data-v-14599faa",null).exports;a.a.use(r.a);var w=new r.a({routes:[{path:"/",name:"Todo",component:g}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:w,components:{App:i},template:"<App/>"})},Pe99:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e0ae766013ed5bcc7b7a.js.map