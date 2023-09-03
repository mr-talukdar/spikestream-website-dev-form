import gsap from "gsap"
import React, { useEffect, useRef, useState } from "react"
import { HOME_BG, HOME_ICONS } from "@images"
import { ImageSkeleton } from "@components"
import API from "@api"
import useOnScreen from "@hooks/useOnScreen"
import * as AnimConfig from "@helpers/animConfig"
import { useQuery } from "@apollo/client"

function ListItem({ data, navigate }) {
    function openBlog() {
        navigate(`/blogs/read/${ data.slugBlogs }`)
    }

    return (
        <div className="w-full tablet:basis-[70%] laptop:basis-[30%] laptop:mr-[1.5%]">
            <div className={`fade-up w-full`}>
                <div className="w-full h-[250px] tablet:h-[300px]">
                    <div
                        className="w-full h-full cursor-pointer"
                        onClick={openBlog}
                    >
                        <div className="w-full h-full">
                            <ImageSkeleton
                                src={data.image.url}
                                alt={data.image.url}
                            />
                            <div className="absolute top-0 left-0 p-5 laptop:px-10 laptop:py-5 mac:py-12 mac:px-10">
                                <div className="text-2xl laptop:text-3xl mac:text-4xl font-normal">
                                    {data.title}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Blogs({ navigate }) {
    const sectionRef = useRef()
    const reveal = useOnScreen(sectionRef)
    const [isRevealed, setIsRevealed] = useState(false)
    const { data } = useQuery(API.BLOGS_QUICKVIEW_QUERY)
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        if (!isRevealed) setIsRevealed(reveal)
    }, [isRevealed, reveal])

    useEffect(() => {
        if (isRevealed) {
            gsap.to(".blogs .fade-up", AnimConfig.fadeUpConfig)
        }
    }, [isRevealed])

    useEffect(() => {
        if (data) {
            setBlogData(data.blogDatas)
        }
    }, [data])

    return (
        <div ref={sectionRef} data-scroll-section>
            <div
                style={{ backgroundImage: `url(${ HOME_BG.Blog })` }}
                className=" relative blogs min-h-screen w-full object-cover justify-between p-10 tablet:py-20 tablet:px-28 laptop:px-44 mac:py-24 ultrawide:py-36 flex flex-col"
            >
                <div>
                    <div className="text-base laptop:text-xl fade-up">
                        Blogs
                    </div>
                    <div className="hidden laptop:block mt-8 tablet:mt-16 laptop:mt-8 mac:mt-12 text-3xl tablet:text-6xl font-light fade-up">
                        Thoughts on how design
                        <br />
                        will shape our future
                    </div>
                    <div className="laptop:hidden mt-8 tablet:mt-16 laptop:mt-8 mac:mt-12 text-3xl tablet:text-6xl font-light fade-up">
                        Thoughts on how design will shape our future
                    </div>

                    <div className="mt-8 tablet:mt-16 laptop:mt-8 mac:mt-12 flex flex-row flex-wrap justify-center laptop:justify-start gap-6 tablet:gap-0">
                        {blogData.map((item) => (
                            <ListItem
                                key={item.id}
                                data={item}
                                navigate={navigate}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <div
                        className="mt-8 flex flex-row items-center intro-text-item cursor-pointer fade-up"
                        onClick={() => navigate("/blogs")}
                    >
                        <div className="text-sm mac:text-base font-medium">
                            View Blogs
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
    )
}

export default Blogs
