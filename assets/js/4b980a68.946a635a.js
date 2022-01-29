"use strict";(self.webpackChunkdisnake_guide=self.webpackChunkdisnake_guide||[]).push([[770],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7762:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={description:"An article on the various ways you can install disnake.",keywords:["disnake","bot","guide","tutorial","install","python"],hide_table_of_contents:!0},s="Installing disnake",p={unversionedId:"prerequisites/installing-disnake",id:"prerequisites/installing-disnake",title:"Installing disnake",description:"An article on the various ways you can install disnake.",source:"@site/docs/prerequisites/installing-disnake.mdx",sourceDirName:"prerequisites",slug:"/prerequisites/installing-disnake",permalink:"/prerequisites/installing-disnake",editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/prerequisites/installing-disnake.mdx",tags:[],version:"current",lastUpdatedBy:"Abhigyan Tripathi",lastUpdatedAt:1643451684,formattedLastUpdatedAt:"1/29/2022",frontMatter:{description:"An article on the various ways you can install disnake.",keywords:["disnake","bot","guide","tutorial","install","python"],hide_table_of_contents:!0},sidebar:"guideSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Migrating from discord.py",permalink:"/prerequisites/migrating-from-dpy"}},d=[],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},u=c("Tabs"),m=c("TabItem"),k={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-disnake"},"Installing disnake"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To use disnake, you'll first need to install ",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python"),". Like most other\n",(0,r.kt)("a",{parentName:"p",href:"https://discordpy.readthedocs.io/en/latest"},(0,r.kt)("inlineCode",{parentName:"a"},"discord.py"))," forks, disnake supports Python 3.8 or higher. For a full\nwalkthrough on installing Python, we suggest following\n",(0,r.kt)("a",{parentName:"p",href:"https://realpython.com/installing-python/"},"this Real Python article"),", or\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.python-guide.org/starting/installation/"},"The Hitchhiker's Guide to Python"),"."))),(0,r.kt)("p",null,"To use disnake, you'll need to install it via ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),", which is Python's standard package manager. Since pip comes\nstandard with Python 3.4 and above, there is no need to separately install it."),(0,r.kt)("p",null,"To install the library without full voice support, you can just run the following command:"),(0,r.kt)(u,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(m,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"py -3 -m pip install -U disnake\n"))),(0,r.kt)(m,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python3 -m pip install -U disnake\n"))),(0,r.kt)(m,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python3 -m pip install -U disnake\n")))),(0,r.kt)("p",null,"Otherwise to get voice support you should run the following command:"),(0,r.kt)(u,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(m,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'py -3 -m pip install -U "disnake[voice]"\n'))),(0,r.kt)(m,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'python3 -m pip install -U "disnake[voice]"\n'))),(0,r.kt)(m,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'python3 -m pip install -U "disnake[voice]"\n')))),(0,r.kt)("p",null,"To install the development version, do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ pip install -U git+https://github.com/DisnakeDev/disnake#egg=disnake[speed,voice]\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"While installing voice on Linux, you must install the following packages via your favourite package manager (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"apt"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"dnf"),", etc.) before running the above commands:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"libffi-dev (or ",(0,r.kt)("inlineCode",{parentName:"li"},"libffi-devel")," on some systems)"),(0,r.kt)("li",{parentName:"ul"},"python-dev (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"python3.6-dev")," for Python 3.6)")))),(0,r.kt)("p",null,"And that's it! With all the necessities installed, you're almost ready to start coding your bot."))}h.isMDXComponent=!0}}]);