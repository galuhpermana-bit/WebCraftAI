// ══════════════════════════════════════════════
//  WebCraft AI — generator/ui.js
//  Interaksi UI: chip toggle, slug, tab switch
// ══════════════════════════════════════════════

// State fitur yang dipilih (global, bisa diakses app.js)
var selectedFeatures = ['menu', 'wa'];

// ── CHIP TOGGLE — init otomatis saat DOM siap ──
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.chip').forEach(function (c) {
    c.addEventListener('click', function () {
      c.classList.toggle('on');
      selectedFeatures = Array.from(document.querySelectorAll('.chip.on')).map(function (x) {
        return x.dataset.v;
      });
    });
  });
});

// ── LIVE SLUG (URL preview bar) ──
function liveSlug() {
  var nama = document.getElementById('f-nama').value;
  var slug = nama.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  document.getElementById('browser-url').textContent = 'webcraftai.demo/' + (slug || 'bisnis-anda');
}

// ── SWITCH TAB (Preview / AI Log / Arsitektur) ──
function switchTab(name) {
  ['preview', 'log', 'arch'].forEach(function (t) {
    document.querySelector('.tab-btn:nth-child(' + (['preview', 'log', 'arch'].indexOf(t) + 1) + ')').classList.toggle('active', t === name);
    var el = document.getElementById('tab-' + t);
    if (el) {
      el.classList.remove('active');
      if (t === name) el.classList.add('active');
    }
  });
}
