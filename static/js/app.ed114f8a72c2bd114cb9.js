webpackJsonp([0],{NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(e){i("gsu9")},null,null).exports,o=i("/ocq"),d={props:{device:{type:String,default:"android"},url:{type:String,default:"https://union.co/"}},components:{},name:"Viewer",data:function(){return{}}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("div",{directives:[{name:"show",rawName:"v-show",value:"android"===this.device,expression:"device === 'android'"}],staticClass:"android-preview"},[t("iframe",{attrs:{id:"main",src:this.url,frameborder:"0"}})]),this._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"apple"===this.device,expression:"device === 'apple'"}],staticClass:"apple-preview"},[t("iframe",{attrs:{id:"main",src:this.url,frameborder:"0"}})])])},staticRenderFns:[]};var c=i("VU/8")(d,s,!1,function(e){i("xgUM")},"data-v-9ac14d30",null).exports,p={components:{Viewer:c},data:function(){return{picked:"android",url:"https://union.co/"}}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Device component show case")]),e._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{id:"android",type:"radio",value:"android"},domProps:{checked:e._q(e.picked,"android")},on:{change:function(t){e.picked="android"}}}),e._v(" "),i("label",{attrs:{for:"android"}},[e._v("Android")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{id:"apple",type:"radio",value:"apple"},domProps:{checked:e._q(e.picked,"apple")},on:{change:function(t){e.picked="apple"}}}),e._v(" "),i("label",{attrs:{for:"apple"}},[e._v("IOS")])]),e._v(" "),i("div",{staticClass:"field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{type:"text"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}})]),e._v(" "),i("viewer",{attrs:{device:e.picked,url:e.url}})],1)},staticRenderFns:[]};var l=i("VU/8")(p,u,!1,function(e){i("WAQi")},null,null).exports,v={components:{Viewer:c},data:function(){return{picked:"android",url:"https://union.co/"}},created:function(){this.url=this.$route.query.url,this.picked=this.$route.query.type}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("viewer",{attrs:{device:this.picked,url:this.url}})],1)},staticRenderFns:[]};var f=i("VU/8")(v,m,!1,function(e){i("zGud")},null,null).exports;r.a.use(o.a);var h=new o.a({routes:[{path:"/",name:"init",component:l},{path:"/device",name:"Device",component:f}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:h,components:{App:a},template:"<App/>"})},WAQi:function(e,t){},gsu9:function(e,t){},xgUM:function(e,t){},zGud:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ed114f8a72c2bd114cb9.js.map