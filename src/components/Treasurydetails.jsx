import React from "react";
import { BsPlusCircle } from "react-icons/bs";

const Treasurydetails = () => {
  return (
    <div>
      <div className="w-80">
        <div className="flex flex-row justify-between">
          <h2 className="text-white">Treasury Accounts</h2>
          <div className="flex flex-row text-white">
            <BsPlusCircle className="mt-1 mr-2" /> New dao Wallet
          </div>
        </div>
        <div className="flex flex-col mt-5 ">
          <div className="flex flex-row">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
              className=" h-5 w-5 rounded-full mt-1"
              alt=""
            />
            <div className="text-white font-bold text-xl ml-3">3a7iE…FtUmz</div>
          </div>
          <div className="font-bold " style={{ color: "#8b949e" }}>
            500,000 USDC
          </div>
          <div style={{ color: "#8b949e" }}>$500,500</div>
        </div>
        <div className="flex flex-col mt-5 ">
          <div className="flex flex-row">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
              className=" h-5 w-5 rounded-full mt-1"
              alt=""
            />
            <div className="text-white font-bold text-xl ml-3">3a7iE…FtUmz</div>
          </div>
          <div className="font-bold" style={{ color: "#8b949e" }}>
            500,000 USDC
          </div>
          <div style={{ color: "#8b949e" }}>$500,500</div>
        </div>
        <div className="flex flex-col mt-5 ">
          <div className="flex flex-row">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/045.jpg"
              className=" h-5 w-5 rounded-full mt-1"
              alt=""
            />
            <div className="text-white font-bold text-xl ml-3">3a7iE…FtUmz</div>
          </div>
          <div className="font-bold" style={{ color: "#8b949e" }}>
            500,000 USDC
          </div>
          <div style={{ color: "#8b949e" }}>$500,500</div>
        </div>
        <div className="flex flex-col mt-5 ">
          <div className="flex flex-row">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
              className=" h-5 w-5 rounded-full mt-1"
              alt=""
            />
            <div className="text-white font-bold text-xl ml-3">3a7iE…FtUmz</div>
          </div>
          <div className="font-bold" style={{ color: "#8b949e" }}>
            500,000 USDC
          </div>
          <div style={{ color: "#8b949e" }}>$500,500</div>
        </div>
        <div className="flex flex-col  mt-5 ">
          <div className="flex flex-row">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/034.jpg"
              className=" h-5 w-5 rounded-full mt-1"
              alt=""
            />
            <div className="text-white font-bold text-xl ml-3">3a7iE…FtUmz</div>
          </div>
          <div className="font-bold text-lg" style={{ color: "#8b949e" }}>
            500,000 USDC
          </div>
          <div style={{ color: "#8b949e" }}>$500,500</div>
        </div>
      </div>
    </div>
  );
};

export default Treasurydetails;
