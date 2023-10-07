import getPosts from "@/actions/getPosts";
import PageContent from "./components/PageContent";

export const revalidate = 0;

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="bg-neutral-600 rounded-lg h-full w-full overflow-hidden overfow-y-auto drop-shadow-lg">
      <PageContent posts={posts} />
    </div>
  );
}
