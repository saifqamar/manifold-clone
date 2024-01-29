import React from "react";


export default function JoinUsSec(props){
    return(
        <div className={props.isBorder ? "joinUs-sec flex flex-col gap-y-5 lg:flex-row lg:justify-between  mt-4 lg:mt-8 mx-4 lg:mx-8 p-8 lg:p-20 border border-neutral-700" : "joinUs-sec flex flex-col lg:flex-row lg:justify-between  mt-4 lg:mt-8 mx-4 lg:mx-8 p-8 lg:p-20"}>
            <div className="sec-img px-4 min-[350px]:w-[300px] min-[280px]:w-[200px] sm:w-[400px] h-auto self-end lg:w-1/2">
                <img className="w-full h-full" src="https://manifold.xyz/assets/about-join-us.c9d8e504.svg" alt="joinus img" />
            </div>
            <div className="det -mt-10 lg:mt-0 lg:self-center lg:w-1/2 lg:pl-28">
                <p className="text-4xl lg:text-7xl font-bold mb-3 py-1 uppercase">Join Us</p>
                <p className="mb-4">The future of digital creators is NFTs. Build it with us.</p>
                <button className="text-sm w-full h-[56px] px-4 mb-2 flex flex-row justify-between items-center hover:bg-white hover:text-black border border-neutral-700 uppercase">Go To Manifold Studio <span>-></span></button>

            </div>
        </div>
    )
}