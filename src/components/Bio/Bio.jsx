import React from 'react';
import { Segment, Image } from 'semantic-ui-react'
import './Bio.css'
import picture from '../../images/me.png'

export default function Bio(){
    return(
        <>
            <div className="bio-profile">
                <br />
                <Segment className="bio-segment" textAlign="left">
                    <Image src={picture} size="small" floated="right" inline spaced/>
                    <h3>
                    Full Stack Developer  |  Educator  |  Adventurer
                    </h3>

                    <p>
                        Friends and colleagues (and even my own mom) call me “Adventure Allie.”  
                        I run in the mountains, jump from planes, and love experiencing the world 
                        around me and learning as much as I can at every opportunity.  Originally from Virginia, I’ve lived in San Diego since early 2020 and it’s 
                        quickly become home.
                    </p>
                    <p>
                        Although I’ve never worked in tech, I’ve always looked for ways to make life easier 
                        through creating systems and adapting technology. Over the last few years, I’ve 
                        designed and implemented systems for human resource allocation and forecasting, partnerships, 
                        project management, training new team members, cataloguing tools and resources, and data 
                        collection. Recently, as I tried to update some of these systems to make them more efficient 
                        and collaborative, I found my tech skills kept hitting a wall. Unsatisfied with 
                        accepting this block, I enrolled in a full-time Software Engineering Immersive program and 
                        added full-stack development skills to my toolkit.
                    </p>
                    <p>
                        I’m excited to keep creating, building, and innovating and look forward to working with 
                        organizations I’ve known for years, as well as those I have yet to meet. My goal is to 
                        continue helping tiny teams with big dreams to scale their impact with technology and 
                        systems that truly fit their needs. If you’d like to build something together, please 
                        get in touch!
                    </p>
                    <br />
                </Segment>
            </div>

        </>
    )
}