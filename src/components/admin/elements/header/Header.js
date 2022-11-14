import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Header(props) {

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
    
    const Logout = () => {
        localStorage.removeItem("TOKEN");
        window.location.href = '/login';
    }
 
    return (
        <Grid container className='nav' style={{backgroundImage: `url(${props.img})`}}>
            <Grid container className='nav-menu-container right'>
                <button className="nav-menu-elements center" onClick={Logout}>Logout</button>              
            </Grid>      
        </Grid>
    )
}