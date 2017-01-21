var addPhoto = (function() {
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
        var template = '<div class="single-content-box">'+
                       '<div class="content-box-img"><div class="img-prev-container">'+
                       '<img src="' + imgObj[keyInObj].src + '" alt="' + imgObj[keyInObj].tag + '">'+
                       '</div></div></div>';
        $('.content-box').append(template);
    }
}());
alert('К сожалению ваш браузер устарел.\n' + 
      'Обновите ваш браузер или воспользуйтесь другим браузером.\n' +
      'Вам недоступна возможность загрузки фото,но вы можете оценить фото других пользователей используя поиск.\n' + 
      'Приносим свои извинения за неудобства');
