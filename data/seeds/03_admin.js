exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const admin = [
    {
      name: "admin1",
      password: "password",
      email: "admin1@student.com",
      admin: "admin"
    },
    {
      name: "admin2",
      password: "password",
      email: "admin2@student.com",
      admin: "admin"
    }
  ];

  return knex("admin")
    .del()
    .insert(admin)
    .then(() => console.log("\n== Seed data for users table added. ==\n"));
};