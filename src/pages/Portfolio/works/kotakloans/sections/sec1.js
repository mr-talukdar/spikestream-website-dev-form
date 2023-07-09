import React from "react";
import { KOTAK_LOANS_IMAGES } from "@images";

function Sec1() {
    return (
        <div className="h-full w-full flex flex-row items-center justify-center laptop:justify-start gap-x-7">
            <img src={KOTAK_LOANS_IMAGES.landing1} alt={KOTAK_LOANS_IMAGES.landing1} className='object-contain h-full w-[755px] mac:w-[907px] ultrawide:w-[1361px] fade-up hidden laptop:block' />
            <img src={KOTAK_LOANS_IMAGES.landing2} alt={KOTAK_LOANS_IMAGES.landing2} className='object-contain h-full small2:w-[250px] smallphone:w-[200px] w-[290px] laptop:w-[200px] mac:w-[239px] ultrawide:w-[359px] fade-up' />
        </div>
    )
}

export default Sec1