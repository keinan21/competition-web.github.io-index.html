$(window).ready(function() {
  var width = $(window).width();
  if (width > 750){
    $('#sidebar').hover(function () {
      $('#sidebar').addClass('visible');

    }, function () {
      $('#sidebar').removeClass('visible');

    }
  );
  }
  else if (width < 750){
    $(document).on("pagecreate", function () {
      $(document).on("swipeleft swiperight", function (event) {
          if (event.type === "swipeleft") {
            $('#sidebar').removeClass('visible');
          } 
          else if (event.type === "swiperight") {
            $('#sidebar').addClass('visible');
          }
      });
    });
    ;}
  
});


  $(window).ready(function() {
    var width = $(window).width();
    if (width < 750){
      $('#sidebar').addClass("mobile");
      $('#konten').addClass("mobile");
    }
    else {
      $('#sidebar').removeClass("mobile");
      $('#konten').removeClass("mobile");
    }
  });

  

  $(window).load(function() {
    $('.post-module').hover(function() {
      $(this).find('.description').stop().animate({
        height: "toggle",
        opacity: "toggle"
      }, 300);
    });
  });

  $(document).on("swipeleft swiperight", function (event) {
    console.log("Swipe event triggered:", event.type);
    $(document).on("swipeleft swiperight", function (event) {
      if (event.type === "swipeleft") {
        $('#sidebar').removeClass('visible');
      } 
      else if (event.type === "swiperight") {
        $('#sidebar').addClass('visible');
      }
  });
});

$.mobile.loading().hide();

$('body').css('display', 'none');
$('body').fadeIn(1500);