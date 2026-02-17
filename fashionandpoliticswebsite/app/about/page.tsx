"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import DesktopAbout from "./DesktopAbout";
import MobileAbout from "./MobileAbout";

export default function AboutResponsive() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      {isMobile ? <MobileAbout /> : <DesktopAbout />}
      <footer
        style={{
          fontFamily: "HelveticaWorld, Helvetica,  Arial, sans-serif",
        }}
        className="text-[5px] md:text-[14px] flex items-center px-[3vh] mt-[10vh] gap-[2vh] justify-between"
      >
        <div className="flex gap-[2vh] md:gap-[20vh]">
          <div className="hover:text-[#ff1fa9]">
            <a href="https://www.instagram.com/uoftfp/">instagram @uoftfp</a>
          </div>
          <div className="hover:text-[#ff1fa9]">
            <a href="https://sop.utoronto.ca/group/fashion-and-politics-club/">
              student org portal
            </a>
          </div>
          <div className="hover:text-[#ff1fa9]">
            <a href="mailto:uoftfashionandpolitics@gmail.com">contact us</a>
          </div>
        </div>
        <div className="flex items-center">
          <div>2025-2026</div>
          <Image
            src="/images/monogram.png"
            alt="FP monogram"
            width={80}
            height={80}
          />
        </div>
      </footer>
    </>
  );
}
