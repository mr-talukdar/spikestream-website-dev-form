import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "@hooks/useOnScreen";
import * as AnimConfig from '@helpers/animConfig'
function WebImage(props) {
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
                `#${ props.id } .fade-up`,
                AnimConfig.fadeUpConfig
            );
        }
    }, [isRevealed]);
    return (
        <div ref={sectionRef} data-scroll-section>
            <div id={props.id}>
                <div className={`${ props.hasTopBorder ? 'mt-1' : '' } ${ props.hasBottomBorder ? 'mb-1' : '' } bg-${ props.backgroundColor ? props.backgroundColor : 'black' } w-full flex items-center px-6`}>
                    <div className={`${ props.spacing ? props.spacing : 'py-5' } mx-auto`}>
                        {props.image ?
                            <img src={props.image} alt={props.image} className='object-contain fade-up' /> :
                            <div className="w-full flex flex-col gap-10 laptop:flex-row justify-center">
                                    <img src={props.image1} alt={props.image1} className='object-contain fade-up' />
                                    <img src={props.image2} alt={props.image2} className='object-contain fade-up' />
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebImage