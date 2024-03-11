import { d as createAstro, e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as addAttribute, u as unescapeHTML, j as Fragment, A as AstroError, n as UnknownContentCollectionError, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent } from '../astro_COA5zy3C.mjs';
import 'kleur/colors';
import { b as $$WidgetWrapper, c as $$Headline, $ as $$Button, g as $$ItemGrid, a as $$Image, i as $$Icon, j as $$Hero, f as $$Features2, k as $$Stats, e as $$PageLayout } from './about_D60iZW5I.mjs';
import { twMerge } from 'tailwind-merge';
import { f as findImage, b as getPermalink, A as APP_BLOG, B as BLOG_BASE, C as CATEGORY_BASE, T as TAG_BASE, h as cleanSlug, P as POST_PERMALINK_PATTERN, t as trimSlash, c as getBlogPermalink } from './404_BFS2NKrb.mjs';
import { p as prependForwardSlash } from '../astro/assets-service_u9ljG5ln.mjs';
import { $ as $$CallToAction } from './click-through_EZsb2u_-.mjs';

const $$Astro$9 = createAstro("https://tecnodespegue.com");
const $$Content = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Content;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    callToAction,
    items = [],
    columns,
    image = await Astro2.slots.render("image"),
    isReversed = false,
    isAfterContent = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "max-w-xl sm:mx-auto lg:max-w-2xl",
    title: "text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading",
    subtitle: "max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400"
  } })} ${maybeRenderHead()}<div class="mx-auto max-w-7xl p-4 md:px-8"> <div${addAttribute(`md:flex ${isReversed ? "md:flex-row-reverse" : ""} md:gap-16`, "class")}> <div class="md:basis-1/2 self-center"> ${content && renderTemplate`<div class="mb-12 text-lg dark:text-slate-400">${unescapeHTML(content)}</div>`} ${callToAction && renderTemplate`<div class="mt-[-40px] mb-8 text-primary"> ${renderComponent($$result2, "Button", $$Button, { "variant": "link", ...callToAction })} </div>`} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:check", "classes": {
    container: `gap-y-4 md:gap-y-8`,
    panel: "max-w-none",
    title: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2",
    description: "text-muted dark:text-slate-400 ml-2 rtl:ml-0 rtl:mr-2",
    icon: "flex h-7 w-7 items-center justify-center rounded-full bg-green-600 dark:bg-green-700 text-gray-50 p-1",
    action: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2"
  } })} </div> <div aria-hidden="true" class="mt-10 md:mt-0 md:basis-1/2"> ${image && renderTemplate`<div class="relative m-auto max-w-4xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto w-full rounded-lg bg-gray-500 shadow-lg", "width": 500, "height": 500, "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "layout": "responsive", ...image })}`} </div>`} </div> </div> </div> ` })}`;
}, "/Users/rkdev/Downloads/astrowind-main/src/components/widgets/Content.astro", void 0);

const $$Astro$8 = createAstro("https://tecnodespegue.com");
const $$FAQs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$FAQs;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    items = [],
    columns = 2,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:chevron-right", "classes": {
    container: `${columns === 1 ? "max-w-4xl" : ""} gap-y-8 md:gap-y-12`,
    panel: "max-w-none",
    icon: "flex-shrink-0 mt-1 w-6 h-6 text-primary"
  } })} ` })}`;
}, "/Users/rkdev/Downloads/astrowind-main/src/components/widgets/FAQs.astro", void 0);

const $$Astro$7 = createAstro("https://tecnodespegue.com");
const $$Timeline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { items = [], classes = {}, defaultIcon } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary dark:text-slate-200 border-primary dark:border-blue-700"
  } = classes;
  return renderTemplate`${items && items.length && renderTemplate`${maybeRenderHead()}<div${addAttribute(containerClass, "class")}>${items.map(
    ({ title, description, icon, classes: itemClasses = {} }, index = 0) => renderTemplate`<div${addAttribute(twMerge("flex", panelClass, itemClasses?.panel), "class")}><div class="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4"><div><div class="flex items-center justify-center">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge(
      "w-10 h-10 p-2 rounded-full border-2",
      defaultIconClass,
      itemClasses?.icon
    ) })}`}</div></div>${index !== items.length - 1 && renderTemplate`<div class="w-px h-full bg-black/10 dark:bg-slate-400/50"></div>`}</div><div${addAttribute(`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`, "class")}>${title && renderTemplate`<p${addAttribute(twMerge(
      "text-xl font-bold",
      titleClass,
      itemClasses?.title
    ), "class")}>${unescapeHTML(title)}</p>`}${description && renderTemplate`<p${addAttribute(twMerge(
      "text-muted mt-2",
      descriptionClass,
      itemClasses?.description
    ), "class")}>${unescapeHTML(description)}</p>`}</div></div>`
  )}</div>`}`;
}, "/Users/rkdev/Downloads/astrowind-main/src/components/ui/Timeline.astro", void 0);

const $$Astro$6 = createAstro("https://tecnodespegue.com");
const $$Steps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Steps;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    image = await Astro2.slots.render("image"),
    isReversed = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(["flex flex-col gap-8 md:gap-12", { "md:flex-row-reverse": isReversed }, { "md:flex-row": image }], "class:list")}> <div${addAttribute(["md:py-4 md:self-center", { "md:basis-1/2": image }, { "w-full": !image }], "class:list")}> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "text-left rtl:text-right",
    title: "text-3xl lg:text-4xl",
    ...classes?.headline ?? {}
  } })} ${renderComponent($$result2, "Timeline", $$Timeline, { "items": items, "classes": classes?.items })} </div> ${image && renderTemplate`<div class="relative md:basis-1/2"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700", "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "width": 432, "height": 768, "layout": "cover", "src": image?.src, "alt": image?.alt || "" })}`} </div>`} </div> ` })}`;
}, "/Users/rkdev/Downloads/astrowind-main/src/components/widgets/Steps.astro", void 0);

const $$Astro$5 = createAstro("https://tecnodespegue.com");
const $$GridItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$GridItem;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  return renderTemplate`${maybeRenderHead()}<article class="mb-6 transition"> <div class="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6"> ${image && renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")}> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "width": 400, "sizes": "(max-width: 900px) 400px, 900px", "alt": post.title, "aspectRatio": "16:9", "layout": "cover", "loading": "lazy", "decoding": "async" })} </a>`} </div> <h3 class="mb-2 text-xl font-bold leading-tight sm:text-2xl font-heading"> ${!APP_BLOG?.post?.isEnabled ? post.title : renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")} class="hover:text-primary dark:hover:text-blue-700  transition ease-in duration-200"> ${post.title} </a>`} </h3> <p class="text-muted dark:text-slate-400 text-lg">${post.excerpt}</p> </article>`;
}, "/Users/rkdev/Downloads/astrowind-main/src/components/blog/GridItem.astro", void 0);

const $$Astro$4 = createAstro("https://tecnodespegue.com");
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Grid;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4 -mb-6"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Item", $$GridItem, { "post": post })}`)} </div>`;
}, "/Users/rkdev/Downloads/astrowind-main/src/components/blog/Grid.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://tecnodespegue.com", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/astrowind-template-in-depth.mdx": () => import('../astrowind-template-in-depth_pUhzYjP9.mjs'),"/src/content/post/get-started-website-with-astro-tailwind-css.md": () => import('../get-started-website-with-astro-tailwind-css_C4T8YzBK.mjs'),"/src/content/post/how-to-customize-astrowind-to-your-brand.md": () => import('../how-to-customize-astrowind-to-your-brand_D9qjO0q7.mjs'),"/src/content/post/landing.md": () => import('../landing_DMVfWPMG.mjs'),"/src/content/post/markdown-elements-demo-post.mdx": () => import('../markdown-elements-demo-post_p7K-URzA.mjs'),"/src/content/post/useful-resources-to-create-websites.md": () => import('../useful-resources-to-create-websites_LArrl-uW.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"post":{"type":"content","entries":{"astrowind-template-in-depth":"/src/content/post/astrowind-template-in-depth.mdx","get-started-website-with-astro-tailwind-css":"/src/content/post/get-started-website-with-astro-tailwind-css.md","how-to-customize-astrowind-to-your-brand":"/src/content/post/how-to-customize-astrowind-to-your-brand.md","landing":"/src/content/post/landing.md","markdown-elements-demo-post":"/src/content/post/markdown-elements-demo-post.mdx","useful-resources-to-create-websites":"/src/content/post/useful-resources-to-create-websites.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/astrowind-template-in-depth.mdx": () => import('../astrowind-template-in-depth_BOVSSNW8.mjs'),"/src/content/post/get-started-website-with-astro-tailwind-css.md": () => import('../get-started-website-with-astro-tailwind-css_CK_Omss4.mjs'),"/src/content/post/how-to-customize-astrowind-to-your-brand.md": () => import('../how-to-customize-astrowind-to-your-brand_BH_2QTt-.mjs'),"/src/content/post/landing.md": () => import('../landing_CqAEH8QB.mjs'),"/src/content/post/markdown-elements-demo-post.mdx": () => import('../markdown-elements-demo-post_fzbRjfjX.mjs'),"/src/content/post/useful-resources-to-create-websites.md": () => import('../useful-resources-to-create-websites_rDGT_4t5.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const generatePermalink = async ({
  id,
  slug,
  publishDate,
  category
}) => {
  const year = String(publishDate.getFullYear()).padStart(4, "0");
  const month = String(publishDate.getMonth() + 1).padStart(2, "0");
  const day = String(publishDate.getDate()).padStart(2, "0");
  const hour = String(publishDate.getHours()).padStart(2, "0");
  const minute = String(publishDate.getMinutes()).padStart(2, "0");
  const second = String(publishDate.getSeconds()).padStart(2, "0");
  const permalink = POST_PERMALINK_PATTERN.replace("%slug%", slug).replace("%id%", id).replace("%category%", category || "").replace("%year%", year).replace("%month%", month).replace("%day%", day).replace("%hour%", hour).replace("%minute%", minute).replace("%second%", second);
  return permalink.split("/").map((el) => trimSlash(el)).filter((el) => !!el).join("/");
};
const getNormalizedPost = async (post) => {
  const { id, slug: rawSlug = "", data } = post;
  const { Content, remarkPluginFrontmatter } = await post.render();
  const {
    publishDate: rawPublishDate = /* @__PURE__ */ new Date(),
    updateDate: rawUpdateDate,
    title,
    excerpt,
    image,
    tags: rawTags = [],
    category: rawCategory,
    author,
    draft = false,
    metadata = {}
  } = data;
  const slug = cleanSlug(rawSlug);
  const publishDate = new Date(rawPublishDate);
  const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : void 0;
  const category = rawCategory ? cleanSlug(rawCategory) : void 0;
  const tags = rawTags.map((tag) => cleanSlug(tag));
  return {
    id,
    slug,
    permalink: await generatePermalink({ id, slug, publishDate, category }),
    publishDate,
    updateDate,
    title,
    excerpt,
    image,
    category,
    tags,
    author,
    draft,
    metadata,
    Content,
    // or 'content' in case you consume from API
    readingTime: remarkPluginFrontmatter?.readingTime
  };
};
const getRandomizedPosts = (array, num) => {
  const newArray = [];
  while (newArray.length < num && array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    newArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return newArray;
};
const load = async function() {
  const posts = await getCollection("post");
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));
  const results = (await Promise.all(normalizedPosts)).sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf()).filter((post) => !post.draft);
  return results;
};
let _posts;
const isBlogEnabled = APP_BLOG.isEnabled;
const isRelatedPostsEnabled = APP_BLOG.isRelatedPostsEnabled;
const isBlogListRouteEnabled = APP_BLOG.list.isEnabled;
const isBlogPostRouteEnabled = APP_BLOG.post.isEnabled;
const isBlogCategoryRouteEnabled = APP_BLOG.category.isEnabled;
const isBlogTagRouteEnabled = APP_BLOG.tag.isEnabled;
const blogListRobots = APP_BLOG.list.robots;
const blogPostRobots = APP_BLOG.post.robots;
const blogCategoryRobots = APP_BLOG.category.robots;
const blogTagRobots = APP_BLOG.tag.robots;
const blogPostsPerPage = APP_BLOG?.postsPerPage;
const fetchPosts = async () => {
  if (!_posts) {
    _posts = await load();
  }
  return _posts;
};
const findPostsByIds = async (ids) => {
  if (!Array.isArray(ids))
    return [];
  const posts = await fetchPosts();
  return ids.reduce(function(r, id) {
    posts.some(function(post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};
const findLatestPosts = async ({ count }) => {
  const _count = count || 4;
  const posts = await fetchPosts();
  return posts ? posts.slice(0, _count) : [];
};
const getStaticPathsBlogList = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogListRouteEnabled)
    return [];
  return paginate(await fetchPosts(), {
    params: { blog: BLOG_BASE || void 0 },
    pageSize: blogPostsPerPage
  });
};
const getStaticPathsBlogPost = async () => {
  if (!isBlogEnabled || !isBlogPostRouteEnabled)
    return [];
  return (await fetchPosts()).flatMap((post) => ({
    params: {
      blog: post.permalink
    },
    props: { post }
  }));
};
const getStaticPathsBlogCategory = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogCategoryRouteEnabled)
    return [];
  const posts = await fetchPosts();
  const categories = /* @__PURE__ */ new Set();
  posts.map((post) => {
    typeof post.category === "string" && categories.add(post.category.toLowerCase());
  });
  return Array.from(categories).flatMap(
    (category) => paginate(
      posts.filter((post) => typeof post.category === "string" && category === post.category.toLowerCase()),
      {
        params: { category, blog: CATEGORY_BASE || void 0 },
        pageSize: blogPostsPerPage,
        props: { category }
      }
    )
  );
};
const getStaticPathsBlogTag = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogTagRouteEnabled)
    return [];
  const posts = await fetchPosts();
  const tags = /* @__PURE__ */ new Set();
  posts.map((post) => {
    Array.isArray(post.tags) && post.tags.map((tag) => tags.add(tag.toLowerCase()));
  });
  return Array.from(tags).flatMap(
    (tag) => paginate(
      posts.filter((post) => Array.isArray(post.tags) && post.tags.find((elem) => elem.toLowerCase() === tag)),
      {
        params: { tag, blog: TAG_BASE || void 0 },
        pageSize: blogPostsPerPage,
        props: { tag }
      }
    )
  );
};
function getRelatedPosts(allPosts, currentSlug, currentTags) {
  if (!isBlogEnabled || !isRelatedPostsEnabled)
    return [];
  const relatedPosts = getRandomizedPosts(
    allPosts.filter((post) => post.slug !== currentSlug && post.tags?.some((tag) => currentTags.includes(tag))),
    APP_BLOG.relatedPostsCount
  );
  if (relatedPosts.length < APP_BLOG.relatedPostsCount) {
    const morePosts = getRandomizedPosts(
      allPosts.filter((post) => post.slug !== currentSlug && !post.tags?.some((tag) => currentTags.includes(tag))),
      APP_BLOG.relatedPostsCount - relatedPosts.length
    );
    relatedPosts.push(...morePosts);
  }
  return relatedPosts;
}

const $$Astro$3 = createAstro("https://tecnodespegue.com");
const $$BlogLatestPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BlogLatestPosts;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "View all posts",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    count = 4,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = APP_BLOG.isEnabled ? await findLatestPosts({ count }) : [];
  return renderTemplate`${APP_BLOG.isEnabled ? renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${APP_BLOG.list.isEnabled && linkText && linkUrl && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "link", "href": linkUrl }, { "default": ($$result3) => renderTemplate`${linkText} »` })}`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`}`;
}, "/Users/rkdev/Downloads/astrowind-main/src/components/widgets/BlogLatestPosts.astro", void 0);

const $$Astro$2 = createAstro("https://tecnodespegue.com");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Features;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    columns = 2,
    defaultIcon,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": classes?.headline })} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": defaultIcon, "classes": {
    container: "",
    title: "md:text-[1.3rem]",
    icon: "text-white bg-primary rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4 rtl:ml-4 rtl:mr-0",
    ...classes?.items ?? {}
  } })} ` })}`;
}, "/Users/rkdev/Downloads/astrowind-main/src/components/widgets/Features.astro", void 0);

const $$Astro$1 = createAstro("https://tecnodespegue.com");
const $$Note = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Note;
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-50 dark:bg-slate-800 not-prose"> <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-md text-center font-medium"> <span class="font-bold"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:info-square", "class": "w-5 h-5 inline-block align-text-bottom" })}Filosofía:</span> Simplicidad, Mejores Prácticas y Alto Rendimiento
</div> </section>`;
}, "/Users/rkdev/Downloads/astrowind-main/src/components/widgets/Note.astro", void 0);

const $$Astro = createAstro("https://tecnodespegue.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const metadata = {
    title: "Tecnodespegue",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "image": { src: "~/assets/images/hero.png", alt: "AstroWind Hero Image" } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline"> <span class="font-semibold">El desarrollo web es el arte de crear experiencias digitales</span> que conectan e impactan. Mediante el uso de tecnologías avanzadas, construimos sitios web dinámicos, responsivos y a medida,
</span> <span class="block mb-1 sm:hidden font-bold text-blue-600"></span>
asegurando que cada pixel cumpla su propósito. Nos enfocamos en la usabilidad, la estética y la funcionalidad, para transformar tu visión en una plataforma poderosa y accesible para todos.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
"Trasformando ideas <span class="hidden xl:inline">en realidad digital,</span> <span class="text-accent dark:text-white highlight">un pixel a la vez."</span> ` })}` })}  ${renderComponent($$result2, "Note", $$Note, {})}  ${renderComponent($$result2, "Features", $$Features, { "id": "features", "tagline": "Features", "title": "Lo que obtienes con Tecnodespegue", "subtitle": "Compra nuestras plantillas y obt\xE9n un sitio web profesional en minutos.", "items": [
    {
      title: "Astro + Tailwind CSS Integration",
      description: "Una integraci\xF3n perfecta entre dos grandes frameworks que ofrecen alta productividad, rendimiento y versatilidad.",
      icon: "tabler:brand-tailwind"
    },
    {
      title: "Ready-to-use Components",
      description: "Widgets creados con Tailwind CSS listos para ser utilizados en sitios web de marketing, SaaS, blogs, perfiles personales, peque\xF1as empresas...",
      icon: "tabler:components"
    },
    {
      title: "Best Practices",
      description: "Crear sitios web seguros, eficientes y f\xE1ciles de usar que brinden experiencias excepcionales y valor duradero.",
      icon: "tabler:list-check"
    },
    {
      title: "Excellent Page Speed",
      description: "Tener una buena velocidad de p\xE1gina afecta la clasificaci\xF3n de b\xFAsqueda org\xE1nica, mejora la experiencia del usuario (UI/UX) y aumenta las tasas de conversi\xF3n.",
      icon: "tabler:rocket"
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "El SEO radica en su capacidad para mejorar la visibilidad de un sitio web, generando tr\xE1fico org\xE1nico y permiti\xE9ndole llegar a una audiencia m\xE1s amplia.",
      icon: "tabler:arrows-right-left"
    },
    {
      title: "Open to new ideas and contributions",
      description: "Adoptar una cultura abierta a nuevas ideas y contribuciones es fundamental para fomentar la innovaci\xF3n, la colaboraci\xF3n y una experiencia de usuario din\xE1mica.",
      icon: "tabler:bulb"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "tagline": "Tecnodespegue", "title": "\xA1la diversi\xF3n se une a la funcionalidad!", "items": [
    {
      title: "Construido sobre Astro 4.0",
      description: "Benef\xEDciese del rendimiento y las funciones f\xE1ciles de usar para desarrolladores de este moderno generador de sitios est\xE1ticos."
    },
    {
      title: "Dise\xF1ado con Tailwind CSS",
      description: "Facilitando un dise\xF1o r\xE1pido y un estilo consistente con este popular marco CSS de utilidad."
    },
    {
      title: "Compatibilidad entre navegadores",
      description: "Aseg\xFArese de que su sitio web se vea y funcione de manera consistente en varios navegadores web, brindando una experiencia perfecta a todos los usuarios."
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Colorful Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Construyendo sobre bases modernas</h3>
Obtenga una ventaja competitiva incorporando prácticas líderes en la industria
` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "Alto nivel de personalizaci\xF3n",
      description: `Adapte la plantilla sin esfuerzo para que coincida con la identidad y los requisitos de su marca, haciendo que su sitio web sea distinto y ahorr\xE1ndole tiempo.`
    },
    {
      title: "M\xFAltiples posibilidades de dise\xF1o",
      description: "Explore varias opciones de dise\xF1o para encontrar la estructura que mejor presente su contenido, mejorando la participaci\xF3n y la navegaci\xF3n del usuario."
    },
    {
      title: "Dise\xF1o totalmente responsivo",
      description: "Garantice el rendimiento \xF3ptimo de su sitio web en varios dispositivos y tama\xF1os de pantalla, brindando una experiencia de usuario consistente y agradable."
    },
    {
      title: "Integraci\xF3n de medios",
      description: "Incorpore f\xE1cilmente im\xE1genes, v\xEDdeos y elementos multimedia que mejoren su contenido y atraigan a los visitantes de forma eficaz."
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2194&q=80",
    alt: "Blueprint Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`Asegúrese de que su presencia en línea realmente lo represente.` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Mayor participaci\xF3n del usuario",
      description: "Cautive a su audiencia con elementos interactivos, navegaci\xF3n intuitiva y dise\xF1os visualmente atractivos, fomentando visitas m\xE1s largas."
    },
    {
      title: "Mejora continua",
      description: "Aseg\xFArese de que su sitio web se mantenga alineado con las \xFAltimas tendencias y tecnolog\xEDas a trav\xE9s de actualizaciones y mejoras peri\xF3dicas."
    },
    {
      title: "Eficiencia de tiempo y recursos",
      description: "Evite el lento proceso de crear un sitio web desde cero y lance su presencia en l\xEDnea antes con Tecnodespegue."
    },
    {
      title: "Soporte comunitario",
      description: `\xDAnase a la creciente comunidad de TecnoDespegue para obtener informaci\xF3n, recursos y asistencia, asegur\xE1ndose de que nunca estar\xE1 solo en su viaje de desarrollo web.`
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1611462985358-60d3498e0364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Astronauts Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`Diseñado para fomentar el crecimiento y el éxito.` })}` })}  ${renderComponent($$result2, "Steps", $$Steps, { "title": "Ponga en funcionamiento el sitio web de sus sue\xF1os en poco tiempo con Tecnodespegue.", "items": [
    {
      title: 'Paso 1: <span class="font-medium">Download</span>',
      description: "\xA1Comienza con Tecnodespegue! Bifurque la plantilla de Tecnodespegue o simplemente haga clic en 'Comprar esta plantilla'. Tu lienzo te espera, listo para tu obra maestra digital. Con s\xF3lo unos pocos clics, ya habr\xE1 sentado las bases.",
      icon: "tabler:package"
    },
    {
      title: 'Paso 2: <span class="font-medium">agregar contenido</em>',
      description: "Vierte tu visi\xF3n en ello. Agrega im\xE1genes, texto y todo ese jazz para darle vida a tu espacio digital. Recuerda, es el contenido el que cuenta tu historia, as\xED que hazlo cautivador.",
      icon: "tabler:letter-case"
    },
    {
      title: 'Paso 3: <span class="font-medium">Personalizar estilos</span>',
      description: "Dale tu toque personal. Adapte los colores, las fuentes y los dise\xF1os hasta que se sienta perfecto. \xA1Tu estilo \xFAnico, amplificado por Tecnodespegue! La precisi\xF3n en el dise\xF1o garantiza una experiencia de usuario perfecta.",
      icon: "tabler:paint"
    },
    {
      title: "Listo/a!",
      icon: "tabler:check"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    alt: "Steps image"
  } })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Widgets m\xE1s utilizados", "subtitle": "Proporciona componentes de uso frecuente para crear sitios web utilizando Tailwind CSS", "tagline": "Componentes", "items": [
    {
      title: "Headers",
      description: "\xBFAlguna vez has probado a conducir sin GPS? \xA1Auge! Es por eso que los sitios web necesitan encabezados para orientarse.",
      icon: "flat-color-icons:template"
    },
    {
      title: "Heros",
      description: "Imag\xEDnese el aterrizaje de un superh\xE9roe: \xE9pico, \xBFverdad? \xA1Ese es el trabajo de una secci\xF3n de h\xE9roes: hacer grandes entradas!",
      icon: "flat-color-icons:gallery"
    },
    {
      title: "Features",
      description: "Donde los sitios web se pavonean y muestran superpoderes. \xA1Aqu\xED no hay freno para el derecho a fanfarronear!",
      icon: "flat-color-icons:approval"
    },
    {
      title: "Content",
      description: "Sum\xE9rgete en la carne y las patatas de un sitio; sin \xE9l, simplemente estar\xEDas mirando escaparates. El contenido es el rey.",
      icon: "flat-color-icons:document"
    },
    {
      title: "Call-to-Action",
      description: '\xBFEse amigo entusiasta que siempre te insta: "\xA1Hazlo! \xA1Hazlo!"? S\xED, ese es este bot\xF3n que te empuja hacia la aventura.',
      icon: "flat-color-icons:advertising"
    },
    {
      title: "Pricing",
      description: "He aqu\xED el men\xFA de postres del mundo de los sitios web. Te esperan opciones tentadoras, \xBFpodr\xE1s resistirte?",
      icon: "flat-color-icons:currency-exchange"
    },
    {
      title: "Testimonial",
      description: "\xA1Entra en el rinc\xF3n de los chismes! Aqu\xED, otros visitantes cuentan la verdad y comparten los jugosos detalles.",
      icon: "flat-color-icons:voice-presentation"
    },
    {
      title: "Contact",
      description: "Como un buz\xF3n digital, \xA1pero m\xE1s r\xE1pido! Escr\xEDbanos, haga una pregunta o env\xEDe un choque de manos virtual. \xA1Timbre! Mensaje en.",
      icon: "flat-color-icons:business-contact"
    },
    {
      title: "Footers",
      description: "El pie de p\xE1gina es como los cr\xE9ditos de una pel\xEDcula, pero salpicado de huevos de Pascua. \xA1Es hora de cazar!",
      icon: "flat-color-icons:database"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "title": "Descubre m\xE1s contenidos en nuestro Blog", "information": `El blog se utiliza para mostrar la documentaci\xF3n de Tecnodespegue.
      Cada nuevo art\xEDculo ser\xE1 un paso importante que necesitar\xE1s saber para ser un experto en la creaci\xF3n de un sitio web usando Astro + Tailwind CSS.
      Astro es una tecnolog\xEDa muy interesante. Gracias.
                ` })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Preguntas frecuentes", "subtitle": "Profundice en las siguientes preguntas para obtener informaci\xF3n sobre las poderosas funciones que ofrece Tecnodespegue y c\xF3mo puede mejorar su viaje de desarrollo web.", "tagline": "FAQs", "classes": { container: "max-w-6xl" }, "items": [
    {
      title: "\xBFPor qu\xE9 Tecnodespegue?",
      description: "Ren\xE9 Kuhm, un joven solitario que emprende una cruzada para defender la causa de los inocentes. Los indefensos. Los impotentes en un mundo de criminales que operan por encima de la ley. Aqu\xED viene. Aqu\xED viene Speed \u200B\u200BRacer. Es un angel sobre ruedas."
    },
    {
      title: "\xBFQu\xE9 necesito para empezar?",
      description: "Espacio de la \xFAltima frontera. Estos son los viajes de Tecnodespegue. Su misi\xF3n de cinco a\xF1os: explorar nuevos mundos extra\xF1os. Muchos dicen que la exploraci\xF3n es parte de nuestro destino, pero en realidad es nuestro deber para con las generaciones futuras."
    },
    {
      title: "\xBFC\xF3mo instalar la plantilla CSS Astro + Tailwind?",
      description: "Bueno, la forma en que hacen espect\xE1culos es: hacen un espect\xE1culo. Ese programa se llama piloto. Luego muestran ese programa a las personas que lo hacen y, bas\xE1ndose en ese programa, deciden si van a hacer m\xE1s programas."
    },
    {
      title: "Qu\xE9 es algo que no entiendes?",
      description: "Una flor en mi jard\xEDn, un misterio en mis bragas. Un ataque al coraz\xF3n nunca detuvo al viejo Big Bear. Ni siquiera sab\xEDa que lo llam\xE1bamos Big Bear."
    },
    {
      title: "\xBFQu\xE9 es algo que te gustar\xEDa volver a intentar?",
      description: "Una empresa lo suficientemente grande como para cotizar en el NASDAQ fracasa. \xA1Desaparece! Deja de existir sin m\xED. No, claramente no sabes con qui\xE9n est\xE1s hablando, as\xED que d\xE9jame darte una pista."
    },
    {
      title: "Si solo pudieras hacer una pregunta a cada persona que conoces, \xBFcu\xE1l ser\xEDa esa pregunta?",
      description: "No se trata de venganza. Se trata de justicia. Muchas cosas pueden cambiar en doce a\xF1os, almirante. Bueno, ciertamente es bueno saberlo. Unos cuatro a\xF1os. Me cans\xE9 de escuchar lo joven que me ve\xEDa."
    }
  ] })}  ${renderComponent($$result2, "Stats", $$Stats, { "stats": [
    { title: "Downloads", amount: "132K" },
    { title: "Stars", amount: "24.8K" },
    { title: "Forks", amount: "10.3K" },
    { title: "Users", amount: "48.4K" }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [
    {
      variant: "primary",
      text: "Contactame",
      href: "/contact",
      target: "_blank",
      icon: "tabler:download"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` <br class="hidden md:inline">` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Astro&nbsp;+&nbsp;<br class="block sm:hidden"><span class="sm:whitespace-nowrap">Tailwind CSS</span> ` })}` })} ` })}`;
}, "/Users/rkdev/Downloads/astrowind-main/src/pages/index.astro", void 0);

const $$file = "/Users/rkdev/Downloads/astrowind-main/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Content as $, $$FAQs as a, $$Steps as b, $$BlogLatestPosts as c, $$Features as d, blogCategoryRobots as e, fetchPosts as f, getStaticPathsBlogCategory as g, getStaticPathsBlogTag as h, blogTagRobots as i, getStaticPathsBlogList as j, blogListRobots as k, findPostsByIds as l, $$Grid as m, getRelatedPosts as n, getStaticPathsBlogPost as o, blogPostRobots as p, index as q };
