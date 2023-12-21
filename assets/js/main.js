const header = $(".header-wrapper");
let lastScrollTop = 0;

$(window).scroll(function () {
  const scrollTop = $(this).scrollTop();
  if (scrollTop > lastScrollTop) {
    header.addClass("scrolled");
  } else {
    header.removeClass("scrolled");
  }
  lastScrollTop = scrollTop;
});

$(".slide").hover(
  function () {
    $(".header-wrapper").css("--height", "65px");
  },
  function () {
    $(".header-wrapper").css("--height", "0px");
  }
);

$(".header-global-sub a").hover(
  function () {
    $(this).addClass("active");
    $(this).parent().siblings().find("a").removeClass("active");
  },
  function () {
    $(this).parent().find("a").removeClass("active");
    $(this).parent().parent().children(":first").find("a").addClass("active");
  }
);

const mainSwiper = new Swiper(".sc-visual .swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const cardSwiper = new Swiper(".sc-card .swiper", {
  slidesPerView: "auto",
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

const $slides = $(".sc-card .card");

$slides.each(function (index, slide) {
  if (index % 2 !== 0) {
    $(slide).css("margin-top", "40px");
  }
});

$(".sc-card .swiper")
  .on("mouseenter", function () {
    cardSwiper.autoplay.stop();
  })
  .on("mouseleave", function () {
    cardSwiper.autoplay.start();
  });

const video = document.getElementById("video");

$(".btn-stop").click(function () {
  video.pause();
  $(this).hide();
  $(".btn-play").show();
});

$(".btn-play").click(function () {
  video.currentTime = 0;
  video.play();
  $(this).hide();
  $(".btn-stop").show();
});

$(".link-select-button").click(function () {
  $(".link-select-list").toggleClass("on");
});

//header menu
$(".header-open").click(function () {
  $(".menu").addClass("on");
  $("body").css("overflow", "hidden");
});

$(".menu-close").click(function () {
  $(".menu").removeClass("on");
  $("body").css("overflow", "visible");
});

$(".menu-global .slide>div").click(function (e) {
  e.preventDefault();
  $(this).siblings(".menu-global-sub").slideToggle();
  $(this).parent().toggleClass("on")
});
