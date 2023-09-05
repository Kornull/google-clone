import { TextItemsType, SearchDataType } from '@/types';
import { ResultCard } from './ResultCard/ResultCard';

type ViewProps = {
  data: SearchDataType;
  items: TextItemsType[];
};

const ViewSearchResult = ({ data, items }: ViewProps) => {
  return (
    <div className="w-full md:pl-44">
      <p className=" text-gray-500 text-sm pb-3">
        Results: about {data.searchInformation.formattedTotalResults.split(',').join(' ')} &#40;
        {data.searchInformation.searchTime.toFixed(2)} sec.&#41;
      </p>
      {items.map((item: TextItemsType) => (
        <ResultCard key={item.cacheId} data={item} />
      ))}
    </div>
  );
};

export default ViewSearchResult;
