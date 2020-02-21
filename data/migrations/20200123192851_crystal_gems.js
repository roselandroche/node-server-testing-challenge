
exports.up = async function(knex) {
  await knex.schema.createTable("crystal_gems", (table) => {
      table.increments('id')
      table.string('name', 128).notNull()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("crystal_gems")
};
