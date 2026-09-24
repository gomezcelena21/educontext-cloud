// ═══════════════════════════════════════════════════
//   RENDER — PERFILES Y CATEGORÍAS
// ═══════════════════════════════════════════════════

var activeCategoryFilter = null;

function renderProfilesPreview() {
  var container = document.getElementById('profiles-preview');
  if (!container) return;
  container.innerHTML = '';
  profiles.slice(0, 8).forEach(function(p) {
    var div = document.createElement('div');
    div.className = 'profile-mini';
    div.dataset.profileId = p.id;
    div.innerHTML =
      '<div class="profile-mini-icon">' + p.emoji + '</div>' +
      '<div class="profile-mini-name">' + p.name + '</div>' +
      '<div class="profile-mini-desc">' + p.desc.substring(0, 70) + '...</div>';
    container.appendChild(div);
  });
}

function renderProfilesGrid(list) {
  var container = document.getElementById('profiles-grid');
  if (!container) return;
  container.innerHTML = '';

  var searchInput = document.getElementById('search-input');
  var isSearching = searchInput && searchInput.value.trim().length > 0;

  if (isSearching || typeof categories === 'undefined') {
    list.forEach(function(p) {
      container.appendChild(buildProfileCard(p));
    });
    return;
  }

  // Vista por categorías
  categories.forEach(function(cat) {
    // Si hay filtro activo, solo mostrar esa categoría
    if (activeCategoryFilter && cat.id !== activeCategoryFilter) return;

    var catProfiles = list.filter(function(p) {
      return cat.ids.indexOf(p.id) !== -1;
    });
    if (catProfiles.length === 0) return;

    var section = document.createElement('div');
    section.className = 'category-section';

    var title = document.createElement('h2');
    title.className = 'category-title';
    title.textContent = cat.label + ' (' + catProfiles.length + ')';
    section.appendChild(title);

    var grid = document.createElement('div');
    grid.className = 'profiles-category-grid';
    catProfiles.forEach(function(p) {
      grid.appendChild(buildProfileCard(p));
    });
    section.appendChild(grid);
    container.appendChild(section);
  });
}

function buildProfileCard(p) {
  var tagsHTML = p.tags.map(function(t) {
    return '<span class="tag">' + t + '</span>';
  }).join('');
  var div = document.createElement('div');
  div.className = 'profile-card';
  div.dataset.profileId = p.id;
  div.setAttribute('role', 'button');
  div.setAttribute('tabindex', '0');
  div.innerHTML =
    '<div class="profile-card-top">' +
      '<div class="profile-emoji">' + p.emoji + '</div>' +
      '<div><h3>' + p.name + '</h3><p>' + p.desc + '</p></div>' +
    '</div>' +
    '<div class="profile-tags">' + tagsHTML + '</div>' +
    '<span class="profile-arrow">&#8594;</span>';
  return div;
}

function filterProfiles(query) {
  var q = query.toLowerCase().trim();
  activeCategoryFilter = null;
  // Resetear botones de filtro
  document.querySelectorAll('.cat-filter').forEach(function(b) {
    b.classList.remove('active');
  });
  var allBtn = document.querySelector('.cat-filter');
  if (allBtn) allBtn.classList.add('active');

  var filtered = q.length === 0 ? profiles : profiles.filter(function(p) {
    return (
      p.name.toLowerCase().indexOf(q) !== -1 ||
      p.desc.toLowerCase().indexOf(q) !== -1 ||
      p.tags.some(function(t) { return t.toLowerCase().indexOf(q) !== -1; }) ||
      (p.area && p.area.toLowerCase().indexOf(q) !== -1)
    );
  });
  renderProfilesGrid(filtered);
}

function filterByCategory(btn, catId) {
  activeCategoryFilter = catId || null;
  var si = document.getElementById('search-input');
  if (si) si.value = '';
  document.querySelectorAll('.cat-filter').forEach(function(b) {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');
  renderProfilesGrid(profiles);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Desde el landing: ir a perfiles filtrados por categoría
function showProfilesByCategory(catId) {
  activeCategoryFilter = catId;
  // Mostrar la vista de perfiles
  document.getElementById('landing').classList.remove('active');
  document.getElementById('profiles').classList.add('active');
  document.getElementById('dashboard').classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Limpiar búsqueda
  var si = document.getElementById('search-input');
  if (si) si.value = '';
  // Activar botón de filtro y renderizar
  setTimeout(function() {
    var btns = document.querySelectorAll('.cat-filter');
    btns.forEach(function(b) { b.classList.remove('active'); });
    btns.forEach(function(b) {
      if (b.dataset.category === catId) b.classList.add('active');
    });
    renderProfilesGrid(profiles);
  }, 50);
}
