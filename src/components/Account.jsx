import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";

const Account = () => {
  return (
    <div>
      <div className="max-w-2xl  mx-auto mt-5">
        <div className="flex flex-row justify-between">
          <div className="text-white font-bold text-2xl">
            <div>
              <h1>3a7iE…FtUmz</h1>
            </div>
          </div>
          <div className="flex flex-row text-white">
            <span className="mr-2">Explorer</span>{" "}
            <BsBoxArrowUpRight className="mt-1" />
          </div>
        </div>
        <div
          className="mt-5 ml-1 mr-1  border h-16 rounded-lg"
          style={{ borderColor: "#2d2d2d" }}
        >
          <div className="flex flex-row">
            <div>
              <img
                src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                class=" h-6 w-6 mt-5 ml-3 rounded-full"
                alt=""
              />
            </div>
            <div className="flex flex-col mt-1 ml-2">
              <div className="text-white font-bold text-xl">500,000 USDC</div>
              <div className="font-bold" style={{ color: "#8b949e" }}>
                $500,500
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-5">
          <button class="bg-white w-72 ml-10  hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
            Copy Deposit Address
          </button>
          <button class="bg-white w-72 ml-5 mr-10  hover:bg-blue-700 text-text black font-bold py-2 px-4 rounded-full">
            Send
          </button>
        </div>
        <div className="flex flex-row justify-between mt-5">
          <h2 className="text-white text-xl">Current Investments</h2>
          <div className="flex flex-row text-white">
            <BsPlusCircle className="mt-1 mr-2" /> Investments
          </div>
        </div>
        <div
          className="mt-5 ml-1 mr-1  border h-16 rounded-lg"
          style={{ borderColor: "#2d2d2d" }}
        >
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                class=" h-6 w-6 mt-5 -mr-3 ml-3 rounded-full"
                alt=""
              />
              <img
                src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                class=" h-6 w-6 mt-5  rounded-full"
                alt=""
              />

              <div className="flex flex-col mt-2 ml-2">
                <div className="text-white">Deposit USDC on Mango</div>
                <div style={{ color: "#8b949e" }}>0.2 USDC</div>
              </div>
            </div>
            <div className="flex flex-col mt-2 mr-2">
              <div className="text-white">Interest Rate</div>
              <div className="text-lime-500">2.8%</div>
            </div>
          </div>
        </div>
        <div className="text-white text-xl mt-5">
          <h2>Recent Activity</h2>
        </div>
        <div
          className="mt-5 ml-1 mr-1  border h-16 rounded-lg"
          style={{ borderColor: "#2d2d2d" }}
        >
          <div className="flex flex-row justify-between mt-4">
            <div className="ml-4 text-white">3NpFhY9APn3Gc</div>
            <div className="flex flex-row mr-4" style={{ color: "#8b949e" }}>
              3 days ago <BsBoxArrowUpRight className="ml-1 mt-1" />
            </div>
          </div>
        </div>
        <div
          className="mt-5 ml-1 mr-1  border h-16 rounded-lg"
          style={{ borderColor: "#2d2d2d" }}
        >
          <div className="flex flex-row justify-between mt-4">
            <div className="ml-4 text-white">3NpFhY9APn3Gc</div>
            <div className="flex flex-row mr-4" style={{ color: "#8b949e" }}>
              3 days ago <BsBoxArrowUpRight className="ml-1 mt-1" />
            </div>
          </div>
        </div>
        <div
          className="mt-5 ml-1 mr-1  border h-16 rounded-lg"
          style={{ borderColor: "#2d2d2d" }}
        >
          <div className="flex flex-row justify-between mt-4">
            <div className="ml-4 text-white">3NpFhY9APn3Gc</div>
            <div className="flex flex-row mr-4" style={{ color: "#8b949e" }}>
              3 days ago <BsBoxArrowUpRight className="ml-1 mt-1" />
            </div>
          </div>
        </div>
        <div
          className="mt-5 ml-1 mr-1  border h-16 rounded-lg"
          style={{ borderColor: "#2d2d2d" }}
        >
          <div className="flex flex-row justify-between mt-4">
            <div className="ml-4 text-white">3NpFhY9APn3Gc</div>
            <div className="flex flex-row mr-4" style={{ color: "#8b949e" }}>
              3 days ago <BsBoxArrowUpRight className="ml-1 mt-1" />
            </div>
          </div>
        </div>
        <div
          className="mt-5 ml-1 mr-1  border h-16 rounded-lg"
          style={{ borderColor: "#2d2d2d" }}
        >
          <div className="flex flex-row justify-between mt-4">
            <div className="ml-4 text-white">3NpFhY9APn3Gc</div>
            <div className="flex flex-row mr-4" style={{ color: "#8b949e" }}>
              3 days ago <BsBoxArrowUpRight className="ml-1 mt-1" />
            </div>
          </div>
        </div>
        <div
          className="mt-5 ml-1 mr-1  border h-16 rounded-lg"
          style={{ borderColor: "#2d2d2d" }}
        >
          <div className="flex flex-row justify-between mt-4">
            <div className="ml-4 text-white">3NpFhY9APn3Gc</div>
            <div className="flex flex-row mr-4" style={{ color: "#8b949e" }}>
              3 days ago <BsBoxArrowUpRight className="ml-1 mt-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
