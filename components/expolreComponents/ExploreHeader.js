import React from "react";
import ApiBoxConatiner from "./ApiBoxConatiner";
import { Apis } from "../list/Apis";
function ExploreHeader() {
  return (
    <>
      {" "}
      <div className="min-h-[20vh] flex flex-col justify-center items-center">
        <div
          className="text-center m-2 text-4xl font-medium text-slate-600 my-12"
          data-aos="zoom-out"
          data-aos-duration="200"
        >
          API Cateogories
        </div>
        <div className="w-[90%] md:w-[70%] lg:w-[60%] mt-0 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {Apis.map(([name, url]) => (
            <ApiBoxConatiner key={url} text={name} url={url} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ExploreHeader;
