
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const volTasks = [
    {
      task_id: 1,
      volunteer_id: 1
    },
    {
      task_id: 1,
      volunteer_id: 1
    },
    {
      task_id: 1,
      volunteer_id: 1
    }
  ];

  return knex("volTasks")
    .del()
    .insert(volTasks)
    .then(() => console.log("\n== Seed data for tasks table added. ==\n"));
};