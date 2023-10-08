"use client";

import PostItem from "@/components/PostItem";
import { Database } from "@/types/supabase";
import { Post } from "@/types/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

interface TagPageProps {
  params: { tag: string };
}

const definedTagList = [
  "physics",
  "chemistry",
  "biology",
  "astronomy",
  "engineering",
];

const TagPage: React.FC<TagPageProps> = ({ params }) => {
  if (!definedTagList.includes(params.tag)) {
    notFound();
  }

  const supabase = createClientComponentClient<Database>();
  const tag = capFirst(params.tag);
  const [tagPosts, setTagPosts] = useState<Post[] | null>();

  useEffect(() => {
    async function getTagPosts() {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .overlaps("tags", [tag]);

      setTagPosts(data);
    }

    getTagPosts();
  }, []);

  return (
    <div>
      <p>{tag}</p>
      {tagPosts &&
        tagPosts.map((post) => <PostItem key={post.id} data={post} />)}
    </div>
  );
};

const capFirst = (text: string) => {
  return text.slice(0, 1).toUpperCase() + text.slice(1);
};

export default TagPage;
