

(function ($) {

    AOS.init({ disable: 'mobile' });


///fix img size///
    $(window).on('  resize load ', function (e) {

        $maxHeight = 0;

        $(".info_block").each(function () {

            if ($maxHeight < $(this).outerHeight()) {
                $maxHeight = $(this).outerHeight();
            }

        });

        $(".info_block").each(function () {

            $(this).css('height', $maxHeight + 'px');

        });


    });



    $(window).on('   load ', function (e) {
        $('#toggle').on('click touch', function () {
            $('.menu').slideToggle();
        });

//  hide menu///
        $(".menu").on("click", function (event) {

            event.preventDefault();

            var id = $(this).attr('href'),

                top = $(id).offset().top;

            $('body,html').animate({scrollTop: top}, 1000);

        });
    });



})(jQuery);

///// sticky header////


window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


