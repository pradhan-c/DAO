import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const Nft = () => {
  return (
    <div>
      <div
        className="max-w-3xl  py-4 px-3 mt-8 ml-5 rounded-xl border"
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-4 ml-2 mr-2 mt-5 mb-5   justify-center items-center ">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/034.jpg"
            className="h-36 w-36 rounded-lg"
            alt=""
          />
          <img
            src="https://mdbootstrap.com/img/new/standard/city/004.jpg"
            className=" h-36 w-36  rounded-lg"
            alt=""
          />
          <img
            src="https://mdbootstrap.com/img/new/standard/city/018.jpg"
            className=" h-36 w-36 rounded-lg"
            alt=""
          />
          <img
            src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
            className=" h-36 w-36 rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Nft;
