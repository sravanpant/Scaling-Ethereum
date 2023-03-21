import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";

const algofi = () => {
  return (
    <div className="p-15 bg-gradient-to-r from-[#ECF9FF] to-[#FFF8EA]">
      <Header />
      <Navbar one="Investments" two="" three="" title="CryptoFi" />
      <Footer />
    </div>
  );
};

export default algofi;
