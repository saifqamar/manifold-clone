import React from "react";
import Card from "./Card";


export default function Cards(){
    return(
        <div className="cards mt-4 lg:mt-8 mx-4 lg:mx-8 grid grid-cols-1 gap-y-4 lg:gap-y-8">
            <Card />
            <Card reverse={true} />
            <Card />
        </div>

    )
}