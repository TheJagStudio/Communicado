import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { SidebarAtom, SidebarData } from "../../Atoms";

const Sidebar = () => {
    const [sidebar, setSidebar] = useAtom(SidebarAtom);
    const [sidebarLinks, setSidebarLinks] = useAtom(SidebarData);
    const [activePage, setActivePage] = useState("abc");

    useEffect(() => {
        if (activePage === "abc") {
            if (window.location.pathname === "/") {
                setActivePage("Messages");
            } else if (window.location.pathname === "/stories") {
                setActivePage("Stories");
            } else {
                setActivePage("Messages");
            }
        }
    }, []);

    return (
        <div className={"h-full flex flex-col items-center justify-between bg-white dark:bg-secondary-900 shadow-xl rounded-xl transition-all duration-300 overflow-hidden p-5 " + (sidebar ? "w-[15%]" : "w-[5%] px-2")}>
            <div className="flex flex-col">
                <div
                    onClick={() => {
                        setSidebar(!sidebar);
                    }}
                    className="flex flex-nowrap items-center justify-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="3800 1200 100 3500">
                        <g fill="#296eff">
                            <path d="M3975 4365c-306-43-562-171-781-391-232-232-384-561-396-857-3-69-3-69 179-69 100 0 187 3 192 7 6 3 11 24 11 45 0 148 92 373 215 528 124 153 319 281 510 333 121 32 320 37 447 11 160-33 309-106 438-213 67-57 67-57 201 77 133 134 133 134 99 170-49 51-178 146-257 190-268 151-570 210-858 169z" />
                            <path d="M3975 3885c-281-62-500-236-625-496-44-93-76-207-82-290-3-54-3-54 186-54s189 0 202 65c40 192 193 349 385 395 123 29 243 12 358-51 36-20 78-43 92-50 40-22 62-8 187 119 114 114 114 114 59 163-104 92-261 170-399 198-93 19-279 20-363 1zm-1365-939c-109-23-202-100-239-200-19-52-32-141-24-163 4-10 163-13 754-13 412 0 749 3 749 7 0 3-18 21-39 40-77 66-136 176-165 313-5 25-5 25-493 26-338 1-505-2-543-10zm1856-361c-49-33-121-69-171-86-30-10-184-14-640-18-600-6-600-6-652-33-111-59-183-171-183-285 0-63 0-63 720-63 799 0 802 0 953 65 105 45 178 90 244 150 54 50 54 50-64 167-65 64-129 120-143 123-18 4-37-1-64-20z" />
                            <path d="M4810 2258c-106-95-264-181-407-220-71-19-112-22-468-27-390-6-390-6-457-39-130-64-195-178-189-329 1-23 1-23 464-23 487 0 579 6 737 46 214 54 414 160 570 303 65 60 65 60-70 195s-135 135-180 94z" />
                        </g>
                    </svg>
                    <p className={"text-primary-500 text-lg font-semibold transition-all -translate-x-1 overflow-hidden " + (sidebar ? "opacity-100 w-full" : "opacity-0 w-[0%]")}>OMMUNICADO</p>
                </div>
                <div className={"my-5 flex flex-col gap-2 transition-all duration-300 " + (sidebar ? "items-start" : "items-center")}>
                    {sidebarLinks.map((item, index) => (
                        <a href={item.link} className="w-full" key={index}>
                            <div className={"flex items-center font-medium gap-2 w-full my-3 rounded-lg p-2 first-of-type:mt-0 " + (sidebar ? " " : " justify-center ") + (activePage === item.name ? " bg-primary-500 text-white " : " text-gray-300 ")}>
                                {item.svg}
                                <p className={"text-lg font-semibold transition-all overflow-hidden " + (sidebar ? "opacity-100 w-28" : "opacity-0 w-[0%]")}>{item.name}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <div>
                <svg
                    onClick={() => {
                        // change theme
                        document.documentElement.classList.toggle("dark");
                        localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
                    }}
                    width={40}
                    height={40}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M13.589 21.659c-3.873 1.038-8.517-.545-10.98-3.632a1 1 0 0 1 .751-1.623c3.984-.118 6.662-1.485 8.17-4.098 1.51-2.613 1.354-5.616-.535-9.125a1 1 0 0 1 1.03-1.463c3.904.59 7.597 3.82 8.635 7.694 1.43 5.334-1.737 10.818-7.071 12.247z" fill="#000" />
                </svg>
            </div>
        </div>
    );
};

export default Sidebar;
