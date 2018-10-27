$(document).ready(function() {
    // preload
    $('.loading').hide();
    $('.loading').ajaxStart(function() {
        $(this).fadeIn(500);
    });
    $('.loading').ajaxStop(function() {
        $(this).fadeOut(500);
    });
    // header 고정(슬라이드)
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        var gnbHeight = $('.gnb_container').outerHeight();
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        if((st > lastScrollTop) && (lastScrollTop > 48)) {
            $('.gnb_container').css('top', - gnbHeight);
            $('.cat_topBar').css('top', '0');
        } else {
            $('.gnb_container').css('top', '0');
            $('.cat_topBar').css('top', gnbHeight);
        }
        lastScrollTop = st;
    });
    // header 메뉴 토글
    $('header button.menu').on('click', function() {
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
            $('header button.close').toggleClass('menu close');
        };
    });
    // item에 필터명 추가
    $('.works li.category:contains("웹디자인")').closest('li.item').addClass('work1');
    $('.works li.category:contains("비주얼그래픽")').closest('li.item').addClass('work2');
    $('.works li.category:contains("3D 모델링")').closest('li.item').addClass('work3');
    $('.works li.category:contains("일러스트")').closest('li.item').addClass('work4');
    $('.blog li.category:contains("BLOG")').closest('li.item').addClass('blog1');
    $('.blog li.category:contains("공지")').closest('li.item').addClass('blog2');
    $('.blog li.category:contains("LIFE")').closest('li.item').addClass('blog3');
    $('.blog li.category:contains("일상일기")').closest('li.item').addClass('blog4');
    $('.blog li.category:contains("여행일기")').closest('li.item').addClass('blog5');
    $('.blog li.category:contains("TIP")').closest('li.item').addClass('blog6');
    $('.blog li.category:contains("웹 개발")').closest('li.item').addClass('blog7');
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
    // window 창 크기 제어
    // $(window).resize(function() {
    //     var WDview = window.matchMedia("(min-width:600px)");
    //     if (WDview.matches) {
    //         $('button.gnb.close').trigger('click');
    //     }
    // }).trigger('resize');
});
