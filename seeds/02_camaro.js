exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "camaro"')

    .then(function () {
      var camaro = [{
        id:1 ,
        model: 'Chevrolet_Camaro',
        year: 1968,
        price: 32995,
        city: 'Denver',
        state: 'CO',
      },{
        id:2 ,
        model: 'Chevrolet_Camaro',
        year: 1969,
        price: 99965,
        city: 'Tampa',
        state: 'FL',
      },{
        id:3 ,
        model: 'Chevrolet_Camaro',
        year: 1970,
        price: 27000,
        city: 'Phoenix',
        state: 'AZ',
      },{
        id:4 ,
        model: 'Chevrolet_Camaro',
        year: 1971,
        price: 32999,
        city:'Atlanta',
        state:'GA',
      }]
      return knex('camaro').insert(camaro)
});
};
