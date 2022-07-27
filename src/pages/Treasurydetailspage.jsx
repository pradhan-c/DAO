import React from "react";
import { Navbar } from "../components/Navbar";
import Treasurydetails from "../components/Treasurydetails";
import Account from "../components/Account";

const Treasurydetailspage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="mx-auto mt-5">
          <h1 className="text-white text-3xl font-bold text-center">
            Treasury
          </h1>
        </div>
        <div className="flex flex-row justify-center">
          <Account />
        </div>
      </div>
    </div>
  );
};

export default Treasurydetailspage;
