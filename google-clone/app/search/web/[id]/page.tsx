import ViewTextSearchResult from '@/components/UI/ViewTextSearchResult';
import { TextItemsType, TextDataType } from '@/types';

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
  const data: TextDataType = await response.json();

  const items: TextItemsType[] = data.items;

  return <div>{items && <ViewTextSearchResult data={data} items={items} />}</div>;
};

export default WebSearch;
