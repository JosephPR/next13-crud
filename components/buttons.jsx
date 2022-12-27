import React from 'react'
import styles from './components.module.css'

export default function buttons() {
  return (
    <div className={styles.buttonContainer}>
        <a className={styles.buttonPrimary} href="https://github.com/JosephPR/next13-template">Template Repo</a>
        <a className={styles.buttonSecondary} href="https://nextjs.org/">Next Js</a>
    </div>
  )
}
