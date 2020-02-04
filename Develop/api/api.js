var key = 'fcAeKESHSkTYxwedo5Gf1UAlThGC4Cq6';
var url = "https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey="  

$.ajax({    
    type:"GET",
    url: url + key,
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json); 

                var allEvents = json._embedded.events;

                for (var i = 0; i < allEvents.length; i++) {                                      
                var eventName = allEvents[i].name;
                console.log(eventName);
                var eventGenre = allEvents[i].classifications[0].genre.name
                console.log(eventGenre)
                var eventDate = allEvents[i].dates.start.localDate
                console.log(eventDate);
                var eventLink = allEvents[i].url
                console.log(eventLink);

                    info = {
                        event: eventName,
                        genre: eventGenre,
                        date: eventDate,
                        ticketlink: eventLink
                    };  
                    
                    $.post("/api/events", info),
                        function(data, status) {
                            console.log(data)
                            console.log(status)
                        }
                }            
             },
    error: function(xhr, status, err) {
        console.log(err);
             }
  })
 
      
  


