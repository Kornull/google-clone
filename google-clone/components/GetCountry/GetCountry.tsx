'use client';

import { useEffect, useState } from 'react';

enum InitialCountry {
  COUNTRY = 'United Kingdom',
}

type CountyDataType = {
  businessName: string;
  businessWebsite: string;
  city: string;
  continent: string;
  country: string;
  countryCode: string;
  ipName: string;
  ipType: string;
  isp: string;
  lat: string;
  lon: string;
  org: string;
  query: string;
  region: string;
  status: string;
};

const GetCountry = () => {
  const [country, setCountry] = useState<string>(InitialCountry.COUNTRY);

  const getCountry = async (): Promise<void> => {
    const res: Response = await fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_COUNTRY_KEY}`
    );
    const result: CountyDataType = await res.json();

    if (result.country.length) setCountry(result.country);
  };

  useEffect(() => {
    getCountry();
  }, []);

  return <>{country}</>;
};

export default GetCountry;
