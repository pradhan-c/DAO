import React from "react";

const Heading = () => {
  return (
    <div>
      <div className=" m-5 ml-3 md:ml-3  mx-5 md:mx-0  font-bold max-w-2xl text-3xl text-gray-50">
        <h1>Proposals</h1>
      </div>
      <div
        className=" mt-2 block p-6 m-5 ml-3 md:ml-3  mx-5 md:mx-0  max-w-2xl rounded-lg border shadow-md hover:bg-gray-100"
        style={{ borderColor: "#2d2d2d" }}
      >
        <p className="font-normal text-gray-400 text-center">
          A decentralized community helping the world go bankless
        </p>
      </div>
    </div>
  );
};

export default Heading;
