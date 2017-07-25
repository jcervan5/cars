const knex = require('./db/knex');
module.exports = {
  getCar: function(){
     return knex('car')
    .select()

  },

  getOneCar: function(id){
          return knex('car')
          .select()
          .where('id', id)
          .first()
  },

  // getPost: function(post){
  //         return knex('car')
  //         .insert(post)
  //         .returning('*')
  //         .then(car)
  // },


  getCamaro: function(){
     return knex('camaro')
    .select()

  },

  getChallenger: function(){
     return knex('challenger')
    .select()

  },

  getChevelle: function(){
     return knex('chevelle')
    .select()

  },

  getMustang: function(){
     return knex('mustang')
    .select()

  },
};
