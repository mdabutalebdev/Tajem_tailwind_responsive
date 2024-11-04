// slider
$('.main_slider').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots:true,
    
   });   

//    mixit up 

var containerEl = document.querySelector('.portfolio');

var mixer = mixitup(containerEl);

//  Sticky Header  
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
        
    if(scrolling > 600){
            $('.navbar').addClass('sticky_header');
    }
        else {
             $('.navbar').removeClass('sticky_header');
    }
    });  


//==== Back-to-top button
 $(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});



// Venobox plugins
new VenoBox({
    selector: '.my-video-links',
});

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});