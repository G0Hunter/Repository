;var uploadingPhoto = (function() {
    var $imgPrew = $('.img-prew');
    var $contentBox = $('.content-box');
    var $successLoadText = $('.success-load-text');
    var $form = $('form');
    var imgSrc = '';
    var fn = {
        addPhoto: function() {
            var imgObj = {
                img1: {
                    src: 'img/img1.jpg',
                    tag: 'хаски собака щенки'
                },
                img2: {
                    src: 'img/img2.jpg',
                    tag: 'Рыбки немо мультик'
                },
                img3: {
                    src: 'img/img3.jpg',
                    tag: 'девушка фото весна'
                },
                img4: {
                    src: 'img/img4.jpg',
                    tag: 'зима снег снеговик осьминог друзья'
                },
                img5: {
                    src: 'img/img5.jpg',
                    tag: 'ребенок поле '
                },
                img6: {
                    src: 'img/img6.jpeg',
                    tag: 'Майкл Джексон звезда очки'
                }
            };
            for (var keyInObj in imgObj) {
                var anotherUserTemp = '<div class="single-content-box">' +
                 '<div class="content-box-img"><div class="img-prev-container">' + 
                 '<img src="' + imgObj[keyInObj].src + '" alt="' + imgObj[keyInObj].tag + '">' +
                  '</div></div></div>';
                $contentBox.append(anotherUserTemp);
            }
        },
        showOnPage: function() {
            $imgPrew.hide();
            var $tagText = $('.tags-in').val();
            var template = '<div class="single-content-box"><div class="content-box-img">' + 
            '<div class="img-prev-container"><img src="' + imgSrc + '" alt="' + $tagText + '">' + 
            '</div></div></div>';
            $contentBox.append(template);
            $successLoadText.html('Ваше фото успешно загружено').show();
            $form[2].reset();
        },
        uploadPhoto: function() {
            var preview = document.getElementById('download-img');
            var file = document.querySelector('input[type=file]').files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function() {
                imgSrc = preview.src = reader.result;
            }
            $imgPrew.show();
        }
    };
    var functionInit = {
        showOnPageOnloaded: function() {
            $(function() {
                fn.addPhoto();
            });
        },
        showOnPageGet: function() {
            $('.img-add-btn-hide').on('change', function() {
                fn.uploadPhoto();
            });
        },
        addPhotoInt: function() {
            $('.gallery-users').on('click', function() {
                if ($('.single-content-box:has(img[src^="img"])').length == 0) {
                    fn.addPhoto();
                }
            });
        },
        uploadPhotoGet: function() {
            $('.save-img-bt').on('click', function() {
                fn.showOnPage();
                  return false;
            });
        }
    };
    return {
        init: function() {
            for (var prop in functionInit) {
                functionInit[prop]();
            }
        }
    }
}());
$(function() {
    uploadingPhoto.init();
});
