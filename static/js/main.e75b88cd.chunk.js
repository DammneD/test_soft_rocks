(this.webpackJsonptest_soft_rocks=this.webpackJsonptest_soft_rocks||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(12),r=n.n(c),s=n(9),i=n(3),o=n(2),u=(n(17),n(8)),l=n(4),b=n.n(l),j=n(7),m=n(6),h="https://mate.academy/students-api/users";function p(){return d.apply(this,arguments)}function d(){return(d=Object(m.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h);case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Opps... ".concat(t.status,": ").concat(t.statusText));case 5:return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return O.apply(this,arguments)}function O(){return(O=Object(m.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"/").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Opps... ".concat(n.status,": ").concat(n.statusText));case 5:return e.next=7,n.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return _.apply(this,arguments)}function _(){return(_=Object(m.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)},e.prev=1,e.next=4,fetch(h,n);case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(1),new Error("Opps... ".concat(e.t0));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}function v(){return(v=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h,"/").concat(t),{method:"DELETE"});case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error("Opps... ".concat(e.t0));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function N(e){return w.apply(this,arguments)}function w(){return(w=Object(m.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"PATCH",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)},e.prev=1,e.next=4,fetch("".concat(h,"/").concat(t.id),n);case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(1),new Error("Opps... ".concat(e.t0));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}n(19);var y=n(1),k=function(e){var t=e.setPrevState,n=e.handleSubmit,a=e.deleteItem,c=e.setModalVisible;return Object(y.jsx)("div",{className:"modal",children:Object(y.jsxs)("div",{className:"modal__content",children:[Object(y.jsx)("h3",{className:"modal__title",children:"Are you shure?"}),Object(y.jsxs)("div",{className:"modal__buttons",children:[Object(y.jsx)("button",{className:"button",type:"button",onClick:function(){a&&a(),n&&n()},children:"Yes"}),Object(y.jsx)("button",{className:"button",type:"button",onClick:function(){t&&t(),c(!1)},children:"No"})]})]})})},F=(n(21),function(e){var t=e.id,n=Object(a.useState)({id:t,name:"",username:"",email:"",phone:"",website:""}),c=Object(i.a)(n,2),r=c[0],o=c[1],l=Object(a.useState)({name:!0,username:!0,email:!0,phone:!0,website:!0}),h=Object(i.a)(l,2),p=h[0],d=h[1],O=Object(a.useState)(!1),x=Object(i.a)(O,2),_=x[0],v=x[1],w=Object(a.useState)({}),F=Object(i.a)(w,2),S=F[0],g=F[1],C=Object(a.useState)({}),E=Object(i.a)(C,2),T=E[0],U=E[1],M=function(e){return p[e]?"Change":"Apply"},P=function(){var e=Object(m.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,o(Object(j.a)({},n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){P()}),[]);var I=function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},n,a))}))},A=function(e){p[e]&&(g(Object(u.a)({},e,r[e])),d((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(u.a)({},e,!1))}))),p[e]||(v(!0),U(Object(u.a)({},e,r[e])),d((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(u.a)({},e,!0))})))},D=function(){o((function(e){return Object(j.a)(Object(j.a)({},e),S)})),N(Object(j.a)({id:t},S)),g({}),v(!1)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h2",{className:"home-link",children:Object(y.jsx)(s.b,{to:"/",className:"link",children:"> Click to go back <"})}),r&&Object(y.jsxs)("form",{method:"POST",className:"infoForm",onSubmit:function(e){return e.preventDefault()},children:[Object(y.jsxs)("label",{htmlFor:"name",className:"infoForm__label",children:["Name:",Object(y.jsx)("input",{className:"infoForm__field",id:"name",disabled:p.name,name:"name",type:"text",value:r.name,onChange:I}),Object(y.jsx)("button",{type:"button",className:"button",onClick:function(){return A("name")},children:M("name")})]}),Object(y.jsxs)("label",{htmlFor:"surname",className:"infoForm__label",children:["Surname:",Object(y.jsx)("input",{className:"infoForm__field",id:"surname",disabled:p.username,name:"username",type:"text",value:r.username,onChange:I}),Object(y.jsx)("button",{type:"button",onClick:function(){return A("username")},className:"button",children:M("username")})]}),Object(y.jsxs)("label",{htmlFor:"email",className:"infoForm__label",children:["Email:",Object(y.jsx)("input",{className:"infoForm__field",id:"email",disabled:p.email,name:"email",type:"text",value:r.email,onChange:I}),Object(y.jsx)("button",{type:"button",className:"button",onClick:function(){return A("email")},children:M("email")})]}),Object(y.jsxs)("label",{htmlFor:"phone",className:"infoForm__label",children:["Phone:",Object(y.jsx)("input",{className:"infoForm__field",id:"phone",disabled:p.phone,name:"phone",type:"text",value:r.phone,onChange:I}),Object(y.jsx)("button",{type:"button",className:"button",onClick:function(){return A("phone")},children:M("phone")})]}),Object(y.jsxs)("label",{htmlFor:"website",className:"infoForm__label",children:["Website:",Object(y.jsx)("input",{className:"infoForm__field",id:"website",disabled:p.website,name:"website",type:"text",value:r.website,onChange:I}),Object(y.jsx)("button",{type:"button",className:"button",onClick:function(){return A("website")},children:M("website")})]}),Object(y.jsx)("button",{className:"infoForm__button button",disabled:0===Object.keys(S).length,type:"button",onClick:D,children:"\u0448\u0430\u0433 \u043d\u0430\u0437\u0430\u0434"})]}),_&&Object(y.jsx)(k,{setModalVisible:v,handleSubmit:function(){N(Object(j.a)({id:t},T)),v(!1)},setPrevState:D})]})}),S=(n(22),function(e){var t=e.getUsers,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],j=u[1],h=Object(a.useState)(""),p=Object(i.a)(h,2),d=p[0],f=p[1],O=Object(a.useState)(!1),_=Object(i.a)(O,2),v=_[0],N=_[1],w=function(){var e=Object(m.a)(b.a.mark((function e(n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!r.length){e.next=7;break}return a={name:r,username:l,email:d},e.next=5,x(a);case 5:t(),s(""),j(""),f("");case 7:N(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("form",{method:"GET",className:"creationForm",onSubmit:w,children:[Object(y.jsxs)("label",{htmlFor:"newName",className:"creationForm__label",children:["Name*:",Object(y.jsx)("input",{className:"creationForm__field ".concat(v&&"active"),placeholder:"Enter name",id:"newName",type:"text",value:r,onChange:function(e){s(e.target.value),N(!1)}})]}),Object(y.jsxs)("label",{htmlFor:"newSurname",className:"creationForm__label",children:["Surname:",Object(y.jsx)("input",{className:"creationForm__field",placeholder:"Enter surname",id:"newSurname",type:"text",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(y.jsxs)("label",{htmlFor:"newEmail",className:"creationForm__label",children:["Mail:",Object(y.jsx)("input",{className:"creationForm__field",placeholder:"myMail@mail.com",id:"newEmail",type:"text",value:d,onChange:function(e){return f(e.target.value)}})]}),Object(y.jsx)("button",{className:"creationForm__button button",type:"submit",children:"Add user"})]})}),g=(n(23),function(e){var t=e.getUserId,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],o=c[1],u=Object(a.useState)(!1),l=Object(i.a)(u,2),j=l[0],h=l[1],d=Object(a.useState)(0),f=Object(i.a)(d,2),O=f[0],x=f[1],_=function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,o(t.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){_()}),[]);return Object(y.jsxs)("div",{className:"users",children:[Object(y.jsx)(S,{getUsers:_}),Object(y.jsx)("ul",{className:"users__list",children:r.map((function(e){return Object(y.jsxs)("li",{className:"users__list_item",children:[Object(y.jsx)("h3",{className:"users__list_title",children:e.name}),e.email&&Object(y.jsxs)("p",{children:["Mail:\xa0",Object(y.jsx)("a",{href:"mailto:".concat(e.email),className:"users__list_mail link",children:e.email})]}),Object(y.jsxs)("div",{className:"users__button-block",children:[Object(y.jsx)(s.b,{className:"users__info-button button link",to:"user/".concat(e.id),onClick:function(){return t(e.id)},children:"User details"}),Object(y.jsx)("button",{className:"users__delete-button button",type:"button",onClick:function(){return t=e.id,x(t),void h(!0);var t},children:"Delete"})]})]},e.id)}))}),j&&Object(y.jsx)(k,{setModalVisible:h,deleteItem:function(){!function(e){v.apply(this,arguments)}(O),o(r.filter((function(e){return e.id!==O}))),h(!1)}})]})}),C=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(y.jsx)("div",{children:Object(y.jsxs)(o.c,{children:[Object(y.jsx)(o.a,{path:"/",element:Object(y.jsx)(g,{getUserId:function(e){c(e)}})}),Object(y.jsx)(o.a,{path:"user/".concat(n),element:Object(y.jsx)(F,{id:n})})]})})};r.a.render(Object(y.jsx)(s.a,{children:Object(y.jsx)(C,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e75b88cd.chunk.js.map