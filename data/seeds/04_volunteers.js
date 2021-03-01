
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const volunteer = [{
    name: "volunteer ",
    email: "volunteer@student.com",
    password: "password",
    availability:"weekdays",
    country_id: 5
    
  },
  
  ];

  return knex("volunteers")
    .del()
    .insert(volunteer)
    .then(() => console.log("\n== Seed data for volunteers table added. ==\n"));
};