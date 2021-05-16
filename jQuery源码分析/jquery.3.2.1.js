(function(root){
  var jQuery = function () {
         return new jQuery.prototype.init();
  }
 jQuery.fn = jQuery.prototype = {
      init: function() {

      },
      css: function(){
        const a = 'index';
        
      }
  }

  /**
   * 传递的第一个参数必须为object
   */
  jQuery.fn.extend = jQuery,extend = function(){
    var target =  arguments[0] || {};
    var length  =  arguments.length;
    var i = 1;
    var option;
    if (typeof target !== 'object') {
      //如果不等于对象，就创建一个对象      
      target = {};
    }
    if (length === i) {
      //如果等于1，则要么是给jquery本身扩展、要么是jquery实例对象扩展.
       target = this; //找到对象的引用


    }

    for (; i<length; i++){
      //给任意对象扩展，第一个对象是不需要动的，只需找到第二个，第二个以上的进行便利
     // if (arguments[i])
    }
  }
  //共享原型对象
  jQuery.fn.init.prototype = jQuery.fn;
  root.$ = root.jQuery = jQuery;
})(this);