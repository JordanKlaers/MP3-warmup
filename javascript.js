$(document).ready(function(){




  $("#select").on("click", function(){
    console.log("clicked");
    $("#cats").trigger("play");
  })
})
