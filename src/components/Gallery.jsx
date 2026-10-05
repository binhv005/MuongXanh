import React from 'react';
import { Play, Eye, Video } from 'lucide-react';
import { tourData } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';

export default function Gallery({ onOpenLightbox, onOpenVideo }) {
  const { gallery } = tourData;

  // 5 Curved Panoramic Panels matching the cylindrical IMAX arch reference
  const panoramaPanels = [
    {
      id: 'pano-1',
      type: 'photo',
      title: 'Bể bơi xanh mát giữa núi rừng',
      category: 'Nghỉ Dưỡng',
      src: '/images/661475983_1438142651661571_5393163635704002534_n.webp',
      lightboxIdx: 0,
      heightClass: 'h-[360px] sm:h-[440px] lg:h-[500px]',
      translateClass: 'lg:translate-y-0',
      radiusClass: 'rounded-2xl lg:rounded-l-3xl lg:rounded-r-md',
    },
    {
      id: 'pano-2',
      type: 'photo',
      title: 'Văn hóa người Mường đặc sắc',
      category: 'Văn Hóa',
      src: '/images/658128372_1429709552504881_3215632321816560114_n.webp',
      lightboxIdx: 1,
      heightClass: 'h-[320px] sm:h-[390px] lg:h-[440px]',
      translateClass: 'lg:translate-y-6',
      radiusClass: 'rounded-2xl lg:rounded-md',
    },
    {
      id: 'pano-3',
      type: 'video',
      title: 'Toàn cảnh Bản Mường Xanh từ trên cao',
      category: 'Video Toàn Cảnh',
      poster: '/images/801284629_1757012948849297_5903687733937689565_n.webp',
      videoSrc: '/videos/welcome.mp4',
      lightboxIdx: 2,
      heightClass: 'h-[280px] sm:h-[340px] lg:h-[380px]',
      translateClass: 'lg:translate-y-12',
      radiusClass: 'rounded-2xl lg:rounded-md',
      isCenter: true,
    },
    {
      id: 'pano-4',
      type: 'photo',
      title: 'Nông trại vui vẻ & Đoàn trải nghiệm',
      category: 'Trải Nghiệm',
      src: '/images/640449432_1403761058433064_4869839422715905176_n.webp',
      lightboxIdx: 3,
      heightClass: 'h-[320px] sm:h-[390px] lg:h-[440px]',
      translateClass: 'lg:translate-y-6',
      radiusClass: 'rounded-2xl lg:rounded-md',
    },
    {
      id: 'pano-5',
      type: 'video',
      title: 'Gala Dinner & Đêm Lửa Trại',
      category: 'Video Gala Dinner',
      poster: '/images/803101776_2314573029279816_1501408313838242192_n.webp',
      videoSrc: '/videos/gala-dinner.mp4',
      lightboxIdx: 4,
      heightClass: 'h-[360px] sm:h-[440px] lg:h-[500px]',
      translateClass: 'lg:translate-y-0',
      radiusClass: 'rounded-2xl lg:rounded-r-3xl lg:rounded-l-md',
    },
  ];

  return (
    <section id="gallery" className="py-12 md:py-18 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Centered */}
        <ScrollReveal direction="up" duration={600} className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="font-script font-bold text-4xl sm:text-5xl md:text-6xl text-amber-500 leading-tight mb-2">
            Hình Ảnh & Video Thực Tế
          </h2>
          <p className="text-base sm:text-lg text-forest-700/85 font-medium">
            {gallery.title}
          </p>
        </ScrollReveal>

        {/* 5-Panel Cylindrical Panoramic Gallery Container */}
        <div className="relative pt-2 pb-6 lg:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-3 items-center justify-center">
            {panoramaPanels.map((item, idx) => {
              const isVideo = item.type === 'video';
              const imageSrc = isVideo ? item.poster : item.src;

              return (
                <ScrollReveal
                  key={item.id}
                  direction="up"
                  delay={idx * 80}
                  duration={650}
                  className={`w-full transition-transform duration-500 ${item.translateClass}`}
                >
                  <div
                    onClick={() => {
                      if (isVideo && onOpenVideo) {
                        onOpenVideo(item.videoSrc, item.title);
                      } else if (onOpenLightbox) {
                        onOpenLightbox(item.lightboxIdx);
                      }
                    }}
                    className={`group relative overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-forest-900 border border-white/60 hover:scale-[1.04] hover:z-30 w-full ${item.heightClass} ${item.radiusClass}`}
                  >
                    {/* Background Media */}
                    <img
                      src={imageSrc}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Gradient Atmosphere Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/25 to-black/20 group-hover:from-forest-950/95 transition-colors duration-300" />

                    {/* Center Video Play Indicator or Photo View */}
                    {isVideo ? (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-500 text-forest-950 flex items-center justify-center shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:scale-115 group-hover:bg-amber-400">
                          <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="w-11 h-11 rounded-full bg-white/95 text-forest-950 flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                          <Eye className="w-5 h-5" />
                        </div>
                      </div>
                    )}

                    {/* Bottom Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white z-10">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        {isVideo ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500 text-forest-950 font-bold text-[10px] tracking-wider uppercase shadow-sm">
                            <Video className="w-3 h-3" />
                            <span>Video</span>
                          </span>
                        ) : (
                          <span className="text-[10px] sm:text-xs font-bold text-amber-300 tracking-wider uppercase block drop-shadow">
                            {item.category}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xs sm:text-sm font-sans font-bold text-white leading-snug line-clamp-2 drop-shadow group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
