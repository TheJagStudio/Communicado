import React from "react";

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <li onClick={handleClick} className={"py-2 md:px-3 px-2 md:mx-3 mx-2 text-sm font-medium cursor-pointer z-10 border-b-2 " + (activeTab === id ? " border-primary-500 text-primary-500" : "border-transparent text-gray-400")}>
            {title}
        </li>
    );
};

export default TabNavItem;
