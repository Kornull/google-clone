type QueriesType = {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
};

export type DataItemsType = {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: {
    cse_thumbnail?: [];
    organization?: [];
    metatags?: [];
    cse_image?: [];
    listitem?: [];
  };
};

export type SearchDataType = {
  kind: string;
  url: {
    type: string;
    template: string;
  };
  queries: { request: QueriesType[]; nextPage: QueriesType[] };
  context: { title: string };
  searchInformation: {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
  };
  items: DataItemsType[];
};
