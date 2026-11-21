---
title: ⑤ 故事線、Discussion 與上台準備
aliases:
  - C27 Discussion
  - C27 名詞小抄
tags:
  - TriNetX
  - 研究設計
---

> [!abstract] 一句話重點
> - 圖表串成一條線：**誰進來 → 原本不同、配對後可比 → AF 較少但有警訊 → 敏感度分析 → 偏差檢查 → 四種解釋**
> - Discussion 要逐一談：**真的藥效、選藥差異（residual confounding）、偵測差異（detection bias）、事件少造成的不精確**
> - **==結論只能寫 association==**：不能寫 finerenone 預防 AF，也不能建議為了降低 AF 改選 finerenone

## 整篇的故事線（圖表怎麼串起來）

| # | 圖表 | 這一步說什麼 |
| --- | --- | --- |
| 1 | **Figure 1** | 誰被收進來，人數怎麼一路減少 |
| 2 | **Table 1** | 兩組原本不同（醫師選藥有傾向），配對後可比 |
| 3 | **Table 2、Figure 2** | Finerenone 組第一次 AF 紀錄較少（HR 0.49），但**差異大多在前 90 天**，**死亡也有一樣大的差異** |
| 4 | **Figure 3、Table S4** | 有結果的 5 個 alternative analyses 方向都和主分析相同，6 個因事件 ≤10 沒結果；精確度有限；針對潛在 HF 或 HTN 的兩個分析，HR 往 1 移動、CI 含 1 |
| 5 | **Figure 4、Table S5** | 前 30 天 finerenone 組**看診較少、驗 K 較少**，ECG 也較少但不精確 → AF 可能較晚被記錄；合併用藥差距大多小或不精確 |
| 6 | **Discussion** | 逐一討論四種可能解釋 |
| 7 | **結論** | Finerenone 起始和較低的第一次 AF 紀錄「**有關**」 |

## Discussion 的架構

### 1. 主要發現（第一段）

- 一句話講結果，**同時講警訊**：AF 較少（HR 0.49），但差距集中在前 90 天、死亡也少一半

### 2. 四種可能解釋（逐一討論）

| 解釋 | 支持的證據 | 反對或限制的證據 |
| --- | --- | --- |
| **真的藥效** | 和 FIDELIO-DKD（HR 0.71）、FINE-HEART（HR 0.83）、MRA meta-analysis 方向一致；day 91–730 分析 HR 0.51；frailty PSM 後 AF HR 0.45 沒變 | **==幾週內就少一半很難用藥效解釋==**；本篇效果比 RCT 大很多 |
| **選藥差異（residual confounding）** | **==死亡也少一半（HR 0.51）==**；death 曲線和 AF 一樣前半年就分開；配對前 spironolactone 組心臟超音波、高複雜度急診較多；排除 thiazide 或 NP 升高後 HR 往 1 移動 | Frailty PSM 後 AF HR 沒有縮小；E-value 3.49 |
| **偵測差異（detection bias）** | **==前 30 天看診較少==**（RD −4.1）、ECG 較少（不精確）；day 30 的 KM 差距已出現 | Negative control 沒看到明確差異（但 CI 很寬，且不需要 ECG） |
| **不精確（imprecision）** | 只有 42 個事件、CI 0.26–0.93；**==CI 上限的 E-value 只有 1.35==**；6 個 alternative analyses 看不到結果 | 主結果 CI 不含 1 |

### 3. 和文獻比較

- Placebo 對照 RCT：FIDELIO-DKD HR 0.71、FINE-HEART HR 0.83
- 其他 TriNetX 兩藥比較研究，也報告過**很大的死亡差異** → 提醒這類資料的 residual confounding

### 4. Strengths

- Active-comparator new-user design，模擬 target trial
- 排除 HF 與 spironolactone 的其他適應症 → 兩組是同一個臨床決定
- 354 個變項 PSM；11 個 alternative analyses、negative control、追蹤期間的偵測與照護描述

### 5. Limitations（逐條寫）

1. **Residual confounding**：未診斷的 HF、難控制的 HTN；死亡也少一半
2. **Detection bias**：前 30 天看診較少；EHR 只看得到「**第一次被記錄**」，不是 AF 真正開始的時間
3. **事件少、CI 寬**；6 個 alternative analyses 事件 ≤10 看不到結果
4. **要求檢驗值或嚴格 CKD 定義的族群**（K、UACR、established CKD）只剩 310–465 對、看不到結果——而這是臨床上最重要的族群
5. **K、eGFR 不強制要有檢驗值**；平台實際時間窗不確定
6. **Hyperkalemia 是診斷碼不是 K 值**
7. **只看第一次開的藥**，之後換藥、停藥不中止追蹤；無法確認規則服藥
8. **每次分析只用當次有回應的醫院**，沒回應的醫院重跑也補不回來
9. **死亡沒有當作 competing risk**，KM 略高估 AF 機率
10. GLP-1 RA 在 day 31–365 較多，對 AF 的影響沒有分析
11. 配對只代表配到的人（finerenone 約一半、spironolactone 約四分之一）

### 6. 結論

> [!danger] 結論的界線
> - ✅ 可以寫：finerenone 起始和較低的第一次 AF 或 flutter 紀錄**有關**（association）
> - ❌ 不能寫：**==finerenone 預防 AF==**
> - ❌ 不能寫：建議為了降低 AF 而**改選** finerenone

---

## 🎤 評審可能會問的問題

> [!info] 以下問答是依資料包內容自己整理的練習題，答案都可以在 ①–④ 找到依據

> [!question]- 為什麼不用「沒有用 MRA 的人」當對照組？
> - 和沒用藥的人比，差異多半來自病人本身（**confounding by indication**）
> - 兩組都是醫師決定「要加 MRA」的病人，病情比較接近 → **active comparator**

> [!question]- 為什麼要排除 heart failure？這樣結果還能推論到誰？
> - Spironolactone 是 HF 標準用藥，HF 本身又大幅增加 AF；不排除的話 spironolactone 組會塞滿 HF 病人，比較變成「有沒有 HF」
> - 推論範圍：**沒有 HF 紀錄**、用過 ACEi／ARB 的 T2DM 腎病病人，而且只代表**配對到**的這群人

> [!question]- 為什麼追 2 年不追 3 年？
> 1. Finerenone 2021-07 才上市，**只有 56% 追滿 2 年**，再延長人更少
> 2. 追越久，換藥稀釋越多
> 3. 要報 day 730 機率，那天每組至少要有 100 人且保留 20%
> - 補一句：「結果出來後看到差距大多在前 90 天，但這是事後才知道，不是選 2 年的理由」

> [!question]- 死亡也少了一半，你怎麼解釋？
> - 死亡和 AF 沒有直接關係，卻也少一半、曲線也是前半年就分開 → **兩組預後可能本來就不同**（residual confounding）
> - 加入 32 個 frailty 變項重新配對後，死亡 HR 從 0.51 變 0.63（CI 含 1），但 AF HR 0.45 沒有縮小
> - 不過配對族群和回應醫院都不同，不能把變化全部歸因於 frailty
> - 所以結論寫成 association

> [!question]- 差異集中在前 90 天，代表什麼？
> - 藥物在幾週內就讓 AF 少很多，不容易解釋
> - 可能：spironolactone 組**早期看診較多**，比較容易發現原本就有的 AF；或基線已有 AF 但還沒編碼
> - Figure 4：前 30 天 finerenone 組看診較少（79.4% vs 83.5%）
> - Lag window（day 91–730）HR 0.51，但和 Figure 2 不完全一致 →「只有早期有差」和「後期也有差」都沒有被確立

> [!question]- PH 假設不成立（P = 0.015），HR 還能用嗎？
> - 可以當作 **==2 年的平均摘要==**，但不能說「任何時間點都少一半」
> - 要搭配 KM 曲線說明差距在哪一段出現

> [!question]- E-value 是多少？代表什麼？
> - 點估計 **3.49**：沒量到的因素要同時讓「拿到 spironolactone」和「被記錄 AF」都達到約 3.49 倍，才能完全解釋掉 HR 0.49
> - CI 上限 **1.35**：只要約 1.35 倍就能讓 CI 碰到 1 → **對未測量干擾並不穩固**

> [!question]- Negative control 為什麼選這三個？結果怎麼解讀？
> - Seborrheic keratosis、impacted cerumen、presbyopia：藥物不會影響，但要看醫生才會被診斷
> - 三個 CI 都很寬，連 HR 約 0.5 都排除不了 → 只能說「**沒有看到明確的偵測差異**」
> - 而且這些病不需要 ECG，和 AF 的發現路徑不同

> [!question]- 為什麼 Figure 1 的 2,234 人和結局分析的 2,281 人不一樣？
> - **Criteria Analysis**（Figure 1，逐條排除）和 **Query Count**（結局分析）是兩次不同的計數，數字不會完全一樣，不是算錯
> - 再降到 1,484 是因為**每次執行只算當下有回應的醫院**

> [!question]- 為什麼很多 alternative analyses 沒有結果？
> - TriNetX 任一組事件 **≤ 10 就不釋出 HR**
> - 「–」是看不到，**不是沒差、也不是 0**；沒有結果的分析**不能寫成「結果一致」**

> [!question]- 這個結果會改變臨床決策嗎？
> - 差異若可信，選 MRA 時可以多考慮 AF；但目前只能說 association
> - **不能建議為了降低 AF 而改選 finerenone**；需要 RCT 或更多事件的研究確認

> [!question]- KM 的 2.25% 為什麼比 14/780＝1.8% 高？
> - 只有約 56% 追滿 2 年；1.8% 把沒追滿的人都當成沒得 AF
> - KM 估計的是「**如果每個人都追滿 2 年**」的機率

---

## 名詞小抄

| 名詞 | 白話解釋 |
| --- | --- |
| **Target trial emulation** | 先寫出理想 RCT 的設計，再用真實世界資料盡量照著模擬 |
| **Active comparator** | 對照組也用藥（另一種同目的的藥），不是沒用藥的人 |
| **New user** | 只收第一次開始用藥的人，所有人從同一天開始算 |
| **Index date（time zero）** | 第一次處方那天；追蹤從隔天開始 |
| **PSM** | 依「拿到某種藥的機率」把兩組條件相近的人一對一配起來 |
| **Caliper** | 配對時兩人 propensity score 可接受的最大差距 |
| **SMD** | 兩組差距的標準化數值；**&lt; 0.10** 視為平衡 |
| **HR** | 追蹤期間兩組發生事件的速度比；&lt; 1＝finerenone 較少 |
| **95% CI** | 真正數值可能的範圍；HR 的 CI 含 1 就不能排除兩組一樣 |
| **P 值** | 假設兩組沒差，看到這麼大差異的機率；不代表差異大或藥有效 |
| **RR** | 比例相除；**不考慮追蹤時間**（和 HR 不同） |
| **RD** | 比例相減，單位百分點；−4.1＝每 100 人少約 4 人 |
| **Censoring（設限）** | 發生事件前就離開追蹤；KM 和 HR 從那天起不再算他 |
| **Log-rank test** | 比較兩條 KM 曲線是否不同的檢定 |
| **Kaplan–Meier** | 隨時間累積的事件機率曲線 |
| **PH test** | 檢查 HR 是否隨時間固定；P &lt; 0.05＝不固定，HR 只能當平均摘要 |
| **E-value** | 沒測到的干擾因子需要多強，才能把結果解釋掉 |
| **Negative control outcome** | 藥物理論上不會影響的結局；也有差 → 暗示偏差 |
| **Lag window** | 不算前一段時間的事件（本篇不算前 90 天） |
| **Detection（ascertainment）bias** | 一組被檢查得比較多，結局就比較容易被記錄 |
| **Confounding by indication** | 醫師依病情選藥，造成兩組病人本來就不同 |
| **Prevalent user bias** | 收了已經用很久的人，結果偏好看 |
| **Residual confounding** | 配對或調整後仍殘留的干擾 |
| **Competing risk** | 先發生就讓結局不可能發生的事件（例如死亡）；本篇沒有另外處理 |
| **HCO** | TriNetX 裡的醫療機構；每次執行時有回應的家數可能不同 |
| **≤10** | 10 人以下只顯示 ≤10，實際數字未知，**不等於 0 或 10** |

## 相關筆記

- [[trinetx/c27-finerenone-af/index|C27 總覽]]
- [[trinetx/c27-finerenone-af/c27-1-idea|① 研究發想]]
- [[trinetx/c27-finerenone-af/c27-2-design|② 收案與分析]]
- [[trinetx/c27-finerenone-af/c27-3-results|③ 讀懂主文圖表]]
- [[trinetx/c27-finerenone-af/c27-4-supplement|④ 補充資料]]

## 參考資料

- C27 教學資料包：研究發想與圖表解說（2026-11-21 版），第五部分「整篇的故事線」、第六部分「名詞小抄」。參考資料庫：`TriNetX/C27_教學資料包_研究發想與圖表解說.pdf`
- 評審問答為依資料包內容自行整理的練習題
