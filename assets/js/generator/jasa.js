// ══════════════════════════════════════════════
//  WebCraft AI — generator/jasa.js
//  Cinematic: Industrial trust, technician aesthetic
//  Tone: Bold, dark steel, precision & reliability
// ══════════════════════════════════════════════

function buildJasa(nama, pal, tmpl, wa, fitur, galleryImages) {
  let html = '';
  const fontImport = `@import url('https://fonts.googleapis.com/css2?family=${tmpl.font}&display=swap');`;

  // ── Industrial & service imagery ──
  const heroImg   = 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?w=1600&q=85&auto=format&fit=crop';
  const workImg1  = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop';
  const workImg2  = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80&auto=format&fit=crop';
  const workImg3  = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop';
  const workImg4  = 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80&auto=format&fit=crop';
  const workImg5  = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop';
  const toolsImg  = 'https://images.unsplash.com/photo-1574435049571-03568c0a1a45?w=1400&q=80&auto=format&fit=crop';
  const teamImg   = 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=1400&q=80&auto=format&fit=crop';
  const portImgs  = [workImg1, workImg2, workImg3, workImg4, workImg5, workImg1];

  const waSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

  const baseStyle = `
    <style>
      ${fontImport}
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family:'${tmpl.fontBody}',sans-serif; background:${pal.bg}; color:${pal.text}; }
      a { text-decoration:none; }
      @keyframes fadeInUp  { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
      @keyframes slideLeft { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:translateX(0)} }
      @keyframes kenBurns  { 0%{transform:scale(1)} 100%{transform:scale(1.06)} }
      @keyframes marquee   { from{transform:translateX(0)} to{transform:translateX(-10%)} }
      @keyframes pulse     { 0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,0.2)} 50%{box-shadow:0 0 0 10px rgba(255,255,255,0)} }
      .fade-in  { animation: fadeInUp  0.7s cubic-bezier(.22,1,.36,1) both; }
      .slide-in { animation: slideLeft 0.7s cubic-bezier(.22,1,.36,1) both; }
      /* Dark tools cinematic strip */
      .tools-strip { position:relative; background-image:url('${toolsImg}'); background-size:cover; background-position:center; background-attachment:fixed; }
      .tools-strip::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(5,10,20,0.93) 0%,rgba(10,20,35,0.78) 50%,rgba(5,10,20,0.90) 100%); }
      .tools-strip > * { position:relative; z-index:1; }
      /* Team strip */
      .team-strip { position:relative; background-image:url('${teamImg}'); background-size:cover; background-position:center 30%; background-attachment:fixed; }
      .team-strip::before { content:''; position:absolute; inset:0; background:linear-gradient(to right,rgba(0,0,0,0.92) 0%,rgba(0,0,0,0.65) 50%,rgba(0,0,0,0.4) 100%); }
      .team-strip > * { position:relative; z-index:1; }
      /* Service card */
      .svc-card { background:${pal.card}; border:1px solid ${pal.border}; border-radius:14px; padding:20px; transition:transform 0.3s ease,box-shadow 0.3s ease,border-color 0.3s ease; cursor:pointer; }
      .svc-card:hover { transform:translateY(-5px); box-shadow:0 20px 44px rgba(0,0,0,0.13); border-color:${pal.primary}; }
      /* Portfolio frame */
      .port-frame { overflow:hidden; border-radius:14px; position:relative; cursor:pointer; }
      .port-frame img { width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease; display:block; }
      .port-frame:hover img { transform:scale(1.07); }
      .port-frame::after { content:''; position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,0.65) 0%,transparent 60%); pointer-events:none; }

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
        section#beranda[style*="display:grid"] {
          display: flex !important;
          flex-direction: column !important;
          min-height: 100svh !important;
        }
        section#beranda > div[style*="background:linear-gradient"] {
          padding: 90px 18px 36px !important;
          width: 100% !important;
        }
        /* Hide right photo panel */
        section#beranda > div[style*="position:relative;overflow:hidden"] {
          height: 200px !important;
          width: 100% !important;
          order: -1 !important;
        }
        /* Stats grid */
        div[style*="grid-template-columns:repeat(3,1fr)"] {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
    </style>`;

  if (fitur.includes('promo')) {
    html += `<div style="background:${pal.primary};color:white;text-align:center;padding:11px 20px;font-size:13px;font-weight:700;letter-spacing:0.5px;">
      🛠️ DISKON 15% Kunjungan Pertama + FREE Biaya Diagnosa — Berlaku Bulan Ini!
    </div>`;
  }

  const navLinks = [
    { label:'Layanan',    href:'#layanan',   show: fitur.includes('menu')   },
    { label:'Portofolio', href:'#galeri',    show: fitur.includes('galeri') },
    { label:'Testimoni',  href:'#tentang',   show: fitur.includes('review') },
    { label:'Lokasi',     href:'#lokasi',    show: fitur.includes('lokasi') },
  ].filter(l => l.show);

  html += `<nav style="position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:17px 44px;background:rgba(3,7,16,0.65);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);border-bottom:1px solid rgba(255,255,255,0.07);">
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="width:34px;height:34px;background:${pal.primary};border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;">⚙️</div>
      <span style="font-family:'${tmpl.fontHead}',serif;color:white;font-size:20px;font-weight:700;letter-spacing:-0.3px;">${nama}</span>
    </div>
    <div style="display:flex;gap:28px;">
      ${navLinks.map(l => `<a href="${l.href}" style="color:rgba(255,255,255,0.6);font-size:13px;font-weight:500;transition:color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">${l.label}</a>`).join('')}
    </div>
    <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:7px;background:${pal.btn};color:white;padding:9px 22px;border-radius:8px;font-size:13px;font-weight:700;">${waSvg} Hubungi Kami</a>
  </nav>`;

  // HERO — diagonal split: dark left copy + cinematic right image
  html += `<section id="beranda" style="position:relative;min-height:100vh;display:grid;grid-template-columns:52% 48%;overflow:hidden;">
    <!-- Left: Dark industrial copy panel -->
    <div style="position:relative;background:linear-gradient(145deg,#050a14 0%,#0a1628 100%);display:flex;flex-direction:column;justify-content:center;padding:140px 56px 80px;z-index:2;" class="fade-in">
      <!-- Geometric tech accent -->
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,${pal.primary},transparent);"></div>
      <div style="position:absolute;top:24px;left:44px;width:40px;height:2px;background:${pal.accent};"></div>

      <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);padding:7px 16px;border-radius:6px;margin-bottom:28px;width:fit-content;">
        <span style="width:7px;height:7px;background:${pal.accent};border-radius:50%;animation:pulse 2s ease-in-out infinite;"></span>
        <span style="color:rgba(255,255,255,0.75);font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">${tmpl.badge}</span>
      </div>

      <h1 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(30px,4vw,52px);font-weight:800;line-height:1.1;color:white;letter-spacing:-1.5px;margin-bottom:18px;">${tmpl.headline}</h1>
      <p style="color:rgba(255,255,255,0.58);font-size:15px;line-height:1.8;margin-bottom:28px;max-width:400px;">${tmpl.sub}</p>

      <!-- Trust chips -->
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:32px;">
        ${['✓ Bergaransi','✓ Tepat Waktu','✓ Harga Transparan','✓ Teknisi Tersertifikat'].map(t => `<span style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.75);padding:5px 13px;border-radius:5px;font-size:12px;font-weight:600;">${t}</span>`).join('')}
      </div>

      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:44px;">
        <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;background:${pal.btn};color:white;padding:14px 30px;border-radius:10px;font-size:15px;font-weight:700;">${waSvg} Minta Penawaran Gratis</a>
        <a href="#layanan" style="display:inline-flex;align-items:center;gap:8px;background:transparent;color:white;border:1px solid rgba(255,255,255,0.2);padding:14px 24px;border-radius:10px;font-size:15px;font-weight:600;">Cek Layanan →</a>
      </div>

      <!-- Stats row -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding-top:28px;border-top:1px solid rgba(255,255,255,0.08);">
        ${tmpl.stats.map(s => `<div>
          <div style="font-family:'${tmpl.fontHead}',serif;font-size:26px;font-weight:800;color:${pal.accent};">${s.num}</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:3px;letter-spacing:0.5px;">${s.label}</div>
        </div>`).join('')}
      </div>
    </div>

    <!-- Right: Cinematic photo -->
    <div style="position:relative;overflow:hidden;">
      <div style="position:absolute;inset:-5%;background-image:url('${heroImg}');background-size:cover;background-position:center;animation:kenBurns 12s ease-in-out infinite alternate;"></div>
      <div style="position:absolute;inset:0;background:linear-gradient(to right,#050a14 0%,rgba(5,10,20,0.3) 30%,rgba(0,0,0,0.1) 100%);"></div>
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.3) 0%,transparent 30%,transparent 70%,rgba(0,0,0,0.4) 100%);"></div>
      <!-- Floating badge -->
      <div style="position:absolute;bottom:60px;right:40px;z-index:3;">
        <div style="background:rgba(0,0,0,0.65);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.15);border-radius:16px;padding:16px 22px;text-align:center;">
          <div style="font-family:'${tmpl.fontHead}',serif;font-size:28px;font-weight:800;color:white;">★ 4.9</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:1px;text-transform:uppercase;margin-top:3px;">Satisfied Clients</div>
        </div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div style="position:absolute;bottom:28px;left:50%;transform:translateX(-50%);z-index:5;display:flex;flex-direction:column;align-items:center;gap:5px;opacity:0.4;">
      <span style="color:white;font-size:10px;letter-spacing:3px;text-transform:uppercase;">Scroll</span>
      <div style="width:1px;height:28px;background:linear-gradient(to bottom,white,transparent);"></div>
    </div>
  </section>`;

  // MARQUEE
  html += `<div style="background:${pal.primary};overflow:hidden;padding:13px 0;">
    <div style="display:inline-block;white-space:nowrap;will-change:transform;animation:marquee 22s linear infinite;color:white;font-size:13px;font-weight:700;letter-spacing:0.5px;">${
      Array(10).fill('&nbsp;&nbsp;⚙️ BERGARANSI RESMI &nbsp;&nbsp;✦ TEKNISI BERSERTIFIKAT &nbsp;&nbsp;✦ RESPON CEPAT &nbsp;&nbsp;✦ HARGA TRANSPARAN').join('')
    }&nbsp;&nbsp;</div>
  </div>`;

  if (fitur.includes('menu')) {
    html += `<section id="layanan" style="padding:80px 44px;background:${pal.bg};">
      <div style="text-align:center;margin-bottom:52px;">
        <p style="font-size:10px;letter-spacing:4px;text-transform:uppercase;color:${pal.muted};margin-bottom:10px;">— Apa yang Kami Lakukan —</p>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(28px,3.5vw,40px);font-weight:800;color:${pal.text};letter-spacing:-1px;margin-bottom:10px;">Layanan Profesional</h2>
        <p style="color:${pal.muted};font-size:15px;max-width:480px;margin:0 auto;">${tmpl.tagline}</p>
      </div>
      ${tmpl.categories.map(cat => {
        const items = tmpl.menuItems.filter(i => i.cat === cat);
        if (!items.length) return '';
        const catIcons = {'AC & Elektronik':'❄️','Rumah & Bangunan':'🏠','Kendaraan':'🚗'};
        return `<div style="margin-bottom:44px;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
            <span style="font-size:22px;">${catIcons[cat]||'🔧'}</span>
            <h3 style="font-size:14px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${pal.text};">${cat}</h3>
            <div style="flex:1;height:1px;background:${pal.border};"></div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:14px;">
            ${items.map(item => `
            <div class="svc-card">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;">
                <div style="flex:1;">
                  <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
                    <div style="width:8px;height:8px;background:${pal.primary};border-radius:50%;flex-shrink:0;"></div>
                    <span style="font-weight:700;font-size:15px;color:${pal.text};">${item.name}</span>
                    ${item.badge ? `<span style="font-size:10px;background:${pal.tagBg};color:${pal.tag};padding:2px 8px;border-radius:99px;font-weight:700;">${item.badge}</span>` : ''}
                  </div>
                  <div style="font-size:12px;color:${pal.muted};line-height:1.55;padding-left:16px;">${item.desc}</div>
                </div>
                <div style="font-family:'${tmpl.fontHead}',serif;font-size:16px;font-weight:800;color:${pal.primary};white-space:nowrap;margin-left:16px;">${item.price}</div>
              </div>
            </div>`).join('')}
          </div>
        </div>`;
      }).join('')}
    </section>`;
  }

  // TEAM CINEMATIC STRIP
  html += `<section class="team-strip" style="padding:90px 44px;">
    <div style="max-width:960px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;">
      <div>
        <p style="color:rgba(255,255,255,0.45);font-size:10px;letter-spacing:4px;text-transform:uppercase;margin-bottom:16px;">— Tim Kami —</p>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(28px,3.5vw,44px);font-weight:800;color:white;letter-spacing:-1.5px;margin-bottom:18px;line-height:1.05;">Ahli di Bidangnya, Terpercaya Hasilnya</h2>
        <p style="color:rgba(255,255,255,0.6);font-size:15px;line-height:1.75;margin-bottom:32px;">Setiap teknisi kami telah menjalani pelatihan ketat dan memiliki sertifikasi resmi. Tidak ada pekerjaan yang terlalu besar atau terlalu kecil.</p>
        <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;background:white;color:#050a14;padding:13px 28px;border-radius:8px;font-size:14px;font-weight:800;">${waSvg} Konsultasi Gratis</a>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
        ${[
          { icon:'🎓', label:'Bersertifikat',  val:'Semua Teknisi' },
          { icon:'⚡', label:'Respon Time',     val:'< 2 Jam' },
          { icon:'🛡️', label:'Garansi Kerja',   val:'1 – 12 Bulan' },
          { icon:'📞', label:'Siap Dipanggil',  val:'24 / 7' },
        ].map(f => `<div style="background:rgba(255,255,255,0.07);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:20px;text-align:center;">
          <div style="font-size:28px;margin-bottom:8px;">${f.icon}</div>
          <div style="font-family:'${tmpl.fontHead}',serif;font-size:18px;font-weight:800;color:white;margin-bottom:4px;">${f.val}</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:0.5px;">${f.label}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;

  if (fitur.includes('galeri')) {
    const galLabels = ['Servis AC','Instalasi Listrik','Renovasi','Kendaraan','Elektronik','Workshop'];
    html += `<section id="galeri" style="padding:80px 44px;background:${pal.bg};">
      <div style="text-align:center;margin-bottom:48px;">
        <p style="font-size:10px;letter-spacing:4px;text-transform:uppercase;color:${pal.muted};margin-bottom:12px;">— Bukti Kerja —</p>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(28px,3.5vw,40px);font-weight:800;color:${pal.text};letter-spacing:-1px;">Portofolio Pekerjaan</h2>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:210px 210px;gap:10px;max-width:960px;margin:0 auto;border-radius:18px;overflow:hidden;">
        ${[0,1,2,3,4].map(i => {
          const userImg = galleryImages && galleryImages[i];
          const fb      = portImgs[i % portImgs.length];
          const big     = i === 0;
          return `<div class="port-frame webcraftai-gallery-frame" data-gallery-index="${i}" style="${big?'grid-row:span 2;':''}">
            <img ${userImg ? `class="webcraftai-gallery-img" src="${userImg}"` : `src="${fb}"`} alt="${galLabels[i]}" loading="lazy" onerror="this.onerror=null;this.src='https://picsum.photos/seed/imgjas'+Math.random().toString(36).slice(2,6)+'/700/500';" style="background:#111;width:100%;height:100%;object-fit:cover;display:block;">
            <button type="button" class="gal-upload-btn" onclick="event.stopPropagation();openGalUpload(this);" style="position:absolute;top:10px;right:10px;z-index:10;display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,0.92);color:#111;border:none;padding:6px 11px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:0.5px;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,0.2);backdrop-filter:blur(6px);transition:transform 0.2s,background 0.2s;" onmouseover="this.style.background='white';this.style.transform='translateY(-1px)';" onmouseout="this.style.background='rgba(255,255,255,0.92)';this.style.transform='none';">📷 Upload</button>
            <div style="position:absolute;bottom:12px;left:12px;z-index:1;pointer-events:none;"><span style="font-size:10px;color:rgba(255,255,255,0.8);letter-spacing:1.5px;text-transform:uppercase;font-weight:700;">${galLabels[i]}</span></div>
          </div>`;
        }).join('')}
      </div>
    </section>`;
  }

  // TOOLS STRIP CTA
  html += `<section class="tools-strip" style="padding:96px 44px;">
    <div style="max-width:640px;margin:0 auto;text-align:center;">
      <div style="font-size:40px;margin-bottom:18px;">🔧</div>
      <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:clamp(26px,4vw,46px);font-weight:800;color:white;letter-spacing:-1.5px;margin-bottom:16px;line-height:1.1;">"${tmpl.tagline}"</h2>
      <p style="color:rgba(255,255,255,0.55);font-size:15px;line-height:1.75;margin-bottom:32px;">Konsultasi gratis tanpa syarat. Teknisi kami siap datang ke lokasi Anda.</p>
      <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:10px;background:white;color:#050a14;padding:14px 36px;border-radius:8px;font-size:15px;font-weight:800;box-shadow:0 16px 40px rgba(0,0,0,0.35);">${waSvg} Hubungi Teknisi Kami</a>
    </div>
  </section>`;

  if (fitur.includes('review')) html += buildTestimoni(tmpl, pal);
  if (fitur.includes('lokasi')) html += buildLokasi(nama, pal);

  if (fitur.includes('wa')) {
    html += `<section id="kontak" style="padding:72px 44px;background:${pal.primary};display:grid;grid-template-columns:1fr auto;align-items:center;gap:24px;flex-wrap:wrap;">
      <div>
        <h2 style="font-family:'${tmpl.fontHead}',serif;font-size:28px;font-weight:800;color:white;margin-bottom:8px;">Butuh Bantuan Segera?</h2>
        <p style="color:rgba(255,255,255,0.75);font-size:14px;">Kami siap melayani 24/7 — respon cepat, hasil memuaskan, bergaransi.</p>
      </div>
      <a href="${wa}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:10px;background:white;color:${pal.primary};padding:14px 28px;border-radius:10px;font-size:15px;font-weight:800;white-space:nowrap;">${waSvg} WhatsApp Sekarang</a>
    </section>`;
  }

  html += buildFooter(nama, tmpl, pal);
  return baseStyle + html;
}
