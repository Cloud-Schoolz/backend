exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const volunteer = [
    {
      name: "volunteer1",
      email: "volunteer1@student.com",
      password: "password",
      availability: "weekdays"
      

    },
    {
      name: "volunteer2",
      email: "volunteer2@student.com",
      password: "password",
      availability: "weekdays"
    
    },
    {
      name: "volunteer3",
      email: "voluntee3@student.com",
      password: "password",
      availability: "weekdays"
      
    },
    {
      name: "volunteer4",
      email: "voluntee4@student.com",
      password: "password",
      availability: "weekdays"
      
    }
  ];

  return knex("volunteers")
    .del()
    .insert(volunteer)
    .then(() => console.log("\n== Seed data for volunteers table added. ==\n"));
};
