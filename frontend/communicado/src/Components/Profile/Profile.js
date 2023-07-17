import React from "react";
import { useAtom } from "jotai";
import { ProfileAtom, UserDetailAtom } from "../../Atoms";
import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";

// {
//     "id":4940,
//     "uid":"d746d786-8c79-49f6-8d54-6d04b4f71c8f",
//     "password":"UN49Slqn7C",
//     "firstName":"Eddy",
//     "lastName":"Murphy",
//     "username":"eddy.murphy",
//     "email":"eddy.murphy@email.com",
//     "avatar":"https://robohash.org/corruptirepellatet.png?size=300x300\u0026set=set1",
//     "gender":"Genderfluid",
//     "phoneNumber":"+63 699-073-1767 x408",
//     "social_insurance_number":"778438150",
//     "DOB":"1972-04-18",
//     "employment":{
//         "title":"Product Consulting Orchestrator",
//         "key_skill":"Problem solving"
//     },
//     "address":{
//         "city":"New Hortencia",
//         "street_name":"Lavelle Springs",
//         "street_address":"49183 Quinton Extensions",
//         "zip_code":"21210",
//         "state":"Oklahoma",
//         "country":"United States",
//         "coordinates":{
//             "lat":-85.46407131229931,
//             "lng":-167.07096310885197
//         }
//     },
//     "credit_card":{
//         "cc_number":"4804805622751"
//     },
//     "subscription":{
//         "plan":"Professional",
//         "status":"Active",
//         "payment_method":"Bitcoins",
//         "term":"Payment in advance"
//     }
// }

// Ok 👍

const Profile = () => {
    const [profile, setProfile] = useAtom(ProfileAtom);
    const [userDetails, setUserDetails] = useAtom(UserDetailAtom);

    const tabs = ["Images", "Videos", "Files", "Links"];
    const tabContent = [
        {
            data: [{ imgLink: "https://lineone.piniastudio.com/images/foods/food-4.jpg" }, { imgLink: "https://lineone.piniastudio.com/images/object/object-2.jpg" }, { imgLink: "https://lineone.piniastudio.com/images/foods/food-11.jpg" }, { imgLink: "https://lineone.piniastudio.com/images/foods/food-9.jpg" }, { imgLink: "https://lineone.piniastudio.com/images/object/object-3.jpg" }, { imgLink: "https://lineone.piniastudio.com/images/object/object-4.jpg" }, { imgLink: "https://lineone.piniastudio.com/images/foods/food-7.jpg" }],
            classes: " !grid !grid-cols-3 !gap-2 ",
        },
        {
            data: [
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" viewBox="0 0 16 16" className="text-white bg-primary-600 p-1.75 rounded-md">
                            <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" /> <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                        </svg>
                    ),
                    fileName: "Final.mp4",
                    fileDuration: "28:12",
                    fileSize: "36 MB",
                },
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" viewBox="0 0 16 16" className="text-white bg-primary-600 p-1.75 rounded-md">
                            <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" /> <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                        </svg>
                    ),
                    fileName: "Ldrp.mov",
                    fileDuration: "23:09",
                    fileSize: "32 MB",
                },
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" viewBox="0 0 16 16" className="text-white bg-primary-600 p-1.75 rounded-md">
                            <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" /> <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                        </svg>
                    ),
                    fileName: "Dreamers.mp4",
                    fileDuration: "14:57",
                    fileSize: "27 MB",
                },
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" viewBox="0 0 16 16" className="text-white bg-primary-600 p-1.75 rounded-md">
                            <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" /> <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                        </svg>
                    ),
                    fileName: "Final.mp4",
                    fileDuration: "28:12",
                    fileSize: "36 MB",
                },
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" viewBox="0 0 16 16" className="text-white bg-primary-600 p-1.75 rounded-md">
                            <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" /> <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                        </svg>
                    ),
                    fileName: "Ldrp.mov",
                    fileDuration: "23:09",
                    fileSize: "32 MB",
                },
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" viewBox="0 0 16 16" className="text-white bg-primary-600 p-1.75 rounded-md">
                            <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" /> <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                        </svg>
                    ),
                    fileName: "Dreamers.mp4",
                    fileDuration: "14:57",
                    fileSize: "27 MB",
                },
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" viewBox="0 0 16 16" className="text-white bg-primary-600 p-1.75 rounded-md">
                            <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" /> <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                        </svg>
                    ),
                    fileName: "Final.mp4",
                    fileDuration: "28:12",
                    fileSize: "36 MB",
                },
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" viewBox="0 0 16 16" className="text-white bg-primary-600 p-1.75 rounded-md">
                            <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" /> <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                        </svg>
                    ),
                    fileName: "Ldrp.mov",
                    fileDuration: "23:09",
                    fileSize: "32 MB",
                },
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" viewBox="0 0 16 16" className="text-white bg-primary-600 p-1.75 rounded-md">
                            <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" /> <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                        </svg>
                    ),
                    fileName: "Dreamers.mp4",
                    fileDuration: "14:57",
                    fileSize: "27 MB",
                },
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" viewBox="0 0 16 16" className="text-white bg-primary-600 p-1.75 rounded-md">
                            <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" /> <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                        </svg>
                    ),
                    fileName: "Final.mp4",
                    fileDuration: "28:12",
                    fileSize: "36 MB",
                },
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" viewBox="0 0 16 16" className="text-white bg-primary-600 p-1.75 rounded-md">
                            <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" /> <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                        </svg>
                    ),
                    fileName: "Ldrp.mov",
                    fileDuration: "23:09",
                    fileSize: "32 MB",
                },
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" viewBox="0 0 16 16" className="text-white bg-primary-600 p-1.75 rounded-md">
                            <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" /> <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                        </svg>
                    ),
                    fileName: "Dreamers.mp4",
                    fileDuration: "14:57",
                    fileSize: "27 MB",
                },
            ],
            classes: " !grid !grid-cols-1 !gap-3 ",
        },
        {
            data: [
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" className="text-white bg-primary-600 p-3 rounded-md" viewBox="0 0 16 16">
                            <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                            <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
                            <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                        </svg>
                    ),
                    fileName: "asddsa dadasd ad asdaSong Name",
                    fileDuration: "03:12",
                    fileSize: "8.32 MB",
                },
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" className="text-white bg-primary-600 p-3 rounded-md" viewBox="0 0 16 16">
                            <path d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z" />
                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                        </svg>
                    ),
                    fileName: "Final.pdf",
                    fileSize: "8.32 MB",
                },
            ],
            classes: " !grid !grid-cols-1 !gap-3",
        },
        {
            data: [
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" className="text-white bg-primary-600 p-2.5 rounded-md" viewBox="0 0 16 16">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                        </svg>
                    ),
                    linkName: "This is a Link to Youtube",
                    link: "https://www.youtube.com",
                },
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" className="text-white bg-primary-600 p-2.5 rounded-md" viewBox="0 0 16 16">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                        </svg>
                    ),
                    linkName: "This is a Link to Youtube",
                    link: "https://www.youtube.com",
                },
                {
                    svg: (
                        <svg width="43" height="43" fill="currentColor" className="text-white bg-primary-600 p-2.5 rounded-md" viewBox="0 0 16 16">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                        </svg>
                    ),
                    linkName: "This is a Link to Youtube",
                    link: "https://www.youtube.com",
                },
            ],
            classes: " !grid !grid-cols-1 !gap-3 ",
        },
    ];

    const [activeTab, setActiveTab] = React.useState("tab1");
    // ok
    return (
        <div className={"rounded-xl bg-white dark:bg-secondary-900 h-full flex flex-col items-center justify-start py-5 shadow-xl overflow-hidden transition-all duration-500 origin-right " + (profile ? "w-[20%] " : "w-[0%]")}>
            {/* User Details */}
            <div className="flex flex-col items-center justify-center mb-5">
                <img src={userDetails?.avatar} className="w-28 h-28 bg-slate-300 border rounded-full object-center object-cover mb-2.5" alt="Images" />
                {/* Name */}
                <p className="text-lg font-medium dark:text-white/80 mb-1">
                    <span className="mr-1.5">{userDetails?.firstName}</span>
                    <span>{userDetails?.lastName}</span>
                </p>
                {/* Phone Number */}
                <p className="text-sm font-light text-gray-500 mb-3">{userDetails?.phoneNumber}</p>
                {/* Call | V-Call | Message */}
                <div className="flex items-center justify-center gap-5">
                    <span className="cursor-pointer hover:scale-110 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" className="text-black dark:text-white">
                            <path opacity="0.8" fill="none" stroke="currentColor" d="M13.6 8.5 9.5 4.3c-.5-.4-1.2-.4-1.7 0L4.7 7.5c-.7.6-.9 1.6-.6 2.4.8 2.3 2.9 6.9 7 11s8.7 6.1 11 7c.9.3 1.8.1 2.5-.5l3.1-3.1c.5-.5.5-1.2 0-1.7l-4.1-4.1c-.5-.5-1.2-.5-1.7 0L19.4 21s-2.8-1.2-5-3.3-3.3-5-3.3-5l2.5-2.5c.5-.5.5-1.3 0-1.7z"></path>
                        </svg>
                    </span>
                    <span className="cursor-pointer hover:scale-110 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256" className="text-black dark:text-white">
                            <path opacity="0.8" fill="none" stroke="currentColor" strokeWidth="10" d="M48 48h112c17.728 0 32 14.272 32 32v96c0 17.728-14.272 32-32 32H48c-17.728 0-32-14.272-32-32V80c0-17.728 14.272-32 32-32zm144 112 48 32V64l-48 32"></path>
                        </svg>
                    </span>
                    <span className="cursor-pointer hover:scale-110 transition-all duration-200">
                        <svg width="22" height="22" viewBox="0 0 24 24" opacity="0.8" fill="none" stroke="currentColor" className="text-black dark:text-white">
                            <path d="M3.353 8.95A7.511 7.511 0 0 1 8.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 0 1 5.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 0 1-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 0 1-5.597-5.597 13.354 13.354 0 0 1 0-6.1Z"></path>
                            <path d="M9.055 12c0 .552-.46 1-1.028 1C7.46 13 7 12.552 7 12s.46-1 1.027-1c.568 0 1.028.448 1.028 1Zm3.972 0c0 .552-.46 1-1.027 1s-1.027-.448-1.027-1 .46-1 1.027-1 1.027.448 1.027 1ZM17 12c0 .552-.46 1-1.027 1-.568 0-1.028-.448-1.028-1s.46-1 1.028-1c.567 0 1.027.448 1.027 1Z"></path>
                        </svg>
                    </span>
                </div>
            </div>

            <div className="flex flex-col items-start justify-center w-full pb-3">
                <ul className="flex items-center justify-start overflow-x-scroll h-11 no-scrollbar w-full">
                    {tabs.map((tab, i) => (
                        <TabNavItem title={tab} id={"tab" + (i + 1)} activeTab={activeTab} setActiveTab={setActiveTab} key={i} />
                    ))}
                </ul>
                <div className="px-3 w-full overflow-y-scroll h-[400px] no-scrollbar">
                    {tabContent.map((content, i) => (
                        <TabContent id={"tab" + (i + 1)} classes={content.classes} activeTab={activeTab} key={i}>
                            {content.data.map((data, innerIndex) => (
                                <div key={innerIndex}>
                                    {data.imgLink ? (
                                        <img src={data.imgLink} className="w-full h-full rounded-md" alt="Img" />
                                    ) : data.link ? (
                                        <a href={data.link} target="_blank" className="flex items-start justify-start gap-3">
                                            <span>{data.svg}</span>
                                            <div>
                                                <p className="w-full max-w-[200px] truncate text-gray-600 dark:text-gray-300">{data.fileName ? data.fileName : data.linkName}</p>
                                                <p className="text-xs text-gray-400 font-light mt-0.5">
                                                    {data.fileDuration ? <span className="mr-2">{data.fileDuration}</span> : null}
                                                    <span>{data.link}</span>
                                                </p>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex items-start justify-start gap-3">
                                            <span>{data.svg}</span>
                                            <div>
                                                <p className="w-full max-w-[200px] truncate text-gray-600 dark:text-gray-300">{data.fileName ? data.fileName : data.linkName}</p>
                                                <p className="text-xs text-gray-400 font-light mt-0.5">
                                                    {data.fileDuration ? <span className="mr-2">{data.fileDuration}</span> : null}
                                                    <span>{data.fileSize}</span>
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </TabContent>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
