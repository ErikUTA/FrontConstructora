import { Button, Grid, Typography } from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import NavBar from "../elements/NavBar/NavBar";
import { useDispatch } from 'react-redux';
import { setModalCost, setModalEncargado, setModalImage, setModalName, setModalStatus } from "../elements/store/redux/modalSlice";
import ModalInfo from "../elements/modal/Modal";
import Footer from "../elements/Footer/Footer";
import { useLayoutEffect } from "react";

export default function Home() {
    const dispatch = useDispatch();
    const data = [
        {
            nombre: "Primer Hogar",
            imagen: "assets/casa1.jpg",
            costo: "8,000,000",
            encargado: "Primer encargado"
        },
        {
            nombre: "Segundo Hogar",
            imagen: "assets/casa2.jpg",
            costo: "12,000,000",
            encargado: "Segundo encargado"
        },
        {
            nombre: "Tercer Hogar",
            imagen: "assets/casa3.jpg",
            costo: "10,000,000",
            encargado: "Tercer encargado"
        }
    ];

    useLayoutEffect(() => {
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("AUTH");
    }, []);

    return (
        <>
            <Grid container className="home">
                <NavBar img="assets/background-home.jpg"/>
                <Grid className="cards">
                    <Grid container className="center">
                        <Typography variant="h2" className="title-home">BIENVENIDO</Typography>
                    </Grid>
                    <Grid className="container-card" container spacing={2}>
                        {
                            data.length > 0 && data.map((element, index) => (
                                    <Grid key={index} className="card" item xs={12} sm={6} md={4}>
                                        <div className="item">
                                            <img alt="not found" className="img-card" src={element.imagen}/>
                                            <Button onClick={(e) => {
                                                dispatch(setModalStatus(true));
                                                dispatch(setModalName(element?.nombre));
                                                dispatch(setModalImage(element?.imagen));
                                                dispatch(setModalCost(element?.costo));
                                                dispatch(setModalEncargado(element?.encargado));
                                            }} className="btn-home">Ver información</Button>
                                            {element && (
                                                <ModalInfo data={element}></ModalInfo>
                                            )}
                                        </div>
                                    </Grid>
                                )
                            )
                        }
                    </Grid>
                    <Grid container className="c-carrousel">
                        <Typography variant="h2" className="title-home">Galeria</Typography>
                        <div className="c-item-carrousel">
                            <Carousel className="carrousel">
                                <div>
                                    <img alt="not found" className="img-home" src="assets/casa1.jpg" />
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <img alt="not found" className="img-home" src="assets/casa2.jpg" />
                                    <p className="legend">Legend 2</p>
                                </div>
                                <div>
                                    <img alt="not found" className="img-home" src="assets/casa3.jpg" />
                                    <p className="legend">Legend 3</p>
                                </div>
                            </Carousel>
                        </div>
                    </Grid>
                </Grid>
            </Grid>  
            <Footer />
        </>
    )
}