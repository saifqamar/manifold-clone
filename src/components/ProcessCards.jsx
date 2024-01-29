import React from "react";
import PCard from "./pCard";
import PrCard from "./processCard";


export default function ProcessCards(props){
    return(
        <div className="products-sec">
            <div className="mx-4 mt-4 lg:mt-8 lg:mx-4">
                <h1 className="p-4 border border-neutral-700 text-xs lg:text-lg uppercase">Processes</h1>
                <div className="pr-scroll bg-none overflow-auto border border-neutral-700">

                    <div className="pr-cards p-4 lg:p-8 w-min bg-none flex flex-row gap-x-4 ">

                        <PrCard isBtn={false} heading={'1. Phone screen'} details={'We want to get to know you better, tell you more about the role and company, and answer any questions you might have. This will be a 30 minute conversation with our recruiting team.'}  />
                        <PrCard isBtn={false} heading={'1. Phone screen'} details={'We want to get to know you better, tell you more about the role and company, and answer any questions you might have. This will be a 30 minute conversation with our recruiting team.'} />
                        <PrCard isBtn={false} heading={'1. Phone screen'} details={'We want to get to know you better, tell you more about the role and company, and answer any questions you might have. This will be a 30 minute conversation with our recruiting team.'} />
                        <PrCard isBtn={false} heading={'1. Phone screen'} details={"This assessment applies to those who are new to web3 technologies and is part of our process on a case by case basis. We want to understand your approach and thinking related to web 3 based technologies. We'll send you a project we've put together and have you work on a solution. You'll then present it to one of our founders and discuss your approach and decision making. This typically takes 3-5 hrs."} />
                        <PrCard isBtn={false} heading={'1. Phone screen'} details={'We want to get to know you better, tell you more about the role and company, and answer any questions you might have. This will be a 30 minute conversation with our recruiting team.'} />

                    </div>
                </div>
            </div>
        </div>
    )
}