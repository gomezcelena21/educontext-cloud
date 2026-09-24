// ═══════════════════════════════════════════════════
//   SANITIZACIÓN — escape centralizado de HTML
//   (antes vivía duplicado dentro de renderPrompt en app.js)
// ═══════════════════════════════════════════════════

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
