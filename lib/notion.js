import { Client } from '@notionhq/client';

/**
 * All utilities having to do with the Notion database used for blogs.
 */

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

/**
 * Returns list of pages (blogs) in the database.
 */
async function getDatabase() {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
  });

  return response.results;
}

/**
 * Returns list of blog previews used in blog cards.
 */
export async function getBlogPreviews() {
  const rawBlogs = await getDatabase();

  const blogs = rawBlogs.map(
    (blog) =>
      blog.properties.ID.rich_text.length > 0 && {
        id: blog.properties.ID.rich_text[0]?.text.content,
        link: `/blog/${blog.properties.ID.rich_text[0]?.text.content}`,
        title: blog.properties.Title.title[0].text.content,
        date: blog.properties.Date.date?.start.split('-').join('/'),
        image: blog.properties.Image.files[0].file.url,
      }
  );

  return blogs;
}

/**
 * Returns paths of blog pages.
 */
export async function getPaths() {
  const rawBlogs = await getDatabase();

  const paths = rawBlogs.map((blog) => {
    const id =
      blog.properties.ID.rich_text.length > 0
        ? blog.properties.ID.rich_text[0].text.content
        : null;
    return {
      params: {
        id: id,
      },
    };
  });

  return paths;
}

/**
 * Returns ID of Notion page corresponding to given blog ID.
 *
 * @param {string} blogID is the ID of the blog
 */
export async function getPageId(blogID) {
  const databaseQuery = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: 'ID',
      rich_text: {
        equals: blogID,
      },
    },
  });

  return databaseQuery.results[0].id;
}

/**
 * Returns title, date, and image of a blog given the page ID.
 *
 * @param {string} pageID is ID of the Notion page
 */
export async function getLanding(pageID) {
  const page = await notion.pages.retrieve({
    page_id: pageID,
  });

  return {
    title: page.properties.Title.title[0].text.content,
    description: page.properties.Description.rich_text[0].text.content,
    date: page.properties.Date.date.start.split('-').join('/'),
    image: page.properties.Image.files[0].file.url,
  };
}

/**
 * Returns all blocks in a page given the page's ID (everything on a Notion page is considered a block).
 *
 * @param {string} pageID is the ID of the Notion page
 */
export async function getBlocks(pageID) {
  const response = await notion.blocks.children.list({
    block_id: pageID,
    page_size: 50,
  });

  let blocks = [];

  response.results.forEach((block) => {
    switch (block.type) {
      case 'paragraph':
        blocks.push({
          type: 'p',
          id: block.id,
          richText: block.paragraph.rich_text,
        });
        break;
      case 'heading_2':
        blocks.push({
          type: 'h2',
          id: block.id,
          richText: block.heading_2.rich_text,
        });
        break;
      case 'heading_3':
        blocks.push({
          type: 'h3',
          id: block.id,
          richText: block.heading_3.rich_text,
        });
        break;
      case 'bulleted_list_item':
        if (blocks.length === 0 || blocks.at(-1).type !== 'ul') {
          blocks.push({
            type: 'ul',
            id: block.id,
            items: [block.bulleted_list_item.rich_text],
          });
        } else {
          blocks.at(-1).items.push(block.bulleted_list_item.rich_text);
        }
        break;
      case 'numbered_list_item':
        if (blocks.length === 0 || blocks.at(-1).type !== 'ol') {
          blocks.push({
            type: 'ol',
            id: block.id,
            items: [block.numbered_list_item.rich_text],
          });
        } else {
          blocks.at(-1).items.push(block.numbered_list_item.rich_text);
        }
        break;
      case 'image':
        blocks.push({ type: 'img', id: block.id, url: block.image.file.url });
        break;
    }
  });

  return blocks;
}
