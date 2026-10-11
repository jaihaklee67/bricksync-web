import React from 'react';
import { Footer } from './Footer';

export const QuickStartPage = ({ setCurrentView }) => {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins">
      
      {/* Main Content Area */}
      <div className="w-full flex flex-col items-center flex-1 py-8 sm:py-12 md:py-14 px-4 sm:px-8 md:px-12">
        {/* Section 1: Download & Run Bricksync.exe (QS_01.png) */}
        <div className="w-full max-w-[1480px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/quickstart_section_01_unified.png"
            alt="BrickSync Start Guide - 1. Download & Run Bricksync.exe"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 2: Sign-up and Login (QS_02.png) */}
        <div className="w-full max-w-[1480px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/quickstart_section_02_v2.png"
            alt="BrickSync Start Guide - 2. Sign-up and Login for Student, Teacher, and Parent accounts"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 3: Assembling the LEGO Model (QS_03.png) */}
        <div className="w-full max-w-[1480px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/quickstart_section_03_unified.png"
            alt="BrickSync Start Guide - 3. Assembling the LEGO Model"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 4: Try Lessons & AI Lessons (QS_04.png) */}
        <div className="w-full max-w-[1480px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/quickstart_section_04_v2.png"
            alt="BrickSync Start Guide - 4. Try Lessons & AI Lessons"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 5: Connect with LEGO Hub & Block Coding (QS_05.png) */}
        <div className="w-full max-w-[1480px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/quickstart_section_05_v2.png"
            alt="BrickSync Start Guide - Connect with LEGO Hub & Block Coding"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 6: AI Lesson (QS_06.png) */}
        <div className="w-full max-w-[1480px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/quickstart_section_06_v2.png"
            alt="BrickSync Start Guide - AI Lesson Gesture, Voice, and Object Recognition"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 7: Access the Lego Fortnite map (QS_07.png) */}
        <div className="w-full max-w-[1480px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/quickstart_section_07_v4.png"
            alt="BrickSync Start Guide - 5. Access the Lego Fortnite map"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 8: Real-time Command Execution Intro (pill image + live text) */}
        <div className="w-full max-w-[1480px] flex flex-col items-center mb-6 sm:mb-8 text-white text-center [container-type:inline-size]">
          <img
            src="/images/quickstart_section_08_pill.png"
            alt="BrickSync Start Guide - 6. LEGO Spike, LEGO Fortnite real-time command execution"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
          <div className="mt-[3.2cqw] text-[1.515cqw] leading-[1.5] font-light sm:whitespace-nowrap">
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
        <div className="w-full max-w-[1480px] flex justify-center mb-8 sm:mb-12 md:mb-14">
          <img
            src="/images/quickstart_section_09_v2.png"
            alt="BrickSync Start Guide - LEGO Education, BrickSync, and LEGO Fortnite execution"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Real-time Demonstration Video 1: Left (Block Code & Physical LEGO Spin in Fortnite) */}
        <div className="w-full max-w-[1338px] flex justify-center mb-8 sm:mb-12 md:mb-14">
          <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/25 bg-black/10">
            <video
              src="/images/BrickSyncPlay_Left.mp4"
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto aspect-video object-cover"
            />
          </div>
        </div>

        {/* Real-time Demonstration Video 2: Right (Gesture AI & Real-time Fortnite Interactive Trigger) */}
        <div className="w-full max-w-[1338px] flex justify-center pb-14 sm:pb-18 md:pb-24">
          <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/25 bg-black/10">
            <video
              src="/images/BrickSyncPlay_Right.mp4"
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto aspect-video object-cover"
            />
          </div>
        </div>
      </div>

      {/* Global Domain Footer */}
      <Footer setCurrentView={setCurrentView} />

    </div>
  );
};
