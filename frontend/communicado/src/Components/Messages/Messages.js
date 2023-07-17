import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { SidebarAtom, ProfileAtom, UserDetailAtom } from "../../Atoms";

import MoreOptions from "../MoreOptions/MoreOptions";

const Messages = ({ peer }) => {
    const [sidebar, setSidebar] = useAtom(SidebarAtom);
    const [profile, setProfile] = useAtom(ProfileAtom);
    const [userDetails, setUserDetails] = useAtom(UserDetailAtom);
    const [pinUserArray, setPinUserArray] = useState([]);
    const [userArray, setUserArray] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch("https://random-data-api.com/api/users/random_user?size=5")
            .then((res) => res.json())
            .then((data) => setPinUserArray(data));
        fetch(process.env.REACT_APP_SERVER + "/api/getUsers")
            .then((res) => res.json())
            .then((data) => setUserArray(data["data"]));
    }, []);

    return (
        <>
            <div className="p-5 px-0 rounded-xl shadow-xl bg-white dark:bg-secondary-900 h-full w-[30%] transition-all duration-300 overflow-hidden relative">
                <MoreOptions />
                <div className="flex items-center justify-between px-5">
                    <p className="text-2xl text-primary-500 font-bold">Messages</p>
                    <div
                        className="bg-gray-100 dark:bg-secondary-800 p-3 rounded-full text-gray-400 dark:text-white cursor-pointer transition-all duration-300"
                        onClick={() => {
                            document.getElementById("moreOptionsContainer").classList.toggle("scale-0");
                            document.getElementById("moreOptionsContainer").classList.toggle("opacity-0");
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                    </div>
                </div>
                <div className="my-3 relative text-gray-400 px-5 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="absolute top-1/2 -translate-y-1/2 left-8" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(event) => {
                            setSearchQuery(event.target.value);
                        }}
                        className="w-full !outline-none p-2 px-3 pl-10 rounded-lg bg-gray-100 dark:bg-secondary-800 placeholder:text-gray-400 transition-all duration-300"
                    />
                </div>
                <div className="max-h-[calc(100vh-160px)] overflow-y-scroll no-scrollbar">
                    {/* <div className="sticky top-0 bg-white dark:bg-secondary-800 py-1 flex items-center gap-1 text-gray-400 dark:text-white z-40 shadow px-5 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} fill="currentColor" className="bi bi-pin" viewBox="0 0 16 16">
                            <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z" />
                        </svg>
                        <p className="text-sm">Pinned&nbsp;Messages</p>
                    </div>
                    <div className="w-full px-5">
                        {pinUserArray.map((user, index) => {
                            if (user.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) || user.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === "") {
                                return (
                                    <div
                                        onClick={() => {
                                            setUserDetails(user);
                                        }}
                                        className="my-3 flex items-center justify-between cursor-pointer max-w-full"
                                        key={index}
                                    >
                                        <div className="flex items-center">
                                            <img src={user.avatar} alt="" className={"bg-slate-300 rounded-full outline outline-2 outline-primary-500 transition-all duration-300 aspect-square " + (profile ? "w-7 h-7" : "w-9 h-9")} />
                                            <div className={"flex flex-col transition-all duration-300 " + (profile ? "ml-2" : "ml-4")}>
                                                <p className={"text-black dark:text-white/80 font-semibold transition-all duration-300 truncate " + (profile ? "text-sm" : "text-lg")}>
                                                    {user.firstName} {user.lastName}
                                                </p>
                                                <p className="text-xs text-green-600 opacity-70">{user.firstName} typing...</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <p className="text-xs text-gray-400 opacity-70">09:26 PM</p>
                                            <p className="text-xs text-white bg-primary-500 w-5 h-5 flex items-center justify-center mt-1 rounded-full">2</p>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div> */}
                    <div className="sticky top-0 bg-white dark:bg-secondary-800 py-1 flex items-center gap-1 text-gray-400 dark:text-white z-40 shadow px-5 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <p className="text-sm">All Messages</p>
                    </div>
                    <div className="w-full px-5">
                        {userArray?.map((user, index) => {
                            if (user.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) || user.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === "") {
                                return (
                                    <div
                                        onClick={() => {
                                            setUserDetails(user);

                                            const conn = peer.connect(user["metaMask"]);
                                            console.log(localStorage.getItem("metaMask"), "connecting", user["metaMask"]);

                                            peer.on("connection", (conn) => {
                                                conn.on("data", (data) => {
                                                    let chatContainer = document.getElementById("chatContainer");
                                                    let message = data;
                                                    if (data.includes("%%gif%%")) {
                                                        let newDiv = document.createElement("div");
                                                        newDiv.setAttribute("class", "flex justify-start gap-2 w-full");
                                                        let innerNewDiv = document.createElement("div");
                                                        innerNewDiv.setAttribute("class", "relative text-white/80 bg-gradient-to-tr bg-primary-200/50 dark:bg-gray-800  w-fit max-w-[50%] p-2 rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-lg");
                                                        let newGIF = document.createElement("img");
                                                        newGIF.setAttribute("src", message.replace("%%gif%%", ""));
                                                        newGIF.setAttribute("class", "h-40 aspect-auto rounded-lg");
                                                        let newUserImage = document.createElement("img");
                                                        newUserImage.setAttribute("src", user.avatar);
                                                        newUserImage.setAttribute("class", "bg-gray-300 w-10 h-10 rounded-full");
                                                        innerNewDiv.appendChild(newGIF);
                                                        innerNewDiv.innerHTML += '<svg width="10" height="10" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="absolute top-0 left-0 -translate-x-full text-primary-200/50 dark:text-gray-800 -scale-x-100"><path fill="currentColor" d="M0 16 16 0H0z"></path></svg>';
                                                        chatContainer.appendChild(newDiv);
                                                        newDiv.appendChild(newUserImage);
                                                        newDiv.appendChild(innerNewDiv);
                                                        chatContainer.scrollTo(0, chatContainer.scrollHeight);
                                                    } else if (data.includes("%%sticker%%")) {
                                                        let chatContainer = document.getElementById("chatContainer");
                                                        let newDiv = document.createElement("div");
                                                        newDiv.setAttribute("class", "flex justify-start gap-2 w-full");
                                                        let innerNewDiv = document.createElement("div");
                                                        innerNewDiv.setAttribute("class", "relative text-white/80 bg-gradient-to-tr bg-primary-200/50 dark:bg-gray-800  w-fit max-w-[50%] p-2 rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-lg");
                                                        let newSticker = document.createElement("lottie-player");
                                                        newSticker.setAttribute("src", message.replace("%%sticker%%", ""));
                                                        newSticker.setAttribute("background", "transparent");
                                                        newSticker.setAttribute("hover", "true");
                                                        newSticker.setAttribute("speed", "1");
                                                        newSticker.setAttribute("style", "height: 10rem;");
                                                        let newUserImage = document.createElement("img");
                                                        newUserImage.setAttribute("src", userDetails.avatar);
                                                        newUserImage.setAttribute("class", "bg-gray-300 w-10 h-10 rounded-full");
                                                        innerNewDiv.appendChild(newSticker);
                                                        innerNewDiv.innerHTML += '<svg width="10" height="10" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="absolute top-0 left-0 -translate-x-full text-primary-200/50 dark:text-gray-800 -scale-x-100"><path fill="currentColor" d="M0 16 16 0H0z"></path></svg>';
                                                        chatContainer.appendChild(newDiv);
                                                        newDiv.appendChild(newUserImage);
                                                        newDiv.appendChild(innerNewDiv);
                                                        chatContainer.scrollTo(0, chatContainer.scrollHeight);
                                                    } else {
                                                        let newDiv = document.createElement("div");
                                                        newDiv.setAttribute("class", "flex justify-start gap-2 w-full");
                                                        let newP = document.createElement("p");
                                                        newP.setAttribute("class", "relative text-black/80 dark:text-white/80 bg-primary-200/50 dark:bg-gray-800 w-fit max-w-[50%] py-1 px-2 rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-lg");
                                                        try {
                                                            newP.innerHTML = message + '<svg width="10" height="10" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="absolute top-0 left-0 -translate-x-full text-primary-200/50 dark:text-gray-800 -scale-x-100"><path fill="currentColor" d="M0 16 16 0H0z"></path></svg>';
                                                        } catch (e) {
                                                            newP.innerHTML = message;
                                                        }
                                                        let newImg = document.createElement("img");
                                                        newImg.setAttribute("src", user.avatar);
                                                        newImg.setAttribute("class", "bg-gray-300 w-10 h-10 rounded-full");
                                                        newDiv.appendChild(newImg);
                                                        newDiv.appendChild(newP);
                                                        chatContainer.appendChild(newDiv);
                                                        chatContainer.scrollTo(0, chatContainer.scrollHeight);
                                                        document.getElementById("messageInput").value = "";
                                                    }
                                                });
                                            });
                                        }}
                                        className="my-3 flex items-center justify-between cursor-pointer"
                                        key={index}
                                    >
                                        <div className="flex items-center">
                                            <img src={user.avatar} alt="" className={"bg-slate-300 rounded-full outline outline-2 outline-primary-500 transition-all duration-300 aspect-square " + (profile ? "w-7 h-7" : "w-9 h-9")} />
                                            <div className={"flex flex-col transition-all duration-300 min-w-10 " + (profile ? "ml-2" : "ml-4")}>
                                                <p className={"text-black dark:text-white/80 font-semibold transition-all duration-300 truncate max-w-full " + (profile ? "text-sm" : "text-lg")}>
                                                    {user.firstName} {user.lastName}
                                                </p>
                                                <p className="text-xs text-green-600 opacity-70">{user.firstName} typing...</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <p className="text-xs text-gray-400 opacity-70">09:26 PM</p>
                                            <p className="text-xs text-white bg-primary-500 w-5 h-5 flex items-center justify-center mt-1 rounded-full">2</p>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Messages;
