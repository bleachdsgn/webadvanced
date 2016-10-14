$("body").css("background","blue");

for (i = 0; i < 1000; i++) {
    $("body").append("<div class='snowflake'></div>");
}

$(".snowflake").each(function(){
    
    
    
})

var opacity = 0;

$(".box").each(function() {
    opacity += .001;
    $(this).css("opacity" , opacity );
    console.log("found box" + opacity);
});

var rotation = 0;

$(".crystal").each(function() {
    var newrotation = "rotate(" + rotation + "deg)";
    $(this).css("transform" , newrotation);
    rotation += 180/$(".crystal").length;
})

$(window).resize(function() {
    
    
});

$(window).scroll(function() {
    
    
});

