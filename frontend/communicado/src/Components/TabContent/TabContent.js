import React from "react";

const TabContent = ({ id, activeTab, children, classes }) => {
    return activeTab === id ? (
        <div className="py-4 w-full h-full">
            <div className={"flex flex-wrap items-center justify-center md:justify-start mx-auto w-full !list-none" + classes}>{children}</div>
        </div>
    ) : null;
};

export default TabContent;
