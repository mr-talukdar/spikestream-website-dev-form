import React from "react";
import { VECTOR_FLOW_IMAGES } from "@images";

function Sec1() {
    return (
        <div className="h-full w-full flex flex-row items-center justify-center gap-x-7">
            <img src={VECTOR_FLOW_IMAGES.landing1} alt={VECTOR_FLOW_IMAGES.landing1} className='object-contain h-full w-[755px] mac:w-[830px] ultrawide:w-[1361px] fade-up hidden laptop:block' />
            <img src={VECTOR_FLOW_IMAGES.landing2} alt={VECTOR_FLOW_IMAGES.landing2} className='object-contain h-full small2:w-[250px] smallphone:w-[200px] w-[290px] laptop:w-[200px] mac:w-[220px] ultrawide:w-[359px] fade-up' />
        </div>
    )
}

export default Sec1