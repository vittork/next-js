import matter from "gray-matter";
import { marked } from "marked";
import { readFile, readdir } from "node:fs/promises";

export async function getPost(slug) {
  const text = await readFile(`./content/blog/${slug}.md`, "utf-8");
  const {
    content,
    data: { title, image, date, author, descript },
  } = matter(text);
  const body = marked(content);
  return { slug, title, date, author, image, body, descript };
}

export async function getAllPosts() {
  const slugs = await getSlugs();
  const posts = []; //tempat penampungan  dari perulangan di bawah
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push(post);
  }
  return posts;
}
export async function getSlugs() {
  const files = await readdir("./content/blog"); //mendapatkan apa file apa saja yang ada di blog

  //Untuk mendapatkan nama dari md sehingga bisa menjadi link ke tujuan directory
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length)); // filter untuk mencari file apa saja yang berakhiran md dan map perulangan untuk mendapatkan hasil dari filter
}
