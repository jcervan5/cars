const knex = require('./db/knex');
module.exports = {
  getCar: function(){
     return knex('car')
    .select()

  },

  getOneCar: function(id){
          return knex('camaro')
          .select()
          .where('id', id)
          .first()
  },

  createCar: function(post){
          return knex('camaro')
          .insert(post)
          .returning('*')
  },


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
