(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{184:function(e,t,n){},196:function(e,t,n){"use strict";var s=n(184);n.n(s).a},197:function(e,t,n){"use strict";n.r(t);n(54),n(15),n(24),n(53);var s=n(0),i={name:"bf-tabs",props:{selected:{type:String,required:!0},direction:{type:String,default:"horizontal",validator:function(e){return["horizontal","vertical"].indexOf(e)>=0}}},data:function(){return{eventBus:new s.a}},provide:function(){return{eventBus:this.eventBus}},methods:{checkChildren:function(){0===this.$children.length&&console&&console.warn&&console.warn("tabs的子组件应该是tabs-head和tabs-body，但你没有写子组件")},selectTab:function(){var e=this;this.$children.forEach(function(t){"WheelsTabsHead"===t.$options.name&&t.$children.forEach(function(t){"WheelsTabsItem"===t.$options.name&&t.name===e.selected&&e.eventBus.$emit("update:selected",e.selected,t)})})}},mounted:function(){this.checkChildren(),this.selectTab()}},a=(n(196),n(1)),c=Object(a.a)(i,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"tabs"},[this._t("default")],2)},[],!1,null,"6e037ce3",null);t.default=c.exports}}]);