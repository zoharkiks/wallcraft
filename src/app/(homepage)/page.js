import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full px-4 md:px-8">
      {/* Hero */}
      <section class=" min-h-screen flex flex-col py-20 md:!mt-0 md:py-10  ">
        <div className="">
          <div className="flex flex-col items-center justify-center h-full space-y-4  p- md:space-y-8">
            <p className="text-2xl text-center md:text-4xl">
              AI-Generated Masterpieces for Every Device
            </p>
            <h1 className=" inline-block text-5xl md:text-8xl uppercase font-black !bg-clip-text text-transparent !bg-cover !bg-center bg-gradient-to-tl from-[#485563] to-[#29323c]">
              WallCraft
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 ">
            <Image
              width={720}
              height={1200}
              className="relative border-2 rounded-2xl border-muted"
              src="https://gradient.page/_next/image?url=%2Fcdn%2Fpretty-in-pink%2Fpretty-in-pink-001.jpg&w=640&q=75"
            />

            {/* <div className="absolute bottom-0 left-0 right-0 z-10 w top-1/2 bg-gradient-to-t from-background" /> */}
          </div>
        </div>
      </section>

      {/* features */}
      <section className="grid gap-4 space-y-20 ">
        <div className="grid gap-4 p-6 border md:grid-cols-2 rounded-2xl border-muted-foreground">
          <div className="">
            <div className="flex items-center justify-between ">
              <h2 className="">Infinite Variety</h2>
              <h3>01.</h3>
            </div>
            <p>
            Explore an ever-evolving collection of AI-generated wallpapers, ensuring each visit unveils fresh visual delights. Let WallCraft transform your screens with a dynamic canvas that never stops surprising.
            </p>
          </div>
          <div className="flex place-content-center">
            <Image
              width={540}
              height={100}
              className="relative h-full border rounded-2xl border-muted-foreground"
              src="https://gradient.page/_next/image?url=%2Fcdn%2Fpretty-in-pink%2Fpretty-in-pink-001.jpg&w=640&q=75"
            />
          </div>
        </div>

        <div className="grid gap-4 p-6 border rounded-2xl border-muted-foreground md:grid-cols-2">
          <div className="md:order-1">
            <div className="flex items-center justify-between ">
              <h2 className="">High-Quality Resolution</h2>
              <h3>02.</h3>
            </div>
            <p>
            Immerse yourself in stunning detail and clarity as WallCraft brings you wallpapers that redefine visual excellence. Every image is crafted to perfection, ensuring your screens showcase the utmost precision and brilliance. 
            </p>
          </div>
          <div className="flex place-content-center">
            <Image
              width={540}
              height={1200}
              className="relative h-full border rounded-2xl border-muted-foreground "
              src="https://gradient.page/_next/image?url=%2Fcdn%2Fpretty-in-pink%2Fpretty-in-pink-001.jpg&w=640&q=75"
            />
          </div>
        </div>

        <div className="grid gap-4 p-6 border shadow-2xl md:grid-cols-2 rounded-2xl border-muted-foreground">
          <div className="">
            <div className="flex items-center justify-between ">
              <h2 className="">Frequent Updates</h2>
              <h3>03.</h3>
            </div>
            <p>
            WallCraft ensures a constant stream of new and exciting wallpapers, keeping your collection dynamic and up-to-date. Experience the joy of regularly discovering fresh designs that cater to evolving tastes. .
            </p>
          </div>
          <div className="flex place-content-center">
            <Image
              width={540}
              height={100}
              className="relative h-full border rounded-2xl border-muted-foreground"
              src="https://gradient.page/_next/image?url=%2Fcdn%2Fpretty-in-pink%2Fpretty-in-pink-001.jpg&w=640&q=75"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
