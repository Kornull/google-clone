import { TbGridDots } from 'react-icons/tb';

const HeaderButtons = () => {
  return (
    <div className="flex sm:space-x-4 items-center ">
      <TbGridDots className="setting__icon hidden sm:inline-flex " />
      <button className=" min-w-max bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:brightness-105 hover:shadow-md transition-shadow">
        Sign In
      </button>
    </div>
  );
};

export default HeaderButtons;
