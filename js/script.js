$(document).bind("mousemove", function(e){
    $(".circle").css({
       left:  e.pageX - 100,
       top:   e.pageY - 100
    });
});

$("html").click(function(e){

          if($(e.target).is('a')){
        } else $( "body" ).toggleClass( "lights" );

});



