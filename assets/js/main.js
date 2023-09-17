$.mobile.loading().hide();

$('body').css('display', 'none');
$('body').fadeIn(500);

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
            $('#konten').removeClass('click');
          } 
          else if (event.type === "swiperight") {
            $('#sidebar').addClass('visible');
            $('#konten').addClass('click');
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
      $('#tanda').addClass("mobile");
    }
    else {
      $('#sidebar').removeClass("mobile");
      $('#konten').removeClass("mobile");
      $('#tanda').removeClass("mobile");
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

$('.btn-21').click(function(event) {
  event.preventDefault();
  var n = $(document).height();
  $('html, body').animate({ scrollTop: 650 }, 500);
});


$(".tabs li").click(function (g) {
	var tab = $(this).closest(".tab"),
		index = $(this).closest("li").index();
	tab.find(".tabs li").removeClass("current");
	$(this).closest("li").addClass("current");
	tab
		.find(".tab_content")
		.find("div.tabs_item")
		.not("div.tabs_item:eq(" + index + ")")
		.hide();
	tab
		.find(".tab_content")
		.find("div.tabs_item:eq(" + index + ")")
		.fadeIn();
	g.preventDefault();
});

function launch_toast() {
  var x = document.getElementById("toast")
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

(function () {
  "use strict";
  var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
    return function (arg) {
      if (this.length > 1) {
        this.each(function () {
          var $this = $(this);

          if (!$this.data(ident)) {
            $this.data(ident, func($this, arg));
          }
        });

        return this;
      } else if (this.length === 1) {
        if (!this.data(ident)) {
          this.data(ident, func(this, arg));
        }

        return this.data(ident);
      }
    };
  });
})();

(function () {
  "use strict";
  function Accordion($roots) {
    var element = $roots;
    var accordion = $roots.first("[data-accordion]");
    var accordion_target = $roots.find("[data-accordion-item]");
    var accordion_content = $roots.find("[data-accordion-content]");
    $(accordion_target).click(function () {
      $(this).toggleClass("opened");
      $(this).find(accordion_content).slideToggle("slow");
      $(this).siblings().find(accordion_content).slideUp("slow");
      $(this).siblings().removeClass("opened");
    });
  }
  $.fn.Accordion = jQueryPlugin("Accordion", Accordion);
  $("[data-accordion]").Accordion();

  function Ripple_Button($root) {
    var elements = $root;
    var ripple_btn = $root.first("[data-ripple]");
    $(ripple_btn).on("click", function (event) {
      event.preventDefault();
      var $div = $("<div/>"),
        btnOffset = ripple_btn.offset(),
        xPos = event.pageX - btnOffset.left,
        yPos = event.pageY - btnOffset.top;
      $div.addClass("ripple-effect");
      $div.css({
        height: ripple_btn.height(),
        width: ripple_btn.height(),
        top: yPos - $div.height() / 2,
        left: xPos - $div.width() / 2,
        background: ripple_btn.data("ripple") || "#ffffff26"
      });
      ripple_btn.append($div);

      window.setTimeout(function () {
        $div.remove();
      }, 2000);
    });
  }
  $.fn.Ripple_Button = jQueryPlugin("Ripple_Button", Ripple_Button);
  $("[data-ripple]").Ripple_Button();
})();



$(document).ready(function(){
  var currentIndex = 0;

  function showSlide(index) {
    $('.carousel-item').removeClass('active');
    $('.carousel-item').eq(index).addClass('active');
    $('.carousel-indicators li').removeClass('active');
    $('.carousel-indicators li').eq(index).addClass('active');
  }

  $('.carousel-indicators li').click(function() {
    currentIndex = $(this).index();
    showSlide(currentIndex);
  });

  $('.carousel-control-prev').click(function(){
    currentIndex = (currentIndex - 1 + $('.carousel-item').length) % $('.carousel-item').length;
    showSlide(currentIndex);
  });

  $('.carousel-control-next').click(function(){
    currentIndex = (currentIndex + 1) % $('.carousel-item').length;
    showSlide(currentIndex);
  });
});
