(this.webpackJsonptest_soft_rocks=this.webpackJsonptest_soft_rocks||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(12),s=n.n(c),r=n(9),i=n(3),o=n(2),u=(n(17),n(8)),l=n(7),b=n(4),m=n.n(b),j=n(6),d="https://mate.academy/students-api/users";function h(){return p.apply(this,arguments)}function p(){return(p=Object(j.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d);case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Opps... ".concat(t.status,": ").concat(t.statusText));case 5:return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return O.apply(this,arguments)}function O(){return(O=Object(j.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Opps... ".concat(n.status,": ").concat(n.statusText));case 5:return e.next=7,n.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return _.apply(this,arguments)}function _(){return(_=Object(j.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)},e.prev=1,e.next=4,fetch(d,n);case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(1),new Error("Opps... ".concat(e.t0));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}function v(){return(v=Object(j.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d,"/").concat(t),{method:"DELETE"});case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error("Opps... ".concat(e.t0));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function N(e){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"PATCH",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)},e.prev=1,e.next=4,fetch("".concat(d,"/").concat(t.id),n);case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(1),new Error("Opps... ".concat(e.t0));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}n(19);var y=n(1),k=function(e){var t=e.setPrevState,n=e.handleSubmit,a=e.deleteItem,c=e.setModalVisible;return Object(y.jsx)("div",{className:"modal",children:Object(y.jsxs)("div",{className:"modal__content",children:[Object(y.jsx)("h3",{className:"modal__title",children:"Are you shure?"}),Object(y.jsxs)("div",{className:"modal__buttons",children:[Object(y.jsx)("button",{className:"button",type:"button",onClick:function(){a&&a(),n&&n()},children:"Yes"}),Object(y.jsx)("button",{className:"button",type:"button",onClick:function(){t&&t(),c(!1)},children:"No"})]})]})})},F=(n(21),function(e){var t=e.id,n=Object(a.useState)({id:t,name:"",username:"",email:"",phone:"",website:""}),c=Object(i.a)(n,2),s=c[0],o=c[1],b=Object(a.useState)({name:!0,username:!0,email:!0,phone:!0,website:!0}),d=Object(i.a)(b,2),h=d[0],p=d[1],O=Object(a.useState)(!1),x=Object(i.a)(O,2),_=x[0],v=x[1],w=Object(a.useState)({}),F=Object(i.a)(w,2),S=F[0],g=F[1],C=Object(a.useState)({}),E=Object(i.a)(C,2),T=E[0],U=E[1],M=Object(a.useState)(!0),P=Object(i.a)(M,2),A=P[0],I=P[1],D=function(e){return h[e]?"Change":"Apply"},J=function(){var e=Object(j.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){J()}),[]);var V=function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(u.a)({},n,a))}))},B=function(e){h[e]&&(g(Object(u.a)({},e,s[e]?s[e]:"")),p(Object(u.a)({name:!0,username:!0,email:!0,phone:!0,website:!0},e,!1)),G()),h[e]||(v(!0),U(Object(u.a)({},e,s[e])),p((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(u.a)({},e,!0))})))},G=function(e){o((function(e){return Object(l.a)(Object(l.a)({},e),S)})),v(!1),e&&(N(Object(l.a)({id:t},S)),I(!0))};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h2",{className:"home-link",children:Object(y.jsx)(r.b,{to:"/",className:"link",children:"> Click to go back <"})}),Object(y.jsxs)("form",{method:"POST",className:"infoForm",onSubmit:function(e){return e.preventDefault()},children:[Object(y.jsxs)("label",{htmlFor:"name",className:"infoForm__label",children:["Name:",Object(y.jsx)("input",{className:"infoForm__field",id:"name",disabled:h.name,name:"name",type:"text",value:s.name,onChange:V}),Object(y.jsx)("button",{type:"button",className:"button",onClick:function(){return B("name")},children:D("name")})]}),Object(y.jsxs)("label",{htmlFor:"surname",className:"infoForm__label",children:["Surname:",Object(y.jsx)("input",{className:"infoForm__field",id:"surname",disabled:h.username,name:"username",type:"text",value:s.username,onChange:V}),Object(y.jsx)("button",{type:"button",onClick:function(){return B("username")},className:"button",children:D("username")})]}),Object(y.jsxs)("label",{htmlFor:"email",className:"infoForm__label",children:["Email:",Object(y.jsx)("input",{className:"infoForm__field",id:"email",disabled:h.email,name:"email",type:"text",value:s.email,onChange:V}),Object(y.jsx)("button",{type:"button",className:"button",onClick:function(){return B("email")},children:D("email")})]}),Object(y.jsxs)("label",{htmlFor:"phone",className:"infoForm__label",children:["Phone:",Object(y.jsx)("input",{className:"infoForm__field",id:"phone",disabled:h.phone,name:"phone",type:"text",value:s.phone,onChange:V}),Object(y.jsx)("button",{type:"button",className:"button",onClick:function(){return B("phone")},children:D("phone")})]}),Object(y.jsxs)("label",{htmlFor:"website",className:"infoForm__label",children:["Website:",Object(y.jsx)("input",{className:"infoForm__field",id:"website",disabled:h.website,name:"website",type:"text",value:s.website,onChange:V}),Object(y.jsx)("button",{type:"button",className:"button",onClick:function(){return B("website")},children:D("website")})]}),Object(y.jsx)("button",{className:"infoForm__button button",disabled:A,type:"button",onClick:function(){return G(!0)},children:"Return last changed value"})]}),_&&Object(y.jsx)(k,{setModalVisible:v,handleSubmit:function(){N(Object(l.a)({id:t},T)),I(!1),v(!1)},setPrevState:G})]})}),S=(n(22),function(e){var t=e.getUsers,n=Object(a.useState)(""),c=Object(i.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],b=u[1],d=Object(a.useState)(""),h=Object(i.a)(d,2),p=h[0],f=h[1],O=Object(a.useState)(!1),_=Object(i.a)(O,2),v=_[0],N=_[1],w=function(){var e=Object(j.a)(m.a.mark((function e(n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!s.length){e.next=7;break}return a={name:s,username:l,email:p},e.next=5,x(a);case 5:t(),r(""),b(""),f("");case 7:N(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)("form",{method:"GET",className:"creationForm",onSubmit:w,children:Object(y.jsxs)("fieldset",{className:"creationForm__wrap",children:[Object(y.jsx)("legend",{children:"Add new contact"}),Object(y.jsxs)("label",{htmlFor:"newName",className:"creationForm__label",children:["Name*:",Object(y.jsx)("input",{className:"creationForm__field ".concat(v&&"active"),placeholder:"Enter name",id:"newName",type:"text",value:s,onChange:function(e){r(e.target.value),N(!1)}})]}),Object(y.jsxs)("label",{htmlFor:"newSurname",className:"creationForm__label",children:["Surname:",Object(y.jsx)("input",{className:"creationForm__field",placeholder:"Enter surname",id:"newSurname",type:"text",value:l,onChange:function(e){return b(e.target.value)}})]}),Object(y.jsxs)("label",{htmlFor:"newEmail",className:"creationForm__label",children:["Mail:",Object(y.jsx)("input",{className:"creationForm__field",placeholder:"myMail@mail.com",id:"newEmail",type:"text",value:p,onChange:function(e){return f(e.target.value)}})]}),Object(y.jsx)("button",{className:"creationForm__button button",type:"submit",children:"Add user"})]})})}),g=(n(23),function(e){var t=e.getUserId,n=Object(a.useState)([]),c=Object(i.a)(n,2),s=c[0],o=c[1],u=Object(a.useState)(!1),l=Object(i.a)(u,2),b=l[0],d=l[1],p=Object(a.useState)(0),f=Object(i.a)(p,2),O=f[0],x=f[1],_=function(){var e=Object(j.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,o(t.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){_()}),[]);return Object(y.jsxs)("div",{className:"users",children:[Object(y.jsx)(S,{getUsers:_}),Object(y.jsx)("ul",{className:"users__list",children:s.map((function(e){return Object(y.jsxs)("li",{className:"users__list_item",children:[Object(y.jsxs)("div",{className:"users__info-block",children:[Object(y.jsx)("h3",{className:"users__list_title",children:e.name}),e.email&&Object(y.jsxs)("p",{className:"users__list_mail",children:["Mail:\xa0",Object(y.jsx)("a",{href:"mailto:".concat(e.email),className:"link",children:e.email})]})]}),Object(y.jsxs)("div",{className:"users__button-block",children:[Object(y.jsx)(r.b,{className:"users__info-button button link",to:"user/".concat(e.id),onClick:function(){return t(e.id)},children:"User details"}),Object(y.jsx)("button",{className:"users__delete-button button",type:"button",onClick:function(){return t=e.id,x(t),void d(!0);var t},children:"Delete"})]})]},e.id)}))}),b&&Object(y.jsx)(k,{setModalVisible:d,deleteItem:function(){!function(e){v.apply(this,arguments)}(O),o(s.filter((function(e){return e.id!==O}))),d(!1)}})]})}),C=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(y.jsx)("div",{children:Object(y.jsxs)(o.c,{children:[Object(y.jsx)(o.a,{path:"/",element:Object(y.jsx)(g,{getUserId:function(e){c(e)}})}),Object(y.jsx)(o.a,{path:"user/".concat(n),element:Object(y.jsx)(F,{id:n})})]})})};s.a.render(Object(y.jsx)(r.a,{children:Object(y.jsx)(C,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.174a30d7.chunk.js.map