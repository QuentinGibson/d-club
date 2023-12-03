import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { Carousel } from "~/components/Carousel/";
import { Events } from "~/components/Events";
import { Footer } from "~/components/Footer";
import { Instagram } from "~/components/Instagram";
import { Navbar } from "~/components/Navbar";


export const meta: MetaFunction = () => [{ title: "D-Club" }];

const getInstagramData = async () => {
  const access_token = process.env.INSTA_ACCESS_TOKEN
  const instaGraphBaseURL = `https://graph.instagram.com`;
  const instaAPIVersion = 'v18.0';
  const mediaIDFields = 'media';
  const instaMediaIDURL = `${instaGraphBaseURL}/${instaAPIVersion}/me?fields=${mediaIDFields}&access_token=${access_token}`;
  const ids = await fetch(instaMediaIDURL).then(res => res.json())

  const getUrlFromIDs = async ({ id }: { id: string }) => {
    const mediaURLFields = 'media_url';
    const instaGraphMediaURL = `${instaGraphBaseURL}/${instaAPIVersion}/${id}?fields=${mediaURLFields}&access_token=${access_token}`;
    const res = await fetch(instaGraphMediaURL).then(res => res.json());
    return res
  };

  return await Promise.all(ids.media.data.map(getUrlFromIDs));
}

export const loader = async () => {
  const instaData = await getInstagramData()
  return json({ instaData }, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  });
};

export default function Index() {
  const { instaData } = useLoaderData<typeof loader>()
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
      <div className="flex flex-col">
        <div className="flex justify-center">
          <h2 className="text-white text-4xl md:text-5xl">Instagram</h2>
        </div>
        <Instagram data={instaData} />
      </div>
      <Footer />
    </main>
  );
}
