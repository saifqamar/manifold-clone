import React from "react";
import Header from "../components/header";
import Hero from "../components/Hero";
import PartnerWithSec from "../components/partenerWith";
import Cards from "../components/Cards";
import JoinUsSec from "../components/joinUs";
import Footer from "../components/footer";


export default function LandingPage(){
    return(
        <div>
            {/* <Header /> */}
            <Hero />
            <PartnerWithSec />
            <Cards />
            <JoinUsSec />
            <Footer />
        </div>
    )
}