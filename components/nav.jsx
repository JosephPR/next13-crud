import React from "react";
import Link from "next/link";
import styles from "./components.module.css";

export default function nav() {
  return (
    <div className={styles.nav}>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <Link href="/"> Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/todos"> Dynamic routes</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects"> Database </Link>
        </li>
      </ul>
    </div>
  );
}
