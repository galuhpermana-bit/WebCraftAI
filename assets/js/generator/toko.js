// ══════════════════════════════════════════════
//  WebCraft AI — generator/toko.js
//  Cinematic: Vibrant modern retail, fresh market
//  Tone: Bold color pops, energetic, deal-driven
// ══════════════════════════════════════════════

function buildToko(nama, pal, tmpl, wa, fitur, galleryImages) {
  let html = '';
  const fontImport = `@import url('https://fonts.googleapis.com/css2?family=${tmpl.font}&display=swap');`;

  // ── Vibrant retail & market imagery ──
  const heroImg   = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=85&auto=format&fit=crop';
  const shopImg1  = 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80&auto=format&fit=crop';
  const shopImg2  = 'https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&q=80&auto=format&fit=crop';
  const shopImg3  = 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=800&q=80&auto=format&fit=crop';
  const shopImg4  = 'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=800&q=80&auto=format&fit=crop';
  const shopImg5  = 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80&auto=format&fit=crop';
  const shopImg6  = 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=800&q=80&auto=format&fit=crop';
  const shelfImg  = 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1400&q=80&auto=format&fit=crop';
  const marketImg = 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=1400&q=80&auto=format&fit=crop';
  const prodImgs  = [shopImg1, shopImg2, shopImg3, shopImg4, shopImg5, shopImg6, shopImg1, shopImg2];

  const waSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

  const baseStyle = `
    <style>
      ${fontImport}
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family:'${tmpl.fontBody}',sans-serif; background:${pal.bg}; color:${pal.text}; }
      a { text-decoration:none; }
      @keyframes fadeInUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
      @keyframes kenBurns   { 0%{transform:scale(1)} 100%{transform:scale(1.06)} }
      @keyframes marquee    { from{transform:translateX(0)} to{transform:translateX(-10%)} }
      @keyframes flashPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.85;transform:scale(1.02)} }
      @keyframes countUp    { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
      .fade-in { animation: fadeInUp 0.8s cubic-bezier(.22,1,.36,1) both; }
      /* Shelf strip — fixed parallax */
      .shelf-strip { position:relative; background-image:url('${shelfImg}'); background-size:cover; background-position:center; background-attachment:fixed; }
      .shelf-strip::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(5,10,25,0.91) 0%,rgba(10,18,40,0.75) 50%,rgba(5,10,25,0.88) 100%); }
      .shelf-strip > * { position:relative; z-index:1; }
      /* Market strip */
      .market-strip { position:relative; background-image:url('${marketImg}'); background-size:cover; background-position:center 60%; background-attachment:fixed; }
      .market-strip::before { content:''; position:absolute; inset:0; background:linear-gradient(to bottom,rgba(0,0,0,0.72) 0%,rgba(0,0,0,0.45) 50%,rgba(0,0,0,0.75) 100%); }
      .market-strip > * { position:relative; z-index:1; }
      /* Product card */
      .prod-card { background:white; border:1px solid ${pal.border}; border-radius:16px; overflow:hidden; transition:transform 0.3s cubic-bezier(.22,1,.36,1),box-shadow 0.3s ease; cursor:pointer; }
      .prod-card:hover { transform:translateY(-6px); box-shadow:0 20px 44px rgba(0,0,0,0.12); }
      .prod-card .img-zone { height:160px; overflow:hidden; position:relative; }
      .prod-card .img-zone img { width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease; display:block; }
      .prod-card:hover .img-zone img { transform:scale(1.07); }
      .prod-card .img-zone::after { content:''; position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,0.35) 0%,transparent 55%); pointer-events:none; }
      .upload-input { display:none; }
      .upload-button { position:absolute; top:12px; right:12px; display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.95); color:#111; border:none; padding:9px 12px; border-radius:999px; font-size:11px; font-weight:700; letter-spacing:0.7px; box-shadow:0 18px 40px rgba(0,0,0,0.12); cursor:pointer; transition:transform 0.25s ease, background 0.25s ease; z-index:2; }
      .upload-button:hover { transform:translateY(-1px); background:white; }
      /* Gallery frame */
      .gal-frame { overflow:hidden; border-radius:14px; position:relative; cursor:pointer; }
      .gal-frame img { width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease; display:block; }
      .gal-frame:hover img { transform:scale(1.07); }
      .gal-frame::after { content:''; position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,0.5) 0%,transparent 60%); pointer-events:none; }

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
        /* Hide circular promo badge — overlaps text on mobile */
        section#beranda > div[style*="border-radius:50%"],
        section#beranda > div[style*="width:120px"] {
          display: none !important;
        }
      }
    </style>`;

  if (fitur.includes('promo')) {
    html += `<div style="background:linear-gradient(90deg,${pal.primary},${pal.accent},${pal.primary});background-size:200%;color:white;text-align:center;padding:11px 20px;font-size:13px;font-weight:700;animation:flashPulse 3s ease-in-out infinite;">
      ⚡ FLASH SALE — Diskon 25% untuk Paket Sembako! &nbsp;·&nbsp; 🕐 Stok Terbatas &nbsp;·&nbsp; ⚡
    </div>`;
  }

  const navLinks = [
    { label:'Produk',    href:'#produk',  show: fitur.includes('menu')   },
    { label:'Galeri',    href:'#galeri',  show: fitur.includes('galeri') },
    { label:'Testimoni', href:'#tentang', show: fitur.includes('review') },
    { label:'Lokasi',    href:'#lokasi',  show: fitur.includes('lokasi') },
  ].filter(l => l.show);

  html += `<nav style="position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:16px 44px;background:rgba(5,8,20,0.6);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);border-bottom:1px solid rgba(255,255,255,0.07);">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="font-size:22px;">🛒</span>
      <span style="font-family:'${tmpl.fontHead}',serif;color:white;font-size:20px;font-weight:800;letter-spacing:-0.3px;">${nama}</span>
    </div>
    <div style="display:flex;gap:26px;">
      ${navLinks.map(l => `<a href="${l.href}" style="color:rgba(255,255,255,0.6);font-size:13px;font-weight:500;transition:color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">${l.label}</a>`).join('')}
    </div>
    <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:7px;background:#25D366;color:white;padding:9px 22px;border-radius:99px;font-size:13px;font-weight:700;">${waSvg} Order WA</a>
  </nav>`;

  // HERO — full-viewport with vibrant retail photo
  html += `<section id="beranda" style="position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden;">
    <div style="position:absolute;inset:-8%;background-image:url('${heroImg}');background-size:cover;background-position:center;animation:kenBurns 14s ease-in-out infinite alternate;"></div>
    <div style="position:absolute;inset:0;background:linear-gradient(110deg,rgba(5,8,20,0.92) 0%,rgba(5,8,20,0.7) 42%,rgba(0,0,0,0.2) 100%);"></div>
    <div style="position:absolute;bottom:0;left:0;right:0;height:220px;background:linear-gradient(to top,${pal.bg},transparent);"></div>
    <div style="position:absolute;inset:0;opacity:0.035;background-image:url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22/></filter><rect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22/></svg>');pointer-events:none;"></div>

    <div style="position:relative;z-index:2;padding:130px 64px 100px;max-width:760px;" class="fade-in">
      <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);padding:6px 16px;border-radius:99px;margin-bottom:24px;">
        <span style="width:7px;height:7px;background:${pal.accent};border-radius:50%;"></span>
        <span style="color:rgba(255,255,255,0.85);font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;">🏪 ${tmpl.badge}</span>
      </div>
      <h1 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(38px,5.5vw,66px);font-weight:800;line-height:1.05;color:white;letter-spacing:-2px;margin-bottom:18px;">${tmpl.headline}</h1>
      <p style="color:rgba(255,255,255,0.7);font-size:17px;line-height:1.8;margin-bottom:36px;max-width:520px;">${tmpl.sub}</p>
      <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:48px;">
        <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:9px;background:${pal.btn};color:white;padding:14px 32px;border-radius:12px;font-size:15px;font-weight:700;box-shadow:0 8px 28px rgba(0,0,0,0.35);">${waSvg} Belanja Sekarang</a>
        <a href="#produk" style="display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,0.1);color:white;border:1px solid rgba(255,255,255,0.2);padding:14px 26px;border-radius:12px;font-size:15px;font-weight:600;backdrop-filter:blur(8px);">Lihat Produk →</a>
      </div>
      <div style="display:flex;gap:28px;">
        ${tmpl.stats.map(s => `<div><div style="font-family:'${tmpl.fontHead}',serif;font-size:26px;font-weight:800;color:white;">${s.num}</div><div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:3px;">${s.label}</div></div>`).join('<div style="width:1px;background:rgba(255,255,255,0.15);"></div>')}
      </div>
    </div>

    <!-- Floating promo badge right -->
    <div style="position:absolute;right:64px;top:50%;transform:translateY(-50%);z-index:3;">
      <div style="background:${pal.btn};border-radius:50%;width:120px;height:120px;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 16px 48px rgba(0,0,0,0.4);animation:flashPulse 3s ease-in-out infinite;">
        <div style="font-size:13px;color:rgba(255,255,255,0.8);font-weight:700;letter-spacing:1px;">DISKON</div>
        <div style="font-family:'${tmpl.fontHead}',serif;font-size:34px;font-weight:800;color:white;line-height:1;">25%</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.7);">Hari ini!</div>
      </div>
    </div>

    <div style="position:absolute;bottom:28px;left:50%;transform:translateX(-50%);z-index:3;display:flex;flex-direction:column;align-items:center;gap:5px;opacity:0.45;">
      <span style="color:white;font-size:10px;letter-spacing:3px;text-transform:uppercase;">Scroll</span>
      <div style="width:1px;height:28px;background:linear-gradient(to bottom,white,transparent);"></div>
    </div>
  </section>`;

  // MARQUEE
  html += `<div style="background:${pal.primary};overflow:hidden;padding:13px 0;">
    <div style="display:inline-block;white-space:nowrap;will-change:transform;animation:marquee 22s linear infinite;color:white;font-size:13px;font-weight:700;letter-spacing:0.5px;">${
      Array(10).fill('&nbsp;&nbsp;🛒 STOK LENGKAP &nbsp;&nbsp;✦ HARGA GROSIR &nbsp;&nbsp;✦ BISA COD &nbsp;&nbsp;✦ FREE ONGKIR > 100RB &nbsp;&nbsp;✦ BELANJA HEMAT').join('')
    }&nbsp;&nbsp;</div>
  </div>`;

  if (fitur.includes('menu')) {
    html += `<section id="produk" style="padding:80px 44px;background:${pal.bg};">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:48px;flex-wrap:wrap;gap:16px;">
        <div>
          <p style="font-size:10px;letter-spacing:4px;text-transform:uppercase;color:${pal.muted};margin-bottom:10px;">— Pilihan Terbaik —</p>
          <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${pal.text};letter-spacing:-1px;">Produk Unggulan</h2>
        </div>
        <div style="display:flex;gap:18px;">${tmpl.categories.map(c => `<span style="font-size:12px;letter-spacing:1px;text-transform:uppercase;color:${pal.muted};cursor:pointer;" onmouseover="this.style.color='${pal.primary}'" onmouseout="this.style.color='${pal.muted}'">${c}</span>`).join('')}</div>
      </div>
      ${tmpl.categories.map(cat => {
        const items = tmpl.menuItems.filter(i => i.cat === cat);
        if (!items.length) return '';
        return `<div style="margin-bottom:48px;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
            <div style="width:4px;height:20px;background:${pal.primary};border-radius:99px;"></div>
            <h3 style="font-size:14px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${pal.text};">${cat}</h3>
            <div style="flex:1;height:1px;background:${pal.border};"></div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:18px;">
            ${items.map((item, idx) => `
            <div class="prod-card">
              <div class="img-zone">
                <img id="product-img-${cat.replace(/\s+/g,'-')}-${idx}" src="${prodImgs[idx % prodImgs.length]}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/seed/imgtok'+Math.random().toString(36).slice(2,6)+'/700/500';" style="background:#111;">
                <button type="button" class="upload-button" onclick="event.stopPropagation(); document.getElementById('upload-${cat.replace(/\s+/g,'-')}-${idx}').click();">Upload</button>
                <input type="file" id="upload-${cat.replace(/\s+/g,'-')}-${idx}" class="upload-input" accept="image/*" onchange="uploadImage(event, 'product-img-${cat.replace(/\s+/g,'-')}-${idx}')">
                ${item.badge ? `<div style="position:absolute;top:10px;left:10px;z-index:2;background:${pal.btn};color:white;font-size:10px;padding:3px 10px;border-radius:99px;font-weight:700;">${item.badge}</div>` : ''}
              </div>
              <div style="padding:14px;">
                <div style="font-size:11px;color:${pal.muted};letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">${item.cat}</div>
                <div style="font-weight:700;font-size:14px;color:${pal.text};margin-bottom:4px;line-height:1.3;">${item.name}</div>
                <div style="font-size:11px;color:${pal.muted};margin-bottom:10px;line-height:1.4;">${item.desc}</div>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <div style="font-family:'${tmpl.fontHead}',serif;font-size:16px;font-weight:800;color:${pal.primary};">${item.price}</div>
                  <a href="${wa}" target="_blank" rel="noopener noreferrer" style="background:${pal.primary};color:white;font-size:11px;padding:5px 12px;border-radius:6px;font-weight:700;">+ Beli</a>
                </div>
              </div>
            </div>`).join('')}
          </div>
        </div>`;
      }).join('')}
    </section>`;
  }

  // SHELF CINEMATIC STRIP
  html += `<section class="shelf-strip" style="padding:96px 44px;">
    <div style="max-width:960px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;">
      <div>
        <p style="color:rgba(255,255,255,0.45);font-size:10px;letter-spacing:4px;text-transform:uppercase;margin-bottom:16px;">— Kenapa Kami? —</p>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(26px,3.5vw,44px);font-weight:800;color:white;letter-spacing:-1.5px;margin-bottom:18px;line-height:1.05;">"${tmpl.tagline}"</h2>
        <p style="color:rgba(255,255,255,0.58);font-size:15px;line-height:1.75;margin-bottom:32px;">Ribuan produk, harga terbaik, dan pelayanan yang membuat belanja jadi menyenangkan — itu janji kami.</p>
        <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;background:white;color:#050814;padding:13px 28px;border-radius:10px;font-size:14px;font-weight:800;">${waSvg} Order Sekarang</a>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
        ${[
          { icon:'📦', label:'Produk Tersedia', val:'5.000+' },
          { icon:'🚚', label:'Free Ongkir',     val:'> 100rb' },
          { icon:'⭐', label:'Rating Toko',      val:'★ 4.8' },
          { icon:'🕐', label:'Jam Buka',         val:'08.00 – 21.00' },
        ].map(f => `<div style="background:rgba(255,255,255,0.07);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:20px;text-align:center;">
          <div style="font-size:26px;margin-bottom:8px;">${f.icon}</div>
          <div style="font-family:'${tmpl.fontHead}',serif;font-size:18px;font-weight:800;color:white;margin-bottom:4px;">${f.val}</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.5);">${f.label}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;

  if (fitur.includes('galeri')) {
    const galLabels = ['Produk Pilihan','Sembako Segar','Snack & Minuman','Promo Hari Ini','Paket Hemat','Stok Tersedia'];
    html += `<section id="galeri" style="padding:80px 44px;background:${pal.bg};">
      <div style="text-align:center;margin-bottom:48px;">
        <p style="font-size:10px;letter-spacing:4px;text-transform:uppercase;color:${pal.muted};margin-bottom:12px;">— Suasana Toko —</p>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(26px,3.5vw,40px);font-weight:800;color:${pal.text};letter-spacing:-1px;">Galeri Toko Kami</h2>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:200px 200px;gap:10px;max-width:960px;margin:0 auto;border-radius:20px;overflow:hidden;">
        ${[0,1,2,3,4].map(i => {
          const userImg = galleryImages && galleryImages[i];
          const fb      = prodImgs[i % prodImgs.length];
          const big     = i === 0;
          return `<div class="gal-frame webcraftai-gallery-frame" data-gallery-index="${i}" style="${big?'grid-row:span 2;':''}">
            <img ${userImg ? `class="webcraftai-gallery-img" src="${userImg}"` : `src="${fb}"`} alt="${galLabels[i]}" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/seed/imgtok'+Math.random().toString(36).slice(2,6)+'/700/500';" style="background:#111;width:100%;height:100%;object-fit:cover;display:block;">
            <button type="button" class="gal-upload-btn" onclick="event.stopPropagation();openGalUpload(this);" style="position:absolute;top:10px;right:10px;z-index:10;display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,0.92);color:#111;border:none;padding:6px 11px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:0.5px;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,0.2);backdrop-filter:blur(6px);transition:transform 0.2s,background 0.2s;" onmouseover="this.style.background='white';this.style.transform='translateY(-1px)';" onmouseout="this.style.background='rgba(255,255,255,0.92)';this.style.transform='none';">📷 Upload</button>
            <div style="position:absolute;bottom:12px;left:12px;z-index:1;pointer-events:none;"><span style="font-size:10px;color:rgba(255,255,255,0.8);letter-spacing:1.5px;text-transform:uppercase;font-weight:700;">${galLabels[i]}</span></div>
          </div>`;
        }).join('')}
      </div>
    </section>`;
  }

  // MARKET STRIP
  html += `<section class="market-strip" style="padding:80px 44px;">
    <div style="max-width:960px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;text-align:center;">
      ${[
        { icon:'🌾', title:'Produk Segar',     desc:'Langsung dari distributor resmi setiap hari' },
        { icon:'💰', title:'Harga Hemat',       desc:'Grosir dan eceran, harga selalu bersahabat' },
        { icon:'📲', title:'Order Mudah',       desc:'Cukup chat WA, kami siap antar ke rumah Anda' },
      ].map(f => `<div style="padding:28px 20px;">
        <div style="font-size:38px;margin-bottom:14px;">${f.icon}</div>
        <div style="font-family:'${tmpl.fontHead}',serif;font-size:19px;font-weight:700;color:white;margin-bottom:10px;">${f.title}</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6);line-height:1.7;">${f.desc}</div>
      </div>`).join('')}
    </div>
  </section>`;

  if (fitur.includes('review')) html += buildTestimoni(tmpl, pal);
  if (fitur.includes('lokasi')) html += buildLokasi(nama, pal);

  if (fitur.includes('wa')) {
    html += `<section id="kontak" style="padding:72px 44px;background:${pal.primary};text-align:center;">
      <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:30px;font-weight:800;color:white;margin-bottom:12px;">Pesan Langsung via WhatsApp</h2>
      <p style="color:rgba(255,255,255,0.75);font-size:15px;margin-bottom:28px;">Ketik nama produk + jumlah — kami siap kemas dan kirim segera!</p>
      <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:10px;background:#25D366;color:white;padding:14px 36px;border-radius:99px;font-size:16px;font-weight:800;">${waSvg} Chat & Order Sekarang</a>
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
