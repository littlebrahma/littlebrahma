(function(){
$( document ).ready(function() {
    if ($(window).width() >= 768) {
    var selectCategory= {
      top:'150px'
    }
    $(window).scroll(function() {
         
      if($(this).scrollTop()+$(".selectSection").outerHeight(true) >= $('.commonFooter').offset().top - 245){
        $('.selectSection').css({'position':'absolute','top':'initial','bottom': '45px' });
      }
else if ($(this).scrollTop() >  $(".commonHeader").height()){  
    $(".selectSection").css({"position":"fixed","top":selectCategory.top,'bottom':'initial'});
    $(".career_right").css({"position":"relative","left":"33.3%","top":"0px"});
  }

});
}
})
})();
