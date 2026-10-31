// 產生 NEJM 個案分享專區的總覽頁（content/nejm-cases/index.md）與各次專的目錄頁
// 用法：node scripts/build-nejm-index.mjs（GitHub Actions 建置前會自動執行）
// 每篇個案筆記的 frontmatter 需有：title、chief（原始主訴）、pivot（轉折點）、nejm_title
import fs from "node:fs"
import path from "node:path"

const ROOT = path.join("content", "nejm-cases")
const CATS = [
  ["cardiology", "心臟科", "Cardiology"],
  ["pulmonology", "胸腔科", "Pulmonology"],
  ["infectious-disease", "感染科", "Infectious Disease"],
  ["gastroenterology", "腸胃肝膽科", "Gastroenterology & Hepatology"],
  ["endocrinology", "內分泌科", "Endocrinology"],
  ["nephrology", "腎臟科", "Nephrology"],
  ["hematology-oncology", "血液腫瘤科", "Hematology & Oncology"],
  ["rheumatology-immunology", "風濕免疫過敏科", "Rheumatology, Immunology & Allergy"],
  ["neurology", "神經科", "Neurology"],
  ["dermatology", "皮膚科", "Dermatology"],
  ["urology", "泌尿科", "Urology"],
  ["obstetrics-gynecology", "婦產科", "Obstetrics & Gynecology"],
  ["pediatrics", "兒科", "Pediatrics"],
]

const fm = (text) => {
  const m = text.match(/^---\n([\s\S]*?)\n---/)
  const get = (k) => {
    const r = m?.[1].match(new RegExp(`^${k}:\\s*(.+)$`, "m"))
    return r ? r[1].trim().replace(/^["']|["']$/g, "") : ""
  }
  return { title: get("title"), chief: get("chief"), pivot: get("pivot"), nejm: get("nejm_title") }
}
const esc = (s) => s.replace(/\|/g, "\\|")

let total = 0
const cards = []
for (const [slug, zh, en] of CATS) {
  const dir = path.join(ROOT, slug)
  if (!fs.existsSync(dir)) continue
  const notes = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && f !== "index.md")
    .map((f) => ({ file: f.replace(/\.md$/, ""), ...fm(fs.readFileSync(path.join(dir, f), "utf8")) }))
    .sort((a, b) => a.title.localeCompare(b.title, "zh-Hant"))
  if (!notes.length) continue
  total += notes.length

  const rows = notes
    .map(
      (n) =>
        `| ${esc(n.chief)} | [[nejm-cases/${slug}/${n.file}\\|${esc(n.title)}]] | ${esc(n.pivot)} |`,
    )
    .join("\n")
  fs.writeFileSync(
    path.join(dir, "index.md"),
    `---
title: ${zh}（NEJM）
cssclasses:
  - hide-listing
---

> [!abstract] 怎麼用這一頁
> 先看「病人怎麼來」那一欄，自己想一輪鑑別診斷，再點進去看作者怎麼推理。這頁由 \`scripts/build-nejm-index.mjs\` 自動產生。

| 病人怎麼來 | 最終診斷 | 推理的轉折點 |
| --- | --- | --- |
${rows}

← 回到 [[nejm-cases/index|NEJM 個案分享專區]]
`,
  )
  cards.push(
    `<a class="af-card internal" href="/nejm-cases/${slug}">
<div class="af-num">${notes.length}</div>
<div class="af-body"><div class="af-title">${zh} ${en}</div><div class="af-desc">${notes.map((n) => n.title.replace(/\s*[A-Za-z][\x20-\x7E–’]*$/, "")).join("、")}</div></div>
</a>`,
  )
}

fs.writeFileSync(
  path.join(ROOT, "index.md"),
  `---
title: NEJM 個案分享
aliases:
  - NEJM 個案
  - Morning Report
cssclasses:
  - hide-listing
---

> [!abstract] 一句話重點
> 整理 **NEJM Evidence Morning Report** 的個案（目前 ${total} 篇）。每篇以**最終診斷**命名，但重點不在答案，而在**作者怎麼找到答案**：每一步問了什麼、為什麼做這個檢查、鑑別診斷怎麼升降，以及讓推理轉向的那個關鍵發現。

## 每篇筆記的讀法

- **Checkpoint**：病史、理學檢查、檢驗、影像、確診，每一關後重新排序鑑別診斷
- 鑑別診斷的狀態：🔴 HIGH（最可能）、🟠 POSSIBLE（不能排除）、⚪ LOW（不太像）、❌ RULED OUT（排除）、✅ CONFIRMED（確診）
- **🔀 轉折點**：讓鑑別診斷大洗牌的那個發現，通常不是病理報告，而是病史或一個關鍵檢驗
- **🧭 推理全程回顧**：最後一張表把整條推理鏈串起來，適合考前複習

> [!tip] 建議用法
> 進到各次專的目錄頁，先只看「病人怎麼來」，自己想一輪鑑別診斷，再點進筆記對答案。

## 依次專分類

<div class="af-cards">
${cards.join("\n")}
</div>

> [!info] 來源與版權
> 個案內容來自 NEJM Evidence Morning Report，全部用自己的話重新整理，沒有轉載原文、原圖或原表。每篇都附 DOI，想看完整原文請到 NEJM Evidence。
`,
)
console.log(`NEJM 個案：${total} 篇，${cards.length} 個次專`)
