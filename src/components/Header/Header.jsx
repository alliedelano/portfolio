import React from 'react';
import {Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './Header.css'

export default function HeaderComp(){
    return(
        <>
            <div className="headerdiv">
                <div>
                <Link to="/"><h1 className="name">ALLIE DELANO BATEMAN</h1></Link>
                </div>
                <div className="icons">
                    <a href=""><Icon name="github" size="large" /></a>
                    <a href=""><Icon name="linkedin" size="large"/></a>
                    <a href=""><Icon name="instagram" size="large"/></a>
                    <a href=""><Icon name="mail" size="large"/></a>
                </div>
            </div>
        </>
    )
}