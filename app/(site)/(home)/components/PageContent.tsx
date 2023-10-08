"use client";

import PostItem from "@/components/PostItem";
import useAuthModal from "@/hooks/useAuthModal";
import { Post } from "@/types/types";

interface PageContentProps {
  posts: Post[];
}

const PageContent: React.FC<PageContentProps> = ({ posts }) => {
  const authModal = useAuthModal();

  console.log(posts[0].tags);

  if (posts.length === 0) {
    return <div className="mt-4 text-neutral-400">No posts available.</div>;
  }

  return (
    <div className="w-full h-full mt-4 px-2 flex gap-y-3">
      {posts.map((post) => (
        <PostItem key={post.id} data={post} />
      ))}
    </div>
  );
};

export default PageContent;
