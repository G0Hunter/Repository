;var registrationMod = (function() {
    //registration form
    var $form = $('form');
    var $mainMenuSection = $('.main-menu-section');
    var $windowLoginWrap = $('.window-login-wrap');
    var $singUpHeader = $('.sing-up-header');
    var $logInHeader = $('.log-in-header');
    var $logOutHeader = $('.log-out-header');
    var $registrationWrap = $('.registration-wrap');
    var fn = {
        deleteUser: function() {
            localStorage.removeItem("login");
            localStorage.removeItem("password");
            localStorage.removeItem("name");
            location.reload();
            alert("До свидания!");
        },
        registrUser: function() {
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
        },
        loginUser: function() {
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
        }
    };
    var functionInit = {
        setUser: function() {
            $('.reg-bt').on('click', function() {
                fn.registrUser();
            });
        },
        delUser: function() {
            $('.log-out-header').on('click', function() {
                fn.deleteUser();
            });
        },
        getUser: function() {
            $('.enter-log-button').on('click', function() {
                fn.loginUser();
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
    registrationMod.init();
});
