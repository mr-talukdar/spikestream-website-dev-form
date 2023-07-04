import React from "react";
import { VECTOR_FLOW_IMAGES } from "@images";

function Sec1() {
    return (
        <div className="h-full w-full flex flex-row items-center justify-center laptop:justify-start gap-x-7">
            <img src={VECTOR_FLOW_IMAGES.landing1} alt={VECTOR_FLOW_IMAGES.landing1} className='object-contain h-fit w-8/12 max-w-[1200px] fade-up hidden laptop:block' />
            <img src={VECTOR_FLOW_IMAGES.landing2} alt={VECTOR_FLOW_IMAGES.landing2} className='object-contain smallphone:w-[200px] w-[290px] laptop:w-[210px] ultrawide:w-[330px] h-full fade-up' />
        </div>
    )
}

export default Sec1