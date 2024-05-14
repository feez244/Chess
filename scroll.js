$('.scroll').on('click', function () {
    let block = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(block).offset().top
    }, {
        duration: 370,
        easing: "linear"
    });
    return false;
});