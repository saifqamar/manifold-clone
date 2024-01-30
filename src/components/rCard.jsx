import React from "react";


export default function RCard(props){
    return(
        <div className={props.reverse ? "rcard lg:flex  lg:flex-row-reverse lg:w-full relative " : "card w-full relative "}>
            <div className="img mb-12 flex justify-center inset-0 lg:absolute">
                <img className={props.reverse ? "w-full h-full object-contain max-w-[600px] lg:max-w-[40%] lg:mr-auto lg:ml-[5%]" : "w-full h-full object-contain max-w-[600px] lg:max-w-[40%] lg:ml-auto lg:mr-[5%]"} src="https://manifold.xyz/assets/developers-marketplace.a3fd802a.png" alt="" />
            </div>
            <div className={props.reverse ? "lg:flex lg:flex-col  lg:justify-center lg:w-1/2 px-8 py-11 lg:py-20 lg:px-16 z-30" : "det lg:flex lg:flex-col lg:w-1/2 px-8 py-11 lg:py-20  z-30"}>
                <p className="text-xs uppercase">Featured</p>
                <h1 className="text-3xl lg:text-8xl font-bold mb-5 py-1">MANIFOLD GALLERY</h1>
                <p className="text-sm mb-5">
                    A zero fee sales ecosystem enabling anyone to list their own work while automatically rewarding those who help creators find their next collector.
                </p>

                <button className=" bg-black text-sm w-full h-[56px] px-4 mb-2 flex flex-row justify-between items-center hover:bg-white hover:text-black border border-neutral-700 uppercase">Go To Manifold Studio <span>-></span></button>
                <button className=" bg-black text-sm w-full h-[56px] px-4 flex flex-row justify-between items-center hover:bg-white hover:text-black border border-neutral-700 uppercase">Learn More <span>-></span></button>
            </div>
        </div>
    )
}