const db = require("../../data/db-config")

module.exports = {
    add,
    find,
    findBy,
    findById,
}

function find() {
    return db("admin").select("name", "email").orderBy("admin_id")
}

function findBy(filter) {
    return db("admin").where(filter).orderBy("admin_id")
}

async function add(admin) {
    try {
        const [id] = await db("admin").insert(admin, "id")

       return findById(id)
    } catch (error) {
        throw error
    }
}

function findById(id) {
    return db("admin").select("name").where({ admin_id: id }).first()
}