"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { Twitter, Github, Linkedin } from "lucide-react";
import { MotionEffect } from '@/components/animate-ui/effects/motion-effect';

export default function TechWrites() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const blogPosts = [
    {
      id: 1,
      title: "Building Real-Time Audio Processing with Python",
      description: "Explore advanced techniques for real-time audio processing and machine learning models for acoustic signal classification using TensorFlow and PyTorch.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-IXlpzV5hbCXHekn2NUu-UcqjhT_TxBdJNIiMRe0VgWOue_Y2MQ3zcGyPXExL8owC5j9klGfW_s3xDxtWezBgVBb-ul0g_OQfZWpm9yXP5fFflyqxbPzUPrLF3zUOMeC1ku17ecgttzVlbyFYTS0RqR9pc2O-G8z99ciNbdx5FeW3c29jHv60uLJsxlhjag6NXPHszjXGlQxYBQC0FldxjGLwBt0wp3JDvdkEQUn7P7qsGpS9fpTRteQlLkk71N9JyIVefDu6s64"
    },
    {
      id: 2,
      title: "Machine Learning for Medical Image Analysis",
      description: "Deep dive into CNN architectures for medical image classification, achieving 98%+ accuracy in brain tumor detection using PyTorch and advanced data preprocessing.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0tsHYlauovgz_yWKJ03faMmvWMeBuGzU2SMO538bGXKaKUDlGLTNsKWOql7A-pxucUWebQwB1IBaWLM0Dkc5lL7ipjpmtXY404fs1d-mXUvJQHRFMRh4noFM1t7UKWiXazrsRkWUXUjS0aYHxSUHzQbgS29KntwH27QLpbB1x8e5zbstI7N6VLAvH7e2qt7gdzE2ogL33uPEO8KPCP-kc2pnMds_EAC9h9IZI44r8cZcCDDlV6WrkHUU35Xuiv8Ym1nLZ9F-xPGU"
    },
    {
      id: 3,
      title: "Integrating AI APIs for Creative Applications",
      description: "Learn how to leverage modern AI APIs like Gemini for building creative applications, including content generation and dynamic user experiences.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC73tLzaheyF3py8b3pqOeYis9PCyhFyKiuhaQNG9VcW7NI0zliWXGgpT1gZLuDb4VxCp7f7hTIRAetfId1AMVC7dqUQ7HXxv4_mq97ZGqkbV7FgQynCDZv7nb94jIsR8sAfqWEMkqUgyByvu-8Mg-oRgWjWnKFfMG12Pzxk0J6HtHeMnQ2OsvK0TvDFmoo_lDlwpsB-xD79gtd4F17ms4BbudadoFdFFSJUWq3IhCuO0VDXCg-Iu7q9typiIYg28BpEXdlzVCwLWA"
    },
    {
      id: 4,
      title: "Full-Stack Development with Flask and React",
      description: "Building scalable web applications combining Flask backend with modern frontend frameworks, including authentication, real-time features, and database integration.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCA57pxycy1GcvIaYa2ra_jv1ZCTU30PrUf9HyQHbqoIeVdsiI4FW-AGJLm1M--bxdt0CSHvsOiLAPviLAE4NWzYDZCmLVsaINMzHj9d-4JjUSptqHxxxP27yXm8-qtvqxz-zRYFduXuRxa_fPxZQdxTzUUyIKpUHeuctTJ-FFfJR9lLZS20hyHDd42JRf9in-b_MAXp4AG0BAsH7xmVm1-G7tkwscZ--_E0CRZlmcqagiLJ0rx9c0ee4CMuPKFS_9BEVmR_gak5bg"
    },
    {
      id: 5,
      title: "WebSocket Implementation for Real-Time Applications",
      description: "Master real-time communication between Python backends and JavaScript frontends using WebSocket technology for live data streaming and interactive applications.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc5SFJKa7fDc3Z75_fmHrXdHWJJg4LVy2sqn-ke75eDd3FjHqFvG5Zg5Ge1TAxMgZugkn__AW_hmMJzGYdOVZvyBeU9kdSkExr9UnsPwGI50MDhCukUAWVNGQ5VGicJuAuREvOoQ0KJh2j0J8XCW1boh1Cxfat9MIdJefHcOhaab3Nj43uMqXej1m4p2wGxG-DNIpu51dnDOLB0Gf0gV9fAW1iVyTicRNYKRv8FAHarBaFdaUGnlgLiDof2q9QoUGxw-U2VoZRrPs"
    },
    {
      id: 6,
      title: "Optimizing Machine Learning Models for Production",
      description: "Best practices for deploying ML models in production environments, including model optimization, monitoring, and scaling considerations for real-world applications.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMxwKid94Ym63fcjwMPzvS8Iy44pP3DJiDkNFRj48iS9kAqzWMAdXIHn8x9scEXfUou7itwJ1ve9N4Yi927-bpMcPAhfj1jYaNIOijVh-fWe-D6c3qaJzHaGrqqMlrnC20_8KkueVThrUBeFaE074Ddm9b7Y67ZbScGqeM2aPaFzKZ-3qKyy8WymuORHPam-KyEH4PqoOhD1UUjP83zaC-fG3sRcIU5QOrcPt6V9XelOCFuu64O3JZPAbzCmx8qx9_AW0JpmBqXdQ"
    }
  ];

  return (
    <div className={`relative flex size-full min-h-screen flex-col ${isDark ? 'bg-black' : 'bg-slate-50'} group/design-root overflow-x-hidden`}>
      <div className="layout-container flex h-full grow flex-col">
        <Header isDark={isDark} onThemeToggle={toggleTheme} />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className={`${isDark ? 'text-white' : 'text-[#0d141c]'} tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5`}>
              TechWrites - AI/ML, Web Development, and Software Engineering
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 p-4">
              {blogPosts.map((post, index) => (
                <MotionEffect
                  key={post.id}
                  slide={{
                    direction: 'down',
                  }}
                  fade
                  zoom
                  inView
                  delay={0.5 + index * 0.1}
                >
                  <Link href={`/blogs/${post.id}`}>
                    <div className="flex flex-col gap-3 pb-3 cursor-pointer hover:transform hover:scale-105 transition-transform duration-200">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                        style={{ backgroundImage: `url("${post.image}")` }}
                      ></div>
                      <div>
                        <p className={`${isDark ? 'text-white' : 'text-[#0d141c]'} text-base font-medium leading-normal hover:text-[#0c77f2] transition-colors`}>
                          {post.title}
                        </p>
                        <p className={`${isDark ? 'text-gray-400' : 'text-[#49719c]'} text-sm font-normal leading-normal`}>
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </MotionEffect>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://linkedin.com/in/aadarshkumar" target="_blank" className={`${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-[#49719c] hover:text-[#0c77f2]'} transition-colors`}>
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/aadarshkumar" target="_blank" className={`${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-[#49719c] hover:text-[#0c77f2]'} transition-colors`}>
                  <Github size={24} />
                </a>
                <a href="https://heyadrsh.tech" target="_blank" className={`${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-[#49719c] hover:text-[#0c77f2]'} transition-colors`}>
                  <Twitter size={24} />
                </a>
              </div>
              <p className={`${isDark ? 'text-gray-400' : 'text-[#49719c]'} text-base font-normal leading-normal`}>
                © 2025 Aadarsh Kumar. All rights reserved.
              </p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
} 