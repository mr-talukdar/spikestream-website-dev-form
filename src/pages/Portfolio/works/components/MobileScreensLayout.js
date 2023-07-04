import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "@hooks/useOnScreen";
import * as AnimConfig from '@helpers/animConfig'

function getImageBlock(image) {
    return <div>
        <img src={image} alt={image} className='object-contain fade-up w-9/12 laptop:w-[300px] h-full mx-auto' />
    </div>
}
function MobileScreensLayout(props) {
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
                <div className={`${ props.hasTopBorder ? 'mt-1' : '' } ${ props.hasBottomBorder ? 'mb-1' : '' } bg-${props.backgroundColor ? props.backgroundColor : 'background'} w-full flex items-center`}>
                    <div className={`${ props.spacing ? props.spacing : 'py-20' } h-full mx-auto px-6 tablet:px-12 flex flex-col tablet:flex-row gap-10 tablet:justify-center`}>
                        {props.imageList.map(item => getImageBlock(item))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileScreensLayout