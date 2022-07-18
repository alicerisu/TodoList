import React, { useState } from 'react';

const Input = ({ createNewTodo }) => {
    const [text, setText] = useState('');

    const saveToDo = (event) => {
        event.preventDefault()
        createNewTodo(text);
        setText('')
    }

    const handleChange = (event) => {
        event.preventDefault();
        setText(event.target.value);
    }

    return (
        <form className='buttonAdd'>
            <label htmlFor={'newToDo'}></label>
            <input type={'text'} name={'newToDo'} onChange={handleChange} value={text} />
            <button onClick={saveToDo}>Salvar</button>
        </form>
    )
}

export default Input;
