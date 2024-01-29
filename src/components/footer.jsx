import React from "react";


export default function Footer(){
    return(
        <div className="footer flex justify-between items-center my-4 lg:my-8 mx-4 lg:mx-8 px-4 border border-neutral-700">
            <div className="left h-[50px] flex items-center gap-x-5">
                <img className="w-auto h-full" src="https://pbs.twimg.com/profile_images/1628643851383758848/YlfKkRWk_400x400.jpg" alt="" />
                <p className="text-[7px] sm:text-xs">© 2023 MANIFOLD</p>
            </div>
            <div className="left flex flex-row items-center gap-x-5">
                <a href="" className="uppercase text-[7px] sm:text-xs">Privacy Policy</a>
                <a href="" className="uppercase text-[7px] sm:text-xs">Terms of Use</a>
                <div className="pl-4 border-l h-full py-2 border-neutral-700 social-Media flex flex-row gap-x-4 items-center">
                    <a href=" " className="w-6 h-auto" >
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png" alt="img 1" />
                    </a>

                    <a href="" className="w-6 h-auto">
                        <img src="https://static-00.iconduck.com/assets.00/twitter-icon-512x422-r42wnosn.png" alt="img 2" />
                    </a>

                    <a href="" className="w-8 h-auto">
                        <img src="https://substack.com/img/substack.png" alt="img 3" />
                    </a>
                </div>
            </div>
        </div>
    )
}