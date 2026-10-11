import React from 'react';
import { CheckCircle2, SquareCheckBig } from 'lucide-react';
import { Footer } from './Footer';

const HIGHLIGHTS = [
  ['English & Storytelling', 'Present your own creations through storytelling in English'],
  ['Teamwork & Engineering', 'Design logic together and solve problems to build interactive AI'],
  ['Computer Science', 'Logical problem-solving from block coding to Verse programming'],
  ['Metaverse Digital Twin', 'Physical blocks mirrored in real time in LEGO Fortnite'],
];

const CAMP_POINTS = [
  'Experience how things work instead of studying complex theory, and gain a feel for digital-physical convergence technology.',
  'Build on your camp experience to design your own complex metaverse worlds and AI algorithms in the regular program.',
  'Beyond the standard 5-day short-term course, the number of sessions can be flexibly adjusted to fit the needs of schools and educational institutions.',
];

const OFFERINGS = [
  ['Customized Teaching Method', 'On-site classes at schools and institutions, plus online video classes (B2C)'],
  ['Modular Curriculum', 'Tailored to age group and duration (short-term camp / after-school / regular program)'],
  ['Nationwide Visiting Service', 'Customized AI & coding education that comes to you, with no regional limits'],
  ['Foreign-Language Classes', '100% English classes available for English kindergartens and international schools'],
];

export const EducationPage = ({ setCurrentView }) => {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between select-none font-poppins">

      <div className="w-full flex flex-col items-center flex-1 py-8 sm:py-12 md:py-14 px-4 sm:px-8 md:px-12">
        {/* Section 1: Intro text (live text; sizes scale with the container width like the old image) */}
        <div className="w-full max-w-[1360px] mb-12 sm:mb-16 md:mb-20 text-white [container-type:inline-size]">
          <div className="w-full">
            <p className="text-center font-semibold leading-tight text-[clamp(20px,4.1cqw,56px)]">
              LEGO Fortnite Education with BrickSync
            </p>
            <p className="text-center mt-[0.8cqw] text-[clamp(12px,2.2cqw,30px)] leading-snug">
              A successful launch in Korea, now expanding to global education!
            </p>

            <div className="mt-[2.2cqw] text-[clamp(12px,1.9cqw,27px)] leading-[1.35] [text-wrap:pretty]">
              <p className="sm:text-justify">
                LEGO Fortnite early childhood education, where LEGO, the leading hands-on learning tool, meets Fortnite, the metaverse platform with 500 million users worldwide.
              </p>
              <p className="mt-[0.4cqw] sm:text-justify">
                Experience reliable, systematic Physical AI education right now, Led by Epic Games Authorized Instructors Cliff Lee &amp; Emma Jeon.
              </p>

              <ul className="mt-[1.4cqw] ml-[3.2cqw] list-disc marker:text-white font-semibold space-y-[0.2cqw]">
                {HIGHLIGHTS.map(([title, text]) => (
                  <li key={title} className="pl-[0.6cqw]">
                    {title}: {text}
                  </li>
                ))}
              </ul>

              <p className="mt-[1.4cqw] sm:text-justify">
                BrickSync connects the real and virtual worlds as one, giving young children an intuitive and immersive STEAM learning experience.
              </p>
            </div>

            <div className="mx-auto mt-[3.4cqw] w-[72%] rounded-[2.2cqw] bg-white px-[4cqw] py-[2.6cqw] shadow-[0_8px_30px_rgba(8,48,110,0.18)]">
              <ul className="space-y-[1.2cqw] text-[clamp(12px,1.9cqw,27px)] leading-snug text-black">
                {OFFERINGS.map(([title, text]) => (
                  <li key={title} className="flex items-start gap-[1.2cqw]">
                    <CheckCircle2 className="shrink-0 mt-[0.05cqw] w-[clamp(18px,2.3cqw,32px)] h-[clamp(18px,2.3cqw,32px)] text-[#1E8FD5]" strokeWidth={1.6} />
                    <span>
                      <span className="font-semibold">{title}</span>: {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Education 02 Image */}
        <div className="w-full max-w-[1360px] flex justify-center mb-12 sm:mb-16 md:mb-20">
          <img
            src="/images/education_section_02_v3.webp" width="1516" height="1085" decoding="async"
            alt="LEGO Fortnite Education classes and hands-on learning in the classroom"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 3: Curriculum heading (live text) + Spark/Creator and Innovator/Master roadmap images */}
        <div className="w-full max-w-[1360px] mb-8 sm:mb-10 md:mb-12 text-white text-center [container-type:inline-size]">
          <h2 className="font-bold leading-tight text-[clamp(20px,3.7cqw,50px)] [text-wrap:balance]">
            A Curriculum Built on BrickSync&apos;s Know-How
          </h2>
          <p className="mx-auto mt-[1.4cqw] max-w-[88%] text-[clamp(12px,1.75cqw,24px)] leading-[1.5] [text-wrap:balance]">
            We provide a growth roadmap tailored to each learner&apos;s level, from the first steps of block coding to Verse and AI simulation.
            By seamlessly linking physical LEGO building with the UEFN metaverse, learners naturally develop physical computing skills and future AI capabilities.
          </p>
        </div>

        <div className="w-full max-w-[1180px] flex flex-col gap-4 sm:gap-5 mb-16 sm:mb-20 md:mb-24">
          <img
            src="/images/education_curriculum_1.webp" width="2000" height="1053" decoding="async" loading="lazy"
            alt="Spark (age 5-7) and Creator (age 8-11) level curriculum examples"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
          <img
            src="/images/education_curriculum_2.webp" width="2000" height="1076" decoding="async" loading="lazy"
            alt="Innovator (age 12-14) and Master (age 15+) level curriculum examples"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 3b: Physical AI LEGO Fortnite Camp (live text) + 8 lesson cards */}
        <div className="w-full max-w-[1360px] mb-8 sm:mb-10 md:mb-12 text-white text-center [container-type:inline-size]">
          <p className="font-semibold text-[clamp(12px,1.9cqw,26px)] leading-snug [text-wrap:balance]">
            Learn the essentials while having fun! Your first step into metaverse AI coding in just 5 days!
          </p>
          <h2 className="mt-[0.8cqw] font-bold leading-tight text-[clamp(22px,4.3cqw,58px)]">
            Physical AI LEGO Fortnite Camp
          </h2>
          <p className="mx-auto mt-[2cqw] text-[clamp(12px,1.75cqw,24px)] leading-[1.5]">
            From basic motor control to camera gestures and the fundamentals of AI voice commands!<br className="hidden sm:inline" />{' '}
            The LEGO&reg; Fortnite short-term camp is a well-rounded introductory course<br className="hidden sm:inline" />{' '}
            designed so children can enjoy technology and quickly grasp the core concepts.
          </p>

          <ul className="mx-auto mt-[2.6cqw] w-fit max-w-[92%] space-y-[1.1cqw] text-left font-semibold text-[clamp(12px,1.8cqw,24px)] leading-snug">
            {CAMP_POINTS.map((t) => (
              <li key={t} className="flex items-start gap-[1.2cqw]">
                <SquareCheckBig className="shrink-0 w-[clamp(18px,2.4cqw,32px)] h-[clamp(18px,2.4cqw,32px)] text-[#FFD23F]" strokeWidth={1.8} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-[1100px] flex justify-center mb-12 sm:mb-14 md:mb-16">
          <img
            src="/images/education_camp_cards.webp" width="2000" height="1287" decoding="async" loading="lazy"
            alt="Eight LEGO Fortnite camp lessons: Exploration Boat, Deep Sea Submarine, Spin the Ferris Wheel, Exploration Car, Turn on the Siren, AI Auto Hut, AI Voice Magic Swing and AI Monster Detector"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Section 4: education_05 Image (3-Column Curriculum Cards) */}
        <div className="w-full max-w-[1440px] flex justify-center pb-20 px-2 sm:px-4">
          <img
            src="/images/education_section_05.webp" width="2400" height="1048" decoding="async" loading="lazy"
            alt="LEGO Fortnite Education Curriculum Overview, Short-Term Camp, and After-School Programs"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Global Domain Footer */}
      <Footer setCurrentView={setCurrentView} />

    </div>
  );
};
