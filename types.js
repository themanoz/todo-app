// Here we write all the inputs zod inputs expected from the end user
const zod = require('zod')

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string(),
})


module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}