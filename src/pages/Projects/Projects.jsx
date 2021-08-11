import React from 'react';
import ProjectDisplay from '../../components/ProjectDisplay/ProjectDisplay'
import HeaderComp from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'

export default function Projects(){
    return(
        <>
            <HeaderComp />
            <NavBar />
            <h1>Projects Page</h1>
            <ProjectDisplay />
        </>
    )
}