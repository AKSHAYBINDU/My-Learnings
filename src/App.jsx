import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState(" ");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTOdos) => {
      return [
        ...currentTOdos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }

  function toggleTodo(id, completed){
    setTodos(currentTOdos =>{
      return currentTOdos.map(todo =>{
        if(todo.id === id){
          return { ...todo, completed}
        }
        return todo
      })

    })
  }

  function deleteTodo(id){
    setTodos(currentTOdos =>{
      return currentTOdos.filter(todo => todo.id !== id)
    })
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
          />
        </div>
        <button>Add</button>
      </form>
      <h1>Todo List</h1>
      <ul>
        {todos.length == 0 && "No to-do"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id) }>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
