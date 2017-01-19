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
    var background=document.getElementById("backgound_image");
    var path=$("#slideshow").attr('src');
    if(path == "/assets/img/homepage/PORTFOLIO/1.png" || path == "/assets/img/homepage/PORTFOLIO/2.png" || path == "/assets/img/homepage/PORTFOLIO/3.png" || path == "/assets/img/homepage/PORTFOLIO/4.png" || path == "/assets/img/homepage/PORTFOLIO/5.png" || path == "/assets/img/homepage/PORTFOLIO/6.png" || path == "/assets/img/homepage/PORTFOLIO/7.png") 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/2.gif')";
        document.getElementById("text1").style.display = 'block';
        document.getElementById("text").style.display = 'none';
        document.getElementById("text2").style.display = 'none';
        document.getElementById("text3").style.display = 'none';
        document.getElementById("text4").style.display = 'none';
        slideshow.style.left="48%";
        slideshow.style.top="12%";
    
    }
    else if(path == "/assets/img/homepage/CONTEST/1.png" || path == "/assets/img/homepage/CONTEST/2.png" || path == "/assets/img/homepage/CONTEST/3.png" || path == "/assets/img/homepage/CONTEST/4.png" || path == "/assets/img/homepage/CONTEST/5.png" || path == "/assets/img/homepage/CONTEST/6.png" || path == "/assets/img/homepage/CONTEST/7.png") 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/3.gif')";
        document.getElementById("text1").style.display = 'none';
        document.getElementById("text").style.display = 'none';
        document.getElementById("text2").style.display = 'block';
        document.getElementById("text3").style.display = 'none';
        document.getElementById("text4").style.display = 'none';
        slideshow.style.left="45%";
        slideshow.style.top="-10%";
    
    }
    else if(path == "/assets/img/homepage/E-STORE/1.png" || path == "/assets/img/homepage/E-STORE/2.png" || path == "/assets/img/homepage/E-STORE/3.png" || path == "/assets/img/homepage/E-STORE/4.png" || path == "/assets/img/homepage/E-STORE/5.png" || path == "/assets/img/homepage/E-STORE/6.png" || path == "/assets/img/homepage/E-STORE/7.png") 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/4.gif')";
        document.getElementById("text1").style.display = 'none';
        document.getElementById("text").style.display = 'none';
        document.getElementById("text2").style.display = 'none';
        document.getElementById("text3").style.display = 'block';
        document.getElementById("text4").style.display = 'none';
        slideshow.style.left="48%";
        slideshow.style.top="-8%";
    }
    else if(path == "/assets/img/homepage/SERVICES/1.png" || path == "/assets/img/homepage/SERVICES/2.png" || path == "/assets/img/homepage/SERVICES/3.png" || path == "/assets/img/homepage/SERVICES/4.png" || path == "/assets/img/homepage/SERVICES/5.png" || path == "/assets/img/homepage/SERVICES/6.png" || path == "/assets/img/homepage/SERVICES/7.png") 
    {
        background.style.backgroundImage = "url('/assets/img/homepage/ANIMATIONS/5.gif')";
        document.getElementById("text1").style.display = 'none';
        document.getElementById("text").style.display = 'none';
        document.getElementById("text2").style.display = 'none';
        document.getElementById("text3").style.display = 'none';
        document.getElementById("text4").style.display = 'block';
        slideshow.style.left="46%";
        slideshow.style.top="-20%";
    }
    else if(path == "/assets/img/CREATIVESTUDIO/1.png" || path == "/assets/img/CREATIVESTUDIO/2.png" || path == "/assets/img/CREATIVESTUDIO/3.png" || path == "/assets/img/CREATIVESTUDIO/4.png" || path == "/assets/img/CREATIVESTUDIO/5.png" || path == "/assets/img/CREATIVESTUDIO/6.png" || path == "/assets/img/homepage/CREATIVESTUDIO/7.png") 
    {
        background.style.backgroundImage = "url('/assets/img/ANIMATIONS/1.gif')";
        document.getElementById("text1").style.display = 'none';
        document.getElementById("text").style.display = 'block';
        document.getElementById("text2").style.display = 'none';
        document.getElementById("text3").style.display = 'none';
        document.getElementById("text4").style.display = 'none';
        slideshow.style.left="22%";
        slideshow.style.top="19%";
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

 var no_of_total_blog_item = 0;
    $(".blog-filter").each(function() {
        no_of_total_blog_item++;
    });
    $("#bootcamp-filter-total-no").text(no_of_total_blog_item);
function blog_filter_function() {
        $(".no_of_matched_case_item").remove();
        var no_of_matched_item = 0;
        if ($("#branding").prop('checked') == true) {
            $(".blog-filter").each(function() {
                if ($(this).children().children().first().text().trim() == "BRANDING PRINCIPLES") {
                    $(this).css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".blog-filter").each(function() {
                if ($(this).children().children().first().text().trim() == "BRANDING PRINCIPLES") {
                    $(this).css("display", "none");
                }
            });
        }

        if ($("#web").prop('checked') == true) {
            $(".blog-filter").each(function() {
                if ($(this).children().children().first().text().trim() == "WEB & MOBILE APP DESIGN PRINCIPLES") {
                    $(this).css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".blog-filter").each(function() {
                if ($(this).children().children().first().text().trim() == "WEB & MOBILE APP DESIGN PRINCIPLES") {
                    $(this).css("display", "none");
                }
            });
        }

        if ($("#illustration").prop('checked') == true) {
            $(".blog-filter").each(function() {
                if ($(this).children().children().first().text().trim() == "ILLUSTRATION & ART PRINCIPLES") {
                    $(this).css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".blog-filter").each(function() {
                if ($(this).children().children().first().text().trim() == "ILLUSTRATION & ART PRINCIPLES") {
                    $(this).css("display", "none");
                }
            });
        }

        if ($("#animation").prop('checked') == true) {
            $(".blog-filter").each(function() {
                if ($(this).children().children().first().text().trim() == "ANIMATION PRINCIPLES") {
                    $(this).css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".blog-filter").each(function() {
                if ($(this).children().children().first().text().trim() == "ANIMATION PRINCIPLES") {
                    $(this).css("display", "none");
                }
            });
        }
        if ($("#packaging").prop('checked') == true) {
            $(".blog-filter").each(function() {
                if ($(this).children().children().first().text().trim() == "PACKAGING & LABEL PRINCIPLES") {
                    $(this).css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".blog-filter").each(function() {
                if ($(this).children().children().first().text().trim() == "PACKAGING & LABEL PRINCIPLES") {
                    $(this).css("display", "none");
                }
            });
        }

        if ($("#magazine").prop('checked') == true) {
            $(".blog-filter").each(function() {
                if ($(this).children().children().first().text().trim() == "MAGAZINE & BOOK PRINCIPLES") {
                    $(this).css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".blog-filter").each(function() {
                if ($(this).children().children().first().text().trim() == "MAGAZINE & BOOK PRINCIPLES") {
                    $(this).css("display", "none");
                }
            });
        }


        $("#bootcamp-filter-total-no").text(no_of_matched_item + "/" + no_of_total_blog_item);
        if (no_of_matched_item == 0)
            $(".hw-upskilling-details").append('<div class="gotham-rounded-light no_of_matched_case_item text-center" style="color:#ee2b7b;margin-top:40px;margin-bottom:40px"><p>sorry, no match found</p></div>');
    }

    $("#bootcamp-mobility-checkbox,#bootcamp-client-checkbox,#bootcamp-dataops-checkbox,#bootcamp-devops-checkbox,#bootcamp-datascie-checkbox,#bootcamp-ui-ux-checkbox").click(function() {
        bootcamp_filter_function();
    });



});
