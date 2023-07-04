import React from "react";
import { KOTAK_NET_IMAGES } from "@images";

function Sec1() {
    return (
        <div className="w-full h-full flex flex-row gap-x-12">
            <img src={KOTAK_NET_IMAGES.landing1} alt={KOTAK_NET_IMAGES.landing1} className='object-contain h-full w-full tablet:w-[30%] max-w-[500px] fade-up tablet:w-[30%]' />
            <img src={KOTAK_NET_IMAGES.landing2} alt={KOTAK_NET_IMAGES.landing2} className='smallphone:hidden object-contain h-full w-[30%] max-w-[500px] fade-up' />
            <img src={KOTAK_NET_IMAGES.landing3} alt={KOTAK_NET_IMAGES.landing3} className='hidden tablet:block object-contain h-full w-[30%] max-w-[500px] fade-up' />
        </div>
    )
}

export default Sec1