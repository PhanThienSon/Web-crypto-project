import { Navbar, Footer, Navigation } from "../../index";
import { Outlet } from "react-router-dom";
import TableComponent from "../../Market/TableComponent";
import "../../../../public/style.css";
import Filters from "../../Market/Filters";
import CryptoDetails from "../CryptoDetails";

const Crypto = () => {
  return (
    <div className="gradient-bg-transactions">
      <Navbar />
      <div className="flex justify-center">
        <Navigation />
      </div>
      <section className="w-[100%] h-full flex flex-col mt-16 mb-24 relative">
        <Filters />
        <TableComponent />
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Crypto;