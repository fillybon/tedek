"use client";

import { Post } from "@/types/types";

interface PostItemProps {
  data: Post;
}

const PostItem: React.FC<PostItemProps> = ({ data }) => {
  console.log(data.project_description);

  return (
    <div className="w-7/12 h-min flex flex-col group bg-white/10 hover:bg-steel-blue/30 rounded-md p-4 mx-auto mt-16 cursor-pointer">
      <p className="text-[1.2rem] mb-6 font-bold group-hover:text-burnt-sienna hover:underline underline-offset-2">
        {data.project_title}
      </p>
      <div className="max-h-[3.8rem] overflow-y-clip">
        <p className="text-[.8rem] max-w-full">{data.project_description}</p>
      </div>
    </div>
  );
};

export default PostItem;
