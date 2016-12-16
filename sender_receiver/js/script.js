$(document).ready(function() {

    var ticket="<div class='ticket'></div>";
    var numTickets=20;
    for(var x=1;x<=numTickets;x++){
        $(ticket).appendTo("body");
    }
    // get window dimentions
    var ww = $(window).width();
    var wh = $(window).height();
    $(".ticket").each(function(i){
        var rotationNum=Math.round((Math.random()*360)+1);
        var rotation="rotate("+rotationNum+"deg)";
        var posx = Math.round(Math.random() * ww)-20;
        var posy = Math.round(Math.random() * wh)-20;
        $(this).css("top", posy + "px").css("left", posx + "px").css("transform",rotation).css("-ms-transform",rotation).css("-webkit-transform",rotation);
    });
  
  $('.fadeOnLoad').fadeIn(10000);

  $.ajax({
    url: "http://api.wunderground.com/api/72df18b7f213607b/astronomy/q/NY/Newyork.json",
    dataType: "jsonp",
    success: function(parsed_json) {
      var moon_phase = parsed_json['moon_phase'];
      var moonData = {};
      moonData['Moon Ill'] = moon_phase['percentIlluminated'] + '%',
        moonData['Moon Age'] = moon_phase['ageOfMoon'],
        moonData['Current Time'] = moon_phase['current_time']['hour'] + ":" + moon_phase['current_time']['minute'],
        moonData['Sunrise'] = moon_phase['sunrise']['hour'] + ":" + moon_phase['sunrise']['minute'],
        moonData['Sunset'] = moon_phase['sunset']['hour'] + ":" + moon_phase['sunset']['minute'];
      for (index in moonData) {
        if (moonData.hasOwnProperty(index)) {
          var newHourlyString = index + ': ' + moonData[index];
          var newHourlyParagraph = $('<p/>').text(newHourlyString);
          $(".astro").append(newHourlyParagraph);
          
          var moonPhase = moon_phase.phaseofMoon;
          console.log(moonPhase);

          if (moonPhase == "New Moon") {

            $('#moon').addClass('new-moon');

          }

          else if (moonPhase == "Waxing Crescent") {

            $('#moon').addClass('waxing-crescent-moon');

          }

          else if (moonPhase == "First Quarter Half") {

            $('#moon').addClass('first-quarter-half-moon');

          }

          else if (moonPhase == "Waxing Gibbous") {

            $('#moon').addClass('waxing-gibbous-moon');

          }

          else if (moonPhase == "Full Moon") {

            $('#moon').addClass('full-moon');

          }

          else if (moonPhase == "Waning Gibbous") {

            $('#moon').addClass('waning-gibbous-moon');

          }

          else if (moonPhase == "Last Quarter Half") {

            $('#moon').addClass('last-quarter-half-moon');

          }

          else if (moonPhase == "Waning Crescent") {

            $('#moon').addClass('waning-crescent-moon');

          }

          else {

            console.log('oops');

          };


  

            for (var i=1; i <= 3; i++) {
    // Minimum 0 and maximum 60%. You can change that.  
    var y = Math.max((3 * i), Math.min((30 * i), Math.ceil(Math.random() * 100)));
    var x = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));
    var y = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));
    $(".cloud").css({
        position: 'absolute',
        top: y + '%',
        left: x + '%',
        'background-color': 'rgba(255,255,255,' + Math.random() + ')'
    }).text('top:' + y + ', left:' + x).appendTo('body');
}


          

        }
      }
    }
  });
});




