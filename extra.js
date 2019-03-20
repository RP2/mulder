$(window).ready(function(){
    let body = $("nav").outerHeight() + $("about").outerHeight();
    let view = $(window).height();
    if (body > view){
        $("#aboutFoot").css("position", "relative")
    } else {
        $("#aboutFoot").css("position", "absolute")
    }
    let body2 = $("nav").outerHeight() + $("#contact").outerHeight() + $("#map").outerHeight();
    let view2 = $(window).height();
    if (body2 > view2){
        $("#contactFoot").css("position", "relative")
    } else {
        $("#contactFoot").css("position", "absolute")
    }
});