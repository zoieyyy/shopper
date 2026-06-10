(function () {
  var KEY = 'sn-theme';

  function get() { return localStorage.getItem(KEY) || 'red'; }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
  }

  // Apply before first paint (called from inline head script too, but belt-and-suspenders)
  apply(get());

  document.addEventListener('DOMContentLoaded', function () {
    // Inject switcher styles
    var s = document.createElement('style');
    s.textContent = [
      '#sn-theme-bar{',
        'position:fixed;bottom:52px;right:14px;z-index:9999;',
        'display:flex;align-items:center;gap:6px;',
        'background:#fff;border:1px solid #dde1ea;border-radius:6px;',
        'padding:6px 10px;',
        'box-shadow:0 2px 14px rgba(0,0,0,0.13);',
        'font-family:"DM Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;',
        'font-size:11px;user-select:none;',
      '}',
      '#sn-theme-bar .ts-lbl{',
        'font-size:10px;font-weight:700;letter-spacing:0.07em;',
        'text-transform:uppercase;color:#999;margin-right:2px;',
      '}',
      '#sn-theme-bar .ts-btn{',
        'padding:4px 11px;border-radius:4px;border:1.5px solid #dde1ea;',
        'font-size:11px;font-weight:600;font-family:inherit;cursor:pointer;',
        'background:#f4f6f9;color:#555;transition:all 0.15s;line-height:1;',
      '}',
      '#sn-theme-bar .ts-btn:hover{background:#e8e8e8;border-color:#bbb;}',
      '#sn-theme-bar .ts-btn.ts-active-red{background:#A91E3F;color:#fff;border-color:#A91E3F;}',
      '#sn-theme-bar .ts-btn.ts-active-purple{background:#7535DE;color:#fff;border-color:#7535DE;}',
    ].join('');
    document.head.appendChild(s);

    // Build widget
    var bar = document.createElement('div');
    bar.id = 'sn-theme-bar';
    bar.innerHTML =
      '<span class="ts-lbl">Theme</span>' +
      '<button class="ts-btn" data-t="red">Red</button>' +
      '<button class="ts-btn" data-t="purple">Purple</button>';
    document.body.appendChild(bar);

    function refresh() {
      var cur = get();
      bar.querySelectorAll('.ts-btn').forEach(function (b) {
        var t = b.getAttribute('data-t');
        b.classList.toggle('ts-active-red',    t === 'red'    && cur === 'red');
        b.classList.toggle('ts-active-purple', t === 'purple' && cur === 'purple');
      });
    }
    refresh();

    bar.querySelectorAll('.ts-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        apply(b.getAttribute('data-t'));
        refresh();
      });
    });
  });
})();
