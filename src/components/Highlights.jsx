import React from 'react';
import { ArrowRight } from 'lucide-react';
import { tourData } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';

export default function Highlights() {
  const { highlights } = tourData;

  return (
    <section id="highlights" className="relative bg-[#faf7f2] text-forest-950 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Decorative Watercolor River & Mountains (Enlarged +70% & Soft Background Layer) */}
      <div className="absolute -bottom-16 -left-20 sm:-left-12 md:-left-8 w-[800px] sm:w-[1100px] md:w-[1300px] lg:w-[1500px] pointer-events-none select-none z-0">
        <img
          src="/images/decor-watercolor-river.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-auto opacity-35 sm:opacity-40 mix-blend-multiply"
        />
        {/* Soft fading gradient to keep foreground crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f2]/40 via-transparent to-[#faf7f2]/60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Staggered Organic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Top Editorial Text + Bottom Landscape Photo & Sub-Story */}
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:space-y-12">
            
            {/* Top-Left: Main Header Block */}
            <ScrollReveal direction="left" duration={650} className="max-w-lg">
              <h2 className="font-script font-bold text-5xl sm:text-6xl lg:text-7xl text-amber-500 leading-tight mb-3">
                Ở Đây Có Gì?
              </h2>
              
              <p className="text-base sm:text-lg text-forest-800/85 leading-relaxed font-normal">
                {highlights.subtitle}
              </p>
            </ScrollReveal>

            {/* Bottom-Left: Organic Blob Photo + Sub-Headline & Link */}
            <ScrollReveal direction="up" delay={150} duration={650} className="max-w-lg">
              {/* Organic Oval/Bean Pebble Shape Photo */}
              <div 
                style={{ borderRadius: '58% 42% 52% 48% / 46% 56% 44% 54%' }}
                className="relative overflow-hidden shadow-[0_12px_32px_-8px_rgba(20,50,30,0.14)] bg-forest-900 h-[220px] sm:h-[270px] group transition-transform duration-500 hover:scale-[1.02]"
              >
                <img
                  src="/images/801873413_1088843643675255_2033292637562162275_n.webp"
                  alt="Không gian xanh ngát Bản Mường Xanh"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Sub-Headline & Link */}
              <div className="mt-5 sm:mt-6">
                <h3 className="font-script font-bold text-3xl sm:text-4xl text-amber-500 leading-tight mb-2">
                  Bước chân nhỏ hôm nay, kỷ niệm xanh ngày mai.
                </h3>
                
                <a
                  href="#activities"
                  className="inline-flex items-center gap-2 text-forest-900 hover:text-amber-600 font-bold text-sm sm:text-base transition-colors group"
                >
                  <span>Xem tất cả hoạt động & trải nghiệm</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* RIGHT COLUMN: Top Large People Photo + Bottom Wide Scenic Photo & Walking Illustration */}
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:space-y-12">
            
            {/* Top-Right: Large Arch Organic Photo with Flying Birds */}
            <ScrollReveal direction="right" duration={650} className="relative">
              {/* Decorative Flying Birds */}
              <div className="absolute -top-6 -right-1 sm:-top-8 sm:right-2 z-20 pointer-events-none select-none">
                <img
                  src="/images/bird.webp"
                  alt=""
                  aria-hidden="true"
                  className="w-20 sm:w-28 opacity-85 mix-blend-multiply"
                />
              </div>

              <div 
                style={{ borderRadius: '46% 54% 68% 32% / 38% 42% 58% 62%' }}
                className="relative overflow-hidden shadow-[0_16px_40px_-10px_rgba(20,50,30,0.16)] bg-forest-900 h-[280px] sm:h-[350px] lg:h-[390px] group transition-transform duration-500 hover:scale-[1.02]"
              >
                <img
                  src="/images/640449432_1403761058433064_4869839422715905176_n.webp"
                  alt="Trải nghiệm Bản Mường Xanh"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>

            {/* Bottom-Right: Wide Landscape Kidney-Shaped Photo + Farmer Illustration */}
            <ScrollReveal direction="up" delay={200} duration={650} className="relative">
              <div 
                style={{ borderRadius: '68% 32% 44% 56% / 46% 62% 38% 54%' }}
                className="relative overflow-hidden shadow-[0_14px_35px_-8px_rgba(20,50,30,0.15)] bg-forest-900 h-[220px] sm:h-[270px] lg:h-[290px] group transition-transform duration-500 hover:scale-[1.02]"
              >
                <img
                  src="/images/location_mountain_backdrop.webp"
                  alt="Khung cảnh thiên nhiên Bản Mường Xanh"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
}
