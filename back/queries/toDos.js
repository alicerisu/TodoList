const pool = require('../config')
const { v4: uuid} = require('uuid')
const { query } = require('express')

const getToDos = (request, response) =>{
    pool.query('SELECT * FROM todos', (error, result) => {
        if (error){
            throw error
        }

        response.status(200).json(result.rows)
    })
}
const getToDoById = (request, response) =>{
    const id = request.params.id

    pool.query('SELECT * FROM todos where id = $1', [id], (error, result) => {
        if (error){
            throw error
        }

        response.status(200).json(result.rows)
    })
}

const createToDo = (request, response) =>{
    const id = uuid()
    const {description, favorite} = request.body 

    pool.query('INSERT INTO todos (id,description,favorite) VALUES($1,$2,$3)', [id, description, favorite], (error, result)=> {
        if (error){
            throw error
        }

        response.status(201).send(`"${description}" adicionado com sucesso `)
    })
}

const updateToDo = (request, response) => {
    const id = request.params.id
    const { description, favorite} = request.body 

    pool.query('UPDATE todos SET description = $2, favorite = $3 where id = $1', [id, description, favorite], (error, result)=> {
        if (error){
            throw error
        }

        response.status(201).send(`"${description}" atualizado com sucesso `)
    })
}

const deleteToDo = (request, response) => { 
    const id = request.params.id

    pool.query('DELETE FROM todos WHERE id = $1', [1], (error,results)=>{
        if(error){
            throw error
        }

        response.status(201).send("deletado com sucesso")
    })
}

module.exports = {
    getToDos,
    getToDoById,
    createToDo,
    updateToDo,
    deleteToDo
}