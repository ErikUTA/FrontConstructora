import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, Grid, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setModalStatus } from "../store/redux/modalSlice";

export default function ModalInfo(props) {
    const dispatch = useDispatch();
    const {status, imagen, name, cost, encargado} = useSelector(({ redux }) => {
		return {
			status: redux.modalSlice.status,
			imagen: redux.modalSlice.image,
			name: redux.modalSlice.name,
			cost: redux.modalSlice.cost,
			encargado: redux.modalSlice.encargado
		}
	});
    const handleClose = () => {
        dispatch(setModalStatus(false));
    }

    return (
        <>
            <Dialog
                open={status}
                onClose={handleClose}
            >
                <DialogTitle className='modal-title center'>
                    Nombre de la casa
                </DialogTitle>
                <DialogContent className='modal-content'>
                    <DialogContentText>
                        <Grid container className="img-container">
                            <Grid item className="center mt">
                                <img alt="not found" className="img-modal" src={imagen} />
                            </Grid>
                            <Grid item className="center mt">
                                <div className="p-modal">
                                    <Typography variant="h5"><strong>Nombre:</strong>{name}</Typography>
                                    <Typography variant="h5"><strong>Costo:</strong>{cost}</Typography>
                                    <Typography variant="h5"><strong>Encargado:</strong>{encargado}</Typography>
                                </div>
                            </Grid>
                            <Grid item className="center mt bottom">
                                <Button className="btn-modal" onClick={(e) => dispatch(setModalStatus(false))}>Cerrar</Button>
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}