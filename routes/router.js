const express = require("express");
const knex = require('../db/knex')
const router = express.Router();
const queries = require('../queries')

router.get("/car", function(request, response, next) {
    queries.getCar().then(function(car) {
        response.json(car);
    });
});

router.get("/car/:id", function(request, response, next) {
  let id = request.params.id
    queries.getOneCar(id).then(function(car){
        response.json(car);
    });
});

// router.post('/', function(request, response, next) {
//   let post = req.body
//     queries.getPost(post).then(function(car) {
//         response.json(car);
//     });

router.get("/camaro", function(request, response, next) {
    queries.getCamaro().then(function(camaro) {
        response.json(camaro);
    });
});

router.get("/challenger", function(request, response, next) {
    queries.getChallenger().then(function(challenger) {
        response.json(challenger);
    });
});

router.get("/chevelle", function(request, response, next) {
    queries.getChevelle().then(function(chevelle) {
        response.json(chevelle);
    });
});

router.get("/mustang", function(request, response, next) {
    queries.getMustang().then(function(mustang) {
        response.json(mustang);
    });
});
module.exports = router;