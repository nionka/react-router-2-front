(this["webpackJsonprouter-2"]=this["webpackJsonprouter-2"]||[]).push([[0],{24:function(t,e,c){},25:function(t,e,c){},38:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),a=c(17),r=c.n(a),o=(c(24),c(4)),i=c(8),j=c(2),l=(c(25),c(14)),u=c.n(l),b=c(18);var d=function(t,e){var c=Object(n.useState)({data:null,error:null}),s=Object(o.a)(c,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){if(!t)return null;(function(){var c=Object(b.a)(u.a.mark((function c(){var n,s;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,fetch(t,e);case 3:return n=c.sent,c.next=6,n.json();case 6:s=c.sent,r({data:s}),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(0),r({error:c.t0});case 13:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(){return c.apply(this,arguments)}})()()}),[t]),a},h=c.p+"static/media/ava.44f4a16b.jpg",O=s.a.createContext({}),x=c(13),m=c.n(x),p=(c(28),c(0));var f=function(t){var e=t.post,c=Object(n.useContext)(O);return Object(p.jsx)(i.b,{to:"/posts/".concat(e.id),children:Object(p.jsxs)("li",{className:"item",onClick:function(){c.id=e.id,c.content=e.content,c.created=e.created},children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("div",{className:"img-box",children:Object(p.jsx)("img",{src:h,alt:"person"})}),Object(p.jsxs)("div",{className:"user",children:[Object(p.jsx)("p",{children:"Ivan Petrov"}),Object(p.jsx)("p",{className:"date",children:m()(new Date(e.created),"YYYYMMDDhhmm").fromNow()})]})]}),Object(p.jsx)("div",{className:"content",children:e.content})]})})};var v=function(){var t=d("".concat("https://router-2.herokuapp.com","/posts")),e=t.data,c=t.error;return Object(p.jsxs)("ul",{className:"list",children:[Object(p.jsx)("li",{className:"item item-btn",children:Object(p.jsx)(i.b,{to:"/posts/new",children:Object(p.jsx)("button",{className:"btn",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})})}),c&&Object(p.jsx)("li",{className:"error",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!!!"}),e&&e.map((function(t){return Object(p.jsx)(f,{post:t},t.id)}))]})};var N=function(){var t=Object(n.useState)(""),e=Object(o.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)(!1),r=Object(o.a)(a,2),l=r[0],u=r[1];return Object(p.jsx)("div",{className:"newPost",children:Object(p.jsxs)("div",{className:"newPost__box",children:[Object(p.jsx)(i.b,{to:"/",children:Object(p.jsx)("button",{className:"btn-close",children:"X"})}),Object(p.jsxs)("form",{className:"form",onSubmit:function(t){if(t.preventDefault(),c.trim()){var e={id:0,content:c};try{fetch("".concat("https://router-2.herokuapp.com","/posts"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t})).then((function(t){s(""),u(!0)})).catch((function(t){return console.log(t)}))}catch(n){console.log(n)}}},children:[Object(p.jsx)("textarea",{className:"textarea",value:c,onChange:function(t){s(t.target.value)}}),Object(p.jsxs)("button",{type:"submit",className:"btn",children:["\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c",l?Object(p.jsx)(j.a,{to:"/"}):null]})]})]})})};var g=function(){var t=Object(n.useContext)(O),e=Object(n.useState)(!1),c=Object(o.a)(e,2),s=c[0],a=c[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),l=i[0],u=i[1];return Object(p.jsx)("div",{className:"list",children:Object(p.jsxs)("div",{className:"item",children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("div",{className:"img-box",children:Object(p.jsx)("img",{src:h,alt:"person"})}),Object(p.jsx)("div",{className:"user",children:"Ivan Petrov"})]}),Object(p.jsx)("div",{className:"content",children:t.content}),Object(p.jsxs)("div",{className:"control",children:[Object(p.jsx)("button",{className:"btn",onClick:function(){u(!0)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(p.jsx)("button",{className:"btn delete",onClick:function(){try{fetch("".concat("https://router-2.herokuapp.com","/posts/").concat(t.id),{method:"DELETE"}).then((function(t){return t})).then((function(t){return a(!0)})).catch((function(t){return console.log(t)}))}catch(e){console.log(e)}},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),s?Object(p.jsx)(j.a,{to:"/"}):null,l?Object(p.jsx)(j.a,{to:"/posts/edit"}):null]})]})})};var S=function(){var t=Object(n.useContext)(O),e=Object(n.useState)(t.content),c=Object(o.a)(e,2),s=c[0],a=c[1],r=Object(n.useState)(!1),l=Object(o.a)(r,2),u=l[0],b=l[1];return Object(p.jsx)("div",{className:"newPost",children:Object(p.jsxs)("div",{className:"newPost__box",children:[Object(p.jsxs)("div",{children:["\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u0442",Object(p.jsx)(i.b,{to:"/posts/".concat(t.id),children:Object(p.jsx)("button",{className:"btn-close",children:"X"})})]}),Object(p.jsxs)("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),s.trim()){var c={id:t.id,content:s};try{fetch("".concat("https://router-2.herokuapp.com","/posts"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(t){return t})).then((function(t){a(""),b(!0)})).catch((function(t){return console.log(t)}))}catch(n){console.log(n)}}},children:[Object(p.jsx)("textarea",{className:"textarea",value:s,onChange:function(t){a(t.target.value)}}),Object(p.jsxs)("button",{type:"submit",className:"btn",children:["\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",u?Object(p.jsx)(j.a,{to:"/"}):null]})]})]})})};var C=function(){var t=Object(n.useState)({id:null,content:null,created:null}),e=Object(o.a)(t,1)[0];return Object(p.jsx)(O.Provider,{value:e,children:Object(p.jsx)(i.a,{children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(j.d,{children:[Object(p.jsx)(j.b,{path:"/posts/new",component:N}),Object(p.jsx)(j.b,{path:"/posts/edit",component:S}),Object(p.jsx)(j.b,{path:"/posts/:id",component:g}),Object(p.jsx)(j.b,{path:"/",component:v})]})})})})},y=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;c(t),n(t),s(t),a(t),r(t)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),y()}},[[38,1,2]]]);
//# sourceMappingURL=main.c374065b.chunk.js.map