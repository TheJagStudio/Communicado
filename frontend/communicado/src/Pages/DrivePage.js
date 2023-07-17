import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { SidebarAtom, ProfileAtom } from "../Atoms";
// Components
import Sidebar from "../Components/Sidebar/Sidebar";
import Profile from "../Components/Profile/Profile";
import FileSidebar from "../Components/Files/FileSidebar";

const DrivePage = () => {
    const [profile, setProfile] = useAtom(ProfileAtom);
    const [sidebar, setSidebar] = useAtom(SidebarAtom);
    // if (localStorage.getItem("metaMask") === null) {
    //     window.location.href = "/login";
    // }
    return (
        <div className={"flex flex-nowrap justify-between gap-3 h-full w-full transition-all duration-300 " + (profile ? "" : "translate-x-[6px]")}>
            <Sidebar />
            <div className={"flex flex-nowrap justify-between gap-3 transition-all duration-500 " + (sidebar && profile ? "w-[65%]" : sidebar && !profile ? "w-[85%]" : !sidebar && profile ? "w-[75%]" : "w-[94%]")}>
                <FileSidebar />
            </div>
            <Profile />
        </div>
    );
};

export default DrivePage;
