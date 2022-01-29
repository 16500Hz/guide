"use strict";(self.webpackChunkdisnake_guide=self.webpackChunkdisnake_guide||[]).push([[78],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=u(n),m=o,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=l;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},8782:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return v}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),i=["components"],a={},c="Message Components",u={unversionedId:"interactions/message-components",id:"interactions/message-components",title:"Message Components",description:"Buttons",source:"@site/docs/interactions/message-components.mdx",sourceDirName:"interactions",slug:"/interactions/message-components",permalink:"/interactions/message-components",editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/interactions/message-components.mdx",tags:[],version:"current",lastUpdatedBy:"Abhigyan Tripathi",lastUpdatedAt:1643451684,formattedLastUpdatedAt:"1/29/2022",frontMatter:{},sidebar:"guideSidebar",previous:{title:"User/Message Commands",permalink:"/interactions/user-message-commands"},next:{title:"Popular Topics",permalink:"/popular-topics"}},p=[{value:"Buttons",id:"buttons",children:[],level:2},{value:"Select Menus",id:"select-menus",children:[],level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},l=d("DiscordMessages"),m=d("DiscordMessage"),f=d("DiscordInteraction"),y=d("DiscordButtons"),g=d("DiscordButton"),b={toc:p};function v(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"message-components"},"Message Components"),(0,s.kt)("h2",{id:"buttons"},"Buttons"),(0,s.kt)("br",null),(0,s.kt)(l,{mdxType:"DiscordMessages"},(0,s.kt)(m,{author:"Disnake Bot",avatar:"/public/disnake-logo.png",bot:"true",mdxType:"DiscordMessage"},(0,s.kt)("div",{slot:"interactions"},(0,s.kt)(f,{author:"AbhigyanTrips",avatar:"/public/message-author.png",command:"true",mdxType:"DiscordInteraction"},"buttons")),(0,s.kt)(y,{mdxType:"DiscordButtons"},(0,s.kt)(g,{type:"primary",mdxType:"DiscordButton"},"Primary"),(0,s.kt)(g,{type:"secondary",mdxType:"DiscordButton"},"Secondary"),(0,s.kt)(g,{type:"success",mdxType:"DiscordButton"},"Success"),(0,s.kt)(g,{type:"danger",mdxType:"DiscordButton"},"Danger"),(0,s.kt)(g,{type:"link",url:"https://guide.disnake.dev/",mdxType:"DiscordButton"},"Link")))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"select-menus"},"Select Menus"))}v.isMDXComponent=!0}}]);