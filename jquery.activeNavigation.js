(function( $ ) {
    $.fn.activeNavigation = function(selector) {
        var pathname = window.location.pathname
        var extension_position;
        var href;
        var hrefs = []
        $(selector).find("a").each(function(){
            // Remove href file extension
            extension_position = $(this).attr("href").lastIndexOf('.');
            href = (extension_position >= 0) ? $(this).attr("href").substr(0, extension_position) : $(this).attr("href");

            if (pathname.indexOf(href) > -1) {
                hrefs.push($(this));
            }
        })
        if (hrefs.length) {
            hrefs.sort(function(a,b){
                return b.attr("href").length - a.attr("href").length
            })
            hrefs[0].closest('li').addClass("active")
        }
    };
})(jQuery);
