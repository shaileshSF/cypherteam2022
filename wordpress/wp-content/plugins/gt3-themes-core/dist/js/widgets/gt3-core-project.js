!function(t){var e={};function i(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=693)}({693:function(t,e,i){"use strict";i.r(e);var r,o,a,s;i(694);function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){p(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function p(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var l=0;var h=GT3,g=(h.Hooks,h.autobind),f=h.ThemesCore,_=f.Widgets.BasicWidget,m=f.jQuery,w=f.isRTL,y=f.editMode,v=h.ThemesCore,b=h.Isotope,j=g((a="__private_"+l+++"_"+"ui",s=o=function(t){var e,i;function r(){var e;if(e=t.apply(this,arguments)||this,Object.defineProperty(u(e),a,{writable:!0,value:{$project_wrapper:".project_wrapper",isotope:".isotope_wrapper",$isotope:".isotope_wrapper"}}),e.query={},e.init(),e.extendUI(d(u(e),a)[a]),!e.ui.isotope)return u(e);if(!1 in e.settings)return u(e);if(e.query={pagination_en:e.settings.pagination_en,query:e.settings.query,show_title:e.settings.show_title,show_category:e.settings.show_category,use_filter:e.settings.use_filter,random:e.settings.random,render_index:e.settings.render_index,settings:e.settings.settings},e.query.action="gt3_themes_core_project_load_items",e.query.query.paged=0,e.isotope=new b(e.ui.isotope,{layoutMode:"masonry",itemSelector:".isotope_item",percentPosition:!0,stagger:30,transitionDuration:"0.4s",masonry:{},originLeft:!w}),e.resize(),e.ui.$isotope.imagesLoaded((function(){e.resize()})),!y){var i=!1;m(".project_view_more_link",e.el).on("click",(function(t){t.preventDefault(),i||(i=!0,e.query.query.paged++,m.ajax({type:"POST",data:e.query,url:gt3_themes_core.ajaxurl,success:function(t){if("post_count"in t&&t.post_count>0){var r=document.createElement("div");r.innerHTML=t.respond,e.isotope.once("insertComplete",(function(){e.show_lazy_images(e.ui.$isotope)})),e.isotope.once("layoutComplete",(function(){e.resize(),e.showImages()})),e.isotope.insert(r)}"max_page"in t&&(t.max_page<=e.query.query.paged||0===t.max_page)&&m(".project_view_more_link",e.el).remove(),"exclude"in t&&(e.query.query.exclude=t.exclude),i=!1},error:function(t){console.error("Error request"),i=!1}}))})),e.query.pagination_en||e.ui.$project_wrapper.on("click",".isotope-filter a",(function(t){t.preventDefault();var i=t.target||t.currentTarget,r=i.getAttribute("data-filter");m(i).siblings().removeClass("active"),m(i).addClass("active"),e.isotope.arrange({filter:r}),e.show_lazy_images(e.ui.$isotope)}))}return e.show_lazy_images(e.ui.$isotope),e.afterInit(),e}i=t,(e=r).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var o=r.prototype;return o.start=function(){this.showImages()},o.showImages=function(){var t=this.el.querySelector(".isotope_item.loading");t&&(t.classList.add("loaded"),t.classList.remove("loading"),setTimeout(this.showImages,300))},o.resize=function(){if(!this.isotope)switch(this.settings.type){case"grid":this.grid_resize();break;case"packery":this.packery_resize();break;case"masonry":this.masonry_resize()}},o.grid_resize=function(){var t=this;if("%"===this.settings.gap_unit){var e=(this.ui.$project_wrapper.width()*parseFloat(this.settings.gap_value)/100).toFixed(2);this.ui.$isotope.find(".isotope_item").css("padding-right",e+"px").css("padding-bottom",e+"px")}var i,r,o,a,s=v.window;"rectangle"!==this.settings.grid_type&&"square"!==this.settings.grid_type||this.ui.$project_wrapper.find("img").each((function(e,n){var c=m(n),p=c.closest(".img_wrap");s.width<600?(p.css("height","auto").css("width","auto").attr("data-ratio",""),c.attr("data-ratio","").closest(".img").css("height","auto").css("width","auto")):(i=r=Math.ceil(p.outerWidth()),"rectangle"===t.settings.grid_type&&(i=Math.ceil(.75*r)),i=Math.ceil(i),o=r/i,a=(c.attr("width")||1)/(c.attr("height")||1),o>a&&(a=.5),p.css("height",Math.floor(i)).attr("data-ratio",o>=1?"landscape":"portrait"),c.attr("data-ratio",a>=1?"landscape":"portrait").closest(".img").css("height",p.height()).css("width",p.width()))}));var n={layoutMode:"masonry"};s.width>600&&(n=c(c({},n),{layoutMode:"fitRows",fitRows:{rowHeight:this.get_max_height()}})),this.isotope.arrange(n),this.ui.$isotope.imagesLoaded((function(){setTimeout((function(){t.isotope.layout()}),600)}))},o.packery_resize=function(){if("%"===this.query.gap_unit){var t=(this.ui.$project_wrapper.width()*parseFloat(this.settings.gap_value)/100).toFixed(2);this.ui.$isotope.find(".isotope_item").css("padding-right",t+"px").css("padding-bottom",t+"px")}var e,i,r,o,a,s=this.settings.packery,n=s.grid,c=n,p=s.lap,u=v.window;u.width<600?n=1:u.width<992&&n%2==0&&(p/=2,n/=2),5===n&&(u.width<600?n=1:u.width<992&&5===n&&(p/=2,n=2));var d=Math.floor(this.ui.$isotope.width()/n),l=0;this.ui.$project_wrapper.find(".isotope_item").each((function(t,n){var h=m(n).find("img"),g=m(n),f=g.find(".text_wrap");if(u.width<600)g.css("height","auto").css("width","auto").attr("data-ratio",""),h.attr("data-ratio","").closest(".img_wrap").css("height","auto").css("width","auto");else{e=i=d,(a=l%p+1)in s.elem&&("w"in s.elem[a]&&s.elem[a].w>1&&(i=d*s.elem[a].w),"h"in s.elem[a]&&s.elem[a].h>1&&(e=u.width<992&&5===c?1*d:d*s.elem[a].h)),l++,r=i/e,o=(h.attr("width")||1)/(h.attr("height")||1);var _=r>=1?"landscape":"portrait",w=o>=1?"landscape":"portrait";"portrait"===_&&"portrait"===w&&r>=o?_="landscape":"landscape"===_&&"landscape"===w&&o<=r&&(w="portrait"),g.css("height",Math.floor(e)).css("width",Math.floor(i)).attr("data-ratio-n",r).attr("data-ratio",_),h.attr("data-ratio",w).attr("data-ratio-n",o).closest(".img_wrap").css("height",g.height()).css("width",g.width()),f.height()>30?g.addClass("animate_text_wrap"):g.removeClass("animate_text_wrap")}})),this.isotope.arrange({layoutMode:"masonry",masonry:{columnWidth:d}})},o.masonry_resize=function(){if("%"===this.settings.gap_unit){var t=(this.ui.$project_wrapper.width()*parseFloat(this.settings.gap_value)/100).toFixed(2);this.ui.$isotope.find(".isotope_item").css("padding-right",t+"px").css("padding-bottom",t+"px")}this.isotope.layout()},o.get_max_height=function(){var t=0;return m.each(this.ui.$isotope.children(),(function(e,i){t<=m(i).outerHeight()&&(t=m(i).outerHeight())})),t},o.show_lazy_images=function(t,e){e||(e=t.find("img.gt3_lazyload"));var i=[].slice.call(e),r=!1,o=function t(){!1===r&&(r=!0,setTimeout((function(){i.forEach((function(e){var r=i.length;e.getBoundingClientRect().top<=window.innerHeight&&e.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(e).display&&(e.dataset.src&&(e.src=e.dataset.src),e.dataset.srcset&&(e.srcset=e.dataset.srcset),e.dataset.sizes&&(e.sizes=e.dataset.sizes),e.onload=function(){var t=1/(r-i.length)*800;i.length||(t=0),setTimeout((function(){e.classList.remove("gt3_lazyload"),e.classList.add("gt3_lazyload_loaded"),m(e).parents(".isotope_item.lazy_loading").removeClass("lazy_loading").addClass("lazy_loaded")}),t)},0===(i=i.filter((function(t){return t!==e}))).length&&(document.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t)))})),r=!1}),200))};o(),document.addEventListener("scroll",o),window.addEventListener("resize",o),window.addEventListener("orientationchange",o)},r}(_),o.widgetName="gt3-core-project",r=s))||r;GT3.ThemesCore.onWidgetRegisterHandler(j.widgetName,j)},694:function(t,e,i){}});