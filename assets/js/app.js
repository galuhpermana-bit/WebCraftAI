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

  // Render ke iframe agar CSS tidak bocor ke halaman utama
  const previewBody = document.getElementById('preview-body');
  previewBody.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.style.cssText = 'width:100%;height:100%;border:none;display:block;';
  iframe.srcdoc = `<!DOCTYPE html><html lang="id"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
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
    </style>
  </head><body>${html}
    <div id="webcraftai-edit-toolbar" style="position:fixed;right:16px;bottom:16px;z-index:9999;display:flex;flex-direction:column;gap:10px;font-family:Inter,system-ui,sans-serif;">
      <button id="webcraftai-edit-btn" type="button" style="background:${pal.primary};color:white;border:none;padding:12px 18px;border-radius:999px;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 14px 28px rgba(0,0,0,.18);">Edit Konten</button>
      <div id="webcraftai-edit-hint" style="background:rgba(255,255,255,0.96);color:#111;padding:12px 14px;border-radius:16px;font-size:13px;line-height:1.4;box-shadow:0 14px 28px rgba(0,0,0,.12);max-width:260px;">Klik tombol Edit untuk mengubah teks. Klik bingkai galeri atau produk untuk upload gambar.</div>
      <input id="webcraftai-file-input" type="file" accept="image/png,image/jpeg" style="display:none;">
    </div>
    <script id="webcraftai-iframe-script">
      var selectedGalleryFrame = null;
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
        var productFrame = e.target.closest('.webcraftai-product-frame');
        if (productFrame) {
          e.preventDefault();
          setProductFrame(productFrame);
          document.getElementById('webcraftai-file-input').click();
          return;
        }
        var frame = e.target.closest('.webcraftai-gallery-frame');
        if (frame) {
          e.preventDefault();
          setGalleryFrame(frame);
          document.getElementById('webcraftai-file-input').click();
          return;
        }
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
  previewBody.appendChild(iframe);

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

  let content = iframe.srcdoc;
  content = content.replace('</body></html>', `<style>html { scroll-behavior: smooth; }</style></body></html>`);

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

// Restore saved preference on page load
(function () {
  const saved = localStorage.getItem('wcai-theme');
  if (saved === 'light') setTheme('light');
})();
