$(function(){
  $(".foo").addClass("animation")
  /*$(".next").on("click", function(e){
    var url = $(this).attr("href")
    $(".foo").on("transitionend", function(e){
      //Turbolinks.visit(url)
    }).addClass("animation")
    //return false;
  })*/
})

$(document).on("ready page:load page:restore", function(){
  $(".foo").removeClass("animation")
})
/*$(document).on("ready", function(){
  $(document).pjax("a.next", "#container")
})*/

$(function(){
  $(document).on("pjax:end", function(){
    console.log("aa")
    $(".foo").removeClass("animation")
  })
  $("a.next").on("click", function(e){
    $(".foo").one("transitionend", function(){
      $.pjax({url : $("a.next").attr("href"), 
        container : "#container"
      })
    }).addClass("animation")
    return false;
  })
})
