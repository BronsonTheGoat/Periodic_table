//onclick->open overlay->get all data from element cards and display on overlay
//overlay also contets an image of the element, some basic information and a wiki-ink
$(document).ready(function(){
  alert("A weblap kifejezetten asztali használatra készült!\nMobil nézetben előfordulhatnak hibák!");
  $(".element").click(function() {
    //$("body").css("overflow", "hidden");
    let thisid = $(this).attr("id");
    let name = $(this).children(".name").text();
    let typename = $(this).children(".type").text();
    let link = "https://hu.wikipedia.org/wiki/";
    //alert(thisid == "0" || thisid == "57-71" || thisid == "89-103");
    $(".overlay").show(300, function(){
      //Set the title of the overlay
      $(".materialname").text(name);
      //Set wikilink and it's text
      $("#wikilink").attr("href", link + name);
      $("#wikilink").text("Wikipédia");
      //Check if clicked Lanthanide or Actinide
      if (thisid == "57-71") {
        $(".materialname").text("Lantanoidák");
        $("#wikilink").attr("href", link + "lantanoidák");
        $("#wikilink").text("Wikipédia");
      } else if (thisid == "89-103") {
        $(".materialname").text("Aktinoidák");
        $("#wikilink").attr("href", link + "aktinoidák");
        $("#wikilink").text("Wikipédia");
      }
      //Check if slicked on any of the types
      if (thisid == "0") {
        $(".materialname").text(typename);
        $("#wikilink").attr("href", link + typename);
        $("#wikilink").text("Wikipédia");
      }
    });
  });
  $(".close").click(function() {
    //$("body").css("overflow", "scroll");
      $(".overlay").hide(500);
  });
});
