import Link from "next/link";
import React from "react";

const Breadcrumb = (props) => {
  if (props.first == "Home") {
    return (
      // <div>
      //   <ul className="list-reset flex">
      //     <li>
      //       <Link
      //         href="/"
      //         className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-200"
      //       >
      //         {props.first}
      //       </Link>
      //     </li>
      //     <li>
      //       <span className="mx-2 text-neutral-500 dark:text-neutral-200">
      //         &gt;
      //       </span>
      //     </li>
      //     <li>
      //       <Link
      //         href={props.second}
      //         className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-200"
      //       >
      //         {props.second}
      //       </Link>
      //     </li>
      //     <li>
      //       <span className="mx-2 text-neutral-500 dark:text-neutral-200">
      //         &gt;
      //       </span>
      //     </li>
      //     <li>
      //       <Link
      //         href={props.third}
      //         className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-200"
      //       >
      //         {props.third}
      //       </Link>
      //     </li>
      //   </ul>
      // </div>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              {props.first}
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <Link
                href={props.second}
                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                {props.second}
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <Link
                href={props.third}
                className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
              >
                {props.third}
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    );
  } else {
    return <div></div>;
  }
};

export default Breadcrumb;
