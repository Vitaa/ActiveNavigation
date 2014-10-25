(function( $ ) {
    $.fn.activeNavigation = function(selector) {
        var pathname = window.location.pathname
        var hrefs = []
        $(selector).find("a").each(function(){
            if (pathname.indexOf($(this).attr("href")) > -1) 
                hrefs.push($(this))
        })
        if (hrefs.length) {
            hrefs.sort(function(a,b){
                return b.attr("href").length - a.attr("href").length
            })
            hrefs[0].closest('li').addClass("active")
        }
    };
})(jQuery);