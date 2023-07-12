import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import useOnScreen from "@hooks/useOnScreen"
import { useNavigate } from "react-router-dom"
import { ImageSkeleton } from "@components"
const PortfolioItem = ({ data, setFormOpen }) => {
    const navigate = useNavigate()
    const itemRef = useRef()
    const reveal = useOnScreen(itemRef)
    const [isRevealed, setIsRevealed] = useState(false)

    useEffect(() => {
        if (!isRevealed) setIsRevealed(reveal)
    }, [isRevealed, reveal])

    useEffect(() => {
        if (isRevealed) {
            gsap.to(`.${data.cssIdentifier} .fade-up`, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.05,
                delay: 0.1,
                ease: "linear",
            })
        }
    }, [isRevealed])

    function openDetails() {
        if (!data.route) return
        const rect = itemRef.current.getBoundingClientRect()
        const scrollPos = window.scrollY
        return navigate(`/works/${data.route}`, { state: { rect, scrollPos } })
    }

    return (
        <div
            ref={itemRef}
            className={`${data.cssIdentifier} cursor-pointer`}
            onClick={() => {
                return data.isOnRequest ? setFormOpen(true) : openDetails()
            }}
        >
            <div className="fade-up">
                <ImageSkeleton alt={data.alt} src={data.src} />

                <div className="mt-2 laptop:mt-6 flex flex-row justify-between">
                    <div>
                        <div className="font-medium text-base laptop:text-[30px]">
                            {data.projName}
                        </div>
                        <div className="mt-2 laptop:mt-2 font-normal text-subtle text-[14px] laptop:text-[20px]">
                            {data.projTopic}
                        </div>
                    </div>
                    <div className="font-medium text-[14px] laptop:text-[20px]">
                        {data.isOnRequest ? "On Request" : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem
