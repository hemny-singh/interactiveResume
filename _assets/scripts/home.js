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
  }, 2000, function () {
    $(this).text(texts[count]).show("fade", {
      times: 4
    }, 2000, function () {
      count < 3 ? count++ : count = 0;
      changeText();
    });
  });
}
changeText();

$('.first-section-overlay').mousemove(function(e){
  var amountMovedX = (e.pageX * -1 / 16);
  var amountMovedY = (e.pageY * -1 / 16);
  $('#first_section_image').css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});

function stickSidebar() {
  var $sticky = $('.third-section-sticky');
  var $stickyrStopper = $('.sticky-stopper');
  if (!!$sticky.offset()) { // make sure ".sticky" element exists
    var generalSidebarHeight = $sticky.innerHeight();
    var stickyTop = $sticky.offset().top;
    var stickOffset = 0;
    var stickyStopperPosition = $stickyrStopper.offset().top;
    var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
    var diff = stopPoint + stickOffset;

    $(window).scroll(function() { // scroll event
      var windowTop = $(window).scrollTop(); // returns number
      console.log(stopPoint, windowTop, 'xcvbn')
      if (stopPoint < windowTop) {
          $sticky.css({ position: 'absolute', top: diff });
      } else if (stickyTop < windowTop+stickOffset) {
          $sticky.css({ position: 'fixed', top: stickOffset});
      } else {
          $sticky.css({position: 'absolute', top: 'initial'});
      }
    });
  }
}

stickSidebar();
