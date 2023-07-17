import React, { useRef, useState, useEffect } from "react";
import { useAtom } from "jotai";
import { ProfileAtom, UserDetailAtom, EmojiAtom, StickerAtom } from "../../Atoms";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

const ViewStories = () => {
    const [profile, setProfile] = useAtom(ProfileAtom);
    const [userDetails, setUserDetails] = useAtom(UserDetailAtom);

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const [slideIndex, setSlideIndex] = useState(0);
    const [mySwiper, setMySwiper] = useState(null);

    // const [files, setFiles] = useState([]);

    // const handleDrop = (event) => {
    //     event.preventDefault();
    //     const { files } = event.dataTransfer;
    //     if (files.length > 0) {
    //         setFiles([...files]);
    //     }
    // };

    // const handleDragOver = (event) => {
    //     event.preventDefault();
    // };

    // const handleDragStart = (event) => {
    //     event.dataTransfer.setData("text/plain", event.target.id);
    // };

    const images = ["https://swiperjs.com/demos/images/nature-1.jpg", "https://swiperjs.com/demos/images/nature-2.jpg", "https://swiperjs.com/demos/images/nature-3.jpg", "https://swiperjs.com/demos/images/nature-4.jpg", "https://swiperjs.com/demos/images/nature-5.jpg"];

    // const onAutoplayTimeLeft = (s, progress) => {
    //     swipProgress = (progress / 2500) * 100;
    //     swiperProgress.current.style.width = 100 - swipProgress + "%";
    // };
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    useEffect(() => {
        fetch("https://random-data-api.com/api/users/random_user")
            .then((res) => res.json())
            .then((data) => setUserDetails(data));
    }, []);
    return (
        <div className="rounded-xl shadow-xl bg-white dark:bg-secondary-900 h-full w-[70%] overflow-hidden p-4 flex flex-col justify-center items-center gap-2 transition-all duration-300 relative">
            {/* Upload Story Div */}
            <div id="storiesInputDiv" className="absolute overflow-hidden top-0 left-0 w-0 h-0 bg-white dark:bg-secondary-900 rounded-xl shadow-xl p-0 flex flex-col items-center justify-center gap-3 z-50">
                {/* Input Div */}
                <div className="relative w-full h-full border-2 border-dashed border-primary-500 text-xl text-primary-500 dark:text-primary-300 hover:bg-gray-200 transition-all duration-300 bg-gray-100 hover:dark:bg-secondary-900 dark:bg-secondary-800 rounded-lg flex items-start justify-center">
                    <button
                        className="absolute top-4 right-4 p-3 bg-primary-100 shadow-xl rounded-full"
                        onClick={() => {
                            document.querySelector("#storiesInputDiv").classList.remove("!w-full", "!h-full", "!p-4");
                        }}
                    >
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 16 16" className="text-primary-400 dark:text-primary-800">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    </button>
                    <input type="file" id="storyInp" multiple className="hidden" />
                    {/* Label */}
                    {/* <label htmlFor="storyInp" className="flex items-center justify-center gap-5 p-5 w-full h-full cursor-pointer" onDragOver={handleDragOver} onDrop={handleDrop}> */}
                    <label htmlFor="storyInp" className="flex items-center justify-center gap-5 p-5 w-full h-full cursor-pointer">
                        {/* {files.length === 0 ? (
                            <>
                                <svg width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                                </svg>
                                <span>
                                    <span className="font-bold">Choose an Image</span> or drag it over here!
                                </span>
                            </>
                        ) : (
                            <div className="flex-auto p-6 flex items-center justify-center m-2 scan-div" draggable="true" onDragStart={handleDragStart}>
                                <div className="file-upload-div">
                                    <ul>
                                        {files.map((file, index) => (
                                            <li key={index} className="font-semibold text-lg list-disc">
                                                {file.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )} */}
                        <svg width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                        </svg>
                        <span>
                            <span className="font-bold">Choose an Image</span> or drag it over here!
                        </span>
                    </label>
                </div>
                {/* Demo Images Div */}
                <div className="w-full h-24 bg-transparent flex items-center justify-center gap-2">
                    {images?.map((imgs, i) => (
                        <div className="group/storyImg w-full h-full cursor-pointer" key={i}>
                            <img src={imgs} className="w-full h-full object-center object-cover rounded-md" alt="Hello-Moto" />
                            <div></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-nowrap items-center justify-between gap-4 pr-2 py-2 w-full relative h-[82px]">
                <div className="flex flex-nowrap items-center justify-start gap-4">
                    <img src={userDetails.avatar} alt="" className="w-8 h-8 ml-2 bg-slate-300 rounded-full outline outline-2 outline-primary-500 outline-offset-4" />
                    <p className="text-xl text-black dark:text-white font-semibold font-Inter">
                        {userDetails.firstName} {userDetails.lastName}
                    </p>
                </div>
                <div className={`autoplay-progress text-primary-500 dark:text-primary-400 relative -mt-1 ${slideIndex === mySwiper?.slides?.length - 1 ? "hidden" : "flex"}`}>
                    <svg viewBox="0 0 48 48" ref={progressCircle} className="dark:stroke-primary-500 stroke-primary-600">
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span className="dark:font-light text-sm" ref={progressContent}></span>
                </div>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 101.7,
                    stretch: 1,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    stopOnLastSlide: true,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: "progressbar",
                }}
                onSwiper={(s) => setMySwiper(s)}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                onSlideNextTransitionStart={() => setSlideIndex(slideIndex + 1)}
                onSlidePrevTransitionStart={() => setSlideIndex(slideIndex - 1)}
                className="mySwiper relative"
            >
                {/* <div ref={swiperProgress} className={`h-1 bg-primary-500 absolute top-0 left-0 z-20 rounded-lg `} /> */}
                <SwiperSlide className="rounded-md pt-3">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="w-fit h-fit max-w-full max-h-full mx-auto object-contain object-center rounded-lg" />
                </SwiperSlide>
                <SwiperSlide className="rounded-md pt-3">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="w-fit h-fit max-w-full max-h-full mx-auto object-contain object-center rounded-lg" />
                </SwiperSlide>
                <SwiperSlide className="rounded-md pt-3">
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="w-fit h-fit max-w-full max-h-full mx-auto object-contain object-center rounded-lg" />
                </SwiperSlide>
                <SwiperSlide className="rounded-md pt-3">
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="w-fit h-fit max-w-full max-h-full mx-auto object-contain object-center rounded-lg" />
                </SwiperSlide>
                <SwiperSlide className="rounded-md pt-3">
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" className="w-fit h-fit max-w-full max-h-full mx-auto object-contain object-center rounded-lg" />
                </SwiperSlide>
                <SwiperSlide className="rounded-md pt-3">
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" className="w-fit h-fit max-w-full max-h-full mx-auto object-contain object-center rounded-lg" />
                </SwiperSlide>
                <SwiperSlide className="rounded-md pt-3">
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" className="w-fit h-fit max-w-full max-h-full mx-auto object-contain object-center rounded-lg" />
                </SwiperSlide>
                <SwiperSlide className="rounded-md pt-3">
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" className="w-fit h-fit max-w-full max-h-full mx-auto object-contain object-center rounded-lg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ViewStories;
