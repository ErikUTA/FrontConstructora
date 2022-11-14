import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setRole, setUserName } from "../elements/store/redux/authSlice";
import { useLayoutEffect } from "react";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [dataLogin, setDataLogin] = useState({
        username: '',
        password: ''
    });    
    const [flag, setFlag] = useState(false);
    
    const handleChange = (e) => {
        setDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value 
        });
        setFlag(false);
    }

    useLayoutEffect(() => {
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("AUTH");
    }, []);

    const handleSubmit = () => {
        setFlag(true);
        if(!!dataLogin.username && !!dataLogin.password){
            axios.post(process.env.REACT_APP_API + '/login', dataLogin).then((data) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `Bienvenido ${data?.data?.data?.name}`,
                    showConfirmButton: false,
                    timer: 1500
                });
                dispatch(setUserName(data?.data?.data?.name));
                dispatch(setRole(data?.data?.data?.role_id));
                localStorage.setItem("TOKEN", data?.data?.token);       
                tokenValidate();         
            }).catch(err => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: err.response.data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
            });
        }
    }

    const tokenValidate = () => {
        let token = localStorage.getItem("TOKEN"); 
        axios.get(process.env.REACT_APP_API + '/auth', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(data => {
            if (data.data[0] === 'token') {
                localStorage.setItem("AUTH", token);
                navigate('/auth/admin');                
            } else {
                localStorage.removeItem("AUTH");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    return(
        <Grid container className="login center">
            <Grid item className="div-login">
                <Typography variant="h3" className="title-login">
                    Login
                </Typography>                
                <TextField style={{display: 'block'}} className="input-login" placeholder="Username" name="username" onChange={handleChange}/>
                <TextField type="password" style={{display: 'block'}} className="input-login" placeholder="Password" name="password" onChange={handleChange}/>                
                {
                    !!flag ? (
                        <Grid className="text-alert">
                            <Typography variant="p">{ !!!dataLogin.username && !!!dataLogin.password ? "El usuario y la contraseña son requeridos" : !!!dataLogin.username ? "El usuario es requerido" : !!!dataLogin.password ? "La contraseña es requerida" : null}</Typography>
                        </Grid>
                    ) : null
                }
                <Grid item className="center" id="c-button">
                    <Button onClick={handleSubmit} variant="contained" className="btn-login">Ingresar</Button>
                </Grid>
                <a href="/" className="back center">Regresar</a>
            </Grid>
        </Grid>
    )
}