import React from 'react';
import { Segment, Grid, Divider } from 'semantic-ui-react'

export default function WorkDisplay(){
    return(
        <>
            <Segment>
                Please see more details on <a href="https://www.linkedin.com/in/allie-delano-bateman">LinkedIn</a>
                <br />
                <Divider />
                <br />
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column width={5} textAlign="left">
                            <h3>Ford Next Generation Learning</h3>
                            <p>Consultant <br /> (2021- Present)</p>
                            <p>Community Relations Director <br /> (2016 - 2021)</p>

                        </Grid.Column>
                        <Grid.Column width={9} textAlign="left">
                            <ul>
                                <li>Program manager for the Ford NGL Roadmap (a five-phase process for transforming education and community partnerships through the career academy model</li> 
                                <li>Supported a team of 15 Ford NGL Coaches</li> 
                                <li>Developed a relational database system for human resource tracking and forecasting</li>
                                <li>Managed multi-year contracts and invoicing for dozens of clients</li>
                                <li>Streamlined operations organization-wide through developing and implementing technology solutions</li>
                
                            </ul>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        

                        </Grid.Column>
                    </Grid.Row>

                
                
                
                </Grid>


            </Segment>

        </>
    )
}