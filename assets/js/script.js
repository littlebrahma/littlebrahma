$( document ).ready(function() {



$(".MenuContent").css("visibility","hidden");
$( ".commonMenu__icon" ).click(function() {
    
    $(this).hide();
    $(".MenuContent").addClass("fadeInRight");
    $(".MenuContent").removeClass("fadeOutRight");
    $(".MenuContent").css({"opacity":"1","visibility":"visible"});
    $(".scroll-indicators").css("opacity","0");
    $(".about-indicators").css("opacity","0");
    $(".arrow-right").css("opacity","0");
    $(".arrow-left").css("opacity","0");
});         
$( ".MenuContent__close").click(function() {
    $(".commonMenu__icon").show();
    $(".MenuContent").addClass("fadeOutRight");
    $(".MenuContent").removeClass("fadeInRight");
    $(".MenuContent").css({"opacity":"1","visibility":"visible"});
   $(".MenuList__common").hide();
   $(".scroll-indicators").css("opacity","1");
   $(".about-indicators").css("opacity","1");
   $(".arrow-right").css("opacity","1");
   $(".arrow-left").css("opacity","1");
});
$(".MenuList__common").hide();
$(".MenuList__wwa").click(function() {
    $(".MenuList__ch").toggleClass("fadeInDown fadeInUp");
   $(".MenuList__common").toggle().toggleClass("fadeInDown fadeInUp");
   $(".arrow").toggleClass("MenuList__arrowDown MenuList__arrowDown1");
});

$("#r-option1").prop("checked", true);
if($("#r-option1").prop('checked') == true){
   var category= $('input:radio:checked').data("category");
    $(".blog-filter").hide();
    var classArr=category.replace(/[^a-z0-9\s]/gi, ' ').split(" "); 
    var finalArray = classArr.filter(function(v){return v!==''});
    $("."+finalArray.join('.')).show();
}
$('input[type="radio"]').click(function() {
 if($(this).is(':checked')) {
    var category= $('input:radio:checked').data("category");
    $(".blog-filter").hide();

    var classArr=category.replace(/[^a-z0-9\s]/gi, ' ').split(" "); 
    var finalArray = classArr.filter(function(v){return v!==''});
    $("."+finalArray.join('.')).show();
}
});


$(".job_detail").hide();
$(".career__link").click(function() {
    var job=$(this).data("id");
    $(".job").hide();
  
        $(".job_detail"+job).show();
 
});

$( ".career__img2").click(function() {
    $(".job_detail").hide();
    var job=$(".job").length;
     if($('input[type="radio"]').is(':checked')) {
    var category= $('input:radio:checked').data("category");
    $(".blog-filter").hide();

    var classArr=category.replace(/[^a-z0-9\s]/gi, ' ').split(" "); 
    var finalArray = classArr.filter(function(v){return v!==''});
    $("."+finalArray.join('.')).show();
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
        nextslideindex=15;
    }
    else if ( tab == 4) {
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
        nextslideindex=22;
    }
    else if ( tab == 5) {
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
        nextslideindex=29;
    }
    myFunction();
});


$('.valuable-clients-right').hide();
$("#company1").show();
var length=$(".valuable-clients-left__list").length;
for(var i=1;i<=length;i++){
    $("#abt-img"+i).click(function(){
    var id=$(this).data("id");
    for(var j=1;j<=length;j++){
    var id1=$("#company"+j).data("id");
    if(id == id1) {
            $('.valuable-clients-right').hide();
            $("#company"+j).show();

        
    }
}
    });
}

$("#company9").show();
var length1=$(".valuable-clients-right__list").length;
for(var i=9;i<=length1;i++){
    $("#about-img"+i).click(function(){
    var id2=$(this).data("id");
    for(var j=9;j<=length1;j++){
    var id3=$("#company"+j).data("id");
    if(id2 == id3) {
            $('.valuable-clients-right').hide();
            $("#company"+j).show();

        
    }
}
    });
}


$('.solution__circle').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: false
    });

$('.mobTabSection__division').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1
    });


// var $carousel = $('.mobTabSection__division');

//     // console.log( $(window).width() + '>' + commonBreakpoint );

//     if ( $(window).width()  >= 1024) { 

//         // console.log('unslick');

//         if($carousel.hasClass('slick-initialized')) {
//             $carousel.unslick();
//         }

//     } else {

//         // console.log('slick');

//         if(!$carousel.hasClass('slick-initialized')) {

//             $carousel.slick({
//                 dots: false,
//                 arrows: true,
//                 infinite: false,
//                 speed: 100,
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             });
//         }

//     }
// $(window).resize(function() {
//     var $carousel = $('.mobTabSection__division');

//     // console.log( $(window).width() + '>' + commonBreakpoint );

//     if ( $(window).width()  >= 1024) { 

//         // console.log('unslick');

//         if($carousel.hasClass('slick-initialized')) {
//             $carousel.unslick();
//         }

//     } else {

//         // console.log('slick');

//         if(!$carousel.hasClass('slick-initialized')) {

//             $carousel.slick({
//                 dots: false,
//                 arrows: false,
//                 infinite: false,
//                 speed: 100,
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             });
//         }

//     }
//     });
if($(".slick-active").attr("data-slick-index") == 0) {
    $('.arrow-left').css("z-index","0");
}
if($(".slick-active").attr("data-slick-index") == 4) {
    $('.arrow-right').css("z-index","0");
}
$('.arrow-left').click(function(){
    $('.mobTabSection__division').slick('slickPrev');
 var slickLength=$(".slick-active").attr("data-slick-index");
     for(var i=0;i<=slickLength;i++){
    if(i == 0) {
    $('.arrow-left').css("z-index","0");
    $('.arrow-right').css("z-index","1");
}
else {
    $('.arrow-left').css("z-index","1");
    $('.arrow-right').css("z-index","1");
}
}
});

$('.arrow-right').click(function(){
    
  $('.mobTabSection__division').slick('slickNext');
     var slickLength=$(".slick-active").attr("data-slick-index");
     for(var i=0;i<=slickLength;i++){
    if(i == 4) {
    $('.arrow-right').css("z-index","0");
    $('.arrow-left').css("z-index","1");
}
else {
    $('.arrow-right').css("z-index","1");
    $('.arrow-left').css("z-index","1");
}
}
});

});