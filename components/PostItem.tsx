"use client";

import { Post } from "@/types/types";

interface PostItemProps {
  data?: Post;
}

const PostItem: React.FC<PostItemProps> = ({ data }) => {
  return (
    <div
      className="relative group flex flex-col items-center justify-center
        rounded-md overflow-hidden gap-x-4 bg-neutral-400/5
        cursor-pointer hover:bg-neutral-400/10 transition p-3"
    >
      deneme
    </div>
  );
};

export default PostItem;
