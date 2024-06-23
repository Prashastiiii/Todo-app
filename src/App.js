import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from './MyComponents/AddTodo';
import React, { useState, useEffect } from 'react';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    setTodos(todos.filter((e) => e !== todo));
    console.log("deleted", todos);
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const myTodo = { sno, title, desc };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
