import { Navbar, Footer, Navigation } from "../index";
import { CryptoProvider } from "../../context/CryptoContext";
import { TrendingProvider } from "../../context/TrendingContext";

import "../../../public/style.css";

const MarketPlace = () => {
  return (
    <CryptoProvider>
      <TrendingProvider>
        <StorageProvider>
         <main className="gradient-bg-transactions">
            <Navbar />
            <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
              <Navigation />
            <Footer />
          </main>
        </StorageProvider>
      </TrendingProvider>
    </CryptoProvider>
  );
};

export default MarketPlace;