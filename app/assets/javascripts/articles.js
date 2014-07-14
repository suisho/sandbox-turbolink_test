$(function(){
  $(".foo").addClass("animation")
  $(".next").on("click", function(e){
    var url = $(this).attr("href")
    $(".foo").on("transitionend", function(e){
      Turbolinks.visit(url)
    }).addClass("animation")
    return false;
  })
})

$(document).on("ready page:load page:restore", function(){
  $(".foo").removeClass("animation")
})
