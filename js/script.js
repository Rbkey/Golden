$(document).ready(function () {
    $('.topbar__burger').click(function (event) {
        $('.topbar__burger,.header__topbar').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
