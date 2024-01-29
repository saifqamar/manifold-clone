import React from "react";
import ACard from "./aCard";


export default function Web3ManiFold(props){
    return(
        <div className="products-sec">
            <div className="mx-4 mt-4 lg:mt-8 lg:mx-4">
                <h1 className="p-4 border border-neutral-700 text-xs lg:text-lg">Manifold & Web 3</h1>
                <div className="p-scroll bg-none overflow-auto border border-neutral-700">

                    <div className="p-cards p-4 lg:p-8 w-min bg-none flex flex-row gap-x-4 ">

                        <ACard /> 
                        <ACard /> 
                        <ACard /> 
                        <ACard /> 
                        <ACard /> 
                        
                        

                    </div>
                </div>
            </div>
        </div>
    )
}