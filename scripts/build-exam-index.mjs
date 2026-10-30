// 掃描所有筆記的「## 🎯 內專考點」區塊，產生 content/exam-index.md（內專考點總覽）
// 用法：node scripts/build-exam-index.mjs（GitHub Actions 建置前會自動執行）
import fs from "node:fs"
import path from "node:path"

const CONTENT = "content"
const OUT = path.join(CONTENT, "exam-index.md")
const ORDER = [
  "nephrology",
  "cardiology",
  "pulmonology",
  "infectious-disease",
  "gastroenterology",
  "endocrinology",
  "hematology-oncology",
  "critical-care",
  "pharmacology",
  "teaching",
]

const titleOf = (text) => {
  const m = text.match(/^---\n([\s\S]*?)\n---/)
  const t = m?.[1].match(/^title:\s*(.+)$/m)
  return t ? t[1].trim().replace(/^["']|["']$/g, "") : null
}

const notes = []
for (const folder of ORDER) {
  const dir = path.join(CONTENT, folder)
  if (!fs.existsSync(dir)) continue
  const catTitle = titleOf(fs.readFileSync(path.join(dir, "index.md"), "utf8")) ?? folder
  for (const file of fs.readdirSync(dir).sort()) {
    if (!file.endsWith(".md") || file === "index.md") continue
    const text = fs.readFileSync(path.join(dir, file), "utf8")
    const slug = `${folder}/${file.replace(/\.md$/, "")}`
    const note = { slug, folder, catTitle, title: titleOf(text) ?? slug, topics: [] }

    const lines = text.split("\n")
    const start = lines.findIndex((l) => /^##\s+🎯\s*內專考點/.test(l))
    if (start !== -1) {
      let topic = null
      for (let i = start + 1; i < lines.length; i++) {
        const l = lines[i]
        if (/^##\s/.test(l)) break
        const h3 = l.match(/^###\s+(.+)$/)
        if (h3) {
          topic = h3[1].trim() === "模擬題" ? null : { name: h3[1].trim(), cards: [] }
          if (topic) note.topics.push(topic)
          continue
        }
        const card = l.match(/^>\s*\[!note\]-\s*(.+?)｜(.+)$/)
        if (card && topic) {
          const codes = card[1].match(/\d{3}-\d+/g) ?? []
          topic.cards.push({ codes, label: card[1].trim(), desc: card[2].trim() })
        }
      }
    }
    notes.push(note)
  }
}

const yearsOf = (cards) => cards.flatMap((c) => c.codes.map((x) => Number(x.split("-")[0])))
const withExam = notes.filter((n) => n.topics.some((t) => t.cards.length))
const without = notes.filter((n) => !n.topics.some((t) => t.cards.length))
const allTopics = withExam.flatMap((n) =>
  n.topics.filter((t) => t.cards.length).map((t) => ({ ...t, note: n })),
)
const totalQ = allTopics.reduce((s, t) => s + yearsOf(t.cards).length, 0)

const link = (n, heading, text, inTable = true) =>
  `[[${n.slug}#${heading}${inTable ? "\\|" : "|"}${text}]]`
let md = `---
title: 內專考點總覽
---

> [!abstract] 怎麼用這一頁
> 這頁會**自動彙整**所有筆記裡的「🎯 內專考點」，每次網站更新時重新產生，不需要手動編輯。
> 「考過次數」把重複出現的同一題分開計算（例如 106-132／108-94 算 2 次），越多次代表越常考。

目前共整理 **${totalQ} 次考題**，分布在 **${withExam.length} 篇筆記、${allTopics.length} 個考點**。

## 最常考的考點

| 考點 | 筆記 | 考過次數 | 年份 |
| --- | --- | --- | --- |
${allTopics
  .map((t) => ({ t, ys: yearsOf(t.cards) }))
  .sort((a, b) => b.ys.length - a.ys.length || Math.max(...b.ys) - Math.max(...a.ys))
  .map(
    ({ t, ys }) =>
      `| ${link(t.note, t.name, t.name)} | ${link(t.note, "🎯 內專考點", t.note.title)} | ${ys.length} | ${[...new Set(ys)].sort().join("、")} |`,
  )
  .join("\n")}
`

for (const folder of ORDER) {
  const group = withExam.filter((n) => n.folder === folder)
  if (!group.length) continue
  md += `\n## ${group[0].catTitle}\n`
  for (const n of group) {
    md += `\n### ${n.title}\n`
    for (const t of n.topics.filter((t) => t.cards.length)) {
      md += `\n**${link(n, t.name, t.name, false)}**（${yearsOf(t.cards).length} 次）\n\n`
      for (const c of t.cards) md += `- ${c.label}｜${c.desc}\n`
    }
  }
}

md += `\n## 還沒有內專考點的筆記\n\n`
md += without.length
  ? without.map((n) => `- [[${n.slug}|${n.title}]]（${n.catTitle}）`).join("\n") + "\n"
  : "全部筆記都已經有內專考點了。\n"

md += `\n點開各考點即可跳到筆記裡的題目重點卡；原題與詳解請到 [內專刷題網站](http://imboard.dirty-wolf.com/) 依題號查詢。\n`

fs.writeFileSync(OUT, md)
console.log(`exam-index: ${totalQ} questions, ${allTopics.length} topics, ${withExam.length} notes`)
