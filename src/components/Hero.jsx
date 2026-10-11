import React from 'react';

export const Hero = () => {
  return (
    <section className="relative w-full h-full max-sm:h-auto max-sm:flex-1 max-sm:flex max-sm:flex-col overflow-hidden max-sm:overflow-visible select-none bg-transparent">

      {/* Phones: headline on top, composition below (the 16:9 canvas below is too small to read) */}
      <div className="sm:hidden flex-1 flex flex-col items-center justify-center gap-8 px-3 pt-2 pb-10 pointer-events-none">
        <img
          src="/images/logo_lego_cropped.png" width="654" height="424" decoding="async"
          alt="The bricks I built with my hands comes to life in the world of Fortnite Island!"
          className="w-[96%] h-auto select-none"
        />
        <img
          src="/images/hero_composite_v2.webp" width="2000" height="1303" decoding="async"
          alt="LEGO SPIKE Ferris wheel, block coding and the Fortnite theme park screen"
          className="w-[106%] max-w-none h-auto select-none"
        />
      </div>


      {/* Shift entire composition further upward away from bottom edge */}
      <div className="relative w-full h-full -translate-y-[9.5%] max-sm:hidden">
        {/* 2. Right-side composition (LEGO SPIKE Ferris wheel + block coding + Fortnite screen): hero_composite.png */}
        <div className="absolute left-[44.5%] top-[22.8%] w-[50%] pointer-events-none select-none z-[3]">
          <img
            src="/images/hero_composite_v2.webp" width="2000" height="1303" decoding="async"
            alt="LEGO SPIKE Ferris wheel, block coding and the Fortnite theme park screen"
            className="w-full h-auto object-contain select-none"
          />
        </div>

        {/* 6. Headline Text Graphic: logo_lego_cropped.png */}
        <div className="absolute left-[6.5%] top-[31.0%] w-[40.5%] pointer-events-none select-none z-[4]">
          <img
            src="/images/logo_lego_cropped.png" width="654" height="424" decoding="async"
            alt="The bricks I built with my hands comes to life in the world of Fortnite Island!"
            className="w-full h-auto object-contain select-none"
          />
        </div>
      </div>

    </section>
  );
};
