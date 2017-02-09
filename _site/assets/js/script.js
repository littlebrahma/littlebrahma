$( document ).ready(function() {
    var myimages=[
    "-76px -70px",
    "-406px -70px",
    "-736px -70px",
    "-1058px -70px",
    "-1382px -70px",
    "-1710px -50px",
    "-2032px -50px",
    "-2022px -960px",
    "-1694px -960px",
    "-1368px -960px",
    "-1040px -960px",
    "-1040px -960px",
    "-716px -960px",
    "-388px -960px",
    "-56px -960px",
    "-2028px -270px",
    "-1704px -270px",
    "-1370px -270px",
    "-1040px -270px",
    "-718px -270px",
    "-388px -270px",
    "-60px -270px",
    "-56px -556px",
    "-388px -556px",
    "-718px -556px",
    "-1034px -556px",
    "-1350px -556px",
    "-1682px -556px",
    "-1984px -556px",
    "-76px -1276px",
    "-408px -1276px",
    "-740px -1276px",
    "-1060px -1276px",
    "-1388px -1276px",
    "-1710px -1276px",
    "-2032px -1276px"
    ];
 
var slideshow=document.getElementById("slideshow");
var nextslideindex=0;
var background=document.getElementById("background_image");
function myFunction() {
    if(nextslideindex > 6 && nextslideindex <= 14) 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/3.gif')";
        $("#text4").hide();
        $("#text").hide();
        $("#text2").hide();
        $("#text3").hide();
        $("#text1").show().css({"opacity":"1","transition":"all 2s linear"});
        $(".scroll-indicators li[data-id=2]").addClass('active');
        $(".scroll-indicators li[data-id=1]").removeClass('active');
        $(".scroll-indicators li[data-id=3]").removeClass('active');
        $(".scroll-indicators li[data-id=4]").removeClass('active');
        $(".scroll-indicators li[data-id=5]").removeClass('active');
        $("#slideshow").css({"height": "217px", "left": "30%", "top": "32%", "width":"214px","opacity":"1","transition":"opacity 1s ease-in-out"}); 
    }
    else if(nextslideindex > 13 && nextslideindex <= 21)
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/4.gif')";
        $("#text4").hide();
        $("#text1").hide();
        $("#text").hide();
        $("#text3").hide();
        $("#text2").show().css({"opacity":"1","transition":"all 2s linear"});
        $(".scroll-indicators li[data-id=3]").addClass('active');
        $(".scroll-indicators li[data-id=1]").removeClass('active');
        $(".scroll-indicators li[data-id=2]").removeClass('active');
        $(".scroll-indicators li[data-id=4]").removeClass('active');
        $(".scroll-indicators li[data-id=5]").removeClass('active');
        $("#slideshow").css({"height": "280px", "left": "24%", "top": "-1%", "width":"216px","opacity":"1","transition":"opacity 1s ease-in-out"});
    }
    else if(nextslideindex > 20 && nextslideindex <= 28) 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/5.gif')";
        $("#text4").hide();
        $("#text1").hide();
        $("#text2").hide();
        $("#text").hide();
        $("#text3").show().css({"opacity":"1","transition":"all 2s linear"});
        $(".scroll-indicators li[data-id=4]").addClass('active');
        $(".scroll-indicators li[data-id=1]").removeClass('active');
        $(".scroll-indicators li[data-id=3]").removeClass('active');
        $(".scroll-indicators li[data-id=2]").removeClass('active');
        $(".scroll-indicators li[data-id=5]").removeClass('active');
        $("#slideshow").css({"height": "290px", "left": "28%", "top": "-10%", "width":"296px","opacity":"1","transition":"opacity 1s ease-in-out"});
    }
    else if(nextslideindex > 27 && nextslideindex <= 35) 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/2.gif')";
        $("#text").hide();
        $("#text1").hide();
        $("#text2").hide();
        $("#text3").hide();
        $("#text4").show().css({"opacity":"1","transition":"all 2s linear"});
        $(".scroll-indicators li[data-id=5]").addClass('active');
        $(".scroll-indicators li[data-id=1]").removeClass('active');
        $(".scroll-indicators li[data-id=3]").removeClass('active');
        $(".scroll-indicators li[data-id=4]").removeClass('active');
        $(".scroll-indicators li[data-id=2]").removeClass('active');
        $("#slideshow").css({"height": "368px", "left": "28%", "top": "-8%", "width":"200px","opacity":"1","transition":"opacity 1s ease-in-out"});
    }
    else if(nextslideindex >= 0 && nextslideindex <= 7) 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/1.gif')";
        $("#text4").hide();
        $("#text1").hide();
        $("#text2").hide();
        $("#text3").hide();
        $("#text").show().css({"opacity":"1","transition":"all 2s linear"});
        $(".scroll-indicators li[data-id=1]").addClass('active');
        $(".scroll-indicators li[data-id=2]").removeClass('active');
        $(".scroll-indicators li[data-id=3]").removeClass('active');
        $(".scroll-indicators li[data-id=4]").removeClass('active');
        $(".scroll-indicators li[data-id=5]").removeClass('active');
        $("#slideshow").css({"height": "158px", "left": "128px", "top": "178px", "width":"201px","opacity":"1","transition":"opacity 1s ease-in-out"});
    }
}
function rotateimage(e){
    var evt=window.event || e; //equalize event object
    var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta; //delta returns +120 when wheel is scrolled up, -120 when scrolled down
    nextslideindex=(delta<=-120)? nextslideindex+1 : nextslideindex-1;//move image index forward or back, depending on whether wheel is scrolled down or up
    nextslideindex=(nextslideindex<0)? myimages.length-1 : (nextslideindex>myimages.length-1)? 0 : nextslideindex; //wrap image index around when it goes beyond lower and upper boundaries
    $("#slideshow").css('background-position', myimages[nextslideindex]);
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


$('input[type="radio"]').click(function() {
 if($(this).is(':checked')) {
    var category= $('input:radio:checked').data("category");
    $(".blog-filter").hide().css({"opacity":"0"});

    var classArr=category.replace(/[^a-z0-9\s]/gi, '').split(" "); 
    var finalArray = classArr.filter(function(v){return v!==''});
    $("."+finalArray.join('.')).show().css({"opacity":"1","transition":"all 2s linear"});
}
});


$(".job_detail").hide();
$( ".career__link" ).click(function() {
    var job=$(this).data("id");
    $(".job").hide();
  
        $(".job_detail"+job).show();
 
});

$( ".career__img2").click(function() {
    $(".job_detail").hide();
    $(".job").show();
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
$(".tab_indicator li a").click(function(){
   var href = $(this).attr('href');
    if ( href == "#about_us" ) {
        $(".tab_indicator li a").removeClass('active');
        $(this).addClass('active');
    }
    else if ( href == "#our_mission" ) {
        $(".tab_indicator li a").removeClass('active');
        $(this).addClass('active');
    }
    else if ( href == "#valuable_clients" ) {
        $(".tab_indicator li a").removeClass('active');
        $(this).addClass('active');
    }
});
 $(window).scroll(function(){
    debugger;
        if( $(this).scrollTop() > 100){
            $(".our-mission").show();
        }
    });
});