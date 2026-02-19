"use client";

import Image from "next/image";
import FeaturedCarousel from "@/components/FeaturedCarousel";
export default function DesktopHome() {
  return (
    <div className="relative h-full sm:py-0 page-transition bg-[#D3D3D3]">
      <section className="grid md:grid-cols-[auto_1fr]">
        <div className="relative h-full">
          <Image
            src="/images/homepage-girl.png"
            alt="Model"
            width={850}
            height={850}
            className="object-contain bg-[#D3D3D3] ml-[4vh]"
          />
        </div>
        <div className="z-20 mr-[4vh] flex flex-col justify-center items-center md:mt-[15vh] gap-[7vh] h-[70vh]">
          <div>
            <Image
              src="/images/uoftfp-logo.jpg"
              alt="UofT Fashion and Politics Club Logo"
              width={450}
              height={450}
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
