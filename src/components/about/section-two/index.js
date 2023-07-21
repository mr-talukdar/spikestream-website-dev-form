import css from "./section-two.module.css"
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion"
import { useRef, useState } from "react"
import lightIMG from "@images/about/light.png"
import planetIMG from "@images/about/planet.png"
import asteroidIMG from "@images/about/asteroid2.png"

export default function SectionTwo({ scrollY }) {
    const isMobile = window.innerWidth < 768
    const lightRef = useRef(null)
    const textRef = useRef(null)
    const lightTrigger = useScroll({
        target: lightRef,
        offset: ["start end", "end end"],
    })

    const textTrigger = useScroll({
        target: textRef,
        offset: ["start end", "end end"],
    })

    const lightTopScrollValue = useTransform(
        lightTrigger.scrollYProgress,
        [0, 1],
        ["-460px", "200px"]
    )

    const lightTopScrollValueMobile = useTransform(
        lightTrigger.scrollYProgress,
        [0, 1],
        ["-250px", "60px"]
    )

    const headingTopScrollValue = useTransform(
        textTrigger.scrollYProgress,
        [0, 1],
        ["300px", "1500px"]
    )

    const textTopScrollValue = useTransform(
        textTrigger.scrollYProgress,
        [0, 1],
        ["220px", "1360px"]
    )

    const headingTopScrollValueMobile = useTransform(
        textTrigger.scrollYProgress,
        [0, 1],
        ["140px", "1220px"]
    )

    const textTopScrollValueMobile = useTransform(
        textTrigger.scrollYProgress,
        [0, 1],
        ["0px", "1120px"]
    )

    const asteroidTopScrollValue = useTransform(
        textTrigger.scrollYProgress,
        [0, 1],
        ["730px", "-700px"]
    )

    const asteroidTopScrollValueMobile = useTransform(
        textTrigger.scrollYProgress,
        [0, 1],
        ["240px", "-120px"]
    )

    if (isMobile) {
        return (
            <motion.div className={css.root}>
                <motion.img
                    src={lightIMG}
                    className={css.light}
                    style={{ top: lightTopScrollValueMobile }}
                />

                <img src={planetIMG} className={css.planet} id="planet" />

                <motion.p
                    className={css.text}
                    style={{ top: textTopScrollValueMobile }}
                >
                    We strive and
                </motion.p>

                <motion.h1
                    className={css.heading}
                    style={{ top: headingTopScrollValueMobile }}
                >
                    Go beyond the
                    <br />
                    conventional
                </motion.h1>

                <motion.img
                    src={asteroidIMG}
                    className={css.asteroid1}
                    style={{ top: asteroidTopScrollValueMobile }}
                />

                <div className={css.lightTrigger} ref={lightRef} />
                <div className={css.textTrigger} ref={textRef} />
            </motion.div>
        )
    }

    return (
        <motion.div className={css.root}>
            <motion.img
                src={lightIMG}
                className={css.light}
                style={{ top: lightTopScrollValue }}
            />

            <img src={planetIMG} className={css.planet} id="planet" />

            <motion.p className={css.text} style={{ top: textTopScrollValue }}>
                We strive and
            </motion.p>

            <motion.h1
                className={css.heading}
                style={{ top: headingTopScrollValue }}
            >
                Go beyond the
                <br />
                conventional
            </motion.h1>

            <motion.img
                src={asteroidIMG}
                className={css.asteroid1}
                style={{ top: asteroidTopScrollValue }}
            />

            <div className={css.lightTrigger} ref={lightRef} />
            <div className={css.textTrigger} ref={textRef} />
        </motion.div>
    )
}
