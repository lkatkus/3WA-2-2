$("#aboutBtn").click(function(){
    console.log("About");
    $('html, body').animate({
    scrollTop: $("#about").offset().top
    }, 1000);
});

$("#otherBtn").click(function(){
    console.log("Other");
    $('html, body').animate({
    scrollTop: $("#other").offset().top
    }, 1000);
});

$("#burgersBtn").click(function(){
    console.log("Burgers");
    $('html, body').animate({
    scrollTop: $("#burgers").offset().top
    }, 1000);
});

$("#contactBtn").click(function(){
    console.log("Contact");
    $('html, body').animate({
    scrollTop: $("#contact").offset().top
    }, 1000);
});
