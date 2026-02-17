"use client";

import Image from "next/image";
import FeaturedCarousel from "@/components/FeaturedCarousel";

export default function HomePage() {
  return (
    <div className="relative h-full sm:py-0 page-transition bg-[#D3D3D3]">
      <section className="grid md:grid-cols-2">
        <div className="relative h-full">
          <Image
            src="/images/homepage-girl.png"
            alt="Model"
            width={800}
            height={800}
            className="object-cover bg-[#D3D3D3]"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:mt-[15vh] gap-[7vh] h-[70vh]">
          <div>
            <Image
              src="/images/uoftfp-logo.jpg"
              alt="UofT Fashion and Politics Club Logo"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          <div>
            <FeaturedCarousel />
          </div>
        </div>
      </section>
    </div>
  );
}
