import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function NavBar(props) {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('.c-item-carrousel', {
            scrollTrigger: {
                trigger: ".c-carrousel",
                toggleActions: 'restart none none none',
            },
            opacity: 0,
            x: -200,
            duration: 2
        });
        gsap.to('.c-item-carrousel', {
            scrollTrigger: {
                trigger: ".c-carrousel",
                toggleActions: 'restart none none none',
            },
            opacity: 1,
            x: 0,
            duration: 2
        });
    }, []);     
 
    return (
        <Grid container className='nav' style={{backgroundImage: `url(${props.img})`}}>
            <Grid container className='nav-menu-container right'>
                <a href="/" className="nav-menu-elements center">Inicio</a>
                <a href="/appointments" className="nav-menu-elements center">Agenda una cita</a>
                <a href="/maintenance" className="nav-menu-elements center">Solicitar mantenimiento</a>
                <a href="/about" className="nav-menu-elements center">Acerca de</a>
                <a href="/login" className="nav-menu-elements center">Login</a>              
            </Grid>      
        </Grid>
    )
}