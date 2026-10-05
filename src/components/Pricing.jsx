import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { tourData } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';

export default function Pricing() {
  const { pricing } = tourData;
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);

  return (
    <section id="pricing" className="py-10 md:py-14 bg-[#faf7f2] relative overflow-hidden">
      {/* Background Scenic Landscape Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/images/a93b18c4dcf1fc66d8d1d564d1d37379.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#faf7f2]/75 backdrop-blur-[1px]" />
      </div>

      {/* Background accents */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-forest-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={600} className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="font-script font-bold text-4xl sm:text-5xl md:text-6xl text-amber-500 leading-tight mb-3">
            Chọn Hành Trình Phù Hợp
          </h2>
          <p className="text-base sm:text-lg text-forest-800/80">
            Trọn gói dịch vụ nghỉ dưỡng, vui chơi và trải nghiệm văn hóa bản địa độc đáo
          </p>
        </ScrollReveal>

        {/* Pricing Cards: 1 Light & 1 Deep Forest */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Package 1: Tour 1 Ngày */}
          <ScrollReveal direction="up" delay={100} duration={650} className="bg-white/95 rounded-3xl p-7 sm:p-9 border border-forest-100 shadow-soft flex flex-col justify-between hover:shadow-card transition-all duration-300 relative group overflow-hidden">
            {/* Background Landscape Artwork */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
              <img
                src="/images/b2f5f062fc4b8b7d906de82e4561052a.webp"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover object-center opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/90 backdrop-blur-[0.5px]" />
            </div>

            <div className="relative z-10 pt-1">
              <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-forest-950 tracking-tight mb-2">
                {pricing.oneDay.title}
              </h3>
              
              <div className="flex items-baseline gap-1.5 my-4 sm:my-5">
                <span className="text-4xl sm:text-5xl font-sans font-black text-amber-600 drop-shadow-xs">
                  {pricing.oneDay.price}
                </span>
                <span className="text-sm font-bold text-forest-800">
                  {pricing.oneDay.unit}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-forest-800 font-semibold mb-4 pb-4 border-b border-forest-200/80">
                {pricing.oneDay.children}
              </p>

              {/* Toggle Detail Button (Transparent, no background) */}
              <button
                type="button"
                onClick={() => setShowDetails1(!showDetails1)}
                className="w-full py-2 mb-4 text-forest-950 hover:text-amber-600 text-xs sm:text-sm font-bold flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>{showDetails1 ? 'Thu gọn thông tin' : 'Xem chi tiết quyền lợi & dịch vụ'}</span>
                {showDetails1 ? <ChevronUp className="w-4 h-4 text-amber-600" /> : <ChevronDown className="w-4 h-4 text-forest-700" />}
              </button>

              {/* Collapsible Features Checklist */}
              {showDetails1 && (
                <div className="space-y-3 mb-6 animate-fadeIn pt-1">
                  {pricing.oneDay.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-forest-950 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#booking"
              className="relative z-10 w-full py-3.5 sm:py-4 rounded-2xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm tracking-wide text-center transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:scale-[1.01] mt-2"
            >
              <span>{pricing.oneDay.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </ScrollReveal>

          {/* Package 2: Tour 2 Ngày 1 Đêm (Featured Card with Watercolor Mountain Backdrop) */}
          <ScrollReveal direction="up" delay={250} duration={650} className="bg-white/95 rounded-3xl p-7 sm:p-9 border-2 border-amber-400 shadow-elevated flex flex-col justify-between relative group overflow-hidden">
            {/* Background Landscape Artwork */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
              <img
                src="/images/b8a1f766e3fd8265f208dd81903b4f38.webp"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover object-bottom opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/90 backdrop-blur-[0.5px]" />
            </div>

            {/* Featured Badge */}
            <div className="absolute -top-3.5 right-8 bg-gradient-to-r from-amber-500 to-amber-600 text-forest-950 font-extrabold text-xs px-4 py-1 rounded-full shadow-md flex items-center gap-1 z-20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ĐƯỢC YÊU THÍCH NHẤT</span>
            </div>

            <div className="relative z-10 pt-1">
              <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-forest-950 tracking-tight mb-2">
                {pricing.twoDayOneNight.title}
              </h3>
              
              <div className="flex items-baseline gap-1.5 my-4 sm:my-5">
                <span className="text-4xl sm:text-5xl font-sans font-black text-amber-600 drop-shadow-xs">
                  {pricing.twoDayOneNight.price}
                </span>
                <span className="text-sm font-bold text-forest-800">
                  {pricing.twoDayOneNight.unit}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-forest-800 font-semibold mb-4 pb-4 border-b border-forest-200/80">
                {pricing.twoDayOneNight.children}
              </p>

              {/* Toggle Detail Button (Transparent, no background) */}
              <button
                type="button"
                onClick={() => setShowDetails2(!showDetails2)}
                className="w-full py-2 mb-4 text-forest-950 hover:text-amber-600 text-xs sm:text-sm font-bold flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>{showDetails2 ? 'Thu gọn thông tin' : 'Xem chi tiết quyền lợi & dịch vụ'}</span>
                {showDetails2 ? <ChevronUp className="w-4 h-4 text-amber-600" /> : <ChevronDown className="w-4 h-4 text-forest-700" />}
              </button>

              {/* Collapsible Features Checklist */}
              {showDetails2 && (
                <div className="space-y-3 mb-6 animate-fadeIn pt-1">
                  {pricing.twoDayOneNight.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-forest-950 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#booking"
              className="relative z-10 w-full py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-forest-950 font-bold text-sm tracking-wide text-center transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:scale-[1.01] mt-2"
            >
              <span>{pricing.twoDayOneNight.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

