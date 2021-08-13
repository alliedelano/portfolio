import React from 'react';
import { Container, Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Tagline.css'

export default function Tagline(){
    return(
        <>  
            <div className="home-tagline">
                <Container stackable fluid text className="about-me-container" >
                    <h2 className="tagline">I'm fueled by curiosity and optimism and tend to jump into everything I do with both feet and my entire heart.
                    I listen, synthesize, create, and advocate, and am a tenacious problem-solver, athlete, and adventurer.
                    </h2>
                    <br />
                    <Link to="/aboutme"><Button color="blue" className="btn">About Me</Button></Link>
                    <Link to="/projects"><Button color="blue" className="btn">Projects</Button></Link>
                    <Link to="/resume"><Button color="blue" className="btn">Resume</Button></Link>
                    <br />
                </Container>
            </div>
        </>
    )
}