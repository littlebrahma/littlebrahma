!function(){$(document).ready(function(){if($(window).width()>=768){var o={top:"140px"};$(window).scroll(function(){$(this).scrollTop()+$(".selectSection").outerHeight(!0)>=$(".commonFooter").offset().top-220?($(".selectSection").css({position:"absolute",top:"initial",bottom:"80px"}),console.log("reached")):$(this).scrollTop()>$(".portfolioBg").height()-$(".commonHeader").height()?($(".commonHeader").css({"background-color":"#fff"}).addClass("animated fadeIn"),$(".selectSection").css({position:"fixed",top:o.top,bottom:"initial"}),$(".portDetail").css({position:"relative",left:"33.3%",top:"0px"}),$(".commonMenu__icon").attr("src","/assets/img/common/LB_Menu_Color.svg"),$(".commonHeader__logo").attr("src","/assets/img/common/LB_Logo_Color.svg")):($(".commonHeader").css({"background-color":"transparent"}).removeClass("animated fadeIn"),$(".selectSection").css({position:"absolute",top:"80px",bottom:"initial"}),$(".commonMenu__icon").attr("src","/assets/img/common/MENU_WHITE.png"),$(".commonHeader__logo").attr("src","/assets/img/common/LB_Logo_White.svg"))})}else $(window).width()<768&&$(window).scroll(function(){$(this).scrollTop(),$(".portfolioBg").height(),$(".commonHeader").height(),$(".selectSection").css({position:"static",top:"0%"}),$(".portDetail").css({position:"static",left:"0%"})});$(window).resize(function(){$(window).width()>=1200?$(window).scroll(function(){$(this).scrollTop()>$(".portfolioBg").height()-$(".commonHeader").height()?($(".commonHeader").css({"background-color":"#fff"}).addClass("animated fadeIn"),$(".selectSection").css({position:"fixed",top:"140px"}),$(".portDetail").css({position:"relative",left:"33.3%",top:"0px"}),$(".commonMenu__icon").attr("src","/assets/img/common/LB_Menu_Color.svg"),$(".commonHeader__logo").attr("src","/assets/img/common/LB_Logo_Color.svg")):($(".commonHeader").css({"background-color":"transparent"}).removeClass("animated fadeIn"),$(".selectSection").css({position:"static",top:"0%"}),$(".portDetail").css({position:"static",left:"0%"}),$(".commonMenu__icon").attr("src","/assets/img/common/MENU_WHITE.png"),$(".commonHeader__logo").attr("src","/assets/img/common/LB_Logo_White.svg"))}):$(window).width()>=768&&$(window).width()<1199?$(window).scroll(function(){$(this).scrollTop()>$(".portfolioBg").height()-$(".commonHeader").height()?($(".commonHeader").css({"background-color":"#fff"}).addClass("animated fadeIn"),$(".selectSection").css({position:"fixed",top:"140px"}),$(".portDetail").css({position:"relative",left:"33.3%",top:"0px"}),$(".commonMenu__icon").attr("src","/assets/img/common/LB_Menu_Color.svg"),$(".commonHeader__logo").attr("src","/assets/img/common/LB_Logo_Color.svg")):($(".commonHeader").css({"background-color":"transparent"}).removeClass("animated fadeIn"),$(".selectSection").css({position:"static",top:"0%"}),$(".portDetail").css({position:"static",left:"0%"}),$(".commonMenu__icon").attr("src","/assets/img/common/MENU_WHITE.png"),$(".commonHeader__logo").attr("src","/assets/img/common/LB_Logo_White.svg"))}):$(window).width()<768&&$(window).scroll(function(){$(this).scrollTop(),$(".portfolioBg").height(),$(".commonHeader").height(),$(".selectSection").css({position:"static",top:"0%"}),$(".portDetail").css({position:"static",left:"0%"})})})})}();