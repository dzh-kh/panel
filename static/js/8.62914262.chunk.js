(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[8],{279:function(e,t,c){"use strict";var a=c(4),n=c(3),r=c(12),o=c(7),s=c.n(o),i=c(0),l=c(68),u=c(492),f=function(e,t){var c={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(c[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(c[a[n]]=e[a[n]])}return c};var b=["xs","sm","md","lg","xl","xxl"],d=i.forwardRef((function(e,t){var c,o=i.useContext(l.b),d=o.getPrefixCls,j=o.direction,p=i.useContext(u.a),m=p.gutter,O=p.wrap,h=p.supportFlexGap,x=e.prefixCls,v=e.span,g=e.order,y=e.offset,w=e.push,N=e.pull,C=e.className,P=e.children,E=e.flex,S=e.style,k=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),A=d("col",x),R={};b.forEach((function(t){var c,o={},s=e[t];"number"===typeof s?o.span=s:"object"===Object(r.a)(s)&&(o=s||{}),delete k[t],R=Object(n.a)(Object(n.a)({},R),(c={},Object(a.a)(c,"".concat(A,"-").concat(t,"-").concat(o.span),void 0!==o.span),Object(a.a)(c,"".concat(A,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),Object(a.a)(c,"".concat(A,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),Object(a.a)(c,"".concat(A,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),Object(a.a)(c,"".concat(A,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),Object(a.a)(c,"".concat(A,"-rtl"),"rtl"===j),c))}));var F=s()(A,(c={},Object(a.a)(c,"".concat(A,"-").concat(v),void 0!==v),Object(a.a)(c,"".concat(A,"-order-").concat(g),g),Object(a.a)(c,"".concat(A,"-offset-").concat(y),y),Object(a.a)(c,"".concat(A,"-push-").concat(w),w),Object(a.a)(c,"".concat(A,"-pull-").concat(N),N),c),C,R),G={};if(m&&m[0]>0){var T=m[0]/2;G.paddingLeft=T,G.paddingRight=T}if(m&&m[1]>0&&!h){var D=m[1]/2;G.paddingTop=D,G.paddingBottom=D}return E&&(G.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(E),!1!==O||G.minWidth||(G.minWidth=0)),i.createElement("div",Object(n.a)({},k,{style:Object(n.a)(Object(n.a)({},G),S),className:F,ref:t}),P)}));t.a=d},280:function(e,t,c){"use strict";var a=c(3),n=c(4),r=c(12),o=c(6),s=c(7),i=c.n(s),l=c(0),u=c(68),f=c(200),b=c(170),d=c(50),j=c(492),p=function(e,t){var c={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(c[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(c[a[n]]=e[a[n]])}return c};Object(d.a)("top","middle","bottom","stretch"),Object(d.a)("start","end","center","space-around","space-between","space-evenly");function m(e,t){var c=l.useState("string"===typeof e?e:""),a=Object(o.a)(c,2),n=a[0],s=a[1];return l.useEffect((function(){!function(){if("string"===typeof e&&s(e),"object"===Object(r.a)(e))for(var c=0;c<b.b.length;c++){var a=b.b[c];if(t[a]){var n=e[a];if(void 0!==n)return void s(n)}}}()}),[JSON.stringify(e),t]),n}var O=l.forwardRef((function(e,t){var c,s=e.prefixCls,d=e.justify,O=e.align,h=e.className,x=e.style,v=e.children,g=e.gutter,y=void 0===g?0:g,w=e.wrap,N=p(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=l.useContext(u.b),P=C.getPrefixCls,E=C.direction,S=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),k=Object(o.a)(S,2),A=k[0],R=k[1],F=l.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),G=Object(o.a)(F,2),T=G[0],D=G[1],J=m(O,T),W=m(d,T),B=Object(f.a)(),I=l.useRef(y);l.useEffect((function(){var e=b.a.subscribe((function(e){D(e);var t=I.current||0;(!Array.isArray(t)&&"object"===Object(r.a)(t)||Array.isArray(t)&&("object"===Object(r.a)(t[0])||"object"===Object(r.a)(t[1])))&&R(e)}));return function(){return b.a.unsubscribe(e)}}),[]);var L=P("row",s),z=function(){var e=[void 0,void 0];return(Array.isArray(y)?y:[y,void 0]).forEach((function(t,c){if("object"===Object(r.a)(t))for(var a=0;a<b.b.length;a++){var n=b.b[a];if(A[n]&&void 0!==t[n]){e[c]=t[n];break}}else e[c]=t})),e}(),M=i()(L,(c={},Object(n.a)(c,"".concat(L,"-no-wrap"),!1===w),Object(n.a)(c,"".concat(L,"-").concat(W),W),Object(n.a)(c,"".concat(L,"-").concat(J),J),Object(n.a)(c,"".concat(L,"-rtl"),"rtl"===E),c),h),Y={},$=null!=z[0]&&z[0]>0?z[0]/-2:void 0,q=null!=z[1]&&z[1]>0?z[1]/-2:void 0;if($&&(Y.marginLeft=$,Y.marginRight=$),B){var H=Object(o.a)(z,2);Y.rowGap=H[1]}else q&&(Y.marginTop=q,Y.marginBottom=q);var K=Object(o.a)(z,2),Q=K[0],U=K[1],V=l.useMemo((function(){return{gutter:[Q,U],wrap:w,supportFlexGap:B}}),[Q,U,w,B]);return l.createElement(j.a.Provider,{value:V},l.createElement("div",Object(a.a)({},N,{className:M,style:Object(a.a)(Object(a.a)({},Y),x),ref:t}),v))}));t.a=O},492:function(e,t,c){"use strict";var a=c(0),n=Object(a.createContext)({});t.a=n},522:function(e,t,c){"use strict";var a=c(280);t.a=a.a},523:function(e,t,c){"use strict";var a=c(279);t.a=a.a},592:function(e,t,c){"use strict";c.r(t);c(0);var a=c(522),n=c(523),r=c(120),o=c(466),s=c(31),i=c(51),l=c(172),u=c(42),f=c(5);t.default=function(){var e=Object(u.d)((function(e){return e.theme.currentTheme}));return Object(f.jsx)("div",{className:"h-100 ".concat("light"===e?"bg-white":""),children:Object(f.jsxs)("div",{className:"container-fluid d-flex flex-column justify-content-between h-100 px-md-4 pb-md-4 pt-md-1",children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===e?"logo.png":"logo-white.png"),alt:""})}),Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)(a.a,{align:"middle",children:[Object(f.jsxs)(n.a,{xs:24,sm:24,md:8,children:[Object(f.jsx)("h1",{className:"font-weight-bold mb-4 display-4",children:"Page not found"}),Object(f.jsx)("p",{className:"font-size-md mb-4",children:"We've noticed you lost your way, no worries, we will help you to found the correct path."}),Object(f.jsx)(i.b,{to:"/app",children:Object(f.jsx)(r.a,{type:"primary",icon:Object(f.jsx)(o.a,{}),children:"Go back"})})]}),Object(f.jsx)(n.a,{xs:24,sm:24,md:{span:14,offset:2},children:Object(f.jsx)("img",{className:"img-fluid mt-md-0 mt-4",src:"/img/others/img-20.png",alt:""})})]})}),Object(f.jsxs)(l.a,{mobileFlex:!1,justifyContent:"between",children:[Object(f.jsxs)("span",{children:["Copyright  \xa9  ","".concat((new Date).getFullYear())," ",Object(f.jsx)("span",{className:"font-weight-semibold",children:"".concat(s.b)})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("a",{className:"text-gray",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(f.jsx)("span",{className:"mx-2 text-muted",children:" | "}),Object(f.jsx)("a",{className:"text-gray",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})]})]})})}}}]);
//# sourceMappingURL=8.62914262.chunk.js.map