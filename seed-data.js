/**
 * seed-data.js — 預載資料，從 bonus.txt 整理而來
 * 
 * 執行方式：在瀏覽器 console 或直接在 index.html 引入
 * 會將資料寫入 localStorage，然後重新載入即可看到
 */

const SEED_DATA = [
  // ═══════════════════════════════════════════════
  // 台塑家 (2%) — 需切權益至「台塑家」
  // ═══════════════════════════════════════════════
  {
    cardName: "國泰CUBE",
    rewardPercent: "2%",
    channel: "實體卡/Apple Pay/Google Pay感應",
    stores: ["台塑石油加油站", "台亞加油站", "福懋加油站", "統一速邁樂加油站"],
    needSwitch: true,
    switchTo: "台塑家",
    notes: "⚠️ LINE Pay ❌ 不適用。限實體卡或Apple Pay/Samsung Pay/Google Pay/Garmin Pay感應付款。期間：2026/6/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "2%",
    channel: "實體刷卡",
    stores: ["台塑生醫實體門市", "長庚生技實體門市", "台塑蔬菜實體門市", "台塑購物網"],
    needSwitch: true,
    switchTo: "台塑家",
    notes: "以刷卡簽單特店名稱認定。期間：2026/6/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "2%",
    channel: "實體刷卡",
    stores: ["7-ELEVEN 實體門市", "全家便利商店 實體門市", "萊爾富實體門市"],
    needSwitch: true,
    switchTo: "台塑家",
    notes: "指定超商。期間：2026/6/1~12/31"
  },

  // ═══════════════════════════════════════════════
  // 全支付 (2%) — 需切權益至「全支付」
  // ═══════════════════════════════════════════════
  {
    cardName: "國泰CUBE",
    rewardPercent: "2%",
    channel: "全支付",
    stores: ["全聯福利中心", "大全聯"],
    needSwitch: true,
    switchTo: "全支付",
    notes: "以全支付綁定CUBE信用卡消費。排除繳稅/儲值/菸酒/禮券等。期間：2026/4/22~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "2%",
    channel: "全支付",
    stores: ["全支付國內合作通路"],
    needSwitch: true,
    switchTo: "全支付",
    notes: "全支付國內通路皆可。排除繳稅/儲值/菸酒/禮券等。期間：2026/4/22~12/31"
  },

  // ═══════════════════════════════════════════════
  // 玩數位 (無特別標示%，依官網為 3%) — 需切權益至「玩數位」
  // ═══════════════════════════════════════════════
  {
    cardName: "國泰CUBE",
    rewardPercent: "3%",
    channel: "線上訂閱/網購",
    stores: ["ChatGPT", "Canva", "Claude", "Cursor", "Duolingo", "Gamma", "Gemini", "Notion", "Perplexity", "Speak"],
    needSwitch: true,
    switchTo: "玩數位",
    notes: "AI工具類。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "3%",
    channel: "線上訂閱",
    stores: ["Apple 媒體服務", "Google Play", "Disney+", "Netflix", "Spotify", "YouTube Premium", "Max"],
    needSwitch: true,
    switchTo: "玩數位",
    notes: "數位/串流平台類。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "3%",
    channel: "線上購物",
    stores: ["蝦皮購物", "momo購物網", "PChome 24h購物", "小樹購"],
    needSwitch: true,
    switchTo: "玩數位",
    notes: "PChome不含儲值及電子票券、小樹購不含電子票券。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "3%",
    channel: "線上購物",
    stores: ["Coupang 酷澎(台灣)", "淘寶/天貓"],
    needSwitch: true,
    switchTo: "玩數位",
    notes: "國際電商類。期間：2026/1/1~12/31"
  },

  // ═══════════════════════════════════════════════
  // 樂饗購 (3%) — 需切權益至「樂饗購」
  // ═══════════════════════════════════════════════
  {
    cardName: "國泰CUBE",
    rewardPercent: "3%",
    channel: "實體刷卡(含感應)",
    stores: ["遠東SOGO百貨", "遠東Garden City", "新光三越", "遠東百貨", "台北101", "BELLAVITA", "微風廣場", "統一時代台北店", "誠品生活", "ATT 4 FUN", "京站", "美麗華", "NOKE忠泰樂生活", "大葉高島屋", "LaLaport", "宏匯廣場", "台茂購物中心", "大江國際購物中心", "遠東巨城", "中友百貨", "廣三SOGO", "南紡購物中心", "耐斯廣場", "夢時代", "漢神百貨", "漢神巨蛋", "新月廣場", "CITYLINK", "秀泰生活", "環球購物中心", "太平洋百貨", "華泰名品城", "SKM Park", "MITSUI OUTLET PARK"],
    needSwitch: true,
    switchTo: "樂饗購",
    notes: "國內指定百貨。不含店中櫃(UNIQLO/ZARA等)。以刷卡簽單特店名稱認定。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "3%",
    channel: "線上訂購",
    stores: ["Uber Eats", "foodpanda"],
    needSwitch: true,
    switchTo: "樂饗購",
    notes: "國內外送平台。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "3%",
    channel: "實體刷卡(小額支付)",
    stores: ["國內餐飲(小額支付平台)", "麥當勞"],
    needSwitch: true,
    switchTo: "樂饗購",
    notes: "含早餐店(拉亞漢堡)、咖啡店(% Arabica)、手搖飲(50嵐、麻古)、小型餐飲(八方雲集)等。不含餐券。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "3%",
    channel: "實體刷卡",
    stores: ["康是美", "屈臣氏"],
    needSwitch: true,
    switchTo: "樂饗購",
    notes: "國內藥妝。期間：2026/1/1~12/31"
  },

  // ═══════════════════════════════════════════════
  // 趣旅行 (3%) — 需切權益至「趣旅行」
  // ═══════════════════════════════════════════════
  {
    cardName: "國泰CUBE",
    rewardPercent: "3%",
    channel: "海外實體消費",
    stores: ["海外實體消費(含國外餐飲、飯店到店付款等)"],
    needSwitch: true,
    switchTo: "趣旅行",
    notes: "指定海外消費。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "3%",
    channel: "現場刷卡消費",
    stores: ["東京迪士尼樂園", "東京華納兄弟哈利波特影城", "大阪環球影城(USJ)"],
    needSwitch: true,
    switchTo: "趣旅行",
    notes: "日本指定遊樂園，限現場消費。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "3%",
    channel: "Apple錢包交通卡/叫車APP/實體刷卡",
    stores: ["SUICA", "PASMO", "ICOCA", "Uber", "Grab", "台灣高鐵", "yoxi", "台灣大車隊", "iRent", "和運租車", "格上租車"],
    needSwitch: true,
    switchTo: "趣旅行",
    notes: "SUICA/PASMO/ICOCA用Apple錢包，叫車用APP，高鐵/租車實體或線上刷卡。國內限短程叫車，不含長租/機場接送/代駕。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "3%",
    channel: "航空官網/臨櫃/APP",
    stores: ["中華航空", "長榮航空", "星宇航空", "台灣虎航", "國泰航空", "樂桃航空", "阿聯酋航空", "酷航", "捷星航空", "日本航空", "ANA全日空", "亞洲航空", "聯合航空", "新加坡航空", "越捷航空", "大韓航空", "達美航空", "土耳其航空", "卡達航空", "法國航空"],
    needSwitch: true,
    switchTo: "趣旅行",
    notes: "限航空官網/臨櫃/APP購票，不含旅行社。不含機上免稅品/機場商店/哩程兌換。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "3%",
    channel: "飯店官網/臨櫃",
    stores: ["星野集團", "全球迪士尼飯店", "東橫INN", "國內飯店住宿"],
    needSwitch: true,
    switchTo: "趣旅行",
    notes: "限飯店官網/臨櫃刷卡訂房，不含旅行社代訂。MCC code 3500~3999、7011、7012、7032、7033。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "3%",
    channel: "線上訂購",
    stores: ["KKday", "Klook", "Agoda", "Airbnb", "Booking.com", "Trip.com", "ezTravel易遊網"],
    needSwitch: true,
    switchTo: "趣旅行",
    notes: "旅遊/訂房平台。注意海外平台可能延遲扣款，建議延長切權益時間。到店付款可能不適用。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "3%",
    channel: "旅行社(限直營)",
    stores: ["雄獅旅遊", "可樂旅遊", "東南旅遊", "五福旅遊", "燦星旅遊", "山富旅遊", "長汎假期", "鳳凰旅行社", "Ezfly易飛網", "理想旅遊", "永利旅行社", "三賀旅行社"],
    needSwitch: true,
    switchTo: "趣旅行",
    notes: "限直營旅行社，不含加盟店/子公司。期間：2026/1/1~12/31"
  },

  // ═══════════════════════════════════════════════
  // 集精選 (2%) — 需切權益至「集精選」
  // ═══════════════════════════════════════════════
  {
    cardName: "國泰CUBE",
    rewardPercent: "2%",
    channel: "充電站APP",
    stores: ["U-POWER", "EVOASIS", "EVALUE", "TAIL", "iCharging"],
    needSwitch: true,
    switchTo: "集精選",
    notes: "含透過綠界、藍新支付平台之交易。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "2%",
    channel: "APP支付",
    stores: ["車麻吉(不含加油充電)", "uTagGo(不含月租停車)"],
    needSwitch: true,
    switchTo: "集精選",
    notes: "停車費。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "2%",
    channel: "實體刷卡",
    stores: ["家樂福", "LOPIA台灣", "全聯福利中心(不含大全聯)"],
    needSwitch: true,
    switchTo: "集精選",
    notes: "量販超市。家樂福含萬家福、樂家康。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "2%",
    channel: "實體刷卡",
    stores: ["台灣中油-直營站"],
    needSwitch: true,
    switchTo: "集精選",
    notes: "限中油直營站。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "2%",
    channel: "實體刷卡",
    stores: ["7-ELEVEN 實體門市", "全家便利商店 實體門市"],
    needSwitch: true,
    switchTo: "集精選",
    notes: "指定超商。期間：2026/1/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "2%",
    channel: "實體刷卡/官網線上",
    stores: ["IKEA宜家家居"],
    needSwitch: true,
    switchTo: "集精選",
    notes: "生活家居，實體門市或官網皆可。期間：2026/1/1~12/31"
  },

  // ═══════════════════════════════════════════════
  // 慶生月 — 需切權益至「慶生月」
  // ═══════════════════════════════════════════════
  {
    cardName: "國泰CUBE",
    rewardPercent: "10%",
    channel: "實體刷卡",
    stores: ["火火燒肉販賣所", "澄居烤物燒肉", "鳥苑 Torien Yakitori", "豐生茶館梅川東店", "做茶菜", "Sozai", "稻鎮經典台灣菜", "所 SUO", "嵩 sung", "JAI 宅"],
    needSwitch: true,
    switchTo: "慶生月",
    notes: "台中美食。不適用百貨/飯店/商場內門市。不適用inline刷卡。限壽星生日當月，期間：2026/7/1~9/30"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "10%",
    channel: "實體刷卡",
    stores: ["Another Eatery", "The other Eatery中山小酒館", "輝室", "鯡魚工作室", "三點三", "粥起粥底火鍋熱炒", "你家樓下", "銀杏中餐廳", "Ashin 阿鑫", "京丘炭火燒鳥專門店", "京丘燒鳥酒処", "燒鳩", "朧板前燒肉", "久碳吉炭火燒肉", "小方舟串燒酒場", "毛丼丼飯專門店", "毛房蔥柚鍋", "毛蔬亞洲蔬食"],
    needSwitch: true,
    switchTo: "慶生月",
    notes: "中西日料理/微醺餐食。不適用百貨/飯店/商場內門市。限壽星生日當月，期間：2026/7/1~9/30"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "10%",
    channel: "實體刷卡",
    stores: ["KOMBOI", "好嶼 HOSU", "肉料理福", "澀 Sur-"],
    needSwitch: true,
    switchTo: "慶生月",
    notes: "嚴選在地當季食材。不適用百貨/飯店/商場內門市。限壽星生日當月，期間：2026/7/1~9/30"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "10%",
    channel: "實體刷卡",
    stores: ["UNCLE SHAWN 燒肉餐酒館", "竣師父牛肉麵", "UNCLE RAY串燒", "陳阿姨火鍋灶咖", "蜀叔麻辣鍋", "Pastaio", "Pastaio noodle cafe", "青沐", "芮秋 Rachel", "立秋 Li Chiu", "祇園.禪院壽喜燒", "二本松涮涮屋", "橋山壽喜燒", "春囍打邊爐", "有你真好湘菜沙龍", "水鳥和洋創作料理", "髙 GAO Taipei", "法國的秘密甜點", "creammm.t", "AUFGLET", "Fake Sober", "Sober Bakery", "Sober & Burger"],
    needSwitch: true,
    switchTo: "慶生月",
    notes: "指定連鎖燒肉/鍋物/甜點。不適用百貨/飯店/商場內門市。限壽星生日當月，期間：2026/7/1~9/30"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "10%",
    channel: "現場刷卡/線上訂閱",
    stores: ["東京迪士尼樂園", "大阪環球影城(USJ)", "PlayStation", "Nintendo", "巴哈姆特動畫瘋"],
    needSwitch: true,
    switchTo: "慶生月",
    notes: "樂園=現場消費，PS/Nintendo/巴哈=線上訂閱。限壽星生日當月，期間：2026/7/1~9/30"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "10%",
    channel: "實體刷卡",
    stores: ["錢櫃KTV", "好樂迪KTV", "星聚點KTV", "享溫馨KTV"],
    needSwitch: true,
    switchTo: "慶生月",
    notes: "KTV。限壽星生日當月，期間：2026/7/1~9/30"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "3.5%",
    channel: "實體刷卡/APP訂購",
    stores: ["新光三越(不含SKM Park Outlets高雄草衙)", "Uber Eats", "Klook", "FunNow"],
    needSwitch: true,
    switchTo: "慶生月",
    notes: "新光三越=實體刷卡，Uber Eats/Klook/FunNow=APP下單。限壽星生日當月，期間：2026/7/1~9/30"
  },

  // ═══════════════════════════════════════════════
  // 童樂匯 — 需切權益至「童樂匯」(需解鎖)
  // ═══════════════════════════════════════════════
  {
    cardName: "國泰CUBE",
    rewardPercent: "1%",
    channel: "臨櫃/線上刷卡",
    stores: ["國內各大壽險公司保費", "國內各大產險公司保費"],
    needSwitch: true,
    switchTo: "童樂匯",
    notes: "保費。不含0利率分期/第三方支付繳保費/躉繳/投資型年金保費等。需解鎖童樂匯(須有未成年子女帳戶)。期間：2026/7/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "1%",
    channel: "i繳費平台",
    stores: ["台北美國學校", "台北歐洲學校", "道明外僑學校", "馬禮遜學校", "康乃薾美國學校", "立人國際國小", "康橋國際學校", "華盛頓小學", "復興實驗高中", "維多利亞雙語中小學", "高雄美國學校"],
    needSwitch: true,
    switchTo: "童樂匯",
    notes: "指定私校學費。僅適用透過i繳費平台繳學費。需解鎖童樂匯。期間：2026/7/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "5%",
    channel: "實體刷卡",
    stores: ["台灣壽司郎", "雞湯大叔", "陶板屋(限王品瘋Pay)", "YAYOI彌生軒(限街邊店)", "大戶屋", "甲蟲秘境", "大樹先生的家", "Money Jump親子餐廳", "小島3.5度親子餐廳"],
    needSwitch: true,
    switchTo: "童樂匯",
    notes: "親子餐廳。不適用百貨/飯店/商場內門市。需解鎖童樂匯。期間：2026/7/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "5%",
    channel: "現場購票/官網/Klook",
    stores: ["Klook", "東京迪士尼樂園", "大阪環球影城(USJ)", "麗寶樂園", "六福村", "九族文化村", "劍湖山世界", "義大遊樂世界", "小叮噹科學園區", "Xpark", "巧虎夢想樂園"],
    needSwitch: true,
    switchTo: "童樂匯",
    notes: "親子育樂。遊樂園限現場或官網購票，不含旅行社。Xpark限館內人工結帳。需解鎖童樂匯。期間：2026/7/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "5%",
    channel: "飯店官網",
    stores: ["台北喜來登", "蘭城晶英酒店", "台南晶英酒店", "礁溪寒沐酒店", "笠復威斯汀", "煙波大飯店新竹湖濱館", "麗寶福容大飯店", "雲品溫泉酒店", "和逸飯店", "義大皇家酒店", "高雄萬豪酒店", "墾丁凱撒大飯店", "花蓮遠雄悅來", "瑞穗天合", "六福莊", "礁溪鳳凰酒店", "桃園名人堂花園大飯店"],
    needSwitch: true,
    switchTo: "童樂匯",
    notes: "親子飯店。限飯店官網訂房，不含旅行社/訂房平台。不含婚宴/餐廳/商場消費。需解鎖童樂匯。期間：2026/7/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "5%",
    channel: "實體刷卡",
    stores: ["卡多摩嬰童館", "媽咪愛", "樂兒屋", "寶齡婦幼館/步步樂", "安琪兒婦嬰百貨", "宜兒樂", "麗兒采家", "Taobaby濤寶日記", "俏媽咪", "媽媽好"],
    needSwitch: true,
    switchTo: "童樂匯",
    notes: "母嬰用品店。不適用百貨/飯店/商場內門市。一歲以下奶粉及藥品不適用。需解鎖童樂匯。期間：2026/7/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "10%",
    channel: "實體刷卡/線上報名",
    stores: ["朱宗慶打擊樂教學系統", "雲門舞集舞蹈教室", "Yamaha音樂教室", "TutorABC Junior", "Etalking Kids", "iSKI滑雪俱樂部", "汐游寶寶/風城游汐谷"],
    needSwitch: true,
    switchTo: "童樂匯",
    notes: "五感體驗課。限教學課程，不含教材/場地租借等。朱宗慶排除部分教室，2026/9/11起終止。需解鎖童樂匯。期間：2026/7/1~12/31"
  },
  {
    cardName: "國泰CUBE",
    rewardPercent: "10%",
    channel: "品牌台灣官網",
    stores: ["10mois台灣官網", "Mamas&Papas台灣官網", "古北町台灣官網", "Little Wonders台灣官網", "Seahorse Originals台灣官網"],
    needSwitch: true,
    switchTo: "童樂匯",
    notes: "嬰幼童品牌官網。僅限台灣官網消費，不含百貨商場內門市。含綠界支付平台。需解鎖童樂匯。期間：2026/7/1~12/31"
  },

  // ═══════════════════════════════════════════════
  // 玉山 Unicard — 簡單選（免選即享，不需切換）百大消費 3%
  // ═══════════════════════════════════════════════
  {
    cardName: "玉山 Unicard",
    rewardPercent: "3%",
    channel: "行動支付",
    stores: ["玉山Wallet", "LINE Pay", "全支付", "街口支付", "悠遊付", "全盈+PAY", "iPASS MONEY", "icash Pay", "支付寶"],
    needSwitch: false,
    switchTo: "",
    notes: "簡單選（免選即享）百大消費。一般消費1%。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "3%",
    channel: "線上購物",
    stores: ["momo購物網", "蝦皮購物", "淘寶網", "Coupang酷澎"],
    needSwitch: false,
    switchTo: "",
    notes: "簡單選（免選即享）百大消費-電商平台。一般消費1%。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "3%",
    channel: "實體刷卡(含感應)",
    stores: ["新光三越", "遠東SOGO", "遠東Garden City", "台北101", "華泰名品城", "三井OUTLET", "秀泰生活", "LaLaport", "遠東巨城", "昇恆昌", "統一時代百貨", "遠東百貨", "環球購物中心", "漢神百貨(不含巨蛋)", "台中漢神洲際", "微風百貨", "誠品生活"],
    needSwitch: false,
    switchTo: "",
    notes: "簡單選（免選即享）百大消費-國內百貨。一般消費1%。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "3%",
    channel: "實體刷卡",
    stores: ["萬家福/樂家康", "屈臣氏", "康是美", "特力屋", "HOLA", "hoi好好生活", "UNIQLO", "NET", "杏一藥局", "卡多摩"],
    needSwitch: false,
    switchTo: "",
    notes: "簡單選（免選即享）百大消費-生活採買。一般消費1%。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "3%",
    channel: "線上訂購",
    stores: ["Uber Eats", "foodpanda", "王品瘋Pay"],
    needSwitch: false,
    switchTo: "",
    notes: "簡單選（免選即享）百大消費-餐飲美食。一般消費1%。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "3%",
    channel: "實體刷卡/APP叫車",
    stores: ["台灣中油(限直營)", "台塑石油PAY", "55688(台灣大車隊/機場接送)", "台鐵", "高鐵", "Uber"],
    needSwitch: false,
    switchTo: "",
    notes: "簡單選（免選即享）百大消費-加油交通。中油/台鐵/高鐵=實體刷卡，台塑石油PAY/55688/Uber=APP。一般消費1%。期間：2026/7/1~12/31"
  },

  // ═══════════════════════════════════════════════
  // 玉山 Unicard — 任意選（自選8家，需切換）百大消費 3.5%
  // ═══════════════════════════════════════════════
  {
    cardName: "玉山 Unicard",
    rewardPercent: "3.5%",
    channel: "行動支付",
    stores: ["玉山Wallet", "LINE Pay", "全支付", "街口支付", "悠遊付", "全盈+PAY", "iPASS MONEY", "icash Pay", "支付寶"],
    needSwitch: true,
    switchTo: "任意選（自選8家）",
    notes: "任意選方案，百大消費。需自選8家。一般消費1%。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "3.5%",
    channel: "線上購物",
    stores: ["momo購物網", "蝦皮購物", "淘寶網", "Coupang酷澎"],
    needSwitch: true,
    switchTo: "任意選（自選8家）",
    notes: "任意選方案，百大消費-電商平台。需自選8家。一般消費1%。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "3.5%",
    channel: "實體刷卡(含感應)",
    stores: ["新光三越", "遠東SOGO", "遠東Garden City", "台北101", "華泰名品城", "三井OUTLET", "秀泰生活", "LaLaport", "遠東巨城", "昇恆昌", "統一時代百貨", "遠東百貨", "環球購物中心", "漢神百貨(不含巨蛋)", "台中漢神洲際", "微風百貨", "誠品生活"],
    needSwitch: true,
    switchTo: "任意選（自選8家）",
    notes: "任意選方案，百大消費-國內百貨。需自選8家。一般消費1%。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "3.5%",
    channel: "實體刷卡",
    stores: ["萬家福/樂家康", "屈臣氏", "康是美", "特力屋", "HOLA", "hoi好好生活", "UNIQLO", "NET", "杏一藥局", "卡多摩"],
    needSwitch: true,
    switchTo: "任意選（自選8家）",
    notes: "任意選方案，百大消費-生活採買。需自選8家。一般消費1%。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "3.5%",
    channel: "線上訂購",
    stores: ["Uber Eats", "foodpanda", "王品瘋Pay"],
    needSwitch: true,
    switchTo: "任意選（自選8家）",
    notes: "任意選方案，百大消費-餐飲美食。需自選8家。一般消費1%。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "3.5%",
    channel: "實體刷卡/APP叫車",
    stores: ["台灣中油(限直營)", "台塑石油PAY", "55688(台灣大車隊/機場接送)", "台鐵", "高鐵", "Uber"],
    needSwitch: true,
    switchTo: "任意選（自選8家）",
    notes: "任意選方案，百大消費-加油交通。中油/台鐵/高鐵=實體刷卡，台塑石油PAY/55688/Uber=APP。需自選8家。一般消費1%。期間：2026/7/1~12/31"
  },

  // ═══════════════════════════════════════════════
  // 玉山 Unicard — UP選（訂閱升級，需切換）百大消費 4.5%
  // ═══════════════════════════════════════════════
  {
    cardName: "玉山 Unicard",
    rewardPercent: "4.5%",
    channel: "行動支付",
    stores: ["玉山Wallet", "LINE Pay", "全支付", "街口支付", "悠遊付", "全盈+PAY", "iPASS MONEY", "icash Pay", "支付寶"],
    needSwitch: true,
    switchTo: "UP選（訂閱升級）",
    notes: "UP選方案，百大消費。需訂閱升級。一般消費1%。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "4.5%",
    channel: "線上購物",
    stores: ["momo購物網", "蝦皮購物", "淘寶網", "Coupang酷澎"],
    needSwitch: true,
    switchTo: "UP選（訂閱升級）",
    notes: "UP選方案，百大消費-電商平台。需訂閱升級。一般消費1%。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "4.5%",
    channel: "實體刷卡(含感應)",
    stores: ["新光三越", "遠東SOGO", "遠東Garden City", "台北101", "華泰名品城", "三井OUTLET", "秀泰生活", "LaLaport", "遠東巨城", "昇恆昌", "統一時代百貨", "遠東百貨", "環球購物中心", "漢神百貨(不含巨蛋)", "台中漢神洲際", "微風百貨", "誠品生活"],
    needSwitch: true,
    switchTo: "UP選（訂閱升級）",
    notes: "UP選方案，百大消費-國內百貨。需訂閱升級。一般消費1%。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "4.5%",
    channel: "實體刷卡",
    stores: ["萬家福/樂家康", "屈臣氏", "康是美", "特力屋", "HOLA", "hoi好好生活", "UNIQLO", "NET", "杏一藥局", "卡多摩"],
    needSwitch: true,
    switchTo: "UP選（訂閱升級）",
    notes: "UP選方案，百大消費-生活採買。需訂閱升級。一般消費1%。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "4.5%",
    channel: "線上訂購",
    stores: ["Uber Eats", "foodpanda", "王品瘋Pay"],
    needSwitch: true,
    switchTo: "UP選（訂閱升級）",
    notes: "UP選方案，百大消費-餐飲美食。需訂閱升級。一般消費1%。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "4.5%",
    channel: "實體刷卡/APP叫車",
    stores: ["台灣中油(限直營)", "台塑石油PAY", "55688(台灣大車隊/機場接送)", "台鐵", "高鐵", "Uber"],
    needSwitch: true,
    switchTo: "UP選（訂閱升級）",
    notes: "UP選方案，百大消費-加油交通。中油/台鐵/高鐵=實體刷卡，台塑石油PAY/55688/Uber=APP。需訂閱升級。一般消費1%。期間：2026/7/1~12/31"
  },

  // ═══════════════════════════════════════════════
  // 玉山 Unicard — 一般消費 1%（免切換）
  // ═══════════════════════════════════════════════
  {
    cardName: "玉山 Unicard",
    rewardPercent: "1%",
    channel: "所有通路",
    stores: ["一般消費"],
    needSwitch: false,
    switchTo: "",
  },

  // ═══════════════════════════════════════════════
  // 富邦 J 卡 — 指定與一般消費
  // ═══════════════════════════════════════════════
  {
    cardName: "富邦J卡",
    rewardPercent: "10%",
    channel: "Apple Pay感應",
    stores: ["Suica", "PASMO", "ICOCA"],
    needSwitch: false,
    switchTo: "",
    notes: "日本三大交通卡儲值。以Apple Pay儲值單筆滿2,000元，享基本最高3%+加碼7%(每季上限200元，需登錄)。期間：2026/4/1~9/30"
  },
  {
    cardName: "富邦J卡",
    rewardPercent: "6%",
    channel: "海外實體刷卡",
    stores: ["日本實體消費", "韓國實體消費", "泰國實體消費"],
    needSwitch: false,
    switchTo: "",
    notes: "限當地實體店面對面消費。單筆滿1,000元且登錄享加碼3%(每季上限1,000元)+基本最高3%無上限。期間：2026/4/1~9/30"
  },
  {
    cardName: "富邦J卡",
    rewardPercent: "6%",
    channel: "實體刷卡",
    stores: ["中國大陸實體消費", "香港實體消費", "澳門實體消費", "新加坡實體消費", "馬來西亞實體消費", "越南實體消費"],
    needSwitch: false,
    switchTo: "",
    notes: "亞洲精選國家實體消費累積滿6,000元贈300元即享券(5%)+基本1%。每月19日16:00開放登錄。期間：2026/4/1~9/30"
  },
  {
    cardName: "富邦J卡",
    rewardPercent: "3%",
    channel: "海外一般消費",
    stores: ["日本一般消費", "韓國一般消費", "泰國一般消費"],
    needSwitch: false,
    switchTo: "",
    notes: "日本日圓、韓國韓圜、泰國泰銖一般消費享最高3%無上限。期間：2026/4/1~12/31"
  },
  {
    cardName: "富邦J卡",
    rewardPercent: "1%",
    channel: "所有通路",
    stores: ["一般消費"],
    needSwitch: false,
    switchTo: "",
    notes: "國內一般消費基本1%。排除影音/串流平台、超商、全聯、小額支付特店。期間：2026/4/1~12/31"
  },
  {
    cardName: "富邦J卡",
    rewardPercent: "0.5%",
    channel: "實體刷卡/扣繳",
    stores: ["保費"],
    needSwitch: false,
    switchTo: "",
    notes: "以富邦J卡刷保費享0.5%回饋無上限，或最高12期分期0利率二選一。期間：2026/1/1~12/31"
  },

  // ═══════════════════════════════════════════════
  // 玉山熊本熊卡 — 日本指定與一般消費
  // ═══════════════════════════════════════════════
  {
    cardName: "玉山熊本熊卡",
    rewardPercent: "8.5%",
    channel: "Apple Pay儲值/APP/實體刷卡",
    stores: ["Suica", "PASMO", "ICOCA", "TOYOTA Rent a Car", "Times Car Rental", "NIPPON RENT-A-CAR", "OTS租車", "ORIX租車", "Budget租車", "JR鐵路", "日本航空", "樂天旅遊", "東橫INN", "星野集團", "Prince Hotel"],
    needSwitch: false,
    switchTo: "",
    notes: "日本指定交通與住宿。交通IC卡限Apple Pay儲值。含基本2.5%+加碼6%(加碼每期上限500元)，需登錄1次。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山熊本熊卡",
    rewardPercent: "8.5%",
    channel: "現場刷卡/官網購票",
    stores: ["東京迪士尼樂園", "東京華納兄弟哈利波特影城", "日本環球影城", "豪斯登堡", "九州非洲獅樂園", "名古屋樂高樂園", "吉伊卡哇樂園"],
    needSwitch: false,
    switchTo: "",
    notes: "日本指定樂園與主題商店。含基本2.5%+加碼6%(加碼每期上限500元)，需登錄1次。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山熊本熊卡",
    rewardPercent: "8.5%",
    channel: "實體消費/現場刷卡",
    stores: ["勝烈亭", "敘敘苑", "牛角", "力丸燒肉", "六歌仙燒肉", "shake shack", "DOUTOR Coffee", "Fuglen", "鳥貴族", "一蘭拉麵", "松屋", "SUKIYA", "壽司郎", "藏壽司", "人形町今半"],
    needSwitch: false,
    switchTo: "",
    notes: "日本指定美食餐廳。含基本2.5%+加碼6%(加碼每期上限500元)，需登錄1次。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山熊本熊卡",
    rewardPercent: "8.5%",
    channel: "實體刷卡",
    stores: ["BicCamera", "Yodobashi", "松本清", "唐吉軻德", "大國藥妝", "無印良品", "日本MITSUI", "LaLaport", "UNIQLO", "GU", "Montbell", "Alpen"],
    needSwitch: false,
    switchTo: "",
    notes: "日本指定購物/家電/藥妝/服飾。含基本2.5%+加碼6%(加碼每期上限500元)，需登錄1次。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山熊本熊卡",
    rewardPercent: "2.5%",
    channel: "海外一般消費",
    stores: ["日本一般消費"],
    needSwitch: false,
    switchTo: "",
  },

  // ═══════════════════════════════════════════════
  // 無腦刷 / 行動支付一般通路回饋 (LINE Pay & Apple Pay)
  // ═══════════════════════════════════════════════
  {
    cardName: "玉山 Unicard",
    rewardPercent: "4.5%",
    channel: "LINE Pay/街口/悠遊付/全支付",
    stores: ["LINE Pay (一般/所有店家)", "行動支付 (無腦刷/一般消費)", "街口支付", "全支付"],
    needSwitch: true,
    switchTo: "UP選 (需訂閱)",
    notes: "如果你有 Unicard 並訂閱 UP選，直接綁定 LINE Pay 刷任何一般店家都有 4.5% 回饋。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "3.5%",
    channel: "LINE Pay/街口/悠遊付/全支付",
    stores: ["LINE Pay (一般/所有店家)", "行動支付 (無腦刷/一般消費)", "街口支付", "全支付"],
    needSwitch: true,
    switchTo: "任意選",
    notes: "若 Unicard 切換為任意選（需自選該行動支付），綁定 LINE Pay/街口等消費享 3.5% 回饋。期間：2026/7/1~12/31"
  },
  {
    cardName: "玉山 Unicard",
    rewardPercent: "3.0%",
    channel: "LINE Pay/街口/悠遊付/全支付",
    stores: ["LINE Pay (一般/所有店家)", "行動支付 (無腦刷/一般消費)", "街口支付", "全支付"],
    needSwitch: false,
    switchTo: "",
    notes: "免切換（簡單選），綁定 LINE Pay/街口等刷任何一般店家即享 3% 回饋！期間：2026/7/1~12/31"
  }
];

// ── 匯入函式（會清除現有資料後重新匯入）──
function seedImport() {
  saveRules([]); // 清除現有資料
  let count = 0;
  SEED_DATA.forEach(rule => {
    addRule(rule);
    count++;
  });
  return count;
}

