import React from "react"
import { HOME_ICONS } from "../images"
import { Link } from "react-router-dom"
import { Turn as Hamburger } from "hamburger-react"

function Header(props) {
    const isWideScreen = window.innerWidth > 1920

    return (
        <div>
            <div className="z-20 fixed top-5 tablet:top-8 left-10 laptop:top-16 bg-no-repeat pl-10 tablet:pl-28">
                <Link
                    to="/contact-us"
                    className="w-32 h-8 bg-[#1D232C] rounded-full px-4 py-3 cursor-pointer text-sm text-white font-graphik font-medium text-center"
                >
                    Contact
                </Link>
            </div>
            <div className="z-40 fixed top-5 tablet:top-8 right-10 laptop:top-10 bg-no-repeat">
                <div className="flex flex-row items-center">
                    <Link
                        to="/"
                        className="smallphone:w-9 w-12 mac:w-14 ultrawide:w-20 max-w-[100%]"
                    >
                        <img
                            src={HOME_ICONS.Website}
                            className="object-contain"
                            alt="Website Icon"
                            onClick={() => {
                                if (true) {
                                    console.log(props.scrollTop)
                                    window.scrollTo(0, 0)
                                }
                            }}
                        />
                    </Link>
                    <div className="ml-3 laptop:ml-5 w-5 tablet:w-6 laptop:w-7">
                        <Hamburger
                            size={isWideScreen ? 36 : 24}
                            rounded
                            toggled={props.menuOpen}
                            toggle={props.setMenuOpen}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
