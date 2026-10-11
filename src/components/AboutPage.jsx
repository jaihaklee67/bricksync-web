import React from 'react';
import { Footer } from './Footer';

const CORE_CARDS = [
  {
    num: '01',
    title: 'Real-time Phygital Bridge',
    bullets: [
      ['1:1 Live Mapping:', 'LEGO SPIKE motors and sensors drive UEFN 3D worlds in real time.'],
      ['Browser-first:', 'Connects over Web Bluetooth in Chrome.'],
    ],
  },
  {
    num: '02',
    title: 'From Blocks to Real Code',
    bullets: [
      ['Learning Ladder:', 'Icon blocks → word blocks → Verse code, with 1:1 conversion.'],
      ['AI Missions:', 'Voice, gesture and vision challenges with gamified rewards.'],
    ],
  },
  {
    num: '03',
    title: 'Classroom-Ready Platform',
    bullets: [
      ['Teacher & Parent Tools:', 'Live activity logs, class codes, progress reports and parent feedback.'],
      ['Bilingual:', 'Korean and English throughout.'],
    ],
  },
];

export const AboutPage = ({ setCurrentView }) => {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins">
      
      <div className="w-full flex flex-col items-center flex-1">
        {/* Section 1: Main Overview Stage (16:9 Proportional Canvas) */}
        <div className="w-full max-w-[1600px] aspect-video relative flex-shrink-0 my-2">
          
          {/* Left overview text + right dashboard/photo collage (single image: about_main_v3.png) */}
          <img
            src="/images/about_main_v3.webp" width="2400" height="1350" decoding="async"
            alt="About BrickSync - What is BrickSync? LEGO SPIKE + LEGO FORTNITE"
            className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none z-10"
          />

          {/* Interactive Clickable Link for www.bricksync.org */}
          <a
            href="https://www.bricksync.org"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[4.8%] top-[86.4%] w-[24.7%] h-[5.8%] rounded-full cursor-pointer z-20 hover:opacity-80 transition-opacity"
            title="Visit BrickSync Official Website (www.bricksync.org)"
            aria-label="Visit BrickSync Official Website"
          />
        </div>

        {/* Section 2: Core Pillars (heading image + live-text cards) */}
        <div className="w-full max-w-[1440px] flex flex-col items-center pt-6 pb-12 sm:pb-16 px-4 sm:px-8">
          <img
            src="/images/about_core_header.png" width="3516" height="291" decoding="async" loading="lazy"
            alt="BrickSync 3 Core Components - Connecting Physical Play and Digital Worlds through AI & Real-Time Computing"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />

          <div className="w-full mt-[2.2%] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-[2.1%]">
            {CORE_CARDS.map((c) => (
              <div
                key={c.num}
                className="relative rounded-[3%] text-white [container-type:inline-size] aspect-[1/0.99] max-sm:aspect-auto max-sm:pb-8 shadow-[0_20px_30px_-14px_rgba(6,52,120,0.55)]"
                style={{
                  background:
                    'radial-gradient(120% 90% at 0% 0%, rgba(150,218,244,0.95) 0%, rgba(150,218,244,0) 50%), linear-gradient(165deg, #0c92de 0%, #0472c6 50%, #0057b0 100%)',
                }}
              >
                <div className="px-[8%] pt-[7%]">
                  <div className="text-center font-extrabold leading-none text-[26cqw] tracking-tight">{c.num}</div>
                  <h3 className="mt-[4.4%] text-center font-bold leading-snug text-[5.9cqw]">{c.title}</h3>
                  <ul className="mt-[4.6%] list-disc pl-[4.4%] space-y-[2.4%] text-[4.5cqw] leading-[1.35] marker:text-white">
                    {c.bullets.map(([bold, text]) => (
                      <li key={bold}>
                        <span className="font-bold">{bold}</span> {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Intro Video Section */}
        <div className="w-full max-w-[1440px] flex flex-col items-center pb-20 sm:pb-24 px-4 sm:px-8">
          {/* Title matching BrickSync 3 Core Components exact typography & scale */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[66px] font-bold text-white tracking-tight leading-tight text-center mb-6 sm:mb-10">
            BrickSync Intro Video
          </h2>

          {/* 16:9 Video Player matching width of 3 cards above */}
          <div className="w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-black/60 relative shadow-none">
            <video
              src="/images/Bricksync.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Global Domain Footer */}
      <Footer setCurrentView={setCurrentView} />

    </div>
  );
};
