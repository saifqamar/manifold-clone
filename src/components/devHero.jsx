import React from "react";


export default function DevHero(){
    return(
        <div className="hero  mx-auto overflow-hidden">
            <div className="mx-4 relative h-[740px] lg:h-[840px]  lg:flex lg:flex-row lg:justify-between lg:items-center border border-neutral-700 overflow-hidden">
                <img className="h-full w-full object-cover" src="https://manifold.xyz/assets/developers-hero-bg.e0622ab7.svg" alt="" />
                <div className="otherdet w-full absolute inset-0 mx-auto lg:flex lg:flex-row-reverse">
                    <div className="imgs relative p-3 flex justify-center lg:w-2/4  lg:h-full  lg:justify-start lg:items-center lg:pr-28">
                        <div className="vid-sec relative rounded-2xl  lg:h-atuo   lg:w-full overflow-hidden">
                            <video className="w-full absolute p-5 pt-10 h-full object-cover rounded-xl" src="https://manifold.xyz/assets/developers-hero-art.a1ec60b5.mp4"></video>
                            <img className="z-60 h-full w-full" src="https://manifold.xyz/assets/developers-hero-browser.3c83fb96.svg" alt="" />
                        </div>
                        <img className="absolute h-[250px] lg:h-[350px]  top-16 lg:top-auto lg:bottom-[2%] left-[-30%]" src="https://manifold.xyz/assets/developers-hero-editor.4d27f254.svg" alt="" />
                        <img className="absolute h-[250px] lg:h-[200px]  top-16 lg:top-[15%] left-[-20%]" src="https://manifold.xyz/assets/developers-hero-widget.08fcad43.svg" alt="" />
                    </div>

                    <div className="det p-8 lg:absolute lg:w-1/3 lg:flex lg:left-0 lg:flex-col lg:justify-end lg:mb-16 lg:h-full lg:z-50 lg:gap-y-6 bottom-20">
                        {/* <p className="uppercase text-xs">Growing the web 3 Eco System</p> */}
                        <p className="uppercase text-4xl lg:text-[100px] font-bold pb-4 lg:leading-[80%]">DEVELOPERS</p>
                        <p className="text-sm">Manifold empowers digital creators with tools and applications enabling true creative sovereignty and the ability to create innovative NFT experiences for their audiences.</p>
                    </div>
                </div>
                <div className="social-media">
                    <h1>  </h1>
                </div>
            </div>
        </div>
    )
}