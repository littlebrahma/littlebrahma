!function(){$(document).ready(function(){if($(window).width()>=768){var o={top:"140px"};$(window).scroll(function(){$(this).scrollTop()+$(".selectSection").outerHeight(!0)>=$(".commonFooter").offset().top-220?$(".selectSection").css({position:"absolute",top:"initial",bottom:"80px"}):$(this).scrollTop()>$(".blogBg").height()-$(".commonHeader").height()?($(".commonHeader").css({"background-color":"#fff"}).addClass("animated fadeIn"),$(".selectSection").css({position:"fixed",top:o.top,bottom:"initial"}),$(".rightDiv").css({position:"relative",left:"33.3%",top:"0px"}),$(".commonMenu__icon").attr("src","/assets/img/common/MENU_RED.png"),$(".commonHeader__logo").attr("src","/assets/img/service/LOGO_RED.png")):($(".commonHeader").css({"background-color":"transparent"}).removeClass("animated fadeIn"),$(".selectSection").css({position:"absolute",top:"80px",bottom:"initial"}),$(".commonMenu__icon").attr("src","/assets/img/common/MENU_WHITE.png"),$(".commonHeader__logo").attr("src","/assets/img/common/LOGO_WHITE.png"))})}else $(window).width()<768&&$(window).scroll(function(){$(this).scrollTop(),$(".blogBg").height(),$(".commonHeader").height(),$(".selectSection").css({position:"static",top:"0%"}),$(".rightDiv").css({position:"static",left:"0%"})})})}();