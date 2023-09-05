const Loading = () => {
  return (
    <>
      <div className=" relative -z-10 flex flex-col gap-3 items-center pt-10 mx-2 sm:pl-22 lg:pl-52 max-w-6xl sm:flex-row">
        <div className=" animate-pulse ">
          <div className=" h-48 w-48 bg-gray-200 mb-4 rounded-md "></div>
          <div className="w-48 h-2 bg-gray-200 mb-2.5 rounded-md "></div>
          <div className="w-40 h-1.5 bg-gray-200 mb-2.5 rounded-md "></div>
        </div>
        <div className=" animate-pulse hidden sm:block">
          <div className=" h-48 w-48 bg-gray-200 mb-4 rounded-md "></div>
          <div className="w-48 h-2 bg-gray-200 mb-2.5 rounded-md "></div>
          <div className="w-40 h-1.5 bg-gray-200 mb-2.5 rounded-md "></div>
        </div>
        <div className=" animate-pulse hidden sm:block">
          <div className=" h-48 w-48 bg-gray-200 mb-4 rounded-md ded-md "></div>
          <div className="w-48 h-2 bg-gray-200 mb-2.5 rounded-md "></div>
          <div className="w-40 h-1.5 bg-gray-200 mb-2.5 rounded-md "></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
