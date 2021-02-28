
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const volunteers = [
    {
      name: "volunteer1",
      password: "password",
      email: "volunteer1@student.com",
      availability: Date.now(),
      country_id: 1
    },
    {
      name: "volunteer2",
      password: "password",
      email: "volunteer2@student.com",
      availability: Date.now(),
      country_id: 2
    }
  ];

  return knex("volunteers")
    .del()
    .insert(volunteers)
    .then(() => console.log("\n== Seed data for volunteers table added. ==\n"));
};