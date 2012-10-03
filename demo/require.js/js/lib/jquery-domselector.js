/**
 * Copyright (c) 2012 Bertrand Chevrier
 * domselector - v0.1.0 
 * @author Bertrand Chevrier <chevrier.bertrand@gmail.com>
 * @license <%= _.pluck(pkg.licenses, "url").join(", ")
 */

(function(e){"use strict";var t={_opts:{mode:"once",selectedClass:"selected"},_init:function(n){e.extend(t._opts,n);var r=t._opts,i=function(t,n){r.mode==="once"?t.addClass(n):t.toggleClass(n)},s=this;return this.each(function(){var t=e(this);t.on("click",function(n){return n.preventDefault,r.mode==="exclusive"&&s.removeClass(r.selectedClass),i(e(this),r.selectedClass),t.trigger("selection.domselector",t.domSelector("getSelected")),!1})})},getSelected:function(){var n=t._opts,r=[];return this.each(function(){var t=e(this);if(t.hasClass(n.selectedClass))switch(t.prop("tagName").toLowerCase()){case"img":r.push(t.attr("src"));break;case"a":r.push(t.attr("href"));break;default:r.push(t.text())}}),r.length===1?r[0]:r}};e.fn.domSelector=function(n){if(t[n]){if(!/^_/.test(n))return t[n].apply(this,Array.prototype.slice.call(arguments,1));e.error("Trying to call a private method "+n+" on jQuery.domSelector")}else{if(typeof n=="object"||!n)return t._init.apply(this,arguments);e.error("Method "+n+" does not exist on jQuery.domSelector")}}})(jQuery);