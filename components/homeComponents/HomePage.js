import React from "react";
import Nav from "../nav/Nav";
import Link from "next/link";
import Map from "../../public/assets/map.svg";
function HomePage() {
  return (
    <>
      <Nav />
      <div className="home min-h-screen flex flex-col justify-center gap-12 items-center">
        <div className="text-center m-2 text-6xl font-medium text-slate-600">
          Build Next Gen Apps with these Api{"'"}s
        </div>
        <Link href="/explore">
          <a className="before-box py-4 bg-purple-700 text-slate-200 px-6 text-4xl  before:bg-purple-500">
            Explore
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .home {
            background: url("data:image/svg+xml;utf8,${Map}) center center fixed no-repeat;
            background-size: contain;
          }
          .before-box {
            position: relative;
            z-index: 10;
          }
          .before-box:before {
            content: "";
            position: absolute;
            z-index: 5;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </>
  );
}

export default HomePage;
