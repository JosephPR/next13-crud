import React from 'react';
import Link from 'next/link';
import styles from './[todoId]/todo.module.css';

const fetchTodos = async () => {
    let pageNum = 1;
    const url = `https://jsonplaceholder.typicode.com/todos?_page=${pageNum}&_limit=50`
    const res = await fetch(url);
    const todos = await res.json();
    // console.log(todos)
    return todos
}

export default async function TodosList() {
    const todos = await fetchTodos()
  return (
    <>
    
    {todos.map((todo) => (
        <p className={styles.inline} key={todo.id} >
            <Link href={`/todos/${todo.id}`}>{todo.id}</Link>
        </p>
    ))}
    </>
  )
}
