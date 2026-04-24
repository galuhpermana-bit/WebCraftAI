// ══════════════════════════════════════════════
//  WebCraft AI — generator/toko.js
//  Layout builder untuk kategori Toko/Retail
// ══════════════════════════════════════════════


function buildToko(nama, pal, tmpl, wa, fitur, galleryImages) {
  let html = '';
  const fontImport = `@import url('https://fonts.googleapis.com/css2?family=${tmpl.font}&display=swap');`;

  const baseStyle = `
    <style>
      ${fontImport}
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family:'${tmpl.fontBody}',sans-serif; background:${pal.bg}; color:${pal.text}; }
      a { text-decoration:none; }
    </style>`;

  if (fitur.includes('promo')) {
    html += `<div style="background:linear-gradient(90deg,${pal.primary},${pal.accent},${pal.primary});background-size:200%;color:white;text-align:center;padding:10px;font-size:13px;font-weight:700;">
      ⚡ FLASH SALE sampai tengah malam! Diskon 25% untuk Paket Sembako — stok terbatas!
    </div>`;
  }

  // Nav — dynamic berdasarkan fitur
  html += `<nav style="display:flex;justify-content:space-between;align-items:center;padding:14px 28px;background:${pal.nav};position:sticky;top:0;z-index:10;">
    <span style="font-family:'${pal.fontHead}',serif;color:white;font-size:20px;font-weight:800;">🛒 ${nama}</span>
    <div style="display:flex;gap:20px;">
      ${[
        fitur.includes('menu')   ? `<a href="#produk"  style="color:rgba(255,255,255,0.7);font-size:13px;">Produk</a>` : '',
        fitur.includes('galeri') ? `<a href="#galeri"  style="color:rgba(255,255,255,0.7);font-size:13px;">Galeri</a>` : '',
        fitur.includes('review') ? `<a href="#tentang" style="color:rgba(255,255,255,0.7);font-size:13px;">Testimoni</a>` : '',
        fitur.includes('lokasi') ? `<a href="#lokasi"  style="color:rgba(255,255,255,0.7);font-size:13px;">Lokasi</a>` : '',
        fitur.includes('wa')     ? `<a href="#kontak"  style="color:rgba(255,255,255,0.7);font-size:13px;">Kontak</a>` : '',
      ].filter(Boolean).join('')}
    </div>
    <a href="${wa}" target="_top" style="display:flex;align-items:center;gap:6px;background:#25D366;color:white;padding:8px 16px;border-radius:99px;font-size:13px;font-weight:700;">💬 Order WA</a>
  </nav>`;

  // Hero — promo style
  html += `<section id="beranda" style="background:linear-gradient(135deg,${pal.nav},${pal.primary}44);padding:48px 32px;display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:center;">
    <div>
      <div style="display:inline-block;background:${pal.accent}22;border:1px solid ${pal.accent}44;color:${pal.accent};padding:5px 14px;border-radius:99px;font-size:11px;font-weight:700;letter-spacing:1px;margin-bottom:16px;">🏪 ${tmpl.badge}</div>
      <h1 style="font-family:'${pal.fontHead}',serif;font-size:clamp(24px,3.5vw,42px);font-weight:800;color:white;line-height:1.2;margin-bottom:14px;">${tmpl.headline}</h1>
      <p style="color:rgba(255,255,255,0.7);font-size:14px;line-height:1.8;margin-bottom:24px;">${tmpl.sub}</p>
      <a href="${wa}" target="_top" style="display:inline-flex;align-items:center;gap:8px;background:${pal.btn};color:white;padding:12px 28px;border-radius:10px;font-size:15px;font-weight:700;">Belanja Sekarang →</a>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      ${tmpl.stats.map(s=>`<div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:16px;text-align:center;">
        <div style="font-size:22px;font-weight:800;color:white;">${s.num}</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.55);margin-top:2px;">${s.label}</div>
      </div>`).join('')}
      <div style="background:${pal.accent}22;border:1px solid ${pal.accent}44;border-radius:12px;padding:16px;text-align:center;">
        <div style="font-size:22px;font-weight:800;color:${pal.accent};">★ 4.8</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.55);margin-top:2px;">Rating Toko</div>
      </div>
    </div>
  </section>`;

  // Produk grid
  if (fitur.includes('menu')) {
    html += `<section id="produk" style="padding:48px 28px;background:${pal.bg};">
      <h2 style="font-family:'${pal.fontHead}',serif;font-size:24px;color:${pal.text};margin-bottom:24px;">Produk Pilihan</h2>
      ${tmpl.categories.map(cat=>{
        const items = tmpl.menuItems.filter(i=>i.cat===cat);
        if(!items.length) return '';
        return `<div style="margin-bottom:32px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;">
            <div style="width:4px;height:18px;background:${pal.primary};border-radius:99px;"></div>
            <h3 style="font-size:14px;font-weight:700;color:${pal.text};">${cat}</h3>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;">
            ${items.map(item=>`
              <div style="background:white;border:1px solid ${pal.border};border-radius:12px;overflow:hidden;transition:transform 0.2s,box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 8px 24px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
                <div class="webcraftai-product-frame" data-product-index="${tmpl.menuItems.indexOf(item)}" style="background:linear-gradient(135deg,${pal.card},${pal.primary}18);height:110px;display:flex;align-items:center;justify-content:center;font-size:36px;position:relative;">
                  ${'🛒🌾🧴🍚🛍️🥤🧼🧹'[tmpl.menuItems.indexOf(item)%8]}
                  ${item.badge?`<span style="position:absolute;top:8px;right:8px;background:${pal.primary};color:white;font-size:9px;padding:2px 7px;border-radius:99px;font-weight:700;">${item.badge}</span>`:''}
                </div>
                <div style="padding:12px;">
                  <div style="font-size:13px;font-weight:700;color:${pal.text};margin-bottom:3px;">${item.name}</div>
                  <div style="font-size:11px;color:${pal.muted};margin-bottom:8px;line-height:1.4;">${item.desc}</div>
                  <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:15px;font-weight:800;color:${pal.primary};">${item.price}</span>
                    <a href="${wa}" target="_top" style="background:${pal.primary};color:white;font-size:11px;padding:4px 10px;border-radius:6px;font-weight:700;">+ Beli</a>
                  </div>
                </div>
              </div>`).join('')}
          </div>
        </div>`;
      }).join('')}
    </section>`;
  }

  if (fitur.includes('galeri')) {
    const placeholders = ['🏪','🛒','📦','🥬','🧺','📊'];
    html += `<section id="galeri" style="padding:40px 28px;background:white;">
      <h2 style="font-family:'${pal.fontHead}',serif;font-size:22px;text-align:center;margin-bottom:20px;color:${pal.text};">Suasana Toko</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:700px;margin:0 auto;">
        ${Array.from({ length: 6 }, (_, i) => {
          const src = galleryImages[i];
          return src ? `<div class="webcraftai-gallery-frame" data-gallery-index="${i}" style="background:${pal.card};border-radius:14px;overflow:hidden;min-height:130px;"><img class="webcraftai-gallery-img" src="${src}" alt="Suasana Toko" style="width:100%;height:100%;object-fit:contain;background:rgba(0,0,0,0.02);display:block;"></div>` : `<div class="webcraftai-gallery-frame" data-gallery-index="${i}" style="background:${pal.card};height:130px;border-radius:14px;display:flex;align-items:center;justify-content:center;"><div class="webcraftai-gallery-placeholder" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;padding:12px;color:${pal.muted};"><span style="font-size:32px;">${placeholders[i]}</span><small style="font-size:11px;color:${pal.muted};font-weight:700;">Klik Upload Gambar</small></div></div>`;
        }).join('')}
      </div>
    </section>`;
  }

  if (fitur.includes('review')) html += buildTestimoni(tmpl, pal);
  if (fitur.includes('lokasi')) html += buildLokasi(nama, pal);

  if (fitur.includes('wa')) {
    html += `<section id="kontak" style="padding:40px 28px;background:${pal.primary};text-align:center;">
      <h2 style="font-family:'${pal.fontHead}',serif;font-size:24px;color:white;margin-bottom:8px;">Pesan Langsung via WhatsApp</h2>
      <p style="color:rgba(255,255,255,0.75);font-size:14px;margin-bottom:20px;">Ketik nama produk + jumlah, kami siap kirim!</p>
      <a href="${wa}" target="_top" style="display:inline-flex;align-items:center;gap:10px;background:#25D366;color:white;padding:12px 28px;border-radius:99px;font-size:15px;font-weight:700;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Chat & Order Sekarang
      </a>
    </section>`;
  }

  html += buildFooter(nama, tmpl, pal);
  return baseStyle + html;
}


