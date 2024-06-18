import React, { createContext, useLayoutEffect, useState } from "react";

// create context object
export const CryptoContext = createContext({});

// create the provider component
export const CryptoProvider = ({ children }) => {

  const [cryptoData, setCryptoData] = useState();
  const [searchData, setSearchData] = useState();
  const [coinData, setCoinData] = useState();

  const [coinSearch, setCoinSearch] = useState("");

  const [currency, setCurrency] = useState("usd");
  const [sortBy, setSortBy] = useState("market_cap_desc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(250);
  const [perPage, setPerPage] = useState(10);


  const getCryptoData = async () => {
  
    try {
      const options = { method: 'GET', headers: { accept: 'application/json' } };
      const coindata = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&x_cg_demo_api_key=CG-PZ6YMiwvqXqsGpjC838iKSKD`,
        options
      )
        .then((res) => res.json())
        .then((json) => json);
      console.log(coindata);
      setCryptoData(coindata);
    } catch (error) {
      console.log(error);
    }
  };

  const getCoinData = async (coinid) => {
    setCoinData();
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-PZ6YMiwvqXqsGpjC838iKSKD	'
        }
      };        
       const coindata = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`,
        options
      )
        .then((res) => res.json())
        .then((json) => json);
      setCoinData(coindata);
    } catch (error) {
      console.log(error);
    }
  };
  
  const getSearchResult = async (query) => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-PZ6YMiwvqXqsGpjC838iKSKD	'
        }
      };         const coindata = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`,
        options
      )
        .then((res) => res.json())
        .then((json) => json);
      console.log(coindata);
      setSearchData(coindata.coins);
    } catch (error) {
      console.log(error);
    }
  };

  const resetFunction = () => {
    setPage(1);
    setCoinSearch("");
  };

  useLayoutEffect(() => {
    getCryptoData();
  }, [coinSearch, currency, sortBy, page, perPage]);

  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        searchData,
        getSearchResult,
        setCoinSearch,
        setSearchData,
        currency,
        setCurrency,
        sortBy,
        setSortBy,
        page,
        setPage,
        totalPages,
        resetFunction,
        setPerPage,
        perPage,
        getCoinData,
        coinData
            }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoProvider;