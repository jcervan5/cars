
exports.up = function(knex, Promise) {
  return knex.schema.createTable('car', (table) => {
    table.increments()
    table.text('model').notNullable()
    table.float('price_min').notNullable()
    table.float('price_max').notNullable()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('car')
};
