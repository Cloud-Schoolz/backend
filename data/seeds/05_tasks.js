exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const tasks = [
    {
      task_name: "Study ",
      description: "the mysteries of the universe",
      volunteer_id: 1
    },
    {
      task_name: "assign partners",
      description: "assign lab partners for students",
      volunteer_id: 2
    },
    {
      task_name: "Do research ",
      description: "research lots of stuff",
      volunteer_id: 3
    },
    {
      task_name: "assidawdsgn adawd",
      description: "fsff lab pasfasartners asfda studasfasfents",
      volunteer_id: 4
    },
    {
      task_name: "hgkghkk ",
      description: "ghk gkhkk okkgkhkf tkhkhkhe univehkkhkrse",
      volunteer_id: 2
    },
    {
      task_name: "assjhljlign ljhhj",
      description: "assigkjhn lakhjkb parhjkhjkhtners fofhftr shfthtudents",
      volunteer_id: 2
    }
  ];

  return knex("tasks")
    .del()
    .insert(tasks)
    .then(() => console.log("\n== Seed data for tasks table added. ==\n"));
};
