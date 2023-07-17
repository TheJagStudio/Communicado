import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { ProfileAtom, UserDetailAtom, EmojiAtom, StickerAtom, UserAtom } from "../../Atoms";
// import { Peer } from "peerjs";

// Components
import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";
import VideoCall from "../VideoCall/VideoCall";
import VoiceCall from "../VoiceCall/VoiceCall";

const Home = ({ peer }) => {
    const [currentUser, setCurrentUser] = useAtom(UserAtom);
    const [profile, setProfile] = useAtom(ProfileAtom);
    const [userDetails, setUserDetails] = useAtom(UserDetailAtom);
    const [emojiData, setEmojiData] = useAtom(EmojiAtom);
    const [stickerData, setStickerData] = useAtom(StickerAtom);
    const [gif, setGif] = useState([]);
    const [gifSearch, setGifSearch] = useState("");
    const [gifOffset, setGifOffset] = useState(0);
    const [stickerOffset, setStickerOffset] = useState(20);
    const [activeEmojiType, setActiveEmojiType] = useState("Emoji");
    const [activeTab, setActiveTab] = useState("tab1");
    const [sentSticker, setSentSticker] = useState("");
    const [sentGIF, setSentGIF] = useState("");

    useEffect(() => {
        fetch("https://random-data-api.com/api/users/random_user")
            .then((res) => res.json())
            .then((data) => setUserDetails(data));
        document.getElementById("chatContainer").scrollTop = document.getElementById("chatContainer").scrollHeight;
        // const peer = new Peer(localStorage.getItem("metaMask"));
        // const conn = peer.connect(userDetails["metaMask"]);
        // conn.on("open", () => {
        //     conn.send("hi!");
        // });
        // peer.on("connection", (conn) => {
        //     conn.on("data", (data) => {
        //         console.log(data);
        //         let message = data;
        //         let chatContainer = document.getElementById("chatContainer");
        //         let newDiv = document.createElement("div");
        //         newDiv.setAttribute("class", "flex justify-start gap-2 w-full");
        //         let newP = document.createElement("p");
        //         newP.setAttribute("class", "relative text-black/80 dark:text-white/80 bg-primary-200/50 dark:bg-gray-800 w-fit max-w-[50%] py-1 px-2 rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-lg");
        //         newP.innerHTML = message + '<svg width="10" height="10" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="absolute top-0 left-0 -translate-x-full text-primary-200/50 dark:text-gray-800 -scale-x-100"><path fill="currentColor" d="M0 16 16 0H0z"></path></svg>';
        //         let newImg = document.createElement("img");
        //         newImg.setAttribute("src", userDetails.avatar);
        //         newImg.setAttribute("class", "bg-gray-300 w-10 h-10 rounded-full");
        //         newDiv.appendChild(newImg);
        //         newDiv.appendChild(newP);
        //         chatContainer.appendChild(newDiv);
        //         chatContainer.scrollTo(0, chatContainer.scrollHeight);
        //         document.getElementById("messageInput").value = "";
        //     });
        //     conn.on("open", () => {
        //         conn.send("hello!");
        //     });
        // });
    }, []);

    const sendMessage = () => {
        let message = document.getElementById("messageInput").value;
        let chatContainer = document.getElementById("chatContainer");
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "flex justify-end gap-2 w-full");
        let newP = document.createElement("p");
        newP.setAttribute("class", "relative text-white/80 bg-gradient-to-tr from-primary-400 to-primary-600 dark:bg-primary-700 w-fit max-w-[50%] py-1 px-2 rounded-tl-lg rounded-bl-lg rounded-br-lg shadow-lg");
        try {
            newP.innerHTML = message + '<svg width="10" height="10" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="absolute top-0 right-0 translate-x-full text-primary-600"><path fill="currentColor" d="M0 16 16 0H0z"></path></svg>';
        } catch (err) {
            console.log(err);
        }
        let newImg = document.createElement("img");
        newImg.setAttribute("src", userDetails.avatar);
        newImg.setAttribute("class", "bg-gray-300 w-10 h-10 rounded-full");
        newDiv.appendChild(newP);
        newDiv.appendChild(newImg);
        chatContainer.appendChild(newDiv);
        chatContainer.scrollTo(0, chatContainer.scrollHeight);
        document.getElementById("messageInput").value = "";

        const conn = peer.connect(userDetails["metaMask"]);
        console.log(localStorage.getItem("metaMask"), "connecting", userDetails["metaMask"]);
        conn.on("open", () => {
            conn.send(message);
        });
    };

    const sendStickers = (stickerPath) => {
        let chatContainer = document.getElementById("chatContainer");
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "flex justify-end gap-2 w-full");
        let innerNewDiv = document.createElement("div");
        innerNewDiv.setAttribute("class", "relative text-white/80 bg-gradient-to-tr from-primary-400 to-primary-600 dark:bg-primary-700 w-fit max-w-[50%] p-2 rounded-tl-lg rounded-bl-lg rounded-br-lg shadow-lg");
        let newSticker = document.createElement("lottie-player");
        newSticker.setAttribute("src", stickerPath);
        newSticker.setAttribute("background", "transparent");
        newSticker.setAttribute("hover", "true");
        newSticker.setAttribute("speed", "1");
        newSticker.setAttribute("style", "height: 10rem;");
        let newUserImage = document.createElement("img");
        newUserImage.setAttribute("src", userDetails.avatar);
        newUserImage.setAttribute("class", "bg-gray-300 w-10 h-10 rounded-full");
        innerNewDiv.appendChild(newSticker);
        innerNewDiv.innerHTML += '<svg width="10" height="10" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="absolute top-0 right-0 translate-x-full text-primary-600"><path fill="currentColor" d="M0 16 16 0H0z"></path></svg>';
        chatContainer.appendChild(newDiv);
        newDiv.appendChild(innerNewDiv);
        newDiv.appendChild(newUserImage);
        chatContainer.scrollTo(0, chatContainer.scrollHeight);

        const conn = peer.connect(userDetails["metaMask"]);
        console.log(localStorage.getItem("metaMask"), "connecting", userDetails["metaMask"]);
        conn.on("open", () => {
            conn.send("%%sticker%%" + stickerPath);
        });
    };

    const sendGIFs = (gifPath) => {
        let chatContainer = document.getElementById("chatContainer");
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "flex justify-end gap-2 w-full");
        let innerNewDiv = document.createElement("div");
        innerNewDiv.setAttribute("class", "relative text-white/80 bg-gradient-to-tr from-primary-400 to-primary-600 dark:bg-primary-700 w-fit max-w-[50%] p-2 rounded-tl-lg rounded-bl-lg rounded-br-lg shadow-lg");
        let newGIF = document.createElement("img");
        newGIF.setAttribute("src", gifPath);
        newGIF.setAttribute("class", "h-40 aspect-auto rounded-lg");
        let newUserImage = document.createElement("img");
        newUserImage.setAttribute("src", userDetails.avatar);
        newUserImage.setAttribute("class", "bg-gray-300 w-10 h-10 rounded-full");
        innerNewDiv.appendChild(newGIF);
        innerNewDiv.innerHTML += '<svg width="10" height="10" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="absolute top-0 right-0 translate-x-full text-primary-600"><path fill="currentColor" d="M0 16 16 0H0z"></path></svg>';
        chatContainer.appendChild(newDiv);
        newDiv.appendChild(innerNewDiv);
        newDiv.appendChild(newUserImage);
        chatContainer.scrollTo(0, chatContainer.scrollHeight);

        const conn = peer.connect(userDetails["metaMask"]);
        console.log(localStorage.getItem("metaMask"), "connecting", userDetails["metaMask"]);
        conn.on("open", () => {
            conn.send("%%gif%%" + gifPath);
        });
    };

    return (
        <div className="rounded-xl shadow-xl bg-white dark:bg-secondary-900 h-full w-[70%] overflow-hidden p-4 flex flex-col justify-between items-center gap-2 transition-all duration-300 relative">
            <VideoCall />
            <VoiceCall />
            <div className="w-full h-fit flex flex-nowrap items-center justify-between">
                <div
                    onClick={() => {
                        setProfile(!profile);
                    }}
                    className="flex flex-nowrap items-center cursor-pointer gap-4"
                >
                    <img src={userDetails.avatar} alt="" className="w-12 h-12 ml-2 bg-slate-300 rounded-full outline outline-2 outline-primary-500 outline-offset-4" />
                    <div className="flex flex-col ">
                        <p className="text-lg text-black dark:text-white font-semibold hover:font-bold transition-all duration-300">
                            {userDetails.firstName} {userDetails.lastName}
                        </p>
                        <p className="text-xs text-green-600 dark:text-green-400 opacity-70">{userDetails.firstName} typing...</p>
                    </div>
                </div>
                <div className="flex flex-nowrap items-center p-5 pr-0 gap-2">
                    {/* <div className="flex justify-center -space-x-3 font-mono text-black text-sm  leading-6">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center z-40 bg-gray-200 shadow">05</div>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center z-30 bg-gray-200 shadow">04</div>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center z-20 bg-gray-200 shadow">03</div>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center z-10 bg-gray-200 shadow">02</div>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center z-0 bg-gray-200 shadow">01</div>
                    </div> */}
                    <svg
                        onClick={() => {
                            document.getElementById("videoCall").classList.remove("scale-0");
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width={25}
                        height={25}
                        viewBox="0 0 256 256"
                        className="text-black dark:text-white cursor-pointer"
                    >
                        <path opacity={0.8} fill="none" stroke="currentColor" strokeWidth={10} d="M48 48h112c17.728 0 32 14.272 32 32v96c0 17.728-14.272 32-32 32H48c-17.728 0-32-14.272-32-32V80c0-17.728 14.272-32 32-32zm144 112 48 32V64l-48 32" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={25}
                        height={25}
                        viewBox="0 0 32 32"
                        className="text-black dark:text-white cursor-pointer"
                        onClick={() => {
                            document.getElementById("voiceCall").classList.remove("scale-0");
                        }}
                    >
                        <path opacity={0.8} fill="none" stroke="currentColor" d="M13.6 8.5 9.5 4.3c-.5-.4-1.2-.4-1.7 0L4.7 7.5c-.7.6-.9 1.6-.6 2.4.8 2.3 2.9 6.9 7 11s8.7 6.1 11 7c.9.3 1.8.1 2.5-.5l3.1-3.1c.5-.5.5-1.2 0-1.7l-4.1-4.1c-.5-.5-1.2-.5-1.7 0L19.4 21s-2.8-1.2-5-3.3-3.3-5-3.3-5l2.5-2.5c.5-.5.5-1.3 0-1.7z" />
                    </svg>
                    <svg width={25} height={25} viewBox="0 0 24 24" opacity={0.8} fill="none" stroke="currentColor" className="text-black dark:text-white">
                        <path d="M3.353 8.95A7.511 7.511 0 0 1 8.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 0 1 5.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 0 1-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 0 1-5.597-5.597 13.354 13.354 0 0 1 0-6.1Z" />
                        <path d="M9.055 12c0 .552-.46 1-1.028 1C7.46 13 7 12.552 7 12s.46-1 1.027-1c.568 0 1.028.448 1.028 1Zm3.972 0c0 .552-.46 1-1.027 1s-1.027-.448-1.027-1 .46-1 1.027-1 1.027.448 1.027 1ZM17 12c0 .552-.46 1-1.027 1-.568 0-1.028-.448-1.028-1s.46-1 1.028-1c.567 0 1.027.448 1.027 1Z" />
                    </svg>
                </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl w-full h-full relative transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full opacity-10 dark:invert transition-all duration-300 z-0" style={{ backgroundImage: "url('/images/background-image.jpg')", backgroundRepeat: "repeat", backgroundSize: "40%" }}></div>
                <div id="chatContainer" className="absolute top-0 h-full w-full z-50 p-3 flex flex-col gap-3 overflow-y-scroll pb-5 no-scrollbar scroll-smooth transition-all duration-300">
                    {/* <div className="flex justify-end gap-2 w-full">
                        <p className="relative text-white/80 bg-gradient-to-tr from-primary-400 to-primary-600 dark:bg-primary-700 w-fit max-w-[50%] py-1 px-2 rounded-tl-lg rounded-bl-lg rounded-br-lg shadow-lg">
                            Hi hefksdflsmfcl,asmcls ad;lksamdf;osa jf;oasf;as,mfc;osajf;lks m;coxjc;oskz cxzi
                            <svg width={10} height={10} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 translate-x-full text-primary-600">
                                <path fill="currentColor" d="M0 16 16 0H0z" />
                            </svg>
                        </p>
                        <img src={userDetails.avatar} alt="" className="bg-gray-300 w-10 h-10 rounded-full" />
                    </div>
                    <div className="flex justify-start gap-2 w-full">
                        <img src={userDetails.avatar} alt="" className="bg-gray-300 w-10 h-10 rounded-full" />
                        <p className="relative text-black/80 dark:text-white/80 bg-primary-200/50 dark:bg-gray-800 w-fit max-w-[50%] py-1 px-2 rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-lg">
                            Hi hefksdflsmfcl,asmcls ad;lksamdf;osa jf;oasf;as,mfc;osajf;lks m;coxjc;oskz cxzi
                            <svg width={10} height={10} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 -translate-x-full text-primary-200/50 dark:text-gray-800 -scale-x-100">
                                <path fill="currentColor" d="M0 16 16 0H0z" />
                            </svg>
                        </p>
                    </div>
                    <div className="flex justify-start gap-2 w-full">
                        <img src={userDetails.avatar} alt="" className="bg-gray-300 w-10 h-10 rounded-full" />
                        <div className="relative grid grid-cols-2 gap-3 w-fit max-w-1/2 text-black/80 dark:text-white/80 bg-primary-200/50 dark:bg-gray-800 p-2 rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-lg">
                            <svg width={10} height={10} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 -translate-x-full text-primary-200/50 dark:text-gray-800 -scale-x-100">
                                <path fill="currentColor" d="M0 16 16 0H0z" />
                            </svg>
                            <img src="https://picsum.photos/200/300?random=1" alt="" className="h-24 aspect-square rounded-lg" />
                            <img src="https://picsum.photos/200/300?random=2" alt="" className="h-24 aspect-square rounded-lg" />
                            <img src="https://picsum.photos/200/300?random=3" alt="" className="h-24 aspect-square rounded-lg" />
                            <img src="https://picsum.photos/200/300?random=4" alt="" className="h-24 aspect-square rounded-lg" />
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="w-full h-0 origin-bottom bg-gray-100 dark:bg-secondary-800 rounded-lg flex flex-nowrap overflow-hidden transition-all duration-300" id="emojiContainer">
                <div className="w-10 p-2 h-full flex flex-col items-center justify-center border-r border-gray-400 dark:border-gray-600">
                    <div className="flex flex-col items-center gap-4">
                        {/* Emoji */}
                        <svg
                            viewBox="0 0 24 24"
                            height={24}
                            width={24}
                            className={"cursor-pointer " + (activeEmojiType === "Emoji" ? "text-primary-500" : "text-gray-400")}
                            x="0px"
                            y="0px"
                            enableBackground="new 0 0 24 24"
                            onClick={() => {
                                setActiveEmojiType("Emoji");
                            }}
                        >
                            <path fill="currentColor" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z" />
                        </svg>
                        {/* GIF */}
                        <svg
                            viewBox="0 0 24 24"
                            height={24}
                            width={24}
                            x="0px"
                            y="0px"
                            className={"cursor-pointer " + (activeEmojiType === "GIF" ? "text-primary-500" : "text-gray-400")}
                            enableBackground="new 0 0 24 24"
                            onClick={() => {
                                setActiveEmojiType("GIF");
                            }}
                        >
                            <path fill="currentColor" d="M13.177,12.013l-0.001-0.125c0-0.138,0-0.285,0-0.541c0-0.256,0-0.37,0-0.512c0-0.464,0-0.827-0.002-1.178 c-0.002-0.336-0.237-0.628-0.557-0.7c-0.345-0.077-0.689,0.084-0.826,0.4c-0.05,0.115-0.072,0.253-0.073,0.403 c-0.003,1.065-0.003,1.917-0.002,3.834c0,0.326,0,0.326,0,0.653c0,0.074,0.003,0.136,0.009,0.195 c0.032,0.302,0.272,0.562,0.57,0.619c0.477,0.091,0.878-0.242,0.881-0.734c0.002-0.454,0.003-0.817,0.002-1.633 C13.178,12.353,13.177,12.202,13.177,12.013z M9.967,11.477c-0.492-0.014-1.001-0.014-1.651-0.003 c-0.263,0.005-0.498,0.215-0.565,0.48c-0.07,0.276,0.037,0.561,0.276,0.7c0.108,0.062,0.243,0.099,0.372,0.104 c0.179,0.007,0.32,0.008,0.649,0.005c0.057,0,0.1-0.001,0.137-0.001c0,0.028,0,0.061,0,0.102c-0.001,0.28-0.001,0.396,0.003,0.546 c0.001,0.044-0.006,0.055-0.047,0.081c-0.242,0.15-0.518,0.235-0.857,0.275c-0.767,0.091-1.466-0.311-1.745-1.006 c-0.134-0.333-0.17-0.69-0.117-1.08c0.122-0.903,0.951-1.535,1.847-1.41c0.319,0.044,0.616,0.169,0.917,0.376 c0.196,0.135,0.401,0.184,0.615,0.131c0.292-0.072,0.482-0.269,0.541-0.562c0.063-0.315-0.057-0.579-0.331-0.766 C9.222,8.907,8.31,8.755,7.327,8.967C5.318,9.4,4.349,11.504,5.154,13.345c0.483,1.105,1.389,1.685,2.658,1.771 c0.803,0.054,1.561-0.143,2.279-0.579c0.318-0.193,0.498-0.461,0.508-0.803c0.014-0.52,0.015-1.046,0.001-1.578 C10.591,11.794,10.31,11.487,9.967,11.477z M18,4.25H6C3.377,4.25,1.25,6.377,1.25,9v6c0,2.623,2.127,4.75,4.75,4.75h12 c2.623,0,4.75-2.127,4.75-4.75V9C22.75,6.377,20.623,4.25,18,4.25z M21.25,15c0,1.795-1.455,3.25-3.25,3.25H6 c-1.795,0-3.25-1.455-3.25-3.25V9c0-1.795,1.455-3.25,3.25-3.25h12c1.795,0,3.25,1.455,3.25,3.25V15z M18.381,8.982 c-0.856-0.001-1.541-0.001-3.081,0c-0.544,0-0.837,0.294-0.837,0.839c0,0.707,0,1.273,0,2.546c0,0.347,0,0.347,0,0.694 c0,0.139,0,0.139,0,0.277c0,0.486,0,0.701,0,0.971c0,0.293,0.124,0.525,0.368,0.669c0.496,0.292,1.076-0.059,1.086-0.651 c0.005-0.285,0.006-0.532,0.004-1.013l0-0.045c-0.001-0.23-0.001-0.332-0.001-0.46v-0.052h0.044c0.162,0,0.292,0,0.583,0 c0.235,0,0.235,0,0.469,0c0.414,0,0.739,0,1.053-0.001c0.312-0.001,0.567-0.187,0.655-0.478c0.09-0.298-0.012-0.607-0.271-0.757 c-0.133-0.077-0.304-0.12-0.468-0.122c-0.403-0.006-0.748-0.007-1.436-0.006l-0.05,0c-0.262,0.001-0.378,0.001-0.523,0.001h-0.047 v-1.051h0.047c0.197,0,0.354,0,0.708,0c0.256,0,0.256,0,0.512,0c0.483,0,0.857,0,1.22-0.001c0.458-0.001,0.768-0.353,0.702-0.799 C19.065,9.205,18.768,8.983,18.381,8.982z" />
                        </svg>
                        {/* Stickers */}
                        <svg
                            viewBox="0 0 24 24"
                            height={24}
                            width={24}
                            x="0px"
                            y="0px"
                            className={"cursor-pointer " + (activeEmojiType === "Stickers" ? "text-primary-500" : "text-gray-400")}
                            enableBackground="new 0 0 24 24"
                            onClick={() => {
                                setActiveEmojiType("Stickers");
                            }}
                        >
                            <path fill="currentColor" d="M21.799,10.183c-0.002-0.184-0.003-0.373-0.008-0.548c-0.02-0.768-0.065-1.348-0.173-1.939 c-0.124-0.682-0.328-1.296-0.624-1.87c-0.301-0.587-0.695-1.124-1.171-1.594c-0.473-0.469-1.016-0.859-1.614-1.159 c-0.576-0.291-1.196-0.493-1.887-0.615c-0.59-0.106-1.174-0.15-1.961-0.171c-0.318-0.008-3.607-0.012-4.631,0 c-0.798,0.02-1.383,0.064-1.975,0.17C7.066,2.58,6.446,2.781,5.867,3.073c-0.596,0.299-1.139,0.69-1.614,1.16 C3.78,4.7,3.386,5.236,3.082,5.826C2.788,6.398,2.584,7.012,2.459,7.694C2.352,8.285,2.307,8.88,2.286,9.635 C2.278,9.912,2.27,12.517,2.27,12.517c0,0.52,0.008,1.647,0.016,1.925c0.02,0.755,0.066,1.349,0.172,1.938 c0.126,0.687,0.33,1.3,0.624,1.871c0.303,0.59,0.698,1.126,1.173,1.595c0.473,0.469,1.017,0.859,1.614,1.159 c0.578,0.291,1.197,0.492,1.887,0.615c0.085,0.015,0.171,0.029,0.259,0.041c0.479,0.068,0.833,0.087,1.633,0.108 c0.035,0.001,2.118-0.024,2.578-0.035c1.667-0.04,3.261-0.684,4.487-1.811c1.128-1.038,2.129-1.972,2.928-2.737 c1.242-1.19,1.99-2.806,2.097-4.528l0.066-1.052c0.001-0.296,0.001-0.499,0.001-0.668C21.806,10.915,21.8,10.2,21.799,10.183z  M18.604,16.103c-0.79,0.757-1.784,1.684-2.906,2.716c-0.588,0.541-1.292,0.919-2.044,1.154c0.051-0.143,0.116-0.276,0.145-0.433 c0.042-0.234,0.06-0.461,0.067-0.74c0.003-0.105,0.009-0.789,0.009-0.789c0.013-0.483,0.042-0.865,0.107-1.22 c0.069-0.379,0.179-0.709,0.336-1.016c0.16-0.311,0.369-0.595,0.621-0.844c0.254-0.252,0.542-0.458,0.859-0.617 c0.314-0.158,0.65-0.268,1.037-0.337c0.359-0.064,0.733-0.093,1.253-0.106c0,0,0.383,0.001,0.701-0.003 c0.301-0.008,0.523-0.025,0.755-0.066c0.186-0.034,0.348-0.105,0.515-0.169C19.806,14.568,19.311,15.425,18.604,16.103z  M20.267,11.346c-0.028,0.15-0.063,0.263-0.111,0.356c-0.06,0.116-0.128,0.211-0.208,0.29c-0.088,0.087-0.187,0.158-0.296,0.213 s-0.228,0.094-0.371,0.119c-0.141,0.025-0.298,0.037-0.52,0.043c-0.309,0.004-0.687,0.004-0.687,0.004 c-0.613,0.016-1.053,0.049-1.502,0.129c-0.527,0.094-1.002,0.249-1.447,0.473c-0.457,0.229-0.875,0.529-1.241,0.891 c-0.363,0.358-0.667,0.771-0.9,1.224C12.757,15.53,12.6,16,12.505,16.522c-0.081,0.447-0.116,0.895-0.131,1.461 c0,0-0.006,0.684-0.008,0.777c-0.006,0.208-0.018,0.37-0.043,0.511c-0.025,0.136-0.063,0.251-0.117,0.356 c-0.056,0.108-0.127,0.206-0.213,0.291c-0.088,0.087-0.187,0.158-0.296,0.213c-0.072,0.036-0.168,0.063-0.37,0.098 c-0.027,0.005-0.25,0.027-0.448,0.031c-0.021,0-1.157,0.01-1.192,0.009c-0.742-0.019-1.263-0.046-1.668-0.126 c-0.551-0.098-1.031-0.254-1.477-0.479c-0.457-0.229-0.871-0.527-1.233-0.885c-0.363-0.358-0.663-0.766-0.894-1.215 c-0.225-0.436-0.382-0.909-0.482-1.453c-0.09-0.495-0.13-1.025-0.149-1.71c-0.007-0.266-0.011-0.543-0.012-0.847 C3.769,13.262,3.777,9.94,3.784,9.675c0.02-0.685,0.061-1.214,0.151-1.712c0.098-0.54,0.256-1.012,0.481-1.45 C4.647,6.064,4.946,5.657,5.308,5.3c0.363-0.36,0.777-0.657,1.233-0.886c0.447-0.225,0.927-0.382,1.477-0.479 c0.503-0.09,1.022-0.129,1.74-0.149c1.008-0.012,4.26-0.008,4.561,0c0.717,0.019,1.236,0.058,1.737,0.148 c0.552,0.098,1.032,0.254,1.476,0.478c0.458,0.23,0.872,0.527,1.234,0.885c0.364,0.359,0.663,0.766,0.892,1.213 c0.228,0.441,0.385,0.913,0.482,1.453c0.091,0.499,0.131,1.013,0.15,1.712c0.008,0.271,0.014,1.098,0.014,1.235 C20.299,11.085,20.289,11.226,20.267,11.346z" />
                        </svg>
                    </div>
                </div>
                <div className="w-[calc(100%-2.5rem)] h-full flex flex-col justify-between p-2">
                    {activeEmojiType === "Emoji" ? (
                        <>
                            <input type="text" placeholder="Search emojis..." className="w-full px-2 py-1 shadow rounded-lg  bg-white dark:text-gray-200 dark:bg-secondary-700 placeholder:text-gray-400 focus:outline-none outline-none transition-all duration-300" />
                            <div>
                                <ul className="flex items-center overflow-x-scroll no-scrollbar max-w-full w-full">
                                    {emojiData.map((item, index) => (
                                        <TabNavItem title={item.category} id={"tab" + (index + 1)} activeTab={activeTab} setActiveTab={setActiveTab} />
                                    ))}
                                </ul>
                            </div>
                            {emojiData.map((item, index) => (
                                <TabContent id={"tab" + (index + 1)} classes="h-[calc(100%-3rem)] min-h-100% overflow-y-scroll overflow-x-hidden p-2" activeTab={activeTab}>
                                    <div className="grid grid-cols-8 items-center gap-2 w-full">
                                        {item.emojis.map((emoji, emojiIndex) => (
                                            <p
                                                key={emojiIndex}
                                                className="text-4xl h-10 cursor-pointer text-center"
                                                onClick={() => {
                                                    document.getElementById("messageInput").value += emoji[0];
                                                }}
                                            >
                                                {emoji[0]}
                                            </p>
                                        ))}
                                    </div>
                                </TabContent>
                            ))}
                        </>
                    ) : (
                        <></>
                    )}
                    {activeEmojiType === "GIF" ? (
                        <>
                            <input
                                type="text"
                                id="gifSearch"
                                name="gifSearch"
                                value={gifSearch}
                                onChange={(event) => {
                                    let query = event.target.value;
                                    setGifSearch(query);
                                    try {
                                        clearTimeout(window.gifInputTimeout);
                                    } catch {
                                    } finally {
                                        setGifOffset(0);
                                        window.gifInputTimeout = setTimeout(() => {
                                            fetch("https://tenor.googleapis.com/v2/search?appversion=browser-r20230629-1&key=AIzaSyC-P6_qz3FzCoXGLk6tgitZo4jEJ5mLzD8&client_key=tenor_web&locale=en&anon_id=AAYAmVpXVD4CrIhnyQWVCw&q=" + query + "&limit=50&contentfilter=low&pos=CDIQjpqrj6STgAMaHgoKAD-_y-9XmQQHfxIQxQmaFgvaoV4yzxWRAAAAADAy")
                                                .then((response) => response.json())
                                                .then((data) => {
                                                    setGif(data.results);
                                                    setGifOffset(data.next);
                                                })
                                                .catch((error) => {
                                                    console.log(error);
                                                });
                                        }, 1000);
                                    }
                                }}
                                placeholder="Search GIFs..."
                                className="w-full px-2 py-1 mb-2 shadow rounded-lg dark:text-gray-300 bg-white dark:bg-secondary-700 placeholder:text-gray-400 focus:outline-none outline-none transition-all duration-300"
                            />
                            <div
                                onScroll={(event) => {
                                    if (event.target.scrollTop + event.target.clientHeight > event.target.scrollHeight - 20) {
                                        fetch("https://tenor.googleapis.com/v2/search?appversion=browser-r20230629-1&key=AIzaSyC-P6_qz3FzCoXGLk6tgitZo4jEJ5mLzD8&client_key=tenor_web&locale=en&anon_id=AAYAmVpXVD4CrIhnyQWVCw&q=" + gifSearch + "&limit=50&contentfilter=low&pos=" + gifOffset)
                                            .then((response) => response.json())
                                            .then((data) => {
                                                let tempGift = gif;
                                                setGif([...tempGift, ...data.results]);
                                                setGifOffset(data.next);
                                            })
                                            .catch((error) => {
                                                console.log(error);
                                            });
                                    }
                                }}
                                className="h-[calc(100%-3rem)] overflow-y-scroll p-2"
                            >
                                <div className="grid grid-cols-4 items-center justify-between gap-2">
                                    {gif.map((gif) => {
                                        return (
                                            <img
                                                key={gif.id}
                                                onMouseEnter={(event) => {
                                                    event.target.src = gif.media_formats.gif.url;
                                                }}
                                                onMouseLeave={(event) => {
                                                    event.target.src = gif.media_formats.gifpreview.url;
                                                }}
                                                onClick={() => {
                                                    sendGIFs(gif.media_formats.gif.url);
                                                }}
                                                src={gif.media_formats.gif.url}
                                                alt={gif.title}
                                                className="w-full h-auto aspect-square object-cover rounded-lg cursor-pointer"
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                    {activeEmojiType === "Stickers" ? (
                        <>
                            <input type="text" placeholder="Search stickers..." className="w-full px-2 py-1 shadow rounded-lg bg-white dark:bg-secondary-700 placeholder:text-gray-400 text-gray-400 focus:outline-none outline-none transition-all duration-300" />
                            <div
                                onScroll={(event) => {
                                    if (event.target.scrollTop + event.target.clientHeight > event.target.scrollHeight - 20) {
                                        if (stickerOffset + 20 < stickerData.length) {
                                            setStickerOffset(stickerOffset + 20);
                                        }
                                    }
                                }}
                                className="h-[calc(100%-3rem)] overflow-y-scroll p-2 scroll-smooth"
                            >
                                <div className="grid grid-cols-4 items-center justify-between gap-2 drop-shadow-lg">
                                    {stickerData.splice(0, stickerOffset).map((sticker, index) => {
                                        return (
                                            <lottie-player
                                                key={index}
                                                name={sticker[0]}
                                                src={sticker[1]}
                                                onClick={() => {
                                                    sendStickers(sticker[1]);
                                                }}
                                                background="transparent"
                                                speed="1"
                                                hover
                                            ></lottie-player>
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <div className="h-16 w-full flex gap-2">
                <div className="bg-gray-100 dark:bg-secondary-800 w-full rounded-lg flex flex-nowrap justify-between items-center p-1 gap-1 shadow transition-all duration-300">
                    <input
                        type="text"
                        name="messageInput"
                        id="messageInput"
                        className="h-full rounded-l-lg rounded-r-md w-full px-3 bg-transparent focus:outline-none dark:text-gray-200"
                        placeholder="Type a message"
                        onKeyUp={(event) => {
                            if (event.code === "Enter" || event.code === "NumpadEnter") {
                                sendMessage();
                            }
                        }}
                    />
                    <div className="flex flex-nowrap gap-1 h-full items-center px-2 rounded-r-lg rounded-l-md drop-shadow group text-black dark:text-white">
                        {/* Image */}
                        <svg width={25} height={25} viewBox="0 0 24 24" className="opacity-70 hover:opacity-100" fill="none">
                            <mask
                                id="a"
                                style={{
                                    maskType: "alpha",
                                }}
                                maskUnits="userSpaceOnUse"
                                x={3}
                                y={3}
                                width={18}
                                height={18}
                            >
                                <path d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-2Z" fill="currentColor" />
                            </mask>
                            <g mask="url(#a)">
                                <path d="m5.41 12.59-.153.153c-.98.98-1.47 1.47-1.764 2.073a4 4 0 0 0-.25.65c-.185.644-.148 1.337-.075 2.722L3.5 24.5H21v-4.743c0-1.451 0-2.177-.239-2.836a3.994 3.994 0 0 0-.233-.525c-.33-.619-.87-1.104-1.95-2.075l-.214-.193c-.896-.807-1.344-1.21-1.856-1.324a1.999 1.999 0 0 0-.973.025c-.505.141-.932.568-1.784 1.42-.633.633-.949.949-1.288.992a1 1 0 0 1-.61-.118c-.3-.166-.479-.583-.836-1.418-.761-1.775-1.141-2.662-1.795-2.99a2 2 0 0 0-1.065-.205c-.729.062-1.401.735-2.747 2.08Z" fill="#2A4157" fillOpacity={0.24} stroke="currentColor" />
                            </g>
                            <path d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-2Z" stroke="currentColor" strokeWidth={1.2} />
                            <circle cx={16.5} cy={7.5} r={1.5} fill="currentColor" />
                        </svg>
                        {/* Location */}
                        <svg width={23} height={23} viewBox="0 0 1024 1024" className="opacity-70 hover:opacity-100">
                            <path fill="currentColor" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z" />
                            <path fill="currentColor" d="M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z" />
                        </svg>
                        {/* Mic */}
                        <svg width={20} height={20} viewBox="0 0 24 24" className="opacity-70 hover:opacity-100" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2m7 9v4m-4 0h8" />
                        </svg>
                        {/* Emoji */}
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="opacity-70 hover:opacity-100"
                            onClick={() => {
                                document.getElementById("emojiContainer").classList.toggle("h-[75rem]");
                                document.getElementById("emojiContainer").classList.toggle("h-0");
                            }}
                        >
                            <path fill="currentColor" d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.999 12 1.999Zm0 1.5a8.502 8.502 0 1 0 0 17.003A8.502 8.502 0 0 0 12 3.5ZM8.462 14.784A4.491 4.491 0 0 0 12 16.502a4.491 4.491 0 0 0 3.535-1.714.75.75 0 1 1 1.177.93A5.991 5.991 0 0 1 12 18.002a5.991 5.991 0 0 1-4.716-2.29.75.75 0 1 1 1.178-.928ZM9 8.75a1.25 1.25 0 1 1 0 2.499A1.25 1.25 0 0 1 9 8.75Zm6 0a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.499Z" />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={sendMessage} className="bg-primary-500 dark:bg-secondary-700 w-11 h-11 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="#ffffff" className="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
