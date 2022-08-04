import React from "react";
import { Navbar } from "../components/Navbar.jsx";
import { Create } from "../components/Create.jsx";

const Createpage = () => {
  return (
    <div>
      <Navbar />
      <div className="m-3">
        <Create />
      </div>
    </div>
  );
};

export default Createpage;
