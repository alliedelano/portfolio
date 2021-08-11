import React from 'react';
import {Icon} from 'semantic-ui-react'
import './Header.css'

export default function HeaderComp(){
    return(
        <>
            <div className="headerdiv">
                <div className="name">
                    <h2>ALLIE DELANO BATEMAN</h2>
                </div>
                <div className="icons">
                    <Icon name="github" size="large" />
                    <Icon name="linkedin" size="large"/>
                    <Icon name="instagram" size="large"/>
                    <Icon name="mail" size="large"/>
                </div>
            </div>
        </>
    )
}