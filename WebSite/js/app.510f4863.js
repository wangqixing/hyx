(function(t){function e(e){for(var n,r,i=e[0],c=e[1],a=0,u=[];a<i.length;a++)r=i[a],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(u.length)u.shift()()}var n={},r={app:0},o={app:0};function i(t){return c.p+"js/"+({commons:"commons"}[t]||t)+"."+{"chunk-15c6a94a":"fed3228a","chunk-1b16d6bb":"ccc8375e","chunk-2d22d746":"a13fcd1c","chunk-622e2c34":"5cd65a23","chunk-672ab5f1":"3ae42ac5","chunk-6f60915f":"76c9ee68","chunk-a9afcda2":"de1205ed",commons:"86f9d5af","chunk-2b9e81c7":"52301959","chunk-2d0c9b28":"a4c27a2e","chunk-2d217c40":"cf758db7","chunk-2d225fa3":"48df0eb4","chunk-63c89360":"bc4f5737","chunk-f20aa3ea":"8d3dfe65","chunk-f658b264":"97eb7a50"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],n={"chunk-15c6a94a":1,"chunk-1b16d6bb":1,"chunk-622e2c34":1,"chunk-672ab5f1":1,"chunk-6f60915f":1,"chunk-a9afcda2":1,commons:1,"chunk-2b9e81c7":1,"chunk-63c89360":1,"chunk-f20aa3ea":1,"chunk-f658b264":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var o="css/"+({commons:"commons"}[t]||t)+"."+{"chunk-15c6a94a":"b20054f7","chunk-1b16d6bb":"704fd22c","chunk-2d22d746":"31d6cfe0","chunk-622e2c34":"cf26dfd1","chunk-672ab5f1":"cd96afb2","chunk-6f60915f":"4db89e4f","chunk-a9afcda2":"4b597a63",commons:"5aa8b9d3","chunk-2b9e81c7":"93ccd7b3","chunk-2d0c9b28":"31d6cfe0","chunk-2d217c40":"31d6cfe0","chunk-2d225fa3":"31d6cfe0","chunk-63c89360":"b119983b","chunk-f20aa3ea":"b014c3ca","chunk-f658b264":"8b818df0"}[t]+".css",i=c.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===o||f===i))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===o||f===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[t],d.parentNode.removeChild(d),n(c)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){r[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var u=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=i(t);var l=new Error;s=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[t]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var f=u;c(c.s=0)})({0:function(t,e,n){t.exports=n("56d7")},"01f9":function(t,e,n){"use strict";var r=n("2d00"),o=n("5ca1"),i=n("2aba"),c=n("32e9"),a=n("84f2"),u=n("41a0"),s=n("7f20"),f=n("38fd"),l=n("2b4c")("iterator"),d=!([].keys&&"next"in[].keys()),p="@@iterator",h="keys",v="values",m=function(){return this};t.exports=function(t,e,n,b,y,g,_){u(n,e,b);var w,x,k,O=function(t){if(!d&&t in E)return E[t];switch(t){case h:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",C=y==v,S=!1,E=t.prototype,P=E[l]||E[p]||y&&E[y],A=P||O(y),T=y?C?O("entries"):A:void 0,N="Array"==e&&E.entries||P;if(N&&(k=f(N.call(new t)),k!==Object.prototype&&k.next&&(s(k,j,!0),r||"function"==typeof k[l]||c(k,l,m))),C&&P&&P.name!==v&&(S=!0,A=function(){return P.call(this)}),r&&!_||!d&&!S&&E[l]||c(E,l,A),a[e]=A,a[j]=m,y)if(w={values:C?A:O(v),keys:g?A:O(h),entries:T},_)for(x in w)x in E||i(E,x,w[x]);else o(o.P+o.F*(d||S),e,w);return w}},"037c":function(t,e,n){"use strict";var r=n("a7de"),o=n.n(r);o.a},"097d":function(t,e,n){"use strict";var r=n("5ca1"),o=n("8378"),i=n("7726"),c=n("ebd6"),a=n("bcaa");r(r.P+r.R,"Promise",{finally:function(t){var e=c(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then(function(){return n})}:t,n?function(n){return a(e,t()).then(function(){throw n})}:t)}})},"0d58":function(t,e,n){var r=n("ce10"),o=n("e11e");t.exports=Object.keys||function(t){return r(t,o)}},1495:function(t,e,n){var r=n("86cc"),o=n("cb7c"),i=n("0d58");t.exports=n("9e1e")?Object.defineProperties:function(t,e){o(t);var n,c=i(e),a=c.length,u=0;while(a>u)r.f(t,n=c[u++],e[n]);return t}},1991:function(t,e,n){var r,o,i,c=n("9b43"),a=n("31f4"),u=n("fab2"),s=n("230e"),f=n("7726"),l=f.process,d=f.setImmediate,p=f.clearImmediate,h=f.MessageChannel,v=f.Dispatch,m=0,b={},y="onreadystatechange",g=function(){var t=+this;if(b.hasOwnProperty(t)){var e=b[t];delete b[t],e()}},_=function(t){g.call(t.data)};d&&p||(d=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return b[++m]=function(){a("function"==typeof t?t:Function(t),e)},r(m),m},p=function(t){delete b[t]},"process"==n("2d95")(l)?r=function(t){l.nextTick(c(g,t,1))}:v&&v.now?r=function(t){v.now(c(g,t,1))}:h?(o=new h,i=o.port2,o.port1.onmessage=_,r=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):r=y in s("script")?function(t){u.appendChild(s("script"))[y]=function(){u.removeChild(this),g.call(t)}}:function(t){setTimeout(c(g,t,1),0)}),t.exports={set:d,clear:p}},"1fa8":function(t,e,n){var r=n("cb7c");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(c){var i=t["return"];throw void 0!==i&&r(i.call(t)),c}}},"230e":function(t,e,n){var r=n("d3f4"),o=n("7726").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"23c6":function(t,e,n){var r=n("2d95"),o=n("2b4c")("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},2515:function(t,e,n){"use strict";var r=n("ec26"),o=n.n(r);o.a},2621:function(t,e){e.f=Object.getOwnPropertySymbols},"27ee":function(t,e,n){var r=n("23c6"),o=n("2b4c")("iterator"),i=n("84f2");t.exports=n("8378").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,c,a){var u,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),c?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},s._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var f=s.render;s.render=function(t,e){return u.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:s}}n.d(e,"a",function(){return r})},"2aba":function(t,e,n){var r=n("7726"),o=n("32e9"),i=n("69a8"),c=n("ca5a")("src"),a=n("fa5b"),u="toString",s=(""+a).split(u);n("8378").inspectSource=function(t){return a.call(t)},(t.exports=function(t,e,n,a){var u="function"==typeof n;u&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(u&&(i(n,c)||o(n,c,t[e]?""+t[e]:s.join(String(e)))),t===r?t[e]=n:a?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,u,function(){return"function"==typeof this&&this[c]||a.call(this)})},"2aeb":function(t,e,n){var r=n("cb7c"),o=n("1495"),i=n("e11e"),c=n("613b")("IE_PROTO"),a=function(){},u="prototype",s=function(){var t,e=n("230e")("iframe"),r=i.length,o="<",c=">";e.style.display="none",n("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+c+"document.F=Object"+o+"/script"+c),t.close(),s=t.F;while(r--)delete s[u][i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[u]=r(t),n=new a,a[u]=null,n[c]=t):n=s(),void 0===e?n:o(n,e)}},"2b4c":function(t,e,n){var r=n("5537")("wks"),o=n("ca5a"),i=n("7726").Symbol,c="function"==typeof i,a=t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))};a.store=r},"2d00":function(t,e){t.exports=!1},"2d18":function(t,e,n){t.exports=n.p+"img/weibo.644751e5.png"},"2d95":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"31f4":function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},"32e9":function(t,e,n){var r=n("86cc"),o=n("4630");t.exports=n("9e1e")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"33a4":function(t,e,n){var r=n("84f2"),o=n("2b4c")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},"38fd":function(t,e,n){var r=n("69a8"),o=n("4bf8"),i=n("613b")("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},"3c34":function(t,e,n){t.exports=n.p+"img/weixin.b070c593.png"},"41a0":function(t,e,n){"use strict";var r=n("2aeb"),o=n("4630"),i=n("7f20"),c={};n("32e9")(c,n("2b4c")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(c,{next:o(1,n)}),i(t,e+" Iterator")}},4588:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},4630:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"4a59":function(t,e,n){var r=n("9b43"),o=n("1fa8"),i=n("33a4"),c=n("cb7c"),a=n("9def"),u=n("27ee"),s={},f={};e=t.exports=function(t,e,n,l,d){var p,h,v,m,b=d?function(){return t}:u(t),y=r(n,l,e?2:1),g=0;if("function"!=typeof b)throw TypeError(t+" is not iterable!");if(i(b)){for(p=a(t.length);p>g;g++)if(m=e?y(c(h=t[g])[0],h[1]):y(t[g]),m===s||m===f)return m}else for(v=b.call(t);!(h=v.next()).done;)if(m=o(v,y,h.value,e),m===s||m===f)return m};e.BREAK=s,e.RETURN=f},"4bf8":function(t,e,n){var r=n("be13");t.exports=function(t){return Object(r(t))}},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"551c":function(t,e,n){"use strict";var r,o,i,c,a=n("2d00"),u=n("7726"),s=n("9b43"),f=n("23c6"),l=n("5ca1"),d=n("d3f4"),p=n("d8e8"),h=n("f605"),v=n("4a59"),m=n("ebd6"),b=n("1991").set,y=n("8079")(),g=n("a5b8"),_=n("9c80"),w=n("a25f"),x=n("bcaa"),k="Promise",O=u.TypeError,j=u.process,C=j&&j.versions,S=C&&C.v8||"",E=u[k],P="process"==f(j),A=function(){},T=o=g.f,N=!!function(){try{var t=E.resolve(1),e=(t.constructor={})[n("2b4c")("species")]=function(t){t(A,A)};return(P||"function"==typeof PromiseRejectionEvent)&&t.then(A)instanceof e&&0!==S.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(r){}}(),$=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},M=function(t,e){if(!t._n){t._n=!0;var n=t._c;y(function(){var r=t._v,o=1==t._s,i=0,c=function(e){var n,i,c,a=o?e.ok:e.fail,u=e.resolve,s=e.reject,f=e.domain;try{a?(o||(2==t._h&&H(t),t._h=1),!0===a?n=r:(f&&f.enter(),n=a(r),f&&(f.exit(),c=!0)),n===e.promise?s(O("Promise-chain cycle")):(i=$(n))?i.call(n,u,s):u(n)):s(r)}catch(l){f&&!c&&f.exit(),s(l)}};while(n.length>i)c(n[i++]);t._c=[],t._n=!1,e&&!t._h&&R(t)})}},R=function(t){b.call(u,function(){var e,n,r,o=t._v,i=F(t);if(i&&(e=_(function(){P?j.emit("unhandledRejection",o,t):(n=u.onunhandledrejection)?n({promise:t,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=P||F(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},F=function(t){return 1!==t._h&&0===(t._a||t._c).length},H=function(t){b.call(u,function(){var e;P?j.emit("rejectionHandled",t):(e=u.onrejectionhandled)&&e({promise:t,reason:t._v})})},I=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),M(e,!0))},L=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw O("Promise can't be resolved itself");(e=$(t))?y(function(){var r={_w:n,_d:!1};try{e.call(t,s(L,r,1),s(I,r,1))}catch(o){I.call(r,o)}}):(n._v=t,n._s=1,M(n,!1))}catch(r){I.call({_w:n,_d:!1},r)}}};N||(E=function(t){h(this,E,k,"_h"),p(t),r.call(this);try{t(s(L,this,1),s(I,this,1))}catch(e){I.call(this,e)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n("dcbc")(E.prototype,{then:function(t,e){var n=T(m(this,E));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=P?j.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&M(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(L,t,1),this.reject=s(I,t,1)},g.f=T=function(t){return t===E||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!N,{Promise:E}),n("7f20")(E,k),n("7a56")(k),c=n("8378")[k],l(l.S+l.F*!N,k,{reject:function(t){var e=T(this),n=e.reject;return n(t),e.promise}}),l(l.S+l.F*(a||!N),k,{resolve:function(t){return x(a&&this===c?E:this,t)}}),l(l.S+l.F*!(N&&n("5cc5")(function(t){E.all(t)["catch"](A)})),k,{all:function(t){var e=this,n=T(e),r=n.resolve,o=n.reject,i=_(function(){var n=[],i=0,c=1;v(t,!1,function(t){var a=i++,u=!1;n.push(void 0),c++,e.resolve(t).then(function(t){u||(u=!0,n[a]=t,--c||r(n))},o)}),--c||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=T(e),r=n.reject,o=_(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},5537:function(t,e,n){var r=n("8378"),o=n("7726"),i="__core-js_shared__",c=o[i]||(o[i]={});(t.exports=function(t,e){return c[t]||(c[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("2d00")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"56d7":function(t,e,n){"use strict";n.r(e);n("7f7f"),n("cadf"),n("551c"),n("f751"),n("097d");var r=n("8bbf"),o=n.n(r),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.$store.state.showHeader?n("Header"):t._e(),n("div",{staticClass:"main"},[n("keep-alive",{attrs:{include:"Home,MobileLife,Activity,Cooperation,Brand"}},[n("router-view")],1)],1),t.$store.state.showFooter?n("Footer"):t._e()],1)},c=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-header"},[r("div",{staticClass:"main-content"},[r("img",{staticClass:"logo",attrs:{src:n("9d64")}}),r("div",{staticClass:"nav-list"},[r("router-link",{class:["Home"===t.$store.state.pageName?"nav-item-active":"nav-item"],attrs:{to:"/"}},[t._v("首页")]),r("router-link",{class:["MobileLife"===t.$store.state.pageName?"nav-item-active":"nav-item"],attrs:{to:"/mobilelife"}},[t._v("解决方案")]),r("router-link",{class:["Activity"===t.$store.state.pageName||"ActivityDetail"===t.$store.state.pageName||"ActivityEvent"===t.$store.state.pageName||"ActivityHot"===t.$store.state.pageName||"ActivityNews"===t.$store.state.pageName?"nav-item-active":"nav-item"],attrs:{to:"/activity"}},[t._v("创新产品")]),r("router-link",{class:["Cooperation"===t.$store.state.pageName?"nav-item-active":"nav-item"],attrs:{to:"/cooperation"}},[t._v("客户案例")]),r("router-link",{class:["Brand"===t.$store.state.pageName?"nav-item-active":"nav-item"],attrs:{to:"/brand"}},[t._v("关于我们")])],1)]),"Home"!==t.$store.state.pageName&&"MobileLife"!==t.$store.state.pageName?r("div",{staticClass:"page-navigation-line"}):t._e()])},u=[],s={data:function(){return{}},components:{}},f=s,l=(n("037c"),n("2877")),d=Object(l["a"])(f,a,u,!1,null,"f325ce0e",null),p=d.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-footer"},[r("div",{staticClass:"main-content"},[r("div",{staticClass:"title-group"},[r("a",{staticClass:"footer-nav-item",attrs:{href:"javascript:void(0)"},on:{click:t.jumpTo}},[t._v("关于我们")]),r("router-link",{staticClass:"footer-nav-item",attrs:{to:"/brand"}},[t._v("关于我们")]),r("router-link",{staticClass:"footer-nav-item",attrs:{to:"/recruit"}},[t._v("招聘英才")])],1),r("div",{staticClass:"desc-group"},[t._m(0),t._m(1),r("div",{staticClass:"follow"},[r("div",{staticClass:"footer-item-title"},[t._v("关注我们")]),r("a",{on:{mouseover:function(e){t.qrShow=!0},mouseleave:function(e){t.qrShow=!1}}},[r("img",{staticClass:"connect-img",attrs:{src:n("3c34")}})]),t._m(2),r("div",{class:[t.qrShow?t.qrImgShow:t.qrImgHide]},[r("img",{staticStyle:{"pointer-events":"none"},attrs:{src:n("7729")}})])])]),r("div",{staticClass:"copyright"},[r("p",[t._v("COPYRIGHT © 2015-2019 AVANTOUCH.  ALL RIGHTS RESERVED.")]),r("div",[t._v("沪ICP备09094438号-2   "),r("a",{staticClass:"foot-service-item",attrs:{href:"javascript:void(0)"},on:{click:t.jumpProtocol}},[t._v("服务及隐私协议")])])])])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"desc"},[n("span",{staticClass:"foot-item-bold-title"},[t._v("涵宇鑫")]),t._v("是一款创新的电子券兑换平台，整合了保险、银行、航空、运营商、企业的积分礼券，为用户提供全国上万家超商及品牌连锁实时通兑功能，线上各大电商礼品券、增值服务。涵宇鑫，兑啥有啥！您身边的便利兑换魔法师。\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"connect"},[n("div",{staticClass:"footer-item-title"},[t._v("联系方式")]),n("a",{staticClass:"foot-route-item",attrs:{href:"mailto:feedback@alading.com"}},[t._v("意见反馈: feedback@alading.com")]),n("a",{staticClass:"foot-route-item",attrs:{href:"mailto:service@alading.com"}},[t._v("服务邮箱: service@alading.com")]),n("a",{staticClass:"foot-route-item",attrs:{href:"mailto:business@alading.com"}},[t._v("商务合作: business@alading.com")]),n("a",{staticClass:"foot-route-item",attrs:{href:"tel:4008885811"}},[t._v("客服电话(9:00-21:00): 400-888-5811")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:"https://weibo.com/fdalading",target:"_blank"}},[r("img",{staticClass:"connect-img",attrs:{src:n("2d18")}})])}],m={data:function(){return{qrShow:!1,qrImgShow:"qr-img-show",qrImgHide:"qr-img-hide"}},methods:{jumpTo:function(){window.open("http://www.avantouch.com")},jumpProtocol:function(){this.$router.push({name:"Service"})}},components:{}},b=m,y=(n("2515"),Object(l["a"])(b,h,v,!1,null,"177d80f2",null)),g=y.exports,_={components:{Header:p,Footer:g},watch:{"$route.path":function(){this.checkPage()}},methods:{checkPage:function(){var t=this.$route.name;t&&this.$store.commit("changePageName",t)}},created:function(){},mounted:function(){}},w=_,x=(n("5c0b"),Object(l["a"])(w,i,c,!1,null,null,null)),k=x.exports,O=n("6389"),j=n.n(O);o.a.use(j.a);var C=new j.a({routes:[{path:"/",name:"Home",component:function(){return Promise.all([n.e("commons"),n.e("chunk-f658b264")]).then(n.bind(null,"bb51"))}},{path:"/mobilelife",name:"MobileLife",component:function(){return n.e("chunk-672ab5f1").then(n.bind(null,"9917"))}},{path:"/activity",component:function(){return n.e("chunk-622e2c34").then(n.bind(null,"abae"))},children:[{path:"",name:"Activity",component:function(){return Promise.all([n.e("commons"),n.e("chunk-2d0c9b28")]).then(n.bind(null,"59f4"))}},{path:"/activity/event",name:"ActivityEvent",component:function(){return Promise.all([n.e("commons"),n.e("chunk-2d0c9b28")]).then(n.bind(null,"59f4"))},meta:{keepAlive:!0}},{path:"/activity/hot",name:"ActivityHot",component:function(){return Promise.all([n.e("commons"),n.e("chunk-2d217c40")]).then(n.bind(null,"c7b8"))}},{path:"/activity/news",name:"ActivityNews",component:function(){return Promise.all([n.e("commons"),n.e("chunk-2d225fa3")]).then(n.bind(null,"e761"))}}]},{path:"/activity/detail",name:"ActivityDetail",component:function(){return Promise.all([n.e("commons"),n.e("chunk-63c89360")]).then(n.bind(null,"4752"))}},{path:"/recruit",name:"Recruit",component:function(){return Promise.all([n.e("commons"),n.e("chunk-2b9e81c7")]).then(n.bind(null,"b5c1"))}},{path:"/recruitdetail",name:"RecruitDetail",component:function(){return Promise.all([n.e("commons"),n.e("chunk-f20aa3ea")]).then(n.bind(null,"f17f"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/cooperation",name:"Cooperation",component:function(){return n.e("chunk-15c6a94a").then(n.bind(null,"4dfe"))}},{path:"/brand",name:"Brand",component:function(){return n.e("chunk-1b16d6bb").then(n.bind(null,"4fa8"))}},{path:"/service",name:"Service",component:function(){return n.e("chunk-6f60915f").then(n.bind(null,"e2f8"))}},{path:"/video",name:"Video",component:function(){return n.e("chunk-a9afcda2").then(n.bind(null,"81a8"))}}],scrollBehavior:function(t,e,n){return n||{x:0,y:0}}}),S=n("5880"),E=n.n(S);o.a.use(E.a);var P=new E.a.Store({state:{pageName:"",showHeader:!0,showFooter:!0},mutations:{changePageName:function(t,e){t.pageName=e},changeShowHeader:function(t,e){t.showHeader=e},changeShowFooter:function(t,e){t.showFooter=e}},actions:{}}),A=(n("f1a7"),n("8594"),n("5f72")),T=n.n(A),N=n("cebe"),$=n.n(N);o.a.config.productionTip=!1,o.a.use(T.a),o.a.prototype.$axios=$.a,new o.a({router:C,store:P,render:function(t){return t(k)}}).$mount("#app");var M={Home:{title:"涵宇鑫"},Activity:{title:"创新产品"},MobileLife:{title:"解决方案"},Brand:{title:"关于我们"},ActivityDetail:{title:"创新产品"},Cooperation:{title:"客户案例"},Recruit:{title:"招聘英才"},RecruitDetail:{title:"招聘英才"},Service:{title:"服务及隐私协议",hideHeader:!0,hideFooter:!0}};C.afterEach(function(t){var e=t&&t.name,n=e&&M[e],r=!0,o=!0;n?(document.title=n.title,r=!n.hideHeader,o=!n.hideFooter):document.title="涵宇鑫",P.commit("changeShowHeader",r),P.commit("changeShowFooter",o)})},5880:function(t,e){t.exports=Vuex},"5c0b":function(t,e,n){"use strict";var r=n("e332"),o=n.n(r);o.a},"5ca1":function(t,e,n){var r=n("7726"),o=n("8378"),i=n("32e9"),c=n("2aba"),a=n("9b43"),u="prototype",s=function(t,e,n){var f,l,d,p,h=t&s.F,v=t&s.G,m=t&s.S,b=t&s.P,y=t&s.B,g=v?r:m?r[e]||(r[e]={}):(r[e]||{})[u],_=v?o:o[e]||(o[e]={}),w=_[u]||(_[u]={});for(f in v&&(n=e),n)l=!h&&g&&void 0!==g[f],d=(l?g:n)[f],p=y&&l?a(d,r):b&&"function"==typeof d?a(Function.call,d):d,g&&c(g,f,d,t&s.U),_[f]!=d&&i(_,f,p),b&&w[f]!=d&&(w[f]=d)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},"5cc5":function(t,e,n){var r=n("2b4c")("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},t(i)}catch(c){}return n}},"5f72":function(t,e){t.exports=ELEMENT},"613b":function(t,e,n){var r=n("5537")("keys"),o=n("ca5a");t.exports=function(t){return r[t]||(r[t]=o(t))}},"626a":function(t,e,n){var r=n("2d95");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},6389:function(t,e){t.exports=VueRouter},6821:function(t,e,n){var r=n("626a"),o=n("be13");t.exports=function(t){return r(o(t))}},"69a8":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"6a99":function(t,e,n){var r=n("d3f4");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},7333:function(t,e,n){"use strict";var r=n("9e1e"),o=n("0d58"),i=n("2621"),c=n("52a7"),a=n("4bf8"),u=n("626a"),s=Object.assign;t.exports=!s||n("79e5")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r})?function(t,e){var n=a(t),s=arguments.length,f=1,l=i.f,d=c.f;while(s>f){var p,h=u(arguments[f++]),v=l?o(h).concat(l(h)):o(h),m=v.length,b=0;while(m>b)p=v[b++],r&&!d.call(h,p)||(n[p]=h[p])}return n}:s},7726:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},7729:function(t,e,n){t.exports=n.p+"img/qrcode.3ef38e86.png"},"77f1":function(t,e,n){var r=n("4588"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},"79e5":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"7a56":function(t,e,n){"use strict";var r=n("7726"),o=n("86cc"),i=n("9e1e"),c=n("2b4c")("species");t.exports=function(t){var e=r[t];i&&e&&!e[c]&&o.f(e,c,{configurable:!0,get:function(){return this}})}},"7f20":function(t,e,n){var r=n("86cc").f,o=n("69a8"),i=n("2b4c")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"7f7f":function(t,e,n){var r=n("86cc").f,o=Function.prototype,i=/^\s*function ([^ (]*)/,c="name";c in o||n("9e1e")&&r(o,c,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},8079:function(t,e,n){var r=n("7726"),o=n("1991").set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,a=r.Promise,u="process"==n("2d95")(c);t.exports=function(){var t,e,n,s=function(){var r,o;u&&(r=c.domain)&&r.exit();while(t){o=t.fn,t=t.next;try{o()}catch(i){throw t?n():e=void 0,i}}e=void 0,r&&r.enter()};if(u)n=function(){c.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var f=a.resolve(void 0);n=function(){f.then(s)}}else n=function(){o.call(r,s)};else{var l=!0,d=document.createTextNode("");new i(s).observe(d,{characterData:!0}),n=function(){d.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},8378:function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"84f2":function(t,e){t.exports={}},8594:function(t,e,n){},"86cc":function(t,e,n){var r=n("cb7c"),o=n("c69a"),i=n("6a99"),c=Object.defineProperty;e.f=n("9e1e")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"8bbf":function(t,e){t.exports=Vue},"9b43":function(t,e,n){var r=n("d8e8");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"9c6c":function(t,e,n){var r=n("2b4c")("unscopables"),o=Array.prototype;void 0==o[r]&&n("32e9")(o,r,{}),t.exports=function(t){o[r][t]=!0}},"9c80":function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(e){return{e:!0,v:e}}}},"9d64":function(t,e,n){t.exports=n.p+"img/logo.26aecc00.png"},"9def":function(t,e,n){var r=n("4588"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"9e1e":function(t,e,n){t.exports=!n("79e5")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},a25f:function(t,e,n){var r=n("7726"),o=r.navigator;t.exports=o&&o.userAgent||""},a5b8:function(t,e,n){"use strict";var r=n("d8e8");function o(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new o(t)}},a7de:function(t,e,n){},bcaa:function(t,e,n){var r=n("cb7c"),o=n("d3f4"),i=n("a5b8");t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t),c=n.resolve;return c(e),n.promise}},be13:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},c366:function(t,e,n){var r=n("6821"),o=n("9def"),i=n("77f1");t.exports=function(t){return function(e,n,c){var a,u=r(e),s=o(u.length),f=i(c,s);if(t&&n!=n){while(s>f)if(a=u[f++],a!=a)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},c69a:function(t,e,n){t.exports=!n("9e1e")&&!n("79e5")(function(){return 7!=Object.defineProperty(n("230e")("div"),"a",{get:function(){return 7}}).a})},ca5a:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},cadf:function(t,e,n){"use strict";var r=n("9c6c"),o=n("d53b"),i=n("84f2"),c=n("6821");t.exports=n("01f9")(Array,"Array",function(t,e){this._t=c(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},cb7c:function(t,e,n){var r=n("d3f4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},ce10:function(t,e,n){var r=n("69a8"),o=n("6821"),i=n("c366")(!1),c=n("613b")("IE_PROTO");t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)n!=c&&r(a,n)&&s.push(n);while(e.length>u)r(a,n=e[u++])&&(~i(s,n)||s.push(n));return s}},cebe:function(t,e){t.exports=axios},d3f4:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},d8e8:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},dcbc:function(t,e,n){var r=n("2aba");t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},e11e:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},e332:function(t,e,n){},ebd6:function(t,e,n){var r=n("cb7c"),o=n("d8e8"),i=n("2b4c")("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||void 0==(n=r(c)[i])?e:o(n)}},ec26:function(t,e,n){},f1a7:function(t,e){function n(){var t=navigator.userAgent.toUpperCase(),e=/SAFARI/.test(t)&&!/CHROME/.test(t),n=t.indexOf("OPERA")>-1||t.indexOf("OPR")>-1;t.indexOf("CHROME")>-1&&t.indexOf("WINDOWS");return e}var r=n();function o(){var t=r?document.documentElement.clientWidth:window.innerWidth;document.documentElement.style.fontSize="100px",t>=1920?window.aldcontentwidth=1200:t>1083&&t<1920?(window.aldcontentwidth=.625*t,window.aldcontentwidth<980&&(window.aldcontentwidth=980)):window.aldcontentwidth=t<980?980:t}o(),window.onresize=function(){o()}},f605:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},f751:function(t,e,n){var r=n("5ca1");r(r.S+r.F,"Object",{assign:n("7333")})},fa5b:function(t,e,n){t.exports=n("5537")("native-function-to-string",Function.toString)},fab2:function(t,e,n){var r=n("7726").document;t.exports=r&&r.documentElement}});
