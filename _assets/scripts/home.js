var texts = [
    "Think Logical.",
    "Solve Problems.",
    "Work on Latest Tech.",
    "Work as a Team."
  ], count = 0;


function changeText() {
  $(".intro-dynamic").delay(10)
    .hide("fade", {
    times: 4
  }, 1000, function () {
    $(this).text(texts[count]).show("fade", {
      times: 4
    }, 1000, function () {
      count < 3 ? count++ : count = 0;
      changeText();
    });
  });
}
changeText();
