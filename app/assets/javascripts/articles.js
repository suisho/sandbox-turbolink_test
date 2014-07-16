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

  $(document).on("pjax:end", function(){
    $(".foo").removeClass("animation")
  })
  $("a.next").on("click", function(e){
    var url = $("a.next").attr("href")
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
      $('#container').html(content)
    })
    $(".foo").addClass("animation")
    console.log("start anime")
    
    return false;
  })
})
