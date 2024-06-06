import { Button } from "@radix-ui/themes";
import Image from "next/image";

import heroImg from '/public/image-hero-desktop.png'

import audioPhile from '/public/client-audiophile.svg'
import dataBiz from '/public/client-databiz.svg'
import marker from '/public/client-maker.svg'
import meet from '/public/client-meet.svg'

export default function Home() {
  return (
    <main className="max-w-[1080px] m-auto">
      <section className="container flex items-center justify-between">
        <div>
          <h1 className="text-6xl font-bold mb-8">Make <br /> remote work</h1>
          <p className="text-gray-500 font-medium mb-6">
            Get you team in sync, no matter your location. <br />
            Streamline processes, create team rituals, and <br />
            watch productivity soar.
          </p>
          <Button className="w-28 h-9 bg-black text-white font-medium rounded-md mb-12">
            Learn more
          </Button>
          <div className="flex items-center gap-8">
            <Image
              src={audioPhile}
              alt="audiophile Logo"
            />
            <Image
              src={dataBiz}
              alt="databiz Logo"
            />
            <Image
              src={marker}
              alt="marker Logo"
            />
            <Image
              src={meet}
              alt="meet Logo"
            />
          </div>
        </div>
        <div>
          <Image
            src={heroImg}
            alt="Hero section image"
            width={300}
          />
        </div>
      </section>
    </main>
  );
}
