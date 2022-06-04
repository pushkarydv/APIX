import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

function Nav() {
  //   const router = useRouter();
  return (
    <div className="text-3xl p-2 flex justify-between items-center">
      <Link href="/">
        <a className="text-slate-700">APIX</a>
      </Link>
      <div className="flex gap-4 justify-between items-center text-2xl">
        {[
          ["/", "Home"],
          ["/explore", "Explore"],
          ["/about", "About"],
        ].map(([url, name]) => (
          <div key={name}>
            <Link href={url}>
              <a>{name}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nav;
