---
title: ② 收案與分析（寫 Methods）
aliases:
  - C27 Methods
tags:
  - TriNetX
  - 研究設計
---

> [!abstract] 一句話重點
> - **Index date（day 0）**＝第一次 finerenone 或 spironolactone 處方日；結局**==從 day 1 開始算==**
> - 每個條件都有自己的**時間窗**（任何時間、前一年、前 90 天、前 30 天……），寫 Methods 時一定要寫清楚
> - 人數：84,338 位 spironolactone 使用者被排除到只剩 4,677 → **==spironolactone 大多用在別的適應症==**
> - **Criteria Analysis 與 Query Count 是兩次不同的計數**；每次分析只算**當下有回應的醫院（HCO）**
> - 1:1 PSM（354 個變項、caliper 0.1 pooled SD），**每個分析各自重新配對**

## 1. 起點（index date）

- **第一次**出現 finerenone 或 spironolactone 處方紀錄的日期，介於 2021-07-09 到 2025-12-31
- 這一天是 **day 0**；結局從 **day 1** 開始算，**index 當天的紀錄不算結局**

## 2. 納入條件（兩組相同）

| # | 條件 | 時間窗 | 說明 |
| --- | --- | --- | --- |
| 1 | 年齡 ≥ 18 歲 | Index 當天 | |
| 2 | T2DM 診斷 | Index 當天或之前任何時間 | |
| 3 | 腎病證據，三選一：CKD／DKD 診斷碼（N18.1–N18.4、N18.9、E11.21、E11.22、E11.29）；**UACR ≥ 30 mg/g**（或 ≥ 3 mg/mmol）；proteinuria 診斷碼（R80） | Index 前一年內，**含** index 當天 | 不要求每個人都有 albuminuria 或 eGFR 值 |
| 4 | ACEi 或 ARB 紀錄 | Index 前一年內，**不含** index 當天 | 只代表之前用過 |

## 3. 只收第一次用藥、兩組互斥

1. Index **之前任何時間**有同一種藥 → 排除（確保是第一次用）
2. Index **當天或之前**有另一種研究藥 → 排除（兩組不重疊）
3. Index 之前有 **eplerenone** → 排除

## 4. 排除條件（依時間窗分組）

| 時間窗 | 排除條件 | 為什麼 |
| --- | --- | --- |
| **任何時間**（含 index 當天） | AF 或 atrial flutter；HF 相關診斷；ARNI；cirrhosis 或 ascites；hyperaldosteronism；CKD stage 5 或 kidney replacement therapy；adrenal insufficiency；曾做 AF ablation、cardioversion、LAA 手術 | 已經有 AF 或 HF；spironolactone 的其他適應症；腎功能太差 |
| **前一年內**（含當天） | Resistant hypertension；nephrotic syndrome；hypokalemia；T1DM；抗心律不整藥或 digoxin；ivabradine；antiandrogen 用途（acne、hirsutism、PCOS、androgenic alopecia、gender identity disorder） | 處方目的不同，或暗示已有心律或 HF 問題 |
| **前 90 天內**（含當天） | Hypertensive crisis；水腫或 fluid overload；loop diuretic；任何一次 **eGFR ≤ 29.99** | 暗示容積過多或潛在 HF；腎功能太差 |
| **前 280 天內**（含當天） | 懷孕相關紀錄 | 孕期不使用 MRA |
| **前 30 天內**（**不含**當天） | **K ≤ 3.49 或 ≥ 4.81 mmol/L** | 開始 MRA 的安全範圍；**沒驗 K 的人仍可收案** |

- 完整代碼與時間窗：補充資料 **Method S1**（第 2–72 頁）

## 5. 人數怎麼一路減少（Figure 1）

<div class="orig-fig" data-src="TriNetX/c27-originals/figure-1.png" data-label="Figure 1"></div>

依原圖內容整理：

| 步驟 | Finerenone | Spironolactone |
| --- | --- | --- |
| 資料庫 | 77 家醫療機構、約 1.47 億人 | |
| 符合納入條件的使用者 | 6,719 | **84,338** |
| 排除後（**Criteria Analysis**） | 2,234 | 4,677 |
| 結局分析用的 **Query Count**（同樣條件、另一次計數） | 2,281 | 4,851 |
| 結局分析時可用（只算當次有回應的醫院） | 1,484 | 2,894 |
| **1:1 PSM 後** | **780** | **780** |
| 追蹤 | Day 1–730 | |

**排除條件逐列人數**（由上往下依序排除；依原圖內容整理）：

| 排除條件（時間窗） | Finerenone | Spironolactone |
| --- | --- | --- |
| T1DM（前一年） | 432 | 4,322 |
| **KRT、CKD stage 5 或 eGFR ≤ 29.99**（任何時間；eGFR 前 90 天） | 1,465 | **20,651** |
| Nephrotic syndrome（前一年）、adrenal insufficiency（任何時間）、懷孕（前 280 天） | 107 | 1,253 |
| **Cirrhosis、ascites 或 hyperaldosteronism**（任何時間） | 251 | **7,653** |
| **Hypokalemia（前一年）或 K 在 3.50–4.80 以外（前 30 天，不含 index）** | 565 | **16,177** |
| Acne、hirsutism 等 antiandrogen 用途（前一年） | 21 | 566 |
| Resistant HTN（前一年）或 hypertensive crisis（前 90 天） | 69 | 2,196 |
| **水腫、fluid overload 或 loop diuretic**（前 90 天） | 566 | **15,714** |
| 之前用過 MRA（同藥或 eplerenone：index 前；其他 MRA：任何時間） | 370 | 5,632 |
| HF、ARNI（任何時間）或 ivabradine（前一年） | 442 | 4,790 |
| AF 或 flutter、AF 手術（任何時間）；rhythm-control drug 或 digoxin（前一年） | 197 | 707 |

→ Spironolactone 大多用在別的適應症，這正是要用這些排除條件的原因：讓兩組回到同一個「**要加哪一種 MRA**」的決定。

> [!warning] Pitfall：排除順序會影響每一列的人數
> - 由上往下依序排除，**==每個人只算在第一個符合的條件==**
> - 例如 AF 那一列 spironolactone 只排除 707 人，不代表 spironolactone 使用者很少有 AF——同時有 HF 和 AF 的人，已經在上一列「HF」被算走了

> [!important] TriNetX 的兩個計數陷阱（評審很可能問）
> 1. **Criteria Analysis ≠ Query Count**
>    - Criteria Analysis：平台逐條套用排除條件，列出每一條排除多少人（Figure 1 用）
>    - Query Count：同一套條件**另一次**算出的總人數（結局分析用）
>    - 兩次各自計數，數字不會完全一樣；**==2,281 比 2,234 多不是算錯==**，寫 Results 時兩個都要交代
> 2. **每次執行只算當下有回應的醫院（HCO）**
>    - 2,281／4,851 降到 1,484／2,894，是因為結局分析當下部分醫院沒回應
>    - 每次可用的醫院可能不同 → 每個分析的人數都不一樣
>    - 沒回應的醫院大多是同一批，**==重跑也補不回來==** → 寫進 limitations
>    - 稿件**不寫回應的醫院家數**，只寫「每個分析只用當次有回應的醫院的資料」；唯一的機構數在 Figure 1 最上面（描述資料庫規模）

## 6. Propensity score matching（PSM）

| 項目 | 設定 |
| --- | --- |
| 變項數 | **354 個**：人口學、診斷、檢驗與生命徵象、用藥、醫療利用（含 **ECG、Holter**、心臟超音波） |
| 時間窗 | 大多 index 前一年內、不含當天；**BP、eGFR、UACR** 前 90 天內；**K** 前 30 天內；**loop diuretic** 前一年到前 91 天 |
| 配對方式 | **==1:1 greedy nearest neighbor、不放回、caliper 0.1 pooled SD==** |
| 重新配對 | **==每個結局分析各自重新配對==** → 每個 alternative analysis 都有自己的配對族群 |

> [!warning] Pitfall：K 和 eGFR 的實際時間窗
> 平台實際用的時間窗可能比設定的寬（見 [[trinetx/c27-finerenone-af/c27-3-results|③]] Table 1 第 7 點）。所以不能說兩組「近期檢驗值」已經平衡。

## 7. 結局與分析

### 結局

| | 定義 |
| --- | --- |
| **主要結局** | Day 1–730 **第一次**出現 AF 或 atrial flutter 診斷（**ICD-10-CM I48 及其下層碼**） |
| 主要結局的組成 | AF、atrial flutter、specified type AF、unspecified AF or flutter（彼此重疊，也和主要結局重疊） |
| 次要結局 | All-cause hospitalization（第一次住院）、ischemic stroke 或 ICH、all-cause death、**hyperkalemia（E87.5 診斷碼，不是檢驗值）**、HF 相關診斷 |

### 統計

1. **Cox model** → HR 與 95% CI
2. **Kaplan–Meier** 曲線與 **log-rank test**
3. 檢查 **proportional hazards（PH）假設**
4. 報告 **day 730 的 KM 事件機率**

### 11 個 alternative analyses（每個只改一個設計條件）

| 類別 | 分析 |
| --- | --- |
| Baseline potassium | 要求基線 K 值 |
| Calendar period | Index 限 2023 年以後 |
| Kidney phenotype | 要求數值 UACR ≥ 30；要求 established CKD |
| Treatment pattern | 排除 thiazide；排除近期 natriuretic peptide 升高 |
| Follow-up window | 追到 day 365；只看 day 1–30；只看 day 91–730（**lag window**） |
| Prior AF screen | 更嚴格的 AF 病史排除 |
| Propensity model | PSM 加入 **32 個 frailty 變項** |

### Negative control outcomes

- **Seborrheic keratosis、impacted cerumen、presbyopia**
- 藥物不該影響這些診斷；如果兩組也有差 → 代表**就醫機會**或其他偏差

### 追蹤期間的描述性指標（不是結局）

- 用來判斷兩組「**被發現 AF 的機會**」和之後的照護是否相同
- 分三個時間窗（day 1–30、31–365、366–730），**每個時間窗各自重新配對**
  - **Figure 4**：ECG 或 ambulatory rhythm monitoring、任何看診
  - **Table S5**：合併用藥、另一種研究藥的紀錄、K 檢驗

> [!danger] TriNetX 的遮蔽規則
> - **≤ 10 人**的計數顯示為「≤10」
> - **任一組事件 ≤ 10** → 平台**==不釋出 HR==**（表上寫「–」）
> - 「–」＝看不到，**不是沒有差別、也不是 0**

## 相關筆記

- [[trinetx/c27-finerenone-af/index|C27 總覽]]
- [[trinetx/c27-finerenone-af/c27-1-idea|① 研究發想]]
- [[trinetx/c27-finerenone-af/c27-3-results|③ 讀懂主文圖表]]
- [[trinetx/c27-finerenone-af/c27-4-supplement|④ 補充資料（Table S2 target trial 規格）]]

## 參考資料

- C27 教學資料包：研究發想與圖表解說（2026-11-21 版），第二、三部分與 Figure 1。參考資料庫：`TriNetX/C27_教學資料包_研究發想與圖表解說.pdf`
