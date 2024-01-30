import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";




export default function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [homeTabOpen, setHomeTabOpen] = useState(false);
    const [creatorsTab, setCreatorTab] = useState(false);
    const [drpDownOpen, setDrpDownOPen] = useState(false);



   

    let location = useLocation().pathname;
    

    console.log(location === '/');

    const chHomeState = () => {
        let drpDn = document.getElementById('dropdown-tab');
        // setHomeTabOpen(true);
        setCreatorTab(false)
        setDrpDownOPen(false)

        // console.log(drpDn)
        
    }


    const onDevStateCh = () => {
        setCreatorTab(false);
        setDrpDownOPen(false);
    }


    

    const chCreatorState = () => {
        setDrpDownOPen(true);
        setCreatorTab(true);
        let aboutDn = document.getElementById('about-tab');
        let creatorTab = document.getElementById('creators-tab');
        // console.log(drpDn)
        aboutDn.classList.add('hidden');
        aboutDn.classList.remove('flex');

        
        creatorTab.classList.add('flex');
        creatorTab.classList.remove('hidden');
        
        

        

    }

    const onLaunchStatCh = () =>{
        setCreatorTab(false);
        setDrpDownOPen(false);
    }

    const onAboutStatCh = () => {
        setDrpDownOPen(true);
        setCreatorTab(true);

        let aboutDn = document.getElementById('about-tab');
        let creatorTab = document.getElementById('creators-tab');
        // console.log(drpDn)
        aboutDn.classList.add('flex');
        aboutDn.classList.remove('hidden');

        creatorTab.classList.add('hidden');
        creatorTab.classList.remove('flex');


    }

    const chDrpDnState = ()=> {
        setDrpDownOPen(false);
        setCreatorTab(false)
        console.log('ch drp down working')
    }

    const openNav = () =>{
        setIsNavOpen(!isNavOpen)
    }

    return(
        <div className="all pt-4 mx-auto">
            <div className="relative mx-4 lg:h-[74px] lg:flex lg:flex-row lg:justify-between lg:items-center lg:border lg:border-neutral-700">
                <div className="up relative bg-black z-50 lg:h-full flex flex-row justify-between items-center border lg:border-none border-neutral-700">
                    <div className="logo lg:h-full flex flex-row items-center ">
                        <div className="icon h-[58px] lg:h-full w-full text-white p-2 md:border-r border-neutral-700">
                            <img className="w-auto h-full" src="https://pbs.twimg.com/profile_images/1628643851383758848/YlfKkRWk_400x400.jpg" alt="" />
                        </div>
                        <p className="uppercase text-white font-semibold pl-3">Manifold</p>
                    </div>
                    <div onClick={openNav} className="lg:hidden menu-btn cursor-pointer flex items-center uppercase text-xs hover:text-black hover:bg-white h-full p-5 border-l border-neutral-700">
                        Menu
                    </div>   
                </div>

                <div className={isNavOpen ? "absolute lg:static bg-white bg-opacity-20 backdrop-blur-lg h-screen z-30 w-full  lg:h-full flex flex-col lg:flex-row lg:justify-end lg:items-center lg:bg-black overflow-hidden" : 'hidden navbar lg:flex flex-col-reverse lg:h-full lg:flex-row lg:items-center overflow-hidden'}>
                        <div className="flex flex-col lg:flex-row lg:h-full lg:items-center">
                            {/* lg:hover:border-white lg:hover:border-b-4 lg:hover:border-x-0 lg:hover:border-t-0 */}
                            <Link to={'/'}  onMouseOver={chHomeState} className={location === '/' ? `px-4 order-2 lg:order-none h-[60px] lg:h-full uppercase flex flex-row justify-center text-xs lg:text-sm items-center text-white bg-black border border-neutral-700 lg:border-none after:absolute after:content-['▲'] after:text-white after:bg-black after:bottom-5  after:h-0 after:z-50` : `px-4 order-2 lg:order-none h-[60px] lg:h-full uppercase flex flex-row justify-center text-xs lg:text-sm items-center text-white bg-black border border-neutral-700 lg:border-none hover:after:absolute hover:after:content-['▲'] hover:after:text-white hover:after:bg-black hover:after:bottom-5  hover:after:h-0 hover:after:z-50`}>Home</Link>
                            <Link to={'/creators'} onMouseOver={chCreatorState} className={location === '/creators' ? "px-4 order-2 lg:order-none h-[60px] lg:h-full uppercase flex flex-row justify-center text-xs lg:text-sm items-center text-white bg-black border border-neutral-700 lg:border-none after:absolute after:content-['▲'] after:text-white after:bg-black after:bottom-5  after:h-0 after:z-50" : "px-4 order-2 lg:order-none h-[60px] lg:h-full uppercase flex flex-row justify-center text-xs lg:text-sm items-center text-white bg-black border border-neutral-700 lg:border-none hover:after:absolute hover:after:content-['▲'] hover:after:text-white hover:after:bg-black hover:after:bottom-5  hover:after:h-0 hover:after:z-50"}>Creators</Link>
                            <Link to={'/developers'} onMouseOver={onDevStateCh} className={location === '/developers' ? "px-4 order-2 lg:order-none h-[60px] lg:h-full uppercase flex flex-row justify-center text-xs lg:text-sm items-center text-white bg-black border border-neutral-700 lg:border-none after:absolute after:content-['▲'] after:text-white after:bg-black after:bottom-5  after:h-0 after:z-50" : "px-4 order-2 lg:order-none h-[60px] lg:h-full uppercase flex flex-row justify-center text-xs lg:text-sm items-center text-white bg-black border border-neutral-700 lg:border-none hover:after:absolute hover:after:content-['▲'] hover:after:text-white hover:after:bg-black hover:after:bottom-5  hover:after:h-0 hover:after:z-50"}>Developers</Link>
                            <Link to={'/about'} onMouseOver={onAboutStatCh} className={location === '/about' ? "px-4 order-2 lg:order-none h-[60px] lg:h-full uppercase flex flex-row justify-center text-xs lg:text-sm items-center text-white bg-black border border-neutral-700 lg:border-none after:absolute after:content-['▲'] after:text-white after:bg-black after:bottom-5  after:h-0 after:z-50" : "px-4 order-2 lg:order-none h-[60px] lg:h-full uppercase flex flex-row justify-center text-xs lg:text-sm items-center text-white bg-black border border-neutral-700 lg:border-none hover:after:absolute hover:after:content-['▲'] hover:after:text-white hover:after:bg-black hover:after:bottom-5  hover:after:h-0 hover:after:z-50"}>About</Link>
                            <button onMouseOver={onLaunchStatCh} className="bg-white cursor-pointer bg-opacity-20 order-1 lg:order-none lg:bg-neutral-800 w-full p-4 my-4 lg:h-full lg:my-0 lg:flex lg:items-center lg:text-sm lg:hover:text-black lg:hover:bg-white uppercase">L Launch Studio</button>
                        </div>
                        <div id="dropdown-tab" onMouseLeave={chDrpDnState}  className={creatorsTab || drpDownOpen ? "dropdown-tab absolute z-[200] top-[98%] right-[0%] h-[100px] overflow-hidden w-full bg-white bg-opacity-20 backdrop-blur-lg" : "dropdown-tab absolute z-[200] top-[98%] right-[0%] h-[0px] overflow-hidden w-full bg-black bg-opacity-90 "}>
                            <div id="creators-tab" className="creators-tab h-full flex flex-col justify-center items-end w-3/4">
                                <img className="w-12 h-12" src="data:image/png;base64,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" alt="" />
                                <p>Press Kit</p>
                            </div>

                            <div id="about-tab" className="about-tab h-full flex flex-col justify-center items-center">
                                <img className="w-12 h-12" src="data:image/png;base64,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" alt="" />
                                <p>dress Kit</p>
                            </div>
                        </div>
                </div>
            </div>  
        </div>
    )
}