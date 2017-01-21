var PhotoBookApp = (function() {
    var $mainMenuSection = $('.main-menu-section');
    var $imgPrew = $('.img-prew');
    var $windowLoginWrap = $('.window-login-wrap');
    var $registrationWrap = $('.registration-wrap');
    var $logOutHeader = $('.log-out-header');
    var $logInHeader = $('.log-in-header');
    var $singUpHeader = $('.sing-up-header');
    var $successLoadText = $('.success-load-text');
    var $contentBox = $('.content-box');
    var $caruselClass = $('.carousel');
    var $form = $('form');
    var $searchResult = $('.search-result');
    var $searchResultError = $('.search-result-error');
    var $viewImgWrapper = $('.view-img-wrapper');
    var $likeBtn = $('.like-btn');
    var imgSrc = '';
    var imgSrcMini = '';
    //view on page
    $('.save-img-bt').on('click', function() {
        event.preventDefault();
        $imgPrew.hide();
        var $tagText = $('.tags-in').val();
        var template = '<div class="single-content-box"><div class="content-box-img">'+
                       '<div class="img-prev-container"><img src="' + imgSrc + '" alt="' + $tagText + '">'+
                       '</div></div></div>';
        $contentBox.append(template);
        $successLoadText.html('Ваше фото успешно загружено').show();
        $form[2].reset();
    });
    $('.img-add-btn').on('click', function() {
        $('.img-add-btn-hide').click();
        $successLoadText.hide();
    });
    //show/hide  form
    $singUpHeader.on('click', function() {
        $registrationWrap.toggle();
    });
    $('.download-bt').on('click', function() {
        $('.download-wrap').toggle();
    });
    $logInHeader.on('click', function() {
        $windowLoginWrap.toggle();
    });
    //show photo
    $contentBox.on('click', '.img-prev-container img', function() {
        imgSrcMini = $(this).attr('src');
        $viewImgWrapper.find('img').attr('src', imgSrcMini);
        $viewImgWrapper.show();
        if (($(this).hasClass('liked')) ) {
            $likeBtn.html('Вы оценили!');
        } else {
            $likeBtn.html('Оценить');
        }
        return imgSrcMini;
    });
    $likeBtn.on('click', function(event) {
        event.preventDefault();
        $('.img-prev-container img[src*="' + imgSrcMini + '"]').addClass("liked");
        $likeBtn.html('Вы оценили!');
    });
    $('.search-bt').on('click', function() {
        $('.search-wrap').toggle();
        $('.img-prev-container img').show();
    });
    $('body').mouseup(function(event) {
        if ($viewImgWrapper.has(event.target).length === 0) {
            $viewImgWrapper.hide();
        }
    });
    //logIn user
    $('.enter-log-button').on('click', function() {
        event.preventDefault();
        var gettingLogin = localStorage.getItem('login');
        var gettingName = localStorage.getItem('name');
        var gettingPassword = localStorage.getItem('password');
        var $userLogin = $('#login-enter').val();
        var $userPassword = $('#password-enter').val();
        if ($userPassword == gettingPassword && $userLogin == gettingLogin) {
            $mainMenuSection.show();
            $windowLoginWrap.hide();
            $singUpHeader.hide();
            $logInHeader.hide();
            $logOutHeader.show();
            alert('Здравствуйте ' + gettingName + '! Вы успешно вошли в фотоальбом!Нажмите что бы продолжить');
        } else {
            alert('Неправильно введены имя и пароль!');
            $form[0].reset();
        }
    });
    //registration form
    $('.reg-bt').on('click', function() {
        event.preventDefault();
        var $loginDate = $('#login').val();
        var $passwordDate = $('#password').val();
        var passRegexp = /[a-z0-9._%+-]{6,}/;
        var $nameDate = $('#name').val();
        localStorage.setItem('login', $loginDate);
        localStorage.setItem('password', $passwordDate);
        localStorage.setItem('name', $nameDate);
        if ($loginDate == '' || $passwordDate == '') {
            alert('Заполните поля со звездочкой');
        } else if (!(passRegexp.test($passwordDate))) {
            alert('Пароль не менее 6 символов!');
        } else {
            alert('Вы успешно зарегестрированы!');
            $registrationWrap.hide();
            $form[1].reset();
        }
    });
    $logOutHeader.on('click', function() {
        localStorage.removeItem("login");
        localStorage.removeItem("password");
        localStorage.removeItem("name");
        location.reload();
        alert("До свидания!");
    });
    // search photo
    $('.search-form-btn').on('click', function() {
        var $wordTag = $('.search-input').val();
        var $scrSearch = $('.single-content-box img[alt *="' + $wordTag + '"]').attr('src');
        var templateSearch = '<div class="single-content-box"><div class="content-box-img"><div class="img-prev-container"><img src="' + $scrSearch + '" alt=""></div></div></div>';
        if ($wordTag == null || $scrSearch == undefined) {
            $searchResultError.show();
        } else {
            $searchResult.append(templateSearch);
        }
        $searchResult.show();
    });
    $('.search-result-close').on('click', function() {
        $searchResult.hide();
        if ($searchResultError.show()) {
            $searchResultError.hide();
        }
        $('.search-result .single-content-box').remove();
    });
    //slider
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
            if (!$($caruselClass).is('.hover')) {
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
//Upload photo
    $('.img-add-btn-hide').on('change', function() {
        var preview = document.getElementById('download-img');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            imgSrc = preview.src = reader.result;
        }
        $imgPrew.show();
    });
}());
$(function() {
    PhotoBookApp;
});
