import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { tourData } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Hero video autoplay error:', err);
        });
      }
    }
  }, []);

  return (
    <section id="hero" className="relative w-full h-[100svh] min-h-[520px] md:h-auto md:min-h-0 md:aspect-[16/9] flex items-center justify-center overflow-hidden bg-forest-950 pt-16 md:pt-0">
      {/* Background Video with edge-to-edge full-bleed coverage on mobile and exact 16:9 on desktop */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[max(100vh,56.25vw)] h-[max(100vw,177.78vh)] min-w-[max(100vh,56.25vw)] min-h-[max(100vw,177.78vh)] max-w-none max-h-none -rotate-90 object-cover filter contrast-[1.05] saturate-[1.08] brightness-[1.02] transform-gpu will-change-transform"
        >
          <source src="https://res.cloudinary.com/ai1z2oaj/video/upload/v1791187961/hero-bg.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Ambient overlay for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/40" />
      </div>

      {/* Decorative leaf / nature glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forest-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        {/* Heading in exact style: Cursive Script + Wide Spaced All-Caps */}
        <ScrollReveal direction="down" duration={750} delay={100}>
          <h1 className="flex flex-col items-center justify-center mb-6 sm:mb-8 select-none">
            {/* Cursive Handwriting with Warm Sunlit Amber Gold */}
            <span className="font-script text-5xl min-[380px]:text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-amber-300 font-bold -rotate-2 transform tracking-wide drop-shadow-[0_0_30px_rgba(251,191,36,0.75)] drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] leading-[1.1] block">
              Khám Phá
            </span>
            
            {/* Elegant Modern Tracking All-Caps */}
            <span className="font-sans sm:font-display text-base min-[380px]:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-[0.2em] min-[380px]:tracking-[0.25em] sm:tracking-[0.32em] uppercase mt-0 sm:mt-1 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] block whitespace-nowrap">
              BẢN MƯỜNG XANH
            </span>
          </h1>
        </ScrollReveal>

        {/* Single Centered CTA (Border-less text link with icon) */}
        <ScrollReveal direction="up" duration={700} delay={250} className="flex justify-center">
          <a
            href="#booking"
            className="px-6 sm:px-8 py-2 sm:py-3 text-amber-300 hover:text-amber-200 font-extrabold text-base sm:text-xl tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            <span className="whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">ĐẶT TOUR NGAY</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 group-hover:text-amber-300 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
