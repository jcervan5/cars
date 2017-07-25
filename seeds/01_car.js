exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "car"')

    .then(function () {
      var car = [{
        id:1 ,
        model: 'Camaro',
        price_min: 27000,
        price_max: 130000,
      },{
        id:2 ,
        model: 'Challenger',
        price_min: 27000,
        price_max: 100000,
      },{
        id:3 ,
        model: 'Chevelle',
        price_min: 25000,
        price_max: 95000,
      },{
        id:4 ,
        model: 'Mustang',
        price_min: 24000,
        price_max: 90000,
      },{
        id:5 ,
        model: 'Charger',
        price_min: 23000,
        price_max: 98000,
      }]
      return knex('car').insert(car)
});
};
