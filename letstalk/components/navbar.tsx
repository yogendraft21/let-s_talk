import React from "react";
import { MobileSidebar } from "./mobile.sidebar";
import { UserCircleIcon } from "lucide-react";

const Navbar = async () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserCircleIcon/>
      </div>
    </div>
  );
};

export default Navbar;
