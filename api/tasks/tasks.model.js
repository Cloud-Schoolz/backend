const db = require("../../data/db-config");

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};

function find() {
  return db("tasks").select("task_name", "description","id");
}

function findById(id) {
  return db("tasks")
    .select("task_name", "description","id")
    .where({ id: id })
    .first();
}

function insert(task) {
  return db("tasks")
    .insert(task, "id")
    .then((ids) => ({ id: ids[0], task_name:task.task_name, description: task.description }));
}

function update(id, task) {
  return db("tasks").where("id", id).update(task, ['id', 'task_name']) 
}

function remove(id) {
  return db("tasks").where("id", id).del();
}
