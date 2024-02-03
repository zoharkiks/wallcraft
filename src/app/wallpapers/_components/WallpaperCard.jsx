import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

const WallpaperCard = () => {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden bg-red-500 select-none rounded-2xl">
      <Image
        height={218}
        width={387}
        className="object-cover w-full h-full transition-all duration-300 rounded-2xlF hover:scale-105"
        src="https://gradient.page/_next/image?url=%2Fcdn%2Fpretty-in-pink%2Fpretty-in-pink-001.jpg&w=640&q=75"
      />
      <div className="absolute top-0 right-0 flex items-center justify-center gap-2 m-5 pointer-events-none">
        <span>001</span>
      </div>

      <div className="absolute bottom-0 right-0 flex items-center gap-2 m-5">
        <Button size="sm" variant="outline" className="w-max">
          <Download className="mr-2" size={12} />
          Download
        </Button>
      </div>
    </div>
  );
};

export default WallpaperCard;
