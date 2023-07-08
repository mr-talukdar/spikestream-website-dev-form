import css from "./section-five.module.css"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import icebergIMG from "@images/about/iceberg.png"
import splashIMG from "@images/about/water.png"

export default function SectionFive({ scrollY }) {
    const splashRef = useRef(null)

    const splashTrigger = useScroll({
        target: splashRef,
        offset: ["start end", "end end"],
    })

    const splashWidthScrollValue = useTransform(
        splashTrigger.scrollYProgress,
        [0, 1],
        ["-50%", "150%"]
    )

    return (
        <motion.div className={css.root} id="iceberg">
            <div className={css.startTrigger} />

            <motion.div className={css.splashberg}>
                <motion.img
                    src={splashIMG}
                    className={css.splash}
                    style={{ width: splashWidthScrollValue }}
                />
                <motion.img src={icebergIMG} className={css.iceberg} />
            </motion.div>

            <div className={css.water}>
                <motion.div className={css.content}>
                    <motion.p className={css.text}>
                        Because we believe that
                    </motion.p>

                    <motion.h1 className={css.heading}>
                        Success is not <br />
                        what you see, but a <br /> strategy at play
                    </motion.h1>

                    <div className={css.waterbg} />
                </motion.div>

                <div className={css.waterbg2} />
            </div>

            <div className={css.splashTrigger} ref={splashRef} />
        </motion.div>
    )
}
