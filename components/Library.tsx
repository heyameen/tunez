"use client";
import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
    const onClick = () => {
        //Handle upload
    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist size={26} className="text-grey" />
                    <p className="text-grey font-medium text-md">Your Library</p>
                </div>
                <AiOutlinePlus
                    className="text-grey cursor-pointer hover:text-orange transition"
                    onClick={onClick}
                    size={20}
                />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">List of Songs!</div>
        </div>
    );
};

export default Library;
