import getPosts from "@/actions/getPosts";
import PageContent from "./components/PageContent";
import Header from "@/components/Header";

export const revalidate = 0;

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="bg-neutral-600 rounded-lg h-full w-full overflow-hidden overfow-y-auto drop-shadow-lg">
      {/* @ts-ignore -> Ignore error in development */}
      <Header></Header>
      <div className="h-full w-full overflow-scroll pt-20">
        <PageContent posts={posts} />
      </div>
    </div>
  );
}
