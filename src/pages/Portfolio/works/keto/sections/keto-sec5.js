import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { KETO_IMAGES } from "@images";

import useOnScreen from "@hooks/useOnScreen";
import * as AnimConfig from '@helpers/animConfig'
function KetoSec5() {
    const sectionRef = useRef();
    const reveal = useOnScreen(sectionRef);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        if (!isRevealed)
            setIsRevealed(reveal);
    }, [isRevealed, reveal])

    useEffect(() => {
        if (isRevealed) {
            gsap.to(
                '#ketosec5 .fade-up',
                AnimConfig.fadeUpConfig
            );
        }
    }, [isRevealed]);
    return (
        <div ref={sectionRef} data-scroll-section>
            <div id="ketosec5">
                <div className='mt-1 mb-1 bg-background py-20 min-h-screen w-full flex items-center'>
                    <div className='laptop:px-52 flex flex-col justify-center items-center'>
                        <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-4 tablet:gap-6'>
                            <img src={KETO_IMAGES.weight} alt={KETO_IMAGES.weight} className='object-contain w-full fade-up' />
                            <img src={KETO_IMAGES.water} alt={KETO_IMAGES.water} className='object-contain w-full fade-up' />
                            <img src={KETO_IMAGES.ketosis} alt={KETO_IMAGES.ketosis} className='object-contain w-full fade-up' />
                            <img src={KETO_IMAGES.mood} alt={KETO_IMAGES.mood} className='object-contain w-full fade-up' />
                        </div>
                        <div className="mt-12 mx-6 tablet:mx-24 laptop:mx-32 font-graphik text-lg text-white fade-up">This brief overview highlights the different elements of the dashboard that can assist individuals in monitoring their weight loss journey. These cards also serve as shortcuts for easily updating the various inputs needed to track progress.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KetoSec5