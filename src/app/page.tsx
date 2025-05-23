"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { MotionEffect } from '@/components/animate-ui/effects/motion-effect';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`relative flex size-full min-h-screen flex-col ${isDark ? 'bg-black' : 'bg-slate-50'} group/design-root overflow-x-hidden`}>
      <div className="layout-container flex h-full grow flex-col">
        <Header isDark={isDark} onThemeToggle={toggleTheme} />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="flex flex-col gap-6 px-4 py-10 md:gap-8 lg:flex-row">
                <MotionEffect
                  slide={{ direction: 'left' }}
                  fade
                  zoom
                  inView
                  delay={0.2}
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg md:h-auto md:min-w-[400px] lg:w-full"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqv-UAe_C03nonf80WBJQNRB1YZ3JG3HI7_CloQTxTIJHnScnJ2KSYu-lZrbvVnqdvzP7ntKMVOzRMicBkzQMM3S9HHEFwRrHBN2llb9YJAQprLx5I9a4Mk5Cp5sMoUUzCaosnVKvTUapqXh35JeYsSGsjHziVO_oIskAWe2KY1quCcyq2lCWfQafTBIdymLgPi2wrvFLFvD102tc9VQSjRJtaYPVQJzatOShJT1O85X1TB6vGTSVmWzaCPHUztAR1qCzzILm6_BQ")`,
                    }}
                  ></div>
                </MotionEffect>
                <MotionEffect
                  slide={{ direction: 'right' }}
                  fade
                  zoom
                  inView
                  delay={0.4}
                >
                  <div className="flex flex-col gap-6 md:min-w-[400px] md:gap-8 lg:justify-center">
                    <div className="flex flex-col gap-2 text-left">
                      <h1 className={`${isDark ? 'text-white' : 'text-[#0d141c]'} text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl md:font-black md:leading-tight md:tracking-[-0.033em]`}>
                        Hi, I&apos;m Aadarsh Kumar
                      </h1>
                      <h2 className={`${isDark ? 'text-gray-300' : 'text-[#0d141c]'} text-sm font-normal leading-normal md:text-base md:font-normal md:leading-normal`}>
                        A passionate software developer specializing in AI/ML development. I build innovative solutions and strive for excellence in every project.
                      </h2>
                    </div>
                    <Link href="/projects">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 md:h-12 md:px-5 bg-[#0c77f2] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] md:text-base md:font-bold md:leading-normal md:tracking-[0.015em] hover:bg-[#0a5bc4] transition-colors">
                      <span className="truncate">Explore My Work</span>
                    </button>
                    </Link>
                  </div>
                </MotionEffect>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
