import React, { useState } from 'react';
import './NavBar.css'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const [activeItem, setActiveItem] = useState('home')
    
    function handleItemClick(e){
        e.preventDefault()
        setActiveItem(e.target.name)
    }
    
    return(
        <>
            <div className="menu">
            <Menu stackable>
                <Link to="/"><Menu.Item>Home</Menu.Item></Link>
                <Link to="/projects"><Menu.Item>Projects</Menu.Item></Link>
                <Link to="/resume"><Menu.Item>Resume</Menu.Item></Link>
            </Menu>
            </div>
        </>
    )
}