import React, { useState, useEffect } from 'react'

const Todo = ({todo, deleteTodo, setFavorite}) => { 
    const [favoriteClass, setFavoriteClass] = useState('favoriteButton');

    useEffect(()=> {
        !todo.favorite
         ?  setFavoriteClass('favoriteButton favFalse')
         :  setFavoriteClass('favoriteButton favTrue')
    },[todo])

    const handleButtonDelClick = (event) => {
        event.preventDefault()
        deleteTodo(todo)
    }

    const handleButtonFavClick = (event) => {
        event.preventDefault()
        setFavorite(todo)
    }
    
    return(
        <div className="todo">
            <p>{todo.description}</p>
            <div className="todoButtons">
                <button className='deleteTodo' onClick={handleButtonDelClick}>Del</button>
                <button className={favoriteClass} onClick={handleButtonFavClick}>Fav</button>
            </div>
        </div>
    )
}

export default Todo;