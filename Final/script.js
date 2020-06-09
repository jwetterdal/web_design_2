 function changeImage() {
   element = document.getElementById('imageToSwitch')
   if (element.src.match("down")) {
     element.src = "nav.png";
   } else {
     element.src = "down.png";
   }
 }

 $(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
    
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
    
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });

  $("#toggle2").click(function() {
    var elem = $("#toggle2").text();
    if (elem == "Read More") {
    
      $("#toggle2").text("Read Less");
      $("#text2").slideDown();
    } else {
    
      $("#toggle2").text("Read More");
      $("#text2").slideUp();
    }

  });

  $("#toggle3").click(function() {
    var elem = $("#toggle3").text();
    if (elem == "Read More") {
    
      $("#toggle3").text("Read Less");
      $("#text3").slideDown();
    } else {
    
      $("#toggle3").text("Read More");
      $("#text3").slideUp();
    }
  });

});