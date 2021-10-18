(this["webpackJsonpclassbento-cards-app"]=this["webpackJsonpclassbento-cards-app"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(5),s=a.n(n),c=a(2),l=a(8),i=a(0),o=function(e){var t=e.message;return Object(i.jsxs)("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3",role:"alert",children:[Object(i.jsx)("strong",{className:"font-bold",children:"Ups!"}),Object(i.jsx)("span",{className:"block sm:inline",children:t}),Object(i.jsx)("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:Object(i.jsxs)("svg",{className:"fill-current h-6 w-6 text-red-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:[Object(i.jsx)("title",{children:"Close"}),Object(i.jsx)("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})]})})]})},d=(a(14),function(){return Object(i.jsx)("div",{className:"flex justify-center items-center mt-3",children:Object(i.jsx)("div",{className:"loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"})})}),j=Object(r.createContext)(),u=a(4),b=a.n(u),x=a(6),p=function(){var e=Object(x.a)(b.a.mark((function e(t){var a,r,n,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",[]);case 2:return a="https://flickr-api-wrapper.corzo.dev/".concat(encodeURI(t)),e.next=5,fetch(a);case 5:return r=e.sent,e.next=8,r.json();case 8:return n=e.sent,s=n.items,c=s.map((function(e){return{title:e.title,link:e.link,image:e.media.m,author:e.author,description:e.description,dateTaken:e.date_taken,tags:e.tags}})),console.log("cards = ",c),e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.title,a=e.link,r=e.image,n=(e.description,e.author),s=e.dateTaken,c=e.tags;return Object(i.jsx)("div",{className:"w-full sm:w-1/2 lg:w-1/3 px-2 my-2",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:r,alt:"",className:"w-full"})}),Object(i.jsxs)("div",{className:"px-6 py-4",children:[Object(i.jsx)("div",{className:"font-bold text-xl mb-2",children:t}),Object(i.jsx)("p",{className:"text-gray-700 text-base",children:s}),Object(i.jsx)("p",{})]}),Object(i.jsx)("div",{className:"px-6 py-4",children:c.split(" ").map((function(e){return Object(i.jsxs)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2",children:["#",e]})}))}),Object(i.jsx)("div",{class:"p-4 text-right text-sm text-gray-600",children:Object(i.jsxs)("span",{class:"ml-2",children:["By: ",n]})})]})})},m=function(){var e=Object(r.useContext)(j).keywords,t="There is no a results with ".concat(e),a=function(e){var t=Object(r.useContext)(j).keywords,a=Object(r.useState)({}),n=Object(c.a)(a,2),s=n[0],l=n[1];return Object(r.useEffect)((function(){l({data:[],loading:!0}),p(t).then((function(e){l({data:e,loading:!1})}))}),[t]),s}(),n=a.data,s=a.loading;return Object(i.jsxs)(i.Fragment,{children:[s&&Object(i.jsx)(d,{}),!s&&""!==e&&0===n.length&&Object(i.jsx)(o,{message:t}),Object(i.jsx)("div",{className:"my-5 flex flex-wrap -mx-2",children:n&&n.map((function(e,t){return Object(i.jsx)(h,Object(l.a)({},e),t)}))})]})},O=a(7),f=a.n(O),g=function(){var e=Object(r.useContext)(j).dispatch,t=Object(r.useCallback)(f()((function(t){e({type:"update",payload:t.target.value})}),500),[]);return Object(i.jsx)("div",{className:"mt-5",children:Object(i.jsx)("input",{placeholder:"Search",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",onChange:t})})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"update"===t.type?t.payload:e},y=function(){var e=Object(r.useReducer)(v,""),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(i.jsx)(j.Provider,{value:{keywords:a,dispatch:n},children:Object(i.jsxs)("div",{className:"container mx-auto",children:[Object(i.jsx)("h2",{className:"text-black-500 text-3xl mt-5 font-rale font-black",children:"Flickr Search App"}),Object(i.jsx)("hr",{}),Object(i.jsx)(g,{}),Object(i.jsx)(m,{})]})})};a(17);s.a.render(Object(i.jsx)(y,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1deeea82.chunk.js.map