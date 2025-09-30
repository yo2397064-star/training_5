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

     $(`.first`).addClass(`active`);

    var initialDescription = $(`.first`).data(`description`);
    $(`.explain`).text(initialDescription);

    $(`.first, .second, .third`).on(`click`,function(){
        
    
        $(`.active`).removeClass(`active`);
        $(this).addClass(`active`);

        var description = $(this).data(`description`);
        $(`.explain`).text(description);
    });

    // 必須項目をチェックし、送信ボタンの状態を更新する関数
    function checkFormValidity() {
        let allFilled = true;
        
        // .required-fieldクラスを持つすべての要素をチェック
        $('.required-field').each(function() {
            // trim()で前後の空白を除去し、値が空でないか確認
            if ($(this).val().trim() === '' || $(this).val() === null) {
                allFilled = false; // 1つでも空の項目があればfalseにする
                return false; // ループを中断
            }
        });

        // すべての項目が埋まっていればボタンを有効化、そうでなければ無効化
        if (allFilled) {
            $('#submit-button').prop('disabled', false);
        } else {
            $('#submit-button').prop('disabled', true);
        }
    }

    // フォームの入力項目すべてに対してイベントリスナーを設定
    // input, change, keyupイベントで常にチェックを実行
    $('#reserve_form').on('input select', '.required-field', checkFormValidity);

    // ページロード時にも一度チェックを実行（ブラウザのオートフィル対応）
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