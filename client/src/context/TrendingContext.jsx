import React, { createContext, useLayoutEffect, useState } from "react";

// create context object
export const TrendingContext = createContext({});

// create the provider component
export const TrendingProvider = ({ children }) => {
  const [trendData, setTrendData] = useState();

  const getTrendData = async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-PZ6YMiwvqXqsGpjC838iKSKD'
        }
      };
      const response = await fetch(`https://api.coingecko.com/api/v3/search/trending`, options);
      const data = await response.json();
      setTrendData(data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  const resetTrendingResult = () => {
    getTrendData();
  };

  useLayoutEffect(() => {
    getTrendData();
  }, []);

  return (
    <TrendingContext.Provider
      value={{
        trendData,
        resetTrendingResult,
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};

export default TrendingProvider;
