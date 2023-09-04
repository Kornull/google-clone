import { DataItemsType, SearchDataType } from '@/types';
import { ResultCard } from './ResultCard/ResultCard';

type ViewProps = {
  data: SearchDataType;
  items: DataItemsType[];
};

const ViewSearchResult = ({ data, items }: ViewProps) => {
  return (
    <div className="w-full px-2 pt-52 sm:px-5 md:pl-44 md:pt-[168px]">
      <p className=" text-gray-500 text-sm pb-3">
        Results: about {data.searchInformation.formattedTotalResults.split(',').join(' ')} &#40;
        {data.searchInformation.searchTime.toFixed(2)} sec.&#41;
      </p>
      {items.map((item: DataItemsType) => (
        <ResultCard key={item.cacheId} data={item} />
      ))}
    </div>
  );
};

export default ViewSearchResult;
