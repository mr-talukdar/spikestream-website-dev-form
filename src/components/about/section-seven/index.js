import { HOME_ICONS } from "@images"
import { useNavigate } from "react-router-dom"
import { Footer } from "@components"
import * as Utils from "@helpers/utils"

export default function SectionSeven() {
    const navigate = useNavigate()
    return (
        <div className="w-full h-screen">
            <div className="about-contact bg-black h-full px-10  smallphone:pt-20 smallphone:pb-10 pt-28 pb-16 laptop:py-28 mac:py-32 ultrawide:py-36 tablet:px-28 laptop:px-44 laptop:pb-16">
                <div className="h-full flex flex-col justify-between">
                    <div className="smallphone:text-2xl  font-light text-4xl tablet:text-6xl w-full tablet:w-4/5 laptop:w-2/5">
                        Want To Design
                        <br /> An Impact?
                    </div>
                    <div className="flex flex-col laptop:flex-row laptop:mb-0 justify-between laptop:mt-8">
                        <div className="basis-1/2 h-1/2 laptop:h-full flex flex-col laptop:justify-start">
                            <div className="smallphone:text-sm text-base text-accent">
                                Start Here
                            </div>
                            <div className="smallphone:mt-4 mt-8 w-40  h-12 bg-accent rounded-full px-5 py-2 cursor-pointer">
                                <a
                                    className="w-full h-full flex justify-center items-center "
                                    href="tel:+919819158103"
                                    data-rel="external"
                                >
                                    <div
                                        style={{
                                            backgroundImage: `url(${ HOME_ICONS.Call })`,
                                        }}
                                        className="h-5 w-5 bg-no-repeat"
                                    ></div>
                                    <div className="ml-3 smallphone:text-sm text-base text-black">
                                        Let’s Talk
                                    </div>
                                </a>
                            </div>
                            <div className="smallphone:mt-6 mt-8">
                                <a
                                    className="smallphone:text-sm text-subtle"
                                    href="mailto:martin@spikestream.co"
                                    data-rel="external"
                                >
                                    martin@spikestream.co
                                </a>
                            </div>

                            <div className="mt-1 flex items-center">
                                <div className="smallphone:text-sm text-base">
                                    + 91 9819 158 103
                                </div>
                                <div
                                    style={{
                                        backgroundImage: `url(${ HOME_ICONS.Whatsapp })`,
                                    }}
                                    className="h-10 w-10 bg-no-repeat ml-1 bg-center cursor-pointer"
                                    onClick={Utils.openWhatsappChat}
                                ></div>
                            </div>
                        </div>
                        <div className="mt-16 laptop:mt-0 laptop:h-full flex flex-col laptop:justify-start items-start laptop:items-end w-full">
                            <div className="smallphone:mt-0 mt-4 laptop:mt-0 smallphone:text-sm text-subtle tablet:text-lg laptop:mb-8">
                                <div className="text-white smallphone:text-sm tablet:text-lg ">Studio Address</div><br />
                                Spike Stream, B-304, Swapnalok CHS LTD,<br />
                                Off Filmcity Road, India, Mumbai - 400097
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
