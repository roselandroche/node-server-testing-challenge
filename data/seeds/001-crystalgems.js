
exports.seed = async (knex) => {
  await knex('crystal_gems').truncate()
    
  await knex('crystal_gems').insert([
    { name: 'Garnet' },
    { name: 'Amethyst' },
    { name: 'Pearl' },
    { name: 'Steven Universe' }
  ])
};
