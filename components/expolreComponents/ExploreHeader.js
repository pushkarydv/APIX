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
          Cateogories
        </div>
        <div className="w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] mt-0 mx-auto">
          {Apis.map((api) => (
            <ApiBoxConatiner key={api} text={api} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ExploreHeader;
