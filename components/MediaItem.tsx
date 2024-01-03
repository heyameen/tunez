"use client";

import Image from "next/image";

import useLoadImage from "@/hooks/useLoadImages";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
    const player = usePlayer();
    const imageUrl = useLoadImage(data);

    const handleClick = () => {
        if (onClick) {
            return onClick(data.id);
        }

        return player.setId(data.id);
    };

    return (
        <div
            onClick={handleClick}
            className="
                flex 
                items-center 
                gap-x-3 
                cursor-pointer 
                hover:bg-grey-soft/60 
                w-full 
                p-2 
                rounded-md
            "
        >
            <div
                className="
                relative 
                rounded-md 
                min-h-[48px] 
                min-w-[48px] 
                overflow-hidden
                "
            >
                <Image
                    fill
                    src={imageUrl || "/images/music-placeholder.png"}
                    alt="MediaItem"
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
                <p className="text-grey-title truncate">{data.title}</p>
                <p className="text-grey-body text-sm truncate">
                    By {data.author}
                </p>
            </div>
        </div>
    );
}

export default MediaItem;