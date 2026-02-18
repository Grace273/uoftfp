"use client";

import DesktopHome from "./Home/DesktopHome";
import MobileHome from "./Home/MobileHome";

export default function HomePage() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopHome />
      </div>

      <div className="block md:hidden">
        <MobileHome />
      </div>
    </>
  );
}
