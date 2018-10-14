$(document).ready(function() {
    // preload
    $('.loading').hide();
    $('.loading').ajaxStart(function() {
        $(this).fadeIn(500);
    });
    $('.loading').ajaxStop(function() {
        $(this).fadeOut(500);
    });
    // header 슬라이드
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        if((st > lastScrollTop) && (lastScrollTop > 48)) {
            $('.gnb_container').css('top', '-50px');
        } else {
            $('.gnb_container').css('top', '0px');
        }
        lastScrollTop = st;
    });
    // header 메뉴 토글
    $('button.menu').on('click', function() {
        $('body').toggleClass('modal-opened');
        $('.lnb_container').toggleClass('active');
        $(this).toggleClass('menu close');
        return false;
    });
    // header 메뉴 닫기(영역 밖 선택)
    $(document).click(function(e) {
        if(e.target.className == 'active') { return false }
        if($('body').find('div').hasClass('active')) {
            $('body').toggleClass('modal-opened');
            $('.lnb_container').toggleClass('active');
            $('button.close').toggleClass('menu close');
        };
    });
    // 맨 위로 가기
    $('.scroll_top').insertBefore('footer');
    $(window).scroll(function() {
        if($(this).scrollTop() > 600) {
            $('.scroll_top').fadeIn();
        } else {
            $('.scroll_top').fadeOut();
        }
    });
    $('.scroll_top').click(function() {
        $('html, body').animate({scrollTop : 0}, 400);
        return false;
    });
});
