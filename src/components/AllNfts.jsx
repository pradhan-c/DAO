import React from "react";

const AllNfts = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className=" m-5 text-white text-2xl">NFT's</h1>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto m-10">
        <div>
          <img
            src="https://mdbootstrap.com/img/new/standard/city/034.jpg"
            className="w-48 h-48 "
            alt=""
          />
        </div>
        <div>
          <img
            src="https://mdbootstrap.com/img/new/standard/city/004.jpg"
            className="w-48 h-48"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://mdbootstrap.com/img/new/standard/city/018.jpg"
            className="w-48 h-48"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
            className="w-48 h-48"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://mdbootstrap.com/img/new/standard/city/050.jpg"
            className="w-48 h-48"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://mdbootstrap.com/img/new/standard/city/052.jpg"
            className="w-48 h-48"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://mdbootstrap.com/img/new/standard/city/053.jpg"
            className="w-48 h-48"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://mdbootstrap.com/img/new/standard/city/054.jpg"
            className="w-48 h-48"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AllNfts;
