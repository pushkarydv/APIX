import React from "react";
import Nav from "../nav/Nav";

function HomePage() {
  return (
    <>
      <Nav />
      <div className="home min-h-screen flex justify-center items-center">
        <div className="text-center m-2 text-8xl font-medium text-purple-600">
          Build Next Gen Apps with these Api{"'"}s
        </div>
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
