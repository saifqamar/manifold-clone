import React from "react";



export default function CreatorsHero(){
    return(
        <div className="hero  mx-auto overflow-hidden">
            <div className="mx-4 relative h-[780px] lg:h-[780px]  lg:flex lg:flex-row lg:justify-end lg:items-center border border-neutral-700 overflow-hidden">
                <img className="h-full w-auto  object-cover" src="https://manifold.xyz/assets/studio-hero-bg.17a4c77a.svg" alt="" />
                <div className="otherdet w-full absolute inset-0 mx-auto lg:flex lg:flex-row-reverse">
                    <div className="imgs relative p-3 mx-auto lg:mr-0 mb-20  flex justify-center h-auto w-5/6 lg:w-2/4  lg:h-full  lg:justify-start lg:items-center lg:pr-28">
                        <div className="vid-sec relative rounded-2xl  lg:h-atuo lg:w-full ">
                            <video className="w-full absolute  -bottom-[20%] h-full  rounded-xl " autoPlay loop src="https://manifold.xyz/assets/studio-hero-art.a71aa9ac.mp4"></video>
                            <img className="z-60 h-full w-full" src="https://manifold.xyz/assets/studio-hero-browser.df6857e3.svg" alt="" />
                        </div>
                        <img className="absolute h-[100px] min-[500px]:h-[180px] lg:h-[250px] top-16 lg:top-[50%] right-[2%] backdrop-blur-xl" src="https://manifold.xyz/assets/studio-hero-contract.1c36a4f3.svg" alt="" />
                        <img className="absolute h-[30px] min-[500px]:h-[80px] lg:h-auto  top-auto bottom-[-20%] left-10 lg:top-auto lg:bottom-[15%] lg:left-[-0%]" src="https://manifold.xyz/assets/studio-hero-platforms.1c9ebbff.svg" alt="" />
                    </div>  

                    <div className="det p-8 lg:absolute lg:left-0 lg:w-1/3 lg:flex  lg:flex-col lg:justify-end lg:mb-16 lg:h-full lg:z-50 lg:gap-y-6 bottom-20">
                        <p className="uppercase text-xs">Growing the web 3 Eco System</p>
                        <p className="uppercase text-4xl lg:text-[100px] font-bold pb-4 lg:leading-[80%]">DEVELOPERS</p>
                        <p className="text-sm pb-4">Manifold empowers digital creators with tools and applications enabling true creative sovereignty and the ability to create innovative NFT experiences for their audiences.</p>
                        <p className="text-sm">Our mission is to provide the highest level of provenance and ownership for your NFTs. 
                        By deploying your own Manifold Creator contract, we simplify the process of minting high-quality projects. Our extension framework allows for limitless creation of unique experiences for you and your collectors.</p>
                    </div>
                </div>
                <div className="social-media">
                    <h1>  </h1>
                </div>
            </div>
        </div>
    )
}