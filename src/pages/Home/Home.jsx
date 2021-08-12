import React from 'react'
import HeaderComp from '../../components/Header/Header'
import Tagline from '../../components/Tagline/Tagline'
import NavBar from '../../components/NavBar/NavBar'
import './Home.css'


export default function Home(){
    return(
        <>
            <div className="home">
                <HeaderComp />
                <NavBar />
                <Tagline />
            </div>
        </>
    )
}