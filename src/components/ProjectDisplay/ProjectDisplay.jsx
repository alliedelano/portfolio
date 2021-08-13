import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard'

export default function ProjectDisplay( { projects }){
    return(
        <>
            <div className="project-display">
                {projects.map(project => 
                    <ProjectCard project={project} />
                    )}

            </div>  
            <br />
            <br />
            <br />
        </>
    )
}