jQuery(document).ready(function($) {

    $('#myCarousel').carousel({
        interval: 5000
    });

    $('#myCarousel2').carousel({
        interval : 5000
    });

        //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
            var id_selector = $(this).attr("id");
            try {
                var id = /-(\d+)$/.exec(id_selector)[1];
            //console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
    $('[id^=carousel2-selector-]').click(function () {
            var id_selector = $(this).attr("id");
            try {
                var id = /-(\d+)$/.exec(id_selector)[1];
            //console.log(id_selector, id);
            jQuery('#myCarousel2').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
});