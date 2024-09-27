import jQuery from "jquery";
window.$ = jQuery;

$(document).ready(function () {
  $(".button--catalog").hover(
    function () {
      $(this)
        .find(".icon")
        .fadeOut(150, function () {
          $(this).attr("src", "/src/assets/img/menu-open.svg").fadeIn(150);
        });
    },
    function () {
      $(this)
        .find(".icon")
        .fadeOut(150, function () {
          $(this).attr("src", "/src/assets/img/menu.svg").fadeIn(150);
        });
    }
  );
});
