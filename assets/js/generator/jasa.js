// ══════════════════════════════════════════════
//  WebCraft AI — generator/jasa.js
//  Layout builder untuk kategori Jasa/Servis
// ══════════════════════════════════════════════


function buildJasa(nama, pal, tmpl, wa, fitur, galleryImages) {
  let html = '';
  const fontImport = `@import url('https://fonts.googleapis.com/css2?family=${tmpl.font}&display=swap');`;

  const baseStyle = `
    <style>
      ${fontImport}
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family:'${tmpl.fontBody}',sans-serif; background:${pal.bg}; color:${pal.text}; }
      a { text-decoration:none; }
      @keyframes fadeInUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    </style>`;

  if (fitur.includes('promo')) {
    html += `<div style="background:${pal.primary};color:white;text-align:center;padding:10px;font-size:13px;font-weight:600;">
      🛠️ DISKON 15% untuk kunjungan pertama — Hubungi sekarang!
    </div>`;
  }

  // Nav — dynamic berdasarkan fitur
  html += `<nav style="display:flex;justify-content:space-between;align-items:center;padding:18px 36px;background:${pal.nav};position:sticky;top:0;z-index:10;">
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="background:${pal.primary};width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;">⚙️</div>
      <span style="font-family:'${pal.fontHead}',serif;color:white;font-size:20px;font-weight:700;">${nama}</span>
    </div>
    <div style="display:flex;gap:24px;">
      ${[
        fitur.includes('menu')   ? `<a href="#layanan" style="color:rgba(255,255,255,0.7);font-size:13px;">Layanan</a>` : '',
        fitur.includes('galeri') ? `<a href="#galeri"  style="color:rgba(255,255,255,0.7);font-size:13px;">Portofolio</a>` : '',
        fitur.includes('review') ? `<a href="#tentang" style="color:rgba(255,255,255,0.7);font-size:13px;">Testimoni</a>` : '',
        fitur.includes('lokasi') ? `<a href="#lokasi"  style="color:rgba(255,255,255,0.7);font-size:13px;">Lokasi</a>` : '',
        fitur.includes('wa')     ? `<a href="#kontak"  style="color:rgba(255,255,255,0.7);font-size:13px;">Kontak</a>` : '',
      ].filter(Boolean).join('')}
    </div>
    <a href="${wa}" target="_top" style="background:${pal.btn};color:white;padding:9px 20px;border-radius:8px;font-size:13px;font-weight:700;">📞 Hubungi Kami</a>
  </nav>`;

  // Hero — left heavy + trust badges
  html += `<section id="beranda" style="background:${pal.nav};padding:64px 36px;display:grid;grid-template-columns:1.2fr 1fr;gap:48px;align-items:center;">
    <div>
      <div style="display:inline-flex;align-items:center;gap:6px;background:${pal.primary}22;border:1px solid ${pal.primary}44;color:${pal.accent};padding:6px 14px;border-radius:99px;font-size:12px;font-weight:700;margin-bottom:20px;">
        ✅ ${tmpl.badge}
      </div>
      <h1 style="font-family:'${pal.fontHead}',serif;font-size:clamp(26px,3.5vw,44px);font-weight:700;color:white;line-height:1.2;margin-bottom:16px;">${tmpl.headline}</h1>
      <p style="color:rgba(255,255,255,0.65);font-size:15px;line-height:1.8;margin-bottom:28px;">${tmpl.sub}</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:32px;">
        ${['Bergaransi','Tepat Waktu','Harga Transparan','Teknisi Bersertifikat'].map(t=>`<span style="background:${pal.primary}22;border:1px solid ${pal.primary}44;color:${pal.accent};padding:5px 12px;border-radius:99px;font-size:12px;font-weight:600;">✓ ${t}</span>`).join('')}
      </div>
      <a href="${wa}" target="_top" style="display:inline-flex;align-items:center;gap:8px;background:${pal.btn};color:white;padding:14px 30px;border-radius:10px;font-size:15px;font-weight:700;">💬 Minta Penawaran Gratis</a>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      ${tmpl.stats.map(s=>`<div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:20px;text-align:center;">
        <div style="font-size:28px;font-weight:800;color:${pal.accent};">${s.num}</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.55);margin-top:4px;">${s.label}</div>
      </div>`).join('')}
      <div style="background:${pal.primary}22;border:1px solid ${pal.primary}44;border-radius:14px;padding:20px;text-align:center;grid-column:span 1;">
        <div style="font-size:28px;font-weight:800;color:${pal.accent};">★ 4.9</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.55);margin-top:4px;">Rating Pelanggan</div>
      </div>
    </div>
  </section>`;

  // Layanan cards
  if (fitur.includes('menu')) {
    html += `<section id="layanan" style="padding:56px 32px;background:${pal.bg};">
      <div style="text-align:center;margin-bottom:36px;">
        <h2 style="font-family:'${pal.fontHead}',serif;font-size:28px;color:${pal.text};margin-bottom:8px;">Layanan Kami</h2>
        <p style="color:${pal.muted};font-size:14px;">${tmpl.tagline}</p>
      </div>
      ${tmpl.categories.map(cat => {
        const items = tmpl.menuItems.filter(i=>i.cat===cat);
        if(!items.length) return '';
        const catIcons = {'AC & Elektronik':'❄️','Rumah & Bangunan':'🏠','Kendaraan':'🚗'};
        return `<div style="margin-bottom:32px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
            <span style="font-size:20px;">${catIcons[cat]||'🔧'}</span>
            <h3 style="font-size:16px;font-weight:700;color:${pal.text};">${cat}</h3>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;">
            ${items.map(item=>`
              <div style="background:white;border:1px solid ${pal.border};border-left:4px solid ${pal.primary};border-radius:0 10px 10px 0;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;transition:box-shadow 0.2s;" onmouseover="this.style.boxShadow='0 4px 20px rgba(0,0,0,0.08)'" onmouseout="this.style.boxShadow='none'">
                <div>
                  <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                    <span style="font-weight:700;font-size:14px;color:${pal.text};">${item.name}</span>
                    ${item.badge?`<span style="font-size:10px;background:${pal.tagBg};color:${pal.tag};padding:2px 8px;border-radius:99px;font-weight:700;">${item.badge}</span>`:''}
                  </div>
                  <div style="font-size:12px;color:${pal.muted};">${item.desc}</div>
                </div>
                <div style="font-size:15px;font-weight:800;color:${pal.primary};white-space:nowrap;margin-left:16px;">${item.price}</div>
              </div>`).join('')}
          </div>
        </div>`;
      }).join('')}
    </section>`;
  }

  if (fitur.includes('galeri')) {
    const placeholders = ['🔧','❄️','💡','🏠','🚗','🪛'];
    const labels = ['Servis AC','Elektronik','Listrik','Renovasi','Kendaraan','Tools'];
    html += `<section id="galeri" style="padding:48px 32px;background:white;">
      <h2 style="font-family:'${pal.fontHead}',serif;font-size:24px;text-align:center;margin-bottom:24px;color:${pal.text};">Hasil Pekerjaan</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:640px;margin:0 auto;">
        ${Array.from({ length: 6 }, (_, i) => {
          const src = galleryImages[i];
          return src ? `<div class="webcraftai-gallery-frame" data-gallery-index="${i}" style="background:${pal.card};border:1px solid ${pal.border};border-radius:12px;overflow:hidden;min-height:130px;"><img class="webcraftai-gallery-img" src="${src}" alt="Portofolio" style="width:100%;height:100%;object-fit:contain;background:rgba(0,0,0,0.02);display:block;"></div>` : `<div class="webcraftai-gallery-frame" data-gallery-index="${i}" style="background:${pal.card};border:1px solid ${pal.border};height:130px;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:12px;"><div class="webcraftai-gallery-placeholder" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;text-align:center;"><span style="font-size:32px;">${placeholders[i]}</span><span style="font-size:11px;color:${pal.muted};font-weight:600;">Klik Upload Gambar</span></div></div>`;
        }).join('')}
      </div>
    </section>`;
  }

  if (fitur.includes('review')) html += buildTestimoni(tmpl, pal);
  if (fitur.includes('lokasi')) html += buildLokasi(nama, pal);

  if (fitur.includes('wa')) {
    html += `<section id="kontak" style="padding:56px 32px;background:${pal.primary};display:grid;grid-template-columns:1fr auto;align-items:center;gap:24px;flex-wrap:wrap;">
      <div>
        <h2 style="font-family:'${pal.fontHead}',serif;font-size:26px;color:white;margin-bottom:8px;">Butuh Bantuan Segera?</h2>
        <p style="color:rgba(255,255,255,0.75);font-size:14px;">Kami siap melayani 24/7. Respon cepat, hasil memuaskan.</p>
      </div>
      <a href="${wa}" target="_top" style="display:inline-flex;align-items:center;gap:10px;background:white;color:${pal.primary};padding:14px 28px;border-radius:10px;font-size:15px;font-weight:800;white-space:nowrap;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="${pal.primary}"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp Sekarang
      </a>
    </section>`;
  }

  html += buildFooter(nama, tmpl, pal);
  return baseStyle + html;
}

