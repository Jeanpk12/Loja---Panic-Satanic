document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.header-icons #header-menu');
    var navList = document.querySelector('.navlist');

    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('bx-x');
           navList.classList.toggle('open');
    });
});
