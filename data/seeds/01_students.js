exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const students = [
    {
      name: "student1",
      password: "password",
      email: "student1@student.com"
    },
    {
      name: "student2",
      password: "password",
      email: "student2@student.com"
    }
  ];

  return knex("students")
    .del()
    .insert(students)
    .then(() => console.log("\n== Seed data for users table added. ==\n"));
};