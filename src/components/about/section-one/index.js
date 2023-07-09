import css from "./section-one.module.css"
import { motion, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import asteroidIMG from "@images/about/asteroid1.png"
import galaxyIMG from "@images/about/galaxy.png"
import { gsap } from "gsap"

export default function SectionOne({ scrollY }) {
    const [galaxyScroll, setGalaxyScroll] = useState(50)
    const [galaxyScrollMobile, setGalaxyScrollMobile] = useState(180)
    const [asteroidScroll, setAsteroidScroll] = useState(-500)
    const [asteroidScrollMobile, setAsteroidScrollMobile] = useState(-90)
    const isMobile = window.innerWidth < 576

    useMotionValueEvent(scrollY, "change", (latest) => {
        const galaxySY = parseInt(scrollY.current * 0.4)
        const galaxySYMobile = parseInt(scrollY.current * 0.1)
        const asteroidSY = parseInt(scrollY.current * 0.15)
        const asteroidSYMobile = parseInt(scrollY.current * -0.15)

        if (galaxySY < 900) {
            setGalaxyScroll(50 - galaxySY)
            setGalaxyScrollMobile(180 - galaxySYMobile)
        }

        if (asteroidSY < 900) {
            setAsteroidScroll(-500 - asteroidSY)
            setAsteroidScrollMobile(-90 - asteroidSYMobile)
        }
    })

    if (isMobile) {
        return (
            <motion.div className={css.root}>
                <motion.div className={css.content}>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 4, delay: 0.5 }}
                        className={css.heading}
                    >
                        Hello!
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 4, delay: 2 }}
                        className={css.text}
                    >
                        We are proficient thinkers and engineers who aspire for
                        excellence and growth
                    </motion.p>
                </motion.div>

                <img
                    src={asteroidIMG}
                    className={css.asteroid}
                    style={{ bottom: asteroidScrollMobile }}
                />
                <motion.img
                    src={galaxyIMG}
                    className={css.galaxy}
                    style={{ bottom: galaxyScrollMobile }}
                />
            </motion.div>
        )
    }

    return (
        <motion.div className={css.root}>
            <motion.div className={css.content}>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 4, delay: 0.5 }}
                    className={css.heading}
                >
                    Hello!
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 4, delay: 3 }}
                    className={css.text}
                >
                    We are proficient thinkers and engineers
                    <br />
                    who aspire for excellence and growth
                </motion.p>
            </motion.div>

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
