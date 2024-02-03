import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "WallCraft: AI-Generated High-Quality Wallpapers for Every Screen",
  description:
    "Elevate your device aesthetics with WallCraft – your gateway to a stunning collection of high-quality AI-generated wallpapers. Immerse yourself in a world of unparalleled creativity and sophistication. Unleash the power of artificial intelligence to adorn your screens with captivating visuals. Discover, download, and redefine your device's look with WallCraft's cutting-edge wallpaper creations. Transform your screen into a canvas of endless possibilities. Explore now!",
};

export default function RootLayout({ children }) {
  return (
    <html
      className=" text-foreground"
      lang="en"
    >
      <body className={`${raleway.className} bg-gradient-to-bl from-[#152331] to-[#000000] bg-no-repeat h-full`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
