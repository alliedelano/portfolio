import React from 'react';
import { Container, Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Tagline.css'

export default function Tagline(){
    return(
        <>  
            <div className="home-tagline">
                <Container stackable fluid text className="about-me-container" >
                    <h2 className="tagline">A systems thinker who recently added full-stack web development skills to her toolkit and is helping tiny teams with big dreams scale their impact.</h2>
                    <br />
                    <Link to="/aboutme"><Button color="blue" className="btn">About</Button></Link>
                    <Link to="/projects"><Button color="blue" className="btn">Projects</Button></Link>
                    <Link to="/resume"><Button color="blue" className="btn">Resume</Button></Link>
                    <br />
                </Container>
            </div>
        </>
    )
}