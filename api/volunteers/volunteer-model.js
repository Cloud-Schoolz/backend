const db = require("../../data/db-config")

module.exports = {
    add,
    find,
    findBy,
    findById,
}

function find() {
    return db("volunteers").select("name", "email", "availability", "country_id").orderBy("id")
}

function findBy(filter) {
    return db("volunteers").where(filter).orderBy("id")
}

async function add(volunteer) {
    try {
        const [id] = await db("volunteers").insert(volunteer, "id")

       return findById(id)
    } catch (error) {
        throw error
    }
}

function findById(id) {
    return db("volunteers").select("name").where({ id: id }).first()
}