// ══════════════════════════════════════════════
//  WebCraft AI — generator/kuliner.js
//  Cinematic: Warm restaurant, food-porn aesthetic
//  Tone: Intimate dining, candlelit, golden hour
// ══════════════════════════════════════════════

function buildKuliner(nama, pal, tmpl, wa, fitur, galleryImages) {
  let html = '';
  const fontImport = `@import url('https://fonts.googleapis.com/css2?family=${tmpl.font}&display=swap');`;

  const heroImg  = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=85&auto=format&fit=crop';
  const foodImg1 = 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80&auto=format&fit=crop';
  const foodImg2 = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop';
  const foodImg3 = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop';
  const foodImg4 = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&auto=format&fit=crop';
  const foodImg5 = 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80&auto=format&fit=crop';
  const foodImg6 = 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80&auto=format&fit=crop';
  const chefImg  = 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1400&q=80&auto=format&fit=crop';
  const ambiance = 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1400&q=80&auto=format&fit=crop';
  const menuImgs = [foodImg1, foodImg2, foodImg3, foodImg4, foodImg5, foodImg6, foodImg1, foodImg2];

  const waSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

  const baseStyle = `
    <style>
      ${fontImport}
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family:'${tmpl.fontBody}',sans-serif; background:${pal.bg}; color:${pal.text}; }
      a { text-decoration:none; }
      @keyframes fadeInUp { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
      @keyframes kenBurns { 0%{transform:scale(1) translateY(0)} 100%{transform:scale(1.07) translateY(-14px)} }
      @keyframes flicker  { 0%,100%{opacity:1} 48%{opacity:0.85} 52%{opacity:0.80} }
      @keyframes marquee  { from{transform:translateX(0)} to{transform:translateX(-10%)} }
      @keyframes float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
      .fade-in { animation: fadeInUp 0.8s cubic-bezier(.22,1,.36,1) both; }
      .chef-strip { position:relative; background-image:url('${chefImg}'); background-size:cover; background-position:center; background-attachment:fixed; }
      .chef-strip::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(20,5,0,0.88) 0%,rgba(40,10,0,0.72) 50%,rgba(20,5,0,0.85) 100%); }
      .chef-strip > * { position:relative; z-index:1; }
      .ambiance-strip { position:relative; background-image:url('${ambiance}'); background-size:cover; background-position:center 40%; background-attachment:fixed; }
      .ambiance-strip::before { content:''; position:absolute; inset:0; background:linear-gradient(to bottom,rgba(0,0,0,0.75) 0%,rgba(0,0,0,0.45) 50%,rgba(0,0,0,0.8) 100%); }
      .ambiance-strip > * { position:relative; z-index:1; }
      .menu-card { transition:transform 0.35s cubic-bezier(.22,1,.36,1),box-shadow 0.35s ease; border-radius:18px; overflow:hidden; position:relative; }
      .menu-card:hover { transform:translateY(-8px); box-shadow:0 28px 56px rgba(0,0,0,0.18); }
      .menu-card .food-img { overflow:hidden; height:190px; position:relative; }
      .menu-card .food-img img { width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease; display:block; }
      .menu-card:hover .food-img img { transform:scale(1.07); }
      .menu-card .food-img::after { content:''; position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,0.5) 0%,transparent 55%); pointer-events:none; }
      .menu-card .upload-button { position:absolute; top:14px; right:14px; display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.96); color:#111; border:none; padding:10px 14px; border-radius:999px; font-size:12px; font-weight:700; letter-spacing:0.7px; box-shadow:0 18px 40px rgba(0,0,0,0.12); cursor:pointer; transition:transform 0.25s ease, background 0.25s ease; z-index:2; }
      .menu-card .upload-button:hover { transform:translateY(-1px); background:white; }
      .upload-input { display:none; }
      .gal-frame { overflow:hidden; position:relative; cursor:pointer; }
      .gal-frame img { width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease; display:block; }
      .gal-frame:hover img { transform:scale(1.07); }
      .gal-frame::after { content:''; position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,0.55) 0%,transparent 55%); pointer-events:none; }

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
    </style>`;

  if (fitur.includes('promo')) {
    html += `<div style="background:linear-gradient(90deg,${pal.primary},${pal.accent},${pal.primary});background-size:200%;color:white;text-align:center;padding:11px 20px;font-size:13px;font-weight:700;">
      🎉 PROMO HARI INI — Beli 2 Porsi Gratis 1 Minuman! &nbsp;·&nbsp; ⏰ Berlaku 11.00–15.00 WIB
    </div>`;
  }

  const navLinks = [
    { label:'Menu',   href:'#menu',    show: fitur.includes('menu')   },
    { label:'Galeri', href:'#galeri',  show: fitur.includes('galeri') },
    { label:'Ulasan', href:'#tentang', show: fitur.includes('review') },
    { label:'Lokasi', href:'#lokasi',  show: fitur.includes('lokasi') },
  ].filter(l => l.show);

  html += `<nav style="position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:18px 44px;background:rgba(10,3,0,0.55);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);border-bottom:1px solid rgba(255,200,100,0.1);">
    <div style="display:flex;align-items:center;gap:10px;">
      <span style="font-size:22px;animation:float 3s ease-in-out infinite;">🍽️</span>
      <span style="font-family:'${tmpl.fontHead}',serif;color:white;font-size:21px;font-weight:800;letter-spacing:-0.3px;">${nama}</span>
    </div>
    <div style="display:flex;gap:28px;">
      ${navLinks.map(l => `<a href="${l.href}" style="color:rgba(255,255,255,0.65);font-size:13px;font-weight:500;transition:color 0.2s;" onmouseover="this.style.color='rgba(255,200,100,1)'" onmouseout="this.style.color='rgba(255,255,255,0.65)'">${l.label}</a>`).join('')}
    </div>
    <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:7px;background:${pal.btn};color:white;padding:9px 22px;border-radius:99px;font-size:13px;font-weight:700;">${waSvg} Pesan</a>
  </nav>`;

  html += `<section id="beranda" style="position:relative;min-height:100vh;display:flex;align-items:flex-end;overflow:hidden;">
    <div style="position:absolute;inset:0;">
      <div style="position:absolute;inset:-10%;background-image:url('${heroImg}');background-size:cover;background-position:center 30%;animation:kenBurns 14s ease-in-out infinite alternate;"></div>
    </div>
    <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(8,3,0,0.97) 0%,rgba(8,3,0,0.68) 35%,rgba(0,0,0,0.12) 65%,rgba(0,0,0,0.0) 100%);"></div>
    <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,rgba(255,200,80,0.6),transparent);"></div>
    <div style="position:absolute;inset:0;opacity:0.04;background-image:url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22/></filter><rect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22/></svg>');pointer-events:none;"></div>
    <div style="position:relative;z-index:2;padding:0 64px 80px;max-width:800px;" class="fade-in">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,0.10);border:1px solid rgba(255,200,100,0.35);padding:7px 18px;border-radius:99px;color:rgba(255,220,120,0.95);font-size:12px;font-weight:700;letter-spacing:1px;margin-bottom:24px;">
        <span style="width:6px;height:6px;background:rgba(255,200,100,0.9);border-radius:50%;"></span> ${tmpl.badge}
      </div>
      <h1 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(40px,6vw,72px);font-weight:800;line-height:1.0;color:white;letter-spacing:-2.5px;margin-bottom:18px;text-shadow:0 4px 32px rgba(0,0,0,0.5);">${tmpl.headline}</h1>
      <p style="color:rgba(255,255,255,0.7);font-size:17px;line-height:1.8;margin-bottom:36px;max-width:520px;">${tmpl.sub}</p>
      <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:48px;">
        <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:9px;background:${pal.btn};color:white;padding:14px 32px;border-radius:12px;font-size:15px;font-weight:700;box-shadow:0 8px 28px rgba(0,0,0,0.4);">${waSvg} Pesan Sekarang</a>
        <a href="#menu" style="display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,0.1);color:white;border:1px solid rgba(255,200,100,0.3);padding:14px 26px;border-radius:12px;font-size:15px;font-weight:600;backdrop-filter:blur(8px);">Lihat Menu →</a>
      </div>
      <div style="display:flex;gap:32px;">
        ${tmpl.stats.map(s => `<div><div style="font-family:'${tmpl.fontHead}',serif;font-size:28px;font-weight:800;color:rgba(255,200,100,0.95);">${s.num}</div><div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:3px;">${s.label}</div></div>`).join('<div style="width:1px;background:rgba(255,255,255,0.12);"></div>')}
      </div>
    </div>
    <div style="position:absolute;right:64px;bottom:80px;z-index:3;">
      <div style="background:rgba(255,255,255,0.08);backdrop-filter:blur(20px);border:1px solid rgba(255,200,100,0.2);border-radius:20px;padding:20px 26px;text-align:center;">
        <div style="font-size:28px;margin-bottom:6px;">⭐</div>
        <div style="font-family:'${tmpl.fontHead}',serif;font-size:26px;font-weight:800;color:rgba(255,200,100,0.95);">4.9</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:1px;margin-top:3px;">Rating</div>
      </div>
    </div>
    <div style="position:absolute;bottom:28px;left:50%;transform:translateX(-50%);z-index:3;display:flex;flex-direction:column;align-items:center;gap:5px;opacity:0.45;">
      <span style="color:white;font-size:10px;letter-spacing:3px;text-transform:uppercase;">Scroll</span>
      <div style="width:1px;height:32px;background:linear-gradient(to bottom,rgba(255,200,100,0.7),transparent);"></div>
    </div>
  </section>`;

  html += `<div style="background:${pal.primary};overflow:hidden;padding:13px 0;">
    <div style="display:inline-block;white-space:nowrap;will-change:transform;animation:marquee 22s linear infinite;color:white;font-size:13px;font-weight:700;letter-spacing:0.5px;">${
      Array(10).fill('&nbsp;&nbsp;🍽️ FRESH SETIAP HARI &nbsp;&nbsp;✦ BUMBU RAHASIA &nbsp;&nbsp;✦ BUKA SETIAP HARI &nbsp;&nbsp;✦ PESAN VIA WA').join('')
    }&nbsp;&nbsp;</div>
  </div>`;

  if (fitur.includes('menu')) {
    html += `<section id="menu" style="padding:80px 44px;background:${pal.bg};">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:48px;flex-wrap:wrap;gap:16px;">
        <div>
          <p style="font-size:10px;letter-spacing:4px;text-transform:uppercase;color:${pal.muted};margin-bottom:10px;">— Pilihan Kami —</p>
          <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(28px,3.5vw,42px);font-weight:800;color:${pal.text};letter-spacing:-1px;">Menu Andalan</h2>
        </div>
        <div style="display:flex;gap:18px;">${tmpl.categories.map(c => `<span style="font-size:12px;letter-spacing:1px;text-transform:uppercase;color:${pal.muted};cursor:pointer;padding-bottom:3px;" onmouseover="this.style.color='${pal.primary}'" onmouseout="this.style.color='${pal.muted}'">${c}</span>`).join('')}</div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:22px;">
        ${tmpl.menuItems.map((item, i) => `
        <div class="menu-card" style="background:${pal.card};border:1px solid ${pal.border};">
          <div class="food-img">
            <img id="img-${i}" src="${menuImgs[i % menuImgs.length]}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/seed/imgkul'+Math.random().toString(36).slice(2,6)+'/700/500';" style="background:#111;">
            <button type="button" class="upload-button" onclick="event.stopPropagation(); document.getElementById('upload-${i}').click();">Upload Foto</button>
            ${item.badge ? `<div style="position:absolute;top:12px;left:12px;z-index:2;background:${pal.btn};color:white;font-size:10px;padding:4px 10px;border-radius:99px;font-weight:700;">${item.badge}</div>` : ''}
          </div>
          <input type="file" id="upload-${i}" class="upload-input" accept="image/*" onchange="uploadImage(event, ${i})">
          <div style="padding:16px 18px;">
            <div style="font-family:'${tmpl.fontHead}',serif;font-weight:700;font-size:17px;color:${pal.text};margin-bottom:5px;">${item.name}</div>
            <div style="font-size:12px;color:${pal.muted};line-height:1.55;margin-bottom:14px;">${item.desc}</div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div style="font-family:'${tmpl.fontHead}',serif;font-size:18px;font-weight:800;color:${pal.primary};">${item.price}</div>
              <a href="${wa.replace('info%20lebih%20lanjut', 'pesan%20' + encodeURIComponent(item.name))}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" style="background:${pal.tagBg};color:${pal.tag};padding:7px 14px;border-radius:8px;font-size:12px;font-weight:700;">Pesan →</a>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </section>`;
  }

  html += `<section class="chef-strip" style="padding:100px 44px;">
    <div style="max-width:680px;margin:0 auto;text-align:center;">
      <div style="font-size:44px;margin-bottom:20px;">🍴</div>
      <blockquote style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(24px,4vw,44px);font-weight:800;color:white;line-height:1.1;letter-spacing:-1.5px;margin-bottom:20px;">"${tmpl.tagline}"</blockquote>
      <p style="color:rgba(255,255,255,0.55);font-size:15px;line-height:1.75;margin-bottom:36px;">Dari dapur kami ke meja Anda — dibuat dengan bahan segar, disajikan dengan cinta.</p>
      <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:10px;background:white;color:#1a0800;padding:14px 36px;border-radius:99px;font-size:15px;font-weight:800;">${waSvg} Chat & Pesan Sekarang</a>
    </div>
  </section>`;

  if (fitur.includes('galeri')) {
    const galFallbacks = [foodImg1, foodImg2, foodImg3, foodImg4, foodImg5, foodImg6];
    const galLabels    = ['Signature Dish','Chef Special','Minuman Segar','Camilan','Dessert','Atmosfer'];
    html += `<section id="galeri" style="padding:80px 44px;background:${pal.bg};">
      <div style="text-align:center;margin-bottom:48px;">
        <p style="font-size:10px;letter-spacing:4px;text-transform:uppercase;color:${pal.muted};margin-bottom:12px;">— Taste it Visually —</p>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(28px,3.5vw,42px);font-weight:800;color:${pal.text};letter-spacing:-1px;">Food Gallery</h2>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:240px 240px;gap:8px;max-width:960px;margin:0 auto;border-radius:20px;overflow:hidden;">
        ${[0,1,2,3,4].map(i => {
          const userImg = galleryImages && galleryImages[i];
          const fb      = galFallbacks[i % galFallbacks.length];
          const big     = i === 0;
          return `<div class="gal-frame webcraftai-gallery-frame" data-gallery-index="${i}" style="${big?'grid-row:span 2;':''}">
            <img ${userImg ? `class="webcraftai-gallery-img" src="${userImg}"` : `src="${fb}"`} alt="${galLabels[i]}" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/seed/imgkul'+Math.random().toString(36).slice(2,6)+'/700/500';" style="background:#111;width:100%;height:100%;object-fit:cover;display:block;">
            <button type="button" class="gal-upload-btn" onclick="event.stopPropagation();openGalUpload(this);" style="position:absolute;top:10px;right:10px;z-index:10;display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,0.92);color:#111;border:none;padding:6px 11px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:0.5px;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,0.2);backdrop-filter:blur(6px);transition:transform 0.2s,background 0.2s;" onmouseover="this.style.background='white';this.style.transform='translateY(-1px)';" onmouseout="this.style.background='rgba(255,255,255,0.92)';this.style.transform='none';">📷 Upload</button>
            <div style="position:absolute;bottom:14px;left:14px;z-index:1;pointer-events:none;"><span style="font-size:10px;color:rgba(255,255,255,0.75);letter-spacing:1.5px;text-transform:uppercase;font-weight:700;">${galLabels[i]}</span></div>
          </div>`;
        }).join('')}
      </div>
    </section>`;
  }

  html += `<section class="ambiance-strip" style="padding:80px 44px;">
    <div style="max-width:960px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr 1fr;gap:24px;text-align:center;">
      ${[{icon:'🌿',title:'Bahan Segar',desc:'Dipilih setiap pagi dari pasar terbaik'},{icon:'👨‍🍳',title:'Chef Berpengalaman',desc:'Resep turun-temurun dengan sentuhan modern'},{icon:'💫',title:'Atmosfer Nyaman',desc:'Nikmati makan dalam suasana yang hangat'}].map(f => `<div style="padding:32px 24px;"><div style="font-size:40px;margin-bottom:14px;">${f.icon}</div><div style="font-family:'${tmpl.fontHead}',serif;font-size:20px;font-weight:700;color:white;margin-bottom:10px;">${f.title}</div><div style="font-size:14px;color:rgba(255,255,255,0.6);line-height:1.7;">${f.desc}</div></div>`).join('')}
    </div>
  </section>`;

  if (fitur.includes('review')) html += buildTestimoni(tmpl, pal);
  if (fitur.includes('lokasi')) html += buildLokasi(nama, pal);

  if (fitur.includes('wa')) {
    html += `<section id="kontak" style="padding:80px 44px;background:${pal.primary};text-align:center;">
      <div style="font-size:40px;margin-bottom:18px;">🍽️</div>
      <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:32px;font-weight:800;color:white;margin-bottom:12px;">Lapar? Pesan Sekarang!</h2>
      <p style="color:rgba(255,255,255,0.75);font-size:15px;margin-bottom:30px;">Hubungi via WhatsApp — delivery atau dine-in, kami siap melayani</p>
      <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:10px;background:white;color:${pal.primary};padding:14px 36px;border-radius:99px;font-size:16px;font-weight:800;">${waSvg} Chat WhatsApp Sekarang</a>
    </section>`;
  }

  html += buildFooter(nama, tmpl, pal);

  // JavaScript for image upload
  html += `<script>
    function uploadImage(event, index) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const img = document.getElementById('img-' + index);
          img.src = e.target.result;
          img.style.objectFit = 'contain'; // Change to contain to avoid cropping
        };
        reader.readAsDataURL(file);
      }
    }
  </script>`;

  return baseStyle + html;
}
