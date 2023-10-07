import { Post } from "@/types/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getPosts = async (): Promise<Post[]> => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) console.log(error);

  return (data as any) || [];
};

export default getPosts;
