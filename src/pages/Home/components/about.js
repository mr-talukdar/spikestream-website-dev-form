import React, { useEffect, useRef, useState } from "react"
import { General } from "../../../components"
import { HOME_BG, HOME_ICONS } from "../../../images"

import gsap from "gsap"
import useOnScreen from "../../../hooks/useOnScreen"

import * as AnimConfig from "../../../helpers/animConfig"

function About({ navigate }) {
    const sectionRef = useRef()
    const revealRef = useRef()
    const reveal = useOnScreen(revealRef)
    const [isRevealed, setIsRevealed] = useState(false)

    useEffect(() => {
        if (!isRevealed) setIsRevealed(reveal)
    }, [isRevealed, reveal])

    useEffect(() => {
        if (isRevealed) {
            gsap.to(".about .fade-up", AnimConfig.fadeUpConfig)
            gsap.to(".about .reveal-anim", AnimConfig.imageReveal)
        }
    }, [isRevealed])

    return (
        <General.Container ref={sectionRef} data-scroll-section>
            <div
                style={{ backgroundImage: `url(${ HOME_BG.About })` }}
                className="about h-full w-full object-cover justify-center items-center px-10 py-5 tablet:px-28 tablet:py-20 laptop:px-44"
            >
                <div className="flex h-full w-full flex flex-col laptop:flex-row justify-center items-center">
                    <div className="basis-2/3 tablet:basis-1/2 flex flex-col justify-center laptop:justify-end order-2 laptop:order-1 mt-0 laptop:mt-10">
                        <div
                            className="text-base laptop:text-xl fade-up"
                            ref={revealRef}
                        >
                            About Spike Stream
                        </div>
                        <div className="mt-3 laptop:mt-8 sm:mt-3 font-light text-3xl laptop:text-6xl fade-up">
                            <span className="text-accent">Propelling </span>
                            Brands
                        </div>
                        <div className="font-light text-3xl laptop:text-6xl fade-up mt-1 tablet:mt-2">
                            into the Future
                        </div>
                        <div className="w-full mt-4 laptop:mt-8 text-base text-subtle fade-up hidden tablet:block">
                            We are a team of passionate design and technology
                            enthusiasts <br />
                            who continuously push the boundaries of innovation,
                            merging
                            <br />
                            creativity with technology to create enchanting and
                            <br /> extraordinary experiences.
                        </div>
                        <div className="w-full mt-4 laptop:mt-8 text-base text-subtle fade-up tablet:hidden">
                            We are a team of passionate design and technology
                            enthusiasts who continuously push the boundaries of innovation,
                            merging creativity with technology to create enchanting and
                            extraordinary experiences.
                        </div>
                        <div
                            className="mt-8 laptop: mt-4 flex flex-row items-center fade-up cursor-pointer"
                            onClick={() => navigate("/about")}
                        >
                            <div className="text-sm font-medium">Know More</div>
                            <div className="ml-5 items-center w-2">
                                <img
                                    src={HOME_ICONS.RightArrow}
                                    className="object-contain"
                                    alt="Know more Icon"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3 tablet:basis-1/2 flex items-center justify-center order-1 laptop:order-2">
                        <img
                            src={HOME_ICONS.About}
                            className="object-contain w-2/3 tablet:w-full laptop:w-1/2 reveal-anim"
                            alt="About Icon"
                            data-scroll
                        />
                    </div>
                </div>
            </div>
        </General.Container>
    )
}

export default About
