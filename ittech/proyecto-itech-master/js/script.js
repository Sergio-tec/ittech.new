window.onload = function () {
  document.getElementById("op").style.textDecoration = "underline";
  document.getElementById("op").style.color = "#3B9AD5";
};

$(function () {
  $(".menuicon").click(function () {
    $("nav ul li").addClass("show");
    $(".menuicon1").css("display", "block");
    $(".menuicon").css("display", "none");
  });
  $(".menuicon1").click(function () {
    $("nav ul li").removeClass("show");
    $(".menuicon").css("display", "block");
    $(".menuicon1").css("display", "none");
  });
});

$(function () {
  $(".toggle").on("click", function () {
    if ($(".item").hasClass("active")) {
      $(".item").removeClass("active");
    } else {
      $(".item").addClass("active");
    }
  });
});
