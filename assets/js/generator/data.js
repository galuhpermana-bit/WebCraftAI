// ══════════════════════════════════════════════
//  WebCraft AI — generator/data.js
//  Semua data: palet warna & template konten
// ══════════════════════════════════════════════

const palettes = {
  hangat: {
    primary:'#D94F0A', nav:'#1a0800', bg:'#FFF8F5', accent:'#FF6B35',
    text:'#1a0a00', muted:'#8B4513', btn:'#D94F0A', btnHover:'#BF3A00',
    card:'#FFF0E8', border:'#FFD5B8', tag:'#FF6B35', tagBg:'rgba(217,79,10,0.1)',
    font:'Playfair+Display:wght@700;800|Lato:wght@300;400;700',
    fontHead:'Playfair Display', fontBody:'Lato'
  },
  segar: {
    primary:'#0F7A5A', nav:'#001a0f', bg:'#F0FDF7', accent:'#1DB97A',
    text:'#001a0f', muted:'#2D6A4F', btn:'#0F7A5A', btnHover:'#0A6047',
    card:'#E8FBF2', border:'#B7EDD5', tag:'#0F7A5A', tagBg:'rgba(15,122,90,0.1)',
    font:'Plus+Jakarta+Sans:wght@400;500;700;800',
    fontHead:'Plus Jakarta Sans', fontBody:'Plus Jakarta Sans'
  },
  profesional: {
    primary:'#1A5FA8', nav:'#050D1A', bg:'#F3F8FF', accent:'#3B82F6',
    text:'#000d1a', muted:'#1E4D8C', btn:'#1A5FA8', btnHover:'#144D8A',
    card:'#EBF3FF', border:'#BFDBFE', tag:'#1A5FA8', tagBg:'rgba(26,95,168,0.1)',
    font:'DM+Sans:wght@300;400;500;700|DM+Serif+Display',
    fontHead:'DM Serif Display', fontBody:'DM Sans'
  },
  elegan: {
    primary:'#4A35B5', nav:'#08051A', bg:'#F5F3FF', accent:'#7C6EFF',
    text:'#0a0818', muted:'#3D2F8A', btn:'#4A35B5', btnHover:'#3A2899',
    card:'#EEEBff', border:'#D4CFFF', tag:'#4A35B5', tagBg:'rgba(74,53,181,0.1)',
    font:'Cormorant+Garamond:wght@400;600;700|Inter:wght@300;400;500',
    fontHead:'Cormorant Garamond', fontBody:'Inter'
  },

  /* ── PALET BARU ─────────────────────────────── */

  rose: {
    primary:'#C2185B', nav:'#1A0010', bg:'#FFF5F8', accent:'#E91E8C',
    text:'#1a0010', muted:'#880E4F', btn:'#C2185B', btnHover:'#AD1457',
    card:'#FFE8F0', border:'#F8BBD9', tag:'#C2185B', tagBg:'rgba(194,24,91,0.10)',
    font:'Josefin+Sans:wght@300;400;600;700|Lora:wght@400;700',
    fontHead:'Lora', fontBody:'Josefin Sans'
  },
  coklat: {
    primary:'#6D4C41', nav:'#1A0C08', bg:'#FDF6F0', accent:'#A1887F',
    text:'#1a0c08', muted:'#5D4037', btn:'#6D4C41', btnHover:'#5D4037',
    card:'#FBF0E8', border:'#E8D5C4', tag:'#6D4C41', tagBg:'rgba(109,76,65,0.10)',
    font:'Merriweather:wght@300;400;700|Nunito:wght@300;400;600;700',
    fontHead:'Merriweather', fontBody:'Nunito'
  },
  slate: {
    primary:'#1E3A5F', nav:'#0A0E14', bg:'#F2F5F9', accent:'#4A90A4',
    text:'#0a0e14', muted:'#2C4A6E', btn:'#1E3A5F', btnHover:'#162C47',
    card:'#E8EEF5', border:'#BDD0E8', tag:'#1E3A5F', tagBg:'rgba(30,58,95,0.10)',
    font:'Space+Grotesk:wght@300;400;500;700|Fraunces:ital,wght@0,400;0,700',
    fontHead:'Fraunces', fontBody:'Space Grotesk'
  },
  zaitun: {
    primary:'#5B6B2F', nav:'#0E1208', bg:'#F6F8F0', accent:'#8FA84A',
    text:'#0e1208', muted:'#4A5528', btn:'#5B6B2F', btnHover:'#4A5825',
    card:'#EEF2E4', border:'#D0DBA8', tag:'#5B6B2F', tagBg:'rgba(91,107,47,0.10)',
    font:'Libre+Baskerville:wght@400;700|Source+Sans+3:wght@300;400;600',
    fontHead:'Libre Baskerville', fontBody:'Source Sans 3'
  }
};

const templates = {
  kuliner: {
    headline: 'Cita Rasa yang Tak Terlupakan',
    sub: 'Hidangan lezat dengan bahan pilihan segar setiap hari. Menyajikan pengalaman kuliner terbaik untuk keluarga Anda.',
    emoji: '🍽️',
    badge: 'Buka Setiap Hari',
    tagline: 'Masak dengan Cinta, Sajikan dengan Bangga',
    stats: [
      { num: '500+', label: 'Pelanggan Setia' },
      { num: '15+',  label: 'Menu Pilihan' },
      { num: '4.9★', label: 'Rating Google' },
    ],
    categories: ['Makanan Utama', 'Camilan', 'Minuman'],
    menuItems: [
      { name:'Nasi Goreng Spesial',  price:'Rp 18.000', desc:'Bumbu rahasia turun-temurun, telur mata sapi',    cat:'Makanan Utama', badge:'🔥 Best Seller' },
      { name:'Mie Ayam Bakso',       price:'Rp 15.000', desc:'Kuah kaldu sapi asli, bakso homemade',            cat:'Makanan Utama', badge:'⭐ Favorit' },
      { name:'Soto Betawi',          price:'Rp 20.000', desc:'Santan segar, isian lengkap, kerupuk rambak',     cat:'Makanan Utama', badge:'' },
      { name:'Ayam Bakar Kecap',     price:'Rp 22.000', desc:'Ayam kampung, marinade 12 jam',                  cat:'Makanan Utama', badge:'🆕 Baru' },
      { name:'Pisang Goreng Crispy', price:'Rp 8.000',  desc:'Tepung renyah, topping coklat/keju',             cat:'Camilan',       badge:'🔥 Hot' },
      { name:'Tahu Isi Pedas',       price:'Rp 6.000',  desc:'Isi sayur segar, sambal rawit',                  cat:'Camilan',       badge:'' },
      { name:'Es Teh Manis',         price:'Rp 5.000',  desc:'Teh pilihan premium, gula aren',                 cat:'Minuman',       badge:'' },
      { name:'Jus Alpukat',          price:'Rp 12.000', desc:'Alpukat Garut, susu full cream',                 cat:'Minuman',       badge:'💚 Sehat' },
    ],
    testimonials: [
      { name:'Budi Santoso', role:'Pelanggan Tetap', text:'Udah 3 tahun langganan, rasanya konsisten enak banget! Nasi gorengnya juara.', stars:5 },
      { name:'Dewi Rahayu',  role:'Food Blogger',    text:'Tempat makan hidden gem! Harga terjangkau, porsi besar, rasa nggak kalah sama resto mahal.', stars:5 },
      { name:'Andi Pratama', role:'Pelanggan',        text:'Pelayanannya ramah, makanannya cepat datang. Cocok buat makan siang keluarga.', stars:4 },
    ]
  },
  fashion: {
    headline: 'Style Your Story',
    sub: 'Koleksi fashion kontemporer yang memadukan estetika modern dengan kenyamanan sehari-hari. Ekspresikan dirimu.',
    emoji: '✦',
    badge: 'New Collection',
    tagline: 'Where Style Meets Comfort',
    stats: [
      { num: '200+', label: 'Koleksi Tersedia' },
      { num: '1.2K', label: 'Happy Customers' },
      { num: 'Free', label: 'Ongkir > 200rb' },
    ],
    categories: ['Women', 'Men', 'Accessories'],
    menuItems: [
      { name:'Outer Knit Premium', price:'Rp 235.000', desc:'Bahan wool blend, tersedia 6 warna',   cat:'Women',       badge:'🔥 Trending' },
      { name:'Dress Midi Slit',    price:'Rp 189.000', desc:'Rayon viscose, flow & elegant',        cat:'Women',       badge:'⭐ Best Pick' },
      { name:'Set Coord Linen',    price:'Rp 299.000', desc:'Top + celana, casual chic look',       cat:'Women',       badge:'🆕 New' },
      { name:'Kemeja Oversize',    price:'Rp 165.000', desc:'Oxford cotton, unisex fit',            cat:'Men',         badge:'🔥 Hot' },
      { name:'Celana Cargo Slim',  price:'Rp 210.000', desc:'Twill stretch, multi pocket',          cat:'Men',         badge:'' },
      { name:'Tote Bag Canvas',    price:'Rp 85.000',  desc:'14oz canvas, sablon premium',          cat:'Accessories', badge:'💛 Fav' },
      { name:'Scrunchie Set',      price:'Rp 45.000',  desc:'Satin + velvet, isi 3 pcs',            cat:'Accessories', badge:'' },
      { name:'Kacamata Retro',     price:'Rp 125.000', desc:'Frame acetate, UV400 lens',            cat:'Accessories', badge:'🆕 New' },
    ],
    testimonials: [
      { name:'Rania K.', role:'Fashion Enthusiast', text:'Kualitasnya beneran bagus! Jahitannya rapi, bahan adem, ukurannya pas. Puas banget!', stars:5 },
      { name:'Mega S.',  role:'Repeat Customer',    text:'Udah order 5x, selalu puas. Packagingnya cantik dan pengiriman cepat.', stars:5 },
      { name:'Tara D.',  role:'Pelanggan',           text:'Dress midi-nya aesthetic banget, banyak yang nanya beli dimana. Worth it!', stars:5 },
    ]
  },
  jasa: {
    headline: 'Solusi Profesional, Hasil Terjamin',
    sub: 'Tim teknisi berpengalaman siap menangani kebutuhan Anda dengan cepat, tepat, dan bergaransi.',
    emoji: '⚙️',
    badge: 'Bergaransi Resmi',
    tagline: 'Fast · Reliable · Affordable',
    stats: [
      { num: '800+',  label: 'Proyek Selesai' },
      { num: '5 Thn', label: 'Pengalaman' },
      { num: '24/7',  label: 'Siap Dipanggil' },
    ],
    categories: ['AC & Elektronik', 'Rumah & Bangunan', 'Kendaraan'],
    menuItems: [
      { name:'Servis AC Split',      price:'Rp 75.000',    desc:'Cuci, cek freon, bersihkan filter. Bergaransi 1 bulan', cat:'AC & Elektronik',    badge:'🔥 Terlaris' },
      { name:'Instalasi AC Baru',    price:'Rp 300.000',   desc:'Pasang unit baru, termasuk pipa 3m',                    cat:'AC & Elektronik',    badge:'' },
      { name:'Servis Kulkas',        price:'Rp 100.000',   desc:'Diagnosa + perbaikan komponen, bergaransi',             cat:'AC & Elektronik',    badge:'⭐ Terpercaya' },
      { name:'Instalasi Listrik',    price:'Rp 150.000',   desc:'Pasang stop kontak, saklar, MCB, bergaransi 1 tahun',   cat:'Rumah & Bangunan',   badge:'' },
      { name:'Atasi Kebocoran',      price:'Rp 200.000',   desc:'Waterproofing atap & dinding, material premium',        cat:'Rumah & Bangunan',   badge:'🆕 Baru' },
      { name:'Cat Interior',         price:'Rp 35.000/m²', desc:'Cat Dulux/Catylac, 2 lapis, rapi & bersih',            cat:'Rumah & Bangunan',   badge:'' },
      { name:'Tune Up Motor',        price:'Rp 85.000',    desc:'Ganti oli + filter + busi, semua merek',                cat:'Kendaraan',          badge:'🔥 Populer' },
      { name:'Tambal Ban Tubeless',  price:'Rp 35.000',    desc:'Metode cacing & tambalan dalam',                        cat:'Kendaraan',          badge:'' },
    ],
    testimonials: [
      { name:'Pak Hendra', role:'Pelanggan AC',      text:'Teknisinya datang tepat waktu, kerja bersih dan profesional. AC sekarang dingin banget!', stars:5 },
      { name:'Bu Sari',    role:'Pelanggan Listrik', text:'Masalah listrik rumah beres dalam 2 jam. Harga sesuai, nggak ada biaya tersembunyi.', stars:5 },
      { name:'Mas Doni',   role:'Pelanggan Motor',   text:'Tune up motornya oke, nggak lebay nyuruh ganti part. Jujur dan terjangkau.', stars:4 },
    ]
  },
  properti: {
    headline: 'Temukan Rumah yang\nBenar-Benar Milik Anda',
    sub: 'Properti premium & furnitur eksklusif pilihan para ahli. Investasi terbaik untuk kehidupan yang lebih nyaman dan bermakna.',
    emoji: '🏡',
    badge: 'Properti & Mebel Premium',
    tagline: 'Rumah Bukan Sekadar Tempat Tinggal — Ini Adalah Karya Seni',
    stats: [
      { num: '120+', label: 'Unit Terjual' },
      { num: '15+',  label: 'Tahun Pengalaman' },
      { num: '4.9★', label: 'Rating Klien' },
    ],
    categories: ['Dijual', 'Disewakan', 'Furnitur & Mebel'],
    menuItems: [
      { name:'Rumah Cluster Modern',     price:'Rp 850 Juta',     desc:'3KT 2KM, carport 2 mobil, akses tol 5 menit',         cat:'Dijual',           badge:'🔥 Ready Stock' },
      { name:'Townhouse Premium',        price:'Rp 1,2 Miliar',   desc:'4KT 3KM, rooftop, smart home system, SHM',            cat:'Dijual',           badge:'⭐ Best Value'  },
      { name:'Kavling Strategis',        price:'Rp 480 Juta',     desc:'120m², hook corner, dekat sekolah & mall',             cat:'Dijual',           badge:'🆕 New'         },
      { name:'Ruko 3 Lantai',            price:'Rp 2,1 Miliar',   desc:'Lebar 5m, parkir luas, cocok usaha F&B',              cat:'Dijual',           badge:'💼 Investasi'   },
      { name:'Apartemen 2BR Furnished',  price:'Rp 6,5 Juta/bln', desc:'Fully furnished, AC & WiFi, dekat CBD',               cat:'Disewakan',        badge:'🔥 Favorit'     },
      { name:'Ruko Gandeng 2 Unit',      price:'Rp 18 Juta/bln',  desc:'Hook sudut, parkir basement, siap pakai',             cat:'Disewakan',        badge:''               },
      { name:'Sofa Sectional L-Shape',   price:'Rp 7,8 Juta',     desc:'Bahan microfiber premium, foam high-density 28D',     cat:'Furnitur & Mebel', badge:'🔥 Terlaris'    },
      { name:'Set Kamar Tidur Minimalis',price:'Rp 12,5 Juta',    desc:'Tempat tidur + 2 nakas + lemari 3 pintu, kayu jati',  cat:'Furnitur & Mebel', badge:'⭐ Best Set'    },
    ],
    testimonials: [
      { name:'Keluarga Wijaya',  role:'Pembeli Rumah Cluster', text:'Prosesnya mudah dan transparan. Tim sangat profesional, bantu urusan KPR sampai selesai. Terima kasih!', stars:5 },
      { name:'Bapak Hendra S.', role:'Investor Properti',     text:'Sudah 3 unit properti saya beli disini. ROI-nya bagus, lokasi selalu strategis. Highly recommended!', stars:5 },
      { name:'Ibu Rini M.',     role:'Pembeli Sofa',          text:'Sofa-nya persis seperti di foto, kualitas jauh lebih bagus dari ekspektasi. Pengiriman dan pemasangan rapi.', stars:5 },
    ]
  },
  toko: {
    headline: 'Semua Ada, Harga Bersahabat',
    sub: 'Ribuan produk pilihan dengan kualitas terjamin. Belanja mudah, hemat, dan langsung dari tangan ke tangan.',
    emoji: '🛒',
    badge: 'Grosir & Eceran',
    tagline: 'Lebih Hemat, Lebih Lengkap',
    stats: [
      { num: '5.000+', label: 'Produk Tersedia' },
      { num: 'Gratis', label: 'Ongkir > 100rb' },
      { num: '08.00',  label: 'Buka Pagi' },
    ],
    categories: ['Sembako', 'Snack & Minuman', 'Kebutuhan Rumah'],
    menuItems: [
      { name:'Beras Premium 5kg',    price:'Rp 68.000',  desc:'Beras pulen Cianjur, pilihan ibu rumah tangga',          cat:'Sembako',           badge:'🔥 Terlaris' },
      { name:'Minyak Goreng 2L',     price:'Rp 29.000',  desc:'Minyak tropical, jernih & berkualitas',                  cat:'Sembako',           badge:'⭐ Hemat' },
      { name:'Gula Pasir 1kg',       price:'Rp 14.500',  desc:'Gula kristal putih, SNI terjamin',                      cat:'Sembako',           badge:'' },
      { name:'Paket Sembako Komplit',price:'Rp 155.000', desc:'Beras 2kg + minyak 1L + gula 500gr + telur 10pcs',      cat:'Sembako',           badge:'💰 Hemat Paket' },
      { name:'Snack Kiloan Mix',     price:'Rp 35.000/kg',desc:'Aneka pilihan kripik, biskuit, permen',                cat:'Snack & Minuman',   badge:'🔥 Hot' },
      { name:'Minuman Kotak 200ml',  price:'Rp 5.500/pcs',desc:'Teh, jus, susu — berbagai merek',                     cat:'Snack & Minuman',   badge:'' },
      { name:'Sabun Mandi Batang',   price:'Rp 4.500',   desc:'Lifebuoy, Lux, Dove — stok lengkap',                   cat:'Kebutuhan Rumah',   badge:'' },
      { name:'Deterjen Bubuk 1kg',   price:'Rp 18.000',  desc:'Attack, Rinso, So Klin tersedia',                      cat:'Kebutuhan Rumah',   badge:'⭐ Pilihan' },
    ],
    testimonials: [
      { name:'Bu Rina',  role:'Ibu Rumah Tangga', text:'Belanjaannya lengkap, harga lebih murah dari supermarket. Tinggal telepon, langsung diantar!', stars:5 },
      { name:'Pak Agus', role:'Pemilik Warung',   text:'Kulakan disini udah 2 tahun. Harga grosir, kualitas oke, pelayanan ramah.', stars:5 },
      { name:'Desi',     role:'Pelanggan Online', text:'Pesan via WA gampang banget, barang dikemas rapi dan cepat sampai.', stars:4 },
    ]
  },

  laundry: {
    headline: 'Bersih, Harum,\nTepat Waktu',
    sub: 'Layanan laundry profesional untuk pakaian, karpet, kasur, sepatu, dan lainnya. Antar jemput, harga terjangkau, hasil memuaskan.',
    emoji: '👕',
    badge: 'Laundry Profesional · Express 24 Jam',
    tagline: 'Setiap Cucian Kami Perlakukan Seperti Milik Sendiri',
    stats: [
      { num: '1000+', label: 'Pelanggan Setia' },
      { num: '24 Jam', label: 'Layanan Express' },
      { num: '4.9★',  label: 'Rating Google' },
    ],
    categories: ['Cuci Reguler', 'Express & Premium', 'Karpet & Spesial'],
    menuItems: [
      {
        name:'Paket Cuci Kiloan', price:'Rp 7.000', unit:'/ kg',
        desc:'Cuci + kering + lipat rapi. Min. 2kg. Selesai 2–3 hari kerja.',
        cat:'Cuci Reguler', badge:'🔥 Paling Laris', featured:false,
        features:['Cuci bersih sempurna','Kering sempurna','Dilipat rapi','Wangi tahan lama'],
      },
      {
        name:'Paket Cuci + Setrika', price:'Rp 9.000', unit:'/ kg',
        desc:'Cuci bersih + setrika rapi siap pakai. Min. 2kg.',
        cat:'Cuci Reguler', badge:'⭐ Best Value', featured:true,
        features:['Cuci bersih sempurna','Setrika rapi','Siap pakai langsung','Dikemas plastik bersih'],
      },
      {
        name:'Cuci Satuan Kemeja', price:'Rp 8.000', unit:'/ pcs',
        desc:'Dicuci & disetrika per helai, cocok untuk baju kerja & formal.',
        cat:'Cuci Reguler', badge:'', featured:false,
        features:['Handling khusus bahan halus','Setrika presisi','Siap digantung'],
      },
      {
        name:'Express 1 Hari', price:'Rp 12.000', unit:'/ kg',
        desc:'Order pagi, selesai sore hari. Antar ke rumah sore/malam.',
        cat:'Express & Premium', badge:'⚡ Kilat', featured:false,
        features:['Selesai dalam 12 jam','Prioritas antrian','Notifikasi WhatsApp','Antar gratis'],
      },
      {
        name:'Premium Dry Cleaning', price:'Rp 35.000', unit:'/ pcs',
        desc:'Untuk baju jas, gaun, kebaya, dan bahan delicate. Aman & bersih.',
        cat:'Express & Premium', badge:'💎 Premium', featured:false,
        features:['Chemical khusus delicate','Handling sangat hati-hati','Pengemasan premium','Garansi kualitas'],
      },
      {
        name:'Cuci Karpet', price:'Rp 15.000', unit:'/ m²',
        desc:'Karpet permadani, karpet vinyl, semua ukuran. Dijemput & diantar.',
        cat:'Karpet & Spesial', badge:'🛋️ Spesial', featured:false,
        features:['Jemput & antar','Sikat dalam + luar','Dikeringkan sempurna','Bebas tungau & bau'],
      },
      {
        name:'Cuci Kasur / Bantal', price:'Rp 50.000', unit:'/ pcs',
        desc:'Kasur single/double, bantal, guling. Bersih dari tungau & bakteri.',
        cat:'Karpet & Spesial', badge:'🛌 Sehat', featured:false,
        features:['Anti tungau & bakteri','UV treatment','Jemput & antar','Packaging rapi'],
      },
      {
        name:'Cuci Sepatu', price:'Rp 30.000', unit:'/ pasang',
        desc:'Sneakers, boots, sepatu kanvas. Bersih & wangi seperti baru.',
        cat:'Karpet & Spesial', badge:'👟 Trending', featured:false,
        features:['Sikat manual detail','Cuci dalam + luar','Pengeringan aman','Antibakteri'],
      },
    ],
    testimonials: [
      { name:'Bu Dewi S.',  role:'Pelanggan Tetap',   text:'Sudah langganan 2 tahun! Baju selalu bersih harum, antar jemput tepat waktu. Paling suka paket express-nya, selesai hari itu juga!', stars:5 },
      { name:'Pak Ridwan',  role:'Karyawan Kantoran', text:'Pakaian kerja saya selalu rapi berkat laundry ini. Harga masuk akal, kualitas premium. Sangat rekomendasikan!', stars:5 },
      { name:'Ibu Kartika', role:'Ibu Rumah Tangga',  text:'Karpet bulu saya dicuci disini, hasilnya luar biasa bersih dan tidak merusak bahan. Tim-nya profesional dan ramah.', stars:5 },
    ]
  }

};

