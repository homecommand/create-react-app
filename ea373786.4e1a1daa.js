/*! For license information please see ea373786.4e1a1daa.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(178),n(177)),u={id:"importing-a-component",title:"Importing a Component"},c=[{value:"<code>Button.js</code>",id:"buttonjs",children:[]},{value:"<code>DangerButton.js</code>",id:"dangerbuttonjs",children:[]},{value:"Absolute Imports",id:"absolute-imports",children:[]}],i={id:"importing-a-component",title:"Importing a Component",description:"This project setup supports ES6 modules thanks to webpack.",source:"@site/../docs/importing-a-component.md",permalink:"/docs/importing-a-component",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/importing-a-component.md",lastUpdatedBy:"Lewis Llobera",lastUpdatedAt:1581604862,sidebar:"docs",previous:{title:"Installing a Dependency",permalink:"/docs/installing-a-dependency"},next:{title:"Using Global Variables",permalink:"/docs/using-global-variables"}},l={rightToc:c,metadata:i},s="wrapper";function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(s,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This project setup supports ES6 modules thanks to webpack."),Object(a.b)("p",null,"While you can still use ",Object(a.b)("inlineCode",{parentName:"p"},"require()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"module.exports"),", we encourage you to use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://exploringjs.com/es6/ch_modules.html"}),Object(a.b)("inlineCode",{parentName:"a"},"import")," and ",Object(a.b)("inlineCode",{parentName:"a"},"export"))," instead."),Object(a.b)("p",null,"For example:"),Object(a.b)("h2",{id:"buttonjs"},Object(a.b)("inlineCode",{parentName:"h2"},"Button.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\n\nclass Button extends Component {\n  render() {\n    // ...\n  }\n}\n\nexport default Button; // Don\u2019t forget to use export default!\n")),Object(a.b)("h2",{id:"dangerbuttonjs"},Object(a.b)("inlineCode",{parentName:"h2"},"DangerButton.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\nimport Button from './Button'; // Import a component from another file\n\nclass DangerButton extends Component {\n  render() {\n    return <Button color=\"red\" />;\n  }\n}\n\nexport default DangerButton;\n")),Object(a.b)("p",null,"Be aware of the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281"}),"difference between default and named exports"),". It is a common source of mistakes."),Object(a.b)("p",null,"We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That\u2019s what you get when you use ",Object(a.b)("inlineCode",{parentName:"p"},"export default Button")," and ",Object(a.b)("inlineCode",{parentName:"p"},"import Button from './Button'"),"."),Object(a.b)("p",null,"Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like."),Object(a.b)("p",null,"Learn more about ES6 modules:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281"}),"When to use the curly braces?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://exploringjs.com/es6/ch_modules.html"}),"Exploring ES6: Modules")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules"}),"Understanding ES6: Modules"))),Object(a.b)("h2",{id:"absolute-imports"},"Absolute Imports"),Object(a.b)("p",null,"You can configure your application to support importing modules using absolute paths. This can be done by configuring a ",Object(a.b)("inlineCode",{parentName:"p"},"jsconfig.json")," or ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file in the root of your project. If you're using TypeScript in your project, you will already have a ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file."),Object(a.b)("p",null,"Below is an example ",Object(a.b)("inlineCode",{parentName:"p"},"jsconfig.json")," file for a JavaScript project. You can create the file if it doesn't already exist:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "baseUrl": "src"\n  },\n  "include": ["src"]\n}\n')),Object(a.b)("p",null,"If you're using TypeScript, you can configure the ",Object(a.b)("inlineCode",{parentName:"p"},"baseUrl")," setting inside the ",Object(a.b)("inlineCode",{parentName:"p"},"compilerOptions")," of your project's ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file."),Object(a.b)("p",null,"Now that you've configured your project to support absolute imports, if you want to import a module located at ",Object(a.b)("inlineCode",{parentName:"p"},"src/components/Button.js"),", you can import the module like so:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import Button from 'components/Button';\n")),Object(a.b)("p",null,"For more information on these configuration files, see the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/languages/jsconfig"}),"jsconfig.json reference")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"}),"tsconfig.json reference")," documentation."))}p.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r),a=o.a.createContext({}),u=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=u(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var i="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=u(n),p=r,f=s[c+"."+p]||s[p]||l[p]||a;return n?o.a.createElement(f,Object.assign({},{ref:t},i,{components:n})):o.a.createElement(f,Object.assign({},{ref:t},i))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[i]="string"==typeof e?e:r,u[1]=c;for(var p=2;p<a;p++)u[p]=n[p];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";e.exports=n(179)},179:function(e,t,n){"use strict";var r=n(180),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var m=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var y="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(j(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=O.prototype;var x=w.prototype=new v;x.constructor=w,r(x,O.prototype),x.isPureReactComponent=!0;var C={current:null},S={current:null},k=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r,o={},u=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)k.call(t,r)&&!N.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:S.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var B=/\/+/g,P=[];function $(e,t,n,r){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function T(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var i=!1;if(null===t)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case a:case u:i=!0}}if(i)return r(o,t,""===n?"."+I(t,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=n+I(c=t[l],l);i+=e(c,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=y&&t[y]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(c=t.next()).done;)i+=e(c=c.value,s=n+I(c,l++),r,o);else if("object"===c)throw r=""+t,Error(j(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return i}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(B,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(B,"$&/")+"/"),T(e,U,t=$(t,a,r,o)),R(t)}function M(){var e=C.current;if(null===e)throw Error(j(321));return e}var q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;T(e,A,t=$(null,null,t,n)),R(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(j(143));return e}},createRef:function(){return{current:null}},Component:O,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return M().useCallback(e,t)},useContext:function(e,t){return M().useContext(e,t)},useEffect:function(e,t){return M().useEffect(e,t)},useImperativeHandle:function(e,t,n){return M().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return M().useLayoutEffect(e,t)},useMemo:function(e,t){return M().useMemo(e,t)},useReducer:function(e,t,n){return M().useReducer(e,t,n)},useRef:function(e){return M().useRef(e)},useState:function(e){return M().useState(e)},Fragment:c,Profiler:l,StrictMode:i,Suspense:b,createElement:E,cloneElement:function(e,t,n){if(null==e)throw Error(j(267,e));var o=r({},e.props),u=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=S.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)k.call(t,s)&&!N.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:a,type:e.type,key:u,ref:c,props:o,_owner:i}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:_,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r}},L={default:q},F=L&&q||L;e.exports=F.default||F},180:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,i=u(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(i[s]=n[s]);if(r){c=r(n);for(var p=0;p<c.length;p++)a.call(n,c[p])&&(i[c[p]]=n[c[p]])}}return i}}}]);