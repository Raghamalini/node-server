const express = require("express");
const mongoose = require("mongoose");
var app = express(); //let can also be used / creating an object to reference of express (express())
const movies = require('../models/movieSchema');
const url = 'mongodb://raghamalini:password123@ds031802.mlab.com:31802/songlist';
mongoose.connect(url, function (err) {     //it is to connect to db 
    if (err) {
        console.log("connection db failed");
    }
    else {
        console.log("connected to database");
    }

});
const router = express.Router(); //router is used to specify paths
router.get("/", function (req, res) {
    res.send("request received");
});

router.get("/movies", function (req, res) {             //movies  ia a variable from above variable
    movies.find({}, function (err, film) {    //{} is a empty object
        if (err) {
            console.log(err);
        } else {
            res.json(film);
        }
    }); //close find
});
router.get("/movies/:vijay", function (req, res) {     // it is used to fetch from sepcific id 
    movies.findById(req.params.vijay, function (err, film) {
        if (err) {
            console.log(err);
        } else {
            res.json(film);
        }
    }); //close find
});  //close object

router.post("/movies", function (req, res) {
    var newMovie = new movies();
    newMovie.name = req.body.name;
    newMovie.actor = req.body.actor;
    newMovie.director = req.body.director;
    newMovie.save(function (err, newMovieAdded) {
        if (err) {
            console.log("error adding movie");
        }
        else {
            res.json(newMovieAdded);
        }
    });
});
router.put("/movies/:id", function (req, res) {
    movies.findByIdAndUpdate((req.params.id),
        {
            $set:
            {
                name: req.body.name,
                actor: req.body.actor,
                director: req.body.director
            }
        },
        {
            new: true

        },
        function (err, updatedmovie) {
            if (err) {
                console.error(err);
            }
            else {
                res.json(updatedmovie);
            }
        });
});
router.delete("/movies/:id", function (req, res) {
    movies.findByIdAndRemove(req.params.id, function (err, deletedMovie) {
        if (err) {
            console.error(err);
        }
        else {
            res.json(deletedMovie);
        }
    });
});
module.exports = router;