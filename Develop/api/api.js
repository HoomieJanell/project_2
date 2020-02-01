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

                var eventImage = events[i].images[0].url;
                console.log(eventImage)

                var eventLink = events[i].url
                console.log(eventLink)
                }
                // Parse the response.
                // Do other things.
             },
    error: function(xhr, status, err) {
        console.log(err);
             }
  });

//   $.ajax({
//     type:"GET",
//     url:"https://app.ticketmaster.com/discovery/v2/events/k7vGFKzleBdwS/images.json?apikey=" + key,
//     async:true,
//     dataType: "json",
//     success: function(json) {
//                 console.log(json);
//                 // Parse the response.
//                 // Do other things.
//              },
//     error: function(xhr, status, err) {
//                 // This time, we do not end up here!
//              }
//   });