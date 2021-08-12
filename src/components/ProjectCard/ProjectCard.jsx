import React, { useState } from 'react';
import { Card, Accordion, Icon } from 'semantic-ui-react'

export default function ProjectCard(){
    // const [activeIndex, setActiveIndex] = useState(0)
    // const onTitleClick = (index) => {
    //     setActiveIndex(index)
    // }
    // const active = index === activeIndex
    
    return(
        <>
            <Card fluid blue>
                <h4>Project Name</h4>
                <h4>Image</h4>
                <h4>Description</h4>
                <Accordion>
                    <Accordion.Title
                        
                    >
                        <Icon name="dropdown" />
                        More Details
                    </Accordion.Title>
                    <Accordion.Content>
                        <p>So much more content omg it's going to be amazing and wonderful and is a great discription of something.</p>
                    </Accordion.Content>
                </Accordion>
                
            </Card>
        </>
    )
}