var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 808;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Variable holding friends in a database
var friends = [
    {
        name: "Orlando",
        picture: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
        ]
    },
    {
      name: "Sergio",
        picture: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/2224243.jpg",
        scores: [
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
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
    
    //////////////
    // for(var i = 0; i < newFriend.scores.length; i++) {
    //   newFriend.scores[i] = parseInt(newFriend.scores[i]);
    // }

    // // default friend match is the first friend but result will be whoever has the minimum difference in scores
    // var bestFriendIndex = 0;
    // var minimumDifference = 40;

    // // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
    // //  whatever the difference is, add to the total difference
    // for(var i = 0; i < friends.length; i++) {
    //   var totalDifference = 0;
    //   for(var j = 0; j < friends[i].scores.length; j++) {
    //     var difference = Math.abs(newFriend.scores[j] - friends[i].scores[j]);
    //     totalDifference += difference;
    //   }

    //   // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
    //   if(totalDifference < minimumDifference) {
    //     bestFriendIndex = i;
    //     minimumDifference = totalDifference;
    //   }
    // }
    //////////////

    newFriend.name = newFriend.name.replace(/\s+/g, "").toLowerCase();
    
    friends.push(newFriend);

    res.json(newFriend);
  });


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

  