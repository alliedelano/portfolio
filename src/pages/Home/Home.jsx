import React from 'react'
import HeaderComp from '../../components/Header/Header'
import About from '../../components/About/About'
import NavBar from '../../components/NavBar/NavBar'
import './Home.css'


export default function Home(){
    return(
        <>
            <div className="home">
                <HeaderComp />
                <NavBar />
                <About />
            </div>
        </>
    )
}