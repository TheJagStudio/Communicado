import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { ProfileAtom } from "../Atoms";
// Components
import Sidebar from "../Components/Sidebar/Sidebar";
import Profile from "../Components/Profile/Profile";
import Home from "../Components/Home/Home";

const Homepage = () => {
    const [profile, setProfile] = useAtom(ProfileAtom);
    // if (localStorage.getItem("metaMask") === null) {
    //     window.location.href = "/login";
    // }

    return (
        <div className={"flex flex-nowrap justify-between gap-3 h-full w-full transition-all duration-300 " + (profile ? "" : "translate-x-[6px]")}>
            <Sidebar />
            <Home />
            <Profile />
        </div>
    );
};

export default Homepage;
