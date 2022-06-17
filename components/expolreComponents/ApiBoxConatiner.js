import Link from "next/link";
import React from "react";

function ApiBoxConatiner({ text, url }) {
  return (
    <>
      <Link href={"/explore/" + url}>
        <a className="transition-all text-center flex p-6 text-2xl w-full justify-center items-center bg-slate-200 rounded-xl hover:bg-purple-200 focus:scale-90 ">
          <div>{text}</div>
        </a>
      </Link>
    </>
  );
}

export default ApiBoxConatiner;
