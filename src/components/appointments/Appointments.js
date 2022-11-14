import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import NavBar from "../elements/NavBar/NavBar";
import Swal from 'sweetalert2';
import { useState } from "react";
import Footer from "../elements/Footer/Footer";
import { useLayoutEffect } from "react";

export default function Appointments() {
    const token = localStorage.getItem("TOKEN");
    const [modelEmail, setModelEmail] = useState({
        name: '',
        email: '',
        phone_number: '',
        message: ''
    });

    useLayoutEffect(() => {
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("AUTH");
    }, []);

    const handleSubmit = () => {
        if(!!!modelEmail.name || !!!modelEmail.email || !!!modelEmail.phone_number || !!!modelEmail.message){
            Swal.fire({
                position: 'top-center',
                icon: 'warning',
                title: "Completa los campos obligatorios",
                showConfirmButton: false,
                timer: 1500
            });
        }else{
            axios.post(process.env.REACT_APP_API + '/email', modelEmail, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).then(data => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: data?.data?.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            }).catch(err => {
                console.log(err);
            })
        }
    }

    return (
        <>
            <NavBar img="assets/background-two.png" />
            <Grid container className="appointments center">
                <Grid item className="appointments-container">
                    <Grid container className="center">
                        <Typography variant="h2" className="title-home">Contactanos</Typography>
                    </Grid>
                    <Grid className="c-input">    
                        <Grid container className="container-input">
                            <Typography>Nombre*</Typography>
                            <TextField type="text" value={modelEmail.name} name="name" className="textField" placeholder="Nombre" onChange={(e) => {setModelEmail({...modelEmail, name: e.target.value})}} />
                        </Grid>
                        <Grid container className="container-input">
                            <Typography>Correo*</Typography>
                            <TextField type="email" value={modelEmail.email} name="email" className="textField" placeholder="Correo" onChange={(e) => {setModelEmail({...modelEmail, email: e.target.value})}} />
                        </Grid>
                        <Grid container className="container-input">
                            <Typography>Teléfono*</Typography>
                            <TextField type="text" value={modelEmail.phone_number} name="phone_number" className="textField" placeholder="Teléfono" onChange={(e) => {setModelEmail({...modelEmail, phone_number: e.target.value})}} />
                        </Grid>
                    </Grid>
                    <Grid container className="c-textArea">
                        <Grid container className="container-input">
                            <Typography>Mensaje*</Typography>
                            <textarea value={modelEmail.message} name="message" className="textArea" onChange={(e) => {setModelEmail({...modelEmail, message: e.target.value})}} />
                        </Grid>
                    </Grid>
                    <Grid container className="center">
                        <Button onClick={handleSubmit} className="btn-send">Enviar</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}