var menulist = document.querySelector(".list--menu");
var itemmenu = menulist.querySelectorAll(".itemmenu");
for (var i = 0; i < itemmenu.length; i++) {
  itemmenu[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "");
    }
    this.className += " active";
  });
}


$("#slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

const goup = document.querySelector(".goup");
goup.onclick = () => {
  window.scrollTo(0, 0);
};
$(document).ready(function () {
  $(".menu__control").click(function (e) {
    e.stopPropagation();
    $(this).closest(".menu").toggleClass("is-open");
  });

  $(document).click(function () {
    $(".menu__control").closest(".menu").removeClass("is-open");
  });
});
