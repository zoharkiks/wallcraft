import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full p-4 md:p-8 ">
      <Link href={'/'}>
      <span className="text-xl font-bold drop-shadow-lg ">
        Wall<span className="text-muted-foreground">Craft</span>
      </span>
      </Link>

      <div className="flex items-center justify-center space-x-4">
        <Link href={"/wallpapers"}>
          <Button variant="outline">Wallpapers</Button>
        </Link>
        <Link href={"/"}>
          <Github className="transition-colors hover:text-muted-foreground" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
