exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (tbl) => {
      tbl.increments("role_id");

      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("task_id");
      tbl.string("tasks_name", 128);
    })

    .createTable("volunteer", (tbl) => {
      tbl.increments("volunteer_id");

      tbl.string("email", 128).notNullable().unique();
      tbl.string("password", 128).notNullable();
      tbl
        .integer("role")
        .unsigned()
        .references("roles.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .default(3);
    })
    .createTable("student", (tbl) => {
      tbl.increments("student_id");

      tbl.string("email", 128).notNullable().unique();
      tbl.string("password", 128).notNullable();
      tbl
        .integer("role")
        .unsigned()
        .references("roles.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .default(2);
    })

    .createTable("volTasks", (tbl) => {
      tbl.increments("id");
      tbl.string("volunteer_task").notNullable();
      tbl
        .integer("task")
        .unsigned()
        .references("tasks.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("adminTasks", (tbl) => {
      tbl.increments("id");
      tbl.string("admin_task").notNullable();
      tbl
        .integer("task")
        .unsigned()
        .references("tasks.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("adminTasks")
    .dropTableIfExists("volTasks")
    .dropTableIfExists("student")
    .dropTableIfExists("volunteer")
    .dropTableIfExists("tasks")
    .dropTableIfExists("roles");
};
