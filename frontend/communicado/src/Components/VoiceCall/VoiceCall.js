import React, { useState } from "react";

const VoiceCall = () => {
    const [micOn, setMicOn] = useState(false);

    return (
        <div id="voiceCall" className="w-72 h-72 bg-gray-100 dark:bg-secondary-700 flex items-center justify-center shadow-xl rounded-lg absolute top-8 right-7 z-[99] scale-0 transition-all duration-300">
            <div className="flex flex-col items-center gap-3">
                <img src="https://robohash.org/sedlaboriosamquis.png" alt="" className="w-24 h-24 rounded-full bg-gray-300" />
                <p className="text-gray-400">Virgilio</p>
            </div>
            <div className="w-fit absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-gray-300 dark:bg-secondary-900 rounded-lg p-2 px-4">
                {/* Mic */}
                {micOn ? (
                    <div
                        className="bg-white dark:bg-secondary-900 dark:text-white p-2.5 rounded-full cursor-pointer"
                        onClick={() => {
                            setMicOn(!micOn);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16">
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                        </svg>
                    </div>
                ) : (
                    <div
                        className="bg-red-500 text-white p-2.5 rounded-full cursor-pointer"
                        onClick={() => {
                            setMicOn(!micOn);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="currentColor" className="bi bi-mic-mute" viewBox="0 0 16 16">
                            <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879l-1-1V3a2 2 0 0 0-3.997-.118l-.845-.845A3.001 3.001 0 0 1 11 3z" />
                            <path d="m9.486 10.607-.748-.748A2 2 0 0 1 6 8v-.878l-1-1V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z" />
                        </svg>
                    </div>
                )}
                {/* End call */}
                <div
                    className="bg-red-500 text-white p-2.5 rounded-full cursor-pointer"
                    onClick={() => {
                        document.getElementById("voiceCall").classList.add("scale-0");
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="currentColor" className="rotate-[134deg]" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default VoiceCall;
