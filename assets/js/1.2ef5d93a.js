(window.webpackJsonp=window.webpackJsonp||[]).push([[1,15,18,19,28,30,31,34,35],{344:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}));n(134);var o=n(0);function r(){const e=Object(o.d)();if(!e)throw new Error("must be called in setup");return(null==e?void 0:e.proxy)||{}}function s(){const e=Object(o.h)(!1);return Object(o.e)(()=>{e.value=!0}),Object(o.f)(()=>{e.value=!1,setTimeout(()=>{e.value=!0},100)}),{recoShowModule:e}}},345:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return g}));var o=n(347),r=n.n(o),s=(n(346),n(0)),a=n(1),i=function(e,t,n,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const c=/^(\w+)\-/,l=s.b.extend({props:{icon:{type:String,default:""},link:{type:String,default:""}}});let u=class extends l{getClass(e){return c.test(e)?e.replace(c,(...e)=>"reco"===e[1]?"iconfont "+e[0]:`${e[1]} ${e[0]}`):e}go(e){""!==e&&window.open(e)}render(){return(0,arguments[0])("i",r()([{},{class:this.getClass(this.icon),on:{click:this.go.bind(this,this.link)}}]),[this.$slots.default])}};u=i([a.b],u);var d=u,f=function(e,t,n,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const p=s.b.extend({props:{delay:{type:String,default:"0"},duration:{type:String,default:".25"},transform:{type:Array,default:()=>["translateY(-20px)","translateY(0)"]}}});let h=class extends p{setStyle(e){e.style.transition=`transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`,e.style.transform=this.transform[0],e.style.opacity=0}unsetStyle(e){e.style.transform=this.transform[1],e.style.opacity=1}render(){return(0,arguments[0])("transition",{attrs:{name:"module"},on:{enter:this.setStyle,appear:this.setStyle,"before-leave":this.setStyle,"after-appear":this.unsetStyle,"after-enter":this.unsetStyle}},[this.$slots.default])}};h=f([a.b],h);var g=h},346:function(e,t,n){"use strict";var o=n(22),r=n(4),s=n(348);o({global:!0},{Reflect:{}}),s(r.Reflect,"Reflect",!0)},347:function(e,t,n){"use strict";function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)}var r=["attrs","props","domProps"],s=["class","style","directives"],a=["on","nativeOn"],i=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}};e.exports=function(e){return e.reduce((function(e,t){for(var n in t)if(e[n])if(-1!==r.indexOf(n))e[n]=o({},e[n],t[n]);else if(-1!==s.indexOf(n)){var c=e[n]instanceof Array?e[n]:[e[n]],l=t[n]instanceof Array?t[n]:[t[n]];e[n]=[].concat(c,l)}else if(-1!==a.indexOf(n))for(var u in t[n])if(e[n][u]){var d=e[n][u]instanceof Array?e[n][u]:[e[n][u]],f=t[n][u]instanceof Array?t[n][u]:[t[n][u]];e[n][u]=[].concat(d,f)}else e[n][u]=t[n][u];else if("hook"===n)for(var p in t[n])e[n][p]=e[n][p]?i(e[n][p],t[n][p]):t[n][p];else e[n]=t[n];else e[n]=t[n];return e}),{})}},348:function(e,t,n){"use strict";var o=n(18).f,r=n(13),s=n(28)("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!r(e,s)&&o(e,s,{configurable:!0,value:t})}},350:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(17),s=n(345),a=n(344),i=Object(o.c)({components:{RecoIcon:s.b},props:{item:{required:!0}},setup(e,t){const n=Object(a.a)(),{item:s}=Object(o.i)(e),i=Object(o.a)(()=>Object(r.d)(s.value.link)),c=Object(o.a)(()=>n.$site.locales?Object.keys(n.$site.locales).some(e=>e===i.value):"/"===i.value);return{link:i,exact:c,isExternal:r.f,isMailto:r.g,isTel:r.h}}}),c=n(2),l=Object(c.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.isExternal(e.link)?t("a",{staticClass:"nav-link external",attrs:{href:e.link,target:e.isMailto(e.link)||e.isTel(e.link)?null:"_blank",rel:e.isMailto(e.link)||e.isTel(e.link)?null:"noopener noreferrer"}},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n  "),t("OutboundLink")],1):t("router-link",{staticClass:"nav-link",attrs:{to:e.link,exact:e.exact}},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n")],1)}),[],!1,null,null,null);t.default=l.exports},357:function(e,t,n){"use strict";n.r(t);var o=n(0),r=Object(o.c)({name:"DropdownTransition",setup:(e,t)=>({setHeight:e=>{e.style.height=e.scrollHeight+"px"},unsetHeight:e=>{e.style.height=""}})}),s=(n(358),n(2)),a=Object(s.a)(r,(function(){var e=this._self._c;this._self._setupProxy;return e("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);t.default=a.exports},358:function(e,t,n){"use strict";n(350)},359:function(e,t,n){},367:function(e,t,n){},368:function(e,t,n){},373:function(e,t,n){"use strict";n(359)},380:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o={light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, 0.1)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#242424","--text-color-sub":"#7F7F7F","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#181818","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, .6)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, .7)","--text-color":"rgba(255, 255, 255, .8)","--text-color-sub":"#8B8B8B","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}};function r(e){const t=document.querySelector(":root"),n=o[e],r="dark"===e?"light":"dark";for(const e in n)t.style.setProperty(e,n[e]);t.classList.remove(r),t.classList.add(e)}function s(e){if("auto"!==e)return void r(e);const t=window.matchMedia("(prefers-color-scheme: dark)").matches,n=window.matchMedia("(prefers-color-scheme: light)").matches;if(t&&r("dark"),n&&r("light"),!t&&!n){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");const e=(new Date).getHours();r(e<6||e>=18?"dark":"light")}}},381:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(345),s=n(356),a=n(357),i=Object(o.c)({components:{NavLink:s.default,DropdownTransition:a.default,RecoIcon:r.b},props:{item:{required:!0}},setup(e,t){const n=Object(o.h)(!1);return{open:n,toggle:()=>{n.value=!n.value}}}}),c=(n(373),n(2)),l=Object(c.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"dropdown-wrapper",class:{open:e.open}},[t("a",{staticClass:"dropdown-title",on:{click:e.toggle}},[t("span",{staticClass:"title"},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n      "+e._s(e.item.text)+"\n    ")],1),e._v(" "),t("span",{staticClass:"arrow",class:e.open?"down":"right"})]),e._v(" "),t("DropdownTransition",[t("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"nav-dropdown"},e._l(e.item.items,(function(n,o){return t("li",{key:n.link||o,staticClass:"dropdown-item"},["links"===n.type?t("h4",[e._v(e._s(n.text))]):e._e(),e._v(" "),"links"===n.type?t("ul",{staticClass:"dropdown-subitem-wrapper"},e._l(n.items,(function(e){return t("li",{key:e.link,staticClass:"dropdown-subitem"},[t("NavLink",{attrs:{item:e}})],1)})),0):t("NavLink",{attrs:{item:n}})],1)})),0)])],1)}),[],!1,null,null,null);t.default=l.exports},384:function(e,t,n){},385:function(e,t,n){},386:function(e,t,n){"use strict";n(367)},387:function(e,t,n){"use strict";n(368)},388:function(e,t,n){},400:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(345),s=n(381),a=n(17),i=n(356),c=n(344),l=Object(o.c)({components:{NavLink:i.default,DropdownLink:s.default,RecoIcon:r.b},setup(e,t){const n=Object(c.a)(),r=Object(o.a)(()=>n.$themeLocaleConfig.nav||n.$themeConfig.nav||[]),s=Object(o.a)(()=>{const e=n.$site.locales||{};if(e&&Object.keys(e).length>1){const t=n.$page.path,o=n.$router.options.routes,s=n.$themeConfig.locales||{},a={text:n.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(r=>{const a=e[r],i=s[r]&&s[r].label||a.lang;let c;return a.lang===n.$lang?c=t:(c=t.replace(n.$localeConfig.path,r),o.some(e=>e.path===c)||(c=r)),{text:i,link:c}})};return[...r.value,a]}const t=n.$themeConfig.blogConfig||{},o=r.value.some(e=>!t.category||e.text===(t.category.text||"分类")),s=r.value.some(e=>!t.tag||e.text===(t.tag.text||"标签"));if(!o&&Object.hasOwnProperty.call(t,"category")){const e=t.category,o=n.$categories;r.value.splice(parseInt(e.location||2)-1,0,{items:o.list.map(e=>(e.link=e.path,e.text=e.name,e)),text:e.text||n.$recoLocales.category,type:"links",icon:"reco-category"})}if(!s&&Object.hasOwnProperty.call(t,"tag")){const e=t.tag;r.value.splice(parseInt(e.location||3)-1,0,{link:"/tag/",text:e.text||n.$recoLocales.tag,type:"links",icon:"reco-tag"})}return r.value}),i=Object(o.a)(()=>(n.nav||[]).map(e=>Object.assign(Object(a.j)(e),{items:(e.items||[]).map(a.j)}))),l=Object(o.a)(()=>{const{repo:e}=n.$themeConfig;return e?/^https?:/.test(e)?e:"https://github.com/"+e:""}),u=Object(o.a)(()=>{if(!n.repoLink)return"";if(n.$themeConfig.repoLabel)return n.$themeConfig.repoLabel;const e=n.repoLink.match(/^https?:\/\/[^/]+/)[0],t=["GitHub","GitLab","Bitbucket"];for(let n=0;n<t.length;n++){const o=t[n];if(new RegExp(o,"i").test(e))return o}return"Source"});return{userNav:r,nav:s,userLinks:i,repoLink:l,repoLabel:u}}}),u=(n(386),n(2)),d=Object(u.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.userLinks.length||e.repoLink?t("nav",{staticClass:"nav-links"},[e._l(e.userLinks,(function(e){return t("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?t("DropdownLink",{attrs:{item:e}}):t("NavLink",{attrs:{item:e}})],1)})),e._v(" "),e.repoLink?t("a",{staticClass:"repo-link",attrs:{href:e.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t("reco-icon",{attrs:{icon:"reco-"+e.repoLabel.toLowerCase()}}),e._v("\n    "+e._s(e.repoLabel)+"\n    "),t("OutboundLink")],1):e._e()],2):e._e()}),[],!1,null,null,null);t.default=d.exports},402:function(e,t,n){"use strict";n.r(t);var o=n(380),r={name:"ModeOptions",data:()=>({modeOptions:[{mode:"dark",title:"dark"},{mode:"auto",title:"auto"},{mode:"light",title:"light"}],currentMode:"auto"}),mounted(){this.currentMode=localStorage.getItem("mode")||this.$themeConfig.mode||"auto";var e=this;window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{"auto"===e.$data.currentMode&&Object(o.a)(e.$data.currentMode)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{"auto"===e.$data.currentMode&&Object(o.a)(e.$data.currentMode)}),Object(o.a)(this.currentMode)},methods:{selectMode(e){e!==this.currentMode&&(this.currentMode=e,Object(o.a)(e),localStorage.setItem("mode",e))},getClass(e){return e!==this.currentMode?e:e+" active"}}},s=(n(387),n(2)),a=Object(s.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mode-options"},[t("h4",{staticClass:"title"},[e._v("Choose mode")]),e._v(" "),t("ul",{staticClass:"color-mode-options"},e._l(e.modeOptions,(function(n,o){return t("li",{key:o,class:e.getClass(n.mode),on:{click:function(t){return e.selectMode(n.mode)}}},[e._v(e._s(n.title))])})),0)])}),[],!1,null,null,null);t.default=a.exports},404:function(e,t,n){"use strict";n(384)},405:function(e,t,n){"use strict";n(385)},406:function(e,t){function n(e){return"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function o(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}e.exports={bind:function(e,t,r){if(!n(t))return;function s(t){if(r.context){var n=t.path||t.composedPath&&t.composedPath();n&&n.length>0&&n.unshift(t.target),e.contains(t.target)||function(e,t){if(!e||!t)return!1;for(var n=0,o=t.length;n<o;n++)try{if(e.contains(t[n]))return!0;if(t[n].contains(e))return!1}catch(e){return!1}return!1}(r.context.popupItem,n)||e.__vueClickOutside__.callback(t)}}e.__vueClickOutside__={handler:s,callback:t.value};const a="ontouchstart"in document.documentElement?"touchstart":"click";!o(r)&&document.addEventListener(a,s)},update:function(e,t){n(t)&&(e.__vueClickOutside__.callback=t.value)},unbind:function(e,t,n){const r="ontouchstart"in document.documentElement?"touchstart":"click";!o(n)&&e.__vueClickOutside__&&document.removeEventListener(r,e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}},407:function(e,t,n){"use strict";n(388)},418:function(e,t,n){},429:function(e,t,n){"use strict";n.r(t);n(16);var o=n(0),r=n(345),s=n(344),a=Object(o.c)({components:{RecoIcon:r.b},setup(e,t){const n=Object(s.a)(),r=Object(o.g)({query:"",focused:!1,focusIndex:0,placeholder:void 0}),a=Object(o.a)(()=>r.focused&&c.value&&c.value.length),i=e=>{for(const t in n.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},c=Object(o.a)(()=>{const e=r.query.trim().toLowerCase();if(!e)return;const{pages:t}=n.$site,o=n.$site.themeConfig.searchMaxSuggestions,s=n.$localePath,a=t=>t&&t.title&&t.title.toLowerCase().indexOf(e)>-1,c=[];for(let e=0;e<t.length&&!(c.length>=o);e++){const n=t[e];if(i(n)===s)if(a(n))c.push(n);else if(n.headers)for(let e=0;e<n.headers.length&&!(c.length>=o);e++){const t=n.headers[e];a(t)&&c.push(Object.assign({},n,{path:n.path+"#"+t.slug,header:t}))}}return c}),l=Object(o.a)(()=>(n.$site.themeConfig.nav||[]).length+(n.$site.repo?1:0)<=2);return{showSuggestions:a,suggestions:c,alignRight:l,onUp:()=>{a.value&&(r.focusIndex>0?r.focusIndex--:r.focusIndex=c.value.length-1)},onDown:()=>{a.value&&(r.focusIndex<c.value.length-1?r.focusIndex++:r.focusIndex=0)},focus:e=>{r.focusIndex=e},unfocus:()=>{r.focusIndex=-1},go:e=>{a.value&&(n.$router.push(c.value[e].path),r.query="",r.focusIndex=0)},...Object(o.i)(r)}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||""}}),i=(n(404),n(2)),c=Object(i.a)(a,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"search-box"},[t("reco-icon",{attrs:{icon:"reco-search"}}),e._v(" "),t("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?t("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(n,o){return t("li",{key:o,staticClass:"suggestion",class:{focused:o===e.focusIndex},on:{mousedown:function(t){return e.go(o)},mouseenter:function(t){return e.focus(o)}}},[t("a",{attrs:{href:n.path},on:{click:function(e){e.preventDefault()}}},[t("span",{staticClass:"page-title"},[e._v(e._s(n.title||n.path))]),e._v(" "),n.header?t("span",{staticClass:"header"},[e._v("> "+e._s(n.header.title))]):e._e()])])})),0):e._e()],1)}),[],!1,null,null,null);t.default=c.exports},430:function(e,t,n){"use strict";n.r(t);var o=n(345),r=n(406),s=n.n(r),a=n(402),i=n(380),c={name:"UserSettings",directives:{"click-outside":s.a},components:{ModePicker:a.default,RecoIcon:o.b,ModuleTransition:o.a},data:()=>({showMenu:!1}),mounted(){const e=this.$themeConfig.mode||"auto",{modePicker:t}=this.$themeConfig;!1===t&&("auto"===e&&(window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{Object(i.a)(e)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{Object(i.a)(e)})),Object(i.a)(e))},methods:{hideMenu(){this.showMenu=!1}}},l=(n(407),n(2)),u=Object(l.a)(c,(function(){var e=this,t=e._self._c;return!1!==e.$themeConfig.modePicker?t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideMenu,expression:"hideMenu"}],staticClass:"color-picker"},[t("a",{staticClass:"color-button",on:{click:function(t){t.preventDefault(),e.showMenu=!e.showMenu}}},[t("reco-icon",{attrs:{icon:"reco-color"}})],1),e._v(" "),t("ModuleTransition",{attrs:{transform:["translate(-50%, 0)","translate(-50%, -10px)"]}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[t("ModePicker")],1)])],1):e._e()}),[],!1,null,null,null);t.default=u.exports},437:function(e,t,n){"use strict";n.r(t);n(405);var o=n(2),r=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar-button",on:{click:function(t){return e.$emit("toggle-sidebar")}}},[t("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[t("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);t.default=r.exports},444:function(e,t,n){"use strict";n(418)},459:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(429),s=n(437),a=n(400),i=n(430),c=n(344),l=Object(o.c)({components:{SidebarButton:s.default,NavLinks:a.default,SearchBox:r.default,AlgoliaSearchBox:{},Mode:i.default},setup(e,t){const n=Object(c.a)(),r=Object(o.h)(null),s=Object(o.a)(()=>n.$themeLocaleConfig.algolia||n.$themeConfig.algolia||{}),a=Object(o.a)(()=>s.value&&s.value.apiKey&&s.value.indexName);function i(e,t){return e.ownerDocument.defaultView.getComputedStyle(e,null)[t]}return Object(o.e)(()=>{const e=parseInt(i(n.$el,"paddingLeft"))+parseInt(i(n.$el,"paddingRight")),t=()=>{document.documentElement.clientWidth<719?r.value=null:r.value=n.$el.offsetWidth-e-(n.$refs.siteName&&n.$refs.siteName.offsetWidth||0)};t(),window.addEventListener("resize",t,!1)}),{linksWrapMaxWidth:r,algolia:s,isAlgoliaSearch:a,css:i}}}),u=(n(444),n(2)),d=Object(u.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("header",{staticClass:"navbar"},[t("SidebarButton",{on:{"toggle-sidebar":function(t){return e.$emit("toggle-sidebar")}}}),e._v(" "),t("router-link",{staticClass:"home-link",attrs:{to:e.$localePath}},[e.$themeConfig.logo?t("img",{staticClass:"logo",attrs:{src:e.$withBase(e.$themeConfig.logo),alt:e.$siteTitle}}):e._e(),e._v(" "),e.$siteTitle?t("span",{ref:"siteName",staticClass:"site-name"},[e._v(e._s(e.$siteTitle))]):e._e()]),e._v(" "),t("div",{staticClass:"links",style:e.linksWrapMaxWidth?{"max-width":e.linksWrapMaxWidth+"px"}:{}},[t("Mode"),e._v(" "),e.isAlgoliaSearch?t("AlgoliaSearchBox",{attrs:{options:e.algolia}}):!1!==e.$themeConfig.search&&!1!==e.$frontmatter.search?t("SearchBox"):e._e(),e._v(" "),t("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);t.default=d.exports}}]);