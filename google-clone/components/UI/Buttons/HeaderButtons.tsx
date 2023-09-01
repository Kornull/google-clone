import { TbGridDots } from 'react-icons/tb';

const HeaderButtons = () => {
  return (
    <>
      <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 cursor-pointer transition-colors" />
      <button className=" bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:brightness-105 hover:shadow-md transition-shadow">
        Sign In
      </button>
    </>
  );
};

export default HeaderButtons;
