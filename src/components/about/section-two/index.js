import css from "./section-two.module.css"
import { motion, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import lightIMG from "@images/about/light.png"
import planetIMG from "@images/about/planet.png"
import asteroidIMG from "@images/about/asteroid2.png"

export default function SectionTwo({ scrollY }) {
    const [lightScroll, setLightScroll] = useState(-500)
    const [textScroll, setTextScroll] = useState(0)
    const [headingScroll, setHeadingScroll] = useState(100)

    useMotionValueEvent(scrollY, "change", (latest) => {
        const lightSY = parseInt(scrollY.current * 0.75)
        const textSY = parseInt(scrollY.current * 0.52)
        const headingSY = parseInt(scrollY.current * 0.5)

        if (lightSY < 700) {
            setLightScroll(-460 + lightSY)
        }

        if (textSY < 1200) {
            setTextScroll(0 + textSY)
        }

        if (headingSY < 1100) {
            setHeadingScroll(200 + headingSY)
        }
    })

    return (
        <motion.div className={css.root}>
            <motion.img
                src={lightIMG}
                className={css.light}
                style={{ top: lightScroll }}
            />

            <img src={planetIMG} className={css.planet} id="planet" />

            <motion.p className={css.text} style={{ top: textScroll }}>
                We strive and
            </motion.p>

            <motion.h1 className={css.heading} style={{ top: headingScroll }}>
                Go beyond the <br />
                conventional
            </motion.h1>

            <img src={asteroidIMG} className={css.asteroid1} />
        </motion.div>
    )
}
