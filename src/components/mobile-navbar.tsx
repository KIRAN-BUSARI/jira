"use client";

import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, []);
  return (
    <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant={"secondary"} className="lg:hidden size-8">
          <MenuIcon className="size-4 text-neutral-500" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
