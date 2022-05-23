(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var n,s=c(8),r=c.n(s),a=c(4),o=c(15),d=c(12),i=c(5),l=c(10),u=c(14);!function(e){e.LoadTodos="loadTodos",e.SelectId="selectTodo",e.CurrentUser="currentUser"}(n||(n={}));var j={todos:[],selectedId:0,selectedUser:null},b=Object(l.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.LoadTodos:return Object(i.a)(Object(i.a)({},e),{},{todos:[].concat(Object(d.a)(e.todos),Object(d.a)(t.payload))});case n.SelectId:return Object(i.a)(Object(i.a)({},e),{},{selectedId:t.payload});case n.CurrentUser:return Object(i.a)(Object(i.a)({},e),{},{selectedUser:t.payload});default:return e}}),Object(u.composeWithDevTools)()),O=b,h=c(3),f=c(0),p="https://mate.academy/students-api",x=function(e){return{type:n.SelectId,payload:e}},v=(c(23),c(1)),m=function(e){var t=e.todo,c=Object(a.b)();return Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("p",{className:"card__title",children:t.title}),Object(v.jsx)("button",{className:"card__btn",type:"button",onClick:function(){return c(x(t.userId))},children:"Select user ".concat(t.userId)})]})},_=(c(25),function(e){var t=e.todos;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("ul",{className:"list",children:t.map((function(e){return Object(v.jsx)("li",{className:"list__todo",children:Object(v.jsx)(m,{todo:e})},e.id)}))})})}),N=function(e){return e.todos},y=function(e){return e.selectedId},g=function(e){return e.selectedUser},S=(c(26),function(){var e=Object(a.c)(g),t=Object(f.useState)(!1),c=Object(h.a)(t,2),s=c[0],r=c[1],o=Object(f.useState)(!1),d=Object(h.a)(o,2),i=d[0],l=d[1],u=Object(a.c)(y),j=Object(a.b)();return Object(f.useEffect)((function(){var e;r(!0),(e=u,fetch("".concat(p,"/users/").concat(e)).then((function(e){return e.json()}))).then((function(e){var t;j((t=e,{type:n.CurrentUser,payload:t}))})).then((function(){return r(!1)})).catch((function(){return l(!0)}))}),[u]),Object(v.jsxs)(v.Fragment,{children:[s&&Object(v.jsx)("p",{className:"loading",children:"In process..."}),i&&s&&Object(v.jsx)("p",{className:"loading",children:"Failed loading data"}),s&&!i&&Object(v.jsxs)("div",{className:"current",children:[Object(v.jsxs)("div",{className:"current__title",children:[Object(v.jsx)("button",{type:"button",className:"current__title-btn",onClick:function(){return j(x(100))},children:"Clear"}),Object(v.jsx)("h2",{children:"Selected User:"})]}),Object(v.jsxs)("div",{className:"current__user user",children:[Object(v.jsx)("h3",{className:"user__id",children:"User: ".concat(null===e||void 0===e?void 0:e.id)}),Object(v.jsx)("h2",{children:null===e||void 0===e?void 0:e.name}),Object(v.jsx)("p",{children:null===e||void 0===e?void 0:e.website}),Object(v.jsxs)("p",{className:"user__contacts",children:["Phone number: ".concat(null===e||void 0===e?void 0:e.phone),Object(v.jsx)("span",{className:"user__contacts-block",children:"Email: ".concat(null===e||void 0===e?void 0:e.email)})]})]})]})]})}),I=(c(27),function(){var e=Object(f.useState)(""),t=Object(h.a)(e,2),c=t[0],s=t[1],r=Object(f.useState)(!1),o=Object(h.a)(r,2),d=o[0],i=o[1],l=Object(f.useState)(!1),u=Object(h.a)(l,2),j=u[0],b=u[1],O=Object(a.c)(N),x=Object(a.b)();Object(f.useEffect)((function(){fetch("".concat(p,"/todos")).then((function(e){return e.json()})).then((function(e){return x((t=e,{type:n.LoadTodos,payload:t}));var t})).then((function(){return i(!0)})).catch((function(){return b(!0)}))}),[]);var m=O.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return Object(v.jsxs)(v.Fragment,{children:[!d&&Object(v.jsx)("p",{children:"In process..."}),j&&d&&Object(v.jsx)("p",{children:"Failed loading data"}),d&&!j&&Object(v.jsxs)("div",{className:"app",children:[Object(v.jsxs)("div",{className:"app__list",children:[Object(v.jsx)("input",{className:"search",placeholder:"Search todo",onChange:function(e){return s(e.currentTarget.value)}}),Object(v.jsx)(_,{todos:m})]}),Object(v.jsx)(S,{})]})]})}),C=function(){return Object(v.jsx)(a.a,{store:O,children:Object(v.jsx)(o.a,{children:Object(v.jsx)(I,{})})})};r.a.render(Object(v.jsx)(C,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.0e2ed227.chunk.js.map