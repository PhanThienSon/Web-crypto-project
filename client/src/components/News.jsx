import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, Footer } from "./index";
import "../../public/style.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [fakeNews, setFakeNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk",
          {
            params: {
              query: "Apple",
              language: "en",
            },
            headers: {
              'X-RapidAPI-Key': 'aa74bf03c4mshdcfc1d46a4c1023p167b65jsn8b520929c2fe',
              'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
            },
          }
        );
        console.log("API response data:", response.data.data);
        setNews(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    console.log("News state:", news);
  }, [news]);

  const handleFakeNews = async () => {
    try {
      // Chuyển hướng người dùng sang http://localhost:8501
      window.location.href = 'http://localhost:8501';
    } catch (error) {
      console.error('Lỗi khi chuyển hướng:', error);
    }
  };

  return (
    <div className="gradient-bg-transactions">
      <Navbar />
        <div className="flex-grow flex flex-col justify-center items-center 2xl:px-20 gradient-bg-transactions">
          <div className="flex justify-between items-center">
            <h3 className="text-white text-3xl text-center mb-8">Latest News</h3>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {news.map((article, index) => (
            <div key={index} className="bg-black p-4 rounded-lg shadow-md">
              <a href={article.url} target="_blank" rel="noreferrer">
                <img
                  src={article.thumbnail}
                  alt="news"
                  className="w-full h-48 rounded-md shadow-lg object-cover"
                />
              </a>
              <div className="mt-2">
                <h3 className="text-white text-lg font-bold">{article.title}</h3>
                <p className="text-white text-sm">Published: {article.createdAt}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
        <button
  className="bg-[#2952e3] py-3 px-8 rounded-full cursor-pointer hover:bg-[#2546bd] text-white text-lg font-medium"
  onClick={handleFakeNews}
>
  Detected News
</button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {fakeNews.map((article, index) => (
              <div key={index} className="bg-black p-4 rounded-lg shadow-md">
                <a href={article.url} target="_blank" rel="noreferrer">
                  <img
                    src={article.thumbnail}
                    alt="news"
                    className="w-full h-48 rounded-md shadow-lg object-cover"
                  />
                </a>
                <div className="mt-2">
                  <h3 className="text-white text-lg font-bold">{article.title}</h3>
                  <p className="text-gray-400 text-sm">Published: {article.createdAt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;