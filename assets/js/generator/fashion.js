// ══════════════════════════════════════════════
//  WebCraft AI — generator/fashion.js
//  Layout builder untuk kategori Fashion
// ══════════════════════════════════════════════


function buildFashion(nama, pal, tmpl, wa, fitur, galleryImages) {
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
    html += `<div style="background:${pal.text};color:white;text-align:center;padding:10px;font-size:12px;letter-spacing:3px;font-weight:600;text-transform:uppercase;">
      FREE ONGKIR untuk pembelian di atas Rp 200.000 &nbsp;·&nbsp; Kode: UMKM2025
    </div>`;
  }

  // Nav — minimal fashion style, dynamic
  const navLinksFashion = [
    { label: 'Koleksi', href: '#koleksi', show: fitur.includes('menu') },
    { label: 'Lookbook', href: '#galeri', show: fitur.includes('galeri') },
    { label: 'Testimoni', href: '#tentang', show: fitur.includes('review') },
    { label: 'Kontak', href: '#kontak', show: fitur.includes('wa') },
  ].filter(l => l.show);

  html += `<nav style="display:flex;justify-content:space-between;align-items:center;padding:20px 40px;background:white;border-bottom:1px solid ${pal.border};position:sticky;top:0;z-index:10;">
    <div style="display:flex;gap:28px;">
      ${navLinksFashion.map(l=>`<a href="${l.href}" style="color:${pal.muted};font-size:13px;letter-spacing:1px;text-transform:uppercase;font-weight:500;">${l.label}</a>`).join('')}
    </div>
    <span style="font-family:'${pal.fontHead}',serif;font-size:24px;font-weight:800;color:${pal.text};letter-spacing:-1px;">${nama}</span>
    <a href="${wa}" target="_top" style="font-size:13px;color:${pal.primary};font-weight:600;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid ${pal.primary};">Hubungi →</a>
  </nav>`;

  // Hero — full-width editorial
  html += `<section id="beranda" style="padding:80px 40px;text-align:center;background:${pal.bg};position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 70% 50%,${pal.primary}11,transparent 60%);pointer-events:none;"></div>
    <p style="font-size:11px;letter-spacing:4px;text-transform:uppercase;color:${pal.muted};margin-bottom:20px;">— ${tmpl.badge} 2025 —</p>
    <h1 style="font-family:'${pal.fontHead}',serif;font-size:clamp(40px,6vw,72px);font-weight:800;line-height:1.05;color:${pal.text};letter-spacing:-2px;margin-bottom:20px;">${tmpl.headline}</h1>
    <p style="color:${pal.muted};font-size:16px;max-width:480px;margin:0 auto 36px;line-height:1.8;">${tmpl.sub}</p>
    <div style="display:flex;gap:8px;justify-content:center;margin-bottom:40px;">
      ${tmpl.stats.map(s=>`<div style="background:white;border:1px solid ${pal.border};padding:12px 24px;border-radius:8px;text-align:center;">
        <div style="font-size:20px;font-weight:800;color:${pal.primary};">${s.num}</div>
        <div style="font-size:11px;color:${pal.muted};letter-spacing:1px;">${s.label}</div>
      </div>`).join('')}
    </div>
    <div style="display:flex;gap:12px;justify-content:center;">
      <a href="#koleksi" style="background:${pal.btn};color:white;padding:14px 32px;font-size:14px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Shop Now</a>
      <a href="${wa}" target="_top" style="background:transparent;color:${pal.primary};border:2px solid ${pal.primary};padding:14px 28px;font-size:14px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">WhatsApp</a>
    </div>
  </section>`;

  // Produk — grid lookbook
  if (fitur.includes('menu')) {
    html += `<section id="koleksi" style="padding:56px 32px;background:white;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:32px;">
        <h2 style="font-family:'${pal.fontHead}',serif;font-size:28px;color:${pal.text};">Koleksi Terbaru</h2>
        <div style="display:flex;gap:16px;">
          ${tmpl.categories.map(c=>`<span style="font-size:12px;letter-spacing:1px;text-transform:uppercase;color:${pal.muted};cursor:pointer;padding-bottom:2px;border-bottom:1px solid transparent;" onmouseover="this.style.borderColor='${pal.primary}';this.style.color='${pal.primary}'" onmouseout="this.style.borderColor='transparent';this.style.color='${pal.muted}'">${c}</span>`).join('')}
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:20px;">
        ${tmpl.menuItems.map((item,i)=>`
          <div style="cursor:pointer;" onmouseover="this.querySelector('.img-box').style.transform='scale(1.03)'" onmouseout="this.querySelector('.img-box').style.transform='scale(1)'">
            <div class="webcraftai-product-frame img-box" data-product-index="${i}" style="background:linear-gradient(135deg,${pal.card},${pal.primary}22);height:220px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:48px;margin-bottom:12px;transition:transform 0.3s;overflow:hidden;position:relative;">
              ${['👗','👔','👜','🧥','👖','👛','🧣','🕶️'][i%8]}
              ${item.badge?`<span style="position:absolute;top:10px;left:10px;background:${pal.primary};color:white;font-size:10px;padding:3px 9px;border-radius:99px;font-weight:700;">${item.badge}</span>`:''}
            </div>
            <div style="font-size:13px;color:${pal.muted};margin-bottom:3px;letter-spacing:0.5px;">${item.cat}</div>
            <div style="font-weight:700;font-size:15px;color:${pal.text};margin-bottom:4px;">${item.name}</div>
            <div style="font-size:12px;color:${pal.muted};margin-bottom:6px;">${item.desc}</div>
            <div style="font-size:16px;font-weight:800;color:${pal.primary};">${item.price}</div>
          </div>`).join('')}
      </div>
    </section>`;
  }

  if (fitur.includes('galeri')) {
    const placeholders = ['Chic','Style','Modis','Look','Fashion','Trend'];
    html += `<section id="galeri" style="padding:48px 32px;background:${pal.bg};">
      <h2 style="font-family:'${pal.fontHead}',serif;font-size:28px;text-align:center;margin-bottom:8px;color:${pal.text};">Lookbook</h2>
      <p style="text-align:center;color:${pal.muted};font-size:13px;letter-spacing:2px;margin-bottom:28px;">Foto koleksi Anda akan ditampilkan dalam bingkai rapi.</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:200px 200px;gap:8px;max-width:640px;margin:0 auto;border-radius:16px;overflow:hidden;">
        ${Array.from({ length: 6 }, (_, i) => {
          const src = galleryImages[i];
          return src ? `<div class="webcraftai-gallery-frame" data-gallery-index="${i}" style="overflow:hidden;border-radius:16px;background:${pal.card};"><img class="webcraftai-gallery-img" src="${src}" alt="Lookbook" style="width:100%;height:100%;object-fit:contain;background:rgba(0,0,0,0.02);display:block;"></div>` : `<div class="webcraftai-gallery-frame" data-gallery-index="${i}" style="background:${i % 3 === 0 ? pal.primary + '22' : i % 3 === 1 ? pal.card : pal.primary + '11'};border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:36px;color:${pal.primary};font-style:italic;font-family:'${pal.fontHead}',serif;"><div class="webcraftai-gallery-placeholder" style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;padding:20px;"><span>${placeholders[i]}</span><small style="font-size:11px;color:${pal.primary};font-weight:700;">Klik Upload Gambar</small></div></div>`;
        }).join('')}
      </div>
    </section>`;
  }

  if (fitur.includes('review')) html += buildTestimoni(tmpl, pal);
  if (fitur.includes('lokasi')) html += buildLokasi(nama, pal);

  if (fitur.includes('wa')) {
    html += `<section id="kontak" style="padding:60px 32px;background:${pal.text};text-align:center;">
      <p style="font-size:11px;letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,0.5);margin-bottom:16px;">— Order Via WhatsApp —</p>
      <h2 style="font-family:'${pal.fontHead}',serif;font-size:32px;color:white;margin-bottom:24px;">${tmpl.tagline}</h2>
      <a href="${wa}" target="_top" style="display:inline-flex;align-items:center;gap:10px;background:#25D366;color:white;padding:14px 36px;border-radius:4px;font-size:15px;font-weight:700;letter-spacing:1px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        CHAT SEKARANG
      </a>
    </section>`;
  }

  html += buildFooter(nama, tmpl, pal);
  return baseStyle + html;
}

