"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { toast } from "react-hot-toast";


import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

import Button from "./Button";


interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const router = useRouter();
    const authModal = useAuthModal();

    const supabaseClient = useSupabaseClient();
    const { user } = useUser();


    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut();
        // player.reset();
        router.refresh();

        if (error) {
            toast.error(error.message);
            // console.log(error)
        } else {
            toast.success('Logged out')
        }
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
                    {user ? (
                        <div className="flex gap-x-4 items-center">
                            <Button
                                onClick={handleLogout}
                                className="bg-orange px-6 py-2"
                            >
                                Logout
                            </Button>
                            <Button
                                onClick={() => router.push('/account')}
                                className="bg-orange border-r-4"
                            >
                                <FaUserAlt />
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div>
                                <Button onClick={authModal.onOpen} className="bg-transparent text-grey font-medium">Sign Up!</Button>
                            </div>
                            <div>
                                <Button onClick={authModal.onOpen} className="bg-orange px-4 py-2">Log in!</Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {children}
        </div>
    );
};

export default Header;
