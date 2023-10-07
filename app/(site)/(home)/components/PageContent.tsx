"use client";

import PostItem from "@/components/PostItem";
import useAuthModal from "@/hooks/useAuthModal";
import { Post } from "@/types/types";

interface PageContentProps {
  posts: Post[];
}

const PageContent: React.FC<PageContentProps> = ({ posts }) => {
  const authModal = useAuthModal();

  if (posts.length === 0) {
    return <div className="mt-4 text-neutral-400">No posts available.</div>;
  }

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3
        lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4"
    >
      <div className="w-full h-24 bg-blue-500">
        <button onClick={authModal.onOpen}>Login</button>
      </div>
      {posts.map((post) => (
        <PostItem key={post.id} data={post} />
      ))}
    </div>
  );
};

export default PageContent;
