// ══════════════════════════════════════════════
//  WebCraft AI — generator/klinik.js
//  Cinematic: Soft wellness, clean clinic aesthetic
//  Tone: Trust, care, calm, professional warmth
// ══════════════════════════════════════════════

function buildKlinik(nama, pal, tmpl, wa, fitur, galleryImages) {
  let html = '';
  const fontImport = `@import url('https://fonts.googleapis.com/css2?family=${tmpl.font}&display=swap');`;

  // ── Curated wellness & clinic imagery ──
  const heroImg   = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=85&auto=format&fit=crop';
  const svcImg1   = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80&auto=format&fit=crop';
  const svcImg2   = 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&q=80&auto=format&fit=crop';
  const svcImg3   = 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80&auto=format&fit=crop';
  const svcImg4   = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=80&auto=format&fit=crop';
  const svcImg5   = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&q=80&auto=format&fit=crop';
  const svcImg6   = 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=700&q=80&auto=format&fit=crop';
  const clinicBg  = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=80&auto=format&fit=crop';
  const teamBg    = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80&auto=format&fit=crop';
  const svcImgs   = [svcImg1, svcImg2, svcImg3, svcImg4, svcImg5, svcImg6, svcImg1, svcImg2];

  const waSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

  const baseStyle = `
    <style>
      ${fontImport}
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family:'${tmpl.fontBody}',sans-serif; background:${pal.bg}; color:${pal.text}; }
      a { text-decoration:none; }

      @keyframes fadeInUp  { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
      @keyframes kenBurns  { 0%{transform:scale(1) translateY(0)} 100%{transform:scale(1.06) translateY(-10px)} }
      @keyframes marquee   { from{transform:translateX(0)} to{transform:translateX(-10%)} }
      @keyframes floatUp   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
      @keyframes shimmer   { 0%,100%{opacity:0.6} 50%{opacity:1} }

      .fade-in { animation: fadeInUp 0.7s cubic-bezier(.22,1,.36,1) both; }

      /* ── Cinematic strips ── */
      .clinic-strip {
        position:relative;
        background-image: url('${clinicBg}');
        background-size:cover; background-position:center;
        background-attachment:fixed;
      }
      .clinic-strip::before {
        content:''; position:absolute; inset:0;
        background: linear-gradient(135deg,
          rgba(${pal.primary.replace('#','').match(/.{2}/g).map(x=>parseInt(x,16)).join(',')},0.92) 0%,
          rgba(${pal.primary.replace('#','').match(/.{2}/g).map(x=>parseInt(x,16)).join(',')},0.75) 100%);
      }
      .clinic-strip > * { position:relative; z-index:1; }

      .team-strip {
        position:relative;
        background-image: url('${teamBg}');
        background-size:cover; background-position:center 30%;
        background-attachment:fixed;
      }
      .team-strip::before {
        content:''; position:absolute; inset:0;
        background: linear-gradient(to right,
          rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.60) 50%, rgba(0,0,0,0.35) 100%);
      }
      .team-strip > * { position:relative; z-index:1; }

      /* ── Service card ── */
      .svc-card {
        background:${pal.card};
        border:1px solid ${pal.border};
        border-radius:18px;
        overflow:hidden;
        transition:transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease;
        cursor:pointer;
      }
      .svc-card:hover { transform:translateY(-6px); box-shadow:0 20px 44px rgba(0,0,0,0.10); }
      .svc-card .svc-img { height:180px; overflow:hidden; position:relative; }
      .svc-card .svc-img img {
        width:100%; height:100%; object-fit:cover;
        transition:transform 0.5s ease; display:block;
      }
      .svc-card:hover .svc-img img { transform:scale(1.06); }
      .svc-card .svc-img::after {
        content:''; position:absolute; inset:0;
        background:linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%);
        pointer-events:none;
      }

      /* ── Gallery frame ── */
      .gal-frame { overflow:hidden; border-radius:14px; position:relative; cursor:pointer; }
      .gal-frame img { width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease; display:block; }
      .gal-frame:hover img { transform:scale(1.06); }
      .gal-frame::after {
        content:''; position:absolute; inset:0;
        background:linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%);
        pointer-events:none;
      }

      /* ════════════════════════════════
         MOBILE RESPONSIVE — max 640px
         ════════════════════════════════ */
      @media (max-width: 640px) {
        nav { padding:12px 16px !important; flex-wrap:nowrap !important; gap:8px !important; }
        nav > div:nth-child(2) { display:none !important; }
        nav a[style*="border-radius:99px"], nav a[style*="border-radius:8px"] { padding:8px 14px !important; font-size:12px !important; white-space:nowrap !important; }
        section#beranda { min-height:100svh !important; overflow:hidden !important; display:flex !important; align-items:flex-end !important; }
        section#beranda > div[style*="z-index:2"] { padding:90px 18px 56px !important; max-width:100% !important; }
        section#beranda h1 { font-size:clamp(26px,8.5vw,40px) !important; }
        section#beranda p { font-size:14px !important; max-width:100% !important; }
        section#beranda > div[style*="z-index:2"] > div[style*="gap:14"] { flex-direction:column !important; gap:10px !important; }
        section#beranda a[style*="padding:14px"] { width:100% !important; justify-content:center !important; }
        section#beranda > div[style*="position:absolute"][style*="right"] { display:none !important; }
        section#beranda > div[style*="bottom:28px"] { display:none !important; }
        section[style*="padding:80px"], section[style*="padding:72px"], section[style*="padding:96px"] { padding:52px 16px !important; }
        div[style*="grid-template-columns:1fr 1fr"], div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns:1fr !important; }
        div[style*="grid-template-columns:1fr 1fr 1fr"] { grid-template-columns:1fr 1fr !important; }
        div[style*="grid-template-columns:repeat(4,1fr)"], div[style*="grid-template-columns:repeat(3,1fr)"] { grid-template-columns:repeat(2,1fr) !important; }
        div[style*="grid-template-columns:repeat(auto-fill"] { grid-template-columns:repeat(2,1fr) !important; gap:12px !important; }
        div[style*="grid-template-rows:230px"], div[style*="grid-template-rows:240px"], div[style*="grid-template-rows:200px"] { grid-template-rows:160px 160px 160px !important; }
        div[style*="grid-row:span 2"] { grid-row:span 1 !important; }
        div[style*="max-width:960px"], div[style*="max-width:800px"], div[style*="max-width:700px"] { max-width:100% !important; }
        section[class*="strip"] { padding:56px 16px !important; background-attachment:scroll !important; }
        section[class*="strip"] > div[style*="grid"] { grid-template-columns:1fr !important; gap:24px !important; }
        body { overflow-x:hidden !important; }
      }
    </style>`;

  // ── PROMO BANNER ──
  if (fitur.includes('promo')) {
    html += `<div style="background:linear-gradient(90deg,${pal.primary},${pal.accent},${pal.primary});background-size:200%;color:white;text-align:center;padding:11px 20px;font-size:13px;font-weight:700;letter-spacing:0.5px;">
      ✨ PROMO PERDANA — Konsultasi Gratis + Diskon 20% Treatment Pertama Anda!
    </div>`;
  }

  // ── NAVBAR ──
  const navLinks = [
    { label:'Layanan',   href:'#layanan',  show: fitur.includes('menu')   },
    { label:'Galeri',    href:'#galeri',   show: fitur.includes('galeri') },
    { label:'Testimoni', href:'#tentang',  show: fitur.includes('review') },
    { label:'Lokasi',    href:'#lokasi',   show: fitur.includes('lokasi') },
  ].filter(l => l.show);

  html += `<nav style="position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:16px 44px;background:rgba(255,255,255,0.85);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid ${pal.border};box-shadow:0 2px 20px rgba(0,0,0,0.05);">
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="width:34px;height:34px;background:${pal.primary};border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;">${tmpl.emoji}</div>
      <span style="font-family:'${tmpl.fontHead}',serif;color:${pal.text};font-size:20px;font-weight:700;letter-spacing:-0.3px;">${nama}</span>
    </div>
    <div style="display:flex;gap:28px;">
      ${navLinks.map(l => `<a href="${l.href}" style="color:${pal.muted};font-size:13px;font-weight:500;transition:color 0.2s;" onmouseover="this.style.color='${pal.primary}'" onmouseout="this.style.color='${pal.muted}'">${l.label}</a>`).join('')}
    </div>
    <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:7px;background:${pal.btn};color:white;padding:10px 22px;border-radius:99px;font-size:13px;font-weight:700;">${waSvg} Booking Sekarang</a>
  </nav>`;

  // ── HERO — split layout, clean & airy ──
  html += `<section id="beranda" style="position:relative;min-height:100vh;display:grid;grid-template-columns:52% 48%;overflow:hidden;">

    <!-- Left: clean white copy panel -->
    <div style="position:relative;background:${pal.bg};display:flex;flex-direction:column;justify-content:center;padding:140px 56px 80px;z-index:2;" class="fade-in">
      <!-- Top accent line -->
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,${pal.primary},${pal.accent},transparent);"></div>

      <div style="display:inline-flex;align-items:center;gap:8px;background:${pal.tagBg};border:1px solid ${pal.border};padding:7px 16px;border-radius:99px;margin-bottom:24px;width:fit-content;">
        <span style="width:7px;height:7px;background:${pal.primary};border-radius:50%;animation:shimmer 1.8s ease infinite;"></span>
        <span style="color:${pal.primary};font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">${tmpl.badge}</span>
      </div>

      <h1 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(30px,3.8vw,52px);font-weight:800;line-height:1.1;color:${pal.text};letter-spacing:-1.5px;margin-bottom:18px;">${tmpl.headline}</h1>
      <p style="color:${pal.muted};font-size:16px;line-height:1.8;margin-bottom:32px;max-width:400px;">${tmpl.sub}</p>

      <!-- Trust chips -->
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:32px;">
        ${['✓ Bersertifikat','✓ Terpercaya','✓ Higienis','✓ Harga Terjangkau'].map(t =>
          `<span style="background:${pal.tagBg};border:1px solid ${pal.border};color:${pal.primary};padding:5px 13px;border-radius:6px;font-size:12px;font-weight:600;">${t}</span>`
        ).join('')}
      </div>

      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:44px;">
        <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:9px;background:${pal.btn};color:white;padding:14px 28px;border-radius:12px;font-size:15px;font-weight:700;box-shadow:0 8px 24px rgba(0,0,0,0.12);">${waSvg} Booking Sekarang</a>
        <a href="#layanan" style="display:inline-flex;align-items:center;gap:9px;background:transparent;color:${pal.text};border:1.5px solid ${pal.border};padding:14px 24px;border-radius:12px;font-size:15px;font-weight:600;">Lihat Layanan →</a>
      </div>

      <!-- Stats row -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding-top:28px;border-top:1px solid ${pal.border};">
        ${tmpl.stats.map(s => `<div>
          <div style="font-family:'${tmpl.fontHead}',serif;font-size:26px;font-weight:800;color:${pal.primary};">${s.num}</div>
          <div style="font-size:11px;color:${pal.muted};margin-top:3px;letter-spacing:0.5px;">${s.label}</div>
        </div>`).join('')}
      </div>
    </div>

    <!-- Right: cinematic photo -->
    <div style="position:relative;overflow:hidden;">
      <div style="position:absolute;inset:-5%;background-image:url('${heroImg}');background-size:cover;background-position:center;animation:kenBurns 12s ease-in-out infinite alternate;"></div>
      <div style="position:absolute;inset:0;background:linear-gradient(to right,${pal.bg} 0%,rgba(255,255,255,0.05) 25%,transparent 100%);"></div>
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(255,255,255,0.15) 0%,transparent 30%,transparent 70%,rgba(255,255,255,0.2) 100%);"></div>
      <!-- Floating rating card -->
      <div style="position:absolute;bottom:60px;right:36px;z-index:3;background:rgba(255,255,255,0.95);backdrop-filter:blur(16px);border:1px solid ${pal.border};border-radius:18px;padding:18px 24px;text-align:center;box-shadow:0 16px 40px rgba(0,0,0,0.10);">
        <div style="font-size:24px;margin-bottom:4px;">⭐</div>
        <div style="font-family:'${tmpl.fontHead}',serif;font-size:26px;font-weight:800;color:${pal.text};">4.9</div>
        <div style="font-size:11px;color:${pal.muted};letter-spacing:1px;text-transform:uppercase;margin-top:3px;">Rating</div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div style="position:absolute;bottom:28px;left:50%;transform:translateX(-50%);z-index:3;display:flex;flex-direction:column;align-items:center;gap:5px;opacity:0.35;">
      <span style="color:${pal.muted};font-size:10px;letter-spacing:3px;text-transform:uppercase;">Scroll</span>
      <div style="width:1px;height:28px;background:linear-gradient(to bottom,${pal.muted},transparent);"></div>
    </div>
  </section>`;

  // ── MARQUEE ──
  html += `<div style="background:${pal.primary};overflow:hidden;padding:13px 0;">
    <div style="display:inline-block;white-space:nowrap;will-change:transform;animation:marquee 22s linear infinite;color:white;font-size:13px;font-weight:700;letter-spacing:0.5px;">${
      Array(10).fill('&nbsp;&nbsp;✦ PROFESIONAL &nbsp;&nbsp;✦ BERSERTIFIKAT &nbsp;&nbsp;✦ HIGIENIS &nbsp;&nbsp;✦ BOOKING MUDAH &nbsp;&nbsp;✦ HARGA TERJANGKAU').join('')
    }&nbsp;&nbsp;</div>
  </div>`;

  // ── LAYANAN / MENU ──
  if (fitur.includes('menu')) {
    html += `<section id="layanan" style="padding:80px 44px;background:${pal.bg};">
      <div style="text-align:center;margin-bottom:52px;">
        <p style="font-size:10px;letter-spacing:4px;text-transform:uppercase;color:${pal.muted};margin-bottom:10px;">— Apa yang Kami Tawarkan —</p>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${pal.text};letter-spacing:-1px;margin-bottom:10px;">Layanan Unggulan</h2>
        <p style="color:${pal.muted};font-size:15px;max-width:480px;margin:0 auto;line-height:1.7;">${tmpl.tagline}</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;max-width:1100px;margin:0 auto;">
        ${tmpl.menuItems.map((item, i) => `
        <div class="svc-card">
          <div class="svc-img">
            <img src="${svcImgs[i % svcImgs.length]}" alt="${item.name}" loading="lazy"
              onerror="this.onerror=null;this.src='https://picsum.photos/seed/klinik${i}/700/500';" style="background:${pal.card};">
            ${item.badge ? `<div style="position:absolute;top:12px;left:12px;z-index:2;background:${pal.btn};color:white;font-size:10px;padding:4px 10px;border-radius:99px;font-weight:700;">${item.badge}</div>` : ''}
          </div>
          <div style="padding:18px 20px;">
            <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${pal.muted};margin-bottom:5px;">${item.cat}</div>
            <div style="font-family:'${tmpl.fontHead}',serif;font-weight:700;font-size:17px;color:${pal.text};margin-bottom:6px;">${item.name}</div>
            <div style="font-size:12px;color:${pal.muted};line-height:1.6;margin-bottom:14px;">${item.desc}</div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div style="font-family:'${tmpl.fontHead}',serif;font-size:17px;font-weight:800;color:${pal.primary};">${item.price}</div>
              <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:5px;background:${pal.btn};color:white;padding:7px 14px;border-radius:8px;font-size:12px;font-weight:700;">${waSvg} Booking</a>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </section>`;
  }

  // ── CLINIC STRIP — why choose us ──
  html += `<section class="clinic-strip" style="padding:90px 44px;">
    <div style="max-width:960px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;">
      <div>
        <p style="color:rgba(255,255,255,0.6);font-size:10px;letter-spacing:4px;text-transform:uppercase;margin-bottom:16px;">— Keunggulan Kami —</p>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(26px,3.5vw,42px);font-weight:800;color:white;letter-spacing:-1.5px;margin-bottom:18px;line-height:1.05;">"${tmpl.tagline}"</h2>
        <p style="color:rgba(255,255,255,0.7);font-size:15px;line-height:1.75;margin-bottom:32px;">Tenaga ahli berpengalaman, peralatan modern, dan suasana yang nyaman — semua untuk kenyamanan Anda.</p>
        <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;background:white;color:${pal.primary};padding:13px 28px;border-radius:10px;font-size:14px;font-weight:800;">${waSvg} Konsultasi Gratis</a>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
        ${[
          { icon:'🎓', label:'Tenaga Ahli',        val:'Bersertifikat' },
          { icon:'🌿', label:'Bahan Premium',       val:'Aman & Natural' },
          { icon:'⏱️', label:'Tepat Waktu',         val:'Reservasi Pasti' },
          { icon:'💳', label:'Pembayaran',           val:'Fleksibel' },
        ].map(f => `
        <div style="background:rgba(255,255,255,0.12);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.2);border-radius:14px;padding:20px;text-align:center;">
          <div style="font-size:28px;margin-bottom:8px;">${f.icon}</div>
          <div style="font-family:'${tmpl.fontHead}',serif;font-size:15px;font-weight:700;color:white;margin-bottom:4px;">${f.val}</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.6);">${f.label}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;

  // ── GALERI ──
  if (fitur.includes('galeri')) {
    const galFallbacks = [svcImg1, svcImg2, svcImg3, svcImg4, svcImg5, svcImg6];
    const galLabels    = ['Suasana Klinik','Treatment Room','Area Relaksasi','Konsultasi','Beauty Treatment','Perawatan'];
    html += `<section id="galeri" style="padding:80px 44px;background:${pal.bg};">
      <div style="text-align:center;margin-bottom:48px;">
        <p style="font-size:10px;letter-spacing:4px;text-transform:uppercase;color:${pal.muted};margin-bottom:12px;">— Suasana & Fasilitas —</p>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${pal.text};letter-spacing:-1px;">Galeri ${nama}</h2>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:220px 220px;gap:10px;max-width:960px;margin:0 auto;border-radius:20px;overflow:hidden;">
        ${[0,1,2,3,4].map(i => {
          const userImg = galleryImages && galleryImages[i];
          const fb      = galFallbacks[i % galFallbacks.length];
          const big     = i === 0;
          return `<div class="gal-frame webcraftai-gallery-frame" data-gallery-index="${i}" style="${big?'grid-row:span 2;':''}">
            <img ${userImg?`class="webcraftai-gallery-img" src="${userImg}"`:`src="${fb}"`} alt="${galLabels[i]}" loading="lazy"
              onerror="this.onerror=null;this.src='https://picsum.photos/seed/klinikgal${i}/700/500';" style="background:${pal.card};width:100%;height:100%;object-fit:cover;display:block;">
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

  // ── TEAM STRIP ──
  html += `<section class="team-strip" style="padding:90px 44px;">
    <div style="max-width:960px;margin:0 auto;text-align:center;">
      <p style="color:rgba(255,255,255,0.5);font-size:10px;letter-spacing:4px;text-transform:uppercase;margin-bottom:16px;">— Tim Profesional —</p>
      <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(26px,4vw,44px);font-weight:800;color:white;letter-spacing:-1.5px;margin-bottom:18px;line-height:1.05;">Ditangani Langsung oleh Ahlinya</h2>
      <p style="color:rgba(255,255,255,0.65);font-size:16px;line-height:1.8;margin-bottom:36px;max-width:560px;margin-left:auto;margin-right:auto;">Setiap tenaga kerja kami telah menjalani pelatihan khusus dan memiliki sertifikasi resmi untuk memastikan hasil terbaik bagi Anda.</p>
      <div style="display:flex;gap:40px;justify-content:center;flex-wrap:wrap;margin-bottom:40px;">
        ${[
          { icon:'🏆', num:'10+', label:'Tahun Pengalaman' },
          { icon:'👩‍⚕️', num:'15+', label:'Tenaga Profesional' },
          { icon:'😊', num:'5000+', label:'Klien Puas' },
        ].map(s => `<div style="text-align:center;">
          <div style="font-size:28px;margin-bottom:6px;">${s.icon}</div>
          <div style="font-family:'${tmpl.fontHead}',serif;font-size:28px;font-weight:800;color:white;line-height:1;">${s.num}</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.55);margin-top:4px;letter-spacing:0.5px;">${s.label}</div>
        </div>`).join(`<div style="width:1px;background:rgba(255,255,255,0.15);"></div>`)}
      </div>
      <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:9px;background:white;color:${pal.primary};padding:14px 32px;border-radius:99px;font-size:15px;font-weight:800;box-shadow:0 16px 40px rgba(0,0,0,0.25);">${waSvg} Booking Sekarang</a>
    </div>
  </section>`;

  if (fitur.includes('review')) html += buildTestimoni(tmpl, pal);
  if (fitur.includes('lokasi')) html += buildLokasi(nama, pal);

  // ── CTA WA ──
  if (fitur.includes('wa')) {
    html += `<section id="kontak" style="padding:80px 44px;background:${pal.primary};text-align:center;">
      <div style="font-size:40px;margin-bottom:18px;">${tmpl.emoji}</div>
      <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:32px;font-weight:800;color:white;margin-bottom:12px;letter-spacing:-0.5px;">Siap Tampil Lebih Cantik & Sehat?</h2>
      <p style="color:rgba(255,255,255,0.78);font-size:15px;line-height:1.75;margin-bottom:30px;max-width:480px;margin-left:auto;margin-right:auto;">Booking sekarang via WhatsApp — mudah, cepat, dan langsung terkonfirmasi.</p>
      <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:10px;background:white;color:${pal.primary};padding:14px 36px;border-radius:99px;font-size:16px;font-weight:800;">${waSvg} Chat & Booking Sekarang</a>
    </section>`;
  }

  html += buildFooter(nama, tmpl, pal);
  return baseStyle + html;
}
