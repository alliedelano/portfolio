import React from 'react';
import { Segment, Grid, Divider, Card } from 'semantic-ui-react'

export default function WorkDisplay(){
    return(
        <>
            <Segment>
                Please see more details and additional work experience on <a href="https://www.linkedin.com/in/allie-delano-bateman">LinkedIn</a>
                <br />
                <Divider />
                <br />
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column textAlign="left">
                            <h2>WORK EXPERIENCE</h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={5} textAlign="left">
                            <h4>Ford Next Generation Learning</h4>
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
                        <Grid.Column width={5} textAlign="left">
                            <h4>The Edge Foundation</h4>
                            <p>Consultant & Facilitator <br /> (2020 - Present)</p>

                        </Grid.Column>
                        <Grid.Column width={9} textAlign="left">
                            <ul>
                                <li>Support a variety of ongoing projects, particularly around scaling the model across the UK</li>
                                <li>Operationalized a vision for "Edge Future Learning"</li>
                                <li>Facilitated a series of visioning and strategic planning workshops</li>
                            </ul>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider />
                    <Grid.Row>
                        <Grid.Column textAlign="left">
                            <h2>SKILLS</h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row divided>
                        <Grid.Column width={5} textAlign="left">
                            <h4>SOFTWARE ENGINEERING</h4>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Python</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Django</li>
                                <li>PostgreSQL</li>
                            </ul>

                        </Grid.Column>
                        <Grid.Column width={5} textAlign="left">
                            <h4>LEADERSHIP & MANAGEMENT</h4>
                            <ul>
                                <li>Director-level Management</li>
                                <li>Operations & Forecasting</li>
                                <li>Product, Project, & Program Management</li>
                                <li>Training & Onboarding</li>
                                <li>Contracts & Invoicing</li>
                                <li>Agile Methodologies</li>
                                <li>Facilitation</li>
                            </ul>

                        </Grid.Column>
                        <Grid.Column width={5} textAlign="left">
                            <h4>ADDITIONAL TOOLS & PLATFORMS</h4>
                            <ul>
                                <li>Basecamp</li>
                                <li>Airtable</li>
                                <li>Zoom</li>
                                <li>Adobe Connect</li>
                            </ul>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <h2>EDUCATION</h2>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                        <Card>
                            <Card.Header><h4>GENERAL ASSEMBLY</h4></Card.Header>
                            <Card.Content>
                                <p>Software Engineering Immersive</p>
                                <p>May 2021 - August 2021</p>
                            </Card.Content>
                            <Card.Content extra>
                                <p>Online</p>
                            </Card.Content>
                        </Card>
                        </Grid.Column>
                        <Grid.Column width={3}>
                        <Card>
                            <Card.Header><h4>GENERAL ASSEMBLY</h4></Card.Header>
                            <Card.Content>
                                <p>Certificate, Product Management</p>
                                <p>December 2020</p>
                            </Card.Content>
                            <Card.Content extra>
                                <p>Online</p>
                            </Card.Content>
                        </Card>
                        </Grid.Column>
                        <Grid.Column width={3}>
                        <Card>
                            <Card.Header><h4>UNIVERSITY OF VIRGINIA</h4></Card.Header>
                            <Card.Content>
                                <p>MPP, Leadership & Public Policy</p>
                                <br />
                            </Card.Content>
                            <Card.Content extra>
                                <p>Charlottesville, VA</p>
                            </Card.Content>
                        </Card>
                        </Grid.Column>
                        <Grid.Column width={3}>
                        <Card>
                            <Card.Header><h4>UNIVERSITY OF NORTH CAROLINA</h4></Card.Header>
                            <Card.Content>
                                <p>M.Ed., School Counseling</p>
                                <p>2011</p>
                            </Card.Content>
                            <Card.Content extra>
                                <p>Chapel Hill, NC</p>
                            </Card.Content>
                        </Card>
                        </Grid.Column>
                        <Grid.Column width={3}>
                        <Card>
                            <Card.Header><h4>UNIVERSITY OF VIRGINIA</h4></Card.Header>
                            <Card.Content>
                                <p>BA, African-American Studies; Anthropology</p>
                                <p>2009</p>
                            </Card.Content>
                            <Card.Content extra>
                                <p>Charlottesville, VA</p>
                            </Card.Content>
                        </Card>
                        </Grid.Column>
                    </Grid.Row>

                
                
                
                </Grid>


            </Segment>

        </>
    )
}