import NotResult from '@/components/UI/NotResult';
import ViewImageSearchResult from '@/components/UI/ViewImageSearchResult';

import { ImageItemsType, ImageDataType, PageProps } from '@/types';

export function generateMetadata(props: PageProps) {
  return {
    title: `${decodeURI(props.params.id)} - Google Clone search`,
    description: `Google-Clone search image result - ${decodeURI(props.params.id)}`,
  };
}

const ImageSearch = async (props: PageProps) => {
  const id = props.params.id;
  const searchParams = props.searchParams;
  const startIndex = searchParams.start !== undefined ? searchParams.start : '1';

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${id}&searchType=image&start=${startIndex}`
  );

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const data: ImageDataType = await response.json();
  const items: ImageItemsType[] = data.items;

  if (!items) return <NotResult />;

  return <>{items && <ViewImageSearchResult data={data} items={items} />}</>;
};

export default ImageSearch;
