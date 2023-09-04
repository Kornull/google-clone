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

export type TextItemsType = {
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

export type ImageItemsType = {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  mime: string;
  fileFormat: string;
  image: {
    contextLink: string;
    height: number;
    width: number;
    byteSize: number;
    thumbnailLink: string;
    thumbnailHeight: number;
    thumbnailWidth: number;
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
};

export type TextDataType = SearchDataType & {
  items: TextItemsType[];
};

export type ImageDataType = SearchDataType & {
  items: ImageItemsType[];
};
