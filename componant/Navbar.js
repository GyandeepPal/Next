import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="bg-green-800 text-white p-2.5">


      <div className="flex  items-center">

        {/* Logo */}
        <div className="h-10 w-10 border-2 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Logo"
          />
        </div>

        {/* Menu */}
        <ul className="flex gap-9 ml-auto mr-3">

          <Link href="/Home"><li className="text-xs"></li>Home</Link>
          <Link href="/About"><li className="text-xs"></li>About</Link>
          <Link href="/Contact"><li className="text-xs"> </li>Contact</Link>

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;