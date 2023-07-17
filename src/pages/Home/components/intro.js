import React, { useEffect, useRef, useState } from "react"
import { General } from "@components"
import { HOME_BG, HOME_ICONS } from "@images"
import * as AnimConfig from "@helpers/animConfig"

import gsap from "gsap"

function Intro() {
    const sectionRef = useRef()

    const [batterySaverActive, setBatterySaverActive] = useState(false)

    const videoRef = useRef(null)
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                setBatterySaverActive(true)
            })
        }
    }, [])

    useEffect(() => {
        gsap.fromTo(
            ".intro .fade-out",
            { opacity: 1 },
            {
                opacity: 0.3,
                duration: 2,
                ease: "linear",
            }
        )

        gsap.to(".intro .fade-in", {
            opacity: 1,
            duration: 0.5,
            delay: 1.5,
            ease: "power2.inOut",
        })

        gsap.to(".intro .fade-up", {
            ...AnimConfig.fadeUpConfig,
            delay: 1,
        })
    }, [])

    return (
        <General.Container ref={sectionRef}>
            <div className="intro md:fixed relative h-full w-full">
                {batterySaverActive ? (
                    <img
                        src={HOME_BG.Intro2}
                        className="object-cover h-full w-full"
                        alt="Flag"
                    />
                ) : (
                    <video
                        ref={videoRef}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        loop
                        muted
                        preload="auto"
                        autoPlay
                        playsInline={true}
                        src={HOME_BG.Intro}
                        type="video/mp4"
                    ></video>
                )}
                <div className="absolute top-0 left-0 w-full h-full bg-black fade-out"></div>
                <div className="absolute top-0 left-0 w-full h-full px-10 py-56 tablet:py-40 tablet:px-28 laptop:px-44 flex flex-col justify-end">
                    <div className="flex -mb-16 h-1/2 flex-col justify-end">
                        <div className="text-base tablet:text-xl">
                            <p className="fade-up">Digital Agency</p>
                        </div>
                        <div className="mt-4 tablet:mt-6 sm:mt-4 font-light text-3xl tablet:text-6xl">
                            <p className="fade-up">
                                We Design
                                <span className="text-accent"> Impact</span>
                            </p>
                        </div>
                        <div className="w-full laptop:w-2/5 max-w-[500px] mt-6 text-base text-subtle">
                            <p className="fade-up">
                                We create engaging experiences and captivating
                                campaigns that leave a lasting impact
                            </p>
                        </div>
                        <div className="mt-10 w-40 h-12 bg-accent rounded-full px-5 py-2 fade-in cursor-pointer">
                            <a
                                className="w-full h-full flex justify-center items-center "
                                href="tel:+919819158103"
                                data-rel="external"
                            >
                                <div
                                    style={{
                                        backgroundImage: `url(${HOME_ICONS.Call})`,
                                    }}
                                    className="h-5 w-5 bg-no-repeat"
                                ></div>
                                <div className="ml-3 text-base text-black">
                                    Let’s Talk
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </General.Container>
    )
}

export default Intro
