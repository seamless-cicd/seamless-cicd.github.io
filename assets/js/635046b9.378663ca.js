"use strict";(self.webpackChunkseamless_cicd_github_io=self.webpackChunkseamless_cicd_github_io||[]).push([[480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=c(n),b=r,m=u["".concat(l,".").concat(b)]||u[b]||p[b]||s;return n?a.createElement(m,d(d({ref:t},i),{},{components:n})):a.createElement(m,d({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,d=new Array(s);d[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,d[1]=o;for(var c=2;c<s;c++)d[c]=n[c];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={title:"API: Stages",sidebar_label:"Stages",description:"Seamless CI/CD API Docs: Stages"},d="Stages",o={unversionedId:"api/stages",id:"api/stages",title:"API: Stages",description:"Seamless CI/CD API Docs: Stages",source:"@site/docs/api/04-stages.mdx",sourceDirName:"api",slug:"/api/stages",permalink:"/api/stages",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"API: Stages",sidebar_label:"Stages",description:"Seamless CI/CD API Docs: Stages"},sidebar:"apiDocsSidebar",previous:{title:"Runs",permalink:"/api/runs"}},l={},c=[],i={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stages"},"Stages"),(0,r.kt)("div",null,(0,r.kt)("h2",{className:"mr-3 text-2xl font-bold text-stone-800 dark:text-stone-100"},"GET",(0,r.kt)("code",{className:"ml-3 text-xl text-indigo-600 dark: dark:text-indigo-400"},"api/stages?runId=:runId")),(0,r.kt)("h3",{className:"mb-1 text-lg font-bold text-stone-600 dark:text-stone-200"},"List all Stages for a Run"),(0,r.kt)("p",{className:"mb-3 text-stone-600 dark:text-stone-200"},"This endpoint allows you to retrieve a list of all stages that are associated with a given run ID.")),(0,r.kt)("div",null,(0,r.kt)("h3",{className:"mb-1 text-lg font-bold text-stone-600 dark:text-stone-200"},"Response Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e4",\n    "createdAt": "2023-03-20T17:17:13.760Z",\n    "updatedAt": "2023-03-20T17:17:13.760Z",\n    "type": "PREPARE",\n    "startedAt": "2023-03-20T17:17:13.740Z",\n    "endedAt": "2023-03-20T17:17:14.740Z",\n    "duration": 60,\n    "status": "SUCCESS",\n    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"\n  },\n  {\n    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e5",\n    "createdAt": "2023-03-20T17:17:13.760Z",\n    "updatedAt": "2023-03-20T17:17:13.760Z",\n    "type": "CODE_QUALITY",\n    "startedAt": "2023-03-20T17:17:13.740Z",\n    "endedAt": null,\n    "duration": null,\n    "status": "IN_PROGRESS",\n    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"\n  },\n  {\n    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e6",\n    "createdAt": "2023-03-20T17:17:13.760Z",\n    "updatedAt": "2023-03-20T17:17:13.760Z",\n    "type": "UNIT_TEST",\n    "startedAt": "2023-03-20T17:17:13.740Z",\n    "endedAt": null,\n    "duration": null,\n    "status": "IDLE",\n    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"\n  },\n  {\n    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e7",\n    "createdAt": "2023-03-20T17:17:13.760Z",\n    "updatedAt": "2023-03-20T17:17:13.760Z",\n    "type": "BUILD",\n    "startedAt": "2023-03-20T17:17:13.740Z",\n    "endedAt": null,\n    "duration": null,\n    "status": "IDLE",\n    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"\n  },\n  {\n    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e8",\n    "createdAt": "2023-03-20T17:17:13.760Z",\n    "updatedAt": "2023-03-20T17:17:13.760Z",\n    "type": "DEPLOY_STAGING",\n    "startedAt": "2023-03-20T17:17:13.740Z",\n    "endedAt": null,\n    "duration": null,\n    "status": "IDLE",\n    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"\n  },\n  {\n    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e9",\n    "createdAt": "2023-03-20T17:17:13.760Z",\n    "updatedAt": "2023-03-20T17:17:13.760Z",\n    "type": "DEPLOY_PROD",\n    "startedAt": "2023-03-20T17:17:13.740Z",\n    "endedAt": null,\n    "duration": null,\n    "status": "IDLE",\n    "runId": "d8583d1c-ce63-4e0c-bd55-2088409bc7e3"\n  }\n]\n')),(0,r.kt)("hr",null),(0,r.kt)("div",null,(0,r.kt)("h2",{className:"mr-3 mt-10 text-2xl font-bold text-stone-800 dark:text-stone-100"},"PATCH",(0,r.kt)("code",{className:"ml-3 text-xl text-indigo-600 dark: dark:text-indigo-400"},"api/stages/:stageId")),(0,r.kt)("h3",{className:"mb-1 text-lg font-bold text-stone-600 dark:text-stone-200"},"Update a Stage"),(0,r.kt)("p",{className:"mb-3 text-stone-600 dark:text-stone-200"},"This endpoint allows you to update a stage. Add the properties to be updated in the request body."),(0,r.kt)("h3",{className:"mb-1 text-lg font-bold text-stone-600 dark:text-stone-200"},"Request Headers"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",{className:"text-indigo-600 dark: dark:text-indigo-400"},"Content-Type: application/json")))),(0,r.kt)("div",null,(0,r.kt)("h3",{className:"mb-1 text-lg font-bold text-stone-600 dark:text-stone-200"},"Request Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "IN_PROGRESS"\n}\n')),(0,r.kt)("div",null,(0,r.kt)("h3",{className:"mb-1 text-lg font-bold text-stone-600 dark:text-stone-200"},"Response Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,r.kt)("hr",null),(0,r.kt)("div",null,(0,r.kt)("h2",{className:"mr-3 mt-10 text-2xl font-bold text-stone-800 dark:text-stone-100"},"DELETE",(0,r.kt)("code",{className:"ml-3 text-xl text-indigo-600 dark: dark:text-indigo-400"},"api/stages/:stageId")),(0,r.kt)("h3",{className:"mb-1 text-lg font-bold text-stone-600 dark:text-stone-200"},"Delete a Stage"),(0,r.kt)("p",{className:"mb-3 text-stone-600 dark:text-stone-200"},"This endpoint allows you to delete a stage using its id.")),(0,r.kt)("div",null,(0,r.kt)("h3",{className:"mb-1 text-lg font-bold text-stone-600 dark:text-stone-200"},"Response Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "fc27f809-961b-4cf8-b535-944d74628945",\n  "createdAt": "2023-03-28T13:08:15.518Z",\n  "updatedAt": "2023-03-28T13:08:15.518Z",\n  "type": "PREPARE",\n  "startedAt": "2023-03-28T13:08:15.503Z",\n  "endedAt": null,\n  "duration": null,\n  "status": "IDLE",\n  "runId": "c6e690ba-d887-4976-bf5b-2ebd3a253bee"\n}\n')),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);