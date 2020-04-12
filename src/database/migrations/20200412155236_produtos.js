exports.up = function(knex) {
  return knex.schema.createTable("produtos", function(table) {
    table.string("id").primary();
    table.string("title").notNullable();
    table.string("description");
    table.int("quantity").notNullable();
    table.decimal("value").notNullable();
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("produtos");
};
