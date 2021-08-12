import React from 'react';
import { Segment, Image } from 'semantic-ui-react'
import './Bio.css'
import picture from '../../images/me.png'

export default function Bio(){
    return(
        <>
            <div className="bio-profile">

            <Segment className="bio-segment">
                <Image src={picture} size="small" floated="left" inline spaced/>
                <p>Some text</p>
                <p>Other text</p>
            </Segment>

            </div>

        </>
    )
}