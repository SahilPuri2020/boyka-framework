"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1767],{167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7612);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,h=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(5731),o=n(2706),i=(n(7612),n(167)),a=["components"],l={title:"\ud83c\udfd7\ufe0f Building the project",sidebar_position:2},c=void 0,p={unversionedId:"machine-setup/build-project",id:"machine-setup/build-project",title:"\ud83c\udfd7\ufe0f Building the project",description:"Java project",source:"@site/docs/contributing/machine-setup/build-project.md",sourceDirName:"machine-setup",slug:"/machine-setup/build-project",permalink:"/boyka-framework/contributing/machine-setup/build-project",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/contributing/machine-setup/build-project.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1654837790,formattedLastUpdatedAt:"6/10/2022",sidebarPosition:2,frontMatter:{title:"\ud83c\udfd7\ufe0f Building the project",sidebar_position:2},sidebar:"contributing",previous:{title:"\u2328\ufe0f Suggested IDE",permalink:"/boyka-framework/contributing/machine-setup/suggested-ide"},next:{title:"\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1 Join our Discord server",permalink:"/boyka-framework/contributing/machine-setup/join-discord"}},u={},d=[{value:"Java project",id:"java-project",level:2},{value:"Build the project",id:"build-project",level:3},{value:"Documentation project",id:"documentation-project",level:2},{value:"Build the project",id:"build-documentation-project",level:3},{value:"Run the project",id:"run-the-project",level:3},{value:"Upgrade outdated dependencies",id:"upgrade-outdated-dependencies",level:3}],s={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"java-project"},"Java project"),(0,i.kt)("p",null,"The main Java project is located in ",(0,i.kt)("inlineCode",{parentName:"p"},"core-java/")," directory."),(0,i.kt)("h3",{id:"build-project"},"Build the project"),(0,i.kt)("p",null,"From the root repository directory, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"> mvn install -f core-java/pom.xml -DskipTests\n")),(0,i.kt)("p",null,"This will resolve the dependencies and run checkstyle for the project."),(0,i.kt)("h2",{id:"documentation-project"},"Documentation project"),(0,i.kt)("p",null,"The documentation project is located in ",(0,i.kt)("inlineCode",{parentName:"p"},"website/")," directory."),(0,i.kt)("h3",{id:"build-documentation-project"},"Build the project"),(0,i.kt)("p",null,"From the root repository directory, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"> yarn install\n> yarn build:site\n")),(0,i.kt)("p",null,"This will install all dependencies and build the documentation site."),(0,i.kt)("h3",{id:"run-the-project"},"Run the project"),(0,i.kt)("p",null,"From the root repository directory, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"> yarn start:site\n")),(0,i.kt)("p",null,"This will start the documentation site on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:3000"),"."),(0,i.kt)("h3",{id:"upgrade-outdated-dependencies"},"Upgrade outdated dependencies"),(0,i.kt)("p",null,"From the root repository directory, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"> yarn upgrade-interactive\n")),(0,i.kt)("p",null,"This will prompt to select the version to which we need to upgrade any particular dependency."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can upgrade any dependency to latest version even if it is upgrading to major version, except for the following dependencies:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react-dom")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@mdx-js/react")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@docusaurus/*"))),(0,i.kt)("p",{parentName:"div"},"Only the ",(0,i.kt)("inlineCode",{parentName:"p"},"boyka-core")," team will upgrade the above dependencies."))))}m.isMDXComponent=!0}}]);