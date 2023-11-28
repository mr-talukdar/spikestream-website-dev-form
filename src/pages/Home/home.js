import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import "./home.css"
import Menu from "../Menu"

import {
    Intro,
    About,
    Competencies,
    Featured,
    Principles,
    Blogs,
    Client,
    Contact,
} from "./components"

import { General, Header } from "@components"
import { useNavigate } from "react-router-dom"
import Utils from "@helpers/utils"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import { useLocation } from "react-router-dom"

const Section = styled.section`
    position: relative;
    overflow: hidden;
`

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrollFix, setScrollFix] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const containerRef = useRef(null)

    const bgRef = useRef(null)

    const [home, setHome] = useState(false)

    const { pathname } = useLocation()

    // const { scrollY } = useScroll()

    // const bgScroll = useTransform(scrollY, [0, 1], ["0%", "5%"])
    // const dataScroll = useTransform(scrollY, [0, 1], ["0%", "30%"])

    const isWideScreen = window.innerWidth > Utils.ULTRAWIDE_WIDTH

    const isMobile = window.innerWidth < 768

    const navigate = useNavigate()

    var ToggleStuff = (value) => {
        setMenuOpen(value)
        setScrollFix(value)
    }

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [menuOpen])

    // useEffect(() => {
    //     window.scrollTo({ top: 0, behavior: "instant" })
    // }, [])

    const scrollUp = () => {
        if (pathname === "/") {
            setHome(true)
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setTimeout(() => {
                setScrollPosition(window.scrollY)
            }, 100)
            console.log(scrollPosition)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const schema = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "SpikeStream",
        url: "https://spikestream.co/",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://spikestream.co/works{search_term_string}",
            "query-input": "required name=search_term_string",
        },
    }

    if (isMobile) {
        ;<General.CanvasContainer isWideScreen={isWideScreen}>
            <Section className="font-graphik">
                <Header
                    menuOpen={menuOpen}
                    setMenuOpen={ToggleStuff}
                    scrollTop={home}
                />
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                <Intro />

                <About navigate={navigate} />
                <Competencies navigate={navigate} />
                <Featured navigate={navigate} />
                <Principles navigate={navigate} />
                <Blogs navigate={navigate} />

                <Client navigate={navigate} />
                <Contact navigate={navigate} />
            </Section>
        </General.CanvasContainer>
    }

    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
            }}
            watch={[]}
            containerRef={containerRef}
        >
            <main data-scroll-container ref={containerRef}>
                {
                    <General.CanvasContainer isWideScreen={isWideScreen}>
                        <Section className="font-graphik">
                            <Header
                                menuOpen={menuOpen}
                                setMenuOpen={ToggleStuff}
                                scrollTop={home}
                            />

                            <Menu
                                menuOpen={menuOpen}
                                scrollFix={scrollFix}
                                setMenuOpen={setMenuOpen}
                                SetScrollFix={setScrollFix}
                            />

                            <Intro />
                            <script type="application/ld+json">
                                {JSON.stringify(schema)}
                            </script>
                            <div>
                                <About navigate={navigate} />
                                <Competencies navigate={navigate} />
                                <Featured navigate={navigate} />
                                <Principles navigate={navigate} />
                                <Blogs navigate={navigate} />

                                <Client navigate={navigate} />
                                <Contact navigate={navigate} />
                            </div>
                        </Section>
                    </General.CanvasContainer>
                }
            </main>
        </LocomotiveScrollProvider>
    )
}
