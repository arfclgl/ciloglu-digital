import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/markdown";
import { SITE_URL } from "@/lib/constants";
import BrandWatermark from "@/components/BrandWatermark";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.meta_description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.meta_description,
      url,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden bg-navy pb-10 pt-32 sm:pb-12 sm:pt-40">
        <BrandWatermark
          tone="accent"
          className="absolute -right-16 -top-16 h-72 w-72 opacity-[0.05] sm:h-96 sm:w-96"
        />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-montserrat text-xs font-semibold uppercase tracking-widest text-accent">
            {post.cluster}
          </span>
        </div>
      </section>

      <article
        className="prose mx-auto max-w-3xl px-5 py-16 sm:px-8"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </>
  );
}
