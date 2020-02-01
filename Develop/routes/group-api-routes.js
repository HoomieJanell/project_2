var db = require("../models");

module.exports = function(app) {
    //list all groups for all events
    app.get("api/groups", function(req, res){
        db.groups.findAll({}).then(dbgroups=>{
            res.json(dbgroups);
        });
    });

    //list all groups for selected event
    app.get("/api/groups/:eventid", function(req, res){
        db.groups.findAll({
            where: {
                event_id: req.params.eventid
            }
        }).then(dbgroups=>{
            res.json(dbgroups);
        });
    });

    //get specific group
    app.get("/api/groups/:id", function(req, res){
        db.groups.findOne({
            where: {
                id: req.params.id
            }
        }).then(dbgroups=>{
            res.json(dbgroups);
        });
    });

    //make a new group
    app.post("/api/groups", function(req, res){
        db.groups.create(req.body).then(dbgroups=>{
            res.json(dbgroups);
        });
    });

    //add user to group
    //BIG NOTE: BELONGSTO IS WEIRD SO I DON'T KNOW IF THIS IS RIGHT OR WHAT
    app.post("/api/groups/:id", function(req, res){
        db.groups.addUsers([req.params.id, req.body])
            .then(dbgroups=>{
                res.json(dbgroups);
            });
    });

    //delete selected group ("I want to delete my group")
    app.delete("/api/groups/:id", function(req, res){
        db.groups.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbgroups=>{
            res.json(dbgroups);
        });
    });

    //delete all groups ("the event is over, remove all its groups")
    app.delete("api/groups/:eventid", function(req, res){
        db.groups.destroy({
            where: {
                event_id: req.params.eventid
            }
        }).then(dbgroups=>{
            res.json(dbgroups);
        });
    });


}