import React from "react";
import Footer from "../elements/footer/Footer";
import Header from "../elements/header/Header";

export default function HomeAdmin() {

    return (
        <>
            <Header img={process.env.PUBLIC_URL + '/assets/banner-admin.jpg'} />
            <Footer />
        </>
        
    )
}