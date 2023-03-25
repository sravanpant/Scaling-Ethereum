import Image from "next/image";
import React from "react";
import logo from "../public/assets/logo2.png";
import Link from "next/link";
import Breadcrumb from "./Breadcrumb";

const Navbar = (props) => {
  return (
    <div className="bg-contain bg-no-repeat ">
      <div className="grid grid-rows-2 pt-6 pb-[90px] mb-[50px] fixed w-full h-20 z-[100] bg-gradient-to-r from-[#ECF9FF] to-[#FFF8EA]">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full flex h-16 flex-row items-center justify-between">
          <Link className="absolute left-[2rem]" href="/">
            <div className="pl-5">
              <Image
                className="rounded-lg  "
                src={logo}
                width="150"
                height="150"
                alt="/"
              ></Image>
            </div>
          </Link>

          <ul className=" flex w-full items-center justify-center gap-8 lg:visible">
            <li className="font-medium transition-opacity hover:opacity-60 lg:text-[1.1rem]">
              <Link href="/">
                <span>Home</span>
              </Link>
            </li>
            <li className="font-medium transition-opacity hover:opacity-60 lg:text-[1.1rem]">
              <Link href={props.one}>
                <span>{props.one}</span>
              </Link>
            </li>
            <li className="font-medium transition-opacity hover:opacity-60 lg:text-[1.1rem]">
              <Link href={props.two}>
                <span>{props.two}</span>
              </Link>
            </li>
            <li className="font-medium transition-opacity hover:opacity-60 lg:text-[1.1rem]">
              <Link href={props.three}>
                <span>{props.three}</span>
              </Link>
            </li>
          </ul>
          <div></div>
        </div>
        <div className="mt-10 ml-40 pb-10 pt-5 pl-1 relative flex w-full flex-wrap items-center justify-between lg:flex-wrap lg:justify-start">
          <div className="flex w-full flex-wrap items-center justify-between px-6">
            <div className=" w-full rounded-md" aria-label="breadcrumb">
              <Breadcrumb
                first={props.first}
                second={props.second}
                third={props.third}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
