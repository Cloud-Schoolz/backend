const { where } = require("../../data/db-config");
const db = require("../../data/db-config");

module.exports = {
  find,
  findBy,
  findById,
  volCountry
};

function volCountry(id) {
  return db("country as c")
    .join("volunteers as v", "c.id", "v.volunteer_id")
    .select("c.name", "v.name").where("v.id",id)
}

function find() {
  return db("country").select("name").orderBy("id");
}

function findBy(filter) {
  return db("country").where(filter).orderBy("id");
}

function findById(id) {
  return db("country").select("name").where({ id: id }).first();
}
