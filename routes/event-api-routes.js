var db = require("../models");

module.exports = function(app){

    //get all events
    app.get("/api/events", function(req,res){
        db.events.findAll({}).then(dbevents=>{
            res.json(dbevents);
        });
    });

    //get event by id
    app.get("/api/events/:id", function(req, res){
        db.events.findOne({
            where: {
                id: req.params.id
            }
        }).then(dbevents=>{
            res.json(dbevents);
        });
    });

    //add new event
    app.post("/api/events", function(req, res){
        db.events.create(req.body).then(dbevents=>{
            res.json(dbevents);
        });
    });

    //remove event (no groups/event ended)
    app.delete("/api/events/:id", function(req, res){
        db.events.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbevents=>{
            res.json(dbevents);
        });
    });
}