/**
 * app.js — UI 邏輯，負責渲染、事件篩選、數據導入與導出
 * 依賴: data.js (需在此檔之前載入)
 */

// ── DOM References ──
const searchInput = document.getElementById('search-input');
const filterCard = document.getElementById('filter-card');
const filterChannel = document.getElementById('filter-channel');
const rulesContainer = document.getElementById('rules-container');
const exportBtn = document.getElementById('export-btn');
const importBtn = document.getElementById('import-btn');
const importFileInput = document.getElementById('import-file');
const statTotal = document.getElementById('stat-total');
const statCards = document.getElementById('stat-cards');
const toastContainer = document.getElementById('toast-container');

// ── Initialize ──
function init() {
  // 首次造訪自動載入預設卡片回饋資料
  if (loadRules().length === 0) {
    seedImport();
  }
  renderRules();
  updateFilters();
  updateStats();
  bindEvents();
}

// ── Event Bindings ──
function bindEvents() {
  searchInput.addEventListener('input', debounce(renderRules, 200));
  filterCard.addEventListener('change', renderRules);
  filterChannel.addEventListener('change', renderRules);

  exportBtn.addEventListener('click', handleExport);
  importBtn.addEventListener('click', () => importFileInput.click());
  importFileInput.addEventListener('change', handleImport);
}

// ── Render ──
function renderRules() {
  const keyword = searchInput.value.trim();
  const cardFilter = filterCard.value;
  const channelFilter = filterChannel.value;

  let rules = keyword ? searchRules(keyword) : loadRules();

  // Apply dropdown filters
  if (cardFilter) {
    rules = rules.filter(r => r.cardName === cardFilter);
  }
  if (channelFilter) {
    rules = rules.filter(r => r.channel === channelFilter);
  }

  // Sort by reward % descending (highest first)
  rules.sort((a, b) => {
    const pctA = parseFloat(a.rewardPercent) || 0;
    const pctB = parseFloat(b.rewardPercent) || 0;
    return pctB - pctA;
  });

  if (rules.length === 0) {
    rulesContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">💳</div>
        <h3>${keyword || cardFilter || channelFilter ? '找不到符合條件的規則' : '尚未新增任何回饋規則'}</h3>
        <p>請試試其他關鍵字或篩選條件</p>
      </div>
    `;
    return;
  }

  rulesContainer.innerHTML = rules.map(r => renderRuleCard(r)).join('');
}

function getCardClass(cardName) {
  const name = cardName.toLowerCase();
  if (name.includes('cube')) return 'card-cube';
  if (name.includes('uni')) return 'card-unicard';
  if (name.includes('j卡') || name.includes('j card')) return 'card-jcard';
  if (name.includes('熊') || name.includes('kumamon')) return 'card-kumamon';
  return '';
}

function renderRuleCard(rule) {
  const storesHtml = rule.stores.length
    ? `<div class="tag-list">${rule.stores.map(s => `<span class="tag">${esc(s)}</span>`).join('')}</div>`
    : '<span style="color:var(--text-muted)">—</span>';

  const switchHtml = rule.needSwitch
    ? `<span class="switch-badge yes">⚡ 需切換：${esc(rule.switchTo || '—')}</span>`
    : `<span class="switch-badge no">✓ 免切換</span>`;

  const notesHtml = rule.notes
    ? `<div class="rule-field"><span class="rule-field-label">📝 備注</span><span class="rule-field-value notes-text">${esc(rule.notes)}</span></div>`
    : '';

  const cardClass = getCardClass(rule.cardName);

  return `
    <div class="rule-card ${cardClass}" data-id="${rule.id}">
      <div class="rule-card-header">
        <div class="rule-card-title">
          <span class="card-icon">💳</span>
          ${esc(rule.cardName)}
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <span class="reward-badge">🔥 ${esc(rule.rewardPercent)}</span>
        </div>
      </div>
      <div class="rule-card-body">
        <div class="rule-field">
          <span class="rule-field-label">📱 通路</span>
          <span class="rule-field-value"><span class="channel-badge">${esc(rule.channel)}</span></span>
        </div>
        <div class="rule-field">
          <span class="rule-field-label">🏪 店家</span>
          <span class="rule-field-value">${storesHtml}</span>
        </div>
        <div class="rule-field">
          <span class="rule-field-label">🔄 權益</span>
          <span class="rule-field-value">${switchHtml}</span>
        </div>
        ${notesHtml}
      </div>
    </div>
  `;
}

// ── Filters ──
function updateFilters() {
  const currentCard = filterCard.value;
  const currentChannel = filterChannel.value;

  const cardNames = getUniqueCardNames();
  const channels = getUniqueChannels();

  filterCard.innerHTML = '<option value="">所有卡片</option>' +
    cardNames.map(n => `<option value="${esc(n)}" ${n === currentCard ? 'selected' : ''}>${esc(n)}</option>`).join('');

  filterChannel.innerHTML = '<option value="">所有通路</option>' +
    channels.map(c => `<option value="${esc(c)}" ${c === currentChannel ? 'selected' : ''}>${esc(c)}</option>`).join('');
}

// ── Stats ──
function updateStats() {
  const rules = loadRules();
  statTotal.textContent = rules.length;
  statCards.textContent = new Set(rules.map(r => r.cardName)).size;
}

// ── Import / Export ──
function handleExport() {
  const data = exportData();
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `credit-card-rules-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('已匯出 JSON 檔案', 'success');
}

function handleImport(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      importData(ev.target.result);
      renderRules();
      updateFilters();
      updateStats();
      showToast(`已匯入 ${loadRules().length} 筆規則`, 'success');
    } catch (err) {
      showToast('匯入失敗：' + err.message, 'error');
    }
  };
  reader.readAsText(file);
  importFileInput.value = ''; // reset
}

// ── Toast ──
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toast-out 300ms ease-in forwards';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ── Utilities ──
function esc(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

// ── Boot ──
document.addEventListener('DOMContentLoaded', init);
