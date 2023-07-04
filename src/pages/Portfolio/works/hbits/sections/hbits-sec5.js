import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { HBITS_IMAGES } from "@images";

import useOnScreen from "@hooks/useOnScreen";
import * as AnimConfig from '@helpers/animConfig'
function HbitsSec5() {
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
                '#hbitssec5 .fade-up',
                AnimConfig.fadeUpConfig
            );
        }
    }, [isRevealed]);
    return (
        <div ref={sectionRef} data-scroll-section>
            <div id="hbitssec5">
                <div className='bg-black pt-20 pb-10 px-12 tablet:px-0 w-screen flex items-center'>
                    <div className='mx-auto flex flex-col justify-center items-center'>
                        <div className="text-base tablet:text-lg text-white fade-up">Color Palette, Iconography and other elements</div>
                        <div className='mt-8 laptop:mt-12 grid grid-cols-1 laptop:grid-cols-2 gap-6 laptop:gap-10 px-8 laptop:w-11/12'>
                            <img src={HBITS_IMAGES.design1} alt={HBITS_IMAGES.design1} className='object-contain w-full fade-up' />
                            <img src={HBITS_IMAGES.design2} alt={HBITS_IMAGES.design2} className='object-contain w-full fade-up' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HbitsSec5