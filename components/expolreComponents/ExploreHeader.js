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
        <div className="text-xl my-12 md:w-[60%]">
          this website is open source and you can find code of this website on
          GitHub. You can request a feature, contribute to project by adding
          feedbacks and mentioning bugs if they exist. Licensed under GPL-3.0
          ©pushkarydv. <br />
          <p className="text-center mt-6">
            You can give a star if you like this project -{" "}
            <a
              href="https://github.com/pushkarydv/APIX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-700 font-medium"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default ExploreHeader;
