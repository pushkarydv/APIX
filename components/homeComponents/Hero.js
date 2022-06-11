import React from "react";
import Link from "next/link";
function Hero() {
  return (
    <>
      <div className="home min-h-screen flex flex-col justify-center gap-12 items-center">
        <div
          className="text-center m-2 text-6xl font-medium text-slate-600"
          data-aos="zoom-out"
          data-aos-duration="600"
        >
          Build Next Gen Apps with these Api{"'"}s
        </div>
        <Link href="/explore">
          <a
            className="transition before-box py-2 rounded-2xl bg-purple-700 text-slate-200 px-6 text-4xl  outline outline-4 outline-purple-400 hover:bg-purple-600 focus:scale-90"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Explore
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .home {
            background: url("/assets/map.svg") center center fixed no-repeat;
            background-size: contain;
          }
        `}
      </style>
    </>
  );
}

export default Hero;
