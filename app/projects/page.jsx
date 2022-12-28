import React from 'react'
import { PrismaClient } from '@prisma/client'


export default async function Projects() {


const prisma = new PrismaClient()
const allProjects = await prisma.projects.findMany()
console.log(allProjects) 
  return (
    <>
   
    <h2>Database Projects</h2>
    <br />
    {allProjects.map((project) => (
      <h3 key={project.id}>{project.name}</h3>
    ))}
    </>
  )
}
