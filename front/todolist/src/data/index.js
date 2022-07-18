import axios from 'axios'

const baseURL = 'http://localhost:5000'

const axiosApi = axios.create({
    baseURL: baseURL,
    headers: {'contentType':'application/json'}
})

const getAllToDos = async () => { 
    try{
        const response = await axiosApi.get('/todos')

        if(response.status === 200){
            return response.data
        }else{
            throw new Error('Response Failed')
        }
    }catch(error){
        console.error(error)
    }
}

const postNewTodo = async (todo) => {
    try{
    const response = await axiosApi.post('/todos', todo)

        if(response.status === 201){
            return (response.data)
        }else{
            throw new Error('Response Failed')
        }

    }catch(error){
        console.error(error)
    }
};

const sendDeleteTodo = async (id) => {
    try{
    const response = await axiosApi.delete(`/todos/${id}`)
    
        if(response.status === 201){
            return true
        }else{
            throw new Error('Response Failed')
        }

    }catch(error){
        console.error(error)
    }
};

const favTodo = async (todo) => {
    try{
    const response = await axiosApi.delete(`/todos/${todo.id}`, todo)

        if(response.status === 201){
            return true
        }else{
            throw new Error('Response Failed')
        }

    }catch(error){
        console.error(error)
    }
};

export {getAllToDos, postNewTodo, sendDeleteTodo, favTodo};