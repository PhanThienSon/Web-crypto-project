import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Welcome, Footer, Services, Transactions, Login, MyWallet } from "./components";
import News from './components/News';
import MarketPlace from './components/Market/MarketPlace';
import Crypto from './components/Market/Pages/Crypto';
import Saved from './components/Market/Pages/Saved';
import Trending from './components/Market/Pages/Trending';
import CryptoDetails from './components/Market/CryptoDetails';


const HomePage = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/history' element={<Transactions />}></Route>
        <Route path='/marketplace' element={<Crypto />}></Route>
        <Route path='/mywallet' element={<MyWallet />}></Route>
        <Route path='/crypto' element={<Crypto />}></Route>
        <Route path='/saved' element={<Saved />}></Route>
        <Route path='/trending' element={<Trending />}></Route>
        <Route path='/:coinId' element={<CryptoDetails />} />
        <Route path='/trending/:coinId' element={<CryptoDetails />} />
      </Routes>
    </Router>
  )
}

export default App;