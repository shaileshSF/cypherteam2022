!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=689)}({689:function(e,t,r){"use strict";r.r(t);var a,n,o,c;r(690);function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var u=0;var l=GT3,d=(l.Hooks,l.autobind),p=l.ThemesCore,f=p.Widgets.BasicWidget,_=p.jQuery,h=d((o="__private_"+u+++"_"+"ui",c=n=function(e){var t,r;function a(){var t;t=e.apply(this,arguments)||this,Object.defineProperty(i(t),o,{writable:!0,value:{}}),t.init(),t.extendUI(s(i(t),o)[o]);var r={};return _(".gt3_team_search select").each((function(){var e=_(this),t=_(e).parents("form.gt3_team_search"),a=new Object;t.find(".search_box [name]").each((function(){var e=_(this).attr("name");a[e]=t[0].hasAttribute("data_search_"+e)?t.attr("data_search_"+e):""})),r.name=e.attr("name"),r.search_inputs=a,e.select2({placeholder:e.attr("placeholder"),allowClear:!0,minimumResultsForSearch:10,ajax:{url:gt3_themes_core.ajaxurl+"?action=gt3_core_get_team_search_data",dataType:"json",delay:250,cache:!0,data:function(e){return r.q=e.term,r},processResults:function(e,t){return{results:e.select_options[r.name]||[]}}}}),e.on("select2:select",(function(e){var r=_(e.currentTarget).attr("name"),a=e.params.data.id;t.attr("data_search_"+r,a)})),e.on("select2:unselect",(function(e){var r=_(e.currentTarget),a=r.attr("name");t[0].hasAttribute("data_search_"+a)&&t.attr("data_search_"+a,""),0==r.find(".empty_option").length?r.prepend('<option value="" selected="selected"></option>'):r.find(".empty_option").attr("selected","selected")})),e.on("select2:opening",(function(e){var t=_(e.currentTarget),a=_(e.currentTarget).parents("form.gt3_team_search");t.addClass("opened");var n=new Object;a.find(".search_box [name]").each((function(){var e=_(this).attr("name");n[e]=a[0].hasAttribute("data_search_"+e)?a.attr("data_search_"+e):""})),r.name=t.attr("name"),r.search_inputs=n,r.query=a.attr("data-query")}))})),t.afterInit(),t}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.start=function(){},a}(f),n.widgetName="gt3-core-team-search",a=c))||a;GT3.ThemesCore.onWidgetRegisterHandler(h.widgetName,h)},690:function(e,t,r){}});