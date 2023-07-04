import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components";
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { General, Header, Footer } from '@components';
import Menu from '../Menu'
import useLocoScroll from '@hooks/useLocoScroll';
import { BLOG_IMAGES } from '@images';
import gsap from "gsap";
import API from "@api"
import ShareOnSocial from "react-share-on-social";
import { useQuery } from "@apollo/client";

const Section = styled.section`
  position: relative;
  overflow: hidden;
`;


function BlogPage() {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [blogData, setBlogData] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams()

    const { state: body, pathname, search } = useLocation();

    const isPhone = window.innerWidth < 992;

    const { data } = useQuery(API.SINGLE_BLOG_QUERY(searchParams.get('id')));
    const { data: nextBlog } = useQuery(API.GET_NEXT_BLOG(searchParams.get('id')));
    const [nextBlogData, setNextBlogData] = useState(null);

    const [scrollOpen, setScrollOpen] = useState(false)
    useLocoScroll("blogs-read-container", scrollOpen);


    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen])

    useEffect(() => {
        if (data && data.blogDatas && data.blogDatas.length > 0) {
            setBlogData(data.blogDatas[0]);
            setScrollOpen(true)
        }
    }, [data]);

    useEffect(() => {
        if (nextBlog && nextBlog.blogDatas && nextBlog.blogDatas.length > 0) {
            setNextBlogData(nextBlog.blogDatas[0]);
        }
    }, [nextBlog]);

    useEffect(() => {
        if (blogData) {
            gsap.to('#blogImage', {
                width: "100vw",
                height: "100vh",
                top: 0,
                left: 0,
                duration: 1,
                ease: "power4.inOut",
            });
            gsap.to(
                '.blogRead .fade-up',
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: 'power4.inOut'
                }
            );
        }
    }, [blogData]);

    const returnToPrevPage = () => {
        navigate("/blogs");
    }

    const goToNextBlog = () => {
        if (nextBlogData) {
            window.location.replace(`/blogs/read?id=${ nextBlogData.id }`);
        }
    }

    return (
        <>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div
                className="main-container"
                id="blogs-read-container"
                data-scroll-container
                ref={containerRef}
            >
                {blogData ?
                    <General.CanvasContainer isWideScreen={false}>
                        <Section className="blogRead font-graphik text-[16px] laptop:text-[28px] text-[#B1B1B1] bg-[#2C2C2C]">
                            <div className="w-full">
                                <div className='w-screen h-screen'>
                                    <img id='blogImage' src={isPhone && blogData.expandedImagePhone ? blogData.expandedImagePhone.url : blogData.image.url} alt={blogData.image.url} className='object-cover rounded-md' style={body && body.rect ? { position: "absolute", top: body.rect.top, left: body.rect.left, width: body.rect.width, height: body.rect.height } : { position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh" }} />
                                    <div className="absolute top-0 left-0 mx-6 mt-9 tablet:mx-16 laptop:mx-44 laptop:my-32">
                                        <div className='flex flex-row items-center cursor-pointer' onClick={returnToPrevPage}>
                                            <img src={BLOG_IMAGES.Prev} alt={BLOG_IMAGES.Prev} className='w-[7px] h-[12px] object-contain mr-[10px] fade-up' />
                                            <div className='text-accent font-light text-[19px] fade-up'>Back To Blog</div>
                                        </div>
                                        <div className='text-[#F5F5F5] font-light text-[36px] laptop:text-[60px] mt-12 fade-container'>
                                            <p className="fade-up reveal-clip-anim">{blogData.title}</p>
                                        </div>
                                        <div className='flex flex-row items-center mt-4 fade-container'>
                                            <img src={BLOG_IMAGES.Time} alt={BLOG_IMAGES.Time} className='fade-up reveal-clip-anim w-[20px] h-[24px] object-contain mr-[10px] laptop:mr-[20px]' />
                                            <div className='fade-up reveal-clip-anim text-[#B1B1B1] font-light text-[16px]'>{`${ blogData.readTime } min read`}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-6 py-6 tablet:px-16 laptop:px-44 laptop:py-14 bg-[#2C2C2C]'>
                                    <div
                                        className="text-base mac:text-lg ultrawide:text-xl font-graphik"
                                        dangerouslySetInnerHTML={{ __html: blogData.body.html }} />
                                    <div className='tablet:hidden mt-24 mb-16 flex flex-row items-center justify-center cursor-pointer'>
                                        <div>
                                            <ShareOnSocial
                                                textToShare="Check out this blog I found!"
                                                link={`${ pathname }${ search }`}
                                                linkTitle={blogData.title}
                                                linkMetaDesc={blogData.title}
                                                noReferer
                                            >
                                                <button className='text-white font-light text-[16px] font-medium flex flex-row items-center '>
                                                    Share this article
                                                    <img src={BLOG_IMAGES.Share} alt={BLOG_IMAGES.Share} className='w-[24px] h-[24px] object-contain ml-[16px]' />
                                                </button>
                                            </ShareOnSocial>
                                        </div>
                                    </div>
                                    <div className='mt-12 tablet:mt-36 mb-44 flex flex-row items-center justify-between cursor-pointer'>
                                        <div className='flex flex-row items-center' onClick={returnToPrevPage}>
                                            <img src={BLOG_IMAGES.Prev} alt={BLOG_IMAGES.Prev} className='w-[7px] h-[12px] object-contain mr-[10px]' />
                                            <div className='text-accent font-light text-[16px]'>Back To Blog</div>
                                        </div>

                                        <div className='hidden tablet:block cursor-pointer'>
                                            <ShareOnSocial
                                                textToShare="Check out this blog I found!"
                                                link={`${ pathname }${ search }`}
                                                linkTitle={blogData.title}
                                                linkMetaDesc={blogData.title}
                                                noReferer
                                            >
                                                <button className='text-white font-light text-[16px] font-medium flex flex-row items-center'>
                                                    Share this article
                                                    <img src={BLOG_IMAGES.Share} alt={BLOG_IMAGES.Share} className='w-[24px] h-[24px] object-contain ml-[16px]' />
                                                </button>
                                            </ShareOnSocial>
                                        </div>

                                        <div className={`flex flex-row items-center ${ nextBlogData ? 'cursor-pointer' : 'cursor-none' }`} onClick={goToNextBlog}>
                                            <div className={`${ nextBlogData ? '' : 'invisible' } text-accent font-light text-[16px]`}>Next Article</div>
                                            <img src={BLOG_IMAGES.Next} alt={BLOG_IMAGES.Next} className={`${ nextBlogData ? '' : 'invisible' } w-[7px] h-[12px] object-contain ml-[10px]`} />
                                        </div>
                                    </div>
                                    <Footer />
                                </div>
                            </div>
                        </Section>
                    </General.CanvasContainer> : null}
            </div>
        </>
    )
}

export default BlogPage