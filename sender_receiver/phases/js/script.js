$(document).ready(function() {
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

        }
      }
    }
  });
});

