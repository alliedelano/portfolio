import React from 'react'
import HeaderComp from '../../components/Header/Header'
import About from '../../components/About/About'
import NavBar from '../../components/NavBar/NavBar'


export default function Home(){
    return(
        <>
            <HeaderComp />
            <NavBar />
            <About />
            
        </>
    )
}