$(document).ready(function () {
    console.log("Ready!");
  
    $(".row").click(function () {
      $(this).find(".content").slideToggle("slow");
    });
    
      $(".dragme").click(function () {
        $(this).addClass("hide");
      });

  });
  