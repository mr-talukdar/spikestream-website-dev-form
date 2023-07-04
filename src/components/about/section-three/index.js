import css from "./section-three.module.css"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import lightIMG from "@images/about/light2.png"
import explosionIMG from "@images/about/light3.png"
import planetIMG from "@images/about/planet2.png"
import asteroidIMG from "@images/about/asteroid2.png"

export default function SectionThree({ scrollY }) {
    const containerRef = useRef(null)
    const lightRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    })

    const lightTrigger = useScroll({
        target: lightRef,
        offset: ["start end", "end end"],
    })

    const containerScrollValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["0vh", "100vh"]
    )

    const containerMobileScrollValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["0vh", "50vh"]
    )

    const lightRightScrollValue = useTransform(
        lightTrigger.scrollYProgress,
        [0, 1],
        ["1500", "160px"]
    )

    const lightTopScrollValue = useTransform(
        lightTrigger.scrollYProgress,
        [0, 1],
        ["-10%", "19%"]
    )

    const lightRightMobileScrollValue = useTransform(
        lightTrigger.scrollYProgress,
        [0, 1],
        [window.innerWidth < 768 ? "200px" : "700px", "0px"]
    )

    const lightTopMobileScrollValue = useTransform(
        lightTrigger.scrollYProgress,
        [0, 1],
        ["-10%", "19%"]
    )

    const explosionOpacityValue = useTransform(
        lightTrigger.scrollYProgress,
        [0, 1],
        [-5, 1]
    )

    const isSmallScreen = window.innerWidth < 1280

    if (isSmallScreen) {
        return (
            <motion.div className={css.root} ref={containerRef}>
                <motion.div
                    className={css.container}
                    style={{ top: containerMobileScrollValue }}
                >
                    <motion.img
                        src={lightIMG}
                        className={css.light}
                        style={{
                            right: lightRightMobileScrollValue,
                            top: lightTopMobileScrollValue,
                        }}
                    />

                    <motion.img
                        src={explosionIMG}
                        className={css.explosion}
                        style={{
                            opacity: explosionOpacityValue,
                        }}
                    />

                    <img src={planetIMG} className={css.planet} id="planet" />

                    <motion.img
                        src={asteroidIMG}
                        className={css.asteroid}
                        style={{ bottom: containerScrollValue }}
                    />

                    <motion.div className={css.content}>
                        <motion.p className={css.text}>
                            To ensure your brand
                        </motion.p>

                        <motion.h1 className={css.heading}>
                            Makes a <br />
                            remarkable <br /> impact
                        </motion.h1>
                    </motion.div>
                </motion.div>

                <div className={css.lightTrigger} ref={lightRef} />
            </motion.div>
        )
    }

    return (
        <motion.div className={css.root} ref={containerRef}>
            <div className={css.startTrigger} />
            <motion.div
                className={css.container}
                style={{ top: containerScrollValue }}
            >
                <motion.img
                    src={lightIMG}
                    className={css.light}
                    style={{
                        right: lightRightScrollValue,
                        top: lightTopScrollValue,
                    }}
                />

                <motion.img
                    src={explosionIMG}
                    className={css.explosion}
                    style={{
                        opacity: explosionOpacityValue,
                    }}
                />

                <img src={planetIMG} className={css.planet} id="planet" />

                <motion.img
                    src={asteroidIMG}
                    className={css.asteroid}
                    style={{ bottom: containerScrollValue }}
                />

                <motion.div className={css.content}>
                    <motion.p className={css.text}>
                        To ensure your brand
                    </motion.p>

                    <motion.h1 className={css.heading}>
                        Makes a <br />
                        remarkable <br /> impact
                    </motion.h1>
                </motion.div>
            </motion.div>

            <div className={css.lightTrigger} ref={lightRef} />
            <div className={css.endtrigger} />
        </motion.div>
    )
}
