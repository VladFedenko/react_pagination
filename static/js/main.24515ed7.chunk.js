(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var a=t(5),n=t.n(a),i=t(4),s=t(1),l=(t(10),t(2)),r=t.n(l),o=t(0),j=function(e){for(var c=e.pagesCount,t=e.onSelectedPage,a=e.selectedPage,n=e.firstItem,i=e.lastItem,s=[],l=[],j=1;j<=c;j+=1)s.push(j);for(var d=n;d<=i;d+=1)l.push(d);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:r()("page-item",{disabled:1===a}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===a,onClick:function(){1!==a&&t(a-1)},children:"\xab"})}),s.map((function(e){return Object(o.jsx)("li",{className:r()({"page-item active":e===a}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return t(e)},children:e})},e)})),Object(o.jsx)("li",{className:r()("page-item",{disabled:a===c}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":a===c,onClick:function(){a!==c&&t(a+1)},children:"\xbb"})})]}),Object(o.jsx)("ul",{children:l.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})},d=function(){var e=Object(s.useState)(5),c=Object(i.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(1),l=Object(i.a)(n,2),r=l[0],d=l[1],b=Math.ceil(42/t),m=r*t-t+1,u=function(){var e=t*r;return e>42?42:e};return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(r," (items ").concat(m," - ").concat(u()," of ").concat(42,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){a(+e.target.value),d(1)},value:t,children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{pagesCount:b,onSelectedPage:d,selectedPage:r,firstItem:m,lastItem:u()})]})};n.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.24515ed7.chunk.js.map