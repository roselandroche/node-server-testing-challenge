const db = require('../config')

// get crystal gems
function list() {
    return db('crystal_gems')
}

// find by id to return in other functions
function findById(id) {
    return db('crystal_gems').where({ id }).first()
}

// create new gem
async function insert(newGem) {
    const id = await db('crystal_gems').insert(newGem)
    return findById(id)
}

// delete gem
function remove(id) {
    return db('crystal_gems').where({ id }).del()
}


module.exports = {
    list,
    findById,
    insert,
    remove
}