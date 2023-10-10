"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

import useAuthModal from "@/hooks/useAuthModal";


interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const router = useRouter();
    const authModal = useAuthModal();


    const handleLogout = () => {
        //handle logout
    };
    return (
        <div className={twMerge(`p-6`, className)}>
            <div className="w-full mb-4 flex item-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center justify-center hover:opacity-75 transition"
                    >
                        <RxCaretLeft className="text-grey" size={35} />
                    </button>
                    <button
                        onClick={() => router.forward()}
                        className="flex items-center justify-center hover:opacity-75 transition"
                    >
                        <RxCaretRight className="text-grey" size={35} />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <HiHome className="text-grey" size={20} />
                    </button>
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <BiSearch className="text-grey" size={20} />
                    </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <>
                        <div>
                            <Button onClick={authModal.onOpen} className="bg-transparent text-grey font-medium">Sign Up!</Button>
                        </div>
                        <div>
                            <Button onClick={authModal.onOpen} className="bg-orange px-4 py-2">Log in!</Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Header;
