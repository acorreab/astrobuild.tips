import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('tips');
    return Response.json({
        title: 'Astrobuild.tips',
        description: 'My first page',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.pubDate,
            link: `/posts/${post.slug}/`,
        })),
    });
}   