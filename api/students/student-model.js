const db = require("../../data/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("students").select("name", "email").orderBy("id");
}

function findBy(filter) {
  return db("students").where(filter).orderBy("id");
}

async function add(student) {
  try {
    const [id] = await db("students").insert(student, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("students").select("name").where({ id: id }).first();
}
