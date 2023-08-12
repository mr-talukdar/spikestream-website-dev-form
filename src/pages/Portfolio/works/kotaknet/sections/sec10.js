import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { PrevNext } from "@components";
import { useNavigate } from 'react-router-dom';

import useOnScreen from "@hooks/useOnScreen";
import * as AnimConfig from '@helpers/animConfig'
function Sec8() {
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
                '#kotaknetsec10 .fade-up',
                AnimConfig.fadeUpConfig
            );
        }
    }, [isRevealed]);
    return (
        <div ref={sectionRef} data-scroll-section>
            <div id="kotaknetsec10">
                <PrevNext
                    navigate={navigate}
                    nextWork="/works/app-development-ketobalanced"
                    css="px-4 tablet:px-12 laptop:px-28 py-12 bg-black"
                />
            </div>
        </div>
    )
}

export default Sec8