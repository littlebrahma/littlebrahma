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
       // background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/1.gif')";
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



function validEmail(email) { // see:
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}
// get all data in form and return object
function getFormData() {
  var elements = document.getElementById("gform").elements; // all form elements
  var fields = Object.keys(elements).map(function(k) {
    if(elements[k].name !== undefined) {
      return elements[k].name;
    // special case for Edge's html collection
    }else if(elements[k].length > 0){
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function(k){
    data[k] = elements[k].value;
    var str = ""; // declare empty string outside of loop to allow
                  // it to be appended to for each item in the loop
    if(elements[k].type === "checkbox"){ // special case for Edge's html collection
      str = str + elements[k].checked + ", "; // take the string and append 
                                              // the current checked value to 
                                              // the end of it, along with 
                                              // a comma and a space
      data[k] = str.slice(0, -2); // remove the last comma and space 
                                  // from the  string to make the output 
                                  // prettier in the spreadsheet
    }else if(elements[k].length){
      for(var i = 0; i < elements[k].length; i++){
        if(elements[k].item(i).checked){
          str = str + elements[k].item(i).value + ", "; // same as above
          data[k] = str.slice(0, -2);
        }
      }
    }
  });
  console.log(data);
  return data;
}


    
    
function validEmail(email) { // see:
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}
// get all data in form and return object
function getFormData() {
  var elements = document.getElementById("gform").elements; // all form elements
  var fields = Object.keys(elements).map(function(k) {
    if(elements[k].name !== undefined) {
      return elements[k].name;
    // special case for Edge's html collection
    }else if(elements[k].length > 0){
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function(k){
    data[k] = elements[k].value;
    var str = ""; // declare empty string outside of loop to allow
                  // it to be appended to for each item in the loop
    if(elements[k].type === "checkbox"){ // special case for Edge's html collection
      str = str + elements[k].checked + ", "; // take the string and append 
                                              // the current checked value to 
                                              // the end of it, along with 
                                              // a comma and a space
      data[k] = str.slice(0, -2); // remove the last comma and space 
                                  // from the  string to make the output 
                                  // prettier in the spreadsheet
    }else if(elements[k].length){
      for(var i = 0; i < elements[k].length; i++){
        if(elements[k].item(i).checked){
          str = str + elements[k].item(i).value + ", "; // same as above
          data[k] = str.slice(0, -2);
        }
      }
    }
  });
  console.log(data);
  return data;
}


$("#gform").on('submit', function (event) {
   //ajax call here


  event.preventDefault();           // we are submitting via xhr below
 

  var data = getFormData();         // get the values submitted in the form
  // if( !validEmail(data.email) ) {   // if email is not valid show error
  //   document.getElementById('email-invalid').style.display = 'block';
  //   return false;
  // } else {
    var url = "https://script.google.com/macros/s/AKfycby9T9ugAparYnDKkwPN3QxpPhzEPdTGcmWXTpqEU0LqXlavl1St/exec";  //
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        console.log( xhr.status, xhr.statusText )
        console.log(xhr.responseText);
        //document.getElementById('gform').style.display = 'none'; // hide form
        document.getElementById('thankyou_message').style.display = 'block';
        return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);

  // }
});




});