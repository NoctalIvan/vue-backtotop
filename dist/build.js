!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=2)}([function(e,t,n){function r(e){n(7)}var o=n(5)(n(1),n(6),r,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"BackToTop",props:{text:{type:String,default:"Voltar ao topo"},visibleoffset:{type:[String,Number],default:600},right:{type:String,default:"30px"},bottom:{type:String,default:"40px"}},data:function(){return{visible:!1}},mounted:function(){window.smoothscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&(window.requestAnimationFrame(window.smoothscroll),window.scrollTo(0,Math.floor(e-e/5)))},window.addEventListener("scroll",this.catchScroll)},destroyed:function(){window.removeEventListener("scroll",this.catchScroll)},methods:{catchScroll:function(){this.visible=window.pageYOffset>parseInt(this.visibleoffset)},backToTop:function(){window.smoothscroll()}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r);o.a.install=function(e,t){e.component(o.a.name,o.a)},t.default=o.a},function(e,t,n){t=e.exports=n(4)(),t.push([e.i,".back-to-top-fade-enter-active,.back-to-top-fade-leave-active{transition:opacity .7s}.back-to-top-fade-enter,.back-to-top-fade-leave-to{opacity:0}.vue-back-to-top{position:fixed;z-index:1000;cursor:pointer}.vue-back-to-top .default{width:160px;color:#fff;text-align:center;line-height:30px;background-color:#f5c85c;border-radius:3px}.vue-back-to-top .default span{color:#fff}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t){e.exports=function(e,t,n,r,o){var i,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),r&&(c._scopeId=r);var u;if(o?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=u):n&&(u=n),u){var l=c.functional,d=l?c.render:c.beforeCreate;l?c.render=function(e,t){return u.call(t),d(e,t)}:c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:i,exports:s,options:c}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"back-to-top-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"vue-back-to-top",style:"bottom:"+this.bottom+";right:"+this.right+";",on:{click:e.backToTop}},[e._t("default",[n("div",{staticClass:"default"},[n("span",[e._v("\n          "+e._s(e.text)+"\n        ")])])])],2)])},staticRenderFns:[]}},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(8)("326959f4",r,!0,{})},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+b+'~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(g){var i=p++;r=f||(f=o()),t=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),m.ssrId&&e.setAttribute(b,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(9),l={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},m=null,b="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){v=n,m=o||{};var i=u(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=l[s.id];a.refs--,n.push(a)}t?(i=u(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete l[a.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],c=i[2],u=i[3],l={id:e+":"+o,css:a,media:c,sourceMap:u};r[s]?r[s].parts.push(l):n.push(r[s]={id:s,parts:[l]})}return n}}]);
//# sourceMappingURL=build.js.map