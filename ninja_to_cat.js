$(document).ready(function() {
    
    $("img").click(function() {
        var Img = $(this).attr("src");

        $(this).attr("src", $(this).attr("data-alt-src"));
        $(this).attr("data-alt-src", Img);
    })

})