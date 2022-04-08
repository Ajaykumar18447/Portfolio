$(document).ready(function(){
    if(this.scroll > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");

    }
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots',
});
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop:0});
});


// typing animation script
var typed = new Typed(".typing", {
    strings : ["Full stack Java Developer","Frontend Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});
var typed = new Typed(".typingabout", {
    strings : ["Ajay Kumar Saw","Full stack Java Developer","Frontend Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNAv = document.querySelector('.mobile-nav');

hamberger.addEventListener('click',function(){
    mobileNAv.classList.add('open');
});

times.addEventListener('click',function(){
    mobileNAv.classList.remove('open');
});


});