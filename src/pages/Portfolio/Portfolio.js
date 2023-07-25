import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import { General, Header, Footer } from "../../components"
import Menu from "../Menu"
import { PORTFOLIO_IMAGES } from "../../images"
import gsap from "gsap"
import PortfolioItem from "./components/portfolioItem"
import Form from "./form"

const Section = styled.section`
    position: relative;
    overflow: hidden;
`

function Portfolio() {
    const containerRef = useRef(null)
    const [menuOpen, setMenuOpen] = useState(false)
    const [formOpen, setFormOpen] = useState(false)

    const [data, setData] = useState([
        {
            cssIdentifier: "keto",
            src: PORTFOLIO_IMAGES.Ketobalanced,
            projName: "Ketobalanced",
            projTopic: "UX & UI Design + Development",
            isOnRequest: false,
            route: "ketobalanced",
        },
        {
            cssIdentifier: "hbits",
            src: PORTFOLIO_IMAGES.hBits,
            projName: "hBits",
            projTopic: "Website UX & UI Design (All Devices) &  Social",
            isOnRequest: false,
            route: "hbits",
        },
        {
            cssIdentifier: "kotak-loan",
            src: PORTFOLIO_IMAGES.KotakLoan,
            projName: "Kotak Home Loans ",
            projTopic: "UI Design (All Devices)",
            isOnRequest: false,
            route: "kotakloans",
        },
        {
            cssIdentifier: "iqvia",
            src: PORTFOLIO_IMAGES.iqvia,
            projName: "IQVIA",
            projTopic: "UX Strategy & Design System (All Devices)",
            isOnRequest: false,
            route: "iqvia",
        },
        {
            cssIdentifier: "celestial",
            src: PORTFOLIO_IMAGES.celestial,
            projName: "Celestial Mountains",
            projTopic: "Adobe XD Prototype",
            isOnRequest: false,
            route: "celestial-mountains",
        },
        {
            cssIdentifier: "ace",
            src: PORTFOLIO_IMAGES.ace,
            projName: "Ace Pay",
            projTopic: "Adobe XD Prototype",
            isOnRequest: false,
            route: "acepay",
        },
        {
            cssIdentifier: "yum",
            src: PORTFOLIO_IMAGES.yum,
            projName: "YUM Brands",
            projTopic: "UX Strategy And Design",
            isOnRequest: true,
        },
        {
            cssIdentifier: "vector-flow",
            src: PORTFOLIO_IMAGES.vectorflow,
            projName: "VectorFlow",
            projTopic: "UX & UI Design ",
            isOnRequest: false,
            route: "vectorflow",
        },
        {
            cssIdentifier: "kotak-net",
            src: PORTFOLIO_IMAGES.KotakBank,
            projName: "Kotak Mahindra Bank (Netbanking)",
            projTopic: "Script, Screenplay & Copy",
            isOnRequest: false,
            route: "kotaknetbanking",
        },
        {
            cssIdentifier: "yippee",
            src: PORTFOLIO_IMAGES.yippee,
            projName: "ITC - Sunfeast YiPPee",
            projTopic: "Instagram Engagements",
            isOnRequest: true,
        },
        {
            cssIdentifier: "kotak-bill",
            src: PORTFOLIO_IMAGES.kotakBill,
            projName: "Kotak Bill Pay",
            projTopic: "Mobile UX & UI Design",
            isOnRequest: true,
        },
    ])
    const isWideScreen = window.innerWidth > 1920

    const [scrollOpen, setScrollOpen] = useState(false)

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [menuOpen])

    useEffect(() => {
        if (formOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [formOpen])

    useEffect(() => {
        gsap.to(".portfolio .fade-up", {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "linear",
        })
        setTimeout(() => setScrollOpen(true), 500)
    }, [])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])

    return (
        <>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} contactCss="pl-10 laptop:pl-28" />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Form open={formOpen} setOpen={setFormOpen} />
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
                            <Section
                                data-scroll-section
                                className="portfolio font-graphik"
                            >
                                <div className="w-full py-20 px-10 laptop:py-20 laptop:px-28 mt-8 laptop:mt-20">
                                    <div className="text-accent text-xl fade-up">
                                        Featured Work
                                    </div>
                                    <div className="mt-6 text-3xl laptop:text-6xl laptop:w-5/6 leading-10 font-light fade-up">
                                        We collaborate with global brands to
                                        strengthen their excellence even further
                                    </div>

                                    <div className="mt-12 laptop:mt-24 mb-12 grid grid-cols-1 tablet:grid-cols-2 gap-x-6 gap-y-12 laptop:gap-12 laptop:gap-y-24">
                                        {data.map((d, index) => (
                                            <PortfolioItem
                                                key={index}
                                                data={d}
                                                setFormOpen={setFormOpen}
                                            />
                                        ))}
                                    </div>

                                    <Footer />
                                </div>
                            </Section>
                        </General.CanvasContainer>
                    }
                </main>
            </LocomotiveScrollProvider>
        </>
    )
}

export default Portfolio
