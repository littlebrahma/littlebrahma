(function(){

$( document ).ready(function() {

if($(window).width()  > 1024 || $(window).width()  < 768 ){
$(".MenuList__common").addClass("fadeInUp");
$(".MenuList__ch").addClass("fadeInUp");
}
else{
$(".MenuList__common").addClass("fadeInDown");
}

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
// $(".MenuList__common").hide();
$(".MenuList__wwa").click(function() {

var MenuList__common=$(".MenuList__common").hasClass( "fadeInDown" );

if(MenuList__common){
$(".MenuList__common").removeClass("fadeInDown");
$(".MenuList__common").addClass("fadeInUp");


$(".MenuList__ch").removeClass("fadeInDown");
$(".MenuList__ch").addClass("fadeInUp");

}
else{
    $(".MenuList__common").addClass("fadeInDown");
$(".MenuList__common").removeClass("fadeInUp");



$(".MenuList__ch").addClass("fadeInDown");
$(".MenuList__ch").removeClass("fadeInUp");


}

   $(".MenuList__common").toggle();
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
    debugger;
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
    debugger;
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








});

})();