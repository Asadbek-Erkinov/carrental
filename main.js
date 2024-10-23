var elSiteHeader = document.querySelector(".js-header");
var elMenuBtn = elSiteHeader.querySelector(".js-hamburg-btn");
var elCloseBtn = elSiteHeader.querySelector(".js-close-btn");


elMenuBtn.addEventListener("click", function() {

  elSiteHeader.classList.toggle("show-menu");

  document.body.classList.toggle("no-scroll");

});

elCloseBtn.addEventListener("click", function() {

  elSiteHeader.classList.remove("show-menu");

});