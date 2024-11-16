import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('tips');
    return rss({
        title: 'Astrobuild.tips',
        description: 'My first page',
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            // title: post.data.title,
            // description: post.data.description,
            // pubDate: post.data.pubDate,
            link: `/posts/${post.slug}/`,
        })),
    });
}   