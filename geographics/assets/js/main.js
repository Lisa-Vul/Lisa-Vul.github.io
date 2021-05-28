$(document).ready(function () {
    console.log("Ready!");
  
    $(".row").click(function () {
      $(this).find(".content").slideToggle("slow");
    });
    
    $(document).ready(function () {
      console.log("Hello world");
    
    
      $(".dragme").draggable();
    
    });

  });
  