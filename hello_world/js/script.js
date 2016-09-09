$( document ).ready(function() {

	$("img").fadeIn(3000);

	$("#text").mouseenter(function() {
  		$("img").hide();
	}).mouseleave(function() {
		$("img").show();
	})

	var winWidth = document.documentElement.clientWidth;
	var winHeight = document.documentElement.clientHeight;
	var images = document.getElementsByTagName('img');

	function getRandomNumber(min, max) {
    
  		return Math.random() * (max - min) + min;
    
	}

    for ( var i=0; i < images.length; i++ ) {

    	var thisImg = images[i];

    	randomTop = getRandomNumber(0, winHeight);
    	randomLeft = getRandomNumber(0, winWidth);

    	thisImg.style.top = randomTop +"px";
    	thisImg.style.left = randomLeft +"px";

    };

 	fadeIn();

	function fadeIn() {

		document.getElementById("container").className += "fade-in";
	
	}

});








