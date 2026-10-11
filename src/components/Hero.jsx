import React from 'react';

export const Hero = () => {
  return (
    <section className="relative w-full h-full overflow-hidden select-none bg-transparent">

      {/* Shift entire composition further upward away from bottom edge */}
      <div className="relative w-full h-full -translate-y-[9.5%]">
        {/* 2. Right-side composition (LEGO SPIKE Ferris wheel + block coding + Fortnite screen): hero_composite.png */}
        <div className="absolute left-[44.5%] top-[22.8%] w-[50%] pointer-events-none select-none z-[3]">
          <img
            src="/images/hero_composite_v2.png"
            alt="LEGO SPIKE Ferris wheel, block coding and the Fortnite theme park screen"
            className="w-full h-auto object-contain select-none"
          />
        </div>

        {/* 6. Headline Text Graphic: logo_lego_cropped.png */}
        <div className="absolute left-[6.5%] top-[31.0%] w-[40.5%] pointer-events-none select-none z-[4]">
          <img
            src="/images/logo_lego_cropped.png"
            alt="The bricks I built with my hands comes to life in the world of Fortnite Island!"
            className="w-full h-auto object-contain select-none"
          />
        </div>
      </div>

    </section>
  );
};
