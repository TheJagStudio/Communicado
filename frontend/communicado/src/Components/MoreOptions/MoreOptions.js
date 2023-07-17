import React from "react";

const MoreOptions = () => {
    return (
        <div className="w-max min-w-[170px] h-max absolute top-16 right-1 scale-0 opacity-0 origin-top-right flex items-center justify-center bg-white dark:bg-secondary-700 rounded-lg py-3 shadow-xl z-50 transition-all duration-300" id="moreOptionsContainer">
            <div className="w-full">
                <ul className="w-full">
                    <li className="px-3 pl-5 py-2 hover:bg-gray-100 dark:hover:bg-secondary-800 text-gray-400 hover:text-gray-800 dark:hover:text-white cursor-pointer w-full">New Group</li>
                    <li className="px-3 pl-5 py-2 hover:bg-gray-100 dark:hover:bg-secondary-800 text-gray-400 hover:text-gray-800 dark:hover:text-white cursor-pointer w-full">New Community</li>
                    <li className="px-3 pl-5 py-2 hover:bg-gray-100 dark:hover:bg-secondary-800 text-gray-400 hover:text-gray-800 dark:hover:text-white cursor-pointer w-full">Select Chats</li>
                    <li className="px-3 pl-5 py-2 hover:bg-gray-100 dark:hover:bg-secondary-800 text-gray-400 hover:text-gray-800 dark:hover:text-white cursor-pointer w-full">Logout</li>
                </ul>
            </div>
        </div>
    );
};

export default MoreOptions;
