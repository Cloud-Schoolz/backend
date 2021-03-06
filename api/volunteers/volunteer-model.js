const db = require("../../data/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  volTask,
  volCountry,
  volCountryId,
  update,
  remove,
  findVolTask,
  insert,
  updateVolTasks,
};
function update(id, volunteer) {
  return db("volunteers").where("id", id).update(volunteer);
}

function find() {
  return db("volunteers")
    .select("id", "name", "email", "availability", "country_id")
    .orderBy("id");
}

function findBy(filter) {
  return db("volunteers").where(filter).orderBy("id");
}

async function add(volunteer) {
  try {
    const [id] = await db("volunteers").insert(volunteer, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("volunteers")
    .select("id", "name", "email", "availability", "country_id")
    .where({ id: id })
    .first();
}

function volTask(id) {
  return db("tasks as t")
    .select(
      // "v.name as volunteer_name",
      "t.task_name as task_name",
      "t.description as description",
      "t.id as task_id"
    )
    .innerJoin("volunteers as v", "t.volunteer_id", "v.id")
    .where("v.id", id);
}
function volCountry() {
  return db("country as c")
    .select("c.name as country_name", "v.name as volunteer_name")
    .innerJoin("volunteers as v", "c.id", "v.country_id");
}

function volCountryId(id) {
  return db("country as c")
    .select("c.name as country_name", "v.name as volunteer_name")
    .innerJoin("volunteers as v", "c.id", "v.country_id")
    .where("v.id", id);
}

function remove(id) {
  return db("volunteers").where("id", id).del();
}

function findVolTask() {
  return db("tasks as t")
    .select(
      "v.name as volunteer_name",
      "t.task_name as task_name",
      "t.description as description",
      "t.id as task_id",
      "v.id as volunteer_Id"
    )
    .innerJoin("volunteers as v", "t.volunteer_id", "v.id");
}

function updateVolTasks(id, task) {
  return db("tasks as t")
    .select(
      "t.task_name as task_name",
      "t.description as description"
    )
    .innerJoin("volunteers as v", "t.id", "v.id")
    .where("t.id", id)
    .update(task, ["t.id", "t.task_name", "t.description"]);
}

function insert(task) {
  return db("tasks as t")
  .select("t.task_name as task_name", "t.description as description")
  .innerJoin("volunteers as v", "t.id", "v.id")
    .insert(task)
    .then((ids) => ({
      id: ids[0],
      task_name: task.task_name,
      description: task.description,
    }));
}
