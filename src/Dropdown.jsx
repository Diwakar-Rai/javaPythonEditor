import React, { useContext, useState } from "react";
import { AppContext } from "./GlobalContext";

const Dropdown = () => {
  let { setSubjectId, subjectId } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {subjectId == 62 ? "Java" : subjectId == 71 ? "Python" : null}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[10]">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <section
              className="px-2 hover:bg-slate-200 cursor-pointer"
              onClick={() => {
                setSubjectId(62);
                setIsOpen(false);
              }}
            >
              Java
            </section>
            <section
              className="px-2 hover:bg-slate-200 cursor-pointer"
              onClick={() => {
                setSubjectId(71);
                setIsOpen(false);
              }}
            >
              Python
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
