import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getPost, getSlugs } from "@/lib/post";

//supaya semua turunan folder slug ikut ke buildnpm
export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.descript,
  };
}

export default async function PostPage({ params: { slug } }) {
  const post = await getPost(slug);
  return (
    <>
      <Heading>{post.title}</Heading>
      <div className="flex gap-3 pb-2 items-baseline">
        <p>
          {post.date} - {post.author}
        </p>
        <ShareLinkButton />
      </div>
      <img
        src={post.image}
        alt=""
        width={640}
        height={360}
        className="mb2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: post.body }}
        className="prose max-w-screen-sm  prose-slate text-justify mt-3"></article>
    </>
  );
}
