import Image from "next/image";
import React from "react";
import logo from "../public/assets/eth.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-contain bg-no-repeat">
      <div className="pt-6 transparent">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full flex h-16 flex-row items-center justify-between">
          <Link className="absolute left-[1.6rem]" href="/">
            <Image
              className="rounded-lg"
              src={logo}
              width="50"
              height="50"
              alt="/"
            ></Image>
          </Link>

          <ul className=" flex w-full items-center justify-center gap-8 lg:visible">
            <li className="font-medium transition-opacity hover:opacity-60 lg:text-[1.1rem]">
              <Link href="/">
                <span>Home</span>
              </Link>
            </li>
            <li className="font-medium transition-opacity hover:opacity-60 lg:text-[1.1rem]">
              <Link href="/smallcase" target="_blank">
                <span>Your Investments</span>
              </Link>
            </li>
            <li className="font-medium transition-opacity hover:opacity-60 lg:text-[1.1rem]">
              <Link href="/watchlist" target="_blank">
                <span>Your Watchlist</span>
              </Link>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
      <div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex items-center space-x-4 pt-4">
            <span className="text-xl font-semibold sm:text-3xl">
              <Link href="/">ETH SmallCase</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
