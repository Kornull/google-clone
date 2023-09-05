'use client';

import { useEffect } from 'react';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className=" flex flex-col justify-center items-center pt-52">
      <h2 className=" text-3xl text-red-600 font-medium mb-4">Something went wrong!</h2>
      <button
        className=" text-xl text-blue-700 border px-5 py-3 border-blue-800 rounded hover:bg-blue-700 hover:text-white transition-all ease-linear"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
