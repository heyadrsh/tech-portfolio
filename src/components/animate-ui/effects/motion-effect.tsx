"use client";

import React, { useEffect, useRef, useState } from 'react';

interface SlideConfig {
  direction: 'up' | 'down' | 'left' | 'right';
}

interface MotionEffectProps {
  children: React.ReactNode;
  slide?: SlideConfig;
  fade?: boolean;
  zoom?: boolean;
  inView?: boolean;
  delay?: number;
  className?: string;
}

export const MotionEffect: React.FC<MotionEffectProps> = ({
  children,
  slide,
  fade = false,
  zoom = false,
  inView = false,
  delay = 0,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(!inView);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [inView, delay]);

  const getTransform = () => {
    if (!slide) return '';
    
    const distance = '30px';
    switch (slide.direction) {
      case 'up':
        return `translateY(${distance})`;
      case 'down':
        return `translateY(-${distance})`;
      case 'left':
        return `translateX(${distance})`;
      case 'right':
        return `translateX(-${distance})`;
      default:
        return '';
    }
  };

  const initialStyles = {
    transform: `${getTransform()} ${zoom ? 'scale(0.9)' : ''}`,
    opacity: fade ? 0 : 1,
    transition: 'all 0.6s ease-out',
  };

  const visibleStyles = {
    transform: 'translateY(0) translateX(0) scale(1)',
    opacity: 1,
    transition: 'all 0.6s ease-out',
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={isVisible ? visibleStyles : initialStyles}
    >
      {children}
    </div>
  );
}; 