import { UserButton } from "@/features/auth/components/userButton";
import React from "react";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
  return (
    <div className="flex pt-4 px-6 items-center justify-between">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className="text-muted-foreground">
          Monitor all your projects and tasks here
        </p>
      </div>
      <MobileNavbar />
      <UserButton />
    </div>
  );
};

export default Navbar;
