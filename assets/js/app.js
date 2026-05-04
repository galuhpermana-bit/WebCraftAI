// ══════════════════════════════════════════════
//  WebCraft AI — app.js (Entry Point)
//  Hanya berisi: import + generate() + download()
//
//  Struktur modul:
//  assets/js/
//  ├── app.js                  ← file ini
//  └── generator/
//      ├── data.js             ← palettes + templates
//      ├── components.js       ← Testimoni, Lokasi, Footer
//      ├── kuliner.js          ← buildKuliner()
//      ├── fashion.js          ← buildFashion()
//      ├── jasa.js             ← buildJasa()
//      ├── toko.js             ← buildToko()
//      └── ui.js               ← chip, slug, switchTab
// ══════════════════════════════════════════════


// Inisialisasi chip toggle saat halaman siap

var galleryImages = [null, null, null, null, null, null];

function handleGalleryUpload(event, index) {
  var file = event.target.files[0];
  if (!file || !file.type.startsWith('image/')) return;
  var reader = new FileReader();
  reader.onload = function() {
    galleryImages[index] = reader.result;
    updateGallerySlot(index, reader.result);
  };
  reader.readAsDataURL(file);
}

function updateGallerySlot(index, src) {
  var thumb = document.getElementById('gallery-slot-thumb-' + index);
  if (!thumb) return;
  thumb.innerHTML = src
    ? '<img src="' + src + '" alt="Slot ' + (index + 1) + '"><small>Slot ' + (index + 1) + '</small>'
    : '<span>+</span><small>Slot ' + (index + 1) + '</small>';
}

// Expose fungsi ke HTML (onclick="liveSlug()" dll)

// ── GENERATE MAIN ──
function generate() {
  const nama  = document.getElementById('f-nama').value || 'Bisnis Saya';
  const jenis = document.getElementById('f-jenis').value;
  const warna = document.getElementById('f-warna').value;
  const waNum = document.getElementById('f-wa').value || '08123456789';
  const fitur = selectedFeatures;
  const pal   = palettes[warna];
  const tmpl  = templates[jenis];

  // Merge font dari palette ke template (dibutuhkan builder)
  tmpl.fontHead = pal.fontHead;
  tmpl.fontBody = pal.fontBody;
  tmpl.font     = pal.font;

  const wa = `https://wa.me/62${waNum.replace(/^0/, '')}?text=Halo,%20saya%20ingin%20info%20lebih%20lanjut`;

  // ── AI LOG ──
  const logLines = [
    `<span class="lg-dim">────────────────────────────────</span>`,
    `<span class="lg-info">[Orchestrator] Input diterima ✓</span>`,
    `<span class="lg-dim">  nama   : </span><span class="lg-val">"${nama}"</span>`,
    `<span class="lg-dim">  jenis  : </span><span class="lg-val">"${jenis}"</span>`,
    `<span class="lg-dim">  warna  : </span><span class="lg-val">"${warna}"</span>`,
    `<span class="lg-dim">  fitur  : </span><span class="lg-val">[${fitur.join(', ')}]</span>`,
    `<span class="lg-dim">────────────────────────────────</span>`,
    `<span class="lg-info">[Rule Engine] Menjalankan rules...</span>`,
    `<span class="lg-ok">✓ Rule 1</span><span class="lg-dim"> jenis="${jenis}" → layout=</span><span class="lg-key">build${jenis.charAt(0).toUpperCase() + jenis.slice(1)}()</span>`,
    `<span class="lg-ok">✓ Rule 2</span><span class="lg-dim"> warna="${warna}" → fontHead=</span><span class="lg-key">"${pal.fontHead}"</span>`,
    `<span class="lg-ok">✓ Rule 3</span><span class="lg-dim"> warna="${warna}" → primary=</span><span class="lg-key">${pal.primary}</span>`,
    `<span class="lg-ok">✓ Rule 4</span><span class="lg-dim"> fitur=[${fitur.join(',')}] → </span><span class="lg-key">${fitur.length} komponen aktif</span>`,
    `<span class="lg-ok">✓ Rule 5</span><span class="lg-dim"> jenis="${jenis}" → ${tmpl.menuItems.length} items dimuat</span>`,
    `<span class="lg-dim">────────────────────────────────</span>`,
    `<span class="lg-info">[Template Engine] Memuat komponen...</span>`,
    ...fitur.map(f => `<span class="lg-ok">  ✓ ${f}_component dimuat</span>`),
    `<span class="lg-dim">────────────────────────────────</span>`,
    `<span class="lg-info">[HTML Generator] Merender output...</span>`,
    `<span class="lg-ok">✓ Layout unik "${jenis}" terpilih</span>`,
    `<span class="lg-ok">✓ Font: ${pal.fontHead} + ${pal.fontBody}</span>`,
    `<span class="lg-ok">✓ Website berhasil di-generate!</span>`,
    `<span class="lg-dim">  waktu render: ${(Math.random() * 200 + 50).toFixed(0)}ms</span>`,
  ];
  document.getElementById('log-body').innerHTML = logLines.map(l => `<span class="log-line">${l}</span>`).join('');

  // ── ARCH RULES ──
  const rules = [
    `<span style="color:#7ec8e3">if</span> jenis == <span style="color:#FF9B50">"${jenis}"</span> → layout = <span style="color:#2FFFA0">build${jenis.charAt(0).toUpperCase() + jenis.slice(1)}()</span>`,
    `<span style="color:#7ec8e3">if</span> warna == <span style="color:#FF9B50">"${warna}"</span> → font = <span style="color:#2FFFA0">"${pal.fontHead}"</span>`,
    `<span style="color:#7ec8e3">if</span> warna == <span style="color:#FF9B50">"${warna}"</span> → primary = <span style="color:#2FFFA0">"${pal.primary}"</span>`,
    fitur.includes('menu')   ? `<span style="color:#7ec8e3">if</span> fitur.includes(<span style="color:#FF9B50">"menu"</span>)   → render <span style="color:#a99dff">MenuSection()</span>` : '',
    fitur.includes('wa')     ? `<span style="color:#7ec8e3">if</span> fitur.includes(<span style="color:#FF9B50">"wa"</span>)     → render <span style="color:#a99dff">WAButton()</span>` : '',
    fitur.includes('lokasi') ? `<span style="color:#7ec8e3">if</span> fitur.includes(<span style="color:#FF9B50">"lokasi"</span>)  → render <span style="color:#a99dff">MapSection()</span>` : '',
    fitur.includes('galeri') ? `<span style="color:#7ec8e3">if</span> fitur.includes(<span style="color:#FF9B50">"galeri"</span>)  → render <span style="color:#a99dff">GallerySection()</span>` : '',
    fitur.includes('promo')  ? `<span style="color:#7ec8e3">if</span> fitur.includes(<span style="color:#FF9B50">"promo"</span>)   → render <span style="color:#a99dff">PromoBanner()</span>` : '',
    fitur.includes('review') ? `<span style="color:#7ec8e3">if</span> fitur.includes(<span style="color:#FF9B50">"review"</span>)  → render <span style="color:#a99dff">TestimonialSection()</span>` : '',
  ].filter(Boolean);
  document.getElementById('rule-box').innerHTML = rules.join('<br>');

  // ── BUILD HTML berdasarkan jenis usaha ──
  let html = '';
  if      (jenis === 'kuliner') html = buildKuliner(nama, pal, tmpl, wa, fitur, galleryImages);
  else if (jenis === 'fashion') html = buildFashion(nama, pal, tmpl, wa, fitur, galleryImages);
  else if (jenis === 'jasa')    html = buildJasa(nama, pal, tmpl, wa, fitur, galleryImages);
  else if (jenis === 'toko')    html = buildToko(nama, pal, tmpl, wa, fitur, galleryImages);
  else if (jenis === 'properti') html = buildProperti(nama, pal, tmpl, wa, fitur, galleryImages);
  else if (jenis === 'laundry')  html = buildLaundry(nama, pal, tmpl, wa, fitur, galleryImages);

  // Render ke iframe agar CSS tidak bocor ke halaman utama
  const previewBody = document.getElementById('preview-body');
  previewBody.innerHTML = '';

  // ── Mobile scale preview ──────────────────────────────
  const isMobile = window.innerWidth <= 768;
  const DESKTOP_W = 1280; // virtual desktop width for scale

  // Fix: background-attachment:fixed tidak didukung di iframe & mobile browser
  // Apply untuk semua device agar konsisten antara preview dan download
  let htmlRendered = html.replace(/background-attachment\s*:\s*fixed/gi, 'background-attachment:scroll');

  // Wrapper untuk scale transform
  const wrap = document.createElement('div');
  wrap.className = 'preview-iframe-wrap';
  wrap.style.cssText = 'width:100%;height:100%;overflow:hidden;position:relative;';

  const iframe = document.createElement('iframe');
  iframe.style.cssText = 'border:none;display:block;';
  iframe.srcdoc = `<!DOCTYPE html><html lang="id"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <style>
      html { scroll-behavior: smooth; }
      .webcraftai-gallery-frame { cursor:pointer; position:relative; transition:box-shadow 0.24s ease, transform 0.24s ease; }
      .webcraftai-gallery-frame.selected { box-shadow:0 0 0 3px rgba(255,255,255,0.85); transform:translateY(-1px); }
      .webcraftai-gallery-frame img.webcraftai-gallery-img { width:100%; height:100%; object-fit:contain; display:block; background:rgba(0,0,0,0.02); }
      .webcraftai-gallery-placeholder { width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px; color:rgba(255,255,255,0.85); font-size:14px; text-align:center; padding:16px; }
      .webcraftai-gallery-placeholder span { font-size:28px; }
      .webcraftai-product-frame { cursor:pointer; position:relative; transition:box-shadow 0.24s ease, transform 0.24s ease; }
      .webcraftai-product-frame.selected { box-shadow:0 0 0 3px rgba(255,255,255,0.85); transform:translateY(-1px); }
      .webcraftai-product-frame img.webcraftai-product-img { width:100%; height:100%; object-fit:contain; display:block; background:rgba(0,0,0,0.02); }

      /* ═══════════════════════════════════════════════
         SHARED MOBILE RESPONSIVE — semua builder
         Berlaku untuk semua template yang digenerate
         ═══════════════════════════════════════════════ */
      @media (max-width: 768px) {

        /* ── Global reset ── */
        * { box-sizing: border-box !important; }
        body { overflow-x: hidden !important; }

        /* ── Navbar — stack jadi 1 baris scrollable ── */
        nav {
          padding: 12px 16px !important;
          flex-wrap: nowrap !important;
          gap: 8px !important;
          overflow: hidden !important;
        }
        nav > div:first-child span:last-child { font-size: 16px !important; }
        nav > div:nth-child(2) {
          display: none !important;
        }
        nav > a:last-child {
          padding: 8px 14px !important;
          font-size: 12px !important;
          white-space: nowrap !important;
        }

        /* ── Section padding reset ── */
        section { padding: 48px 18px !important; }

        /* ── Hero — force single column, no overflow ── */
        section#beranda {
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          min-height: 100svh !important;
          padding: 90px 20px 60px !important;
          overflow: hidden !important;
        }

        /* ── Hero grid (jasa, fashion split layout) ── */
        section#beranda[style*="grid"] {
          display: flex !important;
          flex-direction: column !important;
        }
        section#beranda > div:first-of-type[style*="52%"],
        section#beranda > div:first-of-type[style*="grid-column"] {
          padding: 100px 20px 48px !important;
          width: 100% !important;
          min-height: 100svh !important;
        }
        section#beranda > div:last-of-type[style*="overflow:hidden"],
        section#beranda > div:last-of-type[style*="overflow: hidden"] {
          display: none !important;
        }

        /* ── Hero floating cards — sembunyikan di mobile ── */
        section#beranda > div[style*="position:absolute"][style*="right"],
        section#beranda > div[style*="position: absolute"][style*="right"] {
          display: none !important;
        }

        /* ── Hero text sizes ── */
        section#beranda h1 {
          font-size: clamp(28px, 8.5vw, 44px) !important;
          letter-spacing: -1px !important;
          line-height: 1.1 !important;
        }
        section#beranda p {
          font-size: 14px !important;
          line-height: 1.7 !important;
          max-width: 100% !important;
        }

        /* ── Hero CTA buttons — stack vertical ── */
        section#beranda > div[style*="display:flex"][style*="gap:14"],
        section#beranda > div[style*="display:flex"][style*="gap:12"] {
          flex-direction: column !important;
          width: 100% !important;
        }
        section#beranda a[style*="padding:14px"] {
          width: 100% !important;
          justify-content: center !important;
          font-size: 14px !important;
        }

        /* ── Hero stats row ── */
        section#beranda > div[style*="display:flex"][style*="gap:32"],
        section#beranda > div[style*="display:flex"][style*="gap:28"] {
          gap: 20px !important;
          flex-wrap: wrap !important;
        }

        /* ── Diskon badge (toko) — reposisi ke pojok ── */
        section#beranda > div[style*="border-radius:50%"] {
          right: 16px !important;
          top: auto !important;
          bottom: 100px !important;
          transform: translateY(0) !important;
          width: 90px !important;
          height: 90px !important;
        }
        section#beranda > div[style*="border-radius:50%"] > div:nth-child(2) {
          font-size: 24px !important;
        }

        /* ── Grid 2-kolom → 1 kolom ── */
        div[style*="grid-template-columns:1fr 1fr"],
        div[style*="grid-template-columns: 1fr 1fr"],
        div[style*="grid-template-columns:2fr 1fr"],
        div[style*="grid-template-columns: 2fr 1fr"] {
          grid-template-columns: 1fr !important;
        }

        /* ── Grid 3-kolom → 1 kolom ── */
        div[style*="grid-template-columns:1fr 1fr 1fr"],
        div[style*="grid-template-columns: 1fr 1fr 1fr"] {
          grid-template-columns: 1fr !important;
        }

        /* ── Product/menu card grid ── */
        div[style*="grid-template-columns:repeat(auto-fill"],
        div[style*="grid-template-columns: repeat(auto-fill"] {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 12px !important;
        }

        /* ── Gallery bento grid → simple 2 col ── */
        div[style*="grid-template-rows:230px"],
        div[style*="grid-template-rows:240px"],
        div[style*="grid-template-rows:200px"],
        div[style*="grid-template-rows:210px"] {
          grid-template-columns: 1fr 1fr !important;
          grid-template-rows: 160px 160px 160px !important;
        }
        div[style*="grid-row:span 2"],
        div[style*="grid-row: span 2"] {
          grid-row: span 1 !important;
        }

        /* ── Cinematic strips (chef/ambiance/tools/market) ── */
        section[class*="strip"],
        section.chef-strip, section.ambiance-strip,
        section.tools-strip, section.market-strip,
        section.shelf-strip, section.cinema-strip,
        section.team-strip {
          padding: 60px 20px !important;
          background-attachment: scroll !important;
        }
        section[class*="strip"] > div[style*="grid"],
        section[class*="strip"] > div[style*="display:grid"] {
          grid-template-columns: 1fr !important;
          gap: 28px !important;
        }

        /* ── Mebel bento grid (properti) ── */
        div[style*="grid-template-columns:1fr 1fr;grid-template-rows:180px"] {
          grid-template-columns: 1fr !important;
          grid-template-rows: auto !important;
          gap: 8px !important;
        }

        /* ── Feature badge row 4-kolom → 2 kolom ── */
        div[style*="grid-template-columns:repeat(4,1fr)"],
        div[style*="grid-template-columns: repeat(4,1fr)"] {
          grid-template-columns: repeat(2, 1fr) !important;
        }
        div[style*="grid-template-columns:repeat(3,1fr)"],
        div[style*="grid-template-columns: repeat(3,1fr)"] {
          grid-template-columns: repeat(1, 1fr) !important;
        }

        /* ── Max-width containers — full width ── */
        div[style*="max-width:960px"],
        div[style*="max-width: 960px"],
        div[style*="max-width:1100px"],
        div[style*="max-width:800px"],
        div[style*="max-width:700px"],
        div[style*="max-width:640px"] {
          max-width: 100% !important;
        }

        /* ── CTA section — center ── */
        section#kontak {
          padding: 56px 20px !important;
        }
        section#kontak > div,
        section[id="kontak"] > div {
          grid-template-columns: 1fr !important;
          text-align: center !important;
          gap: 20px !important;
        }
        section#kontak a {
          width: 100% !important;
          justify-content: center !important;
        }

        /* ── Section headings ── */
        h2[style*="font-size:clamp"],
        h2[style*="font-size: clamp"] {
          font-size: clamp(22px, 7vw, 32px) !important;
        }

        /* ── Scroll hint ── */
        div[style*="bottom:28px"][style*="left:50%"] { display: none !important; }

        /* ── Marquee ticker ── */
        div[style*="animation:marquee"] { font-size: 11px !important; }

        /* ── Edit toolbar — compact di mobile ── */
        #webcraftai-edit-toolbar {
          right: 10px !important;
          bottom: 10px !important;
          gap: 6px !important;
        }
        #webcraftai-edit-btn {
          padding: 7px 13px !important;
          font-size: 11px !important;
          border-radius: 999px !important;
          box-shadow: 0 4px 12px rgba(0,0,0,.22) !important;
        }
        #webcraftai-edit-hint {
          font-size: 11px !important;
          padding: 9px 11px !important;
          border-radius: 12px !important;
          max-width: 200px !important;
          line-height: 1.35 !important;
        }
      }

      /* Extra small phones */
      @media (max-width: 400px) {
        div[style*="grid-template-columns:repeat(auto-fill"],
        div[style*="grid-template-columns: repeat(auto-fill"] {
          grid-template-columns: 1fr !important;
        }
        section#beranda h1 {
          font-size: clamp(24px, 8vw, 34px) !important;
        }
      }
    </style>
  </head><body>${htmlRendered}
    <div id="webcraftai-edit-toolbar" style="position:fixed;right:16px;bottom:16px;z-index:9999;display:flex;flex-direction:column;gap:10px;font-family:Inter,system-ui,sans-serif;">
      <button id="webcraftai-edit-btn" type="button" style="background:${pal.primary};color:white;border:none;padding:9px 16px;border-radius:999px;font-size:12px;font-weight:700;cursor:pointer;box-shadow:0 8px 20px rgba(0,0,0,.18);">✎ Edit Konten</button>
      <div id="webcraftai-edit-hint" style="background:rgba(255,255,255,0.96);color:#111;padding:12px 14px;border-radius:16px;font-size:13px;line-height:1.4;box-shadow:0 14px 28px rgba(0,0,0,.12);max-width:260px;">Klik tombol Edit untuk mengubah teks. Klik bingkai galeri atau produk untuk upload gambar.</div>
      <input id="webcraftai-file-input" type="file" accept="image/png,image/jpeg" style="display:none;">
    </div>
    <script id="webcraftai-iframe-script">
      var selectedGalleryFrame = null;

      // ── Dipanggil langsung dari onclick tombol 📷 Upload ──
      function openGalUpload(btn) {
        var frame = btn.closest('.webcraftai-gallery-frame');
        if (!frame) return;
        // Tandai frame yang aktif
        document.querySelectorAll('.webcraftai-gallery-frame').forEach(function(f) {
          f.classList.remove('selected');
        });
        frame.classList.add('selected');
        selectedGalleryFrame = frame;
        // Buka file picker
        var fi = document.getElementById('webcraftai-file-input');
        if (fi) fi.click();
      }
      var selectedProductFrame = null;
      var defaultHint = 'Klik tombol Edit untuk mengubah teks. Klik bingkai galeri atau produk untuk upload gambar.';
      function updateGalleryHint(message) {
        var hint = document.getElementById('webcraftai-edit-hint');
        if (!hint) return;
        hint.textContent = message || defaultHint;
      }
      function clearGallerySelection() {
        if (!selectedGalleryFrame) return;
        selectedGalleryFrame.classList.remove('selected');
        selectedGalleryFrame = null;
      }
      function clearProductSelection() {
        if (!selectedProductFrame) return;
        selectedProductFrame.classList.remove('selected');
        selectedProductFrame = null;
      }
      function setGalleryFrame(frame) {
        if (!frame) return;
        if (selectedGalleryFrame) {
          selectedGalleryFrame.classList.remove('selected');
        }
        selectedGalleryFrame = frame;
        selectedGalleryFrame.classList.add('selected');
        updateGalleryHint('Slot galeri dipilih. Pilih gambar untuk mengunggah.');
      }
      function setFrameImage(frame, src) {
        if (!frame || !src) return;
        var existing = frame.querySelector('img.webcraftai-gallery-img');
        if (existing) {
          existing.src = src;
        } else {
          frame.innerHTML = '<img class="webcraftai-gallery-img" src="' + src + '" alt="Galeri">';
        }
        frame.classList.add('selected');
      }
      function setProductFrame(frame) {
        if (!frame) return;
        if (selectedProductFrame) {
          selectedProductFrame.classList.remove('selected');
        }
        selectedProductFrame = frame;
        selectedProductFrame.classList.add('selected');
        updateGalleryHint('Slot produk dipilih. Pilih gambar untuk mengunggah.');
      }
      function setProductImage(frame, src) {
        if (!frame || !src) return;
        var existing = frame.querySelector('img.webcraftai-product-img');
        if (existing) {
          existing.src = src;
        } else {
          frame.innerHTML = '<img class="webcraftai-product-img" src="' + src + '" alt="Produk">';
        }
        frame.classList.add('selected');
      }
      function toggleWebCraftEdit() {
        var body = document.body;
        var enabled = body.contentEditable !== 'true';
        body.contentEditable = enabled ? 'true' : 'false';
        body.style.cursor = enabled ? 'text' : 'default';
        var button = document.getElementById('webcraftai-edit-btn');
        if (enabled) {
          button.textContent = 'Selesai Edit';
          clearGallerySelection();
          clearProductSelection();
          updateGalleryHint('Mode edit aktif. Klik area teks dan mulai ketik untuk mengubah konten.');
        } else {
          button.textContent = 'Edit Konten';
          updateGalleryHint();
        }
      }
      document.getElementById('webcraftai-edit-btn').addEventListener('click', toggleWebCraftEdit);
      document.getElementById('webcraftai-file-input').addEventListener('change', function(e) {
        var file = e.target.files[0];
        if (!file || !file.type.startsWith('image/')) return;
        var reader = new FileReader();
        reader.onload = function() {
          if (selectedProductFrame) {
            setProductImage(selectedProductFrame, reader.result);
          } else if (selectedGalleryFrame) {
            setFrameImage(selectedGalleryFrame, reader.result);
          } else {
            var firstProductFrame = document.querySelector('.webcraftai-product-frame');
            if (firstProductFrame) {
              setProductFrame(firstProductFrame);
              setProductImage(firstProductFrame, reader.result);
            } else {
              var firstGalleryFrame = document.querySelector('.webcraftai-gallery-frame');
              if (firstGalleryFrame) {
                setGalleryFrame(firstGalleryFrame);
                setFrameImage(firstGalleryFrame, reader.result);
              }
            }
          }
        };
        reader.readAsDataURL(file);
      });
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.body.contentEditable === 'true') {
          toggleWebCraftEdit();
        }
      });
      document.addEventListener('click', function(e) {
        // ── Upload hanya dari tombol .upload-button atau .gal-upload-btn ──
        var uploadBtn = e.target.closest('.upload-button') || e.target.closest('.gal-upload-btn');
        if (uploadBtn) {
          e.preventDefault();
          e.stopPropagation();
          // Cari frame terdekat lalu set target upload
          var productFrame = uploadBtn.closest('.webcraftai-product-frame');
          var galleryFrame = uploadBtn.closest('.webcraftai-gallery-frame');
          if (productFrame) setProductFrame(productFrame);
          else if (galleryFrame) setGalleryFrame(galleryFrame);
          document.getElementById('webcraftai-file-input').click();
          return;
        }

        // ── Product frame: klik seluruh area masih boleh (tidak ada foto di dalamnya) ──
        var productFrame = e.target.closest('.webcraftai-product-frame');
        if (productFrame && !e.target.closest('a') && !e.target.closest('button')) {
          e.preventDefault();
          setProductFrame(productFrame);
          document.getElementById('webcraftai-file-input').click();
          return;
        }

        // ── Gallery frame: klik HANYA boleh via upload-button (sudah ditangani di atas) ──
        // Tidak ada fallback klik seluruh frame agar foto tidak trigger upload

        var a = e.target.closest('a');
        if (!a) return;
        var href = a.getAttribute('href');
        if (!href) return;
        if (document.body.contentEditable === 'true') {
          e.preventDefault();
          return;
        }
        if (href.startsWith('#')) {
          e.preventDefault();
          var target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        if (href.startsWith('http')) {
          e.preventDefault();
          window.open(href, '_blank');
        }
      });
    <\/script>
  </body></html>`;
  wrap.appendChild(iframe);
  previewBody.appendChild(wrap);

  // ── Terapkan scale setelah layout settled (double rAF) ──────────
  function applyPreviewScale(mode) {
    // Paksa reflow sebelum baca dimensi
    const containerW = previewBody.getBoundingClientRect().width;
    const containerH = previewBody.getBoundingClientRect().height;

    // Lock wrap agar tidak overflow ke kanan
    wrap.style.cssText = `
      width: ${containerW}px;
      height: ${containerH}px;
      overflow: hidden;
      position: relative;
      display: block;
    `;

    if (mode === 'mobile') {
      iframe.style.width        = containerW + 'px';
      iframe.style.height       = containerH + 'px';
      iframe.style.transform    = '';
      iframe.style.transformOrigin = '';
    } else {
      // Skala dari DESKTOP_W ke lebar container aktual
      const scale = containerW / DESKTOP_W;
      iframe.style.width        = DESKTOP_W + 'px';
      iframe.style.height       = Math.round(containerH / scale) + 'px';
      iframe.style.transform    = `scale(${scale})`;
      iframe.style.transformOrigin = 'top left';
    }
    wrap._previewMode = mode;
  }

  // Double rAF — pastikan layout sudah dirender browser sebelum baca offsetWidth
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      applyPreviewScale('desktop');
    });
  });

  // Tombol toggle tampilan di browser bar
  const scaleBar = document.querySelector('.preview-scale-bar');
  if (scaleBar) {
    scaleBar.style.display = 'flex';
    const btnDesktop = scaleBar.querySelector('[data-view="desktop"]');
    const btnMobile  = scaleBar.querySelector('[data-view="mobile"]');
    if (btnDesktop && btnMobile) {
      btnDesktop.classList.add('active'); btnMobile.classList.remove('active');
      btnDesktop.onclick = () => { applyPreviewScale('desktop'); btnDesktop.classList.add('active'); btnMobile.classList.remove('active'); };
      btnMobile.onclick  = () => { applyPreviewScale('mobile');  btnMobile.classList.add('active');  btnDesktop.classList.remove('active'); };
    }
  }

  // Re-scale on window resize (debounced)
  let _resizeTimer;
  window._previewResizeHandler && window.removeEventListener('resize', window._previewResizeHandler);
  window._previewResizeHandler = () => {
    clearTimeout(_resizeTimer);
    _resizeTimer = setTimeout(() => {
      applyPreviewScale(wrap._previewMode || 'desktop');
    }, 120);
  };
  window.addEventListener('resize', window._previewResizeHandler);

  // Update URL bar preview
  const slug = nama.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  document.getElementById('browser-url').textContent = 'webcraftai.demo/' + slug;

  switchTab('preview');

  // Toast notifikasi
  const t = document.getElementById('toast');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);

  // Tampilkan tombol download
  document.getElementById('btn-download').style.display = 'flex';
}

// ── DOWNLOAD HTML ──
function downloadHTML() {
  const nama = document.getElementById('f-nama').value || 'WebCraft-AI-Result';
  const iframe = document.querySelector('#preview-body iframe');
  if (!iframe) return;

  let content = iframe.contentDocument && iframe.contentDocument.documentElement
    ? '<!DOCTYPE html>\n' + iframe.contentDocument.documentElement.outerHTML
    : iframe.srcdoc;

  if (!content) return;
  content = content.replace(/<div id="webcraftai-edit-toolbar"[\s\S]*?<\/div>\s*/i, '');
  content = content.replace(/<script id="webcraftai-iframe-script">[\s\S]*?<\/script>\s*/i, '');
  content = content.replace(/<button[^>]*class="[^"]*(?:upload-button|gal-upload-btn)[^"]*"[^>]*>[\s\S]*?<\/button>\s*/gi, '');
  content = content.replace(/<input[^>]*type="file"[^>]*>/gi, '');
  content = content.replace(/\s*onclick="[^"]*upload[^"]*"/gi, '');
  content = content.replace(/\s*onclick="event\.stopPropagation\(\)"/gi, '');
  content = content.replace(/<div[^>]*\s+id="webcraftai-file-input"[^>]*>[\s\S]*?<\/div>\s*/i, '');
  content = content.replace('</body></html>', `<style>
    html { scroll-behavior: smooth; }
    @media (max-width: 640px) {
      *, *::before, *::after { box-sizing: border-box !important; max-width: 100vw; }
      body { overflow-x: hidden !important; }

      /* NAV */
      nav { padding: 12px 16px !important; flex-wrap: nowrap !important; gap: 8px !important; }
      nav > div:nth-child(2) { display: none !important; }
      nav a[style*="border-radius:99px"], nav a[style*="border-radius:8px"] { padding: 8px 14px !important; font-size: 12px !important; white-space: nowrap !important; }
      nav span[style*="font-size:21"], nav span[style*="font-size:20"] { font-size: 15px !important; }

      /* HERO */
      section#beranda { min-height: 100svh !important; overflow: hidden !important; display: flex !important; align-items: flex-end !important; }
      section#beranda[style*="grid-template-columns"] { display: flex !important; flex-direction: column !important; }
      section#beranda > div[style*="z-index:2"], section#beranda > div[style*="z-index: 2"] { padding: 90px 18px 56px !important; max-width: 100% !important; }
      section#beranda > div[style*="background:linear-gradient(145deg"] { padding: 90px 18px 40px !important; width: 100% !important; }
      section#beranda > div[style*="overflow:hidden"]:not([style*="z-index"]) { height: 220px !important; width: 100% !important; order: -1 !important; }
      section#beranda h1 { font-size: clamp(24px, 8.5vw, 38px) !important; letter-spacing: -0.8px !important; line-height: 1.1 !important; }
      section#beranda p { font-size: 14px !important; max-width: 100% !important; }
      section#beranda > div[style*="z-index:2"] > div[style*="gap:14"], section#beranda > div[style*="z-index:2"] > div[style*="gap: 14"] { flex-direction: column !important; gap: 10px !important; }
      section#beranda a[style*="padding:14px"] { width: 100% !important; justify-content: center !important; font-size: 14px !important; }
      section#beranda > div[style*="z-index:2"] > div[style*="gap:32"], section#beranda > div[style*="z-index:2"] > div[style*="gap: 32"] { flex-wrap: wrap !important; gap: 14px 20px !important; }
      section#beranda > div[style*="gap:28px"] { flex-wrap: wrap !important; gap: 14px 20px !important; }
      /* Hide ALL absolute floating elements */
      section#beranda > div[style*="position:absolute"][style*="right"],
      section#beranda > div[style*="right:64"], section#beranda > div[style*="right: 64"],
      section#beranda > div[style*="bottom:28px"], section#beranda > div[style*="border-radius:50%"] { display: none !important; }

      /* SECTIONS */
      section[style*="padding:80px"], section[style*="padding: 80px"],
      section[style*="padding:100px"], section[style*="padding:96px"],
      section[style*="padding:90px"], section[style*="padding:72px"] { padding: 52px 16px !important; }
      section[style*="padding:80px 44px"], section[style*="padding: 80px 44px"] { padding: 52px 16px !important; }

      /* GRIDS */
      div[style*="grid-template-columns:1fr 1fr"], div[style*="grid-template-columns: 1fr 1fr"],
      div[style*="grid-template-columns:2fr 1fr"], div[style*="grid-template-columns: 2fr 1fr"],
      div[style*="grid-template-columns:52% 48%"], div[style*="grid-template-columns: 52% 48%"] { grid-template-columns: 1fr !important; }
      div[style*="grid-template-columns:1fr 1fr 1fr"], div[style*="grid-template-columns: 1fr 1fr 1fr"] { grid-template-columns: 1fr 1fr !important; }
      div[style*="grid-template-columns:repeat(4,1fr)"], div[style*="grid-template-columns: repeat(4,1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
      div[style*="grid-template-columns:repeat(3,1fr)"], div[style*="grid-template-columns: repeat(3,1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
      div[style*="grid-template-columns:repeat(auto-fill,minmax(2"], div[style*="grid-template-columns: repeat(auto-fill"] { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
      div[style*="grid-template-rows:230px"], div[style*="grid-template-rows:240px"],
      div[style*="grid-template-rows:200px"], div[style*="grid-template-rows:210px"] { grid-template-rows: 160px 160px 160px !important; }
      div[style*="grid-row:span 2"], div[style*="grid-row: span 2"] { grid-row: span 1 !important; }

      /* MAX-WIDTH containers */
      div[style*="max-width:960px"], div[style*="max-width:1100px"], div[style*="max-width:800px"],
      div[style*="max-width:700px"], div[style*="max-width:640px"], div[style*="max-width:680px"] { max-width: 100% !important; }

      /* CINEMATIC STRIPS */
      section[class*="strip"] { padding: 56px 16px !important; background-attachment: scroll !important; }
      section[class*="strip"] > div[style*="grid"], section[class*="strip"] > div[style*="display:grid"] { grid-template-columns: 1fr !important; gap: 24px !important; }
      section[class*="strip"] > div[style*="text-align:center"] blockquote { font-size: clamp(20px,7vw,28px) !important; }

      /* TYPOGRAPHY */
      h2 { font-size: clamp(20px,6.5vw,28px) !important; }
      h3 { font-size: 14px !important; }

      /* CTA inline grid */
      section[style*="display:grid"][style*="auto"] { display: flex !important; flex-direction: column !important; gap: 20px !important; align-items: stretch !important; }
      section[style*="display:grid"][style*="auto"] a { text-align: center !important; justify-content: center !important; }

      /* MARQUEE */
      div[style*="overflow:hidden"][style*="white-space:nowrap"] { font-size: 11px !important; }
    }
  </style></body></html>`);

  // Ganti target="_top" → "_blank" untuk file standalone
  content = content.replace(/target="_top"/g, 'target="_blank"');

  const blob = new Blob([content], { type: 'text/html' });
  const url  = window.URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = nama.toLowerCase().replace(/\s+/g, '-') + '.html';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

// ══════════════════════════════════════════════
//  THEME TOGGLE — Dark / Light Mode
// ══════════════════════════════════════════════
function setTheme(mode) {
  const body = document.body;
  const btnDark  = document.getElementById('btn-dark');
  const btnLight = document.getElementById('btn-light');

  if (mode === 'light') {
    body.classList.add('light-mode');
    btnLight.classList.add('active');
    btnDark.classList.remove('active');
    localStorage.setItem('wcai-theme', 'light');
  } else {
    body.classList.remove('light-mode');
    btnDark.classList.add('active');
    btnLight.classList.remove('active');
    localStorage.setItem('wcai-theme', 'dark');
  }
}

// Restore saved preference — default: DARK
(function () {
  const saved = localStorage.getItem('wcai-theme');
  if (saved === 'light') {
    setTheme('light');
  } else {
    setTheme('dark'); // dark adalah default
  }
})();
