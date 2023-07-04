import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

import useOnScreen from "@hooks/useOnScreen";
import * as AnimConfig from '@helpers/animConfig'
function Overview(props) {
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
                `#${props.id} .fade-up`,
                AnimConfig.fadeUpConfig
            );
        }
    }, [isRevealed]);

    return (
        <div ref={sectionRef} data-scroll-section>
            <div id={props.id}>
                <div className='mt-1 mb-1 bg-background w-full py-36 px-6 laptop:px-64'>
                    <div className='flex flex-col laptop:flex-row h-full justify-center laptop:items-center gap-y-20 laptop:gap-y-0 laptop:gap-x-16'>
                        <div className='laptop:basis-2/5'>
                            <img src={props.image} alt={props.image} className='object-contain fade-up mx-auto' />
                        </div>
                        <div className='font-graphik text-xl laptop:basis-3/5 mac:leading-[2rem] ultrawide:text-3xl ultrawide:leading-[3rem]'>
                            <p className='fade-up'>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview