/* eslint-disable @next/next/no-img-element */
import Card from "@/components/Card";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import btcImg from "public/assets/btc.png";
import eth2Img from "public/assets/eth2.png";
import solanaImg from "public/assets/solana.png";
import { BiRefresh } from "react-icons/bi";
import Link from "next/link";
import Overview from "@/components/Overview";

const Smallcase = () => {
  const [investment, setInvestment] = useState(false);

  const renderInvestment = () => {
    if (investment) {
      return (
        <div>
          <div className="p-4">
            <Overview value="-" inv="-" return="-" total="-" />
          </div>
          <div className="grid grid-rows-3">
            <Card
              title="Bitcoin"
              src={btcImg}
              value="$18,000"
              inv="-"
              return="-"
              total="-"
            />
            <Card
              title="Solana"
              src={solanaImg}
              value="$101"
              inv="-"
              return="-"
              total="-"
            />
            <Card
              title="Ethereum"
              src={eth2Img}
              value="$1,400"
              inv="-"
              return="-"
              total="-"
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="p-4">
            <Overview value="-" inv="-" return="-" total="-" />
          </div>
          <div className="text-center  font-normal grid grid-rows-2">
            <span className="justify-center text-2xl m-1 text-gray-700">
              It&apos;s a beautiful day to start your investment journey
            </span>
            <span className="justify-center m-1 text-gray-500 text-base">
              Pick up your first smallcase today and start tracking it here
            </span>
            <Link href="/" target="_blank">
              <button className="mr-[600px] ml-[600px] m-2   justify-start bg-green-500 hover:bg-green-700 text-white font-normal py-2 px-4 border border-green-700 rounded-md">
                Start Investing Now
              </button>
            </Link>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="p-15 pb-[110px] bg-gradient-to-r from-[#ECF9FF] to-[#FFF8EA]">
      <Header />
      <Navbar />
      <div className="p-10 pb-[400px]">{renderInvestment()}</div>
    </div>
  );
};

export default Smallcase;
