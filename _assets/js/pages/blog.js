(function(){

$( document ).ready(function() {

      if ($(window).width() >= 768) {
    var selectCategory= {
      top:'140px'
    }
    $(window).scroll(function() {
         
      if($(this).scrollTop()+$(".selectSection").outerHeight(true) >= $('.commonFooter').offset().top - 220){
        $('.selectSection').css({'position':'absolute','top':'initial','bottom': '80px' });
      }
else if ($(this).scrollTop() > $(".blogBg").height() - $(".commonHeader").height()){  
    $('.commonHeader').css({"background-color":"#fff"}).addClass("animated fadeIn");
    $(".selectSection").css({"position":"fixed","top":selectCategory.top,'bottom':'initial'});
    $(".rightDiv").css({"position":"relative","left":"33.3%","top":"0px"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_color.svg");
    $('.commonHeader__logo').attr("src", "/assets/img/common/LB_LOGO_Color.svg");
  }
  else {
     $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
     $(".selectSection").css({"position":"absolute","top":"80px",'bottom':'initial'});
     $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
     $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
  }
});
}
  
//   if ($(window).width() >= 768) {
//     $(window).scroll(function() {
// if ($(this).scrollTop() > $(".blogBg").height() - $(".commonHeader").height()){  
//     $('.commonHeader').css({"background-color":"#fff"}).addClass("animated fadeIn");
//     $(".selectSection").css({"position":"fixed","top":"140px"});
//     $(".rightDiv").css({"position":"relative","left":"33.3%","top":"0px"});
//     $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_color.svg");
//         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_LOGO_Color.svg");
//   }
//   else {
//     $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
//     $(".selectSection").css({"position":"static","top":"0%"});
//     $(".rightDiv").css({"position":"static","left":"0%"});
//     $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
//         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
//   }
// });
// }
// else if($(window).width() >= 768 && $(window).width() < 1199) {
//     $(window).scroll(function() {
// if ($(this).scrollTop() > $(".blogBg").height() - $(".commonHeader").height()){  
//     $('.commonHeader').css({"background-color":"#fff"}).addClass("animated fadeIn");
//     $(".selectSection").css({"position":"fixed","top":"140px"});
//     $(".rightDiv").css({"position":"relative","left":"33.3%","top":"0px"});
//     $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_color.svg");
//         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_LOGO_Color.svg");
//   }
//   else {
//     $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
//     $(".selectSection").css({"position":"static","top":"0%"});
//     $(".rightDiv").css({"position":"static","left":"0%"});
//     $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
//         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
//   }
// });
// }
else if($(window).width() < 768){
  $(window).scroll(function() {
  if ($(this).scrollTop() > $(".blogBg").height() - $(".commonHeader").height()){  
  $(".selectSection").css({"position":"static","top":"0%"});
    $(".rightDiv").css({"position":"static","left":"0%"});
  }
  else {
    $(".selectSection").css({"position":"static","top":"0%"});
    $(".rightDiv").css({"position":"static","left":"0%"});
  }
  });
}

// $(window).resize(function() {
//   if ($(window).width() >= 1200) {
//     $(window).scroll(function() {
// if ($(this).scrollTop() > $(".blogBg").height() - $(".commonHeader").height()){  
//     $('.commonHeader').css({"background-color":"#fff"}).addClass("animated fadeIn");
//     $(".selectSection").css({"position":"fixed","top":"140px"});
//     $(".rightDiv").css({"position":"relative","left":"33.3%","top":"0px"});
//     $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_color.svg");
//         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_LOGO_Color.svg");
//   }
//   else {
//     $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
//     $(".selectSection").css({"position":"static","top":"0%"});
//     $(".rightDiv").css({"position":"static","left":"0%"});
//     $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
//         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
//   }
// });
// }
// else if($(window).width() >= 768 && $(window).width() < 1199) {
//     $(window).scroll(function() {
// if ($(this).scrollTop() > $(".blogBg").height() - $(".commonHeader").height()){  
//     $('.commonHeader').css({"background-color":"#fff"}).addClass("animated fadeIn");
//     $(".selectSection").css({"position":"fixed","top":"140px"});
//     $(".rightDiv").css({"position":"relative","left":"33.3%","top":"0px"});
//     $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_color.svg");
//         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_LOGO_Color.svg");
//   }
//   else {
//     $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
//     $(".selectSection").css({"position":"static","top":"0%"});
//     $(".rightDiv").css({"position":"static","left":"0%"});
//     $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
//         $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
//   }
// });
// }
// else if($(window).width() < 768){
//   $(window).scroll(function() {
//   if ($(this).scrollTop() > $(".blogBg").height() - $(".commonHeader").height()){  
//   $(".selectSection").css({"position":"static","top":"0%"});
//     $(".rightDiv").css({"position":"static","left":"0%"});
//   }
//   else {
//     $(".selectSection").css({"position":"static","top":"0%"});
//     $(".rightDiv").css({"position":"static","left":"0%"});
//   }
//   });
// }
// });

});

})();