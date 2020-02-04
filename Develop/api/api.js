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
                
                var eventGenre = allEvents[i].classifications[0].genre.name
               
                var eventDate = allEvents[i].dates.start.localDate
                
                var eventLink = allEvents[i].url

                var info = {
                        event: eventName,
                        genre: eventGenre,
                        date: eventDate,
                        ticketlink: eventLink
                    };  
                                        
                    $.post("", info),
                        function(data, status) {
                            console.log(data)
                            console.log("Status: " + status)
                        }
                }            
             },
    error: function(xhr, status, err) {
        console.log(err);
             }
  })
 
      
  


