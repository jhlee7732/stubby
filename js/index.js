$(document).ready(function() {
    // preload
    $('.loading').hide();
    $('.loading').ajaxStart(function() {
        $(this).fadeIn(500);
    });
    $('.loading').ajaxStop(function() {
        $(this).fadeOut(500);
    });
    // header & category_group 고정(슬라이드)
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        var gnbHeight = $('.gnb_container').height();
        var bannerHeight = $('.main_visual').outerHeight(true);
        var catHeight = $('.category_group').height();
        var fixHeight = (bannerHeight + catHeight);
        if(st >= (fixHeight + 30)) {
            $('.category_group').addClass('fixedTop');
        } else if(st < (fixHeight - 30)) {
            $('.category_group').removeClass('fixedTop');
        }
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        if((st > lastScrollTop) && (lastScrollTop > 48)) {
            $('.gnb_container').css('top', - gnbHeight);
            $('.category_group').css('top', '0');
        } else {
            $('.gnb_container').css('top', '0');
            $('.category_group').css('top', gnbHeight);
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
    // item에 필터명 추가
    $('.works li.category:contains("웹디자인")').closest('li.item').addClass('cat1');
    $('.works li.category:contains("비주얼그래픽")').closest('li.item').addClass('cat2');
    $('.works li.category:contains("3D 모델링")').closest('li.item').addClass('cat3');
    $('.works li.category:contains("일러스트")').closest('li.item').addClass('cat4');
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
