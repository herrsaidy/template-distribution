$(document).foundation()

//Slider
var slider = new MasterSlider();
// adds Arrows navigation control to the slider.
slider.control('arrows');
slider.control('timebar' , {insertTo:'#masterslider'});
slider.control('bullets');

slider.setup('masterslider' , {
    width           : 1400,
    height          : 600,
    minHeight       : 0,
    space           : 0,
    start           : 1,
    grabCursor      : true,
    swipe           : true,
    mouse           : true,
    keyboard        : false,
    layout          : "fullwidth",
    wheel           : false,
    autoplay        : false,
    loop            : true,
    shuffle         : false,
    preload         : 0,
    heightLimit     : true,
    autoHeight      : false,
    smoothHeight    : true,
    endPause        : false,
    overPause       : true,
    fillMode        : "fill",
    centerControls  : false,
    startOnAppear   : false,
    layersMode      : "center",
    autofillTarget  : "",
    hideLayers      : false,
    fullscreenMargin: 0,
    speed           : 10,
    dir             : "h",
    parallaxMode    : 'swipe',
    view            : "basic"
});

//Carousel
$(document).ready(function(){
    $('.clients').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
