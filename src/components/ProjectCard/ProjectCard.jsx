import React, { useState } from 'react';
import { Card, Icon, Accordion, Divider, Grid, Image } from 'semantic-ui-react'

export default function ProjectCard( {project} ){
    const [active, setActive] = useState(false)
    const onTitleClick = (!active) ? () => setActive(true) : () => setActive(false)
    
    
    return(
        <>
            <Card fluid blue>
                <Grid textAlign="center" stackable>
                    <Grid.Row>
                    <Grid.Column width={10} textAlign="left">
                        <br />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p> 
                        <h5>{project.type}<br />{project.date}</h5>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <br />
                        <Image src={project.image_one}/>
                    </Grid.Column>
                    </Grid.Row>
                    <Divider />
                </Grid>
                <Accordion>
                {active ?
                    <>
                    <Accordion.Title
                        onClick={onTitleClick}
                    >
                        <Icon name="dropdown" rotated="clockwise" size="small" />
                        Fewer Details
                        
                    </Accordion.Title>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column></Grid.Column>
                            <Grid.Column width={10} textAlign="left">
                                <p>{project.additionalDetails}</p>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                    <a href={project.deployedLink}>Check out the live app</a>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                    <a href={project.githubLink}>See More Details on Github</a>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <br />
                    </>
                 
                    
                     : <><Accordion.Title
                        onClick={onTitleClick}
                    >
                        <Icon name="dropdown" rotated="counterclockwise"/>
                        More Details
                    </Accordion.Title></>
                }
                </Accordion>
                
                
                
            </Card>
        </>
    )
}