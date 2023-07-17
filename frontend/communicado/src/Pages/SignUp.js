import React from "react";

const SignUp = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <p className="text-black dark:text-white">Welcome to</p>
                    <div className="flex flex-nowrap items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="3800 1200 100 3500">
                            <g fill="#296eff">
                                <path d="M3975 4365c-306-43-562-171-781-391-232-232-384-561-396-857-3-69-3-69 179-69 100 0 187 3 192 7 6 3 11 24 11 45 0 148 92 373 215 528 124 153 319 281 510 333 121 32 320 37 447 11 160-33 309-106 438-213 67-57 67-57 201 77 133 134 133 134 99 170-49 51-178 146-257 190-268 151-570 210-858 169z" />
                                <path d="M3975 3885c-281-62-500-236-625-496-44-93-76-207-82-290-3-54-3-54 186-54s189 0 202 65c40 192 193 349 385 395 123 29 243 12 358-51 36-20 78-43 92-50 40-22 62-8 187 119 114 114 114 114 59 163-104 92-261 170-399 198-93 19-279 20-363 1zm-1365-939c-109-23-202-100-239-200-19-52-32-141-24-163 4-10 163-13 754-13 412 0 749 3 749 7 0 3-18 21-39 40-77 66-136 176-165 313-5 25-5 25-493 26-338 1-505-2-543-10zm1856-361c-49-33-121-69-171-86-30-10-184-14-640-18-600-6-600-6-652-33-111-59-183-171-183-285 0-63 0-63 720-63 799 0 802 0 953 65 105 45 178 90 244 150 54 50 54 50-64 167-65 64-129 120-143 123-18 4-37-1-64-20z" />
                                <path d="M4810 2258c-106-95-264-181-407-220-71-19-112-22-468-27-390-6-390-6-457-39-130-64-195-178-189-329 1-23 1-23 464-23 487 0 579 6 737 46 214 54 414 160 570 303 65 60 65 60-70 195s-135 135-180 94z" />
                            </g>
                        </svg>
                        <p className={"text-primary-500 text-lg font-semibold transition-all -translate-x-1 overflow-hidden "}>OMMUNICADO</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-secondary-700 p-7 shadow-xl rounded-lg mt-4">
                    <div className="w-full flex items-center justify-center mb-5">
                        <div className="h-28 w-28 rounded-full p-2 border border-gray-300 relative flex items-center justify-center cursor-pointer overflow-hidden">
                            <p className="text-xs text-center text-gray-400">Choose an avatar</p>
                            <img src="https://robohash.org/corruptirepellatet.png" alt="" className="absolute top-0 left-0 w-full h-full aspect-square bg-white dark:bg-secondary-900" />
                            <input type="file" className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer" onInputCapture={(event) => {}} />
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="relative text-gray-400 transition-all duration-300 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="absolute top-1/2 -translate-y-1/2 left-4" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                            <input type="text" placeholder="Enter first name..." className="w-full !outline-none p-2 px-3 pl-10 rounded-lg bg-transparent border border-gray-300 hover:border-gray-400 focus:border-primary-500 transition-all duration-300" />
                        </div>
                        <div className="relative text-gray-400 transition-all duration-300 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="absolute top-1/2 -translate-y-1/2 left-4" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                            <input type="text" placeholder="Enter last name..." className="w-full !outline-none p-2 px-3 pl-10 rounded-lg bg-transparent border border-gray-300 hover:border-gray-400 focus:border-primary-500 transition-all duration-300" />
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="relative text-gray-400 transition-all duration-300 my-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="absolute top-1/2 -translate-y-1/2 left-4" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                            <input type="email" placeholder="Enter email..." className="w-full !outline-none p-2 px-3 pl-10 rounded-lg bg-transparent border border-gray-300 hover:border-gray-400 focus:border-primary-500 transition-all duration-300" />
                        </div>
                        <div className="relative text-gray-400 transition-all duration-300 my-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="absolute top-1/2 -translate-y-1/2 left-4" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            <input type="tel" placeholder="Enter phone number..." className="w-full !outline-none p-2 px-3 pl-10 rounded-lg bg-transparent border border-gray-300 hover:border-gray-400 focus:border-primary-500 transition-all duration-300" />
                        </div>
                    </div>
                    <div className="flex items-center gap-5 w-full">
                        <div className="relative text-gray-400 transition-all duration-300 my-3 w-[48%]">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="absolute top-1/2 -translate-y-1/2 left-4" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                            </svg>
                            <input type="date" placeholder="Enter date..." className="w-full !outline-none p-2 px-3 pl-10 rounded-lg bg-transparent border border-gray-300 hover:border-gray-400 focus:border-primary-500 transition-all duration-300" />
                        </div>
                        <div className="relative text-gray-400 transition-all duration-300 my-3 w-[49%]">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="absolute top-1/2 -translate-y-1/2 left-4" viewBox="0 0 31.192 31.192">
                                <path d="M26.629,4.563c-6.084-6.084-15.983-6.084-22.066,0c-6.084,6.084-6.084,15.983,0,22.066c6.084,6.084,15.983,6.084,22.066,0 C32.713,20.546,32.713,10.646,26.629,4.563z M22.573,22.573c-3.847,3.847-10.106,3.847-13.953,0s-3.847-10.106,0-13.953 c3.847-3.847,10.106-3.847,13.953,0C26.42,12.466,26.42,18.726,22.573,22.573z" />
                            </svg>

                            <select className="w-full !outline-none p-2.5 px-3 pl-10 rounded-lg bg-transparent border border-gray-300 hover:border-gray-400 focus:border-primary-500 transition-all duration-300">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full p-2 text-center bg-primary-500 dark:bg-secondary-900 rounded-lg text-white mt-5 cursor-pointer">
                        <p>Submit</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
