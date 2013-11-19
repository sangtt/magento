;(function($) {
$(document).ready(function(){
    $('li.level-top').hover(function() {
        $(this).addClass('over');
    }, function() {
        $(this).removeClass('over');
    });

        //"Top" button
        var scroll_timer;
        var displayed = false;
        var $message = $('#footer #message');
        var $window = $(window);
        var top = $(document.body).children(0).position().top;

        $window.scroll(function () {
            window.clearTimeout(scroll_timer);
            scroll_timer = window.setTimeout(function () {
            if($window.scrollTop() <= top)
            {
                displayed = false;
                $message.fadeOut(500);
            }
            else if(displayed == false)
            {
                displayed = true;
                $message.stop(true, true).fadeIn(500).click(function () { $message.fadeOut(500); });
            }
            }, 400);
        });

        $('#top-link').click(function(e) {
                $('html, body').animate({scrollTop:0}, 'slow');
                return false;
        });
    $('.top-link-cart').parent().addClass('top-link-cart-li');
});//end ready
})(window.jQuery);
