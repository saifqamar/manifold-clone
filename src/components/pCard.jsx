import React from "react";


export default function PCard(props){
    return(
        <div className={"p-card grid grid-cols-1  w-[400px] border border-neutral-700"}>
            <div className="img bg-neutral-900 ">
                <img className="w-full h-full object-contain" src="https://manifold.xyz/assets/developers-products-widgets.07903727.png" alt="" />
            </div>
            <div className={"det px-4 py-4  "}>
                
                <h1 className="text-sm font-bold mb-4 uppercase">Widgets</h1>
                <p className="text-sm">
                    Add a Connect Wallet button (and more...) with just a few lines of code.
                </p>

            </div>
                <button className={props.isBtn ? "text-sm w-full h-[56px] px-4 flex flex-row justify-between items-center hover:bg-white hover:text-black border border-neutral-700 uppercase" : "hidden text-sm w-full h-[56px] px-4  flex-row justify-between items-center hover:bg-white hover:text-black border border-neutral-700 uppercase"}>Learn More <span>-></span></button>
        </div>
    )
}