import React from "react";
import { Navbar } from "../components/Navbar";
import Treasurydetails from "../components/Treasurydetails";
import Account from "../components/Account";
import { BsChevronLeft } from "react-icons/bs";

const Treasurydetailspage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div
          className="border w-9/12 mx-auto mt-10 rounded-xl p-5"
          style={{ borderColor: "#2d2d2d" }}
        >
          <div>
            <h2 className="text-white flex flex-row ">
              <BsChevronLeft className="mr-2 mt-1 text-md " />
              Back
            </h2>
          </div>
          <div className="flex flex-row justify-between mt-10">
            <div className="flex flex-row">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                className=" h-7 w-7 mr-3 mt-4  rounded-full"
                alt=""
              />
              <div className="flex flex-col">
                <div className="font-bold text-lg" style={{ color: "#8b949e" }}>
                  DAO
                </div>
                <div className="text-white text-2xl">Treasury</div>
              </div>
            </div>
            <div className="flex flex-row">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/037.jpg"
                className=" h-7 w-7 mr-3 mt-4  rounded-full"
                alt=""
              />
              <div className="flex flex-col">
                <div className="font-bold text-lg" style={{ color: "#8b949e" }}>
                  Treasury Value
                </div>
                <div className="text-white text-2xl">$757,819</div>
              </div>
            </div>
          </div>
          <hr className="mt-5" style={{ borderColor: "#2d2d2d" }} />
          <div className="flex flex-row justify-center">
            <div className="mr-12 mt-5">
              <Treasurydetails />
            </div>
            <div className="ml-12">
              <Account />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treasurydetailspage;
