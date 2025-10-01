$(function(){

    $('.scroll-trigger').on('click', function(event){
        
        var href = $(this).attr('href');
        var targetId = $(this).attr('data-target');
        
        if (!href) return;
        
        var currentPath = window.location.pathname;

        
        if (
            href.startsWith('#') || 
            (href.includes('index.php') && (currentPath.endsWith('index.php') || currentPath.endsWith('/')))
        ) {

            event.preventDefault(); 
            
            var finalTargetId = href.startsWith('#') ? href : (targetId ? targetId : '#');

            if($(finalTargetId).length) { 
                var headerHeight = $('header').outerHeight() || 0;
                var targetPosition = $(finalTargetId).offset().top - headerHeight; 
                
                $('html, body').animate({scrollTop: targetPosition}, 500, function(){
                    if($('.hamburger').is(':visible')){
                        $('.hamburger').removeClass('active');
                        $('.header_right').slideUp();
                    }
                });
            }
        } else {
        }
    });



    $(`.hamburger`).on(`click`,function(){
        $(this).toggleClass(`active`);
        $('.header_right').slideToggle();
    });

     $(`.first`).addClass(`active`);

    var initialDescription = $(`.first`).data(`description`);
    $(`.explain`).text(initialDescription);

    $(`.first, .second, .third`).on(`click`,function(){
        
    
        $(`.active`).removeClass(`active`);
        $(this).addClass(`active`);

        var description = $(this).data(`description`);
        $(`.explain`).text(description);
    });

    
    function checkFormValidity() {
        let allFilled = true;
        
        
        $('.required-field').each(function() {
            
            if ($(this).val().trim() === '' || $(this).val() === null) {
                allFilled = false; 
                return false; 
            }
        });

        if (allFilled) {
            $('#submit-button').prop('disabled', false);
        } else {
            $('#submit-button').prop('disabled', true);
        }
    }

    $('#reserve_form').on('input select', '.required-field', checkFormValidity);

    checkFormValidity();

    $("#reserve_form").on("submit",function(e){
        var tel = $("#tel").val().trim();
        if(tel !== ""){
            if(!/^[0-9]+$/.test(tel)){
                alert("電話番号は半角数字のみで入力してください。");
                e.preventDefault();
                return;
            }
            if(!(tel.length === 10 || tel.length === 11)){
                alert("電話番号は10桁または11桁で入力してください。");
                e.preventDefault();
                return;}
            }
    });


});