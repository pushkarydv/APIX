import React from "react";
import Nav from "../nav/Nav";
import Link from "next/link";
function HomePage() {
  return (
    <>
      <Nav />
      <div className="home min-h-screen flex flex-col justify-center gap-12 items-center">
        <div className="text-center m-2 text-6xl font-medium text-slate-600">
          Build Next Gen Apps with these Api{"'"}s
        </div>
        <Link href="/explore">
          <a className=" py-4 bg-purple-700 text-slate-200 px-6 text-4xl">
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

export default HomePage;
