"use client";
import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { useUser } from "@/hooks/useUser";
// import useSubscribeModal from "@/hooks/useSubscribeModal";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";
import MediaItem from "./MediaItem";

interface LibraryProps {
    songs: Song[]
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
    const { user } = useUser();
    const authModal = useAuthModal()
    const uploadModal = useUploadModal()
    const onPlay = useOnPlay(songs);


    const onClick = () => {
        //Handle upload
        if (!user) {
            return authModal.onOpen();
        }
        // if (!subscription) {
        //     return subscribeModal.onOpen();
        // }

        return uploadModal.onOpen();
    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist size={26} className="text-grey" />
                    <p className="text-grey-title font-medium text-md">Your Library</p>
                </div>
                <AiOutlinePlus
                    className="text-grey cursor-pointer hover:text-blue transition"
                    onClick={onClick}
                    size={20}
                />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">{songs.map((item) => (
                <MediaItem
                    onClick={(id: string) => onPlay(id)}
                    key={item.id}
                    data={item}
                />
            ))}
            </div>
        </div>
    );
};

export default Library;
