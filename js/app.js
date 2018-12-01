$(function (){
    $(window).on("load resize",function(){
        $(".fill-screen").css("height",window.innerHeight);
    });
//scrollyspy
$('body').scrollspy({
target: '.navbar',
offset:150
});
    $('.progress-bar').each(function() {
        var bar_value = $(this).attr('aria-valuenow') + '%';
        $(this).animate({ width: bar_value }, { duration: 2000, easing: 'easeOutCirc' });
    });
})