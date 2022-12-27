import TodosList from "./TodosList";
import styles from "./[todoId]/todo.module.css";

export default function RootLayout({ children }) {
  return (
    <main>
      <div className={styles.todoListChildren}> 
      {children}
      
      </div>
       <h2 className={styles.center}>Todos</h2>
      <div className={styles.todoList}>
     
        <TodosList />
      </div>
    </main>
  );
}
