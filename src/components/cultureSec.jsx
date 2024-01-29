import React from "react";


export default function CultureSec(props){
    return(
        <div className={props.reverse ? "mt-10 rcard lg:flex   lg:flex-row-reverse lg:w-full relative lg:p-20" : "lg:mt-20 gap-x-5 flex flex-col-reverse p-16 lg:flex  lg:flex-row-reverse  justify-center lg:items-start  lg:w-full lg:p-20"}>
            <div className="img mb-12 flex flex-col justify-center lg:w-1/3">
                <h1 className="text-3xl lg:text-4xl font-bold mb-5 py-1">We Offer</h1>
                <div className="offer-list">
                    <p className="flex py-2 gap-x-4 border-b border-neutral-700"><span>🧑‍💻</span> Distributed, remote team</p>
                    <p className="flex py-2 gap-x-4 border-b border-neutral-700"><span>🧑‍💻</span> Distributed, remote team</p>
                    <p className="flex py-2 gap-x-4 border-b border-neutral-700"><span>🧑‍💻</span> Distributed, remote team</p>
                    <p className="flex py-2 gap-x-4 border-b border-neutral-700"><span>🧑‍💻</span> Distributed, remote team</p>
                    <p className="flex py-2 gap-x-4 border-b border-neutral-700"><span>🧑‍💻</span> Distributed, remote team</p>
                    <p className="flex py-2 gap-x-4 border-b border-neutral-700"><span>🧑‍💻</span> Distributed, remote team</p>
                    <p className="flex py-2 gap-x-4 border-b border-neutral-700"><span>🧑‍💻</span> Distributed, remote team</p>
                    <p className="flex py-2 gap-x-4 border-b border-neutral-700"><span>🧑‍💻</span> Distributed, remote team</p>
                    <p className="flex py-2 gap-x-4 border-b border-neutral-700"><span>🧑‍💻</span> Distributed, remote team</p>
                </div>
            </div>
            <div className={props.reverse ? "det-reverse lg:flex lg:flex-col  lg:justify-center lg:w-1/2 px-8 py-11  lg:px-16 z-30" : "det lg:flex lg:flex-col lg:justify-start lg:w-2/3   lg:py-0  z-30"}>
                
                <h1 className="text-3xl lg:text-4xl font-bold mb-5 py-1">Our Culture</h1>
                <p className="text-base mb-5 leading-8">
                    We're a band of builders united by our belief in creative sovereignty.<br />
                    We're a fully remote, distributed team. As of today, we're a team of 20 led by our 3 founders.<br />
                    We move with speed and collaborate both async and in real time. We have IRL team events about twice a year to build relationships and have fun together in person.<br />
                    We try not to take ourselves too seriously, but we're serious about building useful products.<br />
                    We experiment a lot but we don't ship products without real creator use-cases. We build things to be used.<br />
                    We give ourselves space and creative freedom to work on passion projects alongside team commitments. We value autonomy, ownership, and creativity. We also believe that we learn more and grow faster together.<br />
                    And we have fun. Otherwise, what's the point?
                </p>

                {/* <button className=" bg-black text-sm w-full h-[56px] px-4 mb-2 flex flex-row justify-between items-center hover:bg-white hover:text-black border border-neutral-700 uppercase">Go To Manifold Studio <span>-></span></button>
                <button className=" bg-black text-sm w-full h-[56px] px-4 flex flex-row justify-between items-center hover:bg-white hover:text-black border border-neutral-700 uppercase">Learn More <span>-></span></button> */}
            </div>
        </div>
    )
}