jQuery(document).ready(function($) {
    var brush = new SvgAnimation({
        "elem": "#brush",
        "increaseBy": 1
    });
    brush.animate();
    var tablet = new SvgAnimation({
        "elem": "#tablet",
        "increaseBy": 1
    });
    tablet.animate();
    var monitor = new SvgAnimation({
        "elem": "#monitor",
        "increaseBy": 1
    });
    monitor.animate();

    $('.masonry').lightGallery({
        selector: 'a',
        zoom: false
    });

    $(window).scroll(function() {
        scrollView($('.content__block-item--about .content__title'), 1000);
        scrollView($('.content__block-item--skills .content__title'), 1000);
        scrollView($('.content__block-item--project .content__title'), 1000);
        scrollView($('.content__block-item--contact .content__title'), 1000);
        scrollView($('.content__avatar'), 500);
        scrollView($('.content__owl'), 1000);
        scrollView($('.content__squirrel'), 100);
        scrollView($('.footer__cat'), 100)
    });
    function scrollView(element, time) {
        var bottom_of_object = $(element).offset().top + $(element).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object && !$(element).hasClass('showed')) {
            if (element.selector == '.content__squirrel') {
                $(element).animate({
                    'opacity': '1',
                    'margin-left': '10%'
                }, time)
            } else if (element.selector == '.footer__cat') {
                $(element).animate({
                    'opacity': '1',
                    'right': '10%'
                }, time)
            } else {
                $(element).animate({
                    'opacity': '1'
                }, time)
            }
            $(element).addClass('showed')
        }
    }
})
