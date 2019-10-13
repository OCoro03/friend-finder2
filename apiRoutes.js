var newFriend = require("friends.js");

module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });
}