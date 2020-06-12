//onclick->open overlay->get all data from element cards and display on overlay
//overlay also contets an image of the element, some basic information and a wiki-ink
$(document).ready(function(){
  $(".element").click(function() {
    //$("body").css("overflow", "hidden");
    let thisid = $(this).attr("id");
    let name = $(this).children(".name").text();
    let source = "assets/" + name + ".jpg";
    let typename = $(this).children(".type").text();
    let number = $(this).children(".number").text();
    let symbol = $(this).children(".symbol").text();
    let link = "https://hu.wikipedia.org/wiki/" + name;
    //alert(thisid == "0" || thisid == "57-71" || thisid == "89-103");
    $(".overlay").show(500, function(){
      //Set the title of the overlay
      $(".materialname").text(name);
      //Set the source and alt text of the image
      /*$("#materialimage").attr("src", source);
      $("#materialimage").attr("alt", name);*/
      //Set wikilink and it's text
      /*$("#wikilink").attr("href", link);
      $("#wikilink").text("Wikipédia");*/
      //Check if clicked Lanthanide or Actinide
      if (thisid == "57-71") {
        $(".materialname").text("Lantanoidák");
      } else if (thisid == "89-103") {
        $(".materialname").text("Aktinoidák");
      }
      //Check if slicked on any of the types
      if (thisid == "0") {
        $(".materialname").text(typename);
      }
    });
  });
  $(".close").click(function() {
    //$("body").css("overflow", "scroll");
      $(".overlay").hide(500);
  });
});
