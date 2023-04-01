"use strict";(self.webpackChunkseamless_cicd_github_io=self.webpackChunkseamless_cicd_github_io||[]).push([[165],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=s,m=d["".concat(l,".").concat(u)]||d[u]||b[u]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,r[1]=o;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9495:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),s=(a(7294),a(3905));const i={},r="Pipelines",o={unversionedId:"api/pipelines",id:"api/pipelines",title:"Pipelines",description:"GET",source:"@site/docs/api/01-pipelines.mdx",sourceDirName:"api",slug:"/api/pipelines",permalink:"/api/pipelines",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"apiDocsSidebar",next:{title:"Services",permalink:"/api/services"}},l={},c=[],p={toc:c},d="wrapper";function b(e){let{components:t,...a}=e;return(0,s.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"pipelines"},"Pipelines"),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-extrabold text-stone-500 text-2xl"},"GET "),(0,s.kt)("code",{className:"text-indigo-400"},"api/pipelines")),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-extrabold text-stone-500"},"List all pipelines"),(0,s.kt)("br",null),(0,s.kt)("span",{className:"text-stone-600"},"This endpoint allows you to retireve a list of all pipelines.")),(0,s.kt)("div",{className:"font-extrabold text-stone-500 mb-2"},"Response Body"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e1",\n    "createdAt": "2023-03-20T17:17:13.760Z",\n    "updatedAt": "2023-03-20T17:17:13.760Z",\n    "name": "Demo Pipeline",\n    "awsEcsCluster": "Demo-Cluster-AX8J34",\n    "awsEcsClusterStaging": "Demo-StagingCluster-kD5hKe3",\n    "githubClientId": "83b3ac48a100cc6fb320",\n    "githubClientSecret": "a43abd98aa3a2b3332add3a12ac4ba3e02cba48b",\n    "githubOauthToken": "abc_D1fa7dK8cXc2atzH19AcfRD9azaGhZ2ItbAd",\n    "services": []\n  }\n]\n')),(0,s.kt)("hr",null),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-extrabold text-stone-500 text-2xl"},"GET "),(0,s.kt)("code",{className:"text-indigo-400"},"api/pipelines/:pipelineId")),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-extrabold text-stone-500"},"List a pipeline"),(0,s.kt)("br",null),(0,s.kt)("span",{className:"text-stone-600"},"This endpoint allows you to retireve a single pipeline using the its id.")),(0,s.kt)("div",{className:"font-extrabold text-stone-500 mb-2"},"Response Body"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "d8583d1c-ce63-4e0c-bd55-2088409bc7e1",\n  "createdAt": "2023-03-20T17:17:13.760Z",\n  "updatedAt": "2023-03-20T17:17:13.760Z",\n  "name": "Demo Pipeline",\n  "awsEcsCluster": "Demo-Cluster-AX8J34",\n  "awsEcsClusterStaging": "Demo-StagingCluster-kD5hKe3",\n  "githubClientId": "83b3ac48a100cc6fb320",\n  "githubClientSecret": "a43abd98aa3a2b3332add3a12ac4ba3e02cba48b",\n  "githubOauthToken": "abc_D1fa7dK8cXc2atzH19AcfRD9azaGhZ2ItbAd",\n  "services": []\n}\n')),(0,s.kt)("hr",null),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-extrabold text-stone-500 text-2xl"},"POST "),(0,s.kt)("code",{className:"text-indigo-400"},"api/pipelines")),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-extrabold text-stone-500"},"Create a pipeline"),(0,s.kt)("br",null),(0,s.kt)("span",{className:"text-stone-600"},"This endpoint allows you to add a new pipeline to the pipeline list. Properites shown in the request body are required.")),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-extrabold text-stone-500"},"Request Headers "),(0,s.kt)("code",{className:"text-indigo-400"},"Content-Type: application/json")),(0,s.kt)("div",{className:"font-extrabold text-stone-500 mb-2"},"Request Body"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Demo Pipeline Two",\n  "awsEcsCluster": "Demo-Cluster-Two-BCA8HT",\n  "awsEcsClusterStaging": "Demo-StagingCluster-Two-4k8ca45",\n  "githubClientId": "83b3ac48a100cc6fb320",\n  "githubClientSecret": "a43abd98aa3a2b3332add3a12ac4ba3e02cba48b",\n  "githubOauthToken": "abc_D1fa7dK8cXc2atzH19AcfRD9azaGhZ2ItbAd"\n}\n')),(0,s.kt)("div",{className:"font-extrabold text-stone-500 mb-2"},"Response Body"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "1b22e175-08ac-4d78-b3bb-ab0dd4de5582",\n  "createdAt": "2023-03-27T22:40:02.540Z",\n  "updatedAt": "2023-03-27T22:40:02.540Z",\n  "name": "Demo Pipeline Two",\n  "awsEcsCluster": "Demo-Cluster-Two-BCA8HT",\n  "awsEcsClusterStaging": "Demo-StagingCluster-Two-4k8ca45",\n  "githubClientId": "83b3ac48a100cc6fb320",\n  "githubClientSecret": "a43abd98aa3a2b3332add3a12ac4ba3e02cba48b",\n  "githubOauthToken": "abc_D1fa7dK8cXc2atzH19AcfRD9azaGhZ2ItbAd"\n}\n')),(0,s.kt)("hr",null),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-extrabold text-stone-500 text-2xl"},"DELETE "),(0,s.kt)("code",{className:"text-indigo-400"},"api/pipelines/:pipelineId")),(0,s.kt)("div",{className:"mb-2"},(0,s.kt)("span",{className:"font-extrabold text-stone-500"},"Delete a pipeline"),(0,s.kt)("br",null),(0,s.kt)("span",{className:"text-stone-600"},"This endpoint allows you to delete a pipeline by using its id.")),(0,s.kt)("div",{className:"font-extrabold text-stone-500 mb-2"},"Response Body"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")))}b.isMDXComponent=!0}}]);