import React from 'react'
import { PrismaClient } from '@prisma/client'
import style from './db.module.css'
import { formatDate } from '../../lib/utils.js'




export default async function Projects() {

const prisma = new PrismaClient()
const allProjects = await prisma.projects.findMany()
const allTasks = await prisma.tasks.findMany()
console.log(allProjects) 
console.log(allTasks) 
  return (
    <>
    <div className={style.db}>
    <div>
   <h2>Database Projects</h2>
    <br />
    {allProjects.map((project) => (
      <h3 key={project.id}>{project.name}</h3>
    ))}
    
   </div>
  <div>  
      <h2>Tasks</h2>
    <br />
    {allTasks.map((task) => (
      <h3 key={task.id}>{task.name} - {formatDate(task.completedDateTime)}</h3>
    ))}
    </div>
    </div>


    </>
  )
}
