import React from "react";
import { useAtom } from "jotai";
import { SidebarAtom, ProfileAtom, UserDetailAtom } from "../Atoms";
// Components
import Sidebar from "../Components/Sidebar/Sidebar";
import Profile from "../Components/Profile/Profile";
import Stories from "../Components/Stories/Stories";
import ViewStories from "../Components/Stories/ViewStories";

const StoriesPage = () => {
    const [profile, setProfile] = useAtom(ProfileAtom);
    const [sidebar, setSidebar] = useAtom(SidebarAtom);
    return (
        <div className={"flex flex-nowrap justify-between gap-3 h-full w-full transition-all duration-300 " + (profile ? "" : "translate-x-[6px]")}>
            <Sidebar />
            <div className={"flex flex-nowrap justify-between gap-3 transition-all duration-500 " + (sidebar && profile ? "w-[65%]" : sidebar && !profile ? "w-[85%]" : !sidebar && profile ? "w-[75%]" : "w-[94%]")}>
                <Stories />
                <ViewStories />
            </div>
            <Profile />
        </div>
    );
};

export default StoriesPage;
