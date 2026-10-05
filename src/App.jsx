import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Itinerary from './components/Itinerary';
import Pricing from './components/Pricing';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import LightboxModal from './components/LightboxModal';
import VideoModal from './components/VideoModal';

export default function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState({ src: '', title: '' });

  // Always scroll to top when page reloads / mounts
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleOpenVideo = (src, title) => {
    setActiveVideo({ src, title });
    setVideoModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#133023] text-forest-950 font-sans selection:bg-forest-700 selection:text-white">
      {/* Top Fixed Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Điểm Nổi Bật (Ở ĐÂY CÓ GÌ?) */}
        <Highlights />

        {/* 3. Lịch Trình Tour 1 Ngày & Dịch Vụ Bao Gồm */}
        <Itinerary />

        {/* 6. Bảng Giá */}
        <Pricing />

        {/* 8. Hoạt Động & Tiện Ích */}
        <Activities onSelectImage={(img, title) => handleOpenLightbox(0)} />

        {/* 9. Gallery & Video Thực Tế */}
        <Gallery
          onOpenLightbox={handleOpenLightbox}
          onOpenVideo={handleOpenVideo}
        />

        {/* 12. Địa Điểm & Bản Đồ */}
        <LocationSection />

        {/* 13. Form Đặt Tour / Tư Vấn */}
        <LeadForm />

        {/* 14. Câu Hỏi Thường Gặp (FAQ) */}
        <FAQ />

        {/* 15. Final CTA Banner */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating & Sticky Action CTA */}
      <FloatingCTA />

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        videoSrc={activeVideo.src}
        videoTitle={activeVideo.title}
        onClose={() => setVideoModalOpen(false)}
      />
    </div>
  );
}
