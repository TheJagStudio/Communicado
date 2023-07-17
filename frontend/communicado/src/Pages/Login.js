import React from "react";
import { useAtom } from "jotai";
import { UserAtom } from "../Atoms";
import { ethers } from "ethers";

const Login = () => {
    const [currentUser, setCurrentUser] = useAtom(UserAtom);
    const { providers } = ethers;
    const btnhandler = () => {
        if (window.ethereum) {
            handleAuth().catch((error) => console.log(error));
            // window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
            //     let newForm = new FormData();
            //     newForm.append("metaMask", res[0]);
            //     fetch(process.env.REACT_APP_SERVER + "/api/setMetaMask/", {
            //         method: "POST",
            //         body: newForm,
            //     })
            //         .then((res) => res.json())
            //         .then((res) => {
            //             if (res.msg) {
            //                 localStorage.setItem("metaMask", res[0]);
            //                 window.location.href = "/";
            //             } else {
            //                 alert("something went wrong!!");
            //             }
            //         });
            // });
        } else {
            alert("install metamask extension!!");
            window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn", "_blank");
        }
    };

    const handleApiPost = async (endpoint, params) => {
        const result = await fetch(`${endpoint}`, {
            method: "POST",
            body: JSON.stringify(params),
        });
        return result.json();
    };

    const requestMessage = (account, chain) =>
        handleApiPost(process.env.REACT_APP_SERVER + "/web3_auth/request_message/", {
            address: account,
            chain: chain,
            network: "evm",
        });

    const verifyMessage = (message, signature) =>
        handleApiPost(process.env.REACT_APP_SERVER + "/web3_auth/verify_message/", {
            message,
            signature,
            network: "evm",
        });

    const connectToMetamask = async () => {
        const provider = new providers.Web3Provider(window.ethereum, "any");

        const [accounts, chainId] = await Promise.all([provider.send("eth_requestAccounts", []), provider.send("eth_chainId", [])]);

        const signer = provider.getSigner();
        return { signer, chain: chainId, account: accounts[0] };
    };

    const handleAuth = async () => {
        // Connect to Metamask
        const { signer, chain, account } = await connectToMetamask();
        console.log("account", account, "chain", chain);

        if (!account) {
            throw new Error("No account found");
        }
        if (!chain) {
            throw new Error("No chain found");
        }

        const { message } = await requestMessage(account, chain);
        const signature = await signer.signMessage(message);
        const { user } = await verifyMessage(message, signature);
        if (user) {
            localStorage.setItem("metaMask", user);
            window.location.href = "/";
        } else {
            alert("authentication error");
        }
    };
    return (
        <div className="flex items-center gap-3 h-full text-black dark:text-white">
            <div className="h-full w-[30vw] bg-white dark:bg-secondary-900 shadow-xl p-5 rounded-lg">
                <a href="/">
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
                </a>
                <div className="my-3">
                    <h1 className="">
                        Use <span className="font-bold text-primary-500">Communicado</span> on your computer
                    </h1>
                </div>
                <div className="w-[95%]">
                    <p className="dark:font-extralight font-light text-gray-700 dark:text-gray-400">Welcome to Communicado, the ultimate online web chatting app! Our platform is designed to provide you with a seamless and interactive communication experience like never before. Whether you're looking to connect with friends, family, or even make new acquaintances, Communicado is your go-to destination.</p>
                    <p className="mt-3 dark:font-extralight font-light text-gray-700 dark:text-gray-400">With Communicado, you can chat with ease, share GIFs, memes, and stories, making every conversation lively and engaging. Stay connected with your loved ones, share your thoughts and experiences, and have a great time connecting with people from all walks of life.</p>
                </div>
            </div>
            <div className="relative h-full w-[70vw] bg-white dark:bg-secondary-900 shadow-xl rounded-lg flex items-center justify-center overflow-hidden">
                <div id="auth-metamask" onClick={btnhandler} className="bg-[#E17719] px-5 py-2 rounded-lg text-white flex items-center justify-center cursor-pointer z-50 mt-40 transition-all duration-300 hover:dark:shadow-white hover:dark:shadow-2xl hover:shadow-black hover:shadow-2xl hover:scale-110">
                    <p>Login with Metamask</p>
                </div>
                <iframe className="absolute top-0 left-0 w-full h-full z-10" srcdoc={`<html><head><meta content="initial-scale=30.0, maximum-scale=30.0, user-scalable=0" name="viewport"><style>svg{padding-top:5%;overflow:visible;height:100%}</style></head><body style="display: flex; align-items:center; justify-content:center;overflow:visible;"><script src="http://metamask.github.io/logo/normal/bundle.js"></script></body></html>`}></iframe>
                <img src="/images/login.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-50 dark:opacity-100 dark:mix-blend-multiply" />
            </div>
        </div>
    );
};

export default Login;
