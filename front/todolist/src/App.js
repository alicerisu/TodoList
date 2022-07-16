import { useState, useEffect } from 'react';
import './App.css';
import Input from './components/input'
import { v4 as uuid } from 'uuid';
import Todo from './components/todo'

function App() {
  const [todoList, setTodoList] = useState([]);

  const deleteTodo = (thisTodo) =>
    setTodoList(todoList.filter(x => x.id !== thisTodo.id))

  const setFavorite = (thisTodo) => {

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

  const createNewTodo = (description) => {
    const id = uuid();

    setTodoList([...todoList, {
      id,
      description,
      favorite: false,
      key: id
    }])

    console.log(todoList)
  }

  return (
    <div className="App">
      <div className='container'>
        {todoList.map(x => <Todo todo={x} deleteTodo={deleteTodo} setFavorite={setFavorite} key={x.key} />)}
        <Input createNewTodo={createNewTodo} />
      </div>
    </div>
  );
}

export default App;
