import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { HBITS_IMAGES } from "@images";

import useOnScreen from "@hooks/useOnScreen";
import * as AnimConfig from '@helpers/animConfig'
function HbitsSec4() {
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
                '#hbitssec4 .fade-up',
                AnimConfig.fadeUpConfig
            );
        }
    }, [isRevealed]);
    return (
        <div ref={sectionRef} data-scroll-section>
            <div id="hbitssec4">
                <div className='mt-1 mb-1 min-h-screen w-screen flex items-center bg-background'>
                    <div className='w-full'>
                        <div className='mx-auto grid grid-cols-1 laptop:grid-cols-2 gap-6 laptop:gap-3 w-3/4'>
                            <img src={HBITS_IMAGES.insp1} alt={HBITS_IMAGES.insp1} className='object-contain w-full fade-up' />
                            <img src={HBITS_IMAGES.insp2} alt={HBITS_IMAGES.insp2} className='object-contain w-full fade-up' />
                            <img src={HBITS_IMAGES.insp3} alt={HBITS_IMAGES.insp3} className='object-contain w-full fade-up' />
                            <div className='text-base tablet:text-xl text-white flex justify-center items-center laptop:px-12 fade-up'>
                                The design language drew inspiration from the lively photography and color schemes commonly found in commercial properties.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HbitsSec4