---
title: ④ 補充資料
aliases:
  - C27 Supplementary
tags:
  - TriNetX
  - 研究設計
---

> [!abstract] 一句話重點
> - **Method S1**：完整代碼與 query 條件（讓人能重做）；Methods 正文只寫原則與時間窗
> - **Figure S1**：次要結局 KM——**death 在前半年就分開**，型態和 AF 很像；**hyperkalemia 前 3 個月重疊、之後才分開**
> - **Figure S2**：每組只有 438 人（56%）追滿 2 年（代替 number at risk）
> - **Table S2**：target trial 規格表＝**Methods 的骨架**，寫 Methods 前先填它
> - **Table S4**：negative control 沒看到明確差異，但 **CI 很寬，不能說偵測差異不存在**
> - **Table S5**：前 30 天 finerenone 組**驗 K 較少**（22.6% vs 31.8%）；day 31–365 GLP-1 RA 較多（可能是巧合）

頁碼是 Supplementary_file.pdf 的頁碼。

## Method S1（第 2–72 頁）：完整代碼與 query 條件

- 用意：讓別人能**完全重做**
- 內容：兩組 query 條件（第 2、20 頁）、結局代碼（第 39 頁）、PSM 變項代碼（第 50 頁）、alternative analyses 代碼（第 68 頁）
- 寫作提醒：**Methods 正文只寫原則與時間窗，代碼一律放這裡**

## Method S2（第 73–79 頁）：TriNetX 的 PSM 方法說明

- 平台的 logistic regression、配對方式、跨醫院合併的標準說明；正文只需要引用

## Figure S1（第 80–82 頁）：AF 組成與次要結局的 KM 曲線

<div class="orig-fig" data-src="TriNetX/c27-originals/figure-s1-p1.png,TriNetX/c27-originals/figure-s1-p2.png,TriNetX/c27-originals/figure-s1-p3.png" data-label="Figure S1"></div>

Table 2 只給 2 年摘要；這裡看**每個結局的差異是什麼時候出現的**（讀法同 Figure 2）。

| Panel | 結局 | 要看什麼 |
| --- | --- | --- |
| A | AF | 和主要結局幾乎一樣（事件幾乎都有 AF 代碼） |
| B | 全因住院 | 兩條線很接近，整段都無法確定有沒有差異 |
| C | Ischemic stroke 或 ICH | 交錯、幾乎重疊 |
| **D** | **All-cause death** | **==Spironolactone 組前半年就比較多==**（day 180：0.26% vs 1.46%），**型態和 AF 很像** → 再次提醒兩組預後可能本來就不同 |
| **E** | **Hyperkalemia** | **前 3 個月幾乎一樣、之後 finerenone 較低**（day 730：12.46% vs 15.64%）；和 AF「一開始就分開」的型態**不同** |
| F | HF 相關診斷 | Finerenone 較低（9.19% vs 11.57%），但陰影重疊多、不精確 |

> [!tip] 為什麼 panel D 和 E 的型態很重要？
> - **藥效**通常需要時間累積 → 曲線慢慢分開（像 hyperkalemia）
> - **病人本來就不同**或**偵測差異** → 曲線一開始就分開（像 AF 和 death）
> - **==AF 的型態像 death 而不像 hyperkalemia==**，是支持「residual confounding／detection bias」的線索

## Figure S2（第 83 頁）：配對後的追蹤時間分布

<div class="orig-fig" data-src="TriNetX/c27-originals/figure-s2.png" data-label="Figure S2"></div>

- 用意：KM 越往右，還在追蹤的人越少、估計越不穩；平台**沒有 number at risk**，用這張圖代替
- 怎麼看：每根柱子是追蹤長度落在那 10 天區間的人數（橘＝finerenone、綠＝spironolactone）；最右邊被截斷的那根是追滿 730 天的人
- **重點：==每組 438 人追到 day 730（約 56%）==**；其他人大多在 day 270–730 之間結束追蹤（資料截止，或之後在資料庫沒有紀錄）

## Table S1（第 84–87 頁）：TARGET checklist

- **Target trial emulation 的報告規範**對照表，逐項寫出每個項目在稿件哪裡；**投稿必附**
- 教學用法：初稿寫完後，拿這張表**逐項自我檢查**有沒有漏寫

## Table S2（第 88–91 頁）：Target trial 規格與模擬方式

<div class="orig-fig" data-src="TriNetX/c27-originals/table-s2-p1.png" data-label="Table S2（第 88 頁）"></div>

- 用意：**左欄寫「如果做一個理想的 RCT 會怎麼設計」，右欄寫「用 EHR 怎麼模擬」**——這是 target trial emulation 的核心表
- **==建議寫 Methods 之前先填這張表==**，它就是 Methods 的骨架：

| 元件 | 要回答的問題 |
| --- | --- |
| Eligibility criteria | 誰可以進來？（納入、排除與各自的時間窗） |
| Treatment strategies | 比較哪兩種策略？（開始 finerenone vs 開始 spironolactone） |
| Assignment | 理想 RCT 是隨機分派；模擬時用 PSM 達到可比性 |
| Follow-up | 從哪天開始、到哪天結束？（time zero＝第一次處方日，day 1–730） |
| Outcome | 結局怎麼定義？（第一次 I48 診斷碼） |
| Causal contrast | 估計什麼效果？（第一次開的藥，之後換藥不中止追蹤） |
| Identifying assumptions | 需要哪些假設才能解釋成因果？（沒有未測量的干擾等） |
| Data analysis plan | 用什麼統計方法？（Cox、KM、PH 檢查、alternative analyses） |

## Table S3（第 92–104 頁）：354 個 PSM 變項的完整平衡表

- Table 1 只列重點，這裡列全部 354 個變項（檢驗值分組，共 423 列）配對前後的比例與 SMD
- 寫作提醒：K 與 eGFR 的實際時間窗無法確定 → **不能說兩組「近期檢驗的嚴重度」已經平衡**

## Table S4（第 105 頁）：Alternative analyses 與 negative control outcomes

<div class="orig-fig" data-src="TriNetX/c27-originals/table-s4.png" data-label="Table S4"></div>

Figure 3 的完整版，多了每個分析改了什麼、各階段人數，以及 negative control。

**怎麼看（主分析那一列）**：

| 欄位 | 意思 | 主分析 |
| --- | --- | --- |
| Design change | 這個分析改了什麼 | — |
| Eligible cohort | 符合條件的人數 | 2,281 vs 4,851 |
| Before matching | 結局分析當下、有回應醫院中可用的人數 | 1,484 vs 2,894 |
| Matched | 配對後人數 | 780 vs 780 |
| 最右四欄 | AF 事件數（%）、HR（95% CI）、log-rank P | — |

- Frailty 列下面多一列 **all-cause death**：18 vs 29；HR 0.63（0.35–1.14）（主分析 0.51）

### Negative control outcomes

Negative control outcome＝「**藥物不可能影響，但要看醫生才會被診斷**」的病。如果 finerenone 組整體比較少被看、比較少被診斷，這些病也會較少（HR &lt; 1）。三個都追蹤 day 1–730、每組 780 人。

| 結局 | 為什麼選它 | 結果 |
| --- | --- | --- |
| Seborrheic keratosis | 要有醫師看皮膚才會被記錄 | 23 vs 27；HR 0.84（0.48–1.47） |
| Impacted cerumen | 要有人檢查耳朵才會被記錄 | 38 vs 34；HR 1.11（0.70–1.77），方向相反 |
| Presbyopia | 要看眼科或驗光才會被記錄 | 28 vs 34；HR 0.81（0.49–1.33） |

> [!warning] 綜合判讀：只能提供有限的安心
> - 三個 CI 都很寬，**連 HR 約 0.5 這麼大的差距都無法排除**；三個中兩個點估計 &lt; 1
> - 所以只能說「**==沒有看到明確的偵測差異==**」，不能說偵測差異不存在
> - 這些病**不需要 ECG**，和 AF 被發現的路徑不同

> [!important] Limitations 重點
> 要求檢驗值或更嚴格腎病定義的分析（K、UACR、established CKD），配對後只剩 310–465 對，事件太少看不到結果——而這些**正是臨床上最重要的族群**。

## Table S5（第 106–107 頁）：配對後族群 index 後的描述性指標

<div class="orig-fig" data-src="TriNetX/c27-originals/table-s5-p1.png,TriNetX/c27-originals/table-s5-p2.png" data-label="Table S5"></div>

**用意**：Figure 4 看「被發現 AF 的機會」；這張看 index 後的**其他照護**（合併用藥、另一種研究藥、驗 K），判斷之後的治療差異會不會影響 AF 與 hyperkalemia 的結果。

**怎麼看**：
1. 三個時間窗各自重新配對：day 1–30 每組 787、31–365 每組 876、366–730 每組 885（和 Figure 4 的人數不同）
2. 每列是「至少有一次紀錄」的人數（%）；分母包含提早結束追蹤的人
3. **RR**＝finerenone 比例 ÷ spironolactone 比例（1＝一樣）；**RD**＝兩組比例相減（百分點）
4. RR 的 CI 含 1，或 RD 的 CI 跨過 0 → 無法確定有沒有差異
5. 「–」＝至少一組 ≤10；「NA」＝兩組都是 0 人
6. **9 個指標 × 3 個時間窗＝很多比較** → 單一個「有差」的格子只能描述，不能當結論

| 指標 | 為什麼要看 | 結果 |
| --- | --- | --- |
| SGLT2 inhibitor | 可能影響 AF（**co-intervention**） | 三個時間窗差距都小、CI 跨過 0（day 31–365：39.5% vs 36.6%） |
| GLP-1 RA | 同上 | **Day 31–365 finerenone 較多**：34.1% vs 28.1%（RD 6.1，1.7 到 10.4）；其他時間窗差距小 → 可能是巧合；對 AF 的影響這篇沒分析 → limitations |
| Potassium binder、loop diuretic、thiazide、其他保鉀利尿劑 | 和 K 管理、水腫、HTN 有關 | 前 30 天 binder、loop 都 ≤10；thiazide 3.4% vs 5.3%（CI 跨 0）；day 31–365 loop 6.8% vs 9.4%（RR 0.73，0.53–1.01，邊緣） |
| **另一種研究藥** | 估計換藥或併用程度（換越多差異越被沖淡） | 比例都不高；**day 31–365：3.5% vs 1.7%**（RD 1.8，0.3 到 3.3）；這列 RR、RD 是研究團隊自己算的，Methods 要寫出算法 |
| **血鉀檢驗** | 驗得多，hyperkalemia 才容易被診斷 | **==前 30 天 finerenone 明顯較少：22.6% vs 31.8%==**（RR 0.71，0.60–0.84；RD −9.1）；之後差距小 |
| Venous potassium | 另一個 K 檢驗代碼 | 幾乎沒人有這種紀錄 |

> [!warning] 寫作提醒
> - 這些不是結局，只用來描述；寫「**在另外配對的族群中**」
> - 如果 hyperkalemia 的差異是驗 K 較少造成的，差異應該在前 30 天就出現；但 hyperkalemia 曲線前 3 個月幾乎重疊（Figure S1 E）→ **==驗 K 的差距不太能解釋 hyperkalemia 的差異==**
> - 但 hyperkalemia 是**診斷碼不是 K 值**，仍不能證明 finerenone 組 K 真的較低
> - 這些紀錄只說明「有沒有出現」，**不能證明換藥、併用、停藥或規則服藥**

## 相關筆記

- [[trinetx/c27-finerenone-af/index|C27 總覽]]
- [[trinetx/c27-finerenone-af/c27-3-results|③ 讀懂主文圖表]]
- [[trinetx/c27-finerenone-af/c27-5-discussion|⑤ 故事線與 Discussion]]

## 參考資料

- C27 教學資料包：研究發想與圖表解說（2026-11-21 版），「補充資料」部分。參考資料庫：`TriNetX/C27_教學資料包_研究發想與圖表解說.pdf`
