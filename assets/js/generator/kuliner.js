// ══════════════════════════════════════════════
//  WebCraft AI — generator/kuliner.js
//  Layout builder untuk kategori Kuliner
// ══════════════════════════════════════════════


function buildKuliner(nama, pal, tmpl, wa, fitur, galleryImages) {
  let html = '';
  const fontImport = `@import url('https://fonts.googleapis.com/css2?family=${tmpl.font}&display=swap');`;

  const baseStyle = `
    <style>
      ${fontImport}
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family:'${tmpl.fontBody}',sans-serif; background:${pal.bg}; color:${pal.text}; }
      a { text-decoration:none; }
      @keyframes fadeInUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
      .fade-in { animation: fadeInUp 0.6s ease both; }
    </style>`;

  // Promo banner
  if (fitur.includes('promo')) {
    html += `<div style="background:linear-gradient(90deg,${pal.primary},${pal.accent});color:white;text-align:center;padding:10px 20px;font-size:13px;font-weight:700;letter-spacing:1px;">
      🎉 PROMO HARI INI — Beli 2 Porsi Gratis 1 Es Teh!&nbsp;&nbsp;|&nbsp;&nbsp;Berlaku 11.00–15.00 WIB
    </div>`;
  }

  // Nav — dynamic berdasarkan fitur yang dipilih
  const navLinks = [
    { label: 'Menu', href: '#menu', show: fitur.includes('menu') },
    { label: 'Galeri', href: '#galeri', show: fitur.includes('galeri') },
    { label: 'Testimoni', href: '#tentang', show: fitur.includes('review') },
    { label: 'Lokasi', href: '#lokasi', show: fitur.includes('lokasi') },
    { label: 'Kontak', href: '#kontak', show: fitur.includes('wa') },
  ].filter(l => l.show);

  html += `<nav style="display:flex;justify-content:space-between;align-items:center;padding:16px 32px;background:${pal.nav};position:sticky;top:0;z-index:10;">
    <span style="font-family:'${pal.fontHead}',serif;color:white;font-size:22px;font-weight:700;">🍽️ ${nama}</span>
    <div style="display:flex;gap:24px;">
      ${navLinks.map(l=>`<a href="${l.href}" style="color:rgba(255,255,255,0.7);font-size:13px;transition:color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">${l.label}</a>`).join('')}
    </div>
    <a href="${wa}" target="_top" style="background:${pal.btn};color:white;padding:8px 18px;border-radius:99px;font-size:13px;font-weight:700;">Pesan WA</a>
  </nav>`;

  // Hero — split layout
  html += `<section id="beranda" style="display:grid;grid-template-columns:1fr 1fr;min-height:460px;background:${pal.bg};" class="fade-in">
    <div style="padding:60px 48px;display:flex;flex-direction:column;justify-content:center;">
      <span style="display:inline-block;background:${pal.tagBg};color:${pal.tag};border:1px solid ${pal.border};padding:5px 14px;border-radius:99px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:20px;">✦ ${tmpl.badge}</span>
      <h1 style="font-family:'${pal.fontHead}',serif;font-size:clamp(28px,3.5vw,46px);font-weight:800;line-height:1.15;color:${pal.text};margin-bottom:16px;">${tmpl.headline}</h1>
      <p style="color:${pal.muted};font-size:16px;line-height:1.8;margin-bottom:32px;max-width:380px;">${tmpl.sub}</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        <a href="${wa}" target="_top" style="display:inline-flex;align-items:center;gap:8px;background:${pal.btn};color:white;padding:13px 28px;border-radius:10px;font-size:15px;font-weight:700;">💬 Pesan Sekarang</a>
        <a href="#menu" style="display:inline-flex;align-items:center;gap:8px;background:transparent;color:${pal.primary};border:2px solid ${pal.border};padding:13px 24px;border-radius:10px;font-size:15px;font-weight:600;">Lihat Menu →</a>
      </div>
    </div>
    <div style="background:linear-gradient(135deg,${pal.primary}22,${pal.accent}33);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:40px;">
      <div style="font-size:80px;filter:drop-shadow(0 8px 24px rgba(0,0,0,0.15));">🍽️</div>
      <div style="font-family:'${pal.fontHead}',serif;font-size:18px;color:${pal.muted};font-style:italic;">"${tmpl.tagline}"</div>
    </div>
  </section>`;

  // Stats bar
  html += `<div style="display:grid;grid-template-columns:repeat(3,1fr);background:${pal.primary};">
    ${tmpl.stats.map(s=>`<div style="padding:20px;text-align:center;border-right:1px solid rgba(255,255,255,0.15);">
      <div style="color:white;font-size:26px;font-weight:800;">${s.num}</div>
      <div style="color:rgba(255,255,255,0.7);font-size:12px;margin-top:2px;">${s.label}</div>
    </div>`).join('')}
  </div>`;

  // Menu section
  if (fitur.includes('menu')) {
    html += `<section id="menu" style="padding:56px 32px;background:white;">
      <div style="text-align:center;margin-bottom:40px;">
        <div style="display:inline-block;background:${pal.tagBg};color:${pal.tag};padding:4px 14px;border-radius:99px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px;">Menu Kami</div>
        <h2 style="font-family:'${pal.fontHead}',serif;font-size:32px;font-weight:800;color:${pal.text};">Pilihan Menu Terbaik</h2>
      </div>
      ${tmpl.categories.map(cat => {
        const items = tmpl.menuItems.filter(i=>i.cat===cat);
        if(!items.length) return '';
        return `<div style="margin-bottom:36px;">
          <h3 style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${pal.muted};margin-bottom:16px;padding-bottom:8px;border-bottom:2px solid ${pal.border};">${cat}</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px;">
            ${items.map(item=>`
              <div style="background:${pal.card};border:1px solid ${pal.border};border-radius:14px;padding:18px;display:flex;justify-content:space-between;align-items:flex-start;transition:transform 0.2s;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="flex:1;">
                  <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                    <span style="font-weight:700;font-size:15px;color:${pal.text};">${item.name}</span>
                    ${item.badge?`<span style="font-size:10px;background:${pal.tagBg};color:${pal.tag};padding:2px 8px;border-radius:99px;font-weight:700;">${item.badge}</span>`:''}
                  </div>
                  <div style="font-size:12px;color:${pal.muted};line-height:1.5;">${item.desc}</div>
                </div>
                <div style="font-size:15px;font-weight:800;color:${pal.primary};white-space:nowrap;margin-left:12px;">${item.price}</div>
              </div>`).join('')}
          </div>
        </div>`;
      }).join('')}
    </section>`;
  }

  // Galeri
  if (fitur.includes('galeri')) {
    if (galleryImages && galleryImages.filter(img => img).length) {
      html += `<section id="galeri" style="padding:60px 32px;background:${pal.bg};">
        <div style="text-align:center;margin-bottom:48px;">
          <h2 style="font-family:'${pal.fontHead}',serif;font-size:32px;font-weight:800;color:${pal.text};margin-bottom:12px;">Galeri Hidangan</h2>
          <p style="color:${pal.muted};font-size:15px;line-height:1.6;">Koleksi foto hidangan terbaik kami</p>
        </div>
        <div style="display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:160px 160px;gap:14px;max-width:720px;margin:0 auto;">
          <div class="webcraftai-gallery-frame" data-gallery-index="0" style="grid-row:span 2;border-radius:20px;overflow:hidden;background:${pal.card};box-shadow:0 8px 24px rgba(0,0,0,0.08);">
            <img class="webcraftai-gallery-img" src="${galleryImages[0]}" alt="Galeri" style="width:100%;height:100%;object-fit:contain;background:rgba(0,0,0,0.02);display:block;">
          </div>
          ${[1,2,3,4].map(i => {
            var img = galleryImages[i];
            return img ? `<div class="webcraftai-gallery-frame" data-gallery-index="${i}" style="border-radius:20px;overflow:hidden;background:${pal.card};box-shadow:0 8px 24px rgba(0,0,0,0.08);"><img class="webcraftai-gallery-img" src="${img}" alt="Galeri" style="width:100%;height:100%;object-fit:contain;background:rgba(0,0,0,0.02);display:block;"></div>` : `<div class="webcraftai-gallery-frame" data-gallery-index="${i}" style="background:linear-gradient(135deg,${pal.primary}15,${pal.accent}08);border-radius:20px;border:2px dashed ${pal.border};display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s;"><div style="text-align:center;"><span style="font-size:32px;display:block;margin-bottom:6px;">${['🍜','🥘','🍲','☕'][i-1] || '🍽️'}</span><span style="font-size:12px;color:${pal.muted};font-weight:600;">Klik upload</span></div></div>`;
          }).join('')}
        </div>
      </section>`;
    } else {
      const emojis = ['🍛','🍜','🥘','🍲','☕','🧃'];
      html += `<section id="galeri" style="padding:60px 32px;background:${pal.bg};">
        <div style="text-align:center;margin-bottom:48px;">
          <h2 style="font-family:'${pal.fontHead}',serif;font-size:32px;font-weight:800;color:${pal.text};margin-bottom:12px;">Galeri Hidangan</h2>
          <p style="color:${pal.muted};font-size:15px;line-height:1.6;">Setiap foto menceritakan cita rasa yang sesungguhnya</p>
        </div>
        <div style="display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:160px 160px;gap:14px;max-width:720px;margin:0 auto;">
          <div class="webcraftai-gallery-frame" data-gallery-index="0" style="grid-row:span 2;background:linear-gradient(135deg,${pal.primary}20,${pal.accent}10);border-radius:20px;border:2px dashed ${pal.border};display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s;">
            <div style="text-align:center;"><span style="font-size:48px;display:block;margin-bottom:8px;">🍽️</span><span style="font-size:12px;color:${pal.muted};font-weight:600;">Klik upload</span></div>
          </div>
          ${emojis.slice(0,4).map((e,i)=>`<div class="webcraftai-gallery-frame" data-gallery-index="${i+1}" style="background:linear-gradient(135deg,${pal.primary}15,${pal.accent}08);border-radius:20px;border:2px dashed ${pal.border};display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s;"><div style="text-align:center;"><span style="font-size:32px;display:block;margin-bottom:6px;">${e}</span><span style="font-size:12px;color:${pal.muted};font-weight:600;">Klik upload</span></div></div>`).join('')}
        </div>
      </section>`;
    }
  }

  // Testimoni
  if (fitur.includes('review')) {
    html += buildTestimoni(tmpl, pal);
  }

  // Lokasi
  if (fitur.includes('lokasi')) {
    html += buildLokasi(nama, pal);
  }

  // WA CTA
  if (fitur.includes('wa')) {
    html += `<section id="kontak" style="padding:56px 32px;background:${pal.primary};text-align:center;">
      <h2 style="font-family:'${pal.fontHead}',serif;font-size:30px;font-weight:800;color:white;margin-bottom:12px;">Lapar? Pesan Sekarang! 🍽️</h2>
      <p style="color:rgba(255,255,255,0.8);margin-bottom:28px;font-size:15px;">Hubungi kami via WhatsApp, siap antar atau siap saji di tempat</p>
      <a href="${wa}" target="_top" style="display:inline-flex;align-items:center;gap:10px;background:white;color:${pal.primary};padding:14px 36px;border-radius:99px;font-size:16px;font-weight:800;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="${pal.primary}"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Chat WhatsApp Sekarang
      </a>
    </section>`;
  }

  html += buildFooter(nama, tmpl, pal);
  return baseStyle + html;
}

