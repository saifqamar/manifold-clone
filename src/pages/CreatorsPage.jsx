import React from "react";
import Hero from "../components/Hero";
import CreatorsHero from "../components/creatorsHero";
import Header from "../components/header";
import Products from "../components/products";
import RCard  from "../components/rCard";
import Footer from "../components/footer";


export default function CreatorsPage(){
    return(
        <div className="creator-page">
            <Header />
            <CreatorsHero />
            <Products />
            <div className="mx-4 mt-12 lg:mt-8 lg:mx-4 w-full">
                <RCard />
            </div>
            <Footer />
        </div>
    )
}