!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=687)}({687:function(e,t,r){"use strict";r.r(t);var o,n,i,a;r(688);function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var u=0;var c=GT3,d=(c.Hooks,c.autobind),p=c.ThemesCore,f=p.Widgets.BasicWidget,_=p.jQuery,g=p.isRTL,b=d((i="__private_"+u+++"_"+"ui",a=n=function(e){var t,r;function o(){var t;t=e.apply(this,arguments)||this,Object.defineProperty(s(t),i,{writable:!0,value:{}}),t.init(),t.extendUI(l(s(t),i)[i]);var r=_(".gt3_team_tabs",t.el);if(!r.length)return s(t);var o=r.parent(".module_team").data("settings"),n=_(".gt3_team_avatar_slider",r);return n.length||(n=!1),_(".item_list",r).slick({autoplay:o.autoplay,autoplaySpeed:o.autoplaySpeed,fade:!0,dots:!1,arrows:!1,slidesToScroll:o.items_per_line,slidesToShow:o.items_per_line,focusOnSelect:!0,speed:500,infinite:!0,draggable:!1,asNavFor:n,responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}],rtl:g}),_(".gt3_team_avatar_slider",r).length&&_(".gt3_team_avatar_slider",r).slick({slidesToShow:6,slidesToScroll:6,asNavFor:_(".item_list",r),dots:!1,arrows:!1,infinite:!0,focusOnSelect:!0,speed:500,centerMode:r.hasClass("text_align-center"),responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3}}],rtl:g}),t.afterInit(),t}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.start=function(){},o}(f),n.widgetName="gt3-core-teamtabs",o=a))||o;GT3.ThemesCore.onWidgetRegisterHandler(b.widgetName,b)},688:function(e,t,r){}});