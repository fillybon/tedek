"use client";

import { Post } from "@/types/types";

import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import {
  TbAntennaBars2,
  TbAntennaBars3,
  TbAntennaBars4,
  TbAntennaBars5,
} from "react-icons/tb";

interface PostItemProps {
  data: Post;
}

const PostItem: React.FC<PostItemProps> = ({ data }) => {
  const router = useRouter();

  const expertise =
    data.contributor_expertise?.slice(0, 1).toUpperCase() +
    data.contributor_expertise?.slice(1)!;

  return (
    <div className="w-7/12 h-min flex flex-col group bg-white/10 hover:bg-steel-blue/30 rounded-md p-4 mx-auto mt-16 cursor-pointer">
      <p className="w-fit text-[1.2rem] mb-6 font-bold group-hover:text-burnt-sienna hover:underline underline-offset-2">
        {data.project_title}
      </p>
      <div className="flex flex-row items-center gap-x-16 mb-10">
        <div className="text-[.7rem] text-neutral-200 flex gap-x-2">
          {data.tags?.map((tag) => (
            <div
              className="p-2 bg-neutral-500 rounded-full hover:opacity-80"
              onClick={() => router.push("/tags/" + tag.toLowerCase())}
            >
              <p>#{tag}</p>
            </div>
          ))}
        </div>
        <div className="text-[.7rem] text-neutral-200 flex flex-row gap-x-1 relative">
          {expertise === "Beginner" ? (
            <TbAntennaBars2 size={30} />
          ) : expertise === "Intermediate" ? (
            <TbAntennaBars3 size={30} />
          ) : expertise === "Advanced" ? (
            <TbAntennaBars4 size={30} />
          ) : (
            <TbAntennaBars5 size={30} />
          )}
          <p className="absolute bottom-1 left-8">{expertise}</p>
        </div>
      </div>
      <div className="max-h-[4.6rem] overflow-y-clip mb-7">
        <p className="text-[.8rem] max-w-full">{data.project_description}</p>
      </div>
      <div className="flex flex-row gap-x-5">
        <div className="text-[.7rem] text-white">
          Activity:{" "}
          {data.activity < 5
            ? data.activity
            : data.activity < 25
            ? "5 - 25"
            : data.activity < 50
            ? "25 - 50"
            : "+ 50"}
        </div>
        <div className="text-[.7rem] text-white/90">
          Publish date: {data.created_at.split("T")[0]}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
