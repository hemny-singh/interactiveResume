$(document).ready(function(){
  // $('.about-slider').slick({
  //   autoplay: true,
  //   autoplaySpeed: 2000
  //   //dots: true,
  //   //infinite: true,
  //   //speed: 1500,
  //   // fade: true,
  //   //cssEase: 'linear'
  // });
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
});

// function stickSidebar() {
//   var stickySidebar = $('.third-section-sticky');

//   if (stickySidebar.length > 0) {
//     var stickyHeight = stickySidebar.height(),
//       sidebarTop = stickySidebar.offset().top;
//   }

//   // on scroll move the sidebar
//   $(window).scroll(function () {
//     if (stickySidebar.length > 0) {
//       var scrollTop = $(window).scrollTop();

//       if (sidebarTop < scrollTop) {
//         stickySidebar.css('top', scrollTop - sidebarTop);

//         // stop the sticky sidebar at the footer to avoid overlapping
//         var sidebarBottom = stickySidebar.offset().top + stickyHeight,
//             stickyStop = $('.third-section-content').offset().top + $('.third-section-content').height();
//         if (stickyStop < sidebarBottom) {
//           var stopPosition = $('.third-section-content').height() - stickyHeight;
//           stickySidebar.css('top', stopPosition);
//         }
//       } else {
//         stickySidebar.css('top', '0');
//       }
//     }
//   });

//   $(window).resize(function () {
//     if (stickySidebar.length > 0) {
//       stickyHeight = stickySidebar.height();
//     }
//   });
// }

// stickSidebar();
