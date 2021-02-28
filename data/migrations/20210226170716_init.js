exports.up = function (knex) {
  return knex.schema
  .createTable("students", (tbl) => {
    tbl.increments("id");

    tbl.string("name",128).notNullable()
    tbl.string("email", 128).notNullable().unique();
    tbl.string("password", 128).notNullable();
    
  })

  .createTable("country", (tbl) => {
    tbl.increments("country_id");
    tbl.string("name", 128).notNullable().unique();
    })
    .createTable("admin", (tbl) => {
      tbl.increments("admin_id");

      tbl.string("name",128).notNullable()
      tbl.string("email", 128).notNullable().unique();
      tbl.string("password", 128).notNullable();
      tbl.integer("role").default(1)
      
    })

    .createTable("volunteers", (tbl) => {
      tbl.increments("volunteer_id");

      tbl.string("name",128).notNullable()
      tbl.string("email", 128).notNullable().unique();
      tbl.string("password", 128).notNullable();
      tbl.string("availability", 128).notNullable();
      tbl
        .integer("country_id")
        .unsigned()
        .references("country.country_id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .notNullable()
       
    })

    .createTable("tasks", (tbl) => {
      tbl.increments("task_id");
      tbl.string("task_name", 128).notNullable();
      tbl.string("description", 128);
      tbl
        .integer("admin_id")
        .unsigned()
        .references("admin.admin_id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("volTasks", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("task_id")
        .unsigned()
        .references("tasks.task_id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("volunteer_id")
        .unsigned()
        .references("volunteers.volunteer_id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        tbl.boolean("complete").default(false)
        

    })  
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("volTasks")
    .dropTableIfExists("tasks")
    .dropTableIfExists("volunteer")
    .dropTableIfExists("admin")
    .dropTableIfExists("country")
    .dropTableIfExists("students");
};
