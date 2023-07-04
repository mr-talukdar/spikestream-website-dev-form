import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { ACE_IMAGES, VIDEOS } from "@images";
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
                '#acesec7 .fade-up',
                AnimConfig.fadeUpConfig
            );
        }
    }, [isRevealed]);
    return (
        <div ref={sectionRef} data-scroll-section>
            <div id="acesec7">
                <div className='w-screen min-h-screen h-screen flex items-center justify-center'>
                    <div className='w-full h-full flex items-center justify-center bg-cover bg-center py-20 bg-gradient-to-b from-[#BA9FE2] to-[#597B8E]'>
                        <div
                            className="absolute bg-mobile-border bg-contain bg-no-repeat bg-center flex justify-center items-center fade-up
                                    smallphone:w-[220px] smallphone:h-[440px]
                                    w-[280px] h-[550px]
                                    tablet:w-[320px] tablet:h-[650px]
                                    mac:w-[350px] mac:h-[700px]
                                    "
                        >
                            <div className="relative flex justify-center items-center
                                    smallphone:w-[180px] smallphone:h-[360px]
                                    w-[230px] h-[450px] 
                                    tablet:w-[270px] tablet:h-[550px]
                                    mac:w-[290px] mac:h-[655px]
                                    ">
                                <video
                                    className="object-contain w-auto h-auto rounded-xl"
                                    ref={videoRef}
                                    src={VIDEOS.ace_pay}
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
                <PrevNext
                    navigate={navigate}
                    nextWork="/works/vectorflow"
                    css="px-4 tablet:px-12  laptop:px-28 mt-24"
                />
            </div>
        </div>
    )
}

export default KetoSec7