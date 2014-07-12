//$(document).on("page:before-change")
$(document).on("page:fetch page:receive page:change page:update page:load", function(e){
  console.log(e.type)
  return false;
})