import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "@hooks/useOnScreen";
import * as AnimConfig from '@helpers/animConfig';

function VideoPage(props) {
    const sectionRef = useRef();
    const videoRef = useRef(null);

    const reveal = useOnScreen(sectionRef);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        if (!isRevealed)
            setIsRevealed(reveal);

        if (reveal) videoRef.current.play();
        else videoRef.current.pause();
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
                <div className={`${ props.hasTopBorder ? 'mt-1' : '' } ${ props.hasBottomBorder ? 'mb-1' : '' } w-full px-12 tablet:px-44 py-24 flex items-center bg-${ props.backgroundColor ? props.backgroundColor : 'black' }`}>
                    <div className="w-full">
                        <video
                            ref={videoRef}
                            src={props.video}
                            className='object-contain fade-up w-full'
                            loop
                            muted
                            preload="auto"
                            playsInline={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPage