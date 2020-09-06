$(function () {
  $("#about-link").click(function () {
    $("html, body").animate({
      scrollTop: $("#aboutme").offset().top,
    });
  });

  $("#skill-link").click(function () {
    $("html, body").animate({
      scrollTop: $("#skill").offset().top,
    });
  });

  $("#project-link").click(function () {
    $("html, body").animate({
      scrollTop: $("#language").offset().top,
    });
  });

  $("#hobby-link").click(function () {
    $("html, body").animate({
      scrollTop: $("#project").offset().top,
    });
  });

  $("#back-to-top").click(function () {
    $("html, body").animate({
      scrollTop: $("html, body").offset().top,
    });
  });
});
