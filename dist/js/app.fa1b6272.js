(function(e){function t(t){for(var r,i,a=t[0],c=t[1],u=t[2],d=0,f=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2342:function(e,t,n){"use strict";n("dca1")},"42a8":function(e,t,n){e.exports=n.p+"img/star.be36f957.svg"},5452:function(e,t,n){"use strict";n("af35")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("5a8b"),n("7e79");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Back-to-top")],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("router-link",{staticClass:"header__item",attrs:{to:"/"}},[e._v("Home")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.masterBreed,expression:"masterBreed"}],staticClass:"header__item",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.masterBreed=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",selected:"",hidden:""},domProps:{value:void 0}},[e._v("Select Breed")]),e._l(e.masterBreeds,(function(t){return n("option",{key:t},[e._v(" "+e._s(t)+" ")])}))],2),n("router-link",{staticClass:"header__item",attrs:{to:"/favourites"}},[e._v("Favourites")])],1)},a=[],c=n("bc3a"),u=n.n(c),l={name:"Header",data:function(){return{masterBreed:this.$route.params.breed,masterBreeds:{}}},watch:{masterBreed:function(e){e&&this.$router.push(e)},"$route.params.breed":{handler:function(e){e||(this.masterBreed=void 0)},deep:!0}},mounted:function(){var e=this;u.a.get("https://dog.ceo/api/breeds/list").then((function(t){var n=t.data;e.masterBreeds=n.message})).catch((function(e){var t=e.response;console.error(t)}))}},d=l,f=(n("5452"),n("2877")),h=Object(f["a"])(d,i,a,!1,null,null,null),m=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"button button__totop",on:{click:e.BackToTop}},[e._v(" ⤒ ")])},p=[],g={data:function(){return{visible:!1}},computed:{heightExceed:function(){return this.$store.state.heightExceed}},watch:{heightExceed:function(e){e&&window.scrollY>100?this.visible=!0:this.visible=!1}},mounted:function(){document.addEventListener("scroll",this.ScrollEventListener)},beforeDestroy:function(){document.removeEventListener("scroll",this.ScrollEventListener)},methods:{BackToTop:function(){window.scrollTo(0,0)},ScrollEventListener:function(){window.scrollY>100&&!this.visible?this.visible=!0:window.scrollY<=100&&this.visible&&(this.visible=!1)}}},b=g,_=(n("cf29"),Object(f["a"])(b,v,p,!1,null,null,null)),w=_.exports,B={components:{Header:m,BackToTop:w}},y=B,L=(n("5c0b"),Object(f["a"])(y,o,s,!1,null,null,null)),k=L.exports,E=n("8c4f"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"heading"},[e._v("Home")]),n("Grid",{attrs:{"infinite-load":""}})],1)},O=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[Object.keys(e.dogsList).length>0?n("div",[["Favourites","Breed"].includes(e.$route.name)?n("ul",{staticClass:"grid"},e._l(e.dogsList,(function(t,r){return n("li",{key:r,staticClass:"grid__el"},[n("Card",{attrs:{breed:t,"master-breed":e.masterBreed,checked:e.favourites.includes(t)},on:{input:e.ChangeFavs}})],1)})),0):n("ul",{staticClass:"grid"},e._l(e.dogsList,(function(t,r){return n("li",{key:r,staticClass:"grid__el"},[n("Card",{attrs:{breed:r,"master-breed":e.masterBreed,checked:e.favourites.includes(r)},on:{input:e.ChangeFavs}})],1)})),0),e.infiniteLoad&&!e.noMoreDogs?n("button",{ref:"loadingButton",on:{click:function(t){return e.LoadMore(e.masterBreed)}}},[e._v(" Load more ")]):e._e()]):n("h3",[e._v("No breeds")])])},$=[],j=n("5530"),H=(n("13d5"),n("b64b"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["card",{card__checked:e.checked}]},[r("div",{staticClass:"img__container"},[e.source?r("img",{staticClass:"img",attrs:{src:e.source,alt:e.breed}}):r("svg",{staticClass:"img__fallback"},[r("use",{attrs:{"xlink:href":n("de07")+"#Capa_1"}})])]),r("div",{staticClass:"card__desc"},[e.breed?r("p",[e._v(e._s(e.breed))]):r("p",[e._v("Dog description")])]),r("button",{staticClass:"star__container card__button",on:{click:e.ChangeFavStatus}},[r("svg",{class:["star",{star__checked:e.checked}]},[r("use",{attrs:{"xlink:href":n("42a8")+"#star"}})])])])}),S=[],F=(n("99af"),{name:"Card",props:{breed:null,masterBreed:null,checked:{type:Boolean,default:!1}},data:function(){return{source:null}},mounted:function(){var e=this;this.masterBreed&&this.breed?u.a.get("https://dog.ceo/api/breed/".concat(this.masterBreed,"/").concat(this.breed,"/images/random")).then((function(t){var n=t.data;e.source=n.message})):this.breed&&u.a.get("https://dog.ceo/api/breed/".concat(this.breed,"/images/random")).then((function(t){var n=t.data;e.source=n.message}))},methods:{ChangeFavStatus:function(){this.$emit("input",!this.checked,this.breed)}}}),M=F,D=(n("e60d"),Object(f["a"])(M,H,S,!1,null,null,null)),T=D.exports,P={name:"Grid",components:{Card:T},props:{infiniteLoad:{type:Boolean,default:!1},local:{type:Boolean,default:!1}},data:function(){return{dogsList:{},noMoreDogs:!1}},computed:{favourites:function(){return this.$store.state.favourites},masterBreed:function(){return this.$route.params.breed}},watch:{masterBreed:function(){this.masterBreed&&!this.local&&this.LoadMore(this.masterBreed)}},created:function(){this.local&&(this.dogsList=this.favourites.reduce((function(e,t,n){return e[n]=t,e}),{}))},mounted:function(){this.local||this.LoadMore(this.masterBreed),this.$store.commit("changeDocHeight",document.body.scrollHeight>window.innerHeight)},beforeUpdate:function(){document.removeEventListener("scroll",this.ScrollEventListener)},updated:function(){document.addEventListener("scroll",this.ScrollEventListener),this.$store.commit("changeDocHeight",document.body.scrollHeight>window.innerHeight)},beforeDestroy:function(){document.removeEventListener("scroll",this.ScrollEventListener)},methods:{LoadMore:function(e){var t=this;e?u.a.get("https://dog.ceo/api/breed/".concat(e,"/list/random/20")).then((function(e){var n=e.data;Object.keys(n.message).length<20&&(t.noMoreDogs=!0),t.dogsList=Object(j["a"])(Object(j["a"])({},t.dogsList),n.message)})).catch((function(e){var n=e.response;console.error(n.data.message),t.$set(t,"dogsList",{})})):u.a.get("https://dog.ceo/api/breeds/list/all/random/20").then((function(e){var n=e.data;Object.keys(n.message).length<20&&(t.noMoreDogs=!0),t.dogsList=Object(j["a"])(Object(j["a"])({},t.dogsList),n.message)})).catch((function(e){var n=e.response;console.error(n.data.message),t.$set(t,"dogsList",{})}))},ChangeFavs:function(e,t){e?this.$store.commit("addFav",t):this.$store.commit("removeFav",t)},ScrollEventListener:function(){this.IsElementInViewport(this.$refs.loadingButton)&&this.LoadMore(this.masterBreed)},IsElementInViewport:function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}}},G=P,I=(n("2342"),Object(f["a"])(G,x,$,!1,null,null,null)),N=I.exports,Y={name:"Home",components:{Grid:N}},J=Y,V=Object(f["a"])(J,C,O,!1,null,null,null),W=V.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"heading"},[e._v(e._s(e.masterBreed))]),n("Grid",{attrs:{"infinite-load":""}})],1)},R=[],U={name:"Breed",components:{Grid:N},computed:{masterBreed:function(){return this.$route.params.breed}}},q=U,z=Object(f["a"])(q,A,R,!1,null,null,null),K=z.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"heading"},[e._v("Favourites")]),n("Grid",{attrs:{local:""}})],1)},X=[],Z={name:"Favourites",components:{Grid:N}},ee=Z,te=Object(f["a"])(ee,Q,X,!1,null,null,null),ne=te.exports;r["a"].use(E["a"]);var re=[{path:"/",name:"Home",component:W},{path:"/favourites",name:"Favourites",component:ne},{path:"/:breed",name:"Breed",component:K}],oe=new E["a"]({routes:re}),se=oe,ie=(n("4de4"),n("2f62"));r["a"].use(ie["a"]);var ae=new ie["a"].Store({state:{favourites:[],heightExceed:!1},mutations:{changeFavs:function(e,t){e.favourites=t},addFav:function(e,t){e.favourites.push(t)},removeFav:function(e,t){e.favourites=e.favourites.filter((function(e){return e!==t}))},changeDocHeight:function(e,t){e.heightExceed=t}}});r["a"].config.productionTip=!1,new r["a"]({router:se,store:ae,render:function(e){return e(k)}}).$mount("#app")},"5a8b":function(e,t,n){},"5c0b":function(e,t,n){"use strict";n("9c0c")},"7e79":function(e,t,n){},"9c0c":function(e,t,n){},"9f25":function(e,t,n){},af35:function(e,t,n){},cf29:function(e,t,n){"use strict";n("9f25")},dca1:function(e,t,n){},de07:function(e,t,n){e.exports=n.p+"img/dog.251c21a6.svg"},e60d:function(e,t,n){"use strict";n("e9ec")},e9ec:function(e,t,n){}});
//# sourceMappingURL=app.fa1b6272.js.map