exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "challenger"')

    .then(function () {
      var challenger = [{
        id:1 ,
        model: 'Dodge_Challenger',
        year: 1970,
        price: 50500,
        city: 'Riverhead',
        state: 'NY',
      },{
        id:2 ,
        model: 'Dodge_Challenger',
        year: 1971,
        price: 34900,
        city: 'West Babylon',
        state: 'NY',
      },{
        id:3 ,
        model: 'Dodge_Challenger',
        year: 1972,
        price: 73995,
        city: 'Tampa',
        state: 'FL',
      },{
        id:4 ,
        model: 'Dodge_Challenger',
        year: 1973,
        price: 32500,
        city:'Goodfield',
        state:'GA',
      }]
      return knex('challenger').insert(challenger)
});
};
