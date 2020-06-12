//onclick->open overlay->get all data from element cards and display on overlay
//overlay also contets an image of the element, some basic information and a wiki-ink
$(document).ready(function(){
  $(".element").click(function() {
    let name = $(this).children(".name").text();
    let number = $(this).children(".number").text();
    let symbol = $(this).children(".symbol").text();
    let link = "https://hu.wikipedia.org/wiki/" + name;
    $(".overlay").show(500, function(){
      $(".materialname").text(name);
      let source = "assets/" + name + ".jpg";
      $("#materialimage").attr("src", source);
      $("#materialimage").attr("alt", name);
      $("#wikilink").attr("href", link);
      $("#wikilink").text("Wikipédia");
    });
  });
  $(".close").click(function() {
      $(".overlay").hide(500);
  });
});
