import React from "react";
import Hero from "../components/Hero";
import Header from "../components/header";
import Footer from "../components/footer";
import devHero from "../components/devHero";
import DevHero from "../components/devHero";
import Products from "../components/products";
import Recents from "../components/recents";


export default function DevelopersPage(){
    return(
        <div className="devs-page">
            <Header />
            <DevHero />
            <Products />
            <Recents />
            <Footer />
        </div>
    )
}