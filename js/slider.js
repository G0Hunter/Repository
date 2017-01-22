;var slider = (function() {
    var $caruselClass = $('.carousel');
    var fnCarusel = {
        leftCarusel: function() {
            var block_width = $caruselClass.find('.carousel-block').outerWidth();
            $caruselClass.find('.carousel-items .carousel-block').eq(-1).clone().prependTo($caruselClass.find('.carousel-items'));
            $caruselClass.find('.carousel-items').css({
                'left': '-' + block_width + 'px'
            });
            $caruselClass.find('.carousel-items .carousel-block').eq(-1).remove();
            $caruselClass.find('.carousel-items').animate({
                left: "0px"
            }, 0);
        },
        rightCarusel: function() {
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
    };
    var fnCaruselInit = {
        // auto 
        autoRight: function() {
            setInterval(function() {
                if (!(($caruselClass).is('.hover'))) {
                    fnCarusel.rightCarusel($caruselClass);
                }
            }, 4000)
        },
        //click on right button
        flipRight: function() {
            $(document).on('click', '.carousel-button-right', function() {
                fnCarusel.rightCarusel();
                return false;
            });
        },
        //click  on left button
        flipLeft: function() {
            $(document).on('click', '.carousel-button-left', function() {
                fnCarusel.leftCarusel();
                return false;
            });
        },
        // Stop when mouse over slide
        addHover: function() {
            $(document).on('mouseenter', '.carousel', function() {
                $(this).addClass('hover');
            })
        },
        removeHover: function() {
            $(document).on('mouseleave', '.carousel', function() {
                $(this).removeClass('hover');
            });
        }
    };
    return {
        init: function() {
            for (var prop in fnCaruselInit) {
                fnCaruselInit[prop]();
            }
        }
    }
}());
$(function() {
    slider.init();
});
