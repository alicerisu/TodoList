const todos = require('./queries/toDos')

const router = (app) => {
    app.get('/todos',todos.getToDos)
    app.get('/todos/:id',todos.getToDoById)
    app.post('/todos',todos.createToDo )
    app.put('/todos/:id',todos.updateToDo)
    app.delete('/todos/:id',todos.deleteToDo)
}

module.exports = router