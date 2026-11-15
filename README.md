# JXlin-Card（刷哪張？）

信用卡回饋速查工具，純靜態網站：https://card.jxlin.dev

```
public/            實際上線的檔案（index.html、app.js、data.js、seed-data.js、style.css、icon）
cardOriginsData/   整理 seed-data.js 用的原始資料，不會上線
wrangler.jsonc     Cloudflare Pages 專案「card」的設定
```

## 部署

```sh
npx wrangler pages deploy
```

部署到 Cloudflare Pages 專案 `card`，`card.jxlin.dev` 已綁在這個專案上，不用重新設定網域。

icon 來源是 JXlin 系列（`jxlin-icons/card/`）。
