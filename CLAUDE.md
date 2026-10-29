# 內科筆記網站：給 Claude 的工作規則

這個 repo 是 Young（內科住院醫師）的個人醫學筆記網站，使用 **Quartz 4** 建置，網址是 https://youngmd-notes.github.io 。
Young 會用自然語言下指令（例如「新增一篇 SIADH 筆記」），由 Claude 直接修改並上線。

## 發佈方式

- **直接推送到 `main`**，不需要開 PR（Young 選擇直接上線）
- 推送後 GitHub Actions 會自動建置並部署，約 1–2 分鐘後網站更新
- 推送前先執行 `npm ci`（若尚未安裝）和 `npx quartz build`，確認沒有錯誤
- commit 訊息用繁體中文，簡短說明改了什麼
- 完成後告訴 Young 改了哪些筆記，以及網址

## 檔案結構

- 所有筆記都在 `content/` 裡
- 分類資料夾（資料夾名稱 = 網址，用英文小寫加連字號）：

| 資料夾 | 分類 |
| --- | --- |
| `nephrology` | 腎臟科 |
| `cardiology` | 心臟科 |
| `pulmonology` | 胸腔科 |
| `infectious-disease` | 感染科 |
| `gastroenterology` | 腸胃肝膽科 |
| `endocrinology` | 內分泌科 |
| `hematology-oncology` | 血液腫瘤科 |
| `critical-care` | 重症醫學 |
| `pharmacology` | 藥物 |
| `teaching` | 教學資源 |

- 每個分類資料夾有一個 `index.md`，設定分類的顯示名稱
- 新增分類時：建立資料夾和 `index.md`，並把資料夾名稱加進 `quartz.layout.ts` 裡 Explorer 的 `order` 陣列（兩處都要改），也更新 `content/index.md` 的分類表格和本檔的表格
- `content/templates/` 是筆記模板，不會出現在網站上

## 筆記格式規則

- **檔名**：英文小寫加連字號，例如 `acute-kidney-injury.md`
- **title**：`中文名稱 English Name`，例如 `急性腎損傷 Acute Kidney Injury`
- 新的疾病筆記依照 `content/templates/disease-note.md` 的架構
- 一開頭放 `> [!abstract] 一句話重點`
- 用提示框標示重點：`> [!tip] Pearl`、`> [!warning] Pitfall`、`> [!danger]`（劑量上限等關鍵安全資訊）
- 鑑別診斷、治療比較盡量用表格；診斷流程可用 Mermaid flowchart
- 醫學名詞保留英文，說明用繁體中文
- 用 `[[檔名]]` 連結相關筆記；新增筆記時，也要回頭在相關的舊筆記加上連結
- 結尾附上「相關筆記」和「參考資料」（作者、標題、期刊、年份）

## 醫學內容規則

- 內容必須正確，以主要指引或權威文獻為依據；不確定的數值要查證，不可憑記憶亂寫
- 藥物劑量要寫清楚單位、途徑、頻率，必要時註明腎功能調整
- **絕對不可以放任何病人可辨識資訊**（姓名、病歷號、日期、照片、罕見病況組合）。Young 提供的病例內容若含這類資訊，要先去識別化，並提醒他
- 這是公開網站，任何人都看得到

## 用 Paper 或 Textbook 合成筆記

Young 會提供 paper、指引或 textbook 內容，請 Claude 讀取後整理成筆記：

- **主要來源：私人 repo `youngmd-notes/notes-sources`**，依分類資料夾（腎臟科、心臟科……）存放 PDF。Young 說「讀參考資料裡的 XX」時，就到這裡找（先連上這個 repo）
- 也可能直接在對話中上傳檔案


- **用自己的話重新整理**，不可以整段照抄原文；表格、流程圖也要重新組織，不可以直接複製原書的圖表
- 原文引用每篇最多一句短句（15 字以內），並加上出處
- 「參考資料」寫明來源（作者、標題、期刊或書名、年份、章節）
- **不要把 PDF 或原文檔案放進這個 repo**（公開 repo，有版權問題）
- 如果主題已經有筆記，優先**合併、更新**舊筆記，而不是另開一篇；更新時保留原有內容，標出新增的重點
- 新文獻和舊筆記內容衝突時（例如指引改版），要在筆記中寫明差異和年份，並告訴 Young

## 內專考古題

參考來源：[內專刷題網站](http://imboard.dirty-wolf.com/)，2000 題（104 年起），每題有次專科與主題標籤（例如 `Na-Water`、`AcidBase`、`AKI-Prerenal-ATN`）。

- 讀取方式：用 Young 筆電上的內建瀏覽器打開網站（需先按同意免責聲明），題庫資料在網站載入的 `assets/questions.*.js` 和 `assets/explanations.*.js`，可用 JavaScript 依 `topic` 或關鍵字篩選
- 疾病筆記結尾（「相關筆記」之前）加上 **`## 🎯 內專考點`** 區塊：
  - `> [!example] 出題規律`：一兩句話說明這個主題怎麼考
  - 表格：考點 / 怎麼考 / 考古題題號
  - 題號格式「年份-題號」，例如 `104-81`，並附刷題網站連結與查詢方式（網站每題沒有獨立網址）
  - 1–2 題 **Claude 自己出的模擬題**，用可折疊的 `> [!question]-` 和巢狀 `> [!success]-` 放答案與詳解
- 考點用自己的話整理，**不在公開網站放題目原文、選項或網站詳解原文**
- 網站答案可能有誤，整理考點時要對照指引或教科書查證，有出入時寫在筆記並告訴 Young

## 本機預覽

```bash
npm ci
npx quartz build --serve   # http://localhost:8080
```
