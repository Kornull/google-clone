import ViewImageSearchResult from '@/components/UI/ViewImageSearchResult';
import { ImageItemsType, ImageDataType } from '@/types';

type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params: { id } }: Props) {
  return {
    title: `${decodeURI(id)} - Google Clone search`,
    description: `Google-Clone search image result - ${decodeURI(id)}`,
  };
}

const ImageSearch = async ({ params: { id } }: Props) => {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${id}&searchType=image`
  );
  const data: ImageDataType = await response.json();
  const items: ImageItemsType[] = data.items;

  return <div>{items && <ViewImageSearchResult data={data} items={items} />}</div>;
};

export default ImageSearch;
