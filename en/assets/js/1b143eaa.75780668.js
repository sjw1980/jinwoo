"use strict";(self.webpackChunkjinwoo=self.webpackChunkjinwoo||[]).push([[544],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?o.createElement(f,a(a({ref:n},p),{},{components:t})):o.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1},a="Manage Docs Versions",s={unversionedId:"life-tip/manage-docs-versions",id:"life-tip/manage-docs-versions",title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/life-tip/manage-docs-versions.md",sourceDirName:"life-tip",slug:"/life-tip/manage-docs-versions",permalink:"/jinwoo/en/docs/life-tip/manage-docs-versions",draft:!1,editUrl:"https://github.com/sjw1980/jinwoo/docs/life-tip/manage-docs-versions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"life - tip",permalink:"/jinwoo/en/docs/category/life---tip"},next:{title:"Translate your site",permalink:"/jinwoo/en/docs/life-tip/translate-your-site"}},l={},c=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}],p={toc:c};function d(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manage-docs-versions"},"Manage Docs Versions"),(0,r.kt)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,r.kt)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,r.kt)("p",null,"Release a version 1.0 of your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,r.kt)("p",null,"Your docs now have 2 versions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1.0")," at ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"current")," at ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,r.kt)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,r.kt)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,r.kt)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,r.kt)("p",null,"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,r.kt)("p",null,"The docs version dropdown appears in your navbar:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docs Version Dropdown",src:t(1014).Z,width:"370",height:"302"})),(0,r.kt)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,r.kt)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}d.isMDXComponent=!0},1014:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"}}]);