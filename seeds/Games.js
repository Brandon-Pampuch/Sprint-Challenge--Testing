
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, title: 'Mario', genre: "side scroller"},
        {id: 2, title: 'Donkey Kong', genre: "arcade"},
        {id: 3, title: 'Centiped', genre: "shooter"},

      ]);
    });
};