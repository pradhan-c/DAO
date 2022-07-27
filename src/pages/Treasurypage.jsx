import React from "react";
import Nft from "../components/Nft";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import Tokens from "../components/Tokens";

const Treasurypage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center ">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-col">
          <Nft />
          <Tokens />
        </div>
      </div>
    </div>
  );
};

export default Treasurypage;
