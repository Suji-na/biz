document.addEventListener('DOMContentLoaded', function () {
    $('.carousel').slick({
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: false,
        draggable: true,
        swipeToSlide: true,
        prevArrow: $('.custom-prev'),
        nextArrow: $('.custom-next'),
    });

    const toggleButton = document.getElementById('togglebtn');
    const toggleIcon = document.getElementById('toggleIcon');
    let isPlaying = true;

    toggleButton.addEventListener('click', function () {
        if (isPlaying) {
            $('.carousel').slick('slickPause');
            toggleIcon.src = './assets/images/top/support/play.svg';
        } else {
            $('.carousel').slick('slickPlay');
            toggleIcon.src = './assets/images/top/support/pause.svg';
        }
        isPlaying = !isPlaying;
    });
});