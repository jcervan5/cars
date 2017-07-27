const express = require("express");
const knex = require('../db/knex')
const router = express.Router();
const queries = require('../queries')

router.get("/car", function(request, response, next) {
    queries.getCar().then(function(car) {
        response.json(car);
    });
});

router.get("/camaro/:id", function(request, response, next) {
  let id = request.params.id
    queries.getOneCar(id).then(function(camaro){
        response.json(camaro);
    });
});

router.post('/camaro', function(request, response, next) {
  let createcar = request.body
    queries.createCar(createcar).then(function(camaro) {
        response.json(camaro);
    });
});

router.put('/camaro/:id', function(request, response, next) {
  let id = request.params.id;
  let editcar = request.body;
  console.log(editcar);
  queries.editCar(id, editcar).then(function(camaro) {
    console.log(camaro);
  response.json(camaro);
  });
});

router.delete('/camaro/:id', function(request, response, next){
  let id = request.params.id;
  queries.deleteCar(id).then(function(camaro){
    response.json({message:'Camaro Deleted!'})
  });
});

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
