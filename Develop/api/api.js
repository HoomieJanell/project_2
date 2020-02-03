//require("dotenv").config()
// var key = process.env.API_KEY;
// console.log(key)

var key = 'fcAeKESHSkTYxwedo5Gf1UAlThGC4Cq6';
var url = "https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey="

  

$.ajax({
    type:"GET",
    url: url + key,
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json); 

                var events = json._embedded.events;

                for (var i = 0; i < events.length; i++){
                                      
                var eventName = events[i].name;
                console.log(eventName)

                var eventdate = events[i].dates.start.localDate
                console.log(eventdate)

                var eventTime = events[i].dates.start.localTime
                console.log(eventTime)

                var eventLink = events[i].url
                console.log(eventLink)
                }
             },
    error: function(xhr, status, err) {
        console.log(err);
             }
  });

