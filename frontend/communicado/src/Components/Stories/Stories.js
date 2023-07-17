import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { SidebarAtom, ProfileAtom, UserDetailAtom } from "../../Atoms";

const Stories = () => {
    const [sidebar, setSidebar] = useAtom(SidebarAtom);
    const [profile, setProfile] = useAtom(ProfileAtom);
    const [userDetails, setUserDetails] = useAtom(UserDetailAtom);
    const [userArray, setUserArray] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER + "/api/getUsers")
            .then((res) => res.json())
            .then((data) => setUserArray(data["data"]));
    }, []);

    return (
        <div className="p-5 px-0 rounded-xl shadow-xl bg-white dark:bg-secondary-900 h-full w-[30%] overflow-hidden transition-all duration-300">
            <div className="flex items-center justify-between px-5">
                <p className="text-2xl text-primary-500 font-bold">Stories</p>
                <div
                    className="bg-gray-100 dark:bg-secondary-800 p-2.5 rounded-full text-gray-400 dark:text-white cursor-pointer transition-all duration-300"
                    onClick={() => {
                        document.querySelector("#storiesInputDiv").classList.add("!w-full", "!h-full", "!p-4");
                    }}
                >
                    <svg width={18} height={18} fill="currentColor" viewBox="0 0 16 16" className="text-primary-500">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg>
                </div>
            </div>
            <div className="my-3 relative text-gray-400 px-5 transition-all duration-300">
                <svg width={16} height={16} fill="currentColor" className="absolute top-1/2 -translate-y-1/2 left-8" viewBox="0 0 16 16">
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
                <div className="sticky top-0 bg-white dark:bg-secondary-800 py-1 flex items-center gap-1 text-gray-400 dark:text-white z-40 shadow px-5 transition-all duration-300">
                    <svg width={15} height={15} viewBox="0 0 24 24" fill="none">
                        <path d="M16.42 7.95C18.86 10.39 18.86 14.35 16.42 16.79C13.98 19.23 10.02 19.23 7.58 16.79C5.14 14.35 5.14 10.39 7.58 7.95C10.02 5.51 13.98 5.51 16.42 7.95Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M8.24999 21.64C6.24999 20.84 4.49999 19.39 3.33999 17.38C2.19999 15.41 1.81999 13.22 2.08999 11.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M5.84998 4.47998C7.54998 3.14998 9.67997 2.35999 12 2.35999C14.27 2.35999 16.36 3.12997 18.04 4.40997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M15.75 21.64C17.75 20.84 19.5 19.39 20.66 17.38C21.8 15.41 22.18 13.22 21.91 11.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <p className="text-sm">Stories</p>
                </div>
                <div className="w-full px-5">
                    {userArray?.map((user, index) => {
                        if (user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) || user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === "") {
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
                </div>
            </div>
        </div>
    );
};

export default Stories;
