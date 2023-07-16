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

import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import { General, Header } from "@components"
import { useNavigate } from "react-router-dom"
import Utils from "@helpers/utils"
import { motion, useScroll, useTransform } from "framer-motion"

const Section = styled.section`
    position: relative;
    overflow: hidden;
`

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false)
    const containerRef = useRef(null)

    const bgRef = useRef(null)

    // const { scrollY } = useScroll()

    // const bgScroll = useTransform(scrollY, [0, 1], ["0%", "5%"])
    // const dataScroll = useTransform(scrollY, [0, 1], ["0%", "30%"])

    const isWideScreen = window.innerWidth > Utils.ULTRAWIDE_WIDTH

    const isMobile = window.innerWidth < 768

    const navigate = useNavigate()

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [menuOpen])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (isMobile) {
        ;<General.CanvasContainer isWideScreen={isWideScreen}>
            <Section className="font-graphik">
                <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
        <General.CanvasContainer isWideScreen={isWideScreen}>
            <Section className="font-graphik">
                <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                <Intro />

                <div className="md:mt-[2rem]">
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
    )
}
