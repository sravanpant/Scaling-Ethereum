import React from "react";

const Developers = () => {
  return (
    <div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full mb-24 pt-40 rounded-md">
        <div className="rounded-lg bg-white shadow p-20 ">
          <div className="py-6 ">
            <h2 className="text-3xl text-center font-bold">AlgoFi</h2>
            <div className="mt-8 max-w-md">
              <form action="">
                <div className="grid grid-cols-1 gap-6 justify-center">
                  <label className="block ">
                    <span className="text-gray-700">Full name</span>
                    <input
                      type="text"
                      className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      placeholder=""
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Email address</span>
                    <input
                      type="email"
                      className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      placeholder="john@example.com"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">When is your event?</span>
                    <input
                      type="date"
                      className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">
                      What type of event is it?
                    </span>
                    <select
                      className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    >
                      <option>Corporate event</option>
                      <option>Wedding</option>
                      <option>Birthday</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Additional details</span>
                    <textarea
                      className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      rows="3"
                    ></textarea>
                  </label>
                  <div className="block">
                    <div className="mt-2">
                      <div>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="
                          rounded
                          border-gray-300
                          text-indigo-600
                          shadow-sm
                          focus:border-indigo-300
                          focus:ring
                          focus:ring-offset-0
                          focus:ring-indigo-200
                          focus:ring-opacity-50
                        "
                            checked
                          />
                          <span className="ml-2">
                            Email me news and special offers
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
