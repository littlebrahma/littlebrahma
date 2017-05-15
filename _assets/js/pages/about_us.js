(function(){

if($(window).width()  > 1024){
  console.log($(window).width());
var background=[
    "#1A1746",
    "#e83463", 
    "#ececec"           
    ];
var nextslideindex=0;
function myFunction() {
    if(nextslideindex == 0) 
    {
        $('.about-us-height').show().addClass("animated fadeInUp");
        $('.our-mission').hide().addClass("animated fadeInUp");
        $('.valuable-clients').hide().addClass("animated fadeInUp");
        $("#about_us-Bg").css("background-color", "#1A1746");
        $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LOGO_WHITE.png");
        $(".about-indicators li a[data-id=1]").addClass('active');
        $(".about-indicators li a[data-id=2]").removeClass('active');
        $(".about-indicators li a[data-id=3]").removeClass('active');
        $(".homepageFooter").css("color", "#fff");
    }
    else if(nextslideindex == 1)
    {
        $('.our-mission').show().addClass("animated fadeInUp");
        $('.about-us-height').hide().addClass("animated fadeInUp");
        $('.valuable-clients').hide().addClass("animated fadeInUp");
        $("#about_us-Bg").css("background-color", "#e83463");
        $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LOGO_WHITE.png");
        $(".about-indicators li a[data-id=2]").addClass('active');
        $(".about-indicators li a[data-id=1]").removeClass('active');
        $(".about-indicators li a[data-id=3]").removeClass('active');
        $(".homepageFooter").css("color", "#fff");
    }
    else if(nextslideindex == 2) 
    {
        $('.valuable-clients').show().addClass("animated fadeInUp");
        $('.our-mission').hide().addClass("animated fadeInUp");
        $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_RED.png");
        $('.commonHeader__logo').attr("src", "/assets/img/service/LOGO_RED.png");
        $('.about-us-height').hide().addClass("animated fadeInUp");
        $("#about_us-Bg").css("background-color", "#ececec");
        $(".about-indicators li a[data-id=3]").addClass('active');
        $(".about-indicators li a[data-id=1]").removeClass('active');
        $(".about-indicators li a[data-id=2]").removeClass('active');
        $(".homepageFooter").css("color", "#333");
    }
}


function rotateimage(e){
    var evt=document.event || e; //equalize event object
    var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta; //delta returns +120 when wheel is scrolled up, -120 when scrolled down
    nextslideindex=(delta<=-120)? nextslideindex+1 : nextslideindex-1;//move image index forward or back, depending on whether wheel is scrolled down or up

    nextslideindex=(nextslideindex<=0)? 0 : (nextslideindex > background.length-1)? background.length-1 : nextslideindex; //wrap image index around when it goes beyond lower and upper boundaries
     
    $("#about_us-Bg").css('background-color',background[nextslideindex]);
    $(this).addClass("animated fadeIn");
    myFunction();
        if (evt.preventDefault) //disable default wheel action of scrolling page
        evt.preventDefault();
    else
        return false;
 
}
var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel"

if (window.attachEvent)
  window.attachEvent("on"+mousewheelevt, rotateimage)
else if (window.addEventListener)
 window.addEventListener(mousewheelevt, rotateimage, false)


$(".about-indicators li a").click(function(){
    var tab=$(this).data("id");
    if ( tab == 1) {
        $(".about-indicators li a").removeClass('active');
        $(this).addClass('active');
        $('.about-us-height').show();
        $('.our-mission').hide();
        $('.valuable-clients').hide();
        $("#about_us-Bg").css("background-color", "#1A1746");
        $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LOGO_WHITE.png");
        $(".homepageFooter").css("color", "#fff");
    }
    else if ( tab == 2) {
       $(".about-indicators li a").removeClass('active');
        $(this).addClass('active');
        $('.our-mission').show();
        $('.about-us-height').hide();
        $('.valuable-clients').hide();
        $("#about_us-Bg").css("background-color", "#e83463");
        $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LOGO_WHITE.png");
        $(".homepageFooter").css("color", "#fff");
    }
    else if ( tab == 3) {
        $(".about-indicators li a").removeClass('active');
        $(this).addClass('active');
        $('.valuable-clients').show();
        $('.our-mission').hide();
        $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_RED.png");
        $('.commonHeader__logo').attr("src", "/assets/img/service/LOGO_RED.png");
        $('.about-us-height').hide();
        $("#about_us-Bg").css("background-color", "#ececec");
        $(".homepageFooter").css("color", "#333");
    }
});
}
else{
$('#about_us').remove();

}
$(window).scroll(function() {
    var scroll = $(this).scrollTop();
    var os = $('#valuable_clients').offset().top;
    var ht = $('#valuable_clients').height();
    if(scroll > os - $(".commonHeader").height()){
        $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_RED.png");
        $('.commonHeader__logo').attr("src", "/assets/img/service/LOGO_RED.png");
    }
    else {
        $('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LOGO_WHITE.png");
    }

});

})();