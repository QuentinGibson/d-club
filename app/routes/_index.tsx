import type { MetaFunction } from "@remix-run/node";
import { Events } from "~/components/Events";
import { Carousel } from "~/components/Carousel/";
import { Navbar } from "~/components/Navbar";

import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "D-Club" }];

export default function Index() {
  const user = useOptionalUser();
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
      <Carousel gallery={gallery} />
      <div className="my-16 bg-black flex flex-col gap-10">
        <div className="flex justify-center">
          <h2 className="text-white text-8xl">Featured Artists</h2>
        </div>
        <Events />
      </div>
    </main>
  );
}
