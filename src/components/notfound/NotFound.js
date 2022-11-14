import { Button, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import React from "react";
import Footer from "../elements/Footer/Footer";
import { useLayoutEffect } from "react";

export default function NotFound() {
    const navigate = useNavigate();
    useLayoutEffect(() => {
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("AUTH");
    }, []);

    return (
        <>
            <Grid container className="notFound">
                <Button variant="outlined" onClick={(e) => navigate('/')}>Regresar al inicio</Button>
            </Grid>
            <Footer />
        </>
    )
}