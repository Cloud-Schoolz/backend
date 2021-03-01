const { where } = require("../../data/db-config");
const db = require("../../data/db-config");

module.exports = {
  find,
  findBy,
  findById,
  volCountryId,
  volCountry
};

function volCountry() {
  return db("country as c")
    .select("c.name as country_name", "v.name as volunteer_name")
    .innerJoin("volunteers as v","c.id","v.country_id");
}

function volCountryId(id) {
  return db("country as c")
    .select("c.name as country_name", "v.name as volunteer_name")
    .innerJoin("volunteers as v","c.id","v.country_id")
    .where("v.country_id", id);
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
