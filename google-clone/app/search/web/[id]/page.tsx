import ViewSearchResult from '@/components/UI/ViewSearchResult/ViewSearchResult';
import { DataItemsType, SearchDataType } from '@/types';

type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params: { id } }: Props) {
  return {
    title: `${decodeURI(id)} - Google Clone search`,
    description: `Google-Clone search result - ${decodeURI(id)}`,
  };
}

const WebSearch = async ({ params: { id } }: Props) => {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${id}`
  );
  const data: SearchDataType = await response.json();

  const items: DataItemsType[] = data.items;

  return <div>{items && <ViewSearchResult data={data} items={items} />}</div>;
};

export default WebSearch;
