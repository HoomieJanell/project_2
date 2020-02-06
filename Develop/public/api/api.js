var key = 'fcAeKESHSkTYxwedo5Gf1UAlThGC4Cq6';
var url = "https://app.ticketmaster.com/discovery/v2/events.json?size=5&classificationName=music&dmaId=222&apikey="  

$.ajax({    
    type:"GET",
    url: url + key,
    async:true,
    dataType: "json",
    success: function(json) {
        console.log(json); 
        $("#eventscards .row").html("");

        var allEvents = json._embedded.events;
        for (var i = 0; i < allEvents.length; i++) {                                      
            var eventName = allEvents[i].name;                
            var eventGenre = allEvents[i].classifications[0].genre.name;              
            var eventDate = moment(allEvents[i].dates.start.dateTime);               
            var eventLink = allEvents[i].url;

            var html = `<div class="col s12">
            <div class="card black">
                <div class="card-content white-text">
                    <span style="text-align: center;" class="card-title">${eventName}</span>
                    <ul style="text-align: center;">
                        <li>
                            <p>${eventDate.format("MMMM Do YYYY")}</p>
                        </li>
                        <li>
                            <p>${eventDate.format("LT")}</p>
                        </li>
                        <li>
                            <p>${eventGenre}</p>
                        </li>
                        <li>
                            <a href="${eventLink}">Grab a Ticket</a>
                        </li>
                        <li>
                            <a href="concert-group.html">Join a Group</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`;

            $("#eventscards .row").append(html);
        }            
    },
    error: function(xhr, status, err) {
        console.log(err);
    }
});
 
      
  


