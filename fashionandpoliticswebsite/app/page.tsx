"use client";

import Image from "next/image";
import FeaturedCarousel from "@/components/FeaturedCarousel";

export default function HomePage() {
  return (
    <div className="relative px-8 py-10 page-transition bg-[#D3D3D3]">
      <section className="grid gap-10 md:grid-cols-2 items-start">
        <div className="relative h-[70vh] ">
          <Image
            src="/images/homepage-girl.png"
            alt="Model"
            width={800}
            height={800}
            className="object-cover bg-[#D3D3D3]"
          />
        </div>
        <div className="flex flex-col justify-between h-[70vh]">
          <div>
            <Image
              src="/images/uoftfp-logo.png"
              alt="UofT Fashion and Politics Club Logo"
              width={700}
              height={700}
              className="object-contain bg-[#D3D3D3]"
            />
          </div>
          <div className="mt-0 px-8 justify-center">
            <FeaturedCarousel />
          </div>
        </div>
      </section>
    </div>
  );
}
