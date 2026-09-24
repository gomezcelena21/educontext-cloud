// ═══════════════════════════════════════════════════
//   RENDER — DASHBOARD DE PERFIL
// ═══════════════════════════════════════════════════

function renderTool(t) {
  var badgeMap = { free: 'badge-free', premium: 'badge-premium', ia: 'badge-ia' };
  var badgeClass = badgeMap[t.badge] || 'badge-free';
  var badgeLabel = t.badge === 'premium' ? 'Premium' : 'Gratis';
  var tagsHTML = t.tags.map(function(tg) {
    return '<span class="tool-tag">' + tg + '</span>';
  }).join('');
  return (
    '<div class="tool-card">' +
      '<div class="tool-header">' +
        '<div class="tool-icon-wrap">' + t.icon + '</div>' +
        '<span class="tool-badge ' + badgeClass + '">' + badgeLabel + '</span>' +
      '</div>' +
      '<h4>' + t.name + '</h4>' +
      '<p>' + t.desc + '</p>' +
      '<div class="tool-tags">' + tagsHTML + '</div>' +
    '</div>'
  );
}

function renderPrompt(pr) {
  var safeBody = escapeHtml(pr.body);
  return (
    '<div class="prompt-card">' +
      '<div class="prompt-meta">' +
        '<span class="prompt-category">' + pr.cat + '</span>' +
        '<span class="prompt-level">Nivel: ' + pr.level + '</span>' +
      '</div>' +
      '<h4>' + pr.title + '</h4>' +
      '<div class="prompt-body">' + safeBody + '</div>' +
      '<button class="copy-btn" data-action="copy-prompt" data-body="' + safeBody + '">&#128203; Copiar prompt</button>' +
    '</div>'
  );
}

function copyText(btn, encodedText) {
  var ta = document.createElement('textarea');
  ta.innerHTML = encodedText;
  var decoded = ta.value;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(decoded).then(function() { markCopied(btn); }).catch(function() { fallbackCopy(decoded, btn); });
  } else {
    fallbackCopy(decoded, btn);
  }
}

function fallbackCopy(text, btn) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch (e) {}
  document.body.removeChild(ta);
  markCopied(btn);
}

function markCopied(btn) {
  btn.textContent = '✅ Copiado!';
  btn.classList.add('copied');
  setTimeout(function() {
    btn.innerHTML = '&#128203; Copiar prompt';
    btn.classList.remove('copied');
  }, 2000);
}

function enterProfile(id) {
  var p = profiles.find(function(x) { return x.id === id; });
  if (!p) return;

  document.getElementById('sb-emoji').textContent = p.emoji;
  document.getElementById('sb-name').textContent = p.name;
  document.getElementById('sb-area').textContent = p.area;

  document.getElementById('welcome-block').innerHTML =
    '<div class="welcome-panel anim">' +
      '<div class="welcome-emoji">' + p.emoji + '</div>' +
      '<div>' +
        '<h2>Bienvenido a ' + p.name + '</h2>' +
        '<p>' + p.welcome + '</p>' +
      '</div>' +
    '</div>';

  document.getElementById('overview-tools').innerHTML = p.tools.slice(0, 3).map(renderTool).join('');
  document.getElementById('overview-prompt').innerHTML = renderPrompt(p.prompts[0]);
  document.getElementById('all-tools').innerHTML = p.tools.map(renderTool).join('');
  document.getElementById('all-prompts').innerHTML = p.prompts.map(renderPrompt).join('');

  document.getElementById('all-resources').innerHTML =
    p.resources.map(function(r) {
      return '<div class="resource-card"><div class="resource-icon">' + r.icon + '</div><div><div class="resource-type">' + r.type + '</div><h4>' + r.name + '</h4><p>' + r.desc + '</p></div></div>';
    }).join('');

  document.getElementById('all-apps').innerHTML =
    p.apps.map(function(a) {
      return '<div class="app-card"><div class="app-label">Caso de uso</div><h4>' + a.title + '</h4><p>' + a.desc + '</p><div class="example">' + a.example + '</div></div>';
    }).join('');

  document.getElementById('all-tips').innerHTML =
    p.tips.map(function(t, i) {
      return '<div class="tip"><div class="tip-num">' + (i + 1) + '</div><p>' + t.text + '</p></div>';
    }).join('');

  document.querySelectorAll('.nav-item').forEach(function(el) { el.classList.remove('active'); });
  document.querySelectorAll('.nav-item')[0].classList.add('active');
  document.querySelectorAll('.tab-panel').forEach(function(el) { el.classList.remove('active'); });
  document.getElementById('panel-overview').classList.add('active');

  showDashboard();
}
