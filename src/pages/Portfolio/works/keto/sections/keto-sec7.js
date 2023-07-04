import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { KETO_IMAGES, VIDEOS } from "@images";
import useOnScreen from "@hooks/useOnScreen";
import * as AnimConfig from '@helpers/animConfig'
import { PrevNext } from '@components'

function KetoSec7() {
    const videoRef = useRef(null);
    const navigate = useNavigate();
    const sectionRef = useRef();
    const reveal = useOnScreen(sectionRef);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        if (!isRevealed)
            setIsRevealed(reveal);
    }, [isRevealed, reveal])


    useEffect(() => {
        if (videoRef && videoRef.current) {
            if (reveal) videoRef.current.play();
            else videoRef.current.pause();
        }
    }, [reveal])

    useEffect(() => {
        if (isRevealed) {
            gsap.to(
                '#ketosec8 .fade-up',
                AnimConfig.fadeUpConfig
            );
        }
    }, [isRevealed]);
    return (
        <div ref={sectionRef} data-scroll-section>
            <div id="ketosec8">
                <div className='w-screen h-fit smallphone:min-h-[400px] min-h-[550px] tablet:min-h-[650px] mac:min-h-[750px] flex items-center justify-center my-20'>
                    <div className='w-full h-full flex items-center justify-center'>
                        <img src={KETO_IMAGES.bg} alt={KETO_IMAGES.bg} className="fade-up w-[450px] tablet:w-full max-w-[800px]" />
                        <div
                            className="absolute bg-mobile-border bg-contain bg-no-repeat bg-center flex justify-center items-center fade-up
                                    smallphone:w-[220px] smallphone:h-[440px]
                                    w-[250px] h-[500px]
                                    tablet:w-[300px] tablet:h-[600px]
                                    mac:w-[350px] mac:h-[700px]
                                    "
                        >
                            <div className="relative flex justify-center items-center
                                    smallphone:w-[180px] smallphone:h-[360px]
                                    w-[200px] h-[450px] 
                                    tablet:w-[245px] tablet:h-[550px]
                                    mac:w-[290px] mac:h-[655px]
                                    ">
                                <video
                                    className="object-contain w-auto h-auto rounded-xl"
                                    ref={videoRef}
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
                <div className="mb-20 basis-1/12 w-full h-full flex flex-col items-center ">
                    <div className="font-medium text-sm fade-up">Download the App</div>
                    <div className="mt-6 flex flex-row gap-6">
                        <img src={KETO_IMAGES.store_apple} alt={KETO_IMAGES.store_apple} className='object-contain fade-up cursor-pointer w-12' />
                        <img src={KETO_IMAGES.store_google} alt={KETO_IMAGES.store_google} className='object-contain fade-up cursor-pointer w-12' />
                    </div>
                </div>

                <PrevNext
                    navigate={navigate}
                    nextWork="/works/hbits"
                    css="px-4 tablet:px-12  laptop:px-28 mt-24"
                />
            </div>
        </div>
    )
}

export default KetoSec7