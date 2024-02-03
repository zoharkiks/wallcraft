import React from "react";
import WallpaperCard from "./_components/WallpaperCard";

const Wallpapers = () => {
  return (
    <main className="h-full px-4 md:px-8">
      <div className="relative flex flex-col items-center min-h-screen p-4 pt-32 space-y-4 md:space-y-8">
        <p className="text-2xl text-center md:text-4xl">
          Unveil the artistry of our AI-generated wallpapers, each a masterpiece
          designed to transform your digital canvas.
        </p>
        <h2 className=" inline-block text-5xl md:text-8xl uppercase font-black !bg-clip-text text-transparent !bg-cover !bg-center bg-gradient-to-tl from-[#485563] to-[#29323c] text-center">
          A Journey Through WallCraft
        </h2>
      </div>

      {/* Featured Wallpapers */}
      <section className="relative h-full md:!mt-0">
        <h2>Featured Wallpapers</h2>

        <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          <WallpaperCard />
          <WallpaperCard />
          <WallpaperCard />
          <WallpaperCard />
        </div>
      </section>

      {/* Newly Added  */}
      <section className="relative h-full">
        <h2>Newly Added </h2>

        <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          <WallpaperCard />
          <WallpaperCard />
          <WallpaperCard />
          <WallpaperCard />
        </div>
      </section>

      {/* Newly Added  */}
      <section className="relative h-full">
        <h2>Your Mood, Your Color </h2>

        <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          <WallpaperCard />
          <WallpaperCard />
          <WallpaperCard />
          <WallpaperCard />
        </div>
      </section>
    </main>
  );
};

export default Wallpapers;
