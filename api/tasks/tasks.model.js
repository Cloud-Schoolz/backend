const db = require('../../data/db-config');

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};

function find() {
  return db('tasks').select("task_name", "description");
}

function findById(id) {
    return db("tasks").select("task_name", "description").where({ id: id }).first()
}

function insert(task) {
  return db('tasks')
    .insert(task, 'id')
    .then(ids => ({ id: ids[0] }));
}

function update(id, task) {
  return db('tasks')
    .where('id', id)
    .update(task);
}

function remove(id) {
  return db('tasks')
    .where('id', id)
    .del();
}



