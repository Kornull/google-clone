import { TextItemsType, SearchDataType } from '@/types';
import { ResultCard } from './ResultCard/ResultCard';
import PaginationButtons from '../Buttons/PaginationButtons/PaginationButtons';

type ViewProps = {
  data: SearchDataType;
  items: TextItemsType[];
};

const ViewSearchResult = ({ data, items }: ViewProps) => {
  return (
    <div className="w-full md:pl-40">
      <p className=" text-gray-500 text-sm pb-3">
        Results: about {data.searchInformation.formattedTotalResults.split(',').join(' ')} &#40;
        {data.searchInformation.searchTime.toFixed(2)} sec.&#41;
      </p>
      {items.map((item: TextItemsType) => (
        <ResultCard key={item.cacheId} data={item} />
      ))}
      <PaginationButtons />
    </div>
  );
};

export default ViewSearchResult;
