(function(){

$('.mobTabSection__division').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1
    });

var slickIndex=$(".slick-active").attr("data-slick-index");
if( slickIndex== 0) {
    $('.arrow-left').css({"z-index":"0","visibility":"hidden"});
    $('.arrow-right').css({"z-index":"1","visibility":"visible"});
}
else if(slickIndex == 4) {
    $('.arrow-right').css({"z-index":"0","visibility":"hidden"});
    $('.arrow-left').css({"z-index":"1","visibility":"visible"});
}
else {
    $('.arrow-right').css({"z-index":"1","visibility":"visible"});
    $('.arrow-left').css({"z-index":"1","visibility":"visible"});
}



$('.arrow-left').click(function(){
    $('.mobTabSection__division').slick('slickPrev');
 var slickLength=$(".slick-active").attr("data-slick-index");
    if(slickLength == 0) {
    $('.arrow-left').css({"z-index":"0","visibility":"hidden"});
    $('.arrow-right').css({"z-index":"1","visibility":"visible"});
}
else {
    $('.arrow-left').css({"z-index":"1","visibility":"visible"});
    $('.arrow-right').css({"z-index":"1","visibility":"visible"});
}

});

$('.arrow-right').click(function(){
    
  $('.mobTabSection__division').slick('slickNext');
     var slickLength=$(".slick-active").attr("data-slick-index");
     
    if(slickLength == 4) {
    $('.arrow-right').css({"z-index":"0","visibility":"hidden"});
    $('.arrow-left').css({"z-index":"1","visibility":"visible"});
}
else {
    $('.arrow-right').css({"z-index":"1","visibility":"visible"});
    $('.arrow-left').css({"z-index":"1","visibility":"visible"});
}

});



$(".homepageBg").on("swipe",function(){
  
     var slickLength=$(".slick-active").attr("data-slick-index");    
    if(slickLength == 4) {
    $('.arrow-left').css({"z-index":"1","visibility":"visible"});
    $('.arrow-right').css({"z-index":"0","visibility":"hidden"});

}
else if(slickLength == 0) {
   $('.arrow-left').css({"z-index":"0","visibility":"hidden"});
    $('.arrow-right').css({"z-index":"1","visibility":"visible"});
}
else {
   $('.arrow-left').css({"z-index":"1","visibility":"visible"});
    $('.arrow-right').css({"z-index":"1","visibility":"visible"});

}

});


$(".scroll-indicators li").click(function(){
    var tab=$(this).data("id");
    if ( tab == 1) {
        $('#text').show();
        $('#text1').hide();
        $('#text2').hide();
        $('#text3').hide();
        $('#text4').hide();
        background.style.backgroundImage = "none";
        $("background").addClass("animated fadeIn");
        $('#slideshow').css("background-position", "-76px -70px").addClass("animated fadeIn");
        $(".scroll-indicators li").removeClass('active');
        $(this).addClass('active');
        nextslideindex=0;
    }
    else if ( tab == 2) {
        $('#text1').show();
        $('#text').hide();
        $('#text2').hide();
        $('#text3').hide();
        $('#text4').hide();
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/3.gif')";
        $("background").addClass("animated fadeIn");
        $('#slideshow').css("background-position", "-56px -960px").addClass("animated fadeIn");
        $(".scroll-indicators li").removeClass('active');
        $(this).addClass('active');
        nextslideindex=7;
    }
    else if ( tab == 3) {
        $('#text4').show();
        $('#text1').hide();
        $('#text2').hide();
        $('#text').hide();
        $('#text3').hide();
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/2.gif')";
        $("background").addClass("animated fadeInUp");
        $('#slideshow').css("background-position", "-76px -1276px").addClass("animated fadeIn");
        $(".scroll-indicators li").removeClass('active');
        $(this).addClass('active');
        nextslideindex=15;
    }
    else if ( tab == 4) {
        $('#text2').show();
        $('#text1').hide();
        $('#text').hide();
        $('#text3').hide();
        $('#text4').hide();
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/4.gif')";
        $("background").addClass("animated fadeInUp");
        $('#slideshow').css("background-position", "-2034px -265px").addClass("animated fadeIn");
        $(".scroll-indicators li").removeClass('active');
        $(this).addClass('active');
        nextslideindex=22;
    }
    else if ( tab == 5) {
        $('#text3').show();
        $('#text1').hide();
        $('#text2').hide();
        $('#text').hide();
        $('#text4').hide();
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/5.gif')";
        $("background").addClass("animated fadeInUp");
        $('#slideshow').css("background-position", "-56px -556px").addClass("animated fadeIn");
        $(".scroll-indicators li").removeClass('active');
        $(this).addClass('active');
        nextslideindex=29;
    }
    myFunction();
});
var myimages=[
    "-76px -70px",
    "-406px -70px",
    "-736px -70px",
    "-1058px -70px",
    "-1382px -70px",
    "-1710px -50px",
    "-2032px -50px",
    "-68px -960px",
    "-398px -960px",
    "-727px -960px",
    "-1050px -960px",
    "-1379px -960px",
    "-1704px -960px",
    "-2031px -960px",
    "-76px -1276px",
    "-408px -1276px",
    "-740px -1276px",
    "-1060px -1276px",
    "-1388px -1276px",
    "-1710px -1276px",
    "-2032px -1276px",
    "-2034px -265px",
    "-1710px -265px",
    "-1377px -265px",
    "-1046px -265px",
    "-724px -265px",
    "-395px -265px",
    "-65px -265px",
    "-56px -556px",
    "-387px -556px",
    "-715px -556px",
    "-1032px -556px",
    "-1350px -556px",
    "-1679px -556px",
    "-1981px -556px"
    ];
var slideshow=document.getElementById("slideshow");
var nextslideindex=0;
var background=document.getElementById("background_image");
function myFunction() {
   console.log(nextslideindex);
    if(nextslideindex >= 7 && nextslideindex <= 13) 
    {
        $('#background_image1').show().addClass("animated fadeInUp");
        $('#background_image').hide().addClass("animated fadeInUp");
        $('#background_image2').hide().addClass("animated fadeInUp");
        $('#background_image3').hide().addClass("animated fadeInUp");
        $('#background_image4').hide().addClass("animated fadeInUp");
        $('#slideshow').addClass("animated fadeInUp");
        $(".homepageBg").css("background-color","#211042");
        $("#text4").hide();
        $("#text").hide();
        $("#text2").hide();
        $("#text3").hide();
        $("#text1").show().addClass("animated fadeInUp");
        $(".scroll-indicators li[data-id=2]").addClass('active');
        $(".scroll-indicators li[data-id=1]").removeClass('active');
        $(".scroll-indicators li[data-id=3]").removeClass('active');
        $(".scroll-indicators li[data-id=4]").removeClass('active');
        $(".scroll-indicators li[data-id=5]").removeClass('active');
        $("#slideshow").css({"height": "280px", "left": "104%", "top": "150px", "width":"214px","opacity":"1"}).addClass("animated fadeIn"); 
    }
    else if(nextslideindex >= 14 && nextslideindex <= 20)
    {
        $('#background_image4').show().addClass("animated fadeInUp");
        $('#background_image').hide().addClass("animated fadeInUp");
        $('#background_image2').hide().addClass("animated fadeInUp");
        $('#background_image3').hide().addClass("animated fadeInUp");
        $('#background_image1').hide().addClass("animated fadeInUp");
        $('#slideshow').addClass("animated fadeInUp");
        $(".homepageBg").css("background-color","#211042");
        $("#text").hide();
        $("#text1").hide();
        $("#text2").hide();
        $("#text3").hide();
        $("#text4").show().addClass("animated fadeInUp");
        $(".scroll-indicators li[data-id=3]").addClass('active');
        $(".scroll-indicators li[data-id=1]").removeClass('active');
        $(".scroll-indicators li[data-id=5]").removeClass('active');
        $(".scroll-indicators li[data-id=4]").removeClass('active');
        $(".scroll-indicators li[data-id=2]").removeClass('active');
        $("#slideshow").css({"height": "368px", "left": "112%", "top": "-54px", "width":"200px","opacity":"1"}).addClass("animated fadeIn");
    }
    else if(nextslideindex >= 21 && nextslideindex <= 27) 
    {
        $('#background_image2').show().addClass("animated fadeInUp");
        $('#background_image').hide().addClass("animated fadeInUp");
        $('#background_image1').hide().addClass("animated fadeInUp");
        $('#background_image3').hide().addClass("animated fadeInUp");
        $('#background_image4').hide().addClass("animated fadeInUp");
        $('#slideshow').addClass("animated fadeInUp");
        $(".homepageBg").css("background-color","#230F42");
        $("#text4").hide();
        $("#text1").hide();
        $("#text").hide();
        $("#text3").hide();
        $("#text2").show().addClass("animated fadeInUp");
        $('#slideshow').addClass("animated fadeInUp");
        $(".scroll-indicators li[data-id=4]").addClass('active');
        $(".scroll-indicators li[data-id=1]").removeClass('active');
        $(".scroll-indicators li[data-id=2]").removeClass('active');
        $(".scroll-indicators li[data-id=3]").removeClass('active');
        $(".scroll-indicators li[data-id=5]").removeClass('active');
        $("#slideshow").css({"height": "280px", "left": "86%", "top": "-42px", "width":"216px","opacity":"1"}).addClass("animated fadeIn");
    }
    else if(nextslideindex >= 28 && nextslideindex <= 34) 
        {
        $('#background_image3').show().addClass("animated fadeInUp");
        $('#background_image').hide().addClass("animated fadeInUp");
        $('#background_image2').hide().addClass("animated fadeInUp");
        $('#background_image1').hide().addClass("animated fadeInUp");
        $('#background_image4').hide().addClass("animated fadeInUp");
        $('#slideshow').addClass("animated fadeInUp");
        $(".homepageBg").css("background-color","#230F42");
        $("#text4").hide();
        $("#text1").hide();
        $("#text2").hide();
        $("#text").hide();
        $("#text3").show().addClass("animated fadeInUp");
        $(".scroll-indicators li[data-id=5]").addClass('active');
        $(".scroll-indicators li[data-id=1]").removeClass('active');
        $(".scroll-indicators li[data-id=3]").removeClass('active');
        $(".scroll-indicators li[data-id=2]").removeClass('active');
        $(".scroll-indicators li[data-id=4]").removeClass('active');
        $("#slideshow").css({"height": "290px", "left": "68%", "top": "-50px", "width":"296px","opacity":"1"}).addClass("animated fadeIn");
        
    }
    else if(nextslideindex >= 0 && nextslideindex <= 6) 
    {
        $('#background_image').show().addClass("animated fadeInUp");
        $('#background_image1').hide().addClass("animated fadeInUp");
        $('#background_image2').hide().addClass("animated fadeInUp");
        $('#background_image3').hide().addClass("animated fadeInUp");
        $('#background_image4').hide().addClass("animated fadeInUp");
        $(".homepageBg").css("background-color","#241141");
        $('#slideshow').addClass("animated fadeInUp");
        $("#text4").hide();
        $("#text1").hide();
        $("#text2").hide();
        $("#text3").hide();
        $("#text").show().addClass("animated fadeInUp");
        $(".scroll-indicators li[data-id=1]").addClass('active');
        $(".scroll-indicators li[data-id=2]").removeClass('active');
        $(".scroll-indicators li[data-id=3]").removeClass('active');
        $(".scroll-indicators li[data-id=4]").removeClass('active');
        $(".scroll-indicators li[data-id=5]").removeClass('active');
        $("#slideshow").css({"height": "158px", "left": "188px", "top": "132px", "width":"201px","opacity":"1"}).addClass("animated fadeIn");
    }
}
function rotateimage(e){
    var evt=document.event || e; //equalize event object
    var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta; //delta returns +120 when wheel is scrolled up, -120 when scrolled down
    nextslideindex=(delta<=-120)? nextslideindex+1 : nextslideindex-1;//move image index forward or back, depending on whether wheel is scrolled down or up
    nextslideindex=(nextslideindex<=0)? 0 : (nextslideindex>myimages.length-1)? myimages.length-1 : nextslideindex; //wrap image index around when it goes beyond lower and upper boundaries
    // nextslideindex=(nextslideindex<0)? 0 : (nextslideindex>myimages.length-1)? myimages.length-1 : nextslideindex;
//     if(nextslideindex == 0 || nextslideindex == 32) {
//         document.onmousewheel = function(){ stopWheel(); } /* IE7, IE8 */
// if(document.addEventListener){ /* Chrome, Safari, Firefox */
//     document.addEventListener('DOMMouseScroll', stopWheel, false);
// }
 
// function stopWheel(e){
//     if(!e){ e = window.event; } /* IE7, IE8, Chrome, Safari */
//     if(e.preventDefault) { e.preventDefault(); } /* Chrome, Safari, Firefox */
//     e.returnValue = false; /* IE7, IE8 */
// }
//     }
    $("#slideshow").css('background-position', myimages[nextslideindex]).removeClass("animated fadeIn");
    $(this).addClass("animated fadeIn");
    myFunction();
    console.log(nextslideindex);
    if (evt.preventDefault) //disable default wheel action of scrolling page
        evt.preventDefault();
    else
        return false;
 
}
/*var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x
if (document.attachEvent) //if IE (and Opera depending on user setting)
    document.attachEvent("on"+mousewheelevt, rotateimage);
else if (document.addEventListener) //WC3 browsers
    document.addEventListener(mousewheelevt, rotateimage, false);*/


//

var creativeStudioAnimation = {
        container: document.getElementById('background_image'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/data/creative_studio/data.json'
    };
 bodymovin.loadAnimation(creativeStudioAnimation);



var ourPortfolioAnimation = {
        container: document.getElementById('background_image'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/data/data.json'
    };
 //bodymovin.loadAnimation(ourPortfolioAnimation);


var ourServiceAnimation = {
        container: document.getElementById('background_image'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/data/data.json'
    };
 //bodymovin.loadAnimation(ourServiceAnimation);

var challangesAnimation = {
        container: document.getElementById('background_image'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/data/data.json'
    };
 //bodymovin.loadAnimation(challangesAnimation);
      

      var eshopAnimation = {
        container: document.getElementById('background_image'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/data/data.json'
    };
 //bodymovin.loadAnimation(eshopAnimation);

/***
Version    : 0.2 [Beta]
Author     : Tommy Chiu
Contact    : tommychoo8689@gmail.com
Description: A mini jquery plugin tool to detect the Scroll Up or Scroll Down to trigger anything event.
Last Updated: 17/07/2015
***/

(function($) {
    $.fn.scrolltrigger = function( options ) {

        // Default Setting
        var settings = $.extend({
            preventDefault: true,
            threshold: 20,

            lastAnimation    : 0,
            quietPeriod      : 500,
            animationTime    : 500,

            swipeMode        : false,
            swipeUp          : null,
            swipeDown        : null,
            swipeLeft        : null,
            swipeRight       : null,

            scrollUp         : null,
            scrollDown       : null
        }, options);

        return this.each( function() {

            var $this = this;
            var lastAnimation = settings.lastAnimation;
            var quietPeriod = settings.quietPeriod;
            var animationTime = settings.animationTime;
            var swipeMode = settings.swipeMode;

            if ( navigator.userAgent.match(/iPad|iPhone|iPod/g) ) {
                var threshold = 10;
            } else {
                var threshold = settings.threshold;
            }

            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

                if (swipeMode == true) {

                    var startX,
                    startY,
                    isMoving = false;

                    function onTouchEnd() {
                        $this.removeEventListener('touchmove', onTouchMove);
                        $this.removeEventListener('touchend', onTouchEnd);
                        isMoving = false;
                    }
                    function onTouchMove(e) {
                        if ( settings.preventDefault == true ) {
                            e.preventDefault();
                        }
                        if ( isMoving ) {
                            var x = e.touches[0].pageX;
                            var y = e.touches[0].pageY;
                            var dx = startX - x;
                            var dy = startY - y;
                            var dir;
                            if ( Math.abs(dx) >= threshold ) {
                                //dir = dx > 0 ? 'left' : 'right'
                                if ( dx > 0 ) {
                                    settings.swipeLeft.call($this);
                                } else {
                                    settings.swipeRight.call($this);
                                }
                            } else if ( Math.abs(dy) >= threshold ) {
                                //dir = dy > 0 ? 'down' : 'up'
                                if ( dx > 0 ) {
                                    settings.swipeDown.call($this);
                                } else {
                                    settings.swipeUp.call($this);
                                }
                            }

                            onTouchEnd.call($this);

                        }
                    }
                    function onTouchStart(e) {
                        if ( e.touches.length == 1 ) {
                            startX = e.touches[0].pageX;
                            startY = e.touches[0].pageY;
                            isMoving = true;
                            $this.addEventListener('touchmove', onTouchMove, false);
                            $this.addEventListener('touchend', onTouchEnd, false);
                        }
                    }
                    function setup() {
                        $this.addEventListener && $this.addEventListener('touchstart', onTouchStart, false);
                    }
                    function teardown() {
                        $this.removeEventListener('touchstart', onTouchStart);
                    }

                    setup();

                } else {
                    //alert('Oh Sorry, you should turn on the swipe mode.');
                }

            } else {

                function init(event, delta) {
                    deltaOfInterest = delta;
                    var timeNow = new Date().getTime();
                    if( timeNow - lastAnimation < quietPeriod + animationTime ) {
                        event.preventDefault();
                        return;
                    }

                    if ( deltaOfInterest < 0 ) {
                        // Call Back
                        if ( $.isFunction( settings.scrollUp ) ) {
                            settings.scrollUp.call($this);
                        }
                    } else {
                        // Call Back
                        if ( $.isFunction( settings.scrollDown ) ) {
                            settings.scrollDown.call($this);
                        }
                    }
                    lastAnimation = timeNow;
                }

                $(this).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
                    event.stopPropagation();
                    event.preventDefault();
                    var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
                    init(event, delta);
                });

            }

        });

    }
}(jQuery));
           


$(function() {
    $('body').scrolltrigger({
        lastAnimation   : 0,
        quietPeriod     : 100,
        animationTime   : 100,
        swipeMode       : true,
        swipeUp : function() {
           console.log('up-swipe');
        },
        swipeDown : function() {
            console.log('down-swipe');
        },
        swipeLeft : function() {
            
        },
        swipeRight : function() {
           
        },
        scrollDown : function() {
             console.log('down');
            nextslideindex--;
            if(nextslideindex<0){
                nextslideindex=0;
            }
             $("#slideshow").css('background-position', myimages[nextslideindex]).removeClass("animated fadeIn");
   // $(this).addClass("animated fadeIn");
            myFunction();

        },
        scrollUp : function() {
             console.log('up');
          nextslideindex++;
            if(nextslideindex>myimages.length-1){
                nextslideindex=myimages.length-1;
            }
             $("#slideshow").css('background-position', myimages[nextslideindex]).removeClass("animated fadeIn");
   // $(this).addClass("animated fadeIn");

            myFunction();
        }
    });
});

})();