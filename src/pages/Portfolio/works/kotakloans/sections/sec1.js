import React from "react";
import { KOTAK_LOANS_IMAGES } from "@images";

function Sec1() {
    return (
        <div className="h-full w-full flex flex-row items-center justify-center laptop:justify-start gap-x-7">
            <img src={KOTAK_LOANS_IMAGES.landing1} alt={KOTAK_LOANS_IMAGES.landing1} className='object-contain h-fit w-8/12 max-w-[1200px] fade-up hidden laptop:block' />
            <img src={KOTAK_LOANS_IMAGES.landing2} alt={KOTAK_LOANS_IMAGES.landing2} className='object-contain smallphone:w-[200px] w-[290px] laptop:w-[210px] ultrawide:w-[330px] h-full fade-up' />
        </div>
    )
}

export default Sec1