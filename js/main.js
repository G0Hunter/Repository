;$(function() {
    var $windowLoginWrap = $('.window-login-wrap');
    var $registrationWrap = $('.registration-wrap');
    var $logInHeader = $('.log-in-header');
    var $singUpHeader = $('.sing-up-header');
    var $successLoadText = $('.success-load-text');
    var $contentBox = $('.content-box');
    var $searchResult = $('.search-result');
    var $searchResultError = $('.search-result-error');
    var $viewImgWrapper = $('.view-img-wrapper');
    var $likeBtn = $('.like-btn');
    var imgSrcMini = '';

    $('.img-add-btn').on('click', function() {
        $('.img-add-btn-hide').click();
        $successLoadText.hide();
    });
    $singUpHeader.on('click', function() {
        $registrationWrap.toggle();
    });
    $('.download-bt').on('click', function() {
        $('.download-wrap').toggle();
    });
    $logInHeader.on('click', function() {
        $windowLoginWrap.toggle();
    });
    $('body').mouseup(function(event) {
        if ($viewImgWrapper.has(event.target).length == 0) {
            $viewImgWrapper.hide();
        }
    });
    $('.search-bt').on('click', function() {
        $('.search-wrap').toggle();
        $('.img-prev-container img').show();
    });
    $('.search-result-close').on('click', function() {
        $searchResult.hide();
        if ($searchResultError.show()) {
            $searchResultError.hide();
        }
        $('.search-result .single-content-box').remove();
    });
    //open Full Photo
    $contentBox.on('click', '.img-prev-container img', function() {
        imgSrcMini = $(this).attr('src');
        $viewImgWrapper.find('img').attr('src', imgSrcMini);
        $viewImgWrapper.show();
        if (($(this).hasClass('liked'))) {
            $likeBtn.html('Вы оценили!');
        } else {
            $likeBtn.html('Оценить');
        }
        return imgSrcMini;
    });
    //add like class
    $likeBtn.on('click', function(event) {
        event.preventDefault();
        $('.img-prev-container img[src*="' + imgSrcMini + '"]').addClass("liked");
        $likeBtn.html('Вы оценили!');
    });
    // search photo
    $('.search-form-btn').on('click', function() {
        var $wordTag = $('.search-input').val();
        var $scrSearch = $('.single-content-box img[alt *="' + $wordTag + '"]').attr('src');
        var templateSearch = '<div class="single-content-box">' + 
        '<div class="content-box-img"><div class="img-prev-container">' + 
        '<img src="' + $scrSearch + '" alt=""></div></div></div>';
        if ($wordTag == null || $scrSearch == undefined) {
            $searchResultError.show();
        } else {
            $searchResult.append(templateSearch);
        }
        $searchResult.show();
    });
    //slow scroll
    $('.gallery-bt,.gallery-users,.myself-photo').on('click', function() {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 600);
        }
        return false;
    });
    //to my photo
    $('.myself-photo').on('click', function() {
        var $singleContentHasImg = $('.single-content-box:has(img[src^="img"])');
        if ($singleContentHasImg.length !== 0) {
            $singleContentHasImg.remove();
        }
    });
}());

