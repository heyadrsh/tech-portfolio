"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";

export default function ProjectDetailClient() {
  const params = useParams();
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Mock project data - in a real app, this would come from an API or database
  const projects = {
    1: {
      title: "GunShot Detection System",
      description: "An advanced real-time acoustic monitoring and classification system with 90%+ accuracy using YAMNet and CNN dual-model architecture.",
      fullDescription: "Engineered a comprehensive gunshot detection system with both desktop (PyQt5) and web interfaces, featuring real-time visualization, alert system, and detailed gun classification reporting. Built YAMNet and custom CNN dual-model for firearm classification with multi-threaded Python pipeline. Created responsive web interface using modern JavaScript and WebSocket communication, enabling seamless data streaming between Python ML backend and web frontend while maintaining consistent detection accuracy.",
      gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDUVkqLsfoT6K5jVyp1S0js02uV0PW9Xgcw7Mc11riPipBAYc6dgSoABCF4hBxS1QKG9r8yY6jnTHEo9ruj2FuO79jOzp4jQeOxeNmgKgBeqwvXUVa4kzMPsQGR3Suj0ImqNiRzFD46qjmL5JLbeMH8UIDWsZxQkZTTxmKKgCcQ_1HSMcn1u158F64-OpcxL4pInvIAQLKrEpqwzU0bT3osZGHsuOUwkzd-II431fiujgQ38OsHC8Y6bXZ0m_8SE7dE_ZSVsh8-7AQ",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzICuRXuQlcbelajCFxzHKs4X4J-pE9p2BZ3UWiMfjMb8ch2rMtxuc4Gjo0VgwMCxOFoUYh7zexIcq1s7ejua9tIzKYmhCZfFHOlE91sPjyYJie4p1c4RRymU1YY4s8RHWRwY0VRCa3Va9gOjO7XIIeULXyWOpSRkfoZwkQxmxoAks4Cj6x0WMfQRgpSY4QgLx6nWRUbghOedOk51SjYfcu3adHyG_5L4-cREALfa0iPFpKXs5wGEJg-tFtYABFLikRPnBy3qZUJE",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB_bQnLQkMpUxy_lgrahpWSGqIgc2AHWNmbCJusnGlKNq328heIttym5AoM4Z7GZGWdwIbDfaFr6I55LPBKmeR0M7mH-EAE2Un3m-GCHxj_Hj8kNFiLTxJhH9lQsCUL1mcy2xjvT0vdLkAKwhHyPyohwdGwNdjBmW1I3kPjXJiQVL0IrESkAr8r36joHGDLoHl7YDhtRuUmcJDxdxypckeRgBJXnpbDTc1Ql-VHoTz7J1ELuCIDMiQFp4KuyvYJBuFDhsPuWGlOgvQ"
      ],
      links: [
        { title: "View Code", url: "https://github.com/aadarshkumar/gunshot-detection", icon: Github },
        { title: "Project Demo", url: "#", icon: ExternalLink },
        { title: "Research Paper", url: "#", icon: ExternalLink }
      ],
      tech: ["Python", "TensorFlow", "PyTorch", "PyQt5", "WebSocket", "JavaScript", "Node.js", "CSS", "WebAudio API"]
    },
    2: {
      title: "Brain Tumor Detection System",
      description: "A web-based brain tumor classification tool using PyTorch CNNs with 98%+ accuracy for MRI/CT scan analysis.",
      fullDescription: "Built Flask-based web app for MRI/CT scan analysis, classifying brain tumors with 98%+ accuracy using PyTorch CNNs. Integrated Flask-SQLAlchemy for user authentication and RESTful APIs for real-time prediction workflows. Integrated Gemini API's generative AI to suggest next-step clinical actions and generate PDF reports.",
      gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBAj0kKG_lcwhZ78fcgDbK2Y7Pu_evQkYm2-sRiVG5XoNSa2YRFlG4vybFqx3v5KPlyMJpVtXe5oT_qodutpZSykd-h8iEz-xWQIbv19OdTdkdvsSMn4gA_UN0lefRwK5z8lDDklJkyFXePvIgQOpF0vJYikZPuY7RHLYqPqeOIzFjMsdAnAIf9r4uoYtCUi83QS_8vdB6hyTTysptwxQ8pUsMMepfDK6K6GPGP8bGA76HT0ELfeJlOVNsqOoAuwNXexkKOGfTBT_A"
      ],
      links: [
        { title: "View Code", url: "https://github.com/aadarshkumar/brain-tumor-detection", icon: Github },
        { title: "Live Demo", url: "#", icon: ExternalLink }
      ],
      tech: ["Python", "PyTorch", "Flask", "JavaScript", "HTML5", "CSS3", "SQLite", "Bootstrap", "Gemini API"]
    },
    3: {
      title: "Alternate Reality News Generator",
      description: "A web app that generates fictional news articles with text and images based on user-defined 'What If' scenarios using Gemini API.",
      fullDescription: "Developed a web app to generate fictional news articles with text and images based on user-defined scenarios. Integrated Gemini API and its LLM models to produce dynamic content and visuals for seamless user experience. Implemented PDF export, article history tracking, and reality-check comparison features.",
      gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDsHT_1euqV3yQSUGhOVdDXBl-8KctZcvHeULPQ06JAhIupxDdB_ft-LtKq_WvYrRf3hVs44zJaf052Uf1GM9xaFms_C4vDjiwTODP26HW1d8Dabnz1XM6WiBGM_YdhD3zzT7M7rbIL5MM_HpTHVAGzsePRrKfxwAPvIUvyf2QqjsDCJYuEWlrpWrIPp24a4FqPQ9WKxCQHizfx5YyPcyHfa87l7FUbGnTyz5VFRZ9DFvf7a9eymjImB6CKDuLfwaOALB7iSmphTho"
      ],
      links: [
        { title: "Live Demo", url: "https://alternate-reality-news.example.com", icon: ExternalLink },
        { title: "View Code", url: "https://github.com/aadarshkumar/alternate-reality-news", icon: Github }
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "RESTful APIs", "Node.js", "Gemini API", "Cookies"]
    }
  };

  const project = projects[Number(params.id) as keyof typeof projects] || projects[1];

  return (
    <div className={`relative flex size-full min-h-screen flex-col ${isDark ? 'bg-black' : 'bg-slate-50'} group/design-root overflow-x-hidden`}>
      <div className="layout-container flex h-full grow flex-col">
        <Header isDark={isDark} onThemeToggle={toggleTheme} />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            
            {/* Back navigation */}
            <div className="flex flex-wrap gap-2 p-4">
              <Link 
                href="/projects" 
                className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-[#0d141c] hover:text-[#0c77f2]'} text-base font-medium leading-normal flex items-center gap-2 transition-colors`}
              >
                <ArrowLeft size={16} />
                Back to Projects
              </Link>
            </div>

            {/* Project title */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <h1 className={`${isDark ? 'text-white' : 'text-[#0d141c]'} tracking-light text-[32px] font-bold leading-tight min-w-72`}>
                {project.title}
              </h1>
            </div>

            {/* Project description */}
            <p className={`${isDark ? 'text-gray-300' : 'text-[#0d141c]'} text-base font-normal leading-normal pb-3 pt-1 px-4`}>
              {project.description}
            </p>

            {/* Technologies used */}
            <div className="px-4 pb-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-blue-100 text-blue-800'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Full description */}
            <h2 className={`${isDark ? 'text-white' : 'text-[#0d141c]'} text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5`}>
              Project Description
            </h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-[#0d141c]'} text-base font-normal leading-normal pb-3 pt-1 px-4`}>
              {project.fullDescription}
            </p>

            {/* Gallery */}
            <h2 className={`${isDark ? 'text-white' : 'text-[#0d141c]'} text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5`}>
              Gallery
            </h2>
            <div className={`flex w-full grow ${isDark ? 'bg-gray-900' : 'bg-slate-50'} p-4`}>
              <div className="w-full gap-1 overflow-hidden aspect-[3/2] rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ backgroundImage: `url("${image}")` }}
                  />
                ))}
              </div>
            </div>

            {/* Links */}
            <h2 className={`${isDark ? 'text-white' : 'text-[#0d141c]'} text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5`}>
              Links
            </h2>
            <div className="space-y-2 px-4">
              {project.links.map((link, index) => (
                <Link key={index} href={link.url} target={link.url.startsWith('http') ? '_blank' : '_self'}>
                  <div className={`flex items-center gap-4 ${isDark ? 'bg-gray-900 hover:bg-gray-700' : 'bg-slate-50 hover:bg-slate-100'} px-4 min-h-14 justify-between rounded-lg transition-colors cursor-pointer`}>
                    <p className={`${isDark ? 'text-white' : 'text-[#0d141c]'} text-base font-normal leading-normal flex-1 truncate`}>
                      {link.title}
                    </p>
                    <div className="shrink-0">
                      <link.icon className={`${isDark ? 'text-gray-400' : 'text-[#0d141c]'} w-6 h-6`} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 