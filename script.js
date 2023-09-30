document.addEventListener('DOMContentLoaded', function () {
    var nav = document.getElementById('main-nav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = '#222';
        } else {
            nav.style.backgroundColor = '#333';
        }
    });
});
