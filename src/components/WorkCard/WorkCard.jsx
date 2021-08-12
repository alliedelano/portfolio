import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function WorkCard({job}){
    return(
        <>
            <Card fluid blue>
                <Grid textAlign="center" stackable>
                    <Grid.Row>
                    <Grid.Column width={10} textAlign="center">
                        <br />
                        <h3>{job.company}</h3>
                        <p>{job.location}</p> 
                        {job.positions.map(position => {
                            return(
                        <>
                            <p>{position.role}</p>
                            <p>{position.timeframe}</p>
                            {/* <ul>
                                {position.bullets.map(bullet => {
                                    return(
                                    <li>{bullet}</li>
                                    )
                                })}
                            </ul> */}
                        </>
                            )
                        })}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <br />
                    </Grid.Column>
                    </Grid.Row>
                    
                </Grid>
                
            </Card>
        </>
    )
}