import type { MetaFunction } from "@remix-run/node";

import { Carousel } from "~/components/Carousel/";
import { Events } from "~/components/Events";
import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navbar";

export const meta: MetaFunction = () => [{ title: "D-Club" }];

export default function Index() {
  const gallery: string[] = [
    "/club-slideshow1.jpg",
    "/club-slideshow2.jpg",
    "/club-slideshow3.jpg",
    "/club-slideshow4.jpg",
    "/club-slideshow5.jpg",
    "/club-slideshow6.jpg",
  ]
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <div className="h-screen">
        <Carousel gallery={gallery} />
      </div>
      <div className="mt-16 bg-black flex flex-col gap-10 h-[500px] md:h-[600px]">
        <div className="flex justify-center">
          <h2 className="text-white text-4xl md:text-5xl">Featured Events</h2>
        </div>
        <Events />
      </div>
      <Footer />
    </main>
  );
}
