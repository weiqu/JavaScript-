(function(root){
  var jQuery = function () {

  }
  jQuery.prototype = {
      init: function() {

      }
  }
  jQuery.prototype.init.prototype = jQuery.prototype;
  root.$ = root.jQuery = jQuery;
})(this);