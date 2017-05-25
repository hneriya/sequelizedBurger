var express = require('express');
var router = express.Router();
var db = require('../models');

//Grabs all info from the burger table
router.get("/", function(req, res) {

    db.Burger.findAll({}).then(function(data) {
        res.render("index", { burgers: data });
    })
});

//enter a new burger
router.post("/", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function() {
        res.redirect("/");
    });
});

//make burger go from not consumed to consumed
router.put("/:id", function(req, res) {
    db.Burger.update({
        consumed: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect("/");
    });
});

module.exports = router;
