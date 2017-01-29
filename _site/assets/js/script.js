$( document ).ready(function() {
var myimages=[
    "/assets/img/homepage/CREATIVESTUDIO/2.png",
    "/assets/img/homepage/CREATIVESTUDIO/3.png",
    "/assets/img/homepage/CREATIVESTUDIO/4.png",
    "/assets/img/homepage/CREATIVESTUDIO/5.png",
    "/assets/img/homepage/CREATIVESTUDIO/6.png",
    "/assets/img/homepage/CREATIVESTUDIO/7.png",
    "/assets/img/homepage/PORTFOLIO/1.png",
    "/assets/img/homepage/PORTFOLIO/2.png",
    "/assets/img/homepage/PORTFOLIO/3.png",
    "/assets/img/homepage/PORTFOLIO/4.png",
    "/assets/img/homepage/PORTFOLIO/5.png",
    "/assets/img/homepage/PORTFOLIO/6.png",
    "/assets/img/homepage/PORTFOLIO/7.png",
    "/assets/img/homepage/CONTEST/7.png",
    "/assets/img/homepage/CONTEST/6.png",
    "/assets/img/homepage/CONTEST/5.png",
    "/assets/img/homepage/CONTEST/4.png",
    "/assets/img/homepage/CONTEST/3.png",
    "/assets/img/homepage/CONTEST/2.png",
    "/assets/img/homepage/CONTEST/1.png",
    "/assets/img/homepage/E-STORE/1.png",
    "/assets/img/homepage/E-STORE/2.png",
    "/assets/img/homepage/E-STORE/3.png",
    "/assets/img/homepage/E-STORE/4.png",
    "/assets/img/homepage/E-STORE/5.png",
    "/assets/img/homepage/E-STORE/6.png",
    "/assets/img/homepage/E-STORE/7.png",
    "/assets/img/homepage/SERVICES/1.png",
    "/assets/img/homepage/SERVICES/2.png",
    "/assets/img/homepage/SERVICES/3.png",
    "/assets/img/homepage/SERVICES/4.png",
    "/assets/img/homepage/SERVICES/5.png",
    "/assets/img/homepage/SERVICES/6.png",
    "/assets/img/homepage/SERVICES/7.png"
];
 
var slideshow=document.getElementById("slideshow");
var nextslideindex=0;
function myFunction() {
    var background=document.getElementById("background_image");
    var path=$("#slideshow").attr('src');
    console.log(path);
    if(path == "/assets/img/homepage/PORTFOLIO/1.png" || path == "/assets/img/homepage/PORTFOLIO/2.png" || path == "/assets/img/homepage/PORTFOLIO/3.png" || path == "/assets/img/homepage/PORTFOLIO/4.png" || path == "/assets/img/homepage/PORTFOLIO/5.png" || path == "/assets/img/homepage/PORTFOLIO/6.png" || path == "/assets/img/homepage/PORTFOLIO/7.png") 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/3.gif')";
        document.getElementById("text1").style.display = 'block';
        document.getElementById("text").style.display = 'none';
        document.getElementById("text2").style.display = 'none';
        document.getElementById("text3").style.display = 'none';
        document.getElementById("text4").style.display = 'none';
    }
    else if(path == "/assets/img/homepage/CONTEST/1.png" || path == "/assets/img/homepage/CONTEST/2.png" || path == "/assets/img/homepage/CONTEST/3.png" || path == "/assets/img/homepage/CONTEST/4.png" || path == "/assets/img/homepage/CONTEST/5.png" || path == "/assets/img/homepage/CONTEST/6.png" || path == "/assets/img/homepage/CONTEST/7.png") 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/4.gif')";
        document.getElementById("text1").style.display = 'none';
        document.getElementById("text").style.display = 'none';
        document.getElementById("text2").style.display = 'block';
        document.getElementById("text3").style.display = 'none';
        document.getElementById("text4").style.display = 'none';
    
    }
    else if(path == "/assets/img/homepage/E-STORE/1.png" || path == "/assets/img/homepage/E-STORE/2.png" || path == "/assets/img/homepage/E-STORE/3.png" || path == "/assets/img/homepage/E-STORE/4.png" || path == "/assets/img/homepage/E-STORE/5.png" || path == "/assets/img/homepage/E-STORE/6.png" || path == "/assets/img/homepage/E-STORE/7.png") 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/5.gif')";
        document.getElementById("text1").style.display = 'none';
        document.getElementById("text").style.display = 'none';
        document.getElementById("text2").style.display = 'none';
        document.getElementById("text3").style.display = 'block';
        document.getElementById("text4").style.display = 'none';
    }
    else if(path == "/assets/img/homepage/SERVICES/1.png" || path == "/assets/img/homepage/SERVICES/2.png" || path == "/assets/img/homepage/SERVICES/3.png" || path == "/assets/img/homepage/SERVICES/4.png" || path == "/assets/img/homepage/SERVICES/5.png" || path == "/assets/img/homepage/SERVICES/6.png" || path == "/assets/img/homepage/SERVICES/7.png") 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/2.gif')";
        document.getElementById("text1").style.display = 'none';
        document.getElementById("text").style.display = 'none';
        document.getElementById("text2").style.display = 'none';
        document.getElementById("text3").style.display = 'none';
        document.getElementById("text4").style.display = 'block';
    }
    else if(path == "/assets/img/homepage/CREATIVESTUDIO/1.png" || path == "/assets/img/homepage/CREATIVESTUDIO/2.png" || path == "/assets/img/homepage/CREATIVESTUDIO/3.png" || path == "/assets/img/homepage/CREATIVESTUDIO/4.png" || path == "/assets/img/homepage/CREATIVESTUDIO/5.png" || path == "/assets/img/homepage/CREATIVESTUDIO/6.png" || path == "/assets/img/homepage/CREATIVESTUDIO/7.png") 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/1.gif')";
        document.getElementById("text1").style.display = 'none';
        document.getElementById("text").style.display = 'block';
        document.getElementById("text2").style.display = 'none';
        document.getElementById("text3").style.display = 'none';
        document.getElementById("text4").style.display = 'none';
    }
}
function rotateimage(e){
    var evt=window.event || e; //equalize event object
    var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta; //delta returns +120 when wheel is scrolled up, -120 when scrolled down
    nextslideindex=(delta<=-120)? nextslideindex+1 : nextslideindex-1;//move image index forward or back, depending on whether wheel is scrolled down or up
    nextslideindex=(nextslideindex<0)? myimages.length-1 : (nextslideindex>myimages.length-1)? 0 : nextslideindex; //wrap image index around when it goes beyond lower and upper boundaries
    slideshow.src=myimages[nextslideindex];
    myFunction();
    if (evt.preventDefault) //disable default wheel action of scrolling page
        evt.preventDefault();
    else
        return false;
 
}
var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x
 
if (window.attachEvent) //if IE (and Opera depending on user setting)
    window.attachEvent("on"+mousewheelevt, rotateimage);
else if (window.addEventListener) //WC3 browsers
    window.addEventListener(mousewheelevt, rotateimage, false);


$(".MenuContent").hide();
$( ".commonMenu__icon" ).click(function() {
    $(this).hide();
    $(".MenuContent").show();
});
$( ".MenuContent__close").click(function() {
    $(".MenuContent").hide();
    $(".commonMenu__icon").show();
});


$('input[type=radio]').click(function () {
var radio=$(".selectInput input[type='radio']:checked").val();
var radioDetail=$(".blogDetail__title").text();
var radioDetail1=$(".blogDetail__title1").text();
var radioDetail2=$(".blogDetail__title2").text();
var radioDetail3=$(".blogDetail__title3").text();
var radioDetail4=$(".blogDetail__title4").text();
var radioDetail5=$(".blogDetail__title5").text();
if(radio == radioDetail) {
    $(".blog-filter1").show();
}
else {
    $(".blog-filter1").hide();
}
if(radio == radioDetail1) {
    $(".blog-filter2").show();
}
else {
    $(".blog-filter2").hide();
}
if(radio == radioDetail2) {
    $(".blog-filter3").show();
}
else {
    $(".blog-filter3").hide();
}
if(radio == radioDetail3) {
    $(".blog-filter4").show();
}
else {
    $(".blog-filter4").hide();
}
if(radio == radioDetail4) {
    $(".blog-filter5").show();
}
else {
    $(".blog-filter5").hide();
}
if(radio == radioDetail5) {
    $(".blog-filter6").show();
}
else {
    $(".blog-filter6").hide();
}
});

$('.mobTabSection__division').slick({
        autoPlay:true,
        dots: true,
        vertical: true,
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: 400,
        slidesToScroll: 1
});

});

