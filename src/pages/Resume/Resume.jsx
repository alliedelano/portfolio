import React from 'react';
import HeaderComp from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import ResumeDisplay from '../../components/ResumeDisplay/ResumeDisplay'


export default function Resume(){
    return(
        <>
            <HeaderComp />
            <NavBar />
            <h1>RESUME</h1>
            <ResumeDisplay />
              
        </>
    )
}