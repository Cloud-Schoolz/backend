
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const tasks = [{
    task_name: "Study ",
    description: "the mysteries of the universe",
    admin_id: 1 
  },
  {
    task_name: "assign partners",
    description: "assign lab partners for students",
    admin_id: 1 
  }
    
  ];

  return knex("tasks")
    .del()
    .insert(tasks)
    .then(() => console.log("\n== Seed data for tasks table added. ==\n"));
};