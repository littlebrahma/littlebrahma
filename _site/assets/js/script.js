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
var background=document.getElementById("background_image");
var tab=$(this).data("id");
function myFunction() {
    var path=$("#slideshow").attr('src');
    console.log(path);
    if(nextslideindex >= 6 && nextslideindex <= 12) 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/3.gif')";
        document.getElementById("text1").style.display = 'block';
        document.getElementById("text").style.display = 'none';
        document.getElementById("text2").style.display = 'none';
        document.getElementById("text3").style.display = 'none';
        document.getElementById("text4").style.display = 'none';
        $(".scroll-indicators li[data-id=2]").addClass('active');
        $(".scroll-indicators li[data-id=1]").removeClass('active');
        $(".scroll-indicators li[data-id=3]").removeClass('active');
        $(".scroll-indicators li[data-id=4]").removeClass('active');
        $(".scroll-indicators li[data-id=5]").removeClass('active');
        slideshow.style.height= '150px';
        slideshow.style.left= '32%';
        slideshow.style.top= '30%';
        slideshow.style.width= '150px';
    }
    else if(nextslideindex >= 13 && nextslideindex <= 19)
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/4.gif')";
        document.getElementById("text1").style.display = 'none';
        document.getElementById("text").style.display = 'none';
        document.getElementById("text2").style.display = 'block';
        document.getElementById("text3").style.display = 'none';
        document.getElementById("text4").style.display = 'none';
        $(".scroll-indicators li[data-id=3]").addClass('active');
        $(".scroll-indicators li[data-id=1]").removeClass('active');
        $(".scroll-indicators li[data-id=2]").removeClass('active');
        $(".scroll-indicators li[data-id=4]").removeClass('active');
        $(".scroll-indicators li[data-id=5]").removeClass('active');
        slideshow.style.height= '188px';
        slideshow.style.left= '26%';
        slideshow.style.top= '3%';
        slideshow.style.width= '158px';
    
    }
    else if(nextslideindex >= 20 && nextslideindex <= 26) 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/5.gif')";
        document.getElementById("text1").style.display = 'none';
        document.getElementById("text").style.display = 'none';
        document.getElementById("text2").style.display = 'none';
        document.getElementById("text3").style.display = 'block';
        document.getElementById("text4").style.display = 'none';
        $(".scroll-indicators li[data-id=4]").addClass('active');
        $(".scroll-indicators li[data-id=1]").removeClass('active');
        $(".scroll-indicators li[data-id=3]").removeClass('active');
        $(".scroll-indicators li[data-id=2]").removeClass('active');
        $(".scroll-indicators li[data-id=5]").removeClass('active');
        slideshow.style.height= '188px';
        slideshow.style.left= '36%';
        slideshow.style.top= '-2%';
        slideshow.style.width= '158px';
    }
    else if(nextslideindex >= 27 && nextslideindex <= 33) 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/2.gif')";
        document.getElementById("text1").style.display = 'none';
        document.getElementById("text").style.display = 'none';
        document.getElementById("text2").style.display = 'none';
        document.getElementById("text3").style.display = 'none';
        document.getElementById("text4").style.display = 'block';
        $(".scroll-indicators li[data-id=5]").addClass('active');
        $(".scroll-indicators li[data-id=1]").removeClass('active');
        $(".scroll-indicators li[data-id=3]").removeClass('active');
        $(".scroll-indicators li[data-id=4]").removeClass('active');
        $(".scroll-indicators li[data-id=2]").removeClass('active');
        slideshow.style.height= '272px';
        slideshow.style.left= '28%';
        slideshow.style.top= '-8%';
        slideshow.style.width= '158px';
    }
    else if(nextslideindex >= 0 && nextslideindex <= 5) 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/1.gif')";
        document.getElementById("text1").style.display = 'none';
        document.getElementById("text").style.display = 'block';
        document.getElementById("text2").style.display = 'none';
        document.getElementById("text3").style.display = 'none';
        document.getElementById("text4").style.display = 'none';
        $(".scroll-indicators li[data-id=1]").addClass('active');
        $(".scroll-indicators li[data-id=2]").removeClass('active');
        $(".scroll-indicators li[data-id=3]").removeClass('active');
        $(".scroll-indicators li[data-id=4]").removeClass('active');
        $(".scroll-indicators li[data-id=5]").removeClass('active');
        slideshow.style.height= '166px';
        slideshow.style.left= '12%';
        slideshow.style.top= '24%';
        slideshow.style.width= '219px';
    }
}
function rotateimage(e){
    var evt=window.event || e; //equalize event object
    var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta; //delta returns +120 when wheel is scrolled up, -120 when scrolled down
    nextslideindex=(delta<=-120)? nextslideindex+1 : nextslideindex-1;//move image index forward or back, depending on whether wheel is scrolled down or up
    nextslideindex=(nextslideindex<0)? myimages.length-1 : (nextslideindex>myimages.length-1)? 0 : nextslideindex; //wrap image index around when it goes beyond lower and upper boundaries
    slideshow.src=myimages[nextslideindex];
    myFunction();
    console.log(nextslideindex);
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
$(".scroll-indicators li").click(function(){
    var tab=$(this).data("id");
    if ( tab == 1) {
        $('#text').show();
        $('#text1').hide();
        $('#text2').hide();
        $('#text3').hide();
        $('#text4').hide();
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/1.gif')";
        $('#slideshow').attr("src", "/assets/img/homepage/CREATIVESTUDIO/1.png");
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
        $('#slideshow').attr("src", "/assets/img/homepage/PORTFOLIO/1.png");
        $(".scroll-indicators li").removeClass('active');
        $(this).addClass('active');
        nextslideindex=6;
    }
    else if ( tab == 3) {
        $('#text2').show();
        $('#text1').hide();
        $('#text').hide();
        $('#text3').hide();
        $('#text4').hide();
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/4.gif')";
        $('#slideshow').attr("src", "/assets/img/homepage/CONTEST/7.png");
        $(".scroll-indicators li").removeClass('active');
        $(this).addClass('active');
        nextslideindex=13;
    }
    else if ( tab == 4) {
        $('#text3').show();
        $('#text1').hide();
        $('#text2').hide();
        $('#text').hide();
        $('#text4').hide();
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/5.gif')";
        $('#slideshow').attr("src", "/assets/img/homepage/E-STORE/1.png");
        $(".scroll-indicators li").removeClass('active');
        $(this).addClass('active');
        nextslideindex=20;
    }
    else if ( tab == 5) {
        $('#text4').show();
        $('#text1').hide();
        $('#text2').hide();
        $('#text').hide();
        $('#text3').hide();
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/2.gif')";
        $('#slideshow').attr("src", "/assets/img/homepage/SERVICES/1.png");
        $(".scroll-indicators li").removeClass('active');
        $(this).addClass('active');
        nextslideindex=27;
    }
    myFunction();
});


});

