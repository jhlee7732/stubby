$(document).ready(function() {
    $('.stu_nav_container').smint({
        'scrollSpeed' : 500
    });
});

(function(){
    $.fn.smint = function( options ) {
        var settings = $.extend({
            'scrollSpeed' : 500,
            'mySelector' : 'section'
        }, options);

        // adding a class to users div
        $(this).addClass('smint');

        //Set the variables needed
        var optionLocs = new Array(),
            lastScrollTop = 0,
            menuHeight = $(".smint").height(),
            smint = $('.smint'),
            smintA = $('.smint a'),
            myOffset = smint.height();

        if ( settings.scrollSpeed ) {
                var scrollSpeed = settings.scrollSpeed
            }

        if ( settings.mySelector ) {
                var mySelector = settings.mySelector
        };

        return smintA.each( function(index) {
            var id = $(this).attr('href').split('#')[1];
            if (!$(this).hasClass("extLink")) {
                $(this).attr('id', id);
            }

            //Fill the menu
            optionLocs.push(Array(
                $(mySelector+".stu_"+id).position().top-menuHeight,
                $(mySelector+".stu_"+id).height()+$(mySelector+".stu_"+id).position().top, id)
            );

            ///////////////////////////////////

            // get initial top offset for the menu
            var stickyTop = smint.offset().top;

            // check position and make sticky if needed
            var stickyMenu = function(direction){

                // current distance top
                var scrollTop = $(window).scrollTop()+myOffset;


                // Check if the position is inside then change the menu
                if(optionLocs[index][0] <= scrollTop && scrollTop <= optionLocs[index][1]){
                    if(direction == "up"){
                        $("#"+id).addClass("active");
                        $("#"+optionLocs[index][1]).removeClass("active");
                    } else if(index <= 0) {
                    $("#"+id).addClass("active");
                    $("#"+optionLocs[index][1]).removeClass("active");
                    } else if(index > 0) {
                        $("#"+id).addClass("active");
                        $("#"+optionLocs[index-1][2]).removeClass("active");
                    } else if(direction == undefined){
                        $("#"+id).addClass("active");
                    }
                    $.each(optionLocs, function(i){
                        if(id != optionLocs[i][2]){
                            $("#"+optionLocs[i][2]).removeClass("active");
                        }
                    });
                }
            };

            // run functions
            stickyMenu();

            // run function every time you scroll
            $(window).scroll(function() {
                //Get the direction of scroll
                var st = $(this).scrollTop()+myOffset;
                if (st > lastScrollTop) {
                    direction = "down";
                } else if (st < lastScrollTop ){
                    direction = "up";
                }
                lastScrollTop = st;
                stickyMenu(direction);

                // Check if at bottom of page, if so, add class to last <a> as sometimes the last div
                // isnt long enough to scroll to the top of the page and trigger the active state.

                if($(window).scrollTop() + $(window).height() == $(document).height()) {
                    smintA.removeClass('active')
                    $(".smint a:not('.extLink'):last").addClass('active')

                } else {
                    smintA.last().removeClass('active')
                }
            });

            ///////////////////////////////////////

            $(this).on('click', function(e){
                // gets the height of the users div. This is used for off-setting the scroll so the menu doesnt overlap any content in the div they jst scrolled to
                var myOffset = smint.height();

                // stops hrefs making the page jump when clicked
                e.preventDefault();

                // get the hash of the button you just clicked
                var hash = $(this).attr('href').split('#')[1];



                var goTo =  $(mySelector+'.stu_'+ hash).offset().top-myOffset;

                // Scroll the page to the desired position!
                $("html, body").stop().animate({ scrollTop: goTo }, scrollSpeed);

                // if the link has the '.extLink' class it will be ignored
                // Courtesy of mcpacosy ‏(@mcpacosy)

                if ($(this).hasClass("extLink"))
                {
                    return false;
                }

            });


        });

    };

    $.fn.smint.defaults = { 'scrollSpeed': 500, 'mySelector': 'section'};
})(jQuery);
