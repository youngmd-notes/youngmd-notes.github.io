# Young 的內科筆記網站：給 Claude 的工作規則

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

## 本機預覽

```bash
npm ci
npx quartz build --serve   # http://localhost:8080
```
