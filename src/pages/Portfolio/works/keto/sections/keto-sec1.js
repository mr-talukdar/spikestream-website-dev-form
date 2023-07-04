import React from "react";
import { KETO_IMAGES, VIDEOS } from "@images";

function Intro(props) {
    return (
        <>
            <div className="w-full laptop:w-1/2 h-full">
                <div className="w-full h-full flex justify-center items-center fade-up">
                    <div
                        className="bg-mobile-border bg-contain bg-no-repeat bg-center h-full w-10/12 tablet:w-full"
                    >
                        <div className="relative inset-0 flex justify-center items-center w-full h-full p-3 tablet:p-20 laptop:p-4">
                            <div>
                                <video
                                    className="object-contain w-full h-full rounded-xl"
                                    ref={props.videoRef}
                                    src={VIDEOS.keto_long}
                                    loop
                                    muted
                                    preload="auto"
                                    autoPlay
                                    playsInline={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden laptop:block laptop:w-1/2 h-full">
                <div className="flex flex-col h-full justify-between py-12">
                    <div className="fade-up w-full h-[32%]">
                        <img src={KETO_IMAGES.weight} alt={KETO_IMAGES.weight} className='object-contain w-full h-full' />
                    </div>
                    <div className="fade-up w-full h-[32%]">
                        <img src={KETO_IMAGES.mood} alt={KETO_IMAGES.mood} className='object-contain w-full h-full' />
                    </div>
                    <div className="fade-up w-full h-[32%]">
                        <img src={KETO_IMAGES.step} alt={KETO_IMAGES.step} className='object-contain w-full h-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro