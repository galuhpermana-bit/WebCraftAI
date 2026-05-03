// ══════════════════════════════════════════════
//  WebCraft AI — generator/properti.js
//  Layout builder untuk kategori Properti & Mebel
//  Desain: Cinematic hero, luxury interior aesthetic
// ══════════════════════════════════════════════

function buildProperti(nama, pal, tmpl, wa, fitur, galleryImages) {
  let html = '';
  const fontImport = `@import url('https://fonts.googleapis.com/css2?family=${tmpl.font}&display=swap');`;

  // Gambar hero cinematic — Unsplash properti & interior
  const heroImg   = 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85&auto=format&fit=crop';
  const img2      = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80&auto=format&fit=crop';
  const img3      = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80&auto=format&fit=crop';
  const img4      = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&auto=format&fit=crop';
  const imgMebel1 = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80&auto=format&fit=crop';
  const imgMebel2 = 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=700&q=80&auto=format&fit=crop';
  const imgMebel3 = 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=700&q=80&auto=format&fit=crop';

  const baseStyle = `
    <style>
      ${fontImport}
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family:'${tmpl.fontBody}',sans-serif; background:${pal.bg}; color:${pal.text}; }
      a { text-decoration:none; }

      @keyframes fadeInUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
      @keyframes fadeInLeft { from{opacity:0;transform:translateX(-24px)} to{opacity:1;transform:translateX(0)} }
      @keyframes parallaxPan { 0%{background-position:50% 60%} 100%{background-position:50% 40%} }
      @keyframes cinemaReveal { from{clip-path:inset(0 100% 0 0)} to{clip-path:inset(0 0% 0 0)} }
      @keyframes shimmer { 0%{opacity:0.5} 50%{opacity:1} 100%{opacity:0.5} }

      .fade-in    { animation: fadeInUp   0.7s cubic-bezier(.22,1,.36,1) both; }
      .fade-left  { animation: fadeInLeft 0.7s cubic-bezier(.22,1,.36,1) both; }

      /* ── Glassmorphism card ── */
      .glass-card {
        background: rgba(255,255,255,0.06);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border: 1px solid rgba(255,255,255,0.15);
      }

      /* ── Property listing card ── */
      .prop-card {
        background: ${pal.card};
        border: 1px solid ${pal.border};
        border-radius: 20px;
        overflow: hidden;
        transition: transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease;
        cursor: pointer;
      }
      .prop-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 24px 48px rgba(0,0,0,0.13);
      }
      .prop-card .img-wrap {
        position: relative;
        height: 200px;
        overflow: hidden;
      }
      .prop-card .img-wrap img {
        width:100%; height:100%; object-fit:cover;
        transition: transform 0.5s ease;
      }
      .prop-card:hover .img-wrap img { transform: scale(1.06); }
      .upload-input { display:none; }
      .upload-button { position:absolute; top:14px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.95); color:#111; border:none; padding:9px 12px; border-radius:999px; font-size:11px; font-weight:700; letter-spacing:0.7px; box-shadow:0 18px 40px rgba(0,0,0,0.12); cursor:pointer; transition:transform 0.25s ease, background 0.25s ease; z-index:2; }
      .upload-button:hover { transform:translateY(-1px); background:white; }

      /* ── Cinematic parallax strip ── */
      .cinema-strip {
        position: relative;
        background-image: url('${img3}');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
      }
      .cinema-strip::before {
        content:'';
        position:absolute; inset:0;
        background: linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 100%);
      }
      .cinema-strip > * { position:relative; z-index:1; }

      /* ════════════════════════════════
         MOBILE RESPONSIVE — max 640px
         ════════════════════════════════ */
      @media (max-width: 640px) {
        /* NAV */
        nav {
          padding: 12px 16px !important;
          flex-wrap: nowrap !important;
          gap: 8px !important;
        }
        nav > div:nth-child(2) { display: none !important; }
        nav span[style*="font-size:21"],
        nav span[style*="font-size:20"] {
          font-size: 15px !important;
          letter-spacing: -0.2px !important;
        }
        nav a[style*="border-radius:99px"],
        nav a[style*="border-radius:8px"] {
          padding: 8px 14px !important;
          font-size: 12px !important;
          white-space: nowrap !important;
        }

        /* HERO SECTION */
        section#beranda {
          min-height: 100svh !important;
          overflow-x: hidden !important;
          display: flex !important;
          align-items: flex-end !important;
        }
        /* Hero content padding */
        section#beranda > div[style*="z-index:2"],
        section#beranda > div[style*="z-index: 2"] {
          padding: 90px 18px 60px !important;
          max-width: 100% !important;
        }
        /* Hero headline */
        section#beranda h1 {
          font-size: clamp(26px, 9vw, 40px) !important;
          letter-spacing: -1px !important;
        }
        /* Hero sub text */
        section#beranda p {
          font-size: 14px !important;
          max-width: 100% !important;
        }
        /* CTA buttons — stack vertical */
        section#beranda > div[style*="z-index:2"] > div[style*="display:flex"][style*="gap:14px"],
        section#beranda > div[style*="z-index:2"] > div[style*="display:flex"][style*="gap: 14px"] {
          flex-direction: column !important;
          gap: 10px !important;
        }
        section#beranda a[style*="padding:14px"] {
          width: 100% !important;
          justify-content: center !important;
          font-size: 14px !important;
          padding: 13px 18px !important;
        }
        /* Stats row — wrap */
        section#beranda > div[style*="z-index:2"] > div[style*="gap:32px"],
        section#beranda > div[style*="z-index:2"] > div[style*="gap: 32px"] {
          flex-wrap: wrap !important;
          gap: 16px 24px !important;
        }
        /* Hide ALL absolute floating elements in hero */
        section#beranda > div[style*="position:absolute"][style*="right"],
        section#beranda > div[style*="right:64"],
        section#beranda > div[style*="right: 64"] {
          display: none !important;
        }
        /* Scroll hint */
        section#beranda > div[style*="bottom:28px"] {
          display: none !important;
        }

        /* GENERAL SECTIONS */
        section[style*="padding:80px"],
        section[style*="padding: 80px"],
        section[style*="padding:100px"],
        section[style*="padding:96px"],
        section[style*="padding:90px"] {
          padding-left: 16px !important;
          padding-right: 16px !important;
          padding-top: 52px !important;
          padding-bottom: 52px !important;
        }

        /* 2-col grids → 1 col */
        div[style*="grid-template-columns:1fr 1fr"],
        div[style*="grid-template-columns: 1fr 1fr"],
        div[style*="grid-template-columns:2fr 1fr"],
        div[style*="grid-template-columns: 2fr 1fr"] {
          grid-template-columns: 1fr !important;
        }

        /* Product/menu card grids */
        div[style*="grid-template-columns:repeat(auto-fill,minmax(2"],
        div[style*="grid-template-columns: repeat(auto-fill"] {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 12px !important;
        }

        /* Gallery grids */
        div[style*="grid-template-columns:1fr 1fr 1fr"],
        div[style*="grid-template-columns: 1fr 1fr 1fr"] {
          grid-template-columns: 1fr 1fr !important;
          grid-template-rows: auto !important;
        }
        div[style*="grid-row:span 2"],
        div[style*="grid-row: span 2"] {
          grid-row: span 1 !important;
        }

        /* Feature badge rows */
        div[style*="grid-template-columns:repeat(4,1fr)"],
        div[style*="grid-template-columns: repeat(4,1fr)"],
        div[style*="grid-template-columns:repeat(3,1fr)"],
        div[style*="grid-template-columns: repeat(3,1fr)"] {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 10px !important;
        }

        /* CTA section inline grid → stack */
        section[style*="display:grid"][style*="grid-template-columns:1fr auto"] {
          display: flex !important;
          flex-direction: column !important;
          gap: 20px !important;
          text-align: center !important;
        }
        section[style*="display:grid"][style*="grid-template-columns:1fr auto"] a {
          width: 100% !important;
          justify-content: center !important;
        }

        /* Typography scale */
        h2[style*="font-size:clamp(28"] { font-size: clamp(22px,7vw,30px) !important; }
        h2[style*="font-size:clamp(26"] { font-size: clamp(22px,7vw,30px) !important; }
        h2[style*="font-size:32px"]     { font-size: 24px !important; }

        /* Misc overflow guards */
        body { overflow-x: hidden !important; }
        * { max-width: 100vw; }
      }
      @media (max-width: 640px) {
        /* Bento grid 2x2 → single col */
        div[style*="grid-template-columns:1fr 1fr;grid-template-rows:180px"] {
          grid-template-columns: 1fr !important;
          grid-template-rows: auto !important;
        }
        div[style*="grid-row:span 2"] { grid-row: span 1 !important; }
      }
    </style>`;

  // ── PROMO BANNER ──
  if (fitur.includes('promo')) {
    html += `<div style="background:linear-gradient(90deg,${pal.primary},${pal.accent},${pal.primary});background-size:200%;color:white;text-align:center;padding:11px 20px;font-size:13px;font-weight:700;letter-spacing:0.5px;">
      🏠 PROMO AKHIR TAHUN — DP Ringan 5% + Free Biaya Notaris senilai Rp 5.000.000!&nbsp;&nbsp;|&nbsp;&nbsp;Berlaku s.d. 31 Desember
    </div>`;
  }

  // ── NAVBAR — glassmorphism over hero ──
  const navLinks = [
    { label: 'Properti',  href: '#listing', show: fitur.includes('menu')   },
    { label: 'Mebel',     href: '#mebel',   show: true                     },
    { label: 'Galeri',    href: '#galeri',  show: fitur.includes('galeri') },
    { label: 'Testimoni', href: '#review',  show: fitur.includes('review') },
    { label: 'Lokasi',    href: '#lokasi',  show: fitur.includes('lokasi') },
  ].filter(l => l.show);

  html += `<nav id="main-nav" style="position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:18px 40px;transition:all 0.35s ease;background:rgba(5,5,12,0.45);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-bottom:1px solid rgba(255,255,255,0.08);">
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="width:36px;height:36px;background:${pal.primary};border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;">🏡</div>
      <span style="font-family:'${tmpl.fontHead}',serif;color:white;font-size:20px;font-weight:700;letter-spacing:-0.5px;">${nama}</span>
    </div>
    <div style="display:flex;gap:28px;">
      ${navLinks.map(l => `<a href="${l.href}" style="color:rgba(255,255,255,0.75);font-size:13px;font-weight:500;letter-spacing:0.3px;transition:color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.75)'">${l.label}</a>`).join('')}
    </div>
    <a href="${wa}" target="_blank" rel="noopener noreferrer" style="background:${pal.btn};color:white;padding:9px 22px;border-radius:99px;font-size:13px;font-weight:700;letter-spacing:0.3px;">Konsultasi Gratis</a>
  </nav>`;

  // ── HERO — Cinematic Full Viewport ──
  html += `<section id="beranda" style="position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden;">

    <!-- Background image layer -->
    <div style="position:absolute;inset:0;background-image:url('${heroImg}');background-size:cover;background-position:center 60%;animation:parallaxPan 12s ease-in-out infinite alternate;"></div>

    <!-- Cinematic gradient overlay — dark vignette -->
    <div style="position:absolute;inset:0;background:linear-gradient(110deg, rgba(2,4,12,0.88) 0%, rgba(5,10,25,0.65) 45%, rgba(0,0,0,0.15) 100%);"></div>
    <!-- Bottom fade -->
    <div style="position:absolute;bottom:0;left:0;right:0;height:220px;background:linear-gradient(to top, ${pal.bg}, transparent);"></div>
    <!-- Top fade for nav area -->
    <div style="position:absolute;top:0;left:0;right:0;height:120px;background:linear-gradient(to bottom, rgba(0,0,0,0.4), transparent);"></div>

    <!-- Film grain overlay -->
    <div style="position:absolute;inset:0;opacity:0.03;background-image:url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/></filter><rect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%221%22/></svg>');pointer-events:none;"></div>

    <!-- Content -->
    <div style="position:relative;z-index:2;padding:130px 60px 80px;max-width:780px;" class="fade-in">
      <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);padding:6px 16px;border-radius:99px;margin-bottom:28px;">
        <span style="width:7px;height:7px;background:${pal.accent};border-radius:50%;animation:shimmer 1.8s ease infinite;"></span>
        <span style="color:rgba(255,255,255,0.9);font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;">${tmpl.badge}</span>
      </div>
      <h1 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(36px,5.5vw,68px);font-weight:800;line-height:1.08;color:white;margin-bottom:22px;letter-spacing:-1.5px;">${tmpl.headline}</h1>
      <p style="color:rgba(255,255,255,0.72);font-size:17px;line-height:1.75;margin-bottom:40px;max-width:520px;">${tmpl.sub}</p>
      <div style="display:flex;gap:14px;flex-wrap:wrap;">
        <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:9px;background:${pal.btn};color:white;padding:14px 30px;border-radius:12px;font-size:15px;font-weight:700;box-shadow:0 8px 24px rgba(0,0,0,0.3);">🏡 Lihat Properti</a>
        <a href="#listing" style="display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,0.1);color:white;border:1px solid rgba(255,255,255,0.25);padding:14px 26px;border-radius:12px;font-size:15px;font-weight:600;backdrop-filter:blur(6px);">Cek Katalog →</a>
      </div>
    </div>

    <!-- Floating stats cards kanan -->
    <div style="position:absolute;right:60px;bottom:100px;z-index:3;display:flex;flex-direction:column;gap:12px;" class="fade-in">
      ${tmpl.stats.map((s,i) => `
      <div class="glass-card" style="padding:16px 24px;border-radius:16px;text-align:right;animation-delay:${i*0.12}s;">
        <div style="font-family:'${tmpl.fontHead}',serif;font-size:26px;font-weight:800;color:white;">${s.num}</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.65);margin-top:2px;letter-spacing:0.5px;">${s.label}</div>
      </div>`).join('')}
    </div>

    <!-- Scroll hint -->
    <div style="position:absolute;bottom:36px;left:50%;transform:translateX(-50%);z-index:3;display:flex;flex-direction:column;align-items:center;gap:6px;opacity:0.6;">
      <span style="color:white;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Scroll</span>
      <div style="width:1px;height:36px;background:linear-gradient(to bottom,white,transparent);"></div>
    </div>
  </section>`;

  // ── PROPERTY LISTING ──
  if (fitur.includes('menu')) {
    const propImgs = [img2, imgMebel1, img4, img3, imgMebel2, imgMebel3, img2, imgMebel1];
    html += `<section id="listing" style="padding:80px 40px;background:${pal.bg};">
      <div style="text-align:center;margin-bottom:56px;">
        <div style="display:inline-block;background:${pal.tagBg};color:${pal.tag};padding:5px 16px;border-radius:99px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;">Listing Terbaru</div>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(28px,3vw,40px);font-weight:800;color:${pal.text};letter-spacing:-0.8px;margin-bottom:10px;">Temukan Hunian Ideal Anda</h2>
        <p style="color:${pal.muted};font-size:15px;max-width:500px;margin:0 auto;line-height:1.7;">Pilihan properti premium & mebel berkualitas, dikurasi khusus untuk Anda</p>
      </div>
      ${tmpl.categories.map(cat => {
        const items = tmpl.menuItems.filter(i => i.cat === cat);
        if (!items.length) return '';
        return `<div style="margin-bottom:52px;">
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:24px;">
            <h3 style="font-size:12px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:${pal.muted};">${cat}</h3>
            <div style="flex:1;height:1px;background:${pal.border};"></div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:22px;">
            ${items.map((item, idx) => `
            <div class="prop-card">
              <div class="img-wrap" style="position:relative;height:200px;overflow:hidden;">
                <img id="property-img-${cat.replace(/\s+/g,'-')}-${idx}" src="${propImgs[idx % propImgs.length]}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/seed/imgpro'+Math.random().toString(36).slice(2,6)+'/700/500';" style="background:#111;">
                <button type="button" class="upload-button" onclick="event.stopPropagation(); document.getElementById('upload-${cat.replace(/\s+/g,'-')}-${idx}').click();">Upload</button>
                <input type="file" id="upload-${cat.replace(/\s+/g,'-')}-${idx}" class="upload-input" accept="image/*" onchange="uploadImage(event, 'property-img-${cat.replace(/\s+/g,'-')}-${idx}')">
                ${item.badge ? `<div style="position:absolute;top:12px;left:12px;background:${pal.btn};color:white;padding:4px 12px;border-radius:99px;font-size:11px;font-weight:700;">${item.badge}</div>` : ''}
                <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.45) 0%,transparent 55%);"></div>
              </div>
              <div style="padding:20px;">
                <div style="font-weight:700;font-size:16px;color:${pal.text};margin-bottom:5px;">${item.name}</div>
                <div style="font-size:13px;color:${pal.muted};line-height:1.55;margin-bottom:14px;">${item.desc}</div>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <div style="font-family:'${tmpl.fontHead}',serif;font-size:18px;font-weight:800;color:${pal.primary};">${item.price}</div>
                  <a href="${wa}" target="_blank" rel="noopener noreferrer" style="background:${pal.tagBg};color:${pal.tag};padding:7px 14px;border-radius:8px;font-size:12px;font-weight:700;">Tanya →</a>
                </div>
              </div>
            </div>`).join('')}
          </div>
        </div>`;
      }).join('')}
    </section>`;
  }

  // ── MEBEL SHOWCASE — Bento grid layout ──
  html += `<section id="mebel" style="padding:80px 40px;background:${pal.card};">
    <div style="max-width:1100px;margin:0 auto;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;margin-bottom:64px;">
        <div>
          <div style="display:inline-block;background:${pal.tagBg};color:${pal.tag};padding:5px 16px;border-radius:99px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:16px;">Koleksi Furnitur</div>
          <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(26px,3vw,38px);font-weight:800;color:${pal.text};letter-spacing:-0.8px;margin-bottom:16px;">Furniture Impor & Lokal Pilihan</h2>
          <p style="color:${pal.muted};font-size:15px;line-height:1.75;margin-bottom:28px;">Setiap furnitur kami dipilih dengan cermat — material premium, desain timeless, dan ketahanan jangka panjang untuk melengkapi rumah impian Anda.</p>
          <div style="display:flex;gap:24px;">
            <div style="text-align:center;">
              <div style="font-family:'${tmpl.fontHead}',serif;font-size:28px;font-weight:800;color:${pal.primary};">200+</div>
              <div style="font-size:12px;color:${pal.muted};margin-top:2px;">SKU Furnitur</div>
            </div>
            <div style="width:1px;background:${pal.border};"></div>
            <div style="text-align:center;">
              <div style="font-family:'${tmpl.fontHead}',serif;font-size:28px;font-weight:800;color:${pal.primary};">5★</div>
              <div style="font-size:12px;color:${pal.muted};margin-top:2px;">Rating Produk</div>
            </div>
            <div style="width:1px;background:${pal.border};"></div>
            <div style="text-align:center;">
              <div style="font-family:'${tmpl.fontHead}',serif;font-size:28px;font-weight:800;color:${pal.primary};">Free</div>
              <div style="font-size:12px;color:${pal.muted};margin-top:2px;">Ongkos Kirim</div>
            </div>
          </div>
        </div>
        <!-- Bento image grid -->
        <div style="display:grid;grid-template-columns:1fr 1fr;grid-template-rows:180px 180px;gap:10px;border-radius:20px;overflow:hidden;">
          <div style="grid-row:span 2;overflow:hidden;border-radius:14px;position:relative;">
            <img id="mebel-img-1" src="${imgMebel1}" alt="Sofa" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <button type="button" class="upload-button" onclick="event.stopPropagation(); document.getElementById('upload-mebel-1').click();">Upload</button>
            <input type="file" id="upload-mebel-1" class="upload-input" accept="image/*" onchange="uploadImage(event, 'mebel-img-1')">
          </div>
          <div style="overflow:hidden;border-radius:14px;position:relative;">
            <img id="mebel-img-2" src="${imgMebel2}" alt="Chair" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <button type="button" class="upload-button" onclick="event.stopPropagation(); document.getElementById('upload-mebel-2').click();">Upload</button>
            <input type="file" id="upload-mebel-2" class="upload-input" accept="image/*" onchange="uploadImage(event, 'mebel-img-2')">
          </div>
          <div style="overflow:hidden;border-radius:14px;position:relative;">
            <img id="mebel-img-3" src="${imgMebel3}" alt="Interior" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <button type="button" class="upload-button" onclick="event.stopPropagation(); document.getElementById('upload-mebel-3').click();">Upload</button>
            <input type="file" id="upload-mebel-3" class="upload-input" accept="image/*" onchange="uploadImage(event, 'mebel-img-3')">
          </div>
        </div>
      </div>

      <!-- Feature badges row -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;">
        ${[
          { icon:'🪵', label:'Kayu Jati Asli',    sub:'Bersertifikat SVLK' },
          { icon:'🎨', label:'Custom Finishing',  sub:'Pilih warna sendiri' },
          { icon:'🚚', label:'Antar & Pasang',    sub:'Tim profesional' },
          { icon:'🛡️', label:'Garansi 3 Tahun',   sub:'Kualitas terjamin' },
        ].map(f => `
        <div style="background:${pal.bg};border:1px solid ${pal.border};border-radius:16px;padding:20px;text-align:center;">
          <div style="font-size:28px;margin-bottom:8px;">${f.icon}</div>
          <div style="font-weight:700;font-size:14px;color:${pal.text};margin-bottom:4px;">${f.label}</div>
          <div style="font-size:12px;color:${pal.muted};">${f.sub}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;

  // ── CINEMATIC CTA STRIP ──
  html += `<section class="cinema-strip" style="padding:100px 40px;">
    <div style="position:relative;z-index:1;max-width:700px;margin:0 auto;text-align:center;">
      <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(28px,4vw,48px);font-weight:800;color:white;letter-spacing:-1px;margin-bottom:18px;line-height:1.1;">"${tmpl.tagline}"</h2>
      <p style="color:rgba(255,255,255,0.72);font-size:16px;line-height:1.75;margin-bottom:36px;">Wujudkan rumah impian Anda bersama tim ahli kami. Konsultasi gratis, tanpa syarat, tanpa tekanan.</p>
      <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:10px;background:white;color:#111;padding:15px 36px;border-radius:99px;font-size:16px;font-weight:800;box-shadow:0 16px 40px rgba(0,0,0,0.3);">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Konsultasi via WhatsApp
      </a>
    </div>
  </section>`;

  // ── GALERI ──
  if (fitur.includes('galeri')) {
    const cinemaGallery = [img2, img4, imgMebel1, heroImg, imgMebel2, imgMebel3];
    html += `<section id="galeri" style="padding:80px 40px;background:${pal.bg};">
      <div style="text-align:center;margin-bottom:48px;">
        <div style="display:inline-block;background:${pal.tagBg};color:${pal.tag};padding:5px 16px;border-radius:99px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;">Galeri Interior</div>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(26px,3vw,38px);font-weight:800;color:${pal.text};letter-spacing:-0.8px;">Inspirasi Hunian Modern</h2>
      </div>
      <div style="display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:230px 230px;gap:12px;max-width:960px;margin:0 auto;">
        ${[0,1,2,3,4].map((i) => {
          const userImg = galleryImages && galleryImages[i];
          const fallback = cinemaGallery[i % cinemaGallery.length];
          return `<div class="webcraftai-gallery-frame" data-gallery-index="${i}" style="${i === 0 ? 'grid-row:span 2;' : ''}border-radius:18px;overflow:hidden;position:relative;cursor:pointer;">
            ${userImg
              ? `<img class="webcraftai-gallery-img" src="${userImg}" alt="Galeri ${i+1}" style="width:100%;height:100%;object-fit:cover;">`
              : `<img src="${fallback}" alt="Interior ${i+1}" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">`
            }
            <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.5) 0%,transparent 50%);pointer-events:none;"></div>
            <div style="position:absolute;bottom:12px;left:12px;font-size:11px;color:rgba(255,255,255,0.75);font-weight:600;letter-spacing:0.5px;">Interior 0${i+1}</div>
          </div>`;
        }).join('')}
      </div>
    </section>`;
  }

  // ── TESTIMONI ──
  if (fitur.includes('review')) {
    html += buildTestimoni(tmpl, pal);
  }

  // ── LOKASI ──
  if (fitur.includes('lokasi')) {
    html += buildLokasi(nama, pal);
  }

  // ── WA CTA ──
  if (fitur.includes('wa')) {
    html += `<section id="kontak" style="padding:80px 40px;background:${pal.primary};">
      <div style="max-width:620px;margin:0 auto;text-align:center;">
        <div style="font-size:42px;margin-bottom:20px;">🏡</div>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:32px;font-weight:800;color:white;margin-bottom:12px;letter-spacing:-0.5px;">Siap Wujudkan Hunian Impian?</h2>
        <p style="color:rgba(255,255,255,0.78);font-size:15px;line-height:1.75;margin-bottom:32px;">Tim konsultan properti kami siap membantu Anda menemukan rumah atau furnitur yang tepat sesuai anggaran.</p>
        <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:10px;background:white;color:${pal.primary};padding:14px 36px;border-radius:99px;font-size:16px;font-weight:800;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${pal.primary}"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Chat WhatsApp Sekarang
        </a>
      </div>
    </section>`;
  }

  html += buildFooter(nama, tmpl, pal);

  html += `<script>
    function uploadImage(event, targetId) {
      const file = event.target.files[0];
      if (!file || !file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = document.getElementById(targetId);
        if (img) {
          img.src = e.target.result;
          img.style.objectFit = 'contain';
        }
      };
      reader.readAsDataURL(file);
    }
  <\/script>`;

  return baseStyle + html;
}
