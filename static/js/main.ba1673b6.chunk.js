(this.webpackJsonpdevelop=this.webpackJsonpdevelop||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(6),a=c.n(s),i=c(2),r=c(0),l=function(e){var t=e.text,c=e.disabled,n=e.onClick,s=e.variant;return Object(r.jsx)("button",{className:s,disabled:c,onClick:n,children:t})},j=function(){return Object(r.jsxs)("div",{className:"headerSmall",children:[Object(r.jsx)("h1",{className:"headerSmall__title",children:"Speed Click game"}),Object(r.jsx)("span",{className:"headerSmall__slogan",children:"Challenge yourself with time"})]})},o=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h1",{className:"header__title",children:"Speed Click game"}),Object(r.jsx)("span",{className:"header__slogan",children:"Challenge yourself with time"})]})},b=function(){return Object(r.jsx)("div",{class:"intro__modal",children:Object(r.jsx)(o,{})})},u=function(e){var t=e.onClick,c=Object(n.useState)(!0),s=Object(i.a)(c,2),a=s[0],o=s[1];return Object(n.useEffect)((function(){setTimeout((function(){o(!1)}),2e3)}),[]),a?Object(r.jsx)(b,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{}),Object(r.jsxs)("div",{style:{backgroundColor:"#000"},className:"intro mainContainer",children:[Object(r.jsx)("p",{className:"intro__inc",children:"The game is about clicking a button within a certain time."}),Object(r.jsxs)("p",{className:"intro__inc",children:["When this is successful,",Object(r.jsx)("br",{})," the time is reset to the initial value - 50ms"]}),Object(r.jsx)(l,{variant:"btn btn-primary btn-lg",text:"Start The Game",onClick:t})]})]})},d=function(e){var t=e.onClick,c=e.onChangeValue,s=e.value,a=Object(n.useState)(!0),j=Object(i.a)(a,2),o=j[0],b=j[1];return Object(n.useEffect)((function(){b(!(s>=1e3))}),[s]),Object(r.jsxs)("div",{className:"time mainContainer",children:[Object(r.jsx)("h2",{className:"time__title",children:"Choose time"}),Object(r.jsxs)("form",{className:"time__form",children:[Object(r.jsx)("input",{className:"time__input form-control",defaultValue:s,type:"number",onChange:c}),Object(r.jsx)("p",{className:"time__desc",children:"minimum time: 1000ms,1000 = 1s"}),Object(r.jsx)(l,{variant:"btn btn-success btn-lg",disabled:o,text:"Submit time",onClick:t})]})]})},m=c(7),O=function(e){var t=e.points,c=e.timer,n=e.currTime;return Object(r.jsx)("div",{className:"game__display",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col col__left",children:Object(r.jsxs)("h5",{className:"game__points",children:["Points: ",t]})}),Object(r.jsx)("div",{className:"col col__right",children:Object(r.jsxs)("h5",{className:"game__start",children:["Starting time: ",n," ms"]})}),Object(r.jsx)("div",{className:"col-12 col__points",children:Object(r.jsxs)("h3",{className:"game__countdown",children:["Countdown: ",c," ms"]})})]})})},h=function(e){var t=e.scores,c=Object(n.useState)([]),s=Object(i.a)(c,2),a=s[0],l=s[1];return Object(n.useEffect)((function(){var e=t.sort((function(e,t){return t-e}));l(e)}),[t]),Object(r.jsxs)("div",{className:"game__infoTable",children:[Object(r.jsxs)("h4",{children:["Best score: ",a[0]]}),Object(r.jsx)("h5",{children:"Your scores"}),a.map((function(e){return 0!==e&&Object(r.jsx)("div",{children:e})}))]})},x=function(e){var t=e.onClick,c=e.timer,n=e.setNewGame,s=e.scores;return Object(r.jsxs)("div",{className:"game__info",children:[Object(r.jsx)(l,{variant:"btn btn-light btn-block",text:"Change time",onClick:t}),0===c&&Object(r.jsx)(l,{variant:"btn btn-secondary btn-block",text:"New Game",onClick:n}),Object(r.jsx)(h,{scores:s})]})},f=function(e){var t=e.start,c=e.disabled,n=e.addPoint,s=e.handleStart;return Object(r.jsx)("div",{className:"game__nav",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-12 d-flex justify-content-center",children:Object(r.jsx)(l,{variant:"btn btn-danger btn-xl",text:"Click me",disabled:c,onClick:n})}),Object(r.jsx)("div",{className:"col-12 d-flex justify-content-center",children:t?null:Object(r.jsx)(l,{variant:"btn btn-warning btn-lg",text:"Start",onClick:s})})]})})},v=function(e){var t=e.time,c=e.onClick,s=Object(n.useState)(t),a=Object(i.a)(s,2),l=a[0],j=a[1],o=Object(n.useState)(t),b=Object(i.a)(o,2),u=b[0],d=b[1],h=Object(n.useState)(0),v=Object(i.a)(h,2),_=v[0],g=v[1],N=Object(n.useState)(!1),C=Object(i.a)(N,2),p=C[0],k=C[1],S=Object(n.useState)(!1),w=Object(i.a)(S,2),y=(w[0],w[1]),E=Object(n.useState)([]),T=Object(i.a)(E,2),F=T[0],G=T[1],I=Object(n.useState)(!1),P=Object(i.a)(I,2),V=P[0],B=P[1];Object(n.useEffect)((function(){if(p)var e=setInterval((function(){j((function(t){return t<=0?(clearInterval(e),t=0):t-=50}))}),50)}),[p]),Object(n.useEffect)((function(){y((function(e){return!e})),G((function(e){return[].concat(Object(m.a)(e),[_])})),B(!0)}),[0===l]);return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"game mainContainer",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-9",children:[Object(r.jsx)(O,{points:_,timer:l,currTime:u}),Object(r.jsx)(f,{start:p,disabled:V,timer:l,addPoint:function(){p&&(g((function(e){return e+1})),d((function(e){return e-50})),j((function(e){return u})))},handleStart:function(){k((function(e){return!e})),B((function(e){return!e}))}})]}),Object(r.jsx)("div",{className:"col-3",children:Object(r.jsx)(x,{scores:F,timer:l,setNewGame:function(){j(t),d(t),g(0),k(!1),y(!1)},onClick:c})})]})})})},_=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(1e3),l=Object(i.a)(a,2),o=l[0],b=l[1],u=function(e){e.preventDefault(),s((function(e){return!e}))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{}),c&&o>0?Object(r.jsx)(v,{time:o,onClick:u}):Object(r.jsx)(d,{onClick:u,value:o,onChangeValue:function(e){console.log(e.target.value),b(e.target.value)}})]})},g=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(r.jsx)(r.Fragment,{children:c?Object(r.jsx)(_,{}):Object(r.jsx)(u,{onClick:function(){s((function(e){return!e}))}})})};c(13),c(14);a.a.render(Object(r.jsx)(g,{}),document.getElementById("app"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ba1673b6.chunk.js.map