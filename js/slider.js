    var $caruselClass = $('.carousel');
    //click on right button
    $(document).on('click', '.carousel-button-right', function() {
        right_carusel();
        return false;
    });
    //click  on left button
    $(document).on('click', '.carousel-button-left', function() {
        left_carusel();
        return false;
    });
    function left_carusel() {
        var block_width = $caruselClass.find('.carousel-block').outerWidth();
        $caruselClass.find('.carousel-items .carousel-block').eq(-1).clone().prependTo($caruselClass.find('.carousel-items'));
        $caruselClass.find('.carousel-items').css({
            'left': '-' + block_width + 'px'
        });
        $caruselClass.find('.carousel-items .carousel-block').eq(-1).remove();
        $caruselClass.find('.carousel-items').animate({
            left: "0px"
        }, 0);
    }
    function right_carusel(carusel) {
        var block_width = $caruselClass.find('.carousel-block').outerWidth();
        $caruselClass.find('.carousel-items').animate({
            left: '-' + block_width + 'px'
        }, 0, function() {
            $caruselClass.find('.carousel-items .carousel-block').eq(0).clone().appendTo($caruselClass.find('.carousel-items'));
            $caruselClass.find('.carousel-items .carousel-block').eq(0).remove();
            $caruselClass.find('.carousel-items').css({
                'left': '0px'
            });
        });
    }
    // auto 
    $(function() {
        auto_right('.carousel:first');
    })
    function auto_right(carusel) {
        setInterval(function() {
            if (!(($caruselClass).is('.hover'))) {
                right_carusel($caruselClass);
            }
        }, 4000)
    }
    // Stop when mouse over slide
    $(document).on('mouseenter', '.carousel', function() {
        $(this).addClass('hover');
    })
    $(document).on('mouseleave', '.carousel', function() {
        $(this).removeClass('hover');
    });