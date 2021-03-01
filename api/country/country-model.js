const db = require("../../data/db-config")

module.exports = {
    
    find,
    findBy,
    findById,
}

function find() {
    return db("country").select("name").orderBy("id")
}

function findBy(filter) {
    return db("country").where(filter).orderBy("id")
}

function findById(id) {
    return db("country").select("name").where({ id: id }).first()
}