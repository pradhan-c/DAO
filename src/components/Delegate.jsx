import { width } from "@mui/system";
import React from "react";

const Delegate = () => {
  return (
    <div>
      <div
        className="mx-auto mt-10  text-white text-3xl font-bold max-w-2xl"
        style={{ width: "600px" }}
      >
        <div
          className="mx-auto mt-5 block p-6 m-2 max-w-2xl rounded-lg border shadow-md hover:bg-gray-100"
          style={{ borderColor: "#2d2d2d", width: "600px" }}
        >
          <p className="font-normal text-lg text-center text-gray-400">
            Add the address you want to delegate.
          </p>
        </div>
        <div
          className="border max-w-2xl mt-7 rounded-lg p-3"
          style={{ borderColor: "#2d2d2d" }}
        >
          <label
            for="email"
            className="block mt-3 mb-2 ml-5 mr-3 mx-auto max-w-2xl text-sm font-medium text-gray-400 "
          >
            To
          </label>
          <input
            type="email"
            id="email"
            aria-describedby="helper-text-explanation"
            className=" border bg-transparent mx-auto max-w-lg ml-5 mr-3  border-gray-300 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
            placeholder="Address or ENS name"
            style={{ borderColor: "#2d2d2d" }}
          />
          <button
            className="bg-transparent border  max-w-lg ml-5 mr-3 mb-5 mt-4 mx-12 empty:3 px-12 py-1 rounded-full   font-medium text-gray-400 text-lg hover:bg-blue-600"
            style={{ borderColor: "#2d2d2d" }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delegate;
