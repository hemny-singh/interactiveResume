$(document).ready(function(){
  var texts = [
    "Build Attractive Webpages",
    "Work as a Team",
    "Solve Problems.",
    "Work on new tech"
  ], count = 0;

  function changeText() {
    $(".intro-dynamic").delay(10)
      .hide("fade", {
      times: 4
    }, 3000, function () {
      $(this).text(texts[count]).show("fade", {
        times: 4
      }, 3000, function () {
        count < 3 ? count++ : count = 0;
        changeText();
      });
    });
  }
  changeText();
  //transform: translate3d(-107.319px, 0px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;
  $('.first-section-overlay').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 16);
    var amountMovedY = (e.pageY * -1 / 16);
    $('#first_section_image').css({
        "transform": "translate3d(" + amountMovedX + "px," + amountMovedY + "px, 0px)",
        "transform-style": "preserve-3d",
        "backface-visibility": "hidden"
      });
    // $('#first_section_image').css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  });
});

function stickSidebar() {
  var stickySidebar = $('.about-section-sticky');

  if (stickySidebar.length > 0) {
    var stickyHeight = stickySidebar.height(),
      sidebarTop = stickySidebar.offset().top;
  }

  // on scroll move the sidebar
  $(window).scroll(function () {
    if (stickySidebar.length > 0) {
      var scrollTop = $(window).scrollTop();
      // stickyHeight = stickySidebar.height(),
      // sidebarTop = stickySidebar.offset().top;
      // console.log(scrollTop, stickyHeight, sidebarTop);

      if (sidebarTop < scrollTop) {
        stickySidebar.css('top', scrollTop - sidebarTop);

        // stop the sticky sidebar at the footer to avoid overlapping
        var sidebarBottom = stickySidebar.offset().top + stickyHeight,
            stickyStop = $('.about-section-content').offset().top + $('.about-section-content').height();
        if (stickyStop < sidebarBottom) {
          var stopPosition = $('.about-section-content').height() - stickyHeight;
          stickySidebar.css('top', stopPosition);
        }
      } else {
        stickySidebar.css('top', '0');
      }
    }
  });

  $(window).resize(function () {
    if (stickySidebar.length > 0) {
      stickyHeight = stickySidebar.height();
    }
  });
}

if(document.documentElement.clientWidth >= 426){
  // do your stuff
  stickSidebar();
}

