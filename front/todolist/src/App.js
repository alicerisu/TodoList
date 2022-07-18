import { useState, useEffect } from 'react';
import './App.css';
import Input from './components/input'
import Todo from './components/todo'
import { favTodo, getAllToDos, postNewTodo, sendDeleteTodo } from './data'

function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const todos = await getAllToDos()
      setTodoList(todos)
    }

    fetchData()
  }, [])

  const createNewTodo = async (description) => {
    const id = await postNewTodo({description, favorite: false});

    setTodoList([...todoList, {
      id,
      description,
      favorite: false
    }])
  }

  const deleteTodo = async (thisTodo) =>{
    if(! await sendDeleteTodo(thisTodo.id)){
      return;
    }

    setTodoList(todoList.filter(x => x.id !== thisTodo.id))
  }

  const setFavorite = async (thisTodo) => {
    if(! await favTodo(thisTodo)){
      return;
    }

    setTodoList(todoList.map(todo => {
      if (todo.id === thisTodo.id) {
        return {
          ...todo,
          favorite: !todo.favorite
        }
      }

      return todo
    }))
  }

  return (
    <div className="App">
      <div className='container'>
        {todoList.map(x => <Todo todo={x} deleteTodo={deleteTodo} setFavorite={setFavorite}/>)}
        <Input createNewTodo={createNewTodo} />
      </div>
    </div>
  );
}

export default App;
