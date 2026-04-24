// ══════════════════════════════════════════════
//  WebCraft AI — generator/components.js
//  Komponen HTML yang dipakai bersama oleh
//  semua builder (Testimoni, Lokasi, Footer)
// ══════════════════════════════════════════════

function buildTestimoni(tmpl, pal) {
  return `<section id="tentang" style="padding:48px 32px;background:white;">
    <div style="text-align:center;margin-bottom:32px;">
      <h2 style="font-family:'${pal.fontHead}',serif;font-size:26px;color:${pal.text};margin-bottom:6px;">Kata Pelanggan Kami</h2>
      <p style="color:${pal.muted};font-size:13px;">Kepuasan pelanggan adalah prioritas utama kami</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:16px;max-width:800px;margin:0 auto;">
      ${tmpl.testimonials.map(r => `
        <div style="background:${pal.card};border:1px solid ${pal.border};border-radius:16px;padding:22px;">
          <div style="color:#f59e0b;font-size:14px;margin-bottom:10px;">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
          <p style="font-size:13px;color:${pal.text};line-height:1.7;margin-bottom:14px;font-style:italic;">"${r.text}"</p>
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:34px;height:34px;border-radius:50%;background:${pal.primary}22;border:1px solid ${pal.border};display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:${pal.primary};">${r.name[0]}</div>
            <div>
              <div style="font-size:13px;font-weight:700;color:${pal.text};">${r.name}</div>
              <div style="font-size:11px;color:${pal.muted};">${r.role}</div>
            </div>
          </div>
        </div>`).join('')}
    </div>
  </section>`;
}

function buildLokasi(nama, pal) {
  return `<section id="lokasi" style="padding:40px 28px;background:${pal.bg};">
    <h2 style="font-family:'${pal.fontHead}',serif;font-size:24px;text-align:center;color:${pal.text};margin-bottom:24px;">Lokasi Kami</h2>
    <div style="max-width:520px;margin:0 auto;background:white;border:1px solid ${pal.border};border-radius:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,${pal.primary}22,${pal.accent}22);height:120px;display:flex;align-items:center;justify-content:center;font-size:48px;">📍</div>
      <div style="padding:20px;">
        <div style="font-weight:700;font-size:16px;color:${pal.text};margin-bottom:6px;">${nama}</div>
        <div style="color:${pal.muted};font-size:13px;line-height:1.7;margin-bottom:14px;">
          Jl. Contoh Alamat No. 123, RT 01/RW 02<br>Kota Anda, Provinsi 12345
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <span style="display:inline-flex;align-items:center;gap:4px;background:${pal.tagBg};color:${pal.tag};border:1px solid ${pal.border};padding:6px 12px;border-radius:99px;font-size:12px;font-weight:600;">🕐 Buka 07.00–21.00</span>
          <span style="display:inline-flex;align-items:center;gap:4px;background:${pal.tagBg};color:${pal.tag};border:1px solid ${pal.border};padding:6px 12px;border-radius:99px;font-size:12px;font-weight:600;">📅 Senin–Minggu</span>
        </div>
      </div>
    </div>
  </section>`;
}

function buildFooter(nama, tmpl, pal) {
  return `<footer style="background:${pal.nav || pal.text};color:rgba(255,255,255,0.6);text-align:center;padding:28px;font-size:13px;">
    <div style="font-weight:700;font-size:16px;color:white;margin-bottom:4px;">${tmpl.emoji} ${nama}</div>
    <div>© 2025 ${nama} · Dibuat dengan <strong style="color:rgba(255,255,255,0.9);">WebCraft AI</strong></div>
  </footer>`;
}
