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
- **大主題分篇**：同一主題分成多篇時，在分類下建子資料夾（例如 `cardiology/atrial-fibrillation/`），`index.md` 當主題總覽頁（`cssclasses: [hide-listing]` 隱藏自動清單，用 `.af-cards` 卡片連到各分篇），分篇放在同一資料夾；左側選單會自動變成「分類 → 主題 → 分篇」三層
  - 搬移既有筆記時，在 aliases 加上舊網址（例如 `cardiology/舊檔名`），舊連結會自動轉址

## 筆記格式規則

- **檔名**：英文小寫加連字號，例如 `acute-kidney-injury.md`
- **title**：`中文名稱 English Name`，例如 `急性腎損傷 Acute Kidney Injury`
- 新的疾病筆記依照 `content/templates/disease-note.md` 的架構
- 一開頭放 `> [!abstract] 一句話重點`
- 用提示框標示重點：`> [!tip] Pearl`、`> [!warning] Pitfall`、`> [!danger]`（劑量上限等關鍵安全資訊）
- **螢光筆重點**：用 `==文字==` 標出最該記住的內容（安全上限與致命錯誤、治療順序與關鍵劑量、常見陷阱、內專反覆考的點），一篇約 5–20 處，不要整段塗滿
  - 語法只認純文字：要粗體就寫 `**==文字==**`（粗體在外），不要寫 `==**文字**==`；螢光筆內不可含 `=`
- 鑑別診斷、治療比較盡量用表格；診斷流程可用 Mermaid flowchart
- **臨床計算機**：電解質、酸鹼相關筆記可放 `<div class="calc" data-title="標題"></div>`，自動產生計算機（校正血鈉、effective／total osmolality、osmolal gap、AG、白蛋白校正 AG、delta ratio、Winter）；可加 `data-example="na=151,glu=525,bun=62"` 預先帶入考題數值（欄位：na、cl、hco3、glu、bun、alb、mosm、pco2）
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

### 寫或更新任何筆記時的固定流程（Young 不用特別提醒）

1. **先查參考資料庫**：連上 `notes-sources`，到對應分類資料夾找相關 PDF（也看檔名、其他資料夾是否有相關章節）。有就以它為**主要依據**；Young 在對話中上傳的檔案同樣優先
2. **沒有或不夠時，上網補充**：找主要指引或權威文獻（學會指引、Diabetes Care、NEJM、UpToDate 引用的原始文獻等），數值一定查證原文，不可憑記憶；在「參考資料」註明來源
3. **說法不同時**：以參考資料庫的內容為準，照實呈現，不另外比對統一；但若網路上有**更新版本的指引**，完成後要告訴 Young，由他決定是否放進參考資料庫
4. **最後補內專考點**：照下方「內專考古題」規則；若當下無法連到 Young 筆電的瀏覽器，在 `## 🎯 內專考點` 寫一行「待補」，並告訴 Young
5. 完成時告訴 Young 這篇用了哪些來源（參考資料庫的哪個檔案、哪些網路來源）


- **用自己的話重新整理**，不可以整段照抄原文；表格、流程圖也要重新組織，不可以直接複製原書的圖表
  - 原文的 figure（流程圖、示意圖）要依內容**重新繪製**：用 Mermaid（flowchart、mindmap）或 HTML 圖表，換成自己的版面與配色，標示「依原圖內容重新繪製」；不可貼原圖截圖。療程長短類可用 `.tl` 時間軸樣式（見 AF 指引筆記 Figure 14）
  - Mermaid 圖在推送前先用本機 mermaid（與網站同版 11.4.0）渲染驗證，避免網站上出現錯誤框
- **私人原圖（只有 Young 看得到）**：原圖裁切成 PNG 放在私人 repo `notes-sources`（例如 `心臟科/af-originals/`），筆記中在對應的 Table／Figure 標題下放 `<div class="orig-fig" data-src="心臟科/af-originals/figure-03.png" data-label="Figure 3"></div>`（多頁用逗號分隔）。網站只放路徑，圖片由 Young 瀏覽器用他自己的 GitHub 權杖從私人 repo 讀取；**原圖檔案絕對不可放進這個公開 repo**
  - 裁切用 PyMuPDF：figure 以紅色外框＋圖說為範圍；table 以表格儲存格結構＋表註為範圍；逐張目視檢查，跨欄或跨頁的表要分段
- 原文引用每篇最多一句短句（15 字以內），並加上出處
- 「參考資料」寫明來源（作者、標題、期刊或書名、年份、章節）
- **不要把 PDF 或原文檔案放進這個 repo**（公開 repo，有版權問題）
- 如果主題已經有筆記，優先**合併、更新**舊筆記，而不是另開一篇；更新時保留原有內容，標出新增的重點
- 參考資料怎麼寫，筆記就照實呈現；不需要另外和其他來源或考古題比對、統一

## 內專考古題

參考來源：[內專刷題網站](http://imboard.dirty-wolf.com/)，2000 題（104 年起），每題有次專科與主題標籤（例如 `Na-Water`、`AcidBase`、`AKI-Prerenal-ATN`）。

- 讀取方式：用 Young 筆電上的內建瀏覽器打開網站（需先按同意免責聲明），題庫資料在網站載入的 `assets/questions.*.js` 和 `assets/explanations.*.js`，可用 JavaScript 依 `topic` 或關鍵字篩選
- 疾病筆記結尾（「相關筆記」之前）加上 **`## 🎯 內專考點`** 區塊：
  - `> [!example] 出題規律`：一兩句話說明這個主題怎麼考
  - 一行說明題號格式「年份-題號」與刷題網站連結、查詢方式（網站每題沒有獨立網址）
  - 依考點分小標題（`###`），**每一題做成一張「題目重點卡」**，用可折疊的 `> [!note]- 題號｜一句話描述`：
    - **情境**：病人背景與所有關鍵數據（生命徵象、檢驗值），用自己的話條列
    - **問**：問什麼，選項用簡短詞語列出（找錯誤題可逐項標對錯）
    - **答**：正確答案
    - **重點**：為什麼對，以及主要干擾選項為什麼錯（依網站詳解的觀點整理）
  - 內容相同的重複考題合併成一張卡，標題寫兩個題號
  - 最後 `### 模擬題`：1–2 題 **Claude 自己出的模擬題**，用 `> [!question]-` 和巢狀 `> [!success]-` 放答案與詳解
- 重點卡全部用自己的話寫，**不在公開網站放題目原文、選項原文或網站詳解原文**
- 考古題的答案與詳解怎麼寫就照實整理考點，**不需要**和參考資料比對或標出差異
- `content/exam-index.md`（內專考點總覽）由 `node scripts/build-exam-index.mjs` 自動產生，**不要手動編輯**；新增或修改考點後執行一次再建置（GitHub Actions 部署時也會自動執行）
- 考點卡格式要維持 `> [!note]- 題號｜描述`、「**答**：」「**重點**：」開頭，「何者錯誤」題的選項用「→ 對／錯」標示，測驗模式才能正確遮住答案

## 安裝到手機桌面（PWA）

- `quartz/static/manifest.webmanifest`、`quartz/static/icon-*.png`、`content/sw.js` 讓網站可以加到手機桌面；左上「加到桌面」按鈕由 `InstallApp` 元件提供
- `sw.js` 採 network-first：有網路一定抓最新版，沒網路才用看過的頁面；改動 `sw.js` 邏輯時把 `CACHE` 版本號加一

## 本機預覽

```bash
npm ci
npx quartz build --serve   # http://localhost:8080
```
