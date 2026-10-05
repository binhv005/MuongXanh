import React from 'react';
import { tourData } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';

export default function Activities({ onSelectImage }) {
  const { activities } = tourData;

  const mosaicItems = [
    // Column 1: Left
    {
      type: 'col1',
      dot: { color: 'bg-rose-500', size: 'w-7 h-7 sm:w-8 sm:h-8' },
      img1: {
        id: 'act-pool',
        title: 'Bể Bơi Vô Cực',
        sub: 'Giải nhiệt giữa núi rừng',
        image: '/images/661475983_1438142651661571_5393163635704002534_n.webp',
        aspect: 'aspect-[4/3]',
        radius: 'rounded-2xl',
      },
      img2: {
        id: 'act-kids',
        title: 'Khu Vui Chơi Trẻ Em',
        sub: 'Tô tượng & trò chơi dân gian',
        image: '/images/698949158_1474610458014790_561538429231984111_n.webp',
        aspect: 'aspect-square',
        radius: 'rounded-2xl',
      },
    },
    // Column 2: Center-Left Tall Hero Feature (like Michelangelo David)
    {
      type: 'tall-feature',
      item: {
        id: 'act-culture',
        title: 'Văn Hóa Mường',
        scriptTitle: 'Bản Mường Xanh',
        sub: 'Múa sạp, cồng chiêng & trang phục truyền thống',
        image: '/images/658128372_1429709552504881_3215632321816560114_n.webp',
        height: 'h-[460px] sm:h-[490px] lg:h-[520px]',
        radius: 'rounded-2xl',
      },
    },
    // Column 3: Center Column
    {
      type: 'col3',
      img1: {
        id: 'act-food',
        title: 'Ẩm Thực Núi Rừng',
        sub: 'Cơm lam, lợn bản, gà đồi nướng',
        image: '/images/582007449_1318369340305570_2342993087102399069_n.webp',
        aspect: 'aspect-[4/3]',
        radius: 'rounded-2xl',
      },
      badge: {
        logo: '/images/1_Logo.webp',
        text: 'BẢN MƯỜNG',
      },
      img2: {
        id: 'act-resort',
        title: 'Nghỉ Dưỡng Bungalow',
        sub: 'Không gian xanh thư thái',
        image: '/images/801873413_1088843643675255_2033292637562162275_n.webp',
        aspect: 'aspect-square',
        radius: 'rounded-2xl',
      },
    },
    // Column 4: Center-Right (with Circular Image & Mini badge)
    {
      type: 'col4',
      miniBadge: {
        text: 'ECO TOUR',
        sub: 'Hòa Bình',
      },
      circleImg: {
        id: 'act-team',
        title: 'Team Building',
        sub: 'Gắn kết bứt phá trên sân cỏ',
        image: '/images/775281929_1369817118699033_150235118027896219_n.webp',
        radius: 'rounded-full',
      },
      dots: [
        { color: 'bg-rose-500', size: 'w-5 h-5' },
        { color: 'bg-rose-400', size: 'w-3 h-3' },
      ],
      img2: {
        id: 'act-stream',
        title: 'Suối Mát & Cầu Gỗ',
        sub: 'Cảnh quan thiên nhiên nguyên sơ',
        image: '/images/825279413_1596829412459560_2070894234638892334_n.webp',
        aspect: 'aspect-[4/3]',
        radius: 'rounded-2xl',
      },
    },
    // Column 5: Right Column
    {
      type: 'col5',
      img1: {
        id: 'act-checkin',
        title: 'Góc Check-In Sống Ảo',
        sub: 'Khung cảnh nên thơ lưu giữ kỷ niệm',
        image: '/images/797754738_1576910697784765_7870036743491608825_n.webp',
        aspect: 'aspect-[16/11]',
        radius: 'rounded-2xl',
      },
      img2: {
        id: 'act-campfire',
        title: 'Lửa Trại & Sự Kiện',
        sub: 'Đêm hội ấm cúng bên ánh lửa bập bùng',
        image: '/images/819742812_1594724989336669_6586786425129735545_n.webp',
        aspect: 'aspect-[3/4]',
        radius: 'rounded-2xl',
      },
      miniFlagBadge: {
        text: '56KM TỪ HN',
      },
    },
  ];

  return (
    <section id="activities" className="py-12 md:py-16 bg-[#faf7f2] relative overflow-hidden">
      {/* Background Mountain Artwork (nui-transparent.png) at Bottom Right */}
      <div className="absolute -bottom-8 -right-8 sm:bottom-0 sm:right-0 w-[260px] sm:w-[360px] md:w-[460px] lg:w-[540px] pointer-events-none select-none z-0 opacity-85 mix-blend-multiply">
        <img
          src="/images/nui-transparent.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain object-right-bottom"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" duration={600} className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="font-script font-bold text-4xl sm:text-5xl md:text-6xl text-amber-500 leading-tight mb-3">
            Hoạt Động Trải Nghiệm
          </h2>
          <p className="text-base sm:text-lg text-forest-800/80 font-medium">
            Hòa mình vào chuỗi trải nghiệm phong phú giữa thiên nhiên Tây Bắc hùng vĩ
          </p>
        </ScrollReveal>

        {/* Artistic Mosaic Gallery Layout (Matching Reference) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-5 items-start">
          
          {/* Column 1: Dot + 2 Images (Width: 3 cols -> cols 1-3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Red decorative circle */}
            <div className="flex justify-center pb-1">
              <div className="w-8 h-8 rounded-full bg-rose-500 shadow-md transform hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Image 1 */}
            <div
              onClick={() => onSelectImage && onSelectImage(mosaicItems[0].img1.image, mosaicItems[0].img1.title)}
              className="group relative aspect-[4/3] rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-forest-900"
            >
              <img
                src={mosaicItems[0].img1.image}
                alt={mosaicItems[0].img1.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-sm font-bold tracking-wide">{mosaicItems[0].img1.title}</p>
                <p className="text-[11px] text-cream-200/90 font-light truncate">{mosaicItems[0].img1.sub}</p>
              </div>
            </div>

            {/* Image 2 */}
            <div
              onClick={() => onSelectImage && onSelectImage(mosaicItems[0].img2.image, mosaicItems[0].img2.title)}
              className="group relative aspect-square rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-forest-900"
            >
              <img
                src={mosaicItems[0].img2.image}
                alt={mosaicItems[0].img2.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-sm font-bold tracking-wide">{mosaicItems[0].img2.title}</p>
                <p className="text-[11px] text-cream-200/90 font-light truncate">{mosaicItems[0].img2.sub}</p>
              </div>
            </div>
          </div>

          {/* Column 2: Tall Feature Card (Width: 3 cols -> cols 4-6) */}
          <div className="lg:col-span-3 flex flex-col">
            <div
              onClick={() => onSelectImage && onSelectImage(mosaicItems[1].item.image, mosaicItems[1].item.title)}
              className="group relative h-[520px] rounded-none overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-forest-950"
            >
              <img
                src={mosaicItems[1].item.image}
                alt={mosaicItems[1].item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Top Handwritten Script Title like 'Michelangelo' in sample */}
              <div className="absolute top-4 inset-x-0 text-center z-10">
                <span className="font-script text-3xl sm:text-4xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] tracking-wide">
                  {mosaicItems[1].item.scriptTitle}
                </span>
              </div>

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-black/30 opacity-85 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute bottom-5 left-4 right-4 text-white z-10">
                <span className="inline-block px-2.5 py-0.5 rounded-none bg-amber-500/90 text-forest-950 font-bold text-[10px] tracking-wider uppercase mb-1.5">
                  ĐẶC SẮC
                </span>
                <p className="text-lg font-bold tracking-wide">{mosaicItems[1].item.title}</p>
                <p className="text-xs text-cream-200/90 font-light leading-relaxed mt-0.5">
                  {mosaicItems[1].item.sub}
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Center Column (Width: 2 cols -> cols 7-8) */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            {/* Top Image */}
            <div
              onClick={() => onSelectImage && onSelectImage(mosaicItems[2].img1.image, mosaicItems[2].img1.title)}
              className="group relative aspect-[4/3] rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-forest-900"
            >
              <img
                src={mosaicItems[2].img1.image}
                alt={mosaicItems[2].img1.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <p className="text-xs font-bold tracking-wide">{mosaicItems[2].img1.title}</p>
                <p className="text-[10px] text-cream-200/90 font-light truncate">{mosaicItems[2].img1.sub}</p>
              </div>
            </div>

            {/* Logo Badge */}
            <div className="flex items-center justify-center p-2 rounded-none bg-white/90 backdrop-blur-sm border border-forest-100 shadow-sm">
              <img src={mosaicItems[2].badge.logo} alt="Logo" className="w-7 h-7 rounded-none object-cover mr-2" />
              <span className="text-[11px] font-bold text-forest-900 tracking-wider">
                {mosaicItems[2].badge.text}
              </span>
            </div>

            {/* Bottom Image (New: fills empty bottom gap) */}
            <div
              onClick={() => onSelectImage && onSelectImage(mosaicItems[2].img2.image, mosaicItems[2].img2.title)}
              className="group relative aspect-square rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-forest-900"
            >
              <img
                src={mosaicItems[2].img2.image}
                alt={mosaicItems[2].img2.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <p className="text-xs font-bold tracking-wide">{mosaicItems[2].img2.title}</p>
                <p className="text-[10px] text-cream-200/90 font-light truncate">{mosaicItems[2].img2.sub}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Center-Right Column with Circular Frame & Bottom Image (Width: 2 cols -> cols 9-10) */}
          <div className="lg:col-span-2 flex flex-col items-center gap-3">
            {/* Top Mini Square Badge */}
            <div className="w-full py-1.5 px-3 rounded-none bg-forest-900 text-cream-100 text-center shadow-sm">
              <p className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                {mosaicItems[3].miniBadge.text}
              </p>
              <p className="text-[9px] text-cream-200/70">{mosaicItems[3].miniBadge.sub}</p>
            </div>

            {/* Square/Non-rounded Image */}
            <div
              onClick={() => onSelectImage && onSelectImage(mosaicItems[3].circleImg.image, mosaicItems[3].circleImg.title)}
              className="group relative w-36 h-36 rounded-none overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-amber-400/40 bg-forest-900"
            >
              <img
                src={mosaicItems[3].circleImg.image}
                alt={mosaicItems[3].circleImg.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-x-2 bottom-2.5 text-center text-white">
                <p className="text-[11px] font-bold tracking-wide">{mosaicItems[3].circleImg.title}</p>
                <p className="text-[8px] text-cream-200/90 font-light truncate">Gắn kết sôi nổi</p>
              </div>
            </div>

            {/* Floating Red/Amber Dots */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-rose-500 shadow-md transform hover:scale-125 transition-transform" />
              <div className="w-3 h-3 rounded-full bg-rose-400 shadow-sm" />
            </div>

            {/* Bottom Image (New: fills empty space under square) */}
            <div
              onClick={() => onSelectImage && onSelectImage(mosaicItems[3].img2.image, mosaicItems[3].img2.title)}
              className="w-full group relative aspect-[4/3] rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-forest-900"
            >
              <img
                src={mosaicItems[3].img2.image}
                alt={mosaicItems[3].img2.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <p className="text-xs font-bold tracking-wide">{mosaicItems[3].img2.title}</p>
                <p className="text-[10px] text-cream-200/90 font-light truncate">{mosaicItems[3].img2.sub}</p>
              </div>
            </div>
          </div>

          {/* Column 5: Right Column (Width: 2 cols -> cols 11-12) */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            {/* Top Horizontal Image */}
            <div
              onClick={() => onSelectImage && onSelectImage(mosaicItems[4].img1.image, mosaicItems[4].img1.title)}
              className="group relative aspect-[16/11] rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-forest-900"
            >
              <img
                src={mosaicItems[4].img1.image}
                alt={mosaicItems[4].img1.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <p className="text-xs font-bold tracking-wide">{mosaicItems[4].img1.title}</p>
              </div>
            </div>

            {/* Bottom Portrait Image & Small Badge */}
            <div className="relative">
              <div
                onClick={() => onSelectImage && onSelectImage(mosaicItems[4].img2.image, mosaicItems[4].img2.title)}
                className="group relative aspect-[3/4] rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-forest-900"
              >
                <img
                  src={mosaicItems[4].img2.image}
                  alt={mosaicItems[4].img2.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <p className="text-xs font-bold tracking-wide">{mosaicItems[4].img2.title}</p>
                  <p className="text-[9px] text-cream-200/90 font-light truncate">{mosaicItems[4].img2.sub}</p>
                </div>
              </div>

              {/* Small floating badge */}
              <div className="absolute -bottom-2 -right-1 bg-amber-500 text-forest-950 font-bold text-[9px] px-2 py-0.5 rounded-none shadow-md">
                {mosaicItems[4].miniFlagBadge.text}
              </div>
            </div>
          </div>

        </div>

        {/* Responsive Mobile / Tablet Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {/* Highlight Tall Card */}
          <div
            onClick={() => onSelectImage && onSelectImage(mosaicItems[1].item.image, mosaicItems[1].item.title)}
            className="sm:col-span-2 group relative h-72 rounded-none overflow-hidden shadow-lg cursor-pointer bg-forest-950"
          >
            <img
              src={mosaicItems[1].item.image}
              alt={mosaicItems[1].item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 inset-x-0 text-center z-10">
              <span className="font-script text-3xl font-bold text-white drop-shadow-md">
                {mosaicItems[1].item.scriptTitle}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-black/30 opacity-90" />
            <div className="absolute bottom-4 left-4 right-4 text-white z-10">
              <p className="text-lg font-bold">{mosaicItems[1].item.title}</p>
              <p className="text-xs text-cream-200/90">{mosaicItems[1].item.sub}</p>
            </div>
          </div>

          {/* Grid items for mobile */}
          {[
            mosaicItems[0].img1,
            mosaicItems[0].img2,
            mosaicItems[2].img1,
            mosaicItems[2].img2,
            mosaicItems[3].img2,
            mosaicItems[4].img1,
            mosaicItems[4].img2,
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectImage && onSelectImage(item.image, item.title)}
              className="group relative h-48 rounded-none overflow-hidden shadow-md cursor-pointer bg-forest-900"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-sm font-bold">{item.title}</p>
                {item.sub && <p className="text-xs text-cream-200/80 truncate">{item.sub}</p>}
              </div>
            </div>
          ))}

          {/* Team building card on mobile */}
          <div
            onClick={() => onSelectImage && onSelectImage(mosaicItems[3].circleImg.image, mosaicItems[3].circleImg.title)}
            className="sm:col-span-2 flex items-center gap-4 p-4 rounded-none bg-white shadow-md border border-forest-100 cursor-pointer"
          >
            <img
              src={mosaicItems[3].circleImg.image}
              alt={mosaicItems[3].circleImg.title}
              className="w-20 h-20 rounded-none object-cover border-2 border-amber-400"
            />
            <div>
              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">TEAM BUILDING</span>
              <p className="text-base font-bold text-forest-900">{mosaicItems[3].circleImg.title}</p>
              <p className="text-xs text-forest-700/80">{mosaicItems[3].circleImg.sub}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


