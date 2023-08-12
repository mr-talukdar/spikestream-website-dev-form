import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { General, PrevNext } from "@components";
import { IQVIA_IMAGES } from "@images";
import { useNavigate } from 'react-router-dom';


import useOnScreen from "@hooks/useOnScreen";
import * as AnimConfig from '@helpers/animConfig'
function Sec7() {
    const sectionRef = useRef();
    const navigate = useNavigate();
    const reveal = useOnScreen(sectionRef);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        if (!isRevealed)
            setIsRevealed(reveal);
    }, [isRevealed, reveal])

    useEffect(() => {
        if (isRevealed) {
            gsap.to(
                '#iqviasec13 .fade-up',
                AnimConfig.fadeUpConfig
            );
        }
    }, [isRevealed]);
    return (
        <div ref={sectionRef} data-scroll-section>
            <div id="iqviasec13">
                <div className='w-screen h-screen flex items-center'>
                    <div className='h-full w-full flex justify-center bg-cover bg-center px-8' style={{ backgroundImage: `url(${ IQVIA_IMAGES.download1 })` }}>
                        <img src={IQVIA_IMAGES.download2} alt={IQVIA_IMAGES.download2} className='object-contain w-full tablet:w-[700px] fade-up' />
                    </div>
                </div>
                <PrevNext
                    navigate={navigate}
                    nextWork="/works/web-design-celestial-mountains"
                    css="px-4 tablet:px-12 laptop:px-28 py-12 bg-black"
                />

            </div>
        </div>
    )
}

export default Sec7