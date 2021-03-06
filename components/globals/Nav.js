import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  return (
    <nav className="text-3xl flex justify-between bg-white ">
      <Link href="/">
        <a className="text-slate-700 p-2">APIX</a>
      </Link>
      <div className="flex justify-between text-2xl p-0">
        {[
          ["/", "Home"],
          ["/explore", "Explore"],
        ].map(([url, name]) => (
          <div
            key={name}
            className={
              "transition-all py-2 px-6 " +
              (router.asPath === url
                ? "bg-purple-700 text-slate-100"
                : " text-purple-900 ")
            }
          >
            <Link href={url}>
              <a>{name}</a>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
