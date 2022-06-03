import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId) => {
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 6,
      filter: {
        and:[
          {property:"status", select:{equals:"Published"}}
        ]
      },
      sorts:[
        {
          "property": "date",
          "direction": "descending"
      }
      ]
    });
    return response.results;
};
export const getDatabaseFromCategories = async (databaseId,category) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 6,
    filter: {
      and:[
        {property:"status", select:{equals:"Published"}},
        {property:"tag",multi_select:{contains:category}}
      ]
    },
    sorts:[
      {
        "property": "date",
        "direction": "descending"
    }
    ]
  });
  return response.results;
};
export const getDatabaseFromSlug = async (databaseId,slug) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 6,
    filter: {
      and:[
        {property:"status", select:{equals:"Published"}},
        {property:"slug",rich_text:{contains:slug}}
      ]
    },
    sorts:[
      {
        "property": "date",
        "direction": "descending"
    }
    ]
  });
  return response.results;
};
export const getDatabaseFromArticleTitle = async (databaseId,title) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 6,
    filter: {
      and:[
        {property:"status", select:{equals:"Published"}},
        {property:"title",rich_text:{contains:title}}
      ]
    },
    sorts:[
      {
        "property": "date",
        "direction": "descending"
    }
    ]
  });
  return response.results;
};

export const getPage = async (pageId) => {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
};
export const getBlocks = async (blockId) => {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 50,
    });
    return response.results;
};
export function getAllTagsFromPosts (posts) {
  const taggedPosts = posts.filter(post => post?.tags)
  const tags = [...taggedPosts.map(p => p.tags).flat()]
  const tagObj = {}
  tags.forEach(tag => {
    if (tag in tagObj) {
      tagObj[tag]++
    } else {
      tagObj[tag] = 1
    }
  })
  return tagObj
}