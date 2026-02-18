"use client";

import Image from "next/image";
import FeaturedCarousel from "@/components/FeaturedCarousel";

export default function MobileHome() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/images/homepage-girl.png"
        alt="Model"
        fill
        className="object-cover opacity-55"
        priority
      />

      {/* Logo overlay */}
      <div className="absolute mt-[7%]">
        <Image
          src="/images/uoftfp-logo-transparent.png"
          alt="UofT Fashion and Politics Club Logo"
          width={400}
          height={400}
          className="object-contain mt-[5vh]"
          priority
        />

        {/* CAROUSEL */}
        <div className="mx-[10vh]">
          <FeaturedCarousel />
        </div>
      </div>
    </div>
  );
}
