import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { HBITS_IMAGES, BLOG_IMAGES } from "@images";

import useOnScreen from "@hooks/useOnScreen";
import * as AnimConfig from '@helpers/animConfig'
import { PrevNext } from '@components'

function HbitsSec8() {
    const navigate = useNavigate();
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
                '#hbitssec12 .fade-up',
                AnimConfig.fadeUpConfig
            );
        }
    }, [isRevealed]);
    return (
        <div ref={sectionRef} data-scroll-section>
            <div id="hbitssec12">
                <div className='bg-black py-12 min-h-screen w-screen flex'>
                    <div className='mx-auto flex flex-col items-center'>
                        <div className="text-base tablet:text-lg text-white text-center fade-up mt-8">Social & Display</div>
                        <div className='mt-8 laptop:mt-12 grid grid-cols-1 laptop:grid-cols-4 gap-6 laptop:gap-10 px-8 laptop:w-3/4'>
                            <img src={HBITS_IMAGES.social1} alt={HBITS_IMAGES.social1} className='object-contain w-full fade-up col-span-3 row-span-2' />
                            <img src={HBITS_IMAGES.social2} alt={HBITS_IMAGES.social2} className='object-contain w-full fade-up' />
                            <img src={HBITS_IMAGES.social3} alt={HBITS_IMAGES.social4} className='object-contain w-full fade-up' />
                            <img src={HBITS_IMAGES.social4} alt={HBITS_IMAGES.social4} className='object-contain w-full fade-up' />
                            <img src={HBITS_IMAGES.social5} alt={HBITS_IMAGES.social5} className='object-contain w-full fade-up' />
                            <img src={HBITS_IMAGES.social6} alt={HBITS_IMAGES.social6} className='object-contain w-full fade-up' />
                            <img src={HBITS_IMAGES.social7} alt={HBITS_IMAGES.social7} className='object-contain w-full fade-up' />
                        </div>
                    </div>
                </div>
                <PrevNext
                    navigate={navigate}
                    nextWork="/works/kotakloans"
                    css="px-4 tablet:px-12  laptop:px-28 mt-24 bg-black"
                />
            </div>
        </div>
    )
}

export default HbitsSec8