var db = require("../models");

module.exports = function(app) {
    //list all groups for all events
    app.get("api/groups", function(req, res){
        db.groups.findAll({}).then(dbgroups=>{
            res.json(dbgroups);
            console.log(dbgroups);
        });
    });

    //list all groups for selected event
    app.get("/api/groups/event/:eventid", function(req, res){
        db.groups.findAll({
            where: {
                eventId: req.params.eventid
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
        db.groups.addMember('Users', {groupId: req.params.id, UserId: req.body.UserId})
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
}