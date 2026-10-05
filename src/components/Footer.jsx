import React from 'react';
import { Phone, Mail, MapPin, Sprout } from 'lucide-react';
import { tourData } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';

export default function Footer() {
  return (
    <footer className="relative bg-[#133023] text-cream-100 pt-10 sm:pt-14 lg:pt-16 pb-6">
      {/* Top Organic Curved Wave Transition from FinalCTA */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none -translate-y-[99%]">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-16 text-[#133023]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 L1440,70 L1440,25 C1080,72 520,-5 0,40 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/15">
          
          {/* Col 1: Logo & Brand */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={0} duration={600} className="space-y-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-amber-400/80 bg-[#b2dc8a] flex items-center justify-center shrink-0 shadow-lg">
                  <img
                    src="/images/1_Logo.webp"
                    alt="Logo Bản Mường Xanh"
                    className="w-full h-full object-cover scale-105"
                  />
                </div>
                <div>
                  <span className="text-white font-sans font-extrabold text-xl sm:text-2xl tracking-wider uppercase block drop-shadow-sm">
                    BẢN MƯỜNG XANH
                  </span>
                  <span className="text-amber-400 text-xs sm:text-sm tracking-widest uppercase font-bold block mt-1">
                    {tourData.tagline}
                  </span>
                </div>
              </div>

              <p className="text-sm text-cream-100/90 font-normal max-w-sm leading-relaxed">
                Điểm đến nghỉ dưỡng, dã ngoại, sinh thái và Team Building lý tưởng tại Hòa Bình chỉ cách trung tâm Hà Nội 56 km.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-forest-950/80 border border-white/20 hover:bg-amber-400 hover:text-forest-950 text-white flex items-center justify-center transition-all shadow-sm hover:scale-105"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-forest-950/80 border border-white/20 hover:bg-amber-400 hover:text-forest-950 text-white flex items-center justify-center transition-all shadow-sm hover:scale-105"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-forest-950/80 border border-white/20 hover:bg-amber-400 hover:text-forest-950 text-white flex items-center justify-center transition-all shadow-sm hover:scale-105"
                  aria-label="Youtube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Col 2: Quick Links (Hidden on Mobile) */}
          <div className="hidden md:block lg:col-span-3">
            <ScrollReveal direction="up" delay={100} duration={600} className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 drop-shadow-sm">
                Khám Phá
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#highlights" className="text-cream-100/85 hover:text-amber-300 font-medium transition-colors">Điểm nổi bật</a>
                </li>
                <li>
                  <a href="#itinerary" className="text-cream-100/85 hover:text-amber-300 font-medium transition-colors">Lịch trình tour 1 ngày</a>
                </li>
                <li>
                  <a href="#pricing" className="text-cream-100/85 hover:text-amber-300 font-medium transition-colors">Bảng giá tour</a>
                </li>
                <li>
                  <a href="#activities" className="text-cream-100/85 hover:text-amber-300 font-medium transition-colors">Hoạt động trải nghiệm</a>
                </li>
                <li>
                  <a href="#gallery" className="text-cream-100/85 hover:text-amber-300 font-medium transition-colors">Hình ảnh thực tế & Video</a>
                </li>
                <li>
                  <a href="#location" className="text-cream-100/85 hover:text-amber-300 font-medium transition-colors">Địa điểm & Đường đi</a>
                </li>
                <li>
                  <a href="#faq" className="text-cream-100/85 hover:text-amber-300 font-medium transition-colors">Câu hỏi thường gặp</a>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-4">
            <ScrollReveal direction="up" delay={200} duration={600} className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 drop-shadow-sm">
                Thông Tin Liên Hệ
              </h4>
              <div className="space-y-3 text-sm">
                <a
                  href={`tel:${tourData.hotline}`}
                  className="flex items-center gap-3 text-cream-100/90 hover:text-amber-300 font-medium transition-colors group"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Hotline: <strong className="text-white font-bold">{tourData.hotlineFormatted}</strong></span>
                </a>

                <a
                  href={`mailto:${tourData.email}`}
                  className="flex items-center gap-3 text-cream-100/90 hover:text-amber-300 font-medium transition-colors group"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{tourData.email}</span>
                </a>

                <div className="flex items-start gap-3 text-cream-100/90">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <span>{tourData.location}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Bottom Copyright & Slogan */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-200/70">
          <p>© 2024 Bản Mường Xanh. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-amber-300 font-medium">
            <Sprout className="w-3.5 h-3.5 text-amber-400" />
            <span>{tourData.concept}</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
