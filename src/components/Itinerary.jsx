import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { tourData } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';

export default function Itinerary() {
  const { itinerary } = tourData;

  const shortenedServices = [
    "Xe đưa đón",
    "01 bữa ăn chính",
    "Khu nghỉ trưa",
    "Vé tham quan & vui chơi",
    "Bảo hiểm du lịch",
    "Nước uống",
    "Hướng dẫn viên",
    "Tặng nón du lịch"
  ];

  return (
    <section id="itinerary" className="pt-14 sm:pt-18 md:pt-20 pb-12 md:pb-16 bg-[#f3f6e9] text-forest-950 relative overflow-hidden">
      {/* Background Artwork (bg-1.png) - Scaled 70% on mobile, 100% on desktop */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none flex items-center justify-end overflow-hidden">
        <img
          src="/images/bg-1.webp"
          alt="Minh họa Bản Mường Xanh"
          className="w-full h-full max-h-full object-contain object-right opacity-95 scale-[0.7] sm:scale-[0.85] lg:scale-100 origin-right transition-transform duration-300"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content: Left 50% for Itinerary text, Right side showcases the full bg-1.png artwork */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (lg:col-span-7): Header & Itinerary Steps shifted ~100px right */}
          <div className="lg:col-span-7 flex flex-col max-w-2xl lg:pl-24">
            {/* Section Header */}
            <ScrollReveal direction="up" duration={600} className="mb-6 sm:mb-8">
              <h2 className="font-script font-bold text-3xl sm:text-4xl md:text-5xl text-amber-500 leading-tight mb-2 sm:whitespace-nowrap">
                Lịch Trình Tour 1 Ngày
              </h2>
              <p className="text-sm sm:text-base text-forest-800/80 font-normal">
                Hành trình trọn vẹn khám phá thiên nhiên, ẩm thực và văn hóa Bản Mường Xanh theo từng khung giờ
              </p>
            </ScrollReveal>

            {/* Itinerary Steps List (Plain text: mốc thời gian: nội dung) */}
            <div className="space-y-3.5 sm:space-y-4">
              {itinerary.steps.map((step, idx) => (
                <ScrollReveal
                  key={step.time + idx}
                  direction="up"
                  delay={idx * 40}
                  duration={450}
                  className="flex items-start gap-2.5 sm:gap-3 group"
                >
                  <span className="font-mono font-bold text-amber-600 text-base sm:text-lg shrink-0 tracking-wide select-none">
                    {step.time}:
                  </span>
                  <span className="text-sm sm:text-base text-forest-900 font-medium leading-relaxed group-hover:text-amber-600 transition-colors">
                    {step.title}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column (lg:col-span-5): Empty to let the background artwork shine through */}
          <div className="hidden lg:block lg:col-span-5 min-h-[360px]" aria-hidden="true" />

        </div>

        {/* Bottom Horizontal Bar: Dịch Vụ Bao Gồm */}
        <ScrollReveal direction="up" delay={200} duration={600} className="mt-8 sm:mt-12">
          <div className="flex items-center gap-2 mb-3.5">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Dịch vụ bao gồm:
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-2.5">
            {shortenedServices.map((item, idx) => (
              <div
                key={idx}
                className="py-2.5 px-2 rounded-xl bg-white/90 hover:bg-white border border-forest-100/80 shadow-sm flex items-center justify-center gap-1.5 transition-all text-center group"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-xs font-semibold text-forest-900 leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}




