import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, videoSrc, videoTitle, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen && e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen || !videoSrc) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all z-10"
        aria-label="Đóng video"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="w-full max-w-5xl flex flex-col items-center">
        {videoTitle && (
          <h3 className="text-white font-sans font-bold text-lg sm:text-xl mb-3 text-center">
            {videoTitle}
          </h3>
        )}

        <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          <video
            src={videoSrc}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          >
            Trình duyệt của bạn không hỗ trợ phát video này.
          </video>
        </div>
      </div>
    </div>
  );
}
