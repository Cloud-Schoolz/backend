let csc = require("country-state-city").default;

exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const country = csc.getAllCountries().map((item) => {
    return {
      name: item.name,
    };
  });

  return knex("country")
    .del()
    .insert(country)
    .then(() => console.log("\n== Seed data for country table added. ==\n"));
};
