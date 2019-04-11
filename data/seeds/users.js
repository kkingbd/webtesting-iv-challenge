
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Md', hobby: 'Coding'},
        {name: 'Maria', hobby: 'Cooking'},
        {name: 'Loki', hobby: 'Eating'}
      ]);
    });
};
