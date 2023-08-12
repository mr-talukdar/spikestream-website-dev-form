import gsap from "gsap"
import React, { useEffect, useRef, useState } from "react"
import { General } from "../../../components"
import { HOME_ICONS } from "../../../images"

import useOnScreen from "../../../hooks/useOnScreen"
import * as AnimConfig from "../../../helpers/animConfig"
function Competencies({ navigate }) {
    const sectionRef = useRef()
    const reveal = useOnScreen(sectionRef)
    const [isRevealed, setIsRevealed] = useState(false)

    useEffect(() => {
        if (!isRevealed) setIsRevealed(reveal)
    }, [isRevealed, reveal])

    useEffect(() => {
        if (isRevealed) {
            gsap.to(".competencies .fade-up", AnimConfig.fadeUpConfig)
        }
    }, [isRevealed])

    return (
        <General.Container ref={sectionRef} data-scroll-section>
            <div className="competencies h-full flex flex-col justify-between px-10 tablet:px-28 laptop:px-28 tablet:py-20 py-16 laptop:py-12 mac:py-24 laptop:px-44 bg-black">
                <div className="h-full flex flex-col justify-between">
                    <div>
                        <div className="text-base fade-up ultrawide:text-lg">
                            Competencies
                        </div>
                        <div className="mt-6 text-sm tablet:text-base text-subtle w-full laptop:w-1/2 fade-up ultrawide:text-lg">
                            We are driven to discover the most innovative digital
                            solutions for ambitious brands seeking to break new
                            ground and create remarkable impact.
                        </div>

                        <div className="mt-8 tablet:mt-16 laptop:mt-8 mac:mt-12 smallphone:text-xl text-2xl tablet:text-4xl laptop:text-3xl desktop:text-5xl laptop:font-light">
                            <div className="smallphone:mb-2 mb-4 tablet:mb-6 laptop:mb-5 mac:mb-7 ultrawide:mb-10 fade-up">
                                Digital / Product Strategy
                            </div>
                            <div className="smallphone:mb-2 mb-4 tablet:mb-6 laptop:mb-5 mac:mb-7 ultrawide:mb-10 fade-up">
                                User Experience & Design Systems
                            </div>
                            <div className="smallphone:mb-2 mb-4 tablet:mb-6 laptop:mb-5 mac:mb-7 ultrawide:mb-10 fade-up">
                                Digital Marketing
                            </div>
                            <div className="smallphone:mb-2 mb-4 tablet:mb-6 laptop:mb-5 mac:mb-7 ultrawide:mb-10 fade-up">
                                Branding
                            </div>
                            <div className="smallphone:mb-2 mb-4 tablet:mb-6 laptop:mb-5 mac:mb-7 ultrawide:mb-10 fade-up">
                                Web + App Development
                            </div>
                        </div>
                    </div>


                    <div
                        className="flex flex-row items-center fade-up cursor-pointer"
                        onClick={() => navigate("/digital-marketing-services-works")}
                    >
                        <div className="text-sm font-medium">
                            View Our Work
                        </div>
                        <div className="ml-5 items-center w-2">
                            <img
                                src={HOME_ICONS.RightArrow}
                                className="object-contain"
                                alt="Know more Icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </General.Container>
    )
}

export default Competencies
