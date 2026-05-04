// ══════════════════════════════════════════════
//  WebCraft AI — generator/laundry.js
//  Cinematic: Fresh water, clean crisp aesthetic
//  Tone: Bersih, segar, terpercaya, cepat
// ══════════════════════════════════════════════

function buildLaundry(nama, pal, tmpl, wa, fitur, galleryImages) {
  let html = '';
  const fontImport = `@import url('https://fonts.googleapis.com/css2?family=${tmpl.font}&display=swap');`;

  // ── Curated laundry & fresh-clean imagery ──
  const heroImg   = 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1600&q=85&auto=format&fit=crop'; // tumpukan pakaian bersih terlipat rapi, cinematic
  const washImg1  = 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=700&q=80&auto=format&fit=crop';
  const washImg2  = 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=700&q=80&auto=format&fit=crop';
  const washImg3  = 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=700&q=80&auto=format&fit=crop';
  const washImg4  = 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=700&q=80&auto=format&fit=crop';
  const washImg5  = 'https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?w=700&q=80&auto=format&fit=crop';
  const washImg6  = 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=80&auto=format&fit=crop';
  const stripBg   = 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=1400&q=80&auto=format&fit=crop'; // mesin cuci modern close-up
  const carpetImg = 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80&auto=format&fit=crop'; // interior bersih & segar
  const svcImgs   = [washImg1, washImg2, washImg3, washImg4, washImg5, washImg6, washImg1, washImg2];

  const waSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

  const baseStyle = `
    <style>
      ${fontImport}
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family:'${tmpl.fontBody}',sans-serif; background:${pal.bg}; color:${pal.text}; }
      a { text-decoration:none; }

      @keyframes fadeInUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
      @keyframes kenBurns   { 0%{transform:scale(1)} 100%{transform:scale(1.07)} }
      @keyframes marquee    { from{transform:translateX(0)} to{transform:translateX(-10%)} }
      @keyframes waveRise   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      @keyframes bubblePop  { 0%{opacity:0;transform:scale(0.5)} 60%{opacity:1;transform:scale(1.08)} 100%{transform:scale(1)} }
      @keyframes spinDrum   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      @keyframes shimmer    { 0%,100%{opacity:0.5} 50%{opacity:1} }

      .fade-in { animation: fadeInUp 0.7s cubic-bezier(.22,1,.36,1) both; }

      /* ── Cinematic strip backgrounds ── */
      .fresh-strip {
        position:relative;
        background-image: url('${stripBg}');
        background-size:cover; background-position:center 40%;
        background-attachment:fixed;
      }
      .fresh-strip::before {
        content:''; position:absolute; inset:0;
        background: linear-gradient(135deg,
          rgba(5,20,40,0.93) 0%,
          rgba(10,35,60,0.80) 50%,
          rgba(5,20,40,0.90) 100%);
      }
      .fresh-strip > * { position:relative; z-index:1; }

      .carpet-strip {
        position:relative;
        background-image: url('${carpetImg}');
        background-size:cover; background-position:center;
        background-attachment:fixed;
      }
      .carpet-strip::before {
        content:''; position:absolute; inset:0;
        background: linear-gradient(to bottom,
          rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.80) 100%);
      }
      .carpet-strip > * { position:relative; z-index:1; }

      /* ── Service / price cards ── */
      .laundry-card {
        background:${pal.card};
        border:1.5px solid ${pal.border};
        border-radius:20px;
        padding:24px;
        transition:transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease, border-color 0.3s;
        position:relative;
        overflow:hidden;
      }
      .laundry-card:hover {
        transform:translateY(-7px);
        box-shadow:0 24px 48px rgba(0,0,0,0.10);
        border-color:${pal.primary};
      }
      .laundry-card.featured {
        background:${pal.primary};
        border-color:${pal.primary};
        color:white;
      }
      .laundry-card.featured * { color:white !important; }
      .laundry-card::before {
        content:'';
        position:absolute; top:0; left:0; right:0; height:3px;
        background:linear-gradient(90deg, ${pal.primary}, ${pal.accent});
        border-radius:20px 20px 0 0;
        transform:scaleX(0);
        transition:transform 0.3s ease;
        transform-origin:left;
      }
      .laundry-card:hover::before { transform:scaleX(1); }

      /* ── Alur step card ── */
      .alur-step {
        text-align:center;
        padding:28px 20px;
        position:relative;
      }
      .alur-icon {
        width:64px; height:64px;
        background:${pal.tagBg};
        border:2px solid ${pal.border};
        border-radius:50%;
        display:flex; align-items:center; justify-content:center;
        font-size:28px; margin:0 auto 16px;
        transition:transform 0.3s ease, background 0.3s ease;
      }
      .alur-step:hover .alur-icon {
        transform:scale(1.12);
        background:${pal.primary};
      }

      /* ── Gallery frame ── */
      .gal-frame { overflow:hidden; border-radius:14px; position:relative; cursor:pointer; }
      .gal-frame img { width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease; display:block; }
      .gal-frame:hover img { transform:scale(1.07); }
      .gal-frame::after {
        content:''; position:absolute; inset:0;
        background:linear-gradient(to top, rgba(0,0,0,0.50) 0%, transparent 55%);
        pointer-events:none;
      }

      /* ── Washing drum decoration ── */
      .drum-deco {
        width:120px; height:120px;
        border:3px solid rgba(255,255,255,0.15);
        border-top-color:rgba(255,255,255,0.7);
        border-radius:50%;
        animation:spinDrum 4s linear infinite;
      }

      /* ════════════════════════════════
         MOBILE RESPONSIVE — max 640px
         ════════════════════════════════ */
      @media (max-width: 640px) {
        nav { padding:12px 16px !important; flex-wrap:nowrap !important; gap:8px !important; }
        nav > div:nth-child(2) { display:none !important; }
        nav a[style*="border-radius:99px"] { padding:8px 14px !important; font-size:12px !important; white-space:nowrap !important; }
        section#beranda { min-height:100svh !important; overflow:hidden !important; display:flex !important; align-items:flex-end !important; }
        section#beranda > div[style*="z-index:2"] { padding:90px 18px 60px !important; max-width:100% !important; }
        section#beranda h1 { font-size:clamp(26px,8.5vw,40px) !important; letter-spacing:-0.8px !important; }
        section#beranda p  { font-size:14px !important; max-width:100% !important; }
        section#beranda > div[style*="z-index:2"] > div[style*="gap:14"] { flex-direction:column !important; gap:10px !important; }
        section#beranda a[style*="padding:14px"] { width:100% !important; justify-content:center !important; }
        section#beranda > div[style*="position:absolute"][style*="right"] { display:none !important; }
        section#beranda > div[style*="bottom:28px"] { display:none !important; }
        section[style*="padding:80px"], section[style*="padding:88px"], section[style*="padding:96px"] { padding:52px 16px !important; }
        div[style*="grid-template-columns:1fr 1fr"],div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns:1fr !important; }
        div[style*="grid-template-columns:1fr 1fr 1fr"] { grid-template-columns:1fr 1fr !important; }
        div[style*="grid-template-columns:repeat(4,1fr)"],div[style*="grid-template-columns:repeat(3,1fr)"] { grid-template-columns:repeat(2,1fr) !important; }
        div[style*="grid-template-columns:repeat(auto-fill"] { grid-template-columns:repeat(2,1fr) !important; gap:12px !important; }
        div[style*="grid-template-rows:220px"],div[style*="grid-template-rows:240px"],div[style*="grid-template-rows:200px"] { grid-template-rows:160px 160px 160px !important; }
        div[style*="grid-row:span 2"] { grid-row:span 1 !important; }
        div[style*="max-width:960px"],div[style*="max-width:1100px"],div[style*="max-width:800px"] { max-width:100% !important; }
        section[class*="strip"] { padding:56px 16px !important; background-attachment:scroll !important; }
        section[class*="strip"] > div[style*="grid"] { grid-template-columns:1fr !important; gap:24px !important; }
        body { overflow-x:hidden !important; }
        * { max-width:100vw; }
      }
    </style>`;

  // ── PROMO BANNER ──
  if (fitur.includes('promo')) {
    html += `<div style="background:linear-gradient(90deg,${pal.primary},${pal.accent},${pal.primary});background-size:200%;color:white;text-align:center;padding:11px 20px;font-size:13px;font-weight:700;letter-spacing:0.3px;">
      🎉 PROMO BULAN INI — Cuci + Setrika 5kg hanya Rp 25.000! &nbsp;·&nbsp; 🚚 Gratis Antar Jemput Radius 3km
    </div>`;
  }

  // ── NAVBAR ──
  const navLinks = [
    { label:'Layanan',   href:'#layanan',  show: fitur.includes('menu')   },
    { label:'Alur',      href:'#alur',     show: true                     },
    { label:'Galeri',    href:'#galeri',   show: fitur.includes('galeri') },
    { label:'Ulasan',    href:'#tentang',  show: fitur.includes('review') },
    { label:'Lokasi',    href:'#lokasi',   show: fitur.includes('lokasi') },
  ].filter(l => l.show);

  html += `<nav style="position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:16px 44px;background:rgba(10,25,50,0.70);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);border-bottom:1px solid rgba(255,255,255,0.07);">
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="width:36px;height:36px;background:${pal.primary};border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;animation:waveRise 3s ease-in-out infinite;">👕</div>
      <span style="font-family:'${tmpl.fontHead}',serif;color:white;font-size:21px;font-weight:800;letter-spacing:-0.3px;">${nama}</span>
    </div>
    <div style="display:flex;gap:28px;">
      ${navLinks.map(l => `<a href="${l.href}" style="color:rgba(255,255,255,0.65);font-size:13px;font-weight:500;transition:color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.65)'">${l.label}</a>`).join('')}
    </div>
    <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:7px;background:${pal.btn};color:white;padding:10px 22px;border-radius:99px;font-size:13px;font-weight:700;box-shadow:0 4px 16px rgba(0,0,0,0.2);">${waSvg} Order Sekarang</a>
  </nav>`;

  // ── HERO — full cinematic viewport ──
  html += `<section id="beranda" style="position:relative;min-height:100vh;display:flex;align-items:flex-end;overflow:hidden;">

    <!-- Background parallax -->
    <div style="position:absolute;inset:-8%;background-image:url('${heroImg}');background-size:cover;background-position:center;animation:kenBurns 14s ease-in-out infinite alternate;"></div>

    <!-- Cinematic overlay layers -->
    <div style="position:absolute;inset:0;background:linear-gradient(to top, rgba(5,15,35,0.97) 0%, rgba(5,15,35,0.75) 35%, rgba(0,0,0,0.20) 65%, rgba(0,0,0,0.05) 100%);"></div>
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 20% 80%, rgba(${pal.primary.replace('#','').match(/.{2}/g).map(x=>parseInt(x,16)).join(',')},0.18) 0%, transparent 65%);"></div>
    <!-- Top accent -->
    <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${pal.accent},transparent);"></div>
    <!-- Film grain -->
    <div style="position:absolute;inset:0;opacity:0.03;background-image:url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22/></filter><rect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22/></svg>');pointer-events:none;"></div>

    <!-- Main content -->
    <div style="position:relative;z-index:2;padding:0 64px 80px;max-width:820px;" class="fade-in">

      <!-- Badge -->
      <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.10);border:1px solid rgba(255,255,255,0.20);padding:7px 18px;border-radius:99px;margin-bottom:24px;">
        <span style="width:7px;height:7px;background:${pal.accent};border-radius:50%;animation:shimmer 1.8s ease infinite;"></span>
        <span style="color:rgba(255,255,255,0.88);font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">${tmpl.badge}</span>
      </div>

      <h1 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(36px,5.5vw,68px);font-weight:800;line-height:1.05;color:white;letter-spacing:-2px;margin-bottom:20px;text-shadow:0 4px 32px rgba(0,0,0,0.4);">${tmpl.headline}</h1>
      <p style="color:rgba(255,255,255,0.72);font-size:17px;line-height:1.8;margin-bottom:36px;max-width:540px;">${tmpl.sub}</p>

      <!-- CTA Buttons -->
      <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:52px;">
        <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:9px;background:${pal.btn};color:white;padding:15px 32px;border-radius:12px;font-size:15px;font-weight:700;box-shadow:0 8px 28px rgba(0,0,0,0.3);">${waSvg} Order Sekarang</a>
        <a href="#layanan" style="display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,0.10);color:white;border:1px solid rgba(255,255,255,0.25);padding:15px 26px;border-radius:12px;font-size:15px;font-weight:600;backdrop-filter:blur(8px);">Lihat Harga →</a>
      </div>

      <!-- Stats -->
      <div style="display:flex;gap:36px;flex-wrap:wrap;">
        ${tmpl.stats.map(s => `<div>
          <div style="font-family:'${tmpl.fontHead}',serif;font-size:28px;font-weight:800;color:${pal.accent};">${s.num}</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.50);margin-top:3px;letter-spacing:0.5px;">${s.label}</div>
        </div>`).join(`<div style="width:1px;background:rgba(255,255,255,0.12);"></div>`)}
      </div>
    </div>

    <!-- Floating washing drum decoration kanan -->
    <div style="position:absolute;right:80px;top:50%;transform:translateY(-50%);z-index:3;display:flex;flex-direction:column;align-items:center;gap:20px;">
      <div class="drum-deco"></div>
      <div style="background:rgba(255,255,255,0.08);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,0.14);border-radius:16px;padding:16px 22px;text-align:center;">
        <div style="font-family:'${tmpl.fontHead}',serif;font-size:22px;font-weight:800;color:white;">24 Jam</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:1px;text-transform:uppercase;margin-top:2px;">Express Ready</div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div style="position:absolute;bottom:28px;left:50%;transform:translateX(-50%);z-index:3;display:flex;flex-direction:column;align-items:center;gap:5px;opacity:0.4;">
      <span style="color:white;font-size:10px;letter-spacing:3px;text-transform:uppercase;">Scroll</span>
      <div style="width:1px;height:32px;background:linear-gradient(to bottom,white,transparent);"></div>
    </div>
  </section>`;

  // ── MARQUEE ──
  html += `<div style="background:${pal.primary};overflow:hidden;padding:13px 0;">
    <div style="display:inline-block;white-space:nowrap;will-change:transform;animation:marquee 22s linear infinite;color:white;font-size:13px;font-weight:700;letter-spacing:0.5px;">${
      Array(10).fill('&nbsp;&nbsp;👕 BERSIH SEMPURNA &nbsp;&nbsp;✦ HARUM SEGAR &nbsp;&nbsp;✦ ANTAR JEMPUT &nbsp;&nbsp;✦ EXPRESS 24 JAM &nbsp;&nbsp;✦ BAJU · KARPET · SEPATU &nbsp;&nbsp;✦ HARGA TERJANGKAU').join('')
    }&nbsp;&nbsp;</div>
  </div>`;

  // ── ALUR LAYANAN — unique to laundry ──
  html += `<section id="alur" style="padding:88px 44px;background:${pal.bg};">
    <div style="text-align:center;margin-bottom:56px;">
      <p style="font-size:10px;letter-spacing:4px;text-transform:uppercase;color:${pal.muted};margin-bottom:12px;">— Mudah & Praktis —</p>
      <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${pal.text};letter-spacing:-1px;margin-bottom:10px;">Bagaimana Cara Kerjanya?</h2>
      <p style="color:${pal.muted};font-size:15px;max-width:440px;margin:0 auto;line-height:1.7;">Cukup 4 langkah mudah — pakaian Anda bersih, harum, dan siap pakai kembali.</p>
    </div>

    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0;max-width:900px;margin:0 auto;position:relative;">

      <!-- Connector line -->
      <div style="position:absolute;top:32px;left:12.5%;right:12.5%;height:2px;background:linear-gradient(90deg,${pal.primary},${pal.accent});z-index:0;border-radius:99px;"></div>

      ${[
        { step:'01', icon:'📦', title:'Order',       desc:'Chat WA atau telepon, beritahu jenis & jumlah cucian Anda' },
        { step:'02', icon:'🚗', title:'Jemput',      desc:'Tim kami datang ke lokasi Anda, bawa cucian ke tempat kami' },
        { step:'03', icon:'🧺', title:'Cuci & Setrika', desc:'Dicuci bersih, dikeringkan, dan disetrika rapi oleh ahlinya' },
        { step:'04', icon:'✅', title:'Antar Kembali', desc:'Cucian bersih diantar langsung ke rumah Anda, tepat waktu' },
      ].map((s, i) => `
      <div class="alur-step" style="position:relative;z-index:1;">
        <div style="width:64px;height:64px;background:${i % 2 === 0 ? pal.primary : pal.accent};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 auto 16px;box-shadow:0 8px 20px rgba(0,0,0,0.12);transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.12)'" onmouseout="this.style.transform='scale(1)'">${s.icon}</div>
        <div style="display:inline-block;background:${pal.tagBg};color:${pal.muted};font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px;margin-bottom:8px;letter-spacing:1px;">STEP ${s.step}</div>
        <div style="font-family:'${tmpl.fontHead}',serif;font-size:16px;font-weight:700;color:${pal.text};margin-bottom:8px;">${s.title}</div>
        <div style="font-size:12px;color:${pal.muted};line-height:1.65;padding:0 8px;">${s.desc}</div>
      </div>`).join('')}
    </div>
  </section>`;

  // ── LAYANAN & HARGA ──
  if (fitur.includes('menu')) {
    html += `<section id="layanan" style="padding:80px 44px;background:${pal.card};">
      <div style="text-align:center;margin-bottom:52px;">
        <p style="font-size:10px;letter-spacing:4px;text-transform:uppercase;color:${pal.muted};margin-bottom:12px;">— Paket Pilihan —</p>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${pal.text};letter-spacing:-1px;margin-bottom:10px;">Layanan & Harga</h2>
        <p style="color:${pal.muted};font-size:15px;max-width:440px;margin:0 auto;">${tmpl.tagline}</p>
      </div>

      ${tmpl.categories.map(cat => {
        const items = tmpl.menuItems.filter(i => i.cat === cat);
        if (!items.length) return '';
        const catIcon = {'Cuci Reguler':'👕', 'Express & Premium':'⚡', 'Karpet & Spesial':'🛋️'}[cat] || '✦';
        return `<div style="margin-bottom:48px;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:22px;">
            <span style="font-size:20px;">${catIcon}</span>
            <h3 style="font-size:13px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:${pal.text};">${cat}</h3>
            <div style="flex:1;height:1px;background:${pal.border};"></div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;">
            ${items.map(item => `
            <div class="laundry-card ${item.featured ? 'featured' : ''}">
              ${item.featured ? `<div style="position:absolute;top:-1px;right:20px;background:white;color:${pal.primary};font-size:10px;font-weight:800;padding:4px 12px;border-radius:0 0 8px 8px;letter-spacing:1px;">⭐ TERPOPULER</div>` : ''}
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
                <div>
                  <div style="font-family:'${tmpl.fontHead}',serif;font-size:18px;font-weight:800;margin-bottom:4px;">${item.name}</div>
                  ${item.badge ? `<span style="display:inline-block;background:${item.featured ? 'rgba(255,255,255,0.2)' : pal.tagBg};color:${item.featured ? 'white' : pal.tag};font-size:10px;padding:2px 10px;border-radius:99px;font-weight:700;">${item.badge}</span>` : ''}
                </div>
                <div style="text-align:right;">
                  <div style="font-family:'${tmpl.fontHead}',serif;font-size:20px;font-weight:800;color:${item.featured ? 'white' : pal.primary};">${item.price}</div>
                  <div style="font-size:10px;opacity:0.65;">${item.unit || ''}</div>
                </div>
              </div>
              <div style="font-size:13px;opacity:0.75;line-height:1.6;margin-bottom:16px;">${item.desc}</div>
              <!-- Fitur list -->
              <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:18px;">
                ${(item.features || []).map(f => `<div style="display:flex;align-items:center;gap:7px;font-size:12px;opacity:0.85;">
                  <span style="width:16px;height:16px;background:${item.featured ? 'rgba(255,255,255,0.25)' : pal.tagBg};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;flex-shrink:0;">✓</span>${f}
                </div>`).join('')}
              </div>
              <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:11px;border-radius:10px;font-size:13px;font-weight:700;background:${item.featured ? 'white' : pal.btn};color:${item.featured ? pal.primary : 'white'};">${waSvg} Pesan Paket Ini</a>
            </div>`).join('')}
          </div>
        </div>`;
      }).join('')}
    </section>`;
  }

  // ── FRESH STRIP — promise section ──
  html += `<section class="fresh-strip" style="padding:96px 44px;">
    <div style="max-width:960px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;">
      <div>
        <p style="color:rgba(255,255,255,0.45);font-size:10px;letter-spacing:4px;text-transform:uppercase;margin-bottom:16px;">— Janji Kami —</p>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(26px,3.5vw,44px);font-weight:800;color:white;letter-spacing:-1.5px;margin-bottom:18px;line-height:1.05;">"${tmpl.tagline}"</h2>
        <p style="color:rgba(255,255,255,0.62);font-size:15px;line-height:1.8;margin-bottom:32px;">Kami menggunakan deterjen premium, teknologi cuci terkini, dan tenaga terlatih agar setiap helai pakaian kembali seperti baru.</p>
        <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:9px;background:white;color:${pal.primary};padding:13px 28px;border-radius:10px;font-size:14px;font-weight:800;">${waSvg} Order Sekarang</a>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
        ${[
          { icon:'🧴', title:'Deterjen Premium', sub:'Aman untuk semua jenis kain, termasuk bayi' },
          { icon:'⚡', title:'Express 24 Jam',   sub:'Butuh cepat? Selesai dalam sehari' },
          { icon:'🌸', title:'Pewangi Pilihan',  sub:'Harum tahan lama hingga 3 hari' },
          { icon:'🚚', title:'Antar Jemput',     sub:'Gratis radius 3km, hubungi kami' },
        ].map(f => `
        <div style="background:rgba(255,255,255,0.08);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:20px 18px;">
          <div style="font-size:26px;margin-bottom:10px;">${f.icon}</div>
          <div style="font-family:'${tmpl.fontHead}',serif;font-size:15px;font-weight:700;color:white;margin-bottom:5px;">${f.title}</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.55);line-height:1.6;">${f.sub}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;

  // ── KARPET SPECIAL — carpet-strip CTA ──
  html += `<section class="carpet-strip" style="padding:80px 44px;">
    <div style="max-width:680px;margin:0 auto;text-align:center;">
      <div style="font-size:48px;margin-bottom:16px;animation:waveRise 3s ease-in-out infinite;">🛋️</div>
      <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(24px,4vw,42px);font-weight:800;color:white;letter-spacing:-1px;margin-bottom:16px;line-height:1.1;">Cuci Karpet & Kasur<br>Sampai Bersih Sempurna</h2>
      <p style="color:rgba(255,255,255,0.70);font-size:15px;line-height:1.75;margin-bottom:36px;">Karpet, sofa, kasur, gordyn, hingga boneka besar — semua kami cuci bersih tanpa merusak bahan. Dijemput & diantar kembali.</p>
      <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
        <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:9px;background:white;color:${pal.primary};padding:14px 32px;border-radius:99px;font-size:15px;font-weight:800;box-shadow:0 12px 36px rgba(0,0,0,0.3);">${waSvg} Chat & Tanya Harga</a>
        <a href="#layanan" style="display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,0.12);color:white;border:1px solid rgba(255,255,255,0.25);padding:14px 26px;border-radius:99px;font-size:15px;font-weight:600;backdrop-filter:blur(8px);">Lihat Paket →</a>
      </div>
    </div>
  </section>`;

  // ── GALERI ──
  if (fitur.includes('galeri')) {
    const galFallbacks = [washImg1, washImg2, washImg3, washImg4, washImg5, washImg6];
    const galLabels    = ['Area Cuci','Mesin Modern','Proses Setrika','Pakaian Bersih','Karpet Treatment','Packaging'];
    html += `<section id="galeri" style="padding:80px 44px;background:${pal.bg};">
      <div style="text-align:center;margin-bottom:48px;">
        <p style="font-size:10px;letter-spacing:4px;text-transform:uppercase;color:${pal.muted};margin-bottom:12px;">— Fasilitas & Proses —</p>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${pal.text};letter-spacing:-1px;">Galeri Laundry</h2>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:220px 220px;gap:10px;max-width:960px;margin:0 auto;border-radius:20px;overflow:hidden;">
        ${[0,1,2,3,4].map(i => {
          const userImg = galleryImages && galleryImages[i];
          const fb      = galFallbacks[i % galFallbacks.length];
          const big     = i === 0;
          return `<div class="gal-frame webcraftai-gallery-frame" data-gallery-index="${i}" style="${big ? 'grid-row:span 2;' : ''}">
            <img ${userImg ? `class="webcraftai-gallery-img" src="${userImg}"` : `src="${fb}"`} alt="${galLabels[i]}" loading="lazy"
              onerror="this.onerror=null;this.src='https://picsum.photos/seed/laundry${i}/700/500';" style="background:${pal.card};width:100%;height:100%;object-fit:cover;display:block;">
            <button type="button" class="gal-upload-btn" onclick="event.stopPropagation();openGalUpload(this);"
              style="position:absolute;top:10px;right:10px;z-index:10;display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,0.92);color:#111;border:none;padding:6px 11px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:0.5px;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,0.2);backdrop-filter:blur(6px);transition:transform 0.2s,background 0.2s;"
              onmouseover="this.style.background='white';this.style.transform='translateY(-1px)';"
              onmouseout="this.style.background='rgba(255,255,255,0.92)';this.style.transform='none';">📷 Upload</button>
            <div style="position:absolute;bottom:12px;left:12px;z-index:1;pointer-events:none;">
              <span style="font-size:10px;color:rgba(255,255,255,0.85);letter-spacing:1.5px;text-transform:uppercase;font-weight:700;">${galLabels[i]}</span>
            </div>
          </div>`;
        }).join('')}
      </div>
    </section>`;
  }

  if (fitur.includes('review')) html += buildTestimoni(tmpl, pal);
  if (fitur.includes('lokasi')) html += buildLokasi(nama, pal);

  // ── WA CTA FINAL ──
  if (fitur.includes('wa')) {
    html += `<section id="kontak" style="padding:80px 44px;background:${pal.primary};text-align:center;">
      <div style="font-size:48px;margin-bottom:18px;animation:waveRise 3s ease-in-out infinite;">👕</div>
      <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:32px;font-weight:800;color:white;margin-bottom:12px;letter-spacing:-0.5px;">Siap Order Laundry Sekarang?</h2>
      <p style="color:rgba(255,255,255,0.75);font-size:15px;line-height:1.75;margin-bottom:32px;max-width:420px;margin-left:auto;margin-right:auto;">Chat WhatsApp kami, beritahu jumlah & jenis cucian — tim kami siap menjemput!</p>
      <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:10px;background:white;color:${pal.primary};padding:15px 40px;border-radius:99px;font-size:16px;font-weight:800;box-shadow:0 14px 36px rgba(0,0,0,0.2);">${waSvg} Chat WhatsApp Sekarang</a>
    </section>`;
  }

  html += buildFooter(nama, tmpl, pal);
  return baseStyle + html;
}
