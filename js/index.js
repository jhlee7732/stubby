$(document).ready(function() {
    // preload
    $('#loading').hide();
    $('#loading').ajaxStart(function() {
        $(this).fadeIn(500);
    });
    $('#loading').ajaxStop(function() {
        $(this).fadeOut(500);
    });
    // gnb 메뉴 토글
    $('button.gnb').on('click', function() {
        $('body').toggleClass('modal-opened');
        $('.lnb_container').toggleClass('active');
        $(this).toggleClass('menu close');
        return false;
    });
    // gnb 메뉴 닫기(영역 밖 선택)
    $(document).click(function(e) {
        if(e.target.className == 'active') { return false }
        if($('body').find('div').hasClass('active')) {
            $('body').toggleClass('modal-opened');
            $('.lnb_container').toggleClass('active');
            $('button.gnb').toggleClass('menu close');
        };
    });
});
