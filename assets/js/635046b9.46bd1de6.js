"use strict";(self.webpackChunkseamless_cicd_github_io=self.webpackChunkseamless_cicd_github_io||[]).push([[480],{3905:(t,e,n)=>{n.d(e,{Zo:()=>i,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},d=Object.keys(t);for(a=0;a<d.length;a++)n=d[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(a=0;a<d.length;a++)n=d[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},i=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},b=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,d=t.originalType,l=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),u=c(n),b=r,m=u["".concat(l,".").concat(b)]||u[b]||p[b]||d;return n?a.createElement(m,s(s({ref:e},i),{},{components:n})):a.createElement(m,s({ref:e},i))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var d=n.length,s=new Array(d);s[0]=b;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[u]="string"==typeof t?t:r,s[1]=o;for(var c=2;c<d;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9623:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const d={},s="Stages",o={unversionedId:"api/stages",id:"api/stages",title:"Stages",description:"GET",source:"@site/docs/api/04-stages.mdx",sourceDirName:"api",slug:"/api/stages",permalink:"/api/stages",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"apiDocsSidebar",previous:{title:"Runs",permalink:"/api/runs"}},l={},c=[],i={toc:c},u="wrapper";function p(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stages"},"Stages"),(0,r.kt)("div",null,(0,r.kt)("h2",{className:"mr-3 text-2xl font-bold text-stone-800 dark:text-stone-100"},"GET",(0,r.kt)("code",{className:"ml-3 text-xl text-indigo-600 dark: dark:text-indigo-400"},"api/stages?runId=:runId")),(0,r.kt)("h3",{className:"mb-1 text-lg font-bold text-stone-600 dark:text-stone-200"},"List all Stages for a Run"),(0,r.kt)("p",{className:"mb-3 text-stone-600 dark:text-stone-200"},"This endpoint allows you to retrieve a list of all stages that are associated with a given run ID.")),(0,r.kt)("div",null,(0,r.kt)("h3",{className:"mb-1 text-lg font-bold text-stone-600 dark:text-stone-200"},"Response Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e4",\n    "createdAt": "2023-03-20T17:17:13.760Z",\n    "updatedAt": "2023-03-20T17:17:13.760Z",\n    "type": "PREPARE",\n    "startedAt": "2023-03-20T17:17:13.740Z",\n    "endedAt": "2023-03-20T17:17:14.740Z",\n    "duration": 60,\n    "status": "SUCCESS",\n    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"\n  },\n  {\n    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e5",\n    "createdAt": "2023-03-20T17:17:13.760Z",\n    "updatedAt": "2023-03-20T17:17:13.760Z",\n    "type": "CODE_QUALITY",\n    "startedAt": "2023-03-20T17:17:13.740Z",\n    "endedAt": null,\n    "duration": null,\n    "status": "IN_PROGRESS",\n    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"\n  },\n  {\n    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e6",\n    "createdAt": "2023-03-20T17:17:13.760Z",\n    "updatedAt": "2023-03-20T17:17:13.760Z",\n    "type": "UNIT_TEST",\n    "startedAt": "2023-03-20T17:17:13.740Z",\n    "endedAt": null,\n    "duration": null,\n    "status": "IDLE",\n    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"\n  },\n  {\n    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e7",\n    "createdAt": "2023-03-20T17:17:13.760Z",\n    "updatedAt": "2023-03-20T17:17:13.760Z",\n    "type": "BUILD",\n    "startedAt": "2023-03-20T17:17:13.740Z",\n    "endedAt": null,\n    "duration": null,\n    "status": "IDLE",\n    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"\n  },\n  {\n    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e8",\n    "createdAt": "2023-03-20T17:17:13.760Z",\n    "updatedAt": "2023-03-20T17:17:13.760Z",\n    "type": "DEPLOY_STAGING",\n    "startedAt": "2023-03-20T17:17:13.740Z",\n    "endedAt": null,\n    "duration": null,\n    "status": "IDLE",\n    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"\n  },\n  {\n    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e9",\n    "createdAt": "2023-03-20T17:17:13.760Z",\n    "updatedAt": "2023-03-20T17:17:13.760Z",\n    "type": "DEPLOY_PROD",\n    "startedAt": "2023-03-20T17:17:13.740Z",\n    "endedAt": null,\n    "duration": null,\n    "status": "IDLE",\n    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"\n  }\n]\n')),(0,r.kt)("hr",null),(0,r.kt)("div",null,(0,r.kt)("h2",{className:"mr-3 mt-10 text-2xl font-bold text-stone-800 dark:text-stone-100"},"PATCH",(0,r.kt)("code",{className:"ml-3 text-xl text-indigo-600 dark: dark:text-indigo-400"},"api/stages/:stageId")),(0,r.kt)("h3",{className:"mb-1 text-lg font-bold text-stone-600 dark:text-stone-200"},"Update a Stage"),(0,r.kt)("p",{className:"mb-3 text-stone-600 dark:text-stone-200"},"This endpoint allows you to update a stage. Add the properties to be updated in the request body."),(0,r.kt)("h3",{className:"mb-1 text-lg font-bold text-stone-600 dark:text-stone-200"},"Request Headers"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",{className:"text-indigo-600 dark: dark:text-indigo-400"},"Content-Type: application/json")))),(0,r.kt)("div",null,(0,r.kt)("h3",{className:"mb-1 text-lg font-bold text-stone-600 dark:text-stone-200"},"Request Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "IN_PROGRESS"\n}\n')),(0,r.kt)("div",null,(0,r.kt)("h3",{className:"mb-1 text-lg font-bold text-stone-600 dark:text-stone-200"},"Response Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,r.kt)("hr",null),(0,r.kt)("div",null,(0,r.kt)("h2",{className:"mr-3 mt-10 text-2xl font-bold text-stone-800 dark:text-stone-100"},"DELETE",(0,r.kt)("code",{className:"ml-3 text-xl text-indigo-600 dark: dark:text-indigo-400"},"api/stages/:stageId")),(0,r.kt)("h3",{className:"mb-1 text-lg font-bold text-stone-600 dark:text-stone-200"},"Delete a Stage"),(0,r.kt)("p",{className:"mb-3 text-stone-600 dark:text-stone-200"},"This endpoint allows you to delete a stage using its id.")),(0,r.kt)("div",null,(0,r.kt)("h3",{className:"mb-1 text-lg font-bold text-stone-600 dark:text-stone-200"},"Response Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "fc27f809-961b-4cf8-b535-944d74628945",\n  "createdAt": "2023-03-28T13:08:15.518Z",\n  "updatedAt": "2023-03-28T13:08:15.518Z",\n  "type": "PREPARE",\n  "startedAt": "2023-03-28T13:08:15.503Z",\n  "endedAt": null,\n  "duration": null,\n  "status": "IDLE",\n  "runId": "c6e690ba-d887-4976-bf5b-2ebd3a253bee"\n}\n')),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);