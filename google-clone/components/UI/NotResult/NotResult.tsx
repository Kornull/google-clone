import Link from 'next/link';

const NotResult = () => {
  return (
    <div className=" flex flex-col justify-center items-center pt-52">
      <h1 className=" text-3xl mb-5">No results found.</h1>
      <p className=" text-lg">
        Try searching for something else or go back to the{' '}
        <Link href="/" className=" text-blue-600">
          Home
        </Link>
        &#46;
      </p>
    </div>
  );
};

export default NotResult;
