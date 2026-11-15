/**
 * data.js — 資料層，負責信用卡回饋規則的 CRUD 與 localStorage 持久化
 * 
 * 資料結構 (CardRule):
 * {
 *   id:            string,   // unique id
 *   cardName:      string,   // 卡片名稱
 *   rewardPercent: string,   // 回饋 % 數，例如 "3%" 或 "3.5%"
 *   channel:       string,   // 使用通路：LinePay / ApplePay / 實體卡 …
 *   stores:        string[], // 適用店家列表
 *   needSwitch:    boolean,  // 是否需切權益
 *   switchTo:      string,   // 切到哪種權益
 *   notes:         string    // 特殊備注
 * }
 */

const STORAGE_KEY = 'credit_card_rules';

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

/** 從 localStorage 讀取所有規則 */
function loadRules() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/** 將所有規則寫入 localStorage */
function saveRules(rules) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rules));
}

/** 新增一條規則，回傳新規則物件 */
function addRule(rule) {
  const rules = loadRules();
  const newRule = { id: generateId(), ...rule };
  rules.push(newRule);
  saveRules(rules);
  return newRule;
}

/** 刪除指定 id 的規則 */
function deleteRule(id) {
  const rules = loadRules().filter(r => r.id !== id);
  saveRules(rules);
  return rules;
}

/** 編輯指定 id 的規則 */
function updateRule(id, updates) {
  const rules = loadRules();
  const idx = rules.findIndex(r => r.id === id);
  if (idx !== -1) {
    rules[idx] = { ...rules[idx], ...updates };
  }
  saveRules(rules);
  return rules;
}

/**
 * 搜尋規則
 * @param {string} keyword — 關鍵字，會比對卡名、通路、店家、備注
 * @returns {CardRule[]}
 */
function searchRules(keyword) {
  const rules = loadRules();
  if (!keyword || !keyword.trim()) return rules;

  const kw = keyword.trim().toLowerCase();
  return rules.filter(r => {
    return (
      r.cardName.toLowerCase().includes(kw) ||
      r.channel.toLowerCase().includes(kw) ||
      r.stores.some(s => s.toLowerCase().includes(kw)) ||
      r.rewardPercent.toLowerCase().includes(kw) ||
      (r.switchTo && r.switchTo.toLowerCase().includes(kw)) ||
      (r.notes && r.notes.toLowerCase().includes(kw))
    );
  });
}

/**
 * 取得所有不重複的卡片名稱（用於篩選下拉）
 */
function getUniqueCardNames() {
  const rules = loadRules();
  return [...new Set(rules.map(r => r.cardName))];
}

/**
 * 取得所有不重複的通路（用於篩選下拉）
 */
function getUniqueChannels() {
  const rules = loadRules();
  return [...new Set(rules.map(r => r.channel))];
}

/**
 * 匯出所有資料為 JSON 字串
 */
function exportData() {
  return JSON.stringify(loadRules(), null, 2);
}

/**
 * 匯入 JSON 字串（會覆蓋現有資料）
 */
function importData(jsonStr) {
  const rules = JSON.parse(jsonStr);
  if (!Array.isArray(rules)) throw new Error('格式錯誤：必須是陣列');
  saveRules(rules);
  return rules;
}
