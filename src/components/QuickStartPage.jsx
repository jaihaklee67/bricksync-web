import React, { useEffect, useRef, useState } from 'react';
import { Footer } from './Footer';


// Loads the (large) demo videos only when they are about to scroll into view,
// so they do not compete with the page images for bandwidth.
const LazyVideo = ({ src, className }) => {
  const ref = useRef(null);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || load) return undefined;
    if (!('IntersectionObserver' in window)) { setLoad(true); return undefined; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setLoad(true); io.disconnect(); }
    }, { rootMargin: '600px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [load]);
  return (
    <video
      ref={ref}
      src={load ? src : undefined}
      controls
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className={className}
    />
  );
};


// Phone layout: the step titles/descriptions are live text (the desktop images have them baked in and they shrink too small on phones).
const Pill = ({ children }) => (
  <div className="mx-auto max-w-[92%] rounded-full bg-white px-5 py-2 text-center text-[14px] leading-snug text-[#1f4a85] shadow-sm">{children}</div>
);
const Para = ({ children, className = '' }) => (
  <p className={`mx-auto max-w-[340px] text-center text-[13.5px] font-light leading-[1.5] text-white text-balance ${className}`}>{children}</p>
);
const Pic = ({ n, w, h, alt, width = '100%' }) => (
  <img src={`/images/qs_m_${n}.webp`} width={w} height={h} loading="lazy" decoding="async" alt={alt} style={{ width }} className="mx-auto h-auto select-none pointer-events-none" />
);

const MobileSteps = () => (
  <div className="sm:hidden w-full flex flex-col items-stretch gap-12 px-1 mb-12">
    <section className="flex flex-col items-center gap-5">
      <h1 className="text-center text-[28px] font-bold leading-tight text-white">BrickSync Start Guide</h1>
      <Pill>1.&nbsp; Download &amp; Run <b className="font-bold">Bricksync.exe</b></Pill>
      <Para>Download the Bricksync.exe file to your PC and run it. Once Bricksync.exe is running, the local bridge server starts automatically, enabling signal communication between LEGO Spike and LEGO Fortnite.</Para>
      <Pic n="01" w={758} h={913} width="46%" alt="Bricksync.exe" />
    </section>

    <section className="flex flex-col items-center gap-5">
      <Pill>2.&nbsp; Sign-up and Login</Pill>
      <Para>Accounts can be created for students, teachers, and parents. Parents and students sign up using a class code provided by the teacher. Teachers and parents can view information regarding student affiliation and learning activity data. You can also simply experience BrickLink by logging in as a guest.</Para>
      <Pic n="02" w={1400} h={506} alt="Student, teacher and parent sign-up and login screens" />
    </section>

    <section className="flex flex-col items-center gap-5">
      <Pill>3.&nbsp; Assembling the LEGO Model</Pill>
      <Para>Assemble the LEGO bricks, connecting the Hub (a Bluetooth communication device) with components such as motors, color sensors, and lights that enable operation.</Para>
      <Pic n="03" w={1400} h={610} width="92%" alt="LEGO SPIKE model assembled with the Hub" />
    </section>

    <section className="flex flex-col items-center gap-5">
      <Pill>4.&nbsp; Try Lessons &amp; AI Lessons</Pill>
      <div className="flex flex-col items-center gap-1.5">
        <h2 className="text-center text-[20px] font-bold leading-tight text-white">Selecting a Lesson / AI Lesson</h2>
        <Para>Select the lesson you wish to study.</Para>
      </div>
      <Pic n="04" w={1400} h={890} alt="Lessons 1-5 and AI Lessons 6-8" />
    </section>

    <section className="flex flex-col items-center gap-5">
      <h2 className="text-center text-[20px] font-bold leading-tight text-white">Connect with LEGO Hub &amp; Block Coding</h2>
      <Para>Press the Bluetooth connection button to connect the LEGO Hub to the BrickSync. Once connected via Bluetooth, the connection remains active for other lessons as well. (You can also use BrickLink and LEGO SPIKE together via a wired USB connection.)</Para>
      <Para>Use &quot;Try Mission&quot; button to check the requirements for completing the LEGO Fortnite mission. Use code blocks to create the commands to be sent to the LEGO Hub.</Para>
      <Pic n="05" w={1400} h={592} alt="Connecting the LEGO Hub and block coding" />
    </section>

    <section className="flex flex-col items-center gap-5">
      <h2 className="text-center text-[20px] font-bold leading-tight text-white">AI Lesson</h2>
      <Para>BrickSync&apos;s AI Lesson enables a learning experience where you can directly train and practice gesture, voice, and object recognition on an AI model using a webcam and microphone.</Para>
      <Pic n="06" w={1400} h={663} alt="AI gesture, voice and object recognition lessons" />
    </section>

    <section className="flex flex-col items-center gap-5">
      <Pill>5.&nbsp; Access the Lego Fortnite map</Pill>
      <Para>Install Epic Launcher and Fortnite on your PC by pressing the largest button in the center of the BrickSync web app. After the Epic Launcher and Fortnite installation is complete, launch &lsquo;The Brick Island&rsquo;, LEGO Fortnite map in Fortnite. The map can be found in Fortnite Discover by its map name &lsquo;The Brick Island&rsquo;, or map code &lsquo;7603-2493-0825&rsquo;.</Para>
      <Pic n="07" w={1400} h={806} alt="Epic Games Launcher and Fortnite map access" />
    </section>

    <section className="flex flex-col items-center gap-5">
      <Pill>6.&nbsp; LEGO Spike, Fortnite<br />real&#8209;time command execution</Pill>
      <Para>Let&apos;s execute block coding commands written in BrickSync simultaneously in real-time on the LEGO SPIKE kit and LEGO Fortnite 3D assets.</Para>
      <Para>For Lessons 1 through 5, pressing the Run button sends command signals to the LEGO Hub and Fortnite, enabling execution.</Para>
      <Para>In AI Lessons 6 to 8, command and control LEGO and Fortnite assets using only vision (gesture or object recognition) or voice recognition.</Para>
      <Pic n="09" w={1400} h={215} alt="LEGO Education, BrickSync and LEGO Fortnite" />
    </section>
  </div>
);

export const QuickStartPage = ({ setCurrentView }) => {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins">
      
      {/* Main Content Area */}
      <div className="w-full flex flex-col items-center flex-1 py-8 sm:py-12 md:py-14 px-4 sm:px-8 md:px-12">
        <MobileSteps />

        {/* Section 1: Download & Run Bricksync.exe (QS_01.png) */}
        <div className="max-sm:hidden w-full max-w-[1480px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/quickstart_section_01_unified.webp" width="2400" height="1106" decoding="async"
            alt="BrickSync Start Guide - 1. Download & Run Bricksync.exe"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 2: Sign-up and Login (QS_02.png) */}
        <div className="max-sm:hidden w-full max-w-[1480px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/quickstart_section_02_v2.webp" width="2400" height="1112" decoding="async"
            alt="BrickSync Start Guide - 2. Sign-up and Login for Student, Teacher, and Parent accounts"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 3: Assembling the LEGO Model (QS_03.png) */}
        <div className="max-sm:hidden w-full max-w-[1480px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/quickstart_section_03_unified.webp" width="2400" height="1096" decoding="async" loading="lazy"
            alt="BrickSync Start Guide - 3. Assembling the LEGO Model"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 4: Try Lessons & AI Lessons (QS_04.png) */}
        <div className="max-sm:hidden w-full max-w-[1480px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/quickstart_section_04_v2.webp" width="2400" height="1577" decoding="async" loading="lazy"
            alt="BrickSync Start Guide - 4. Try Lessons & AI Lessons"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 5: Connect with LEGO Hub & Block Coding (QS_05.png) */}
        <div className="max-sm:hidden w-full max-w-[1480px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/quickstart_section_05_v2.webp" width="2400" height="1318" decoding="async" loading="lazy"
            alt="BrickSync Start Guide - Connect with LEGO Hub & Block Coding"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 6: AI Lesson (QS_06.png) */}
        <div className="max-sm:hidden w-full max-w-[1480px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/quickstart_section_06_v2.webp" width="2400" height="1206" decoding="async" loading="lazy"
            alt="BrickSync Start Guide - AI Lesson Gesture, Voice, and Object Recognition"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 7: Access the Lego Fortnite map (QS_07.png) */}
        <div className="max-sm:hidden w-full max-w-[1480px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/quickstart_section_07_v4.webp" width="2400" height="1442" decoding="async" loading="lazy"
            alt="BrickSync Start Guide - 5. Access the Lego Fortnite map"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 8: Real-time Command Execution Intro (pill image + live text) */}
        <div className="max-sm:hidden w-full max-w-[1480px] flex flex-col items-center mb-6 sm:mb-8 text-white text-center [container-type:inline-size]">
          <img
            src="/images/quickstart_section_08_pill.png" width="3840" height="150" decoding="async" loading="lazy"
            alt="BrickSync Start Guide - 6. LEGO Spike, LEGO Fortnite real-time command execution"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
          <div className="mt-5 sm:mt-[3.2cqw] px-3 sm:px-0 text-[13.5px] sm:text-[1.515cqw] leading-[1.5] font-light space-y-2.5 sm:space-y-0 text-balance sm:whitespace-nowrap">
            <p>
              Let&apos;s execute block coding commands written in BrickSync simultaneously in real-time on the LEGO SPIKE kit and LEGO Fortnite 3D assets.
            </p>
            <p>
              For Lessons 1 through 5, pressing the Run button sends command signals to the LEGO Hub and Fortnite, enabling execution.
            </p>
            <p>
              In AI Lessons 6 to 8, command and control LEGO and Fortnite assets using only vision (gesture or object recognition) or voice recognition.
            </p>
          </div>
        </div>

        {/* Section 9: Real-time Execution Flow (QS_09.png) */}
        <div className="max-sm:hidden w-full max-w-[1480px] flex justify-center mb-8 sm:mb-12 md:mb-14">
          <img
            src="/images/quickstart_section_09_v2.webp" width="2400" height="338" decoding="async" loading="lazy"
            alt="BrickSync Start Guide - LEGO Education, BrickSync, and LEGO Fortnite execution"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Real-time Demonstration Video 1: Left (Block Code & Physical LEGO Spin in Fortnite) */}
        <div className="w-full max-w-[1338px] flex justify-center mb-8 sm:mb-12 md:mb-14">
          <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/25 bg-black/10">
            <LazyVideo src="/images/BrickSyncPlay_Left.mp4" className="w-full h-auto aspect-video object-cover" />
          </div>
        </div>

        {/* Real-time Demonstration Video 2: Right (Gesture AI & Real-time Fortnite Interactive Trigger) */}
        <div className="w-full max-w-[1338px] flex justify-center pb-14 sm:pb-18 md:pb-24">
          <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/25 bg-black/10">
            <LazyVideo src="/images/BrickSyncPlay_Right.mp4" className="w-full h-auto aspect-video object-cover" />
          </div>
        </div>
      </div>

      {/* Global Domain Footer */}
      <Footer setCurrentView={setCurrentView} />

    </div>
  );
};
