$(function() {
    $('.website, .play, .download').on('mouseenter mouseleave', 'img', function() {
        $(this).toggle().siblings().toggle();
    });

})