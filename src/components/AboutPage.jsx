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
        <div className="w-full max-w-[1600px] aspect-video relative flex-shrink-0 my-2 max-sm:hidden">
          
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

        {/* Phones: live-text card (dark at the top, fading downward) + photo collage directly below */}
        <div className="sm:hidden w-full flex flex-col items-center px-3 my-2">
          <div
            className="w-full rounded-2xl px-5 pt-6 pb-3 text-white"
            style={{ background: 'linear-gradient(to bottom, rgba(12,62,140,0.78) 0%, rgba(24,100,180,0.5) 45%, rgba(40,140,210,0) 100%)' }}
          >
            <h1 className="text-[34px] font-bold leading-tight tracking-tight">What is Bricksync?</h1>
            <p className="mt-2 text-[19px] font-light tracking-wide text-[#F5D442]">LEGO SPIKE + LEGO FORTNITE</p>
            <p className="mt-5 text-[14px] leading-[1.55] font-light text-white/95">
              BrickSync is an innovative phygital(Physics + Digital) computing &amp; AI coding education platform combines LEGO SPIKE hardware with web-based AI recognition (gesture, voice, and vision) technologies to enable real-time interaction with the UEFN-based Fortnite map, &quot;The Brick Island.&quot;
            </p>
            <p className="mt-3 text-[14px] leading-[1.55] font-light text-white/95">
              When students create algorithms using intuitive icon and word blocks, they can directly examine how each block maps 1:1 to UEFN Verse code lines. As the in-game LEGO Fortnite map responds in real time and rewards them with immediate coins, this interactive experience seamlessly transitions learners from block-based concepts to text-based Verse scripting.
            </p>
            <a
              href="https://www.bricksync.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white pl-1 pr-5 py-1"
              aria-label="Visit BrickSync Official Website"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a4583] text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[62%] w-[62%]">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9s1.3-6.5 3.8-9z" />
                </svg>
              </span>
              <span className="text-[15px] font-medium text-[#1a4583]">www.bricksync.org</span>
            </a>
          </div>
          <img src="/images/about_main_m_right.webp" decoding="async" alt="BrickSync dashboard and students learning with LEGO" className="-mt-1 w-full h-auto select-none pointer-events-none" />
        </div>

        {/* Section 2: Core Pillars (heading image + live-text cards) */}
        <div className="w-full max-w-[1440px] flex flex-col items-center pt-6 pb-12 sm:pb-16 px-4 sm:px-8">
          {/* Phones: live text so the heading stays readable */}
          <div className="sm:hidden text-center text-white pt-2 pb-4">
            <h2 className="font-bold leading-tight text-[26px]">BrickSync<br />3 Core Components</h2>
            <p className="mt-1.5 text-[14px] leading-snug font-light">Connecting Physical Play and Digital Worlds through AI &amp; Real-Time Computing</p>
          </div>
          <img
            src="/images/about_core_header.png" width="3516" height="291" decoding="async" loading="lazy"
            alt="BrickSync 3 Core Components - Connecting Physical Play and Digital Worlds through AI & Real-Time Computing"
            className="max-sm:hidden w-full h-auto object-contain select-none pointer-events-none"
          />

          <div className="w-full mt-[2.2%] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-[2.1%]">
            {CORE_CARDS.map((c) => (
              <div
                key={c.num}
                className="relative rounded-[3%] text-white [container-type:inline-size] aspect-[1/0.99] max-sm:aspect-auto max-sm:pb-4 shadow-[0_20px_30px_-14px_rgba(6,52,120,0.55)]"
                style={{
                  background:
                    'radial-gradient(120% 90% at 0% 0%, rgba(150,218,244,0.95) 0%, rgba(150,218,244,0) 50%), linear-gradient(165deg, #0c92de 0%, #0472c6 50%, #0057b0 100%)',
                }}
              >
                <div className="px-[8%] pt-[7%] max-sm:px-5 max-sm:pt-4">
                  <div className="text-center font-extrabold leading-none text-[26cqw] max-sm:text-[56px] tracking-tight">{c.num}</div>
                  <h3 className="mt-[4.4%] max-sm:mt-1 text-center font-bold leading-snug text-[5.9cqw] max-sm:text-[19px]">{c.title}</h3>
                  <ul className="mt-[4.6%] max-sm:mt-2 list-disc pl-[4.4%] max-sm:pl-5 space-y-[2.4%] max-sm:space-y-1.5 text-[4.5cqw] max-sm:text-[14px] leading-[1.35] marker:text-white">
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
