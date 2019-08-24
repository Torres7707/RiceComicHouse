
$(function () {
    //index
    $("ul.nav_header>li").click(function(){
        var n = $(this).index();
        $(this).find("a").addClass("header-active").parent("li").siblings().find("a").removeClass("header-active");
        $(".content>div").eq(n).addClass("content-active").siblings().removeClass("content-active");
    });

});

//footer-nav

