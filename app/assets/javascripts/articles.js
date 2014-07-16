$(function(){
  $(".foo").addClass("animation")
})

$(document).on("ready page:load page:restore", function(){
  $(".foo").removeClass("animation")
})
/*$(document).on("ready", function(){
  $(document).pjax("a.next", "#container")
})*/

$(function(){

  function loadContents(content) {
    $('#container').html(content)
  }
  var container = new Vue({
    el: "#container",
    methods :{
      change : function(content){
        $(this.$el).html(content)
      },
      clickNext : function(e){
        var url = $(e.target).attr("href")
        var animationDeferred = $.Deferred(function(){
        })
        $(".foo").one("transitionend", function(){
          console.log("cmp  anime")
          animationDeferred.resolve()
        })
        var dataDeferred = $.ajax({
          url : url,
          beforeSend: function(){
            console.log("start send")
          }
        }).done(function(){
          console.log("request get")
        })
        $.when(dataDeferred , animationDeferred).done(function(content){
          container.change(content)
        })
        $(".foo").addClass("animation")
      }
    }
  })

  $(document).on("pjax:end", function(){
    $(".foo").removeClass("animation")
  })
})
