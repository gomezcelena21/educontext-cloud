// ═══════════════════════════════════════════════════
//   NAVEGACIÓN
//   (usa las clases .active / .open que ya define el CSS;
//   ya no pisa el display por inline style como antes)
// ═══════════════════════════════════════════════════

function showLanding() {
  document.getElementById('landing').classList.add('active');
  document.getElementById('profiles').classList.remove('active');
  document.getElementById('dashboard').classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showProfiles() {
  activeCategoryFilter = null;
  document.getElementById('landing').classList.remove('active');
  document.getElementById('profiles').classList.add('active');
  document.getElementById('dashboard').classList.remove('active');
  var si = document.getElementById('search-input');
  if (si) si.value = '';
  setTimeout(function() {
    var btns = document.querySelectorAll('.cat-filter');
    btns.forEach(function(b) { b.classList.remove('active'); });
    if (btns[0]) btns[0].classList.add('active');
    renderProfilesGrid(profiles);
  }, 50);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showDashboard() {
  document.getElementById('landing').classList.remove('active');
  document.getElementById('profiles').classList.remove('active');
  document.getElementById('dashboard').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setNav(el, panel) {
  document.querySelectorAll('.nav-item').forEach(function(i) { i.classList.remove('active'); });
  el.classList.add('active');
  document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
  document.getElementById('panel-' + panel).classList.add('active');
  var main = document.querySelector('.dash-main');
  if (main) main.scrollTop = 0;
}

// ═══════════════════════════════════════════════════
//   MENÚ DESPLEGABLE
// ═══════════════════════════════════════════════════

function openMenu() {
  var dropdown = document.getElementById('nav-dropdown');
  var btn = document.querySelector('.hamburger-btn');
  if (!dropdown) return;
  dropdown.classList.add('open');
  if (btn) btn.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  var dropdown = document.getElementById('nav-dropdown');
  var btn = document.querySelector('.hamburger-btn');
  if (dropdown) dropdown.classList.remove('open');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
  var dropdown = document.getElementById('nav-dropdown');
  if (dropdown && dropdown.classList.contains('open')) { closeMenu(); } else { openMenu(); }
}

// Cerrar menú al hacer clic fuera
document.addEventListener('click', function(e) {
  var dropdown = document.getElementById('nav-dropdown');
  var btn = document.querySelector('.hamburger-btn');
  if (dropdown && dropdown.classList.contains('open')) {
    if (!dropdown.contains(e.target) && btn && !btn.contains(e.target)) {
      closeMenu();
    }
  }
});

// Cerrar menú con Escape (accesibilidad de teclado, no existía antes)
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeMenu();
});

// ═══════════════════════════════════════════════════
//   BOTÓN VOLVER ARRIBA
// ═══════════════════════════════════════════════════

function initScrollTop() {
  var btn = document.getElementById('scroll-top-btn');
  if (!btn) return;
  window.addEventListener('scroll', function() {
    btn.classList.toggle('visible', window.scrollY > 300);
  });
  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ═══════════════════════════════════════════════════
//   DELEGACIÓN DE EVENTOS
//   Único punto de entrada para todos los data-action
//   del HTML (reemplaza los 34 onclick inline detectados
//   en la auditoría de Fase 1).
// ═══════════════════════════════════════════════════

function handleAction(el, e) {
  var action = el.dataset.action;
  switch (action) {
    case 'toggle-menu':
      toggleMenu();
      break;
    case 'nav-close-and-show':
      e.preventDefault();
      closeMenu();
      showLanding();
      if (el.dataset.target === 'profiles') showProfiles();
      break;
    case 'nav-close-and-scroll':
      e.preventDefault();
      closeMenu();
      showLanding();
      setTimeout(function() {
        var target = document.getElementById(el.dataset.target);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 400);
      break;
    case 'nav-close':
      closeMenu();
      break;
    case 'show-profiles':
      showProfiles();
      break;
    case 'show-landing':
      showLanding();
      break;
    case 'scroll-to':
      var scrollTarget = document.getElementById(el.dataset.target);
      if (scrollTarget) scrollTarget.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'show-profiles-by-category':
      showProfilesByCategory(el.dataset.category);
      break;
    case 'filter-category':
      filterByCategory(el, el.dataset.category || null);
      break;
    case 'set-nav':
      setNav(el, el.dataset.panel);
      break;
    case 'copy-prompt':
      copyText(el, el.dataset.body);
      break;
    default:
      break;
  }
}

document.addEventListener('click', function(e) {
  var actionEl = e.target.closest('[data-action]');
  if (actionEl) { handleAction(actionEl, e); return; }

  var mini = e.target.closest('.profile-mini');
  if (mini && mini.dataset.profileId) { enterProfile(mini.dataset.profileId); return; }

  var card = e.target.closest('.profile-card');
  if (card && card.dataset.profileId) { enterProfile(card.dataset.profileId); return; }
});

// Activar con teclado (Enter/Espacio) los elementos con role="button"
// que antes solo respondían a onclick (profile-card, categoria-card, nav-item)
document.addEventListener('keydown', function(e) {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  var target = e.target.closest('[role="button"]');
  if (!target) return;
  e.preventDefault();
  target.click();
});

// ═══════════════════════════════════════════════════
//   INIT
// ═══════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
  renderProfilesPreview();
  initScrollTop();
  var searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function() { filterProfiles(this.value); });
  }
});
