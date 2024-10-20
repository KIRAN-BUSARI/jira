import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DottedSeparator } from "./dotted-seperator";
import { Navigation } from "./Navigation";

const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href={"/"} className="flex items-center gap-4 mx-10">
        <Image src={"/logo.svg"} width={30} height={30} alt="logo" />
        <p className="text-3xl font-extrabold font-sans from-blue-500 tracking-wide to-blue-600 bg-clip-text text-transparent bg-gradient-to-t">
          JIRA
        </p>
      </Link>
      <DottedSeparator className="my-10"/>
      <Navigation />
    </aside>
  );
};

export default Sidebar;
