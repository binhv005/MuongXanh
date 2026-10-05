import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Calendar, Users, MessageSquare } from 'lucide-react';
import { tourData } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';

export default function LeadForm() {
  const { formSection } = tourData;
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    guestsCount: '',
    departureDate: '',
    tourType: 'Tour 1 ngày',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Vui lòng nhập họ và tên';
    if (!formData.phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9+ ]{9,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Số điện thoại không hợp lệ';
    }
    if (!formData.guestsCount) errs.guestsCount = 'Vui lòng chọn số lượng khách';
    if (!formData.departureDate) errs.departureDate = 'Vui lòng chọn ngày đi dự kiến';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="booking" className="py-8 sm:py-10 md:py-12 bg-[#faf7f2] text-forest-950 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-forest-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up" duration={600} className="text-center mb-4 sm:mb-6">
          <p className="font-handwriting text-2xl sm:text-3xl text-amber-600 font-semibold mb-0.5 sm:mb-1">
            {formSection.cursiveHeader}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold text-forest-950 tracking-tight mb-1.5">
            {formSection.heading}
          </h2>
          <p className="text-xs sm:text-sm text-forest-800/80 max-w-xl mx-auto">
            {formSection.subheading}
          </p>
        </ScrollReveal>

        {/* Main 50/50 Split Card (Light/White Theme, No Rounded Corners) */}
        <div className="bg-white text-forest-950 border border-forest-100 shadow-card rounded-none overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch">

          {/* Left Column: 50% Image (absolute positioned to prevent grid height expansion) */}
          <ScrollReveal direction="left" duration={650} className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-0 overflow-hidden group">
            <div className="absolute inset-0">
              <img
                src="/images/form.webp"
                alt="Ruộng bậc thang Bản Mường Xanh"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/30 to-transparent" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white z-10">
              <h4 className="text-lg sm:text-xl font-serif font-bold text-white leading-snug drop-shadow-md">
                Khám phá Bản Mường Xanh
              </h4>
              <p className="text-xs text-cream-200/90 font-light mt-0.5 max-w-md">
                Hòa mình vào khung cảnh ruộng bậc thang xanh ngát và núi rừng thơ mộng
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: 50% Form (Light Theme) */}
          <ScrollReveal direction="right" delay={150} duration={650} className="p-5 sm:p-6 lg:p-7 flex flex-col justify-start bg-white">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto shadow-lg animate-bounce">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-forest-950">
                  Gửi Thông Tin Thành Công!
                </h3>
                <p className="text-forest-700 text-sm max-w-md mx-auto">
                  Cảm ơn bạn đã quan tâm. Đội ngũ tư vấn Bản Mường Xanh sẽ liên hệ lại qua số điện thoại <span className="font-bold text-amber-600">{formData.phone}</span> trong thời gian sớm nhất!
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      guestsCount: '',
                      departureDate: '',
                      tourType: 'Tour 1 ngày',
                      notes: ''
                    });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-forest-100 hover:bg-forest-200 text-forest-900 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5" noValidate>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">

                  {/* Họ và tên */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-800 mb-1">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-forest-50/60 border ${errors.fullName ? 'border-red-400' : 'border-forest-200/80'
                        } text-forest-950 placeholder-forest-700/40 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-sm transition-all`}
                    />
                    {errors.fullName && (
                      <span className="flex items-center gap-1 text-xs text-red-500 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Số điện thoại */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-800 mb-1">
                      Số điện thoại / Zalo *
                    </label>
                    <input
                      type="tel"
                      placeholder="Ví dụ: 0981.851.651"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-forest-50/60 border ${errors.phone ? 'border-red-400' : 'border-forest-200/80'
                        } text-forest-950 placeholder-forest-700/40 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-sm transition-all`}
                    />
                    {errors.phone && (
                      <span className="flex items-center gap-1 text-xs text-red-500 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </span>
                    )}
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">

                  {/* Số lượng khách */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-800 mb-1">
                      Số lượng khách *
                    </label>
                    <select
                      value={formData.guestsCount}
                      onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-forest-50/60 border ${errors.guestsCount ? 'border-red-400' : 'border-forest-200/80'
                        } text-forest-950 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-sm transition-all`}
                    >
                      <option value="">Chọn số lượng</option>
                      <option value="1-4 khách (Cá nhân/Gia đình)">1 - 4 khách (Gia đình)</option>
                      <option value="5-15 khách (Nhóm bạn)">5 - 15 khách (Nhóm bạn)</option>
                      <option value="16-39 khách (Đoàn vừa)">16 - 39 khách (Đoàn vừa)</option>
                      <option value="40+ khách (Team Building)">40+ khách (Team Building)</option>
                    </select>
                    {errors.guestsCount && (
                      <span className="flex items-center gap-1 text-xs text-red-500 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.guestsCount}
                      </span>
                    )}
                  </div>

                  {/* Ngày dự kiến đi */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-800 mb-1">
                      Ngày dự kiến đi *
                    </label>
                    <input
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-forest-50/60 border ${errors.departureDate ? 'border-red-400' : 'border-forest-200/80'
                        } text-forest-950 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-sm transition-all`}
                    >
                    </input>
                    {errors.departureDate && (
                      <span className="flex items-center gap-1 text-xs text-red-500 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.departureDate}
                      </span>
                    )}
                  </div>

                </div>

                {/* Loại tour */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-800 mb-1">
                    Loại tour
                  </label>
                  <select
                    value={formData.tourType}
                    onChange={(e) => setFormData({ ...formData, tourType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-forest-50/60 border border-forest-200/80 text-forest-950 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-sm transition-all"
                  >
                    <option value="Tour 1 ngày">Tour 1 ngày (560.000đ)</option>
                    <option value="Tour 2 ngày 1 đêm">Tour 2 ngày 1 đêm (1.280.000đ)</option>
                    <option value="Thiết kế tour riêng">Thiết kế theo yêu cầu đoàn</option>
                  </select>
                </div>

                {/* Ghi chú nhu cầu */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest-800 mb-1">
                    Ghi chú nhu cầu
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Yêu cầu thêm về phòng nghỉ, thực đơn, hoạt động..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-forest-50/60 border border-forest-200/80 text-forest-950 placeholder-forest-700/40 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-sm transition-all"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-1.5">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-forest-950 font-extrabold text-base tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-3 border-forest-950 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>{formSection.cta}</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Hotline note */}
                <div className="text-center pt-0.5">
                  <a
                    href={`tel:${tourData.hotline}`}
                    className="inline-flex items-center gap-2 text-xs text-forest-700 hover:text-amber-600 font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>{formSection.hotlineText}</span>
                  </a>
                </div>

              </form>
            )}
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
