import { HOME_ICONS } from "@images"
import { useNavigate } from "react-router-dom"

export default function SectionSix() {
    const navigate = useNavigate()
    return (
        <div className=" w-full h-screen">
            <div className="about-competencies h-full flex flex-col justify-between px-10 tablet:px-28 laptop:px-28 tablet:py-20 py-16 laptop:py-12 mac:py-24 laptop:px-44 bg-black">
                <div>
                    <div className="text-base ultrawide:text-lg">
                        Competencies
                    </div>
                    <div className="mt-6 text-sm tablet:text-base text-subtle w-full laptop:w-1/2 ultrawide:text-lg">
                        We are driven to discover the most innovative digital
                        solutions for ambitious brands seeking to break new
                        ground and create remarkable impact.
                    </div>
                    <div className="mt-8 tablet:mt-16 laptop:mt-8 mac:mt-12 smallphone:text-xl text-2xl tablet:text-4xl laptop:text-3xl desktop:text-5xl laptop:font-light">
                        <div className="smallphone:mb-2 mb-4 tablet:mb-6 laptop:mb-5 mac:mb-7 ultrawide:mb-10">
                            Digital / Product Strategy
                        </div>
                        <div className="smallphone:mb-2 mb-4 tablet:mb-6 laptop:mb-5 mac:mb-7 ultrawide:mb-10">
                            User Experience & Design Systems
                        </div>
                        <div className="smallphone:mb-2 mb-4 tablet:mb-6 laptop:mb-5 mac:mb-7 ultrawide:mb-10">
                            Digital Marketing
                        </div>
                        <div className="smallphone:mb-2 mb-4 tablet:mb-6 laptop:mb-5 mac:mb-7 ultrawide:mb-10">
                            Branding
                        </div>
                        <div className="smallphone:mb-2 mb-4 tablet:mb-6 laptop:mb-5 mac:mb-7 ultrawide:mb-10">
                            Web + App Development
                        </div>
                        <div className="fade-up">
                            Augmented & Virtual Reality (AR / VR)
                        </div>
                        <div
                            className="flex flex-row items-center cursor-pointer"
                            onClick={() => navigate("/works")}
                        >
                            <div className="text-sm font-medium">
                                View Our Work
                            </div>
                            <div className="ml-5 items-center w-2">
                                <img
                                    src={HOME_ICONS.RightArrow}
                                    className="object-contain"
                                    alt="Know more Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
