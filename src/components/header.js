import React from "react"
import { HOME_ICONS } from "../images"
import { Link } from "react-router-dom"
import { Turn as Hamburger } from "hamburger-react"

function Header(props) {
    const isWideScreen = window.innerWidth > 1920

    const scrollTop = () => {
        if (props.scrollTop) {
            console.log(props.scrollTop)
        }
    }

    return (
        <div
            className={`z-40 fixed top-5 right-10 tablet:top-8 tablet:right-8 laptop:top-10 laptop:right-10 bg-no-repeat ${
                isWideScreen ? "right-32" : ""
            }}`}
        >
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
    )
}

export default Header
