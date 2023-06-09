"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[715],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5664:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(4137));const o={sidebar_position:1,slug:"find-my-emoji"},i="#1: Find my emoji",l={unversionedId:"lab/FindMyEmoji",id:"lab/FindMyEmoji",title:"#1: Find my emoji",description:"1: Find my emoji",source:"@site/docs/lab/FindMyEmoji.md",sourceDirName:"lab",slug:"/lab/find-my-emoji",permalink:"/basics-react/lab/find-my-emoji",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"find-my-emoji"},sidebar:"tutorialSidebar",previous:{title:"Exercises",permalink:"/basics-react/category/exercises"},next:{title:"#2: Fetch my emoji",permalink:"/basics-react/lab/fetch-my-emoji"}},c={},p=[],s={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-find-my-emoji"},"#1: Find my emoji"),(0,a.kt)("p",null,"Fork the following repo:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/gaurav-me/cs-smu-demo"},"https://github.com/gaurav-me/cs-smu-demo"))),(0,a.kt)("p",null,"We are going to work on the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch (a sample react app is setup on the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-app-template")," branch)."),(0,a.kt)("p",null,"In this lab, we will learn how to filter and render emojis from a static list."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4913).Z,width:"640",height:"641"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Useful links:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"},"JS .filter() method")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"},"JS .includes() method")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://react.semantic-ui.com/"},"Semantic-ui react")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://emotion.sh/docs/introduction"},"EmotionJS (css-in-js)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://styled-components.com/docs/api#styled"},"styled-components")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Further practice:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Replace exact keyword search by fuzzy search"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"},"JS Regex")))))}u.isMDXComponent=!0},4913:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/static-demo-f4310c219abeab2e9703a0ebbba986ca.gif"}}]);