// ══════════════════════════════════════════════
//  WebCraft AI — generator/fashion.js
//  Cinematic: High-fashion editorial aesthetic
//  Tone: Stark contrast, runway, studio lighting
// ══════════════════════════════════════════════

function buildFashion(nama, pal, tmpl, wa, fitur, galleryImages) {
  let html = '';
  const fontImport = `@import url('https://fonts.googleapis.com/css2?family=${tmpl.font}&display=swap');`;

  // ── Curated cinematic fashion & editorial imagery ──
  const heroImg    = 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1600&q=85&auto=format&fit=crop'; // haute couture model, editorial
  const fashImg1   = 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=700&q=80&auto=format&fit=crop'; // pria urban casual
  const fashImg2   = 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=700&q=80&auto=format&fit=crop'; // pria formal modern
  const fashImg3   = 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=700&q=80&auto=format&fit=crop'; // pria streetwear editorial
  const fashImg4   = 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=700&q=80&auto=format&fit=crop'; // pria smart casual
  const fashImg5   = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700&q=80&auto=format&fit=crop'; // pria style rapi
  const fashImg6   = 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=700&q=80&auto=format&fit=crop'; // pria outfit minimalist
  const fashImg7   = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80&auto=format&fit=crop'; // pria kasual trendi
  const fashImg8   = 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&q=80&auto=format&fit=crop'; // pria kacamata retro outdoor
  const stripBg    = 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1400&q=80&auto=format&fit=crop'; // fashion runway dark
  // 8 slot produk — semua unik, tidak ada yang sama
  const prodImgs   = [fashImg1, fashImg2, fashImg3, fashImg4, fashImg5, fashImg6, fashImg7, fashImg8];

  const waSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

  const baseStyle = `
    <style>
      ${fontImport}
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family:'${tmpl.fontBody}',sans-serif; background:${pal.bg}; color:${pal.text}; }
      a { text-decoration:none; }
      @keyframes fadeInUp   { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
      @keyframes fadeInLeft { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
      @keyframes kenBurns  { 0%{transform:scale(1)} 100%{transform:scale(1.06)} }
      @keyframes marquee   { from{transform:translateX(0)} to{transform:translateX(-10%)} }
      .fade-in  { animation: fadeInUp   0.9s cubic-bezier(.22,1,.36,1) both; }
      .cine-strip { position:relative; background-image:url('${stripBg}'); background-size:cover; background-position:center; background-attachment:fixed; }
      .cine-strip::before { content:''; position:absolute; inset:0; background:rgba(0,0,0,0.82); }
      .cine-strip > * { position:relative; z-index:1; }
      .prod-card { transition:transform 0.3s ease; cursor:pointer; }
      .prod-card:hover { transform:translateY(-6px); }
      .prod-card .img-wrap { overflow:hidden; border-radius:12px; position:relative; }
      .prod-card .img-wrap img { width:100%; height:260px; object-fit:cover; transition:transform 0.5s ease; display:block; }
      .prod-card:hover .img-wrap img { transform:scale(1.06); }
      /* shop-btn: visible by default, more prominent on hover */
      .shop-btn { opacity:0.88 !important; transition:opacity 0.25s, transform 0.25s !important; }
      .prod-card:hover .shop-btn { opacity:1 !important; transform:translateY(-1px) !important; }
      /* pesan-btn — always visible below image */
      .pesan-btn { display:flex; align-items:center; justify-content:center; gap:7px; width:100%; padding:9px 12px; border-radius:8px; font-size:12px; font-weight:700; letter-spacing:0.5px; text-transform:uppercase; transition:background 0.2s, transform 0.2s; text-decoration:none; margin-top:10px; }
      .pesan-btn:hover { transform:translateY(-1px); filter:brightness(1.1); }
      .upload-input { display:none; }
      .upload-button { position:absolute; top:14px; right:14px; display:inline-flex; align-items:center; gap:6px; background:rgba(255,255,255,0.95); color:#111; border:none; padding:10px 14px; border-radius:999px; font-size:11px; font-weight:700; letter-spacing:0.8px; box-shadow:0 18px 40px rgba(0,0,0,0.12); cursor:pointer; transition:transform 0.25s ease, background 0.25s ease; }
      .upload-button:hover { transform:translateY(-1px); background:rgba(255,255,255,1); }
      .gal-frame { position:relative; overflow:hidden; cursor:pointer; }
      .gal-frame img { width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease; display:block; }
      .gal-frame:hover img { transform:scale(1.06); }
      .gal-frame::after { content:''; position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,0.55) 0%,transparent 60%); pointer-events:none; }

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
        /* Fashion hero: split 52/48 → single col */
        section#beranda[style*="grid-template-columns"] {
          display: flex !important;
          flex-direction: column !important;
          min-height: 100svh !important;
        }
        /* Left copy panel */
        section#beranda > div:first-child {
          padding: 90px 18px 36px !important;
          order: 1 !important;
          width: 100% !important;
        }
        /* Right photo panel → background-like strip */
        section#beranda > div:last-child {
          order: 0 !important;
          width: 100% !important;
          height: 220px !important;
          position: relative !important;
          flex-shrink: 0 !important;
        }
        section#beranda > div:last-child > div[style*="position:absolute"] {
          display: none !important;
        }
      }
    </style>`;

  if (fitur.includes('promo')) {
    html += `<div style="background:${pal.text};color:white;text-align:center;padding:10px 20px;font-size:12px;letter-spacing:3.5px;font-weight:600;text-transform:uppercase;">
      ✦ FREE ONGKIR Pembelian di atas Rp 200.000 &nbsp;·&nbsp; Kode: <strong>FASHION25</strong> &nbsp;·&nbsp; ✦
    </div>`;
  }

  const navLinks = [
    { label:'Koleksi',  href:'#koleksi', show: fitur.includes('menu')   },
    { label:'Lookbook', href:'#galeri',  show: fitur.includes('galeri') },
    { label:'Ulasan',   href:'#tentang', show: fitur.includes('review') },
    { label:'Lokasi',   href:'#lokasi',  show: fitur.includes('lokasi') },
  ].filter(l => l.show);

  html += `<nav style="position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:18px 44px;background:rgba(0,0,0,0.52);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,0.06);">
    <div style="display:flex;gap:30px;">
      ${navLinks.map(l => `<a href="${l.href}" style="color:rgba(255,255,255,0.65);font-size:11px;letter-spacing:2.5px;text-transform:uppercase;font-weight:500;transition:color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.65)'">${l.label}</a>`).join('')}
    </div>
    <span style="font-family:'${tmpl.fontHead}',serif;color:white;font-size:22px;font-weight:800;letter-spacing:-0.5px;">${nama}</span>
    <a href="${wa}" target="_blank" rel="noopener noreferrer" style="color:white;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:600;padding-bottom:2px;border-bottom:1px solid rgba(255,255,255,0.5);">Order →</a>
  </nav>`;

  // HERO — split editorial
  html += `<section id="beranda" style="position:relative;min-height:100vh;display:grid;grid-template-columns:1fr 1fr;overflow:hidden;">
    <!-- Left: Dark editorial copy -->
    <div style="position:relative;background:#0a0a0a;display:flex;flex-direction:column;justify-content:center;padding:140px 56px 80px;z-index:2;" class="fade-in">
      <p style="color:rgba(255,255,255,0.35);font-size:10px;letter-spacing:5px;text-transform:uppercase;margin-bottom:24px;">— ${tmpl.badge} 2025 —</p>
      <h1 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(36px,5vw,62px);font-weight:800;line-height:1.04;color:white;letter-spacing:-2px;margin-bottom:20px;">${tmpl.headline}</h1>
      <p style="color:rgba(255,255,255,0.55);font-size:15px;line-height:1.8;margin-bottom:36px;max-width:380px;">${tmpl.sub}</p>
      <div style="display:flex;gap:12px;margin-bottom:48px;">
        <a href="#koleksi" style="background:white;color:#0a0a0a;padding:13px 30px;font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;border-radius:2px;">SHOP NOW</a>
        <a href="${wa}" target="_blank" rel="noopener noreferrer" style="background:transparent;color:white;border:1px solid rgba(255,255,255,0.3);padding:13px 24px;font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;border-radius:2px;">WhatsApp</a>
      </div>
      <!-- Stats row -->
      <div style="display:flex;gap:28px;padding-top:28px;border-top:1px solid rgba(255,255,255,0.08);">
        ${tmpl.stats.map(s => `<div>
          <div style="font-family:'${tmpl.fontHead}',serif;font-size:22px;font-weight:800;color:${pal.accent};">${s.num}</div>
          <div style="font-size:10px;color:rgba(255,255,255,0.4);letter-spacing:1px;margin-top:3px;">${s.label}</div>
        </div>`).join('')}
      </div>
    </div>
    <!-- Right: Full cinematic photo -->
    <div style="position:relative;overflow:hidden;">
      <div style="position:absolute;inset:0;background-image:url('${heroImg}');background-size:cover;background-position:center top;animation:kenBurns 10s ease-in-out infinite alternate;"></div>
      <!-- Side gradient -->
      <div style="position:absolute;inset:0;background:linear-gradient(to right,#0a0a0a 0%,transparent 25%,transparent 75%,rgba(0,0,0,0.3) 100%);"></div>
      <!-- Badge overlay -->
      <div style="position:absolute;bottom:40px;right:32px;z-index:3;">
        <div style="background:rgba(255,255,255,0.1);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.2);border-radius:12px;padding:14px 20px;text-align:center;">
          <div style="font-family:'${tmpl.fontHead}',serif;font-size:28px;font-weight:800;color:white;">New</div>
          <div style="font-size:10px;color:rgba(255,255,255,0.6);letter-spacing:2px;text-transform:uppercase;">Collection</div>
        </div>
      </div>
    </div>
    <!-- Scroll hint -->
    <div style="position:absolute;bottom:28px;left:50%;transform:translateX(-50%);z-index:5;display:flex;flex-direction:column;align-items:center;gap:5px;opacity:0.4;">
      <span style="color:white;font-size:10px;letter-spacing:2.5px;text-transform:uppercase;">Scroll</span>
      <div style="width:1px;height:28px;background:linear-gradient(to bottom,white,transparent);"></div>
    </div>
  </section>`;

  // Scrolling marquee ticker
  html += `<div style="background:${pal.primary};overflow:hidden;padding:13px 0;">
    <div style="display:inline-block;white-space:nowrap;will-change:transform;animation:marquee 22s linear infinite;color:white;font-size:13px;font-weight:700;letter-spacing:0.5px;">${
      Array(10).fill('&nbsp;&nbsp;✦ NEW COLLECTION &nbsp;&nbsp;✦ FREE ONGKIR &nbsp;&nbsp;✦ QUALITY PREMIUM &nbsp;&nbsp;✦ STYLE YOUR STORY').join('')
    }&nbsp;&nbsp;</div>
  </div>`;

  // KOLEKSI — photo grid
  if (fitur.includes('menu')) {
    html += `<section id="koleksi" style="padding:80px 40px;background:${pal.bg};">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:40px;">
        <div>
          <p style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:${pal.muted};margin-bottom:10px;">Koleksi Terbaru</p>
          <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(26px,3vw,38px);font-weight:800;color:${pal.text};letter-spacing:-0.8px;">Pilihan Style Terbaik</h2>
        </div>
        <div style="display:flex;gap:20px;">
          ${tmpl.categories.map(c => `<span style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${pal.muted};cursor:pointer;padding-bottom:3px;border-bottom:1px solid transparent;transition:all 0.2s;" onmouseover="this.style.color='${pal.primary}';this.style.borderColor='${pal.primary}'" onmouseout="this.style.color='${pal.muted}';this.style.borderColor='transparent'">${c}</span>`).join('')}
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:20px;">
        ${tmpl.menuItems.map((item, i) => `<div class="prod-card">
          <div class="img-wrap">
            <img id="collection-img-${i}" src="${prodImgs[i % prodImgs.length]}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/seed/fashion'+${i}+'/700/500';" style="background:#f0f0f0;">
            ${item.badge ? `<div style="position:absolute;top:12px;left:12px;background:${pal.btn};color:white;font-size:10px;padding:3px 10px;border-radius:99px;font-weight:700;">${item.badge}</div>` : ''}
            <input type="file" id="upload-style-${i}" class="upload-input" accept="image/*" onchange="uploadCollectionImage(event, ${i})">
            <button type="button" class="upload-button" onclick="event.stopPropagation(); document.getElementById('upload-style-${i}').click();">📤 Upload</button>
            <a href="${wa}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" style="position:absolute;bottom:12px;left:12px;right:12px;background:rgba(0,0,0,0.78);color:white;text-align:center;padding:9px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;border-radius:6px;backdrop-filter:blur(6px);" class="shop-btn">🛍 Order Sekarang</a>
          </div>
          <div style="padding:12px 4px;">
            <div style="font-size:11px;color:${pal.muted};letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">${item.cat}</div>
            <div style="font-weight:700;font-size:15px;color:${pal.text};margin-bottom:4px;">${item.name}</div>
            <div style="font-size:12px;color:${pal.muted};margin-bottom:8px;line-height:1.4;">${item.desc}</div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div style="font-size:17px;font-weight:800;color:${pal.primary};">${item.price}</div>
              <a href="${wa}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="pesan-btn" style="background:${pal.btn};color:white;width:auto;margin-top:0;padding:7px 14px;border-radius:7px;font-size:11px;">${waSvg} Pesan</a>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </section>`;
  }

  // LOOKBOOK — masonry style
  if (fitur.includes('galeri')) {
    const gallFallbacks = [fashImg1, fashImg2, fashImg3, fashImg4, fashImg5, fashImg6];
    const labels = ['Editorial','Campaign','Lookbook','Studio','Street','Detail'];
    html += `<section id="galeri" style="padding:80px 40px;background:#0a0a0a;">
      <div style="text-align:center;margin-bottom:48px;">
        <p style="color:rgba(255,255,255,0.35);font-size:10px;letter-spacing:4px;text-transform:uppercase;margin-bottom:12px;">— Visual —</p>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(28px,3.5vw,44px);font-weight:800;color:white;letter-spacing:-1.5px;">Lookbook</h2>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:240px 240px;gap:6px;max-width:960px;margin:0 auto;border-radius:16px;overflow:hidden;">
        ${[0,1,2,3,4].map(i => {
          const userImg = galleryImages && galleryImages[i];
          const fb = gallFallbacks[i % gallFallbacks.length];
          const isLarge = i === 0;
          return `<div class="gal-frame webcraftai-gallery-frame" data-gallery-index="${i}" style="${isLarge?'grid-row:span 2;':''}">
            <img ${userImg?`class="webcraftai-gallery-img" src="${userImg}"`:`src="${fb}"`} alt="${labels[i]}" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/seed/look'+i+'/800/600';" style="background:#111;width:100%;height:100%;object-fit:cover;display:block;">
            <button type="button" class="gal-upload-btn" onclick="event.stopPropagation();openGalUpload(this);" style="position:absolute;top:10px;right:10px;z-index:10;display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,0.92);color:#111;border:none;padding:6px 11px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:0.5px;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,0.2);backdrop-filter:blur(6px);transition:transform 0.2s,background 0.2s;" onmouseover="this.style.background='white';this.style.transform='translateY(-1px)';" onmouseout="this.style.background='rgba(255,255,255,0.92)';this.style.transform='none';">📷 Upload</button>
            <div style="position:absolute;bottom:14px;left:14px;z-index:1;pointer-events:none;">
              <span style="font-size:10px;color:rgba(255,255,255,0.7);letter-spacing:2px;text-transform:uppercase;font-weight:600;">${labels[i]}</span>
            </div>
          </div>`;
        }).join('')}
      </div>
    </section>`;
  }

  if (fitur.includes('review')) html += buildTestimoni(tmpl, pal);

  html += `<section class="cine-strip" style="padding:100px 40px;">
    <div style="max-width:600px;margin:0 auto;text-align:center;">
      <p style="color:rgba(255,255,255,0.35);font-size:10px;letter-spacing:4px;text-transform:uppercase;margin-bottom:16px;">— Order via WhatsApp —</p>
      <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(28px,4.5vw,52px);font-weight:800;color:white;letter-spacing:-2px;margin-bottom:16px;line-height:1.0;">"${tmpl.tagline}"</h2>
      <p style="color:rgba(255,255,255,0.5);font-size:15px;line-height:1.75;margin-bottom:32px;">DM kami atau chat langsung untuk order dan konsultasi style</p>
      <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:10px;background:white;color:#0a0a0a;padding:14px 34px;font-size:14px;font-weight:800;letter-spacing:1px;text-transform:uppercase;border-radius:2px;box-shadow:0 12px 32px rgba(0,0,0,0.4);">${waSvg} CHAT SEKARANG</a>
    </div>
  </section>`;

  if (fitur.includes('lokasi')) html += buildLokasi(nama, pal);

  if (fitur.includes('wa')) {
    html += `<section id="kontak" style="padding:72px 40px;background:${pal.text};text-align:center;">
      <p style="color:rgba(255,255,255,0.35);font-size:10px;letter-spacing:4px;text-transform:uppercase;margin-bottom:16px;">— Hubungi Kami —</p>
      <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:30px;color:white;margin-bottom:24px;">${tmpl.tagline}</h2>
      <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:10px;background:#25D366;color:white;padding:14px 36px;border-radius:4px;font-size:15px;font-weight:700;letter-spacing:1px;">${waSvg} CHAT SEKARANG</a>
    </section>`;
  }

  html += buildFooter(nama, tmpl, pal);

  html += `<script>
    function uploadCollectionImage(event, index) {
      const file = event.target.files[0];
      if (!file || !file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = document.getElementById('collection-img-' + index);
        if (!img) return;
        img.src = e.target.result;
        img.style.objectFit = 'contain';
      };
      reader.readAsDataURL(file);
    }
  </script>`;

  return baseStyle + html;
}
