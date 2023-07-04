import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

import useOnScreen from "@hooks/useOnScreen";
import * as AnimConfig from '@helpers/animConfig'

function getBox(str) {
    return <div className="w-full bg-black rounded-lg flex flex-row justify-center items-center text-md tablet:text-xl p-6 tablet:p-10 text-center fade-up">{str}</div>
}

function GlanceGrid(props) {
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
                <div className='mt-1 mb-1 bg-background font-graphik text-white w-full px-6 py-20 tablet:px-20 laptop:px-44 flex justify-center items-center'>
                    <div>
                        <div className="text-light text-2xl laptop:text-4xl text-center fade-up">A glance at what we did?</div>
                        <div className='mt-8 tablet:mt-12 grid grid-cols-2 tablet:grid-cols-3 gap-4 tablet:gap-6'>
                            {
                                props.listItems.map(item => getBox(item))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlanceGrid