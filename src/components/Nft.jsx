import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const Nft = () => {
  return (
    <div>
      <div
        className="md:w-64 sm:w-full   py-4 px-3 mt-1 ml-5 rounded-xl border"
        style={{ borderColor: "#2d2d2d" }}
      >
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="text-white">NFTS</h3>
          </div>
          <div className="text-white flex flex-row items-center">
            View <BsArrowRightCircle className="ml-2" />
          </div>
        </div>
        <div className="flex flex-row mt-4  justify-center items-center ">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/045.jpg"
            class=" h-24 w-24 rounded-lg"
            alt=""
          />
          <img
            src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
            class=" h-24 w-24 ml-5 rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Nft;
