import GetCountry from '@/components/GetCountry/GetCountry';

const Footer = () => {
  return (
    <footer className="text-sm text-gray-500 bg-gray-100 w-full">
      <div className=" border-b px-8 py-3">
        <GetCountry />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-8 space-y-8 sm:space-y-0">
        <ul className="list">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Business</li>
          <li className="link">How Search words</li>
        </ul>
        <ul className="list">
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
