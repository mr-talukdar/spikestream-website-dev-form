import css from "./section-one.module.css"
import { motion, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import asteroidIMG from "@images/about/asteroid1.png"
import galaxyIMG from "@images/about/galaxy.png"
import { gsap } from "gsap"
import ScrollTrigger from "gsap-trial/ScrollTrigger"

export default function SectionOne({ scrollY }) {
    gsap.registerPlugin(ScrollTrigger)
    const [galaxyScroll, setGalaxyScroll] = useState(50)
    const [asteroidScroll, setAsteroidScroll] = useState(-500)

    useMotionValueEvent(scrollY, "change", (latest) => {
        const galaxySY = parseInt(scrollY.current * 0.4)
        const asteroidSY = parseInt(scrollY.current * 0.15)

        if (galaxySY < 900) {
            setGalaxyScroll(50 - galaxySY)
        }

        if (asteroidSY < 900) {
            setAsteroidScroll(-500 - asteroidSY)
        }
    })

    return (
        <motion.div className={css.root}>
            <div className={css.content}>
                <h1 className={css.heading}>Hello.</h1>
                <p className={css.text}>
                    We are proficient thinkers and engineers
                    <br />
                    who aspire for excellence and growth
                </p>
            </div>

            <img
                src={asteroidIMG}
                className={css.asteroid}
                style={{ bottom: asteroidScroll }}
            />
            <motion.img
                src={galaxyIMG}
                className={css.galaxy}
                style={{ bottom: galaxyScroll }}
            />
        </motion.div>
    )
}
