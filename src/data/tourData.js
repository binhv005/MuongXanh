export const tourData = {
  name: "Tour Bản Mường Xanh – Hòa Bình",
  tagline: "Thiên nhiên · Nghỉ dưỡng · Trải nghiệm",
  concept: "Một chuyến đi ngắn – một khoảng xanh để tái tạo năng lượng.",
  location: "Xóm Bằng Gà, xã Cao Sơn, huyện Lương Sơn, tỉnh Hòa Bình",
  distance: "~55,9 km từ Hà Nội",
  duration: "~1 giờ 47 phút",
  hotline: "0981.851.651",
  hotlineFormatted: "0981 851 651",
  zalo: "0981.851.651",
  zaloLink: "https://zalo.me/0981851651",
  email: "info@banmuongxanh.vn",
  openingHours: "08:00 – 18:30 (Thứ 2 – Chủ nhật, bao gồm lễ/Tết)",
  googleMapsLink: "https://maps.google.com/?q=B%E1%BA%A3n+M%C6%B0%E1%BB%9Dng+Xanh+H%C3%B2a+B%C3%ACnh",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119280.17462060126!2d105.4190835972656!3d20.892015200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31344589d81d2df5%3A0x8cfc3b7083fa3e1f!2zQuG6o24gTeG7sW5nIFhhbmg!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s",

  targetAudience: [
    "Gia đình",
    "Nhóm bạn",
    "Công ty / doanh nghiệp",
    "Cơ quan / tổ chức",
    "Đoàn Team Building"
  ],

  pricing: {
    oneDay: {
      title: "TOUR 1 NGÀY",
      price: "560.000đ",
      unit: "/người",
      secondaryPrice: "580.000đ", // Option in config for PM update
      children: "Trẻ 5–9 tuổi: 50% · Dưới 5 tuổi: miễn phí",
      cta: "ĐẶT TOUR 1 NGÀY",
      popular: false,
      features: [
        "Xe du lịch chất lượng cao đưa đón khứ hồi",
        "01 bữa ăn chính đặc sản Tây Bắc",
        "Vé vào cổng, tham quan trọn gói khu du lịch",
        "Khu nghỉ trưa cộng đồng thoáng mát",
        "Tự do sử dụng bể bơi & khu vui chơi",
        "Bảo hiểm du lịch 40.000.000đ/trường hợp",
        "Hướng dẫn viên tiếng Việt chu đáo",
        "Nước uống & quà tặng nón du lịch"
      ]
    },
    twoDayOneNight: {
      title: "TOUR 2 NGÀY 1 ĐÊM",
      price: "1.280.000đ",
      unit: "/người",
      secondaryPrice: "1.130.000đ", // Option in config for PM update
      children: "Trẻ 5–9 tuổi: 50% · Dưới 5 tuổi: miễn phí",
      cta: "NHẬN TƯ VẤN",
      popular: true,
      features: [
        "Xe du lịch đưa đón suốt hành trình",
        "Lưu trú phòng resort / bungalow / homestay",
        "03 bữa ăn chính + 01 bữa sáng vùng cao",
        "Trọn gói vé tham quan, check-in, bơi lội",
        "Không gian lửa trại & Gala đêm (theo yêu cầu)",
        "Bảo hiểm du lịch 40.000.000đ/trường hợp",
        "Hướng dẫn viên suốt tuyến tận tâm",
        "Miễn phí nước suối, khăn lạnh & nón du lịch"
      ]
    }
  },

  quickInfo: [
    { icon: "MapPin", title: "Hòa Bình", sub: "Điểm đến lý tưởng" },
    { icon: "Car", title: "~56 km từ Hà Nội", sub: "Gần & thuận tiện" },
    { icon: "Home", title: "Nghỉ dưỡng", sub: "Không gian trong lành" },
    { icon: "Users", title: "Gia đình & đoàn thể", sub: "Quy mô đa dạng" },
    { icon: "Sprout", title: "Thiên nhiên & văn hóa Mường", sub: "Trải nghiệm đặc sắc" }
  ],

  highlights: {
    subtitle: "Một không gian đủ xanh để nghỉ ngơi, đủ vui để khám phá và đủ rộng cho những chuyến đi cùng tập thể.",
    cards: [
      {
        id: "01",
        title: "Không gian xanh",
        desc: "Cây cối, núi rừng, không khí trong lành",
        image: "/images/801873413_1088843643675255_2033292637562162275_n.webp",
        featured: true
      },
      {
        id: "02",
        title: "Bể bơi ngoài trời",
        desc: "Thư giãn, giải nhiệt",
        image: "/images/663290374_1438142101661626_3103307602408845476_n.webp",
        featured: false
      },
      {
        id: "03",
        title: "Ẩm thực địa phương",
        desc: "Đặc sản núi rừng",
        image: "/images/582007449_1318369340305570_2342993087102399069_n.webp",
        featured: false
      }
    ],
    items: [
      { id: "01", title: "Khu lưu trú đa dạng", desc: "Resort, bungalow, homestay", icon: "Hotel" },
      { id: "04", title: "Nhiều hoạt động vui chơi", desc: "Khám phá, trải nghiệm, vận động", icon: "Compass" },
      { id: "05", title: "Khu vui chơi trẻ em", desc: "An toàn, thú vị", icon: "Smile" },
      { id: "06", title: "Team Building", desc: "Gắn kết, bứt phá", icon: "UsersRound" },
      { id: "07", title: "Văn hóa Mường", desc: "Bản sắc dân tộc độc đáo", icon: "Sparkles" },
      { id: "08", title: "Nhà hàng & ẩm thực địa phương", desc: "Hương vị núi rừng", icon: "Utensils" },
      { id: "09", title: "Nhiều góc check-in", desc: "Sống ảo, lưu giữ khoảnh khắc", icon: "Camera" }
    ]
  },

  whySection: {
    badge: "GIỚI THIỆU",
    // title: "WHY BẢN MƯỜNG XANH",
    heading: "RỜI XA PHỐ THỊ\nVỀ VỚI MỘT KHOẢNG XANH",
    description: "Bản Mường Xanh là điểm đến phù hợp cho những chuyến đi ngắn ngày từ Hà Nội, nơi kết hợp nghỉ dưỡng, vui chơi, trải nghiệm thiên nhiên và văn hóa người Mường.",
    stats: [
      { label: "Từ Hà Nội", value: "~56 KM", icon: "Navigation" },
      { label: "Di chuyển", value: "~1H47", icon: "Clock" }
    ],
    route: {
      start: "HÀ NỘI",
      end: "BẢN MƯỜNG XANH"
    },
    image: "/images/a93b18c4dcf1fc66d8d1d564d1d37379.webp"
  },

  itinerary: {
    badge: "LỊCH TRÌNH",
    title: "LỊCH TRÌNH TOUR 1 NGÀY",
    steps: [
      {
        time: "06:30",
        title: "Đón khách tại điểm hẹn Hà Nội",
        // desc: "Xe và hướng dẫn viên đón đoàn tại điểm hẹn quy định, khởi hành đi Bản Mường Xanh.",
        image: "/images/801873413_1088843643675255_2033292637562162275_n.webp"
      },
      {
        time: "08:00",
        title: "Đến Bản Mường Xanh, nhận phòng/nghỉ đồ",
        // desc: "Đoàn đặt chân tới Bản Mường Xanh, nghỉ ngơi, cất hành lý tại nhà cộng đồng.",
        image: "/images/656556675_1428784739264029_499076971320786787_n.webp"
      },
      {
        time: "09:00",
        title: "Team Building",
        // desc: "Tham gia chương trình Team Building sôi nổi với các trò chơi gắn kết (Áp dụng cho đoàn từ 40 thành viên).",
        image: "/images/599015890_1344379244371246_5244086278288389604_n.webp"
      },
      {
        time: "11:30",
        title: "Ăn trưa và nghỉ ngơi",
        // desc: "Thưởng thức mâm cỗ ẩm thực địa phương mang đậm phong vị núi rừng Tây Bắc.",
        image: "/images/582007449_1318369340305570_2342993087102399069_n.webp"
      },
      {
        time: "14:00",
        title: "Tự do vui chơi & trải nghiệm văn hóa",
        // desc: "Tự do vui chơi, bơi lội, check-in, tham gia múa sạp và trải nghiệm văn hóa Mường.",
        image: "/images/819742812_1594724989336669_6586786425129735545_n.webp"
      },
      {
        time: "16:00",
        title: "Khởi hành về Hà Nội",
        // desc: "Tập trung thu dọn hành lý, mua đặc sản Hòa Bình làm quà và lên xe khởi hành về lại Hà Nội.",
        image: "/images/797754738_1576910697784765_7870036743491608825_n.webp"
      },
      {
        time: "17:15",
        title: "Về đến điểm hẹn",
        // desc: "Xe đưa quý khách về điểm hẹn ban đầu an toàn. Kết thúc chuyến đi tràn đầy năng lượng.",
        image: "/images/825279413_1596829412459560_2070894234638892334_n.webp"
      }
    ]
  },

  includedServices: {
    badge: "DỊCH VỤ",
    title: "ĐÃ BAO GỒM TRONG HÀNH TRÌNH",
    items: [
      "Xe du lịch đưa đón theo lịch trình",
      "01 bữa ăn chính",
      "Khu nghỉ trưa cộng đồng",
      "Vé vào cổng, tham quan và vui chơi",
      "Bảo hiểm du lịch 40.000.000đ/trường hợp",
      "Nước uống trên xe",
      "Hướng dẫn viên tiếng Việt",
      "Tặng 01 nón/khách"
    ],
    teamBuildingHighlight: {
      title: "TEAM BUILDING",
      subtitle: "Dành cho đoàn từ 40 thành viên:",
      features: [
        "Âm thanh",
        "Áo đội",
        "MC",
        "Kịch bản",
        "Đạo cụ"
      ]
    }
  },

  activities: {
    badge: "HOẠT ĐỘNG & TIỆN ÍCH",
    title: "TRẢI NGHIỆM ĐA DẠNG TẠI BẢN MƯỜNG XANH",
    list: [
      {
        id: "01",
        name: "BỂ BƠI",
        desc: "Bể bơi vô cực ngoài trời giữa không gian núi rừng xanh mát",
        image: "/images/661475983_1438142651661571_5393163635704002534_n.webp"
      },
      {
        id: "02",
        name: "TEAM BUILDING",
        desc: "Sân cỏ rộng lớn cùng hệ thống trò chơi gắn kết tập thể đỉnh cao",
        image: "/images/775281929_1369817118699033_150235118027896219_n.webp"
      },
      {
        id: "03",
        name: "KHU VUI CHƠI TRẺ EM",
        desc: "Không gian vui chơi vận động, tô tượng và trò chơi dân gian an toàn",
        image: "/images/698949158_1474610458014790_561538429231984111_n.webp"
      },
      {
        id: "04",
        name: "CHECK-IN",
        desc: "Vô vàn góc sống ảo tuyệt đẹp giữa thiên nhiên nguyên sơ",
        image: "/images/797754738_1576910697784765_7870036743491608825_n.webp"
      },
      {
        id: "05",
        name: "ẨM THỰC",
        desc: "Thưởng thức gà đồi nướng tre, lợn bản, xôi nương và rau rừng",
        image: "/images/582007449_1318369340305570_2342993087102399069_n.webp"
      },
      {
        id: "06",
        name: "VĂN HÓA MƯỜNG",
        desc: "Múa sạp, cồng chiêng, trang phục truyền thống và giao lưu đốt lửa trại",
        image: "/images/658128372_1429709552504881_3215632321816560114_n.webp"
      }
    ]
  },

  gallery: {
    badge: "GALLERY",
    title: "NHÌN THẤY CHUYẾN ĐI TRƯỚC KHI KHỞI HÀNH",
    subtitle: "HÌNH ẢNH THỰC TẾ",
    featuredVideo: {
      poster: "/images/801284629_1757012948849297_5903687733937689565_n.webp",
      videoSrc: "/videos/welcome.mp4",
      title: "Toàn cảnh Bản Mường Xanh",
      caption: "Khám phá video thực tế khuôn viên và các hoạt động"
    },
    images: [
      {
        src: "/images/661475983_1438142651661571_5393163635704002534_n.webp",
        title: "Bể bơi xanh mát",
        category: "Nghỉ dưỡng"
      },
      {
        src: "/images/658128372_1429709552504881_3215632321816560114_n.webp",
        title: "Văn hóa Mường đặc sắc",
        category: "Văn hóa"
      },
      {
        src: "/images/640449432_1403761058433064_4869839422715905176_n.webp",
        title: "Nông trại vui vẻ & Đoàn trải nghiệm",
        category: "Hoạt động"
      },
      {
        src: "/images/819742812_1594724989336669_6586786425129735545_n.webp",
        title: "Giao lưu múa sạp truyền thống",
        category: "Trải nghiệm"
      },
      {
        src: "/images/775281929_1369817118699033_150235118027896219_n.webp",
        title: "Team Building gắn kết",
        category: "Team Building"
      },
      {
        src: "/images/803101776_2314573029279816_1501408313838242192_n.webp",
        title: "Đêm Gala Lửa Trại rực rỡ",
        category: "Sự kiện"
      }
    ],
    videoList: [
      {
        id: "vid-1",
        title: "Welcome to Bản Mường Xanh",
        src: "/videos/welcome.mp4"
      },
      {
        id: "vid-2",
        title: "Trải nghiệm 1 ngày tại Bản Mường Xanh",
        src: "/videos/trai-nghiem-1-ngay.mp4"
      },
      {
        id: "vid-3",
        title: "Gala Dinner tại Bản (1500 học sinh)",
        src: "/videos/gala-dinner.mp4"
      },
      {
        id: "vid-4",
        title: "Chia sẻ cảm nhận sau chuyến đi",
        src: "/videos/chia-se-cam-nhan.mp4"
      }
    ]
  },

  groupBooking: {
    heading: "ĐI THEO NHÓM?\nCHUYẾN ĐI CÀNG VUI.",
    highlight: "40+ THÀNH VIÊN",
    content: "Không gian phù hợp cho các đoàn công ty, doanh nghiệp, cơ quan, tổ chức và nhóm bạn.",
    audiences: [
      { title: "Công ty / doanh nghiệp", desc: "Không gian rộng rãi, đầy đủ âm thanh sân khấu" },
      { title: "Cơ quan / tổ chức", desc: "Phù hợp dã ngoại kết hợp hội nghị, giao lưu" },
      { title: "Nhóm từ 25 người", desc: "Ưu đãi đoàn riêng biệt, dịch vụ tận tâm" },
      { title: "Team Building từ 40 người", desc: "Tặng trọn gói MC, kịch bản, đạo cụ, áo đội" }
    ],
    cta: "NHẬN BÁO GIÁ ĐOÀN",
    bgImage: "/images/786562262_1617639326601104_7256444514703191972_n.webp"
  },

  testimonials: {
    badge: "CẢM NHẬN",
    title: "ĐÁNH GIÁ KHÁCH HÀNG",
    list: [
      {
        id: 1,
        quote: "Một chuyến đi tuyệt vời! Không gian rất trong lành, dịch vụ chuyên nghiệp, đồ ăn ngon. Gia đình mình ai cũng hài lòng!",
        name: "Chị Lan Anh",
        role: "Khách hàng Hà Nội",
        rating: 5,
        avatar: "/images/825279413_1596829412459560_2070894234638892334_n.webp"
      },
      {
        id: 2,
        quote: "Team building ở đây cực kỳ ý nghĩa, không khí vui vẻ, gắn kết mọi người. Chắc chắn sẽ quay lại!",
        name: "Anh Minh Tuấn",
        role: "Doanh nghiệp Hà Nội",
        rating: 5,
        avatar: "/images/685630022_1457633013045868_5505451859617700775_n.webp"
      },
      {
        id: 3,
        quote: "Phong cảnh đẹp, nhiều góc chụp hình xịn. Rất phù hợp cho cả gia đình và nhóm bạn. Giá cả hợp lý!",
        name: "Chị Hương",
        role: "Khách hàng cá nhân",
        rating: 5,
        avatar: "/images/797754738_1576910697784765_7870036743491608825_n.webp"
      }
    ]
  },

  locationSection: {
    badge: "ĐỊA ĐIỂM",
    title: "ĐI ĐÂU?",
    address: "Xóm Bằng Gà, xã Cao Sơn, huyện Lương Sơn, tỉnh Hòa Bình",
    schedule: "08:00 – 18:30 · Thứ 2 – Chủ nhật · Bao gồm lễ/Tết",
    cta: "XEM CHỈ ĐƯỜNG GOOGLE MAPS"
  },

  faqs: {
    badge: "FAQ",
    title: "CÂU HỎI THƯỜNG GẶP",
    items: [
      {
        q: "Tour 1 ngày giá bao nhiêu?",
        a: "Tour 1 ngày trọn gói hiện có mức giá 560.000đ/người (giá có thể điều chỉnh tùy số lượng đoàn và thời điểm). Đã bao gồm xe đưa đón khứ hồi từ Hà Nội, bữa ăn chính, vé tham quan, khu nghỉ trưa và bảo hiểm du lịch."
      },
      {
        q: "Tour 2 ngày 1 đêm giá bao nhiêu?",
        a: "Tour 2 ngày 1 đêm trọn gói có giá 1.280.000đ/người. Bao gồm lưu trú tại phòng nghỉ dưỡng / bungalow / nhà sàn cộng đồng, trọn gói các bữa ăn, vé tham quan bơi lội và các hoạt động trải nghiệm."
      },
      {
        q: "Trẻ em tính giá như thế nào?",
        a: "Chính sách giá cho trẻ em: Trẻ em từ 5 đến 9 tuổi tính 50% giá tour người lớn; Trẻ em dưới 5 tuổi được hoàn toàn MIỄN PHÍ khi đi cùng bố mẹ."
      },
      {
        q: "Tour bao gồm những dịch vụ gì?",
        a: "Hành trình bao gồm trọn gói: Xe du lịch máy lạnh đưa đón khứ hồi, 01 bữa ăn chính đặc sản, vé tham quan vui chơi, khu nghỉ trưa cộng đồng, bảo hiểm du lịch (mức 40.000.000đ/vụ), hướng dẫn viên, nước uống và nón du lịch tặng kèm."
      },
      {
        q: "Đoàn bao nhiêu người được tổ chức Team Building?",
        a: "Chương trình Team Building được tặng trọn gói (gồm âm thanh sân khấu, MC hoạt náo, áo đội, kịch bản trò chơi và đạo cụ thi đấu) dành riêng cho các đoàn thể có từ 40 thành viên trở lên."
      },
      {
        q: "Bản Mường Xanh ở đâu?",
        a: "Bản Mường Xanh tọa lạc tại Xóm Bằng Gà, xã Cao Sơn, huyện Lương Sơn, tỉnh Hòa Bình. Cách trung tâm Hà Nội khoảng 55,9 km (khoảng 1 giờ 47 phút di chuyển theo đường cao tốc/quốc lộ thuận tiện)."
      },
      {
        q: "Có bể bơi và khu vui chơi trẻ em không?",
        a: "Có. Khu du lịch có bể bơi ngoài trời giải nhiệt giữa thiên nhiên, cùng khu vui chơi trẻ em với nhiều trò chơi vận động, tô tượng và bãi cỏ rộng rãi, an toàn cho các bé."
      },
      {
        q: "Có hỗ trợ đoàn công ty/doanh nghiệp không?",
        a: "Có. Chúng tôi chuyên tổ chức sự kiện trọn gói cho công ty, doanh nghiệp, trường học với dịch vụ Team Building chuyên nghiệp, gala dinner, lửa trại và xuất hóa đơn VAT đầy đủ theo yêu cầu."
      }
    ]
  },

  finalCta: {
    heading: "CUỐI TUẦN NÀY,\nMÌNH ĐI ĐÂU?",
    ctaPrimary: "ĐẶT TOUR NGAY",
    ctaSecondary: "NHẬN BÁO GIÁ ĐOÀN"
  },

  formSection: {
    cursiveHeader: "Sẵn sàng cho chuyến đi của bạn?",
    heading: "SẴN SÀNG CHO CHUYẾN ĐI?",
    subheading: "Để lại thông tin, đội ngũ tư vấn sẽ liên hệ để gửi lịch trình và báo giá phù hợp.",
    cta: "NHẬN TƯ VẤN & BÁO GIÁ",
    hotlineText: "HOTLINE / ZALO: 0981.851.651"
  }
};
