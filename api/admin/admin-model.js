const db = require("../../data/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("admin").select("name", "email").orderBy("id");
}

function findBy(filter) {
  return db("admin").where(filter).orderBy("id");
}

async function add(admin) {
  try {
    const [id] = await db("admin").insert(admin, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("admin").select("name").where({ id: id }).first();
}
