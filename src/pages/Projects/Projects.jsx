import React from 'react';
import ProjectDisplay from '../../components/ProjectDisplay/ProjectDisplay'
import HeaderComp from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import { projects } from '../../projects'

export default function Projects(){
    return(
        <>
            <HeaderComp />
            <NavBar />
            <h1>Projects</h1>
            <ProjectDisplay projects={projects} />
        </>
    )
}