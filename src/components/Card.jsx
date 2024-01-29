import React from "react";


export default function Card(props){
    return(
        <div className={props.reverse ? "card grid grid-cols-1 lg:grid-cols-2 lg  border border-neutral-700" : "card grid grid-cols-1 lg:grid-cols-2 border border-neutral-700"}>
            <div className="img bg-neutral-900 ">
                <img className="w-full h-full object-contain" src="https://manifold.xyz/assets/home-gallery.d21e9f05.png" alt="" />
            </div>
            <div className={props.reverse ? "det-reverse px-4 py-11 lg:py-36 lg:mx-20 " : "det px-4 py-11 lg:py-36 lg:mx-20 "}>
                <p className="text-xs uppercase">Featured</p>
                <h1 className="text-3xl font-bold mb-5 py-1">MANIFOLD GALLERY</h1>
                <p className="text-sm mb-5">
                    A zero fee sales ecosystem enabling anyone to list their own work while automatically rewarding those who help creators find their next collector.
                </p>

                <button className="text-sm w-full h-[56px] px-4 mb-2 flex flex-row justify-between items-center hover:bg-white hover:text-black border border-neutral-700 uppercase">Go To Manifold Studio <span>-></span></button>
                <button className="text-sm w-full h-[56px] px-4 flex flex-row justify-between items-center hover:bg-white hover:text-black border border-neutral-700 uppercase">Learn More <span>-></span></button>
            </div>
        </div>
    )
}