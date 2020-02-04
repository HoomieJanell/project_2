var db = require("../models");

module.exports = app=>{

    //get the user/pw of the given id, though I don't think
    //this is quite how it's gonna want to be written in the end
    app.get("/api/User/:username", (req, res)=>{
        db.User.findOne({
            where: {
                username: req.params.username
            }
        }).then(dbUser=>{
            res.json(dbUser);
        });
    });

    app.get("/api/User/groups/:id", (req, res)=>{
        db.User.getGroups({
            where: {
                UserId: req.params.id
            }
        }).then(response=>{
            console.log(response);
        });
    });

    // create a new user
    app.post("/api/User", (req,res)=>{
        db.User.create(req.body).then((dbUser)=>{
            res.json(dbUser);
        });
    });

    // delete a user account, not sure how much use this'll get though.
    app.delete("/api/User/:id", (req, res)=>{
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbUser)=>{
            res.json(dbUser);
        })
    })
}