var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 808;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = [
    {
        name: "Orlando",
        picture: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
            3,
            4,
            3,
            5,
            4,
            3,
            4,
            5,
            5,
            3
        ]
    }
];

//HTML Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});


//API Routes
app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    
    var newFriend = req.body;

    newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
    
    friends.push(newFriend);
    
    res.json(newFriend);
  });


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

  