import React from "react";
import Header from "./header";


export default function Hero(){
    return(
        <>
            <Header />
            <div className="hero  mx-auto overflow-hidden">
                <div className="mx-4 relative h-[740px] lg:h-[820px]  lg:flex lg:flex-row lg:justify-between lg:items-center border border-neutral-700 overflow-hidden">
                    <img className="h-full w-full object-cover" src="https://manifold.xyz/assets/home-hero-bg.be43f4e5.svg" alt="" />
                    <div className="otherdet w-full absolute inset-0 mx-auto lg:flex lg:flex-row-reverse">
                        <div className="imgs relative p-3 flex justify-center lg:w-7/12  lg:justify-start lg:items-center lg:pr-28">
                            <div className="vid-sec rounded-2xl h-[480px] w-[390px] lg:h-[750px] lg:w-auto overflow-hidden">
                                <video className="w-full h-full" autoPlay loop src="https://manifold.xyz/assets/home-hero-art.0a8432db.mp4"></video>
                            </div>
                            <img className="absolute h-[150px] sm:h-[200px] w-auto lg:h-[350px]  top-16 lg:top-[30%] right-[-10%] sm:right-[0%]" src="https://manifold.xyz/assets/home-hero-contract.2e28db6e.png" alt="" />
                        </div>

                        <div className="det p-8 lg:px-20 lg:absolute lg:w-1/3 lg:flex lg:left-0 lg:flex-col lg:justify-end lg:mb-16 lg:h-full lg:z-50 lg:gap-y-6 bottom-20">
                            <p className="uppercase text-xs">Growing the web 3 Eco System</p>
                            <p className="uppercase text-4xl lg:text-[100px] font-bold pb-4 lg:leading-[80%]">FOR CREATORS</p>
                            <p className="text-sm">Manifold empowers digital creators with tools and applications enabling true creative sovereignty and the ability to create innovative NFT experiences for their audiences.</p>
                        </div>
                    </div>
                    <div className="social-media">
                        <h1>  </h1>
                    </div>
                </div>
            </div>
        </>
    )
}