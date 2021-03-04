// $("i").click(function(){
//   $("hamburger-menu").addClass("active");
// })


// $("i").addClass("red");

// devo aggiungere la classe .active ad hamburger menu
// quando i figlio di header-right e' cliccato

var burger = $(".header-right i");
var close = $(".close");

burger.click(function(){
  $(".hamburger-menu").addClass("active")
})
close.click(function(){
  $(".hamburger-menu").removeClass("active")
})
