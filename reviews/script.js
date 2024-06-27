container = $(".flex");
button = container.next().children(0);

button.on("click", () => {
  if (button.text() == "Show More") {
    button.text("Ok, Stopppp!");
    $(window).on("scroll", () => {
      if (
        $(window).scrollTop() >=
        container.offset().top +
          container.outerHeight() -
          window.innerHeight -
          600
      ) {
        button.parent().css("marginTop", "-10rem");
      } else {
        button.parent().css("marginTop", "100rem");
        button.text("Ok, Stopppp!");
      }
    });
  } else {
    button.parent().css("marginTop", "100rem");
    button.text("Show more!");
    $(window).scrollTop(container.offset().top + 200);
  }
});