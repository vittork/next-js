import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";
import Link from "next/link";

export default async function Blog() {
  const posts = await getAllPosts();
  return (
    <>
      <Heading>Blog</Heading>
      <h2 className="text-2xl mb-3">Vittorio Dream Car</h2>
      {posts.map((post) => (
        <PostCard
          title={post.title}
          href={`/blog/${post.slug}`}
          descript={post.descript}
          date={post.date}
          authors={post.author}
          image={post.image}
        />
      ))}
    </>
  );
}
