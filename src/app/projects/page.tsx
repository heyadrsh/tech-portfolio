"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { MotionEffect } from '@/components/animate-ui/effects/motion-effect';

export default function Projects() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const projects = [
    {
      id: 1,
      title: "GunShot Detection System",
      description: "An advanced real-time acoustic monitoring and classification system with 90%+ accuracy using YAMNet and CNN dual-model architecture.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyUGTNiCbY-lIHlsYndl-CexQoAz64r1MHeRinxwdc1QV7SbVS66C4qUr_zFAxaWx7m2LD5JQDD2Evxd_e8Yjr-R9BaC7eZApDxuBrAIzpR9bF-VR95PX8hnx2r6pPYXy5BY62o2Xgbck1ZRpfI2x1oK1EpzvcckpXwRKILpVyxmf1qjVRSPY33Vp_RlGIAM9YRid5PuTrSQhKLa1Zr5poXCjdkUBlEM8AlX3l4VVH7-TY9r0j8C6BD4a55SwnxnacSN6-BcVcMPA"
    },
    {
      id: 2,
      title: "Brain Tumor Detection System",
      description: "A web-based brain tumor classification tool using PyTorch CNNs with 98%+ accuracy for MRI/CT scan analysis.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAj0kKG_lcwhZ78fcgDbK2Y7Pu_evQkYm2-sRiVG5XoNSa2YRFlG4vybFqx3v5KPlyMJpVtXe5oT_qodutpZSykd-h8iEz-xWQIbv19OdTdkdvsSMn4gA_UN0lefRwK5z8lDDklJkyFXePvIgQOpF0vJYikZPuY7RHLYqPqeOIzFjMsdAnAIf9r4uoYtCUi83QS_8vdB6hyTTysptwxQ8pUsMMepfDK6K6GPGP8bGA76HT0ELfeJlOVNsqOoAuwNXexkKOGfTBT_A"
    },
    {
      id: 3,
      title: "Alternate Reality News Generator",
      description: "A web app that generates fictional news articles with text and images based on user-defined 'What If' scenarios using Gemini API.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsHT_1euqV3yQSUGhOVdDXBl-8KctZcvHeULPQ06JAhIupxDdB_ft-LtKq_WvYrRf3hVs44zJaf052Uf1GM9xaFms_C4vDjiwTODP26HW1d8Dabnz1XM6WiBGM_YdhD3zzT7M7rbIL5MM_HpTHVAGzsePRrKfxwAPvIUvyf2QqjsDCJYuEWlrpWrIPp24a4FqPQ9WKxCQHizfx5YyPcyHfa87l7FUbGnTyz5VFRZ9DFvf7a9eymjImB6CKDuLfwaOALB7iSmphTho"
    }
  ];

  return (
    <div className={`relative flex size-full min-h-screen flex-col ${isDark ? 'bg-black' : 'bg-slate-50'} group/design-root overflow-x-hidden`}>
      <div className="layout-container flex h-full grow flex-col">
        <Header isDark={isDark} onThemeToggle={toggleTheme} />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className={`${isDark ? 'text-white' : 'text-[#0d141c]'} text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5`}>
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {projects.map((project, index) => (
                <MotionEffect
                  key={project.id}
                  slide={{
                    direction: 'down',
                  }}
                  fade
                  zoom
                  inView
                  delay={0.5 + index * 0.1}
                >
                  <Link href={`/projects/${project.id}`}>
                    <div className="flex flex-col gap-4 rounded-lg cursor-pointer hover:transform hover:scale-105 transition-transform duration-200">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                        style={{ backgroundImage: `url("${project.image}")` }}
                      ></div>
                      <div>
                        <p className={`${isDark ? 'text-white' : 'text-[#0d141c]'} text-base font-medium leading-normal hover:text-[#0c77f2] transition-colors`}>
                          {project.title}
                        </p>
                        <p className={`${isDark ? 'text-gray-400' : 'text-[#49719c]'} text-sm font-normal leading-normal`}>
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </MotionEffect>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 