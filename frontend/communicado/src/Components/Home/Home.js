import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { SidebarAtom, ProfileAtom, UserDetailAtom } from "../../Atoms";
import { Peer } from "peerjs";
import Chat from "../Chat/Chat";
import Messages from "../Messages/Messages";

const Home = () => {
    const [sidebar, setSidebar] = useAtom(SidebarAtom);
    const [profile, setProfile] = useAtom(ProfileAtom);
    const [peer, setPeer] = useState(null);
    useEffect(() => {
        setPeer(new Peer(localStorage.getItem("metaMask")));
    }, []);

    return (
        <div className={"flex flex-nowrap justify-between gap-3 transition-all duration-500 " + (sidebar && profile ? "w-[65%]" : sidebar && !profile ? "w-[85%]" : !sidebar && profile ? "w-[75%]" : "w-[94%]")}>
            <Messages peer={peer} />
            <Chat peer={peer} />
        </div>
    );
};

export default Home;
