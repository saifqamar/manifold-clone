import React from "react";
import Hero from "../components/Hero";
import Header from "../components/header";
import Footer from "../components/footer";
import devHero from "../components/devHero";
import DevHero from "../components/devHero";
import Products from "../components/products";
import Recents from "../components/recents";
import AboutHero from "../components/aboutHero";
import JoinUsSec from "../components/joinUs";
import Web3ManiFold from "../components/web3Mnifold";
import CultureSec from "../components/cultureSec";
import ProcessCards from "../components/ProcessCards";
import PartnerSec from "../components/partnersSec";


export default function AboutPage(){
    return(
        <div className="about-page">
            <Header />
            <AboutHero />
            <Web3ManiFold />
            <PartnerSec />
            <CultureSec />
            <div className="eng mx-4">
                <div className="p-20 pt-0 lg:w-1/2">

                    <h1 className="text-[40px] lg:text-7xl uppercase font-bold lg:pb-4">Engineering Interview Process</h1>
                    <p>An interview loop at Manifold includes 3-4 steps and typically takes 2-3 weeks from start to finish. Here is what you can expect when you interview with us.</p>
                </div>
            </div>
            <ProcessCards />
            <JoinUsSec  isBorder={false} />
            <Footer />
        </div>
    )
}