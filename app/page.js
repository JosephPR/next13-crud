import React from "react";
import Buttons from "../components/buttons";
import styles from "./home.module.css";
import { PrismaClient } from '@prisma/client'


export default async function Home() {

const prisma = new PrismaClient()
const allProjects = await prisma.projects.findMany()
console.log(allProjects) 
 return (
    <>

      <h1>This is a Template for the new app directory used in Next 13</h1>
      <p className={styles.content}>
        In Next.js 13, they announced the new app directory (beta). This new
        routing and data fetching system can be incrementally adopted alongside
        your existing pages directory. The app directory provides many benefits,
        including enhanced layouts, co-location of components, tests, and
        styles, component-level data fetching, and more.
      </p>
      <Buttons />
    
    </>
  );
}
