exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "chevelle"')

    .then(function () {
      var chevelle = [{
        id:1 ,
        model: 'Chevrolet_Chevelle',
        year: 1969,
        price: 32995,
        city: 'La Vergne',
        state: 'TN',
      },{
        id:2 ,
        model: 'Chevrolet_Chevelle',
        year: 1970,
        price: 49995,
        city: 'Findlay',
        state: 'OH',
      },{
        id:3 ,
        model: 'Chevrolet_Chevelle',
        year: 1971,
        price: 68000,
        city: 'OFallon',
        state: 'IL',
      },{
        id:4 ,
        model: 'Chevrolet_Chevelle',
        year: 1972,
        price: 26500,
        city:'Miami',
        state:'FL',
      }]
      return knex('chevelle').insert(chevelle)
});
};
