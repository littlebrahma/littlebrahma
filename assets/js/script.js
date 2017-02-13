$( document ).ready(function() {


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

    var classArr=category.replace(/[^a-z0-9\s]/gi, ' ').split(" "); 
    var finalArray = classArr.filter(function(v){return v!==''});
    $("."+finalArray.join('.')).show().css({"opacity":"1","transition":"all 2s linear"});
}
});

$('#fullpage').fullpage({
        scrollBar: true
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
        $('#slideshow').css("background-position", "-76px -70px");
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
        $('#slideshow').css("background-position", "-56px -960px");
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
        $('#slideshow').css("background-position", "-60px -270px");
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
        $('#slideshow').css("background-position", "-56px -556px");
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
        $('#slideshow').css("background-position", "-76px -1276px");
        $(".scroll-indicators li").removeClass('active');
        $(this).addClass('active');
        nextslideindex=29;
    }
    myFunction();
});
$(".about-indicators li").click(function(){
    var tab=$(this).data("id");
    if ( tab == 1) {
        $(".about-indicators li").removeClass('active');
        $(this).addClass('active');
        nextslideindex=0;
    }
    else if ( tab == 2) {
       $(".about-indicators li").removeClass('active');
        $(this).addClass('active');
        nextslideindex=1;
    }
    else if ( tab == 3) {
        $(".about-indicators li").removeClass('active');
        $(this).addClass('active');
        nextslideindex=2;
    }
    else if ( tab == 4) {
        $(".about-indicators li").removeClass('active');
        $(this).addClass('active');
        nextslideindex=3;
    }
    scroll();
});

$('.valuable-clients-right').hide();
$("#abt-img1").show();
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

// $('#company').show();
//     $('#company1').hide();
//     $('#company2').hide();
//     $('#company3').hide();
//     $('#company4').hide();
//     $('#company5').hide();
//     $('#company6').hide();
//     $('#company7').hide();
// $("#abt-img").click(function(){
//     $('#company').show();
//     $('#company1').hide();
//     $('#company2').hide();
//     $('#company3').hide();
//     $('#company4').hide();
//     $('#company5').hide();
//     $('#company6').hide();
//     $('#company7').hide();
// });
// $("#abt-img1").click(function(){
//     $('#company1').show();
//     $('#company').hide();
//     $('#company2').hide();
//     $('#company3').hide();
//     $('#company4').hide();
//     $('#company5').hide();
//     $('#company6').hide();
//     $('#company7').hide();
// });
// $("#abt-img2").click(function(){
//     $('#company2').show();
//     $('#company1').hide();
//     $('#company').hide();
//     $('#company3').hide();
//     $('#company4').hide();
//     $('#company5').hide();
//     $('#company6').hide();
//     $('#company7').hide();
// });

// $("#abt-img3").click(function(){
//     $('#company3').show();
//     $('#company1').hide();
//     $('#company2').hide();
//     $('#company').hide();
//     $('#company4').hide();
//     $('#company5').hide();
//     $('#company6').hide();
//     $('#company7').hide();
// });
// $("#abt-img4").click(function(){
//     $('#company4').show();
//     $('#company1').hide();
//     $('#company2').hide();
//     $('#company3').hide();
//     $('#company').hide();
//     $('#company5').hide();
//     $('#company6').hide();
//     $('#company7').hide();
// });
// $("#abt-img5").click(function(){
//     $('#company5').show();
//     $('#company1').hide();
//     $('#company2').hide();
//     $('#company3').hide();
//     $('#company4').hide();
//     $('#company').hide();
//     $('#company6').hide();
//     $('#company7').hide();
// });
// $("#abt-img6").click(function(){
//     $('#company6').show();
//     $('#company1').hide();
//     $('#company2').hide();
//     $('#company3').hide();
//     $('#company4').hide();
//     $('#company5').hide();
//     $('#company').hide();
//     $('#company7').hide();
// });
// $("#abt-img7").click(function(){
//     $('#company7').show();
//     $('#company1').hide();
//     $('#company2').hide();
//     $('#company3').hide();
//     $('#company4').hide();
//     $('#company5').hide();
//     $('#company6').hide();
//     $('#company').hide();
// });
});