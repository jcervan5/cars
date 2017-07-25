exports.up = function(knex, Promise) {
  return knex.schema.createTable('camaro', (table) => {
    table.increments()
    table.text('model').notNullable()
    table.text('year').notNullable()
    table.float('price').notNullable()
    table.text('city').notNullable()
    table.text('state').notNullable()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('camaro')
};
