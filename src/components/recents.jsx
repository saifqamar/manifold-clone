import React from "react";
import RCard from "./rCard";


export default function Recents(){
    return(
        <div className="products-sec">
            <div className="mx-4 mt-12 lg:mt-8 lg:mx-4 w-full">
                <RCard />
                <RCard  reverse={true}/>
                <RCard />
            </div>
        </div>
    )
}