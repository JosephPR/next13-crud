import "../styles/globals.css";
import Head from "./head.js";
import { Exo } from "@next/font/google";
import Nav from "../components/nav";
import styles from './layout.module.css'

const exo = Exo({
  weight: ["400", "700"],
});
export default function RootLayout({ children }) {
  return (
    <html className={exo.className}>
      <Head />
      <body>
        <Nav />
        <div className={styles.children}>
        {children}
        </div>
        
      </body>
    </html>
  );
}
