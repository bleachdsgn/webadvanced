var time = new Date();

var day = time.getDay();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();

if (hours <= 7 || hours >= 19) {
	
	$(".closed").show();
	$("#follower2").hide();
	$(".open").hide();

} else {

	$(".closed").hide();
	$("#follower2").show();
	$(".open").show();

}	

// $(window).mousemove(function(e) {
// 	console.log(e.clientX);
// 	console.log(e.clientY);
// 	$(".iris").css("top",e.clientY*.3).css("left",e.clientX*.3);
// })

// var mouseX = 0, mouseY = 0;
// $(document).mousemove(function(e){
//    mouseX = e.pageX - 720,
//    mouseY = e.pageY - 720
// });

// // cache the selector
// var follower = $(".iris");
// var xp = 0, yp = 0;
// var loop = setInterval(function(){
//     // change 12 to alter damping, higher is slower
//     xp += (mouseX - xp) / 100;
//     yp += (mouseY - yp) / 100;
//     follower.css({left:xp, top:yp});

// }, 30);

// below here

// first circle variables
var center = {
    x: $(".container").width()/2 - 15, 
    y: $(".container").height()/2 - 15
};
var distanceThreshold = $(".container").width()/2 - 15;
var mouseX = 0, mouseY = 0;

// second circle variables
var center2 = {
    x2: $(".container2").width()/2 - 25, 
    y2: $(".container2").height()/2 - 25
};
var distanceThreshold2 = $(".container2").width()/2 - 25;
var mouseX2 = 0, mouseY2 = 0;


$(window).mousemove(function(e){ 
   var d = {
        x: e.pageX - center.x,
        y: e.pageY - center.y
   };
   var distance = Math.sqrt(d.x*d.x + d.y*d.y);
   if (distance < distanceThreshold) {
     mouseX = e.pageX;
     mouseY = e.pageY;
   } else {
     mouseX = d.x / distance * distanceThreshold + center.x;
     mouseY = d.y / distance * distanceThreshold + center.y;
   }
    
   var d2 = {
        x2: e.pageX - 500 - center2.x2,
        y2: e.pageY - 500 - center2.y2
   };
   var distance2 = Math.sqrt(d2.x2*d2.x2 + d2.y2*d2.y2);
   if (distance2 < distanceThreshold2) {
     mouseX2 = e.pageX - 500;
     mouseY2 = e.pageY - 500;
   } else {
     mouseX2 = d2.x2 / distance2 * distanceThreshold2 + center2.x2;
     mouseY2 = d2.y2 / distance2 * distanceThreshold2 + center2.y2;
   }
});

// cache the selector
var follower2 = $("#follower2");
var xp2 = 0, yp2 = 0;
var loop2 = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp2 += (mouseX2 - xp2) / 25;
    yp2 += (mouseY2 - yp2) / 25;
    follower2.css({left:xp2, top:yp2});
    
}, 30);




