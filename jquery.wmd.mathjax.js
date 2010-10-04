/*
 * jQuery plugin to use wmd with MathJax rendering in the preview.
 *
 * We add a wmdMath method which works like the wmd one from the wmd jQuery plugin,
 * except that we do not create the preview pane automatically and require the
 * id of its div to be passed in the preview field of the options argument.
 */

(function($) {

   $.fn.wmdMath = function(options) {

     var mathRefresh = function(wmd) {
       MathJax.Hub.Queue(["Typeset", MathJax.Hub, options.preview]);
     };

     options = $.extend({}, {previewRefreshCallback: mathRefresh}, options || {});

     this.wmd(options);

   };
 })(jQuery);