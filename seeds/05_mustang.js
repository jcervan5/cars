exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "mustang"')

    .then(function () {
      var mustang = [{
        id:1 ,
        model: 'Ford_Mustang',
        year: 1967,
        price: 29000,
        city: 'Lakeland',
        state: 'FL',
      },{
        id:2 ,
        model: 'Ford_Mustang',
        year: 1968,
        price: 27900,
        city: 'Grand_Rapids',
        state: 'MI',
      },{
        id:3 ,
        model: 'Ford_Mustang',
        year: 1969,
        price: 48900,
        city: 'Riverhead',
        state: 'NY',
      },{
        id:4 ,
        model: 'Ford_Mustang',
        year: 1970,
        price: 69900,
        city:'Indiana',
        state:'PA',
      }]
      return knex('mustang').insert(mustang)
});
};
