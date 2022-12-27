import React from 'react'
import styles from './todo.module.css'


function notFound() {
  return (
    <h2 className={styles.center}>Your Search turned up nothing, sorry.</h2>
  )
}

export default notFound