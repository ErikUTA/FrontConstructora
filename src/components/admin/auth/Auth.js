import React from "react";
import { Outlet } from "react-router-dom";

function PrivateRoutes() {
    const auth = localStorage.getItem("AUTH");

    return (
        auth ? <Outlet /> : window.location.href = "/login"
    )
}

export default PrivateRoutes;

