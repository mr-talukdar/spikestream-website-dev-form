import css from "./section-four.module.css"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function SectionFour({ scrollY }) {
    return (
        <motion.div className={css.root}>
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
