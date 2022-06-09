import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId) => {
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 4,
      start_cursor:undefined,
      filter: {
        and:[
          {property:"status", select:{equals:"Published"}},
          {property:"type", select:{equals:"Post"}}
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
export const getBooks = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 4,
    filter: {
      and:[
        {property:"status", select:{equals:"Published"}},
        {property:"type", select:{equals:"Book"}}
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
export const getPaginatedDatabase = async (databaseId,page_size,start_cursor) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: page_size,
    start_cursor:start_cursor,
    filter: {
      and:[
        {property:"status", select:{equals:"Published"}},
        {property:"type", select:{equals:"Post"}}
      ]
    },
    sorts:[
      {
        "property": "date",
        "direction": "descending"
    }
    ]
  });
  return response;
};
export const getPaginatedBooks = async (databaseId,page_size,start_cursor) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: page_size,
    start_cursor:start_cursor,
    filter: {
      and:[
        {property:"status", select:{equals:"Published"}},
        {property:"type", select:{equals:"Book"}}
      ]
    },
    sorts:[
      {
        "property": "date",
        "direction": "descending"
    }
    ]
  });
  return response;
};

export const getDatabaseFromCategories = async (databaseId,category,page_size,start_cursor) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: page_size,
    start_cursor:start_cursor,
    filter: {
      and:[
        {property:"status", select:{equals:"Published"}},
        {property:"tags",multi_select:{contains:category}}
      ]
    },
    sorts:[
      {
        "property": "date",
        "direction": "descending"
    }
    ]
  });
  return response;
};
export const getDatabaseFromSlug = async (databaseId,slug) => {
  const response = await notion.databases.query({
    database_id: databaseId,
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
export const getDatabaseFromArticleTitle = async (databaseId,title,page_size,start_cursor) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: page_size,
    start_cursor:start_cursor,
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
  return response;
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
export const getTags = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    page_size: 6,
    filter: {
      and:[
        {property:"status", select:{equals:"Tags"}},
      ]
    },
  });
  return response.results;
};