import React from "react";


export default function PrCard(props){
    return(
        <div className={"p-card flex flex-col  w-[400px] border border-neutral-700"}>
            <div className="img h-[249px] bg-neutral-900 ">
                <img className="w-full h-full object-cover" src="https://manifold.xyz/assets/developers-products-widgets.07903727.png" alt="" />
            </div>
            <div className={"det flex flex-col grid-row-start px-4 py-4 lg:px-8 lg:py-8  "}>
                
                <h1 className="text-base font-bold mb-4 uppercase">{props.heading}</h1>
                <p className="text-sm">
                    {props.details}
                </p>

            </div>
                <button className={props.isBtn ? "text-sm w-full h-[56px] px-4 flex flex-row justify-between items-center hover:bg-white hover:text-black border border-neutral-700 uppercase" : "hidden text-sm w-full h-[56px] px-4  flex-row justify-between items-center hover:bg-white hover:text-black border border-neutral-700 uppercase"}>Learn More <span>-></span></button>
        </div>
    )
}