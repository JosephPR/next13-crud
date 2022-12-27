import React from 'react'
import styles from './todo.module.css';
import { notFound } from 'next/navigation';

const fetchTodo = async (todoId) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`
    const res = await fetch(url);
    const todo = await res.json();
    return todo;
}

async function TodoPage({params: {todoId}}) {
    const todo = await fetchTodo(todoId)

    if (!todo.id) return notFound();

  return (
    <div className={styles.container}>
        <h2>#{todo.id}: {todo.title}</h2>
        <p  className={styles.borderBottom}>Completed: {todo.completed ? "Yes" : "Nope"} </p>
        <p  className={styles.user}>By User: {todo.userId}</p>
    </div>
  )
}

export default TodoPage