console.log('Hello World!');
$(function(){
    $('.scroll-trigger').on('click',function(event){
    event.preventDefault();
    var targetId = $(this).attr('data-target');

    if($(targetId).length){ 
        var headerHeight = $('header').outerHeight() || 0;
        var targetPosition = $(targetId).offset().top - headerHeight;
        $('html, body').animate({scrollTop: targetPosition}, 500,function(){
            if($('.hamburger').is(':visible')){
            $('.hamburger').removeClass('active');
            $('.header_right').slideUp();
            }
        });
    }

    });

    $(`.hamburger`).on(`click`,function(){
        $(this).toggleClass(`active`);
        $('.header_right').slideToggle();
    });







});