import React from "react";
import { KETO_IMAGES, VIDEOS } from "@images";

function Intro(props) {
    return (
        <>
            <div className="w-full laptop:w-1/2 h-full">
                <div className="w-full h-full flex justify-center items-center fade-up">
                    <div
                        className="absolute bg-mobile-border bg-contain bg-no-repeat bg-center flex justify-center items-center
                                    small2:w-[250px] small2:h-[500px]
                                    smallphone:w-[220px] smallphone:h-[440px]
                                    w-[280px] h-[550px]
                                    tablet:w-[320px] tablet:h-[650px]
                                    mac:w-[330px] mac:h-[660px]
                                    "
                    >
                        <div className="relative flex justify-center items-center
                                    small2:w-[205px] small2:h-[410px]
                                    smallphone:w-[180px] smallphone:h-[360px]
                                    w-[230px] h-[450px] 
                                    tablet:w-[270px] tablet:h-[550px]
                                    mac:w-[275x] mac:h-[550px]
                                    ">
                            <video
                                className="object-contain w-auto h-auto rounded-xl"
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
            <div className="hidden laptop:block laptop:w-1/2 h-full">
                <div className="flex flex-col h-full justify-between py-4 mac:py-0">
                    <div className="fade-up w-full h-[200px] mac:h-[180px]">
                        <img src={KETO_IMAGES.weight} alt={KETO_IMAGES.weight} className='object-contain w-fit h-full' />
                    </div>
                    <div className="fade-up w-fit h-[200px] mac:h-[180px]">
                        <img src={KETO_IMAGES.mood} alt={KETO_IMAGES.mood} className='object-contain w-full h-full' />
                    </div>
                    <div className="fade-up w-fit h-[200px] mac:h-[180px]">
                        <img src={KETO_IMAGES.step} alt={KETO_IMAGES.step} className='object-contain w-full h-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro