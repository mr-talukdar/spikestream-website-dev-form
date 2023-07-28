import css from "./about.module.css"
import Container from "@components/about/container"
import SectionOne from "@components/about/section-one"
import SectionTwo from "@components/about/section-two"
import SectionThree from "@components/about/section-three"
import { Header } from "@components"
import Menu from "../Menu"
import { useState, useEffect } from "react"
import { useScroll } from "framer-motion"
import SectionFour from "@components/about/section-four"
import SectionFive from "@components/about/section-five"
import SectionSix from "@components/about/section-six"
import SectionSeven from "@components/about/section-seven"
import { Oval } from "react-loader-spinner"
export default function AboutPage() {
    const [menuOpen, setMenuOpen] = useState(false)
    const { scrollY } = useScroll()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])

    return (
        <>
            {loading ? (
                <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
                    <Oval
                        height={40}
                        width={40}
                        color="#FF8933"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#444"
                        strokeWidth={4}
                        strokeWidthSecondary={4}
                    />
                </div>
            ) : null}
            <div className={css.root}>
                <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                <Container>
                    <SectionOne
                        scrollY={scrollY}
                        setLoading={setLoading}
                        Loading={loading}
                    />
                    <SectionTwo scrollY={scrollY} />
                    <SectionThree scrollY={scrollY} />
                </Container>

                <SectionFour scrollY={scrollY} />
                <SectionFive scrollY={scrollY} />
                <SectionSix />

                <SectionSeven />
            </div>
        </>
    )
}
