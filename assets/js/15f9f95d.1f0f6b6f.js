"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7123],{167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7612);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6931:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(5731),o=n(2706),i=(n(7612),n(167)),a=["components"],s={title:"\ud83e\ude9b Setup Configuration file",sidebar_position:1},l=void 0,c={unversionedId:"guides/web/setup-config",id:"guides/web/setup-config",title:"\ud83e\ude9b Setup Configuration file",description:"Before starting to automate Web applications, we need to first setup the configuration file for our Application under test.",source:"@site/docs/framework-docs/guides/web/setup-config.md",sourceDirName:"guides/web",slug:"/guides/web/setup-config",permalink:"/boyka-framework/docs/guides/web/setup-config",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/framework-docs/guides/web/setup-config.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1654837790,formattedLastUpdatedAt:"6/10/2022",sidebarPosition:1,frontMatter:{title:"\ud83e\ude9b Setup Configuration file",sidebar_position:1},sidebar:"docs",previous:{title:"\u2705 Verify Response",permalink:"/boyka-framework/docs/guides/api/verify-response"},next:{title:"\ud83d\udcc4 Create Page Object",permalink:"/boyka-framework/docs/guides/web/create-page-object"}},u={},p=[{value:"Details of each Web configurations",id:"web-config-details",level:2}],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Before starting to automate Web applications, we need to first setup the configuration file for our Application under test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/test/resources/boyka-config.json"',title:'"src/test/resources/boyka-config.json"'},'{\n  "ui": {\n    "playback": {\n      "implicit_wait": 10,\n      "explicit_wait": 30,\n      "page_load_timeout": 30,\n      "script_timeout": 10\n    },\n    "web": {\n      "test_local_chrome": {\n        "browser": "CHROME"\n      },\n      "test_local_firefox": {\n        "browser": "FIREFOX"\n      },\n      "test_local_edge": {\n        "browser": "EDGE"\n      },\n      "test_local_safari": {\n        "browser": "SAFARI"\n      },\n      "test_local_opera": {\n        "browser": "OPERA"\n      },\n      "test_browserstack_chrome": {\n        "browser": "REMOTE",\n        "cloud": "BROWSER_STACK",\n        "protocol": "HTTPS",\n        "host": "hub-cloud.browserstack.com",\n        "user_name": "${env:BS_USER}",\n        "password": "${env:BS_KEY}",\n        "capabilities": {\n          "browser": "Chrome",\n          "browser_version": "latest",\n          "os": "Windows",\n          "os_version": "10",\n          "resolution": "1920x1080",\n          "project": "Test Boyka Project",\n          "build": "Test BrowserStack Build",\n          "name": "Test BrowserStack Session"\n        }\n      },\n      "test_selenium_grid": {\n        "browser": "REMOTE",\n        "cloud": "NONE",\n        "port": "4444",\n        "capabilities": {\n          "browserName": "chrome",\n          "platform": "MAC"\n        }\n      },\n      "test_lambda_test_chrome": {\n        "browser": "REMOTE",\n        "cloud": "LAMBDA_TEST",\n        "protocol": "HTTPS",\n        "host": "hub.lambdatest.com",\n        "user_name": "${env:LT_USER}",\n        "password": "${env:LT_KEY}",\n        "capabilities": {\n          "browserName": "Chrome",\n          "version": "99.0",\n          "platform": "Windows 10",\n          "resolution": "1920x1080",\n          "build": "Test LambdaTest Build",\n          "name": "Test LambdaTest Session",\n          "network": true,\n          "visual": true,\n          "video": true,\n          "console": true\n        }\n      }\n    },\n    "android": {\n      ...\n    },\n    "ios": {\n      ...\n    }\n  },\n  "api": {\n    ...\n  }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To know more about Web configurations, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/configuration#web-config"},"Web Configuration guide"),"."))),(0,i.kt)("h2",{id:"web-config-details"},"Details of each Web configurations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test_local_chrome"),": This is the configuration for running the test on local Chrome browser."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test_local_firefox"),": This is the configuration for running the test on local Firefox browser."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test_local_edge"),": This is the configuration for running the test on local Edge browser."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test_local_safari"),": This is the configuration for running the test on local Safari browser."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test_local_opera"),": This is the configuration for running the test on local Opera browser."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test_browserstack_chrome"),": This is the configuration for running the test on BrowserStack Chrome browser."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test_selenium_grid"),": This is the configuration for running the test on Selenium Grid."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test_lambda_test_chrome"),": This is the configuration for running the test on LambdaTest Chrome browser.")))}m.isMDXComponent=!0}}]);