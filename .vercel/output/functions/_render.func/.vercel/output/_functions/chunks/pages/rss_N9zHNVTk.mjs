import { getRssString } from '@astrojs/rss';
import { A as APP_BLOG, S as SITE, M as METADATA, b as getPermalink } from './404_BFS2NKrb.mjs';
import { f as fetchPosts } from './index_yslIQ5qJ.mjs';

const GET = async () => {
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  const posts = await fetchPosts();
  const rss = await getRssString({
    title: `${SITE.name}’s Blog`,
    description: METADATA?.description || "",
    site: "https://tecnodespegue.com",
    items: posts.map((post) => ({
      link: getPermalink(post.permalink, "post"),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate
    })),
    trailingSlash: SITE.trailingSlash
  });
  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};

export { GET };
