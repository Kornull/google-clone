import { ImageItemsType, ImageDataType } from '@/types';
import { ResultImageCard } from './ResultCard/ResultImageCard';

type ViewProps = {
  data: ImageDataType;
  items: ImageItemsType[];
};

const ViewImageSearchResult = ({ data, items }: ViewProps) => {
  return (
    <div className="w-full px-4 pt-52 md:pt-[168px] pb-24 max-w-[1920px] m-auto">
      <p className=" text-gray-500 text-sm pb-3">
        Results: about {data.searchInformation.formattedTotalResults.split(',').join(' ')} &#40;
        {data.searchInformation.searchTime.toFixed(2)} sec.&#41;
      </p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {items.map((item: ImageItemsType) => (
          <ResultImageCard key={item.link} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ViewImageSearchResult;
