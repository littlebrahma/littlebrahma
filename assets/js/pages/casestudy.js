(function(){
$( document ).ready(function() {
  
  if ($(window).width() >= 1024) {
    $(window).scroll(function() {
if ($(this).scrollTop() > $(".casestudyBg").height() - $(".commonHeader").height()){  
    $('.commonHeader').css({"background-color":"#fff"}).addClass("animated fadeIn");
    $(".selectSection").css({"position":"fixed","top":"140px"});
    $(".caseDet").css({"position":"relative","left":"33.3%","top":"0px"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_RED.png");
        $('.commonHeader__logo').attr("src", "/assets/img/service/LOGO_RED.png");
  }
  else {
    $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
    $(".selectSection").css({"position":"static","top":"0%"});
    $(".caseDet").css({"position":"static","left":"0%"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LOGO_WHITE.png");
  }
});
}
else if($(window).width() >= 768 && $(window).width() < 1024) {
    $(window).scroll(function() {
     
     

if ($(this).scrollTop() > $(".casestudyBg").height() - $(".commonHeader").height()  ){  
    $('.commonHeader').css({"background-color":"#fff"}).addClass("animated fadeIn");
    $(".selectSection").css({"position":"fixed","top":"40px"});
    $(".caseDet").css({"position":"relative","left":"33.3%","top":"0px"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_RED.png");
        $('.commonHeader__logo').attr("src", "/assets/img/service/LOGO_RED.png");
  }
  else {
    $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
    $(".selectSection").css({"position":"static","top":"0%"});
    $(".caseDet").css({"position":"static","left":"0%"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LOGO_WHITE.png");
  }
});
}
else if($(window).width() < 768){
  $(window).scroll(function() {
  if ($(this).scrollTop() > $(".casestudyBg").height() - $(".commonHeader").height()){  
  $(".selectSection").css({"position":"static","top":"0%"});
    $(".caseDet").css({"position":"static","left":"0%"});
  }
  else {
    $(".selectSection").css({"position":"static","top":"0%"});
    $(".caseDet").css({"position":"static","left":"0%"});
  }
  });
}

$(window).resize(function() {
  if ($(window).width() >= 1200) {
    $(window).scroll(function() {
if ($(this).scrollTop() > $(".casestudyBg").height() - $(".commonHeader").height() ){  
    $('.commonHeader').css({"background-color":"#fff"}).addClass("animated fadeIn");
    $(".selectSection").css({"position":"fixed","top":"140px"});
    $(".caseDet").css({"position":"relative","left":"33.3%","top":"0px"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_RED.png");
        $('.commonHeader__logo').attr("src", "/assets/img/service/LOGO_RED.png");
  }
  else {
    $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
    $(".selectSection").css({"position":"static","top":"0%"});
    $(".caseDet").css({"position":"static","left":"0%"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LOGO_WHITE.png");
  }
});
}
else if($(window).width() >= 768 && $(window).width() < 1024) {
    $(window).scroll(function() {
if ($(this).scrollTop() > $(".casestudyBg").height() - $(".commonHeader").height()){  
    $('.commonHeader').css({"background-color":"#fff"}).addClass("animated fadeIn");
    $(".selectSection").css({"position":"fixed","top":"140px"});
    $(".caseDet").css({"position":"relative","left":"33.3%","top":"0px"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_RED.png");
        $('.commonHeader__logo').attr("src", "/assets/img/service/LOGO_RED.png");
  }
  else {
    $('.commonHeader').css({"background-color":"transparent"}).removeClass("animated fadeIn");
    $(".selectSection").css({"position":"static","top":"0%"});
    $(".caseDet").css({"position":"static","left":"0%"});
    $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LOGO_WHITE.png");
  }
});
}
else if($(window).width() < 768){
  $(window).scroll(function() {
  if ($(this).scrollTop() > $(".casestudyBg").height() - $(".commonHeader").height()){  
  $(".selectSection").css({"position":"static","top":"0%"});
    $(".caseDet").css({"position":"static","left":"0%"});
  }
  else {
    $(".selectSection").css({"position":"static","top":"0%"});
    $(".caseDet").css({"position":"static","left":"0%"});
  }
  });
}
});

});

})();