import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { SidebarAtom, ProfileAtom, UserDetailAtom } from "../../Atoms";

const FileSidebar = () => {
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
                <p className="text-2xl text-primary-500 font-bold">My Cloud</p>
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
            <div className="flex items-center justify-center w-full px-4">
                <div className="flex items-center justify-between w-full">
                    <p>My Files</p>
                    <button className="bg-gray-500 p-1 py-0 text-xs">-</button>
                </div>
            </div>
        </div>
    );
};

export default FileSidebar;
