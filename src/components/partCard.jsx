import React from "react";


export default function PartCard(props){
    return(
        <div className={"p-card   w-full border border-neutral-700 hover:text-black hover:bg-white hover:border-neutral-200"}>
            <div className="img h-[300px]">
                <img className="w-full h-full object-contain " src={props.img} alt="" />
            </div>
            <div className={"det    "}> 
                

                <p className="text-sm px-4 py-4 " >
                    A16z Crypto
                </p>

            </div>
                {/* <button className="text-sm w-full h-[56px] px-4 flex flex-row justify-between items-center hover:bg-white hover:text-black border border-neutral-700 uppercase">Learn More <span>-></span></button> */}
        </div>
    )
}