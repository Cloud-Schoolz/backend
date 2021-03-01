
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const admin = [
    {
    name: "admin0",
    email: "admin0@student.com",
    password: "password"
  },
  
  ];

  return knex("admin")
    .del()
    .insert(admin)
    .then(() => console.log("\n== Seed data for admin table added. ==\n"));
};
