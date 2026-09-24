// ═══════════════════════════════════════════════════
//   GUÍA EDUCONTEXT — widget de chat conversacional
//   Habla con /api/chat (backend), nunca con el proveedor
//   de IA directamente — la key nunca llega al navegador.
// ═══════════════════════════════════════════════════

(function () {
  var BASE = window.EDUCONTEXT_BASE || '';
  var history = []; // { role: 'user'|'model', text }
  var panelOpen = false;

  function el(tag, className, html) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function buildWidget() {
    var wrap = el('div', 'guia-widget');

    var toggle = el('button', 'guia-toggle', '💬 <span>Hablar con la Guía EduContext</span>');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'guia-panel');

    var panel = el('div', 'guia-panel');
    panel.id = 'guia-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Guía EduContext');


    panel.innerHTML =
      '<div class="guia-panel-header">' +
        '<strong>Guía EduContext</strong>' +
        '<button class="guia-close" aria-label="Cerrar">&times;</button>' +
      '</div>' +
      '<div class="guia-messages" id="guia-messages">' +
        '<div class="guia-msg guia-msg--model">¡Hola! Contame qué necesitás lograr (por ejemplo: "quiero organizar mi emprendimiento" o "necesito preparar una clase") y armamos un camino juntos.</div>' +
      '</div>' +
      '<form class="guia-form" id="guia-form">' +
        '<input type="text" id="guia-input" placeholder="Escribí tu necesidad..." autocomplete="off" maxlength="500">' +
        '<button type="submit" aria-label="Enviar">&#8594;</button>' +
      '</form>';

    wrap.appendChild(toggle);
    wrap.appendChild(panel);
    document.body.appendChild(wrap);

    toggle.addEventListener('click', function () { togglePanel(toggle, panel); });
    panel.querySelector('.guia-close').addEventListener('click', function () { togglePanel(toggle, panel, false); });
    panel.querySelector('#guia-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var input = document.getElementById('guia-input');
      var text = input.value.trim();
      if (!text) return;
      input.value = '';
      sendMessage(text);
    });
  }

  function togglePanel(toggle, panel, force) {
    panelOpen = typeof force === 'boolean' ? force : !panelOpen;
    panel.classList.toggle('open', panelOpen);
    toggle.setAttribute('aria-expanded', String(panelOpen));
    if (panelOpen) {
      var input = document.getElementById('guia-input');
      if (input) input.focus();
    }
  }

  function addMessage(role, text) {
    var container = document.getElementById('guia-messages');
    var msg = el('div', 'guia-msg guia-msg--' + role, escapeHtml(text));
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
    return msg;
  }

  function sendMessage(text) {
    addMessage('user', text);
    history.push({ role: 'user', text: text });
    var loadingMsg = addMessage('model', 'Pensando...');
    loadingMsg.classList.add('guia-msg--loading');

    fetch(BASE + '/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history }),
    })
      .then(function (r) { return r.json().then(function (data) { return { ok: r.ok, data: data }; }); })
      .then(function (res) {
        loadingMsg.remove();
        if (!res.ok || res.data.error) {
          addMessage('model', res.data.error || 'No pude responder ahora. Probá de nuevo en un momento.');
          return;
        }
        addMessage('model', res.data.reply);
        history.push({ role: 'model', text: res.data.reply });
      })
      .catch(function () {
        loadingMsg.remove();
        addMessage('model', 'Hubo un problema de conexión. Probá de nuevo.');
      });
  }

  document.addEventListener('DOMContentLoaded', buildWidget);
})();
