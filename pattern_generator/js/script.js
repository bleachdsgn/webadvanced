function play()
{
   $("#song").html("<embed src='css/audio/SUICIDE - sweetheart.mp3' autostart=true loop=false volume=50 hidden=true>");
}


$(".heart").click(function(){

    play();

    var timer = 0;
    var counter = 0;

    for (var i = 0; i < 1000; i++) {
        setTimeout(function() {
            var sweethearts = ["s", "w", "e", "e", "t", "h", "e", "a", "r", "t", "s"];
            var mystring = "";
            for (var s = 0; s < 60; s++) {
                if (Math.random()*100 < 50) {
                    
                    var randomFromArray = sweethearts[Math.floor(Math.random()*sweethearts.length)];
                    sweethearts.push(randomFromArray);
                    mystring += randomFromArray;
                } else {
                    sweethearts.push(" ");
                    mystring += " ";
                }
        
            }
            console.log(mystring);
        }, timer);
        timer += 200;
        counter++;
    }
    
});







