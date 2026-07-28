import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  meta_description: string;
  cluster: string;
  target_keyword: string;
};

export type Post = PostMeta & { contentHtml: string };

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const fileContents = fs.readFileSync(
        path.join(POSTS_DIR, `${slug}.md`),
        "utf8"
      );
      const { data } = matter(fileContents);
      return { ...data, slug } as PostMeta;
    })
    .sort((a, b) => a.title.localeCompare(b.title, "tr"));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);

  return {
    ...(data as PostMeta),
    slug,
    contentHtml: processed.toString(),
  };
}
