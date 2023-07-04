import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

import useOnScreen from "../../../../hooks/useOnScreen";
import * as AnimConfig from '../../../../helpers/animConfig'
function PrinciplesTemplate(props) {
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
                `.${ props.identifier } .fade-up`,
                AnimConfig.fadeUpConfig
            );
            gsap.to(
                `.${ props.identifier } .reveal-anim`,
                AnimConfig.imageReveal
            );
        }
    }, [isRevealed, props.identifier]);

    return (
        <div ref={sectionRef} className={`${ props.identifier }`}>
            <div className="my-16 tablet:my-20 laptop:my-20 mac:my-24 ultrawide:my-36 w-full flex flex-col laptop:flex-row">
                <div className="basis-1/2 laptop:basis-5/12 order-1 laptop:order-2 mb-16 tablet:mb-20 laptop:mb-0 mac:flex mac:justify-center">
                    <img
                        src={props.icon}
                        className="object-contain reveal-anim w-[140px] tablet:w-[160px]  laptop:w-[180px] mac:w-[200px] ultrawide:w-[250px] mx-auto "
                        alt="Principle Icon"
                        data-scroll
                    />
                </div>
                <div className="basis-1/2 laptop:basis-7/12  order-2 laptop:order-1">
                    <div className="fade-up font-light text-3xl laptop:text-6xl ultrawide:text-[5.5rem]">
                        {props.title}
                    </div>
                    <div className="fade-up mt-4 laptop:mt-8 mac:mt-12 text-sm laptop:text-base mac:text-lg ultrawide:text-xl text-subtle  w-full laptop:w-11/12">
                        {props.body}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrinciplesTemplate