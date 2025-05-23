"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { Code, Presentation, PencilIcon, Brain, Award } from "lucide-react";

export default function About() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const skills = [
    { name: "Python", icon: Code },
    { name: "JavaScript", icon: Code },
    { name: "C/C++", icon: Code },
    { name: "Flask", icon: Code },
    { name: "Node.js", icon: Code },
    { name: "TensorFlow", icon: Brain },
  ];

  const journey = [
    {
      title: "Started B.Tech in ECE (AI & ML)",
      year: "2021",
      icon: PencilIcon,
    },
    {
      title: "ML Trainee at CETPA Infotech",
      year: "2023",
      icon: Presentation,
    },
    {
      title: "Advanced ML Projects & Web Development",
      year: "2024",
      icon: Code,
    },
    {
      title: "ML Intern at DRDO",
      year: "2024-2025",
      icon: Award,
    },
  ];

  return (
    <div className={`relative flex size-full min-h-screen flex-col ${isDark ? 'bg-black' : 'bg-gray-50'} group/design-root overflow-x-hidden`}>
      <div className="layout-container flex h-full grow flex-col">
        <Header isDark={isDark} onThemeToggle={toggleTheme} />
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex p-4">
              <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuACsdV7CSPEU2Gu0f3GbSDGBQb3S_jo5iejSVSNaQMTHp9W4Eu0_2xhS2tnyYqbXmPw72YJAgWn1A02QK-XyyaCVQd2cK0kVlM4Ol1K8OqlQgmDlUlZrAtJynulNi2PL4I04_SX-i5Rzcw_aSw0U-F4GfJz0_zd5GDlcVlcoMNuusCz62G2gY6Hv6n1gHdUD2ZZZ-QnGdr4HJnjjrrCuMpQUrECrXalsvEsuBHop84P3149BYkD0pld7zEafvcvD_zOr2wTMP94zPY")`,
                    }}
                  ></div>
                  <div className="flex flex-col items-center justify-center">
                    <p className={`${isDark ? 'text-white' : 'text-[#101418]'} text-[22px] font-bold leading-tight tracking-[-0.015em] text-center`}>
                      Aadarsh Kumar
                    </p>
                    <p className={`${isDark ? 'text-gray-400' : 'text-[#5c728a]'} text-base font-normal leading-normal text-center`}>
                      Software Developer & AI/ML Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className={`${isDark ? 'text-gray-300' : 'text-[#101418]'} text-base font-normal leading-normal pb-3 pt-1 px-4`}>
              I&apos;m a passionate software developer specializing in AI/ML development, currently pursuing B.Tech in Electronics and Communication Engineering (AI & ML) from Netaji Subhas University of Technology, Delhi. I have experience in building innovative solutions across web development and machine learning domains.
            </p>
            <p className={`${isDark ? 'text-gray-300' : 'text-[#101418]'} text-base font-normal leading-normal pb-3 pt-1 px-4`}>
              Currently working as a Machine Learning & Front-end Developer Intern at DRDO&apos;s Solid State Physical Laboratory, where I&apos;m developing real-time gunshot detection systems with 90%+ accuracy using advanced ML techniques.
            </p>
          </div>
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className={`${isDark ? 'text-white' : 'text-[#101418]'} text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5`}>
              Technical Skills
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {skills.map((skill, index) => (
                <div key={index} className={`flex flex-1 gap-3 rounded-lg border ${isDark ? 'border-gray-600 bg-gray-900' : 'border-[#d4dbe2] bg-gray-50'} p-4 items-center`}>
                  <skill.icon className={`${isDark ? 'text-gray-300' : 'text-[#101418]'} w-6 h-6`} />
                  <h2 className={`${isDark ? 'text-white' : 'text-[#101418]'} text-base font-bold leading-tight`}>
                    {skill.name}
                  </h2>
                </div>
              ))}
            </div>
            <h2 className={`${isDark ? 'text-white' : 'text-[#101418]'} text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5`}>
              Learning Journey
            </h2>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              {journey.map((item, index) => (
                <div key={index} className="contents">
                  <div className="flex flex-col items-center gap-1 pt-3">
                    <item.icon className={`${isDark ? 'text-gray-300' : 'text-[#101418]'} w-6 h-6`} />
                    {index < journey.length - 1 && (
                      <div className={`w-[1.5px] ${isDark ? 'bg-gray-600' : 'bg-[#d4dbe2]'} h-2 grow`}></div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col py-3">
                    <p className={`${isDark ? 'text-white' : 'text-[#101418]'} text-base font-medium leading-normal`}>
                      {item.title}
                    </p>
                    <p className={`${isDark ? 'text-gray-400' : 'text-[#5c728a]'} text-base font-normal leading-normal`}>
                      {item.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 