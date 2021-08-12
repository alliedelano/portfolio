import React from 'react';
import { Container } from 'semantic-ui-react'
import './About.css'

export default function About(){
    return(
        <>  
            <div className="about-me">
                
                <Container fluid text className="about-me-container" >
                    <h2 className="tagline">I'm a systems thinker who recently added full-stack web development skills to my toolkit and am helping tiny teams with big dreams scale their impact.</h2>
                </Container>
            </div>
        </>
    )
}