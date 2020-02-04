var db = require("../models");

module.exports = function(app){
    
    //create a user's profile data
    app.post("api/account", function(req, res){
        db.accData.create(req.body).then(function(dbaccount){
            res.json(dbaccount);
        });
    });

    //get a user's info
    app.get("/api/account/:id", function(req, res){
        db.accData.findOne({
            where: {
                User_id: req.params.id
            }
        }).then(dbaccount=>{
            res.json(dbaccount);
        });
    });

    //update a user's info
    app.put("/api/account/:id", function(req, res){
        db.accData.update(req.body,
            {
                where: {
                    User_id: req.params.id
                }
            }).then(dbaccount=>{
                res.json(dbaccount);
            });
    });
}