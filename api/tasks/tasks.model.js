const db = require('../../data/db-config');

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};

function find() {
  return db('tasks').select("task_name","description","task_id");
}

function findById(id) {
    return db("tasks").select("task_name","description").where({ task_id: id }).first()
}

function insert(task) {
  return db('tasks')
    .insert(task, 'id')
    .then(ids => ({ task_id: ids[0] }));
}

function update(id, task) {
  return db('tasks')
    .where('task_id', id)
    .update(task);
}

function remove(id) {
  return db('tasks')
    .where('task_id', id)
    .del();
}



