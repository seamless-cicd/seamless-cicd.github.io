"use strict";(self.webpackChunkseamless_cicd_github_io=self.webpackChunkseamless_cicd_github_io||[]).push([[165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),b=s,m=d["".concat(l,".").concat(b)]||d[b]||u[b]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),s=(n(7294),n(3905));const r={},i="Pipelines",o={unversionedId:"api/pipelines",id:"api/pipelines",title:"Pipelines",description:"Method:",source:"@site/docs/api/01-pipelines.mdx",sourceDirName:"api",slug:"/api/pipelines",permalink:"/api/pipelines",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"apiDocsSidebar",next:{title:"Services",permalink:"/api/services"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"pipelines"},"Pipelines"),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-bold text-indigo-600"},"Method: "),(0,s.kt)("span",{className:"font-extrabold text-stone-500"},"GET")),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-bold text-indigo-600"},"Route: "),(0,s.kt)("code",{className:"text-indigo-400"},"api/pipelines")),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-bold text-indigo-600"},"Status: "),(0,s.kt)("span",{className:"text-green-600"},"200 OK")),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-bold text-indigo-600"},"Response Body:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e1",\n    "createdAt": "2023-03-20T17:17:13.760Z",\n    "updatedAt": "2023-03-20T17:17:13.760Z",\n    "name": "Demo Pipeline",\n    "awsEcsCluster": "Demo-Cluster-AX8J34",\n    "awsEcsClusterStaging": "Demo-StagingCluster-kD5hKe3",\n    "githubClientId": "83b3ac48a100cc6fb320",\n    "githubClientSecret": "a43abd98aa3a2b3332add3a12ac4ba3e02cba48b",\n    "githubOauthToken": "abc_D1fa7dK8cXc2atzH19AcfRD9azaGhZ2ItbAd",\n    "services": []\n  }\n]\n')),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Method:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"GET")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Route:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"api/pipelines/:pipelineId")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Response Body:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e1",\n  "createdAt": "2023-03-20T17:17:13.760Z",\n  "updatedAt": "2023-03-20T17:17:13.760Z",\n  "name": "Demo Pipeline",\n  "awsEcsCluster": "Demo-Cluster-AX8J34",\n  "awsEcsClusterStaging": "Demo-StagingCluster-kD5hKe3",\n  "githubClientId": "83b3ac48a100cc6fb320",\n  "githubClientSecret": "a43abd98aa3a2b3332add3a12ac4ba3e02cba48b",\n  "githubOauthToken": "abc_D1fa7dK8cXc2atzH19AcfRD9azaGhZ2ItbAd",\n  "services": []\n}\n')),(0,s.kt)("hr",null),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-bold text-indigo-600"},"Method: "),(0,s.kt)("span",{className:"font-extrabold text-stone-500"},"POST")),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-bold text-indigo-600"},"Route: "),(0,s.kt)("code",{className:"text-indigo-400"},"api/pipelines")),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-bold text-indigo-600"},"Request Headers:")),(0,s.kt)("ul",{className:"list-disc"},(0,s.kt)("li",{className:"text-stone-500"},"Content-Type: application/json")),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-bold text-indigo-600"},"Request Body:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Demo Pipeline Two",\n  "awsEcsCluster": "Demo-Cluster-Two-BCA8HT",\n  "awsEcsClusterStaging": "Demo-StagingCluster-Two-4k8ca45",\n  "githubClientId": "83b3ac48a100cc6fb320",\n  "githubClientSecret": "a43abd98aa3a2b3332add3a12ac4ba3e02cba48b",\n  "githubOauthToken": "abc_D1fa7dK8cXc2atzH19AcfRD9azaGhZ2ItbAd"\n}\n')),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-bold text-indigo-600"},"Status: "),(0,s.kt)("span",{className:"text-green-600"},"200 OK")),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-bold text-indigo-600"},"Response Body:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "1b22e175-08ac-4d78-b3bb-ab0dd4de5582",\n  "createdAt": "2023-03-27T22:40:02.540Z",\n  "updatedAt": "2023-03-27T22:40:02.540Z",\n  "name": "Demo Pipeline Two",\n  "awsEcsCluster": "Demo-Cluster-Two-BCA8HT",\n  "awsEcsClusterStaging": "Demo-StagingCluster-Two-4k8ca45",\n  "githubClientId": "83b3ac48a100cc6fb320",\n  "githubClientSecret": "a43abd98aa3a2b3332add3a12ac4ba3e02cba48b",\n  "githubOauthToken": "abc_D1fa7dK8cXc2atzH19AcfRD9azaGhZ2ItbAd"\n}\n')),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Method:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"DELETE")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Route:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"api/pipelines/:pipelineId")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Response Body:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")))}u.isMDXComponent=!0}}]);