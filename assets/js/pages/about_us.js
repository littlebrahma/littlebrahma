!function(){var t={container:document.getElementById("about_us-img"),renderer:"svg",loop:!0,autoplay:!0,path:"/assets/data/about_us_1/data.json"};bodymovin.loadAnimation(t);var a={container:document.getElementById("our_mission-img"),renderer:"svg",loop:!0,autoplay:!0,path:"/assets/data/about_us_2/data.json"};bodymovin.loadAnimation(a),$($(".valuable-clients-right__list")[0]).addClass("active"),$(".valuable-clients__quote").text(testimonials[0].quote),$(".valuable-clients__author").text(testimonials[0].author),$(".valuable-clients__client").text(testimonials[0].title),$(".valuable-clients-right__list").on("click",function(t){var a=$(this).attr("data-id");$(".valuable-clients__quote").text(testimonials[a].quote),$(".valuable-clients__author").text(testimonials[a].author),$(".valuable-clients__title").text(testimonials[a].title),$(".valuable-clients-right__list").removeClass("active"),$(this).addClass("active")}),$(window).width()>1024&&$(document).ready(function(){$("#fullpage").fullpage({fixedElements:".about-indicators",anchors:["about_us","our_mission","valuable_clients"],menu:"#myMenu",onLeave:function(t,a,e){$(this);2==t&&"down"==e?($(".commonMenu__icon").attr("src","/assets/img/common/LB_Menu_Color.svg"),$(".commonHeader__logo").attr("src","/assets/img/common/LB_Logo_Color.svg")):3==t&&"up"==e&&($(".commonMenu__icon").attr("src","/assets/img/common/MENU_WHITE.png"),$(".commonHeader__logo").attr("src","/assets/img/common/LB_Logo_White.svg"))}})})}();