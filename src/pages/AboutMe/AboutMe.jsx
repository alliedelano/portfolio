import React from 'react';
import HeaderComp from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import Bio from '../../components/Bio/Bio'

export default function AboutMe(){
    return(
        <>
            <HeaderComp />
            <NavBar />
            <h1>ABOUT ME</h1>
            <Bio />
        </>
    )
}