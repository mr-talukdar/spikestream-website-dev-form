import css from "./section-four.module.css"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function SectionFour({ scrollY }) {
    const triggerRef = useRef(null)

    // const { scrollYProgress } = useScroll({
    //     target: triggerRef,
    //     offset: ["start end", "end end"],
    // })

    // const containerScrollValue = useTransform(
    //     scrollYProgress,
    //     [0, 1],
    //     ["-10%", "275%"]
    // )

    return (
        <motion.div className={css.root}>
            {/* <div id="scrollRef" className={css.startTrigger} ref={triggerRef} /> */}
            <motion.div className={css.container}>
                <motion.p className={css.text}>An impact backed by</motion.p>

                <motion.h1 className={css.heading}>
                    Data, technology,
                    <br />
                    and creativity
                </motion.h1>
            </motion.div>
        </motion.div>
    )
}
