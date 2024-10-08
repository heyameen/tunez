"use client";

import Image from "next/image";

import useLoadImage from "@/hooks/useLoadImages";
import { Song } from "@/types";

import PlayButton from "./PlayButton";
import React from "react";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);

  return (
    <div
      onClick={() => onClick(data.id)}
      className="
                relative 
                group 
                flex 
                flex-col 
                items-center 
                justify-center 
                rounded-md 
                overflow-hidden 
                gap-x-4 
                bg-grey-soft/40 
                cursor-pointer 
                hover:bg-grey-soft/30
                transition 
                shadow-sm
                p-3"
    >
      <div
        className="
            relative
            aspect-square
            w-full
            h-full
            rounded-md
            overflow-hidden
        "
      >
        <Image
          className="object-cover"
          src={imagePath || "/images/music-placeholder.png"}
          fill
          alt="Image"
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="text-lg font-semibold truncate w-full">{data.title}</p>
        <p
          className="
                    text-grey-body 
                    text-sm 
                    pb-4 
                    w-full 
                    truncate"
        >
          By {data.author}
        </p>
      </div>
      <div
        className=" 
                absolute 
                bottom-24 
                right-5"
      >
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
