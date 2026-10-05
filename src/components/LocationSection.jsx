import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { tourData } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';

export default function LocationSection() {
  const { locationSection } = tourData;

  return (
    <section id="location" className="relative py-16 sm:py-20 lg:py-24 text-white overflow-hidden min-h-[520px] lg:min-h-[600px] flex items-center">
      {/* 1. Full Panoramic Mountain Scenic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/location_mountain_backdrop.webp"
          alt="Phong cảnh núi rừng Bản Mường Xanh"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
        />
        {/* Dark Vignette & Scenic Gradients for pristine text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/65 to-forest-950/30 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-black/35 mix-blend-multiply z-10 pointer-events-none" />
      </div>

      {/* Top Smooth Curved Divider (#faf7f2) */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-10 sm:h-16 lg:h-20 text-[#faf7f2]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,24 C1120,78 780,18 420,62 C220,88 90,38 0,26 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Bottom Smooth Curved Divider (#faf7f2) */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-10 sm:h-16 lg:h-20 text-[#faf7f2]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,96 L1440,96 L1440,72 C1120,18 780,78 420,34 C220,8 90,58 0,70 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Editorial Presentation matching reference "Le territoire" */}
          <ScrollReveal direction="left" duration={700} className="lg:col-span-6 flex flex-col items-start max-w-xl">
            
            {/* Main Heading in bold elegant cursive/serif style matching "Le territoire" */}
            <h2 className="font-serif italic font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] mb-6 drop-shadow-md">
              Đi Đâu?
            </h2>

            {/* Shortened Concise Description */}
            <p className="text-sm sm:text-base text-cream-100/90 font-normal leading-relaxed mb-3 max-w-lg drop-shadow-sm">
              Nằm ẩn mình giữa thung lũng Cao Sơn (Lương Sơn, Hòa Bình), <strong className="text-white font-bold">Bản Mường Xanh</strong> sở hữu không gian núi rừng nguyên sơ, trong lành và thanh bình tuyệt đối.
            </p>

            <p className="text-sm sm:text-base text-cream-200/80 font-normal leading-relaxed mb-6 max-w-lg drop-shadow-sm">
              Chỉ cách Hà Nội ~55km (1h45 di chuyển), đây là tọa độ lý tưởng để thư giãn và gắn kết giữa thiên nhiên Tây Bắc.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full mb-8">
              <div>
                <span className="block text-xs uppercase tracking-wider text-amber-400 font-bold mb-1 drop-shadow-sm">Địa chỉ</span>
                <p className="text-xs sm:text-sm text-cream-100/90 font-medium leading-relaxed drop-shadow-sm">{locationSection.address}</p>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-amber-400 font-bold mb-1 drop-shadow-sm">Thời gian mở cửa</span>
                <p className="text-xs sm:text-sm text-cream-100/90 font-medium leading-relaxed drop-shadow-sm">{locationSection.schedule}</p>
              </div>
            </div>

            {/* CTA Button in vibrant warm red-orange matching reference */}
            <div>
              <a
                href={tourData.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#d94426] hover:bg-[#bf361c] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_10px_25px_rgba(217,68,38,0.45)] hover:shadow-[0_15px_30px_rgba(217,68,38,0.6)] transform hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
              >
                <span>XEM BẢN ĐỒ GOOGLE MAPS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

          </ScrollReveal>

          {/* RIGHT COLUMN: Territorial Map Shape Overlay matching reference graphic */}
          <ScrollReveal direction="right" duration={750} delay={150} className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Stylized Vector Territory Boundary Map Silhouette */}
            <div className="relative w-full max-w-[520px] aspect-[4/3.8] sm:aspect-[4/3.6] flex items-center justify-center group">
                
                {/* SVG Territorial Shape & Roads */}
                <svg
                  viewBox="0 0 540 480"
                  className="w-full h-full overflow-visible drop-shadow-[0_25px_45px_rgba(10,29,20,0.65)]"
                >
                  <defs>
                    {/* Dark Territorial Gradient matching reference */}
                    <linearGradient id="territoryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#152f3f" />
                      <stop offset="50%" stopColor="#102533" />
                      <stop offset="100%" stopColor="#0b1b26" />
                    </linearGradient>

                    {/* Glowing outer contour filter */}
                    <filter id="whiteGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#ffffff" floodOpacity="0.35" />
                    </filter>
                  </defs>

                  {/* Territorial Map Polygon with bold white outline border */}
                  <path
                    d="M 285,75 
                       C 320,80 370,120 420,135 
                       C 455,145 465,175 440,215 
                       C 425,238 450,265 470,270 
                       C 490,275 475,310 440,320 
                       C 410,328 395,355 410,385 
                       C 420,405 385,425 355,410 
                       C 325,395 320,425 315,455 
                       C 310,480 270,470 280,430 
                       C 285,410 270,390 260,370 
                       C 245,340 270,305 270,275 
                       C 270,250 250,225 225,215 
                       C 200,205 180,180 205,145 
                       C 230,110 255,70 285,75 Z"
                    fill="url(#territoryGrad)"
                    stroke="#ffffff"
                    strokeWidth="5.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    filter="url(#whiteGlow)"
                    className="transition-all duration-500 group-hover:brightness-110"
                  />

                  {/* Highway Routes Network */}
                  {/* Route 1: Main East-West Axis (CT08 / Đại lộ Thăng Long) */}
                  <path
                    d="M 205,145 C 260,185 320,225 440,215"
                    fill="none"
                    stroke="#5dade2"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity="0.85"
                  />

                  {/* Route 2: QL6 Highway connecting southwards */}
                  <path
                    d="M 280,430 C 275,360 305,290 320,225"
                    fill="none"
                    stroke="#48c9b0"
                    strokeWidth="3"
                    strokeDasharray="4 4"
                    opacity="0.85"
                  />

                  {/* Route 3: ĐT446 Branch into Cao Son Valley */}
                  <path
                    d="M 320,225 C 335,260 380,285 440,320"
                    fill="none"
                    stroke="#5dade2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.85"
                  />

                  {/* Route 4: Secondary road to Ban Muong Xanh */}
                  <path
                    d="M 320,225 C 330,185 345,170 360,165"
                    fill="none"
                    stroke="#f9e79f"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Road Badges inside Territorial Map */}
                {/* 1. Road Badge CT08 (Đại lộ Thăng Long / Hà Nội) */}
                <div className="absolute top-[34%] left-[36%] transform -translate-x-1/2 -translate-y-1/2 bg-[#f4d03f] text-forest-950 font-bold text-[10px] sm:text-[11px] px-2 py-0.5 rounded shadow-md border border-amber-600/30">
                  CT08
                </div>

                {/* 2. Road Badge QL6 (Quốc lộ 6) */}
                <div className="absolute bottom-[22%] left-[53%] transform -translate-x-1/2 -translate-y-1/2 bg-[#f4d03f] text-forest-950 font-bold text-[10px] sm:text-[11px] px-2 py-0.5 rounded shadow-md border border-amber-600/30">
                  QL6
                </div>

                {/* 3. Road Badge ĐT446 (Tỉnh lộ 446 - Cao Sơn) */}
                <div className="absolute top-[52%] right-[22%] transform -translate-x-1/2 -translate-y-1/2 bg-[#f4d03f] text-forest-950 font-bold text-[10px] sm:text-[11px] px-2 py-0.5 rounded shadow-md border border-amber-600/30">
                  ĐT446
                </div>

                {/* Destination Pinpoint Marker (Bản Mường Xanh) */}
                <div className="absolute top-[32%] left-[64%] transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  
                  {/* Concentric Pulsing Radar Ring */}
                  <span className="absolute -inset-2.5 rounded-full bg-red-500/40 animate-ping pointer-events-none" />
                  
                  {/* Outer Glowing Marker Pin */}
                  <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#d94426] border-2 border-white shadow-[0_4px_15px_rgba(217,68,38,0.7)] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-white fill-white" />
                  </div>

                  {/* Destination Label Pill */}
                  <div className="mt-1.5 px-3 py-1 rounded-full bg-forest-950/90 backdrop-blur-md border border-white/20 text-white font-bold text-[10px] sm:text-xs tracking-wide shadow-xl whitespace-nowrap flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-pulse" />
                    <span>Bản Mường Xanh</span>
                  </div>
                </div>

                {/* Direction Pointer from Hanoi */}
                <div className="absolute top-[18%] left-[18%] z-10 hidden sm:flex items-center gap-1.5 text-xs font-semibold text-amber-300/90 drop-shadow">
                  <span>← Từ Hà Nội (~55km)</span>
                </div>

              </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

