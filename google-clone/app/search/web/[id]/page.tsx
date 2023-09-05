import NotResult from '@/components/UI/NotResult/NotResult';
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

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const data: TextDataType = await response.json();
  const items: TextItemsType[] = data.items;

  if (!items) return <NotResult />;

  return <>{items && <ViewTextSearchResult data={data} items={items} />}</>;
};

export default WebSearch;
