import React from "react";
import ACard from "./aCard";
import PartCard from "./partCard";


export default function PartnerSec(props){
    return(
        <div className="products-sec">
            <div className="mx-4 mt-4 lg:mt-8 lg:mx-4">
                <h1 className="p-4 border border-neutral-700 text-xs lg:text-lg">PARTNERS</h1>
                <div className="p-scroll bg-none overflow-auto border border-neutral-700">

                    <div className="p-cards p-4 lg:p-8 w-full bg-none flex flex-row gap-x-4 ">
                        <PartCard img={"https://manifold.xyz/assets/partners-a16z.340b353b.svg"} /> 
                        <PartCard img={"https://manifold.xyz/assets/partners-initialized.a563041d.svg"} /> 
    
                    </div>
                </div>
            </div>
        </div>
    )
}