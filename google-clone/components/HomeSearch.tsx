import { BiSearchAlt2 } from 'react-icons/bi';
import { BsFillMicFill } from 'react-icons/bs';

const HomeSearch = () => {
  return (
    <form className=" flex w-full items-center mt-6 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
      <BiSearchAlt2 className="text-xl text-gray-400" />
      <input type="text" className=" flex-grow focus:outline-none text-xl" />
      <BsFillMicFill className="text-lg" />
    </form>
  );
};

export default HomeSearch;
