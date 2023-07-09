import React from "react"
import { HOME_ICONS } from "@images"
import { Link } from "react-router-dom"
import * as Utils from "@helpers/utils"
import { General } from "@components"

const MenuOverlay = ({ menuOpen, setMenuOpen }) => {
    const isWideScreen = window.innerWidth > Utils.ULTRAWIDE_WIDTH

    return (
        <General.CanvasContainer isWideScreen={isWideScreen}>
            <nav
                className={`menu fixed top-0 left-0 w-full p-10 laptop:px-56 z-30 h-screen smallphone:py-8 pt-16 laptop:py-32 bg-[#2C2C2C] transform delay-100 transition-all duration-[500ms] ${
                    menuOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-full"
                } ${
                    isWideScreen ? "max-w-[1920px] mx-auto left-0 right-0" : ""
                }`}
            >
                <div className="h-full smallphone:pb-20 pb-28 tablet:pb-0">
                    <div className="flex flex-col h-full">
                        <div className="basis-1/2 font-light smallphone:text-3xl text-4xl laptop:text-7xl flex flex-col laptop:justify-center mac:justify-end">
                            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 smallphone:gap-2 gap-4 tablet:gap-8">
                                <Link
                                    to="/"
                                    className="nav-link group transition duration-300 hover:text-accent"
                                    onClick={() => {
                                        setMenuOpen(false)
                                    }}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/works"
                                    className="nav-link group transition duration-300 hover:text-accent"
                                    onClick={() => {
                                        setMenuOpen(false)
                                    }}
                                >
                                    Works
                                </Link>
                                <Link
                                    to="/blogs"
                                    className="nav-link group transition duration-300 hover:text-accent"
                                    onClick={() => {
                                        setMenuOpen(false)
                                    }}
                                >
                                    Blog
                                </Link>
                                <Link
                                    to="/about"
                                    className="nav-link group transition duration-300 hover:text-accent"
                                    onClick={() => {
                                        setMenuOpen(false)
                                    }}
                                >
                                    About
                                </Link>
                            </div>
                        </div>
                        <div className="basis-1/2 mac:basis-2/3 laptop:flex laptop:flex-col laptop:justify-end mac:justify-center">
                            <div className="font-medium text-accent text-lg">
                                Contact
                            </div>
                            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 tablet:gap-8">
                                <div className="">
                                    <div className="smallphone:mt-4 mt-8">
                                        For Business
                                    </div>
                                    <div className="mt-3">
                                        <a
                                            className="text-subtle"
                                            href="mailto:martin@spikestream.co"
                                            data-rel="external"
                                        >
                                            martin@spikestream.co
                                        </a>
                                    </div>
                                    <div className="mt-1 flex items-center text-subtle">
                                        <div className="text-base">
                                            + 91 9819 158 103
                                        </div>
                                        <div
                                            style={{
                                                backgroundImage: `url(${HOME_ICONS.Whatsapp})`,
                                            }}
                                            className="h-10 w-10 bg-no-repeat ml-1 bg-center cursor-pointer"
                                            onClick={Utils.openWhatsappChat}
                                        ></div>
                                    </div>
                                    <div className="smallphone:mt-4 mt-8 w-40 h-12 bg-accent rounded-full px-5 py-2 cursor-pointer">
                                        <a
                                            className="w-full h-full flex justify-center items-center "
                                            href="tel:+919819158103"
                                            data-rel="external"
                                        >
                                            <div
                                                style={{
                                                    backgroundImage: `url(${HOME_ICONS.Call})`,
                                                }}
                                                className="h-5 w-5 bg-no-repeat"
                                            ></div>
                                            <div className="ml-3 text-base text-black">
                                                Let’s Talk
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="hidden laptop:block ">
                                    <div className="mt-8">Studio Address</div>
                                    <div className="mt-4 text-subtle">
                                        Spike Stream, B-304, Swapnalok CHS LTD,
                                        Off Filmcity Road, India, Mumbai -
                                        400097.
                                    </div>
                                </div>
                                <div className="">
                                    <div className="mt-8">For Careers</div>
                                    <div className="mt-3">
                                        <a
                                            className="text-subtle"
                                            href="mailto:thinkbig@spikestream.co"
                                            data-rel="external"
                                        >
                                            thinkbig@spikestream.co
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </General.CanvasContainer>
    )
}

export default MenuOverlay
