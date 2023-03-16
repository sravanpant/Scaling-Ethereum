import Image from "next/image";
import React from "react";

const Detail = (props) => {
  return (
    <div id={props.id} className="mb-12 border-b-2 border-b-gray-200">
      <div className="relative grid grid-cols-12 rounded-3xl lg:p-4">
        <div className="col-span-12 md:col-span-3 sm:ml-4">
          <Image
            src={props.src}
            alt="/"
            className="h-[120px] w-[120px]  rounded-full"
          />
        </div>
        <div className="col-span-12 md:col-span-9 ">
          <h2 className="mt-4 sm:ml-4 text-4xl font-bold xl:pr-28">
            {props.title}
          </h2>
        </div>
      </div>
      <div className="p-4">
        <h3
          className="mb-2 text-2xl font-medium text-gray-900"
          id="recent-hires-title"
        >
          About the Smallcase
        </h3>
        <div className="text-mb text-gray-500 lg:text-base">
          <p className="mt-4 ">{props.content}</p>
        </div>
      </div>
      <div className="p-4">
        <h4 className="mb-2 text-xl font-medium text-black-500">
          Minimum Investment Amount
        </h4>
        <p className="mt-2 mb-2 text-2xl font-light text-gray-500">
          {props.price}
        </p>
        <div className="grid grid-rows-2">
          <button className="mr-[500px] mb-1 justify-start bg-green-500 hover:bg-green-700 text-white font-normal py-2 px-4 border border-green-700 rounded-md">
            Invest Now
          </button>
          <button className="mr-[500px] mb-1 mt-1 justify-start bg-transparent hover:bg-blue-500 text-blue-700 font-normal hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-md">
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
