---
title: ① 研究發想（寫 Introduction）
aliases:
  - C27 研究發想
tags:
  - TriNetX
  - 研究設計
---

> [!abstract] 一句話重點
> - 臨床上真正的問題是「**==兩種 MRA 選哪一種==**」，不是「要不要用 MRA」
> - Knowledge gap：RCT 都**==和 placebo 比==**；真實世界的兩藥比較看 AF 的，都是**已經有心臟病**的人
> - 每個設計選擇都是在對付一種偏差：**active comparator、new user、排除 HF、排除 spironolactone 的其他用途**
> - 事前就要估事件數：**HR 的精確度主要看事件數**

## 1. 臨床場景

T2DM＋CKD 病人，已經在用 ACE inhibitor 或 ARB，醫師考慮再加一種 **mineralocorticoid receptor antagonist（MRA）**：

| | Finerenone | Spironolactone |
| --- | --- | --- |
| 類別 | Nonsteroidal MRA | Steroidal MRA |
| 美國核准 | **2021-07-09**，用於 T2DM 合併 CKD | 老藥、便宜 |
| 證據 | 大型 RCT 支持腎臟與心血管效益 | 常用於 HF、resistant hypertension、primary aldosteronism、水腫，也用來降 albuminuria |

→ 臨床上常見的抉擇是「**加哪一種 MRA**」。

## 2. 已知什麼（Introduction 前兩段）

| 已知 | 文獻 |
| --- | --- |
| **Diabetes 增加 AF**（meta-analysis，RR 約 1.39） | Huxley RR, et al. *Am J Cardiol* 2011;108:56–62（PMID 21529739） |
| **CKD 增加 AF**：腎功能越差、UACR 越高，AF 越多 | Alonso A, et al. *Circulation* 2011;123:2946–2953（ARIC；PMID 21646496） |
| AF 帶來更多 death、HF、stroke | Odutayo A, et al. *BMJ* 2016;354:i4482（PMID 27599725） |
| CKD 病人發生 AF 後，進展到 **ESKD** 較多 | Bansal N, et al. *Circulation* 2013;127:569–574（PMID 23275377） |
| Finerenone vs **placebo**：FIDELIO-DKD 降低腎臟複合結局 | Bakris GL, et al. *NEJM* 2020;383:2219–2229（PMID 33264825） |
| Finerenone vs **placebo**：FIGARO-DKD 降低心血管複合結局 | Pitt B, et al. *NEJM* 2021;385:2252–2263（PMID 34449181） |
| FIDELIO-DKD 預設分析：new-onset AF 或 flutter 較少（**HR 0.71**） | Filippatos G, et al. *JACC* 2021;78:142–152（PMID 34015478） |
| FINE-HEART 合併分析（FIDELIO＋FIGARO＋FINEARTS-HF）：AF 也較少（**HR 0.83**） | Pabon MA, et al. *JACC* 2025;85:1649–1660（PMID 40306837） |
| MRA 整類的 meta-analysis：AF 較少 | Oraii A, et al. *Eur Heart J* 2024;45:756–774（PMID 38195054）；Karakasis P, et al. *Curr Probl Cardiol* 2024;49:102742（PMID 39002620） |

## 3. 還不知道什麼（knowledge gap）

1. 上面的 RCT **都是和 placebo 比**，回答不了「finerenone 和 spironolactone 誰的 AF 比較少」
2. 已發表的真實世界 finerenone vs spironolactone 研究，看的是**心血管、腎臟或死亡**：
   - CKD＋T2DM 的 target trial emulation：Wang CA, et al. *Nat Commun* 2025;16:9641（PMID 41173939）
   - T2DM 的心血管事件：Chen YH, et al. *Eur Heart J Cardiovasc Pharmacother* 2025;11:610–619（PMID 40503674）
   - T2DM＋CKD、沒有 HF，和 steroidal MRA 比：Kishimori T, et al. *ESC Heart Fail* 2026（PMID 42902439）
3. 有看 AF 或心律不整的比較，族群都**已經有心臟病**：
   - HFpEF＋CKD（會議摘要）：Okorigba EM, et al. *JACC* 2026;87(13 Suppl):A742–A743（DOI 10.1016/j.jacc.2026.02.1925）
   - HF＋CKD＋DM：Okunlola AO, et al. *Cureus* 2025;17:e97588（PMID 41293605）
   - MI 後：Rhabneh L, et al. *Pol Merkur Lekarski* 2026;54:488–499（PMID 42726831）

> [!important] 這篇要補的缺口
> **==沒有 HF 的 T2DM 腎病病人==**中，兩種 MRA 對 AF 的**直接比較**很少。

## 4. 研究問題（PICO）

| 元素 | 內容 |
| --- | --- |
| **P** | 成人 T2DM，有腎病證據，index 前一年內用過 ACEi 或 ARB；**沒有 AF、atrial flutter 或 HF 紀錄** |
| **I** | 第一次使用 finerenone |
| **C** | 第一次使用 spironolactone（**active comparator**） |
| **O** | Index 後 **day 1–730** 第一次出現 AF 或 atrial flutter 診斷碼（**ICD-10-CM I48**） |
| 設計 | **Active-comparator new-user design**，模擬一個 target trial；1:1 PSM |

- 假說是**雙尾**：事先不知道哪一種藥的 AF 比較少

## 5. 每個設計選擇背後的理由

> [!tip] 報告時的講法
> 每個設計選擇都可以講成「**我們擔心 X 偏差，所以做 Y**」。評審最常問的就是「為什麼這樣設計」。

| 設計選擇 | 對付什麼問題 | 為什麼 |
| --- | --- | --- |
| **Active comparator**（另一種 MRA），不用沒用藥的人 | **==Confounding by indication==** | 兩組都是醫師決定「要加 MRA」的病人，病情接近；和沒用藥的人比，差異多半來自病人本身 |
| **只收 new user** | **==Prevalent user bias==** | 兩組有同一個起點（time zero＝第一次處方日）；已經用很久的人是「能耐受、沒出事」的一群，結果會偏好看 |
| **排除 HF** | Spironolactone 組被 HF 塞滿 | HF 是 spironolactone 標準適應症，HF 本身又大幅增加 AF；不排除，比較會變成「有沒有 HF」 |
| **排除 spironolactone 的其他用途** | 不是同一個臨床決定 | Resistant HTN、hyperaldosteronism、水腫或 loop diuretic、肝硬化腹水、antiandrogen 用途（acne、hirsutism）處方目的不同 |
| **Index 前一年內要有 ACEi／ARB** | 背景治療一致 | Finerenone 的 RCT 都是在 RAS blockade 之上再加藥；這只代表**之前有紀錄**，不代表 index 當時還在用 |
| **排除 AF 病史與相關治療** | 只看**新**出現的 AF | 抗心律不整藥、digoxin、AF 手術都暗示已經有 AF |
| **排除 K 異常與 eGFR ≤ 29.99** | 兩組都在能開始 MRA 的範圍 | 但**不強制要有檢驗值**，沒驗的人仍可收案 → 寫進 limitations |
| **研究期間 2021-07-09 至 2025-12-31** | 公平起點、資料完整 | 起點是 finerenone 美國核准日；終點往前留約 6 個月讓最近的資料補齊 |
| **結局寫成「第一次被記錄的」AF** | 誠實描述 EHR 的限制 | EHR 只看得到診斷碼出現的日期，不是心律不整真正開始的時間 |

### 為什麼追蹤 2 年（730 天）？

1. **能追滿的人不夠多**：finerenone 2021-07 才上市，越晚開藥的人能追的時間越短；**==每組 780 人中只有 438 人（56%）追到 day 730==**，再延長人數更少
2. **追越久，換藥稀釋越多**：主分析只看第一次開的藥，之後換藥或停藥不中止追蹤（類似 intention-to-treat）；時間拉長兩組越來越像
   - 事後資料（不是選 2 年的依據）：另外配對族群在 day 31–365，finerenone 組 3.5% 出現 spironolactone 紀錄，spironolactone 組 1.7% 出現 finerenone 紀錄（Table S5）
3. **絕對風險要有人數支撐**：要報 day 730 的事件機率，那天每組**至少 100 人**還在追蹤，且至少保留 20%

> [!warning] Pitfall：不要用事後結果合理化設計
> 也考慮過追 3 年，兩種都說得通；選 2 年是「追得夠久、事件夠多」和「人數夠、換藥少」之間的取捨。結果出來後看到差距大多在前 90 天，延長追蹤不是結論的關鍵——**==但這是事後才知道的，不能拿來當選 2 年的理由==**。

## 6. 題目成立前要問的四個問題

| # | 問題 | 這篇的回答 |
| --- | --- | --- |
| 1 | **有沒有人已經回答過？** | 查文獻，確認沒有同族群、同兩藥、同結局的真實世界研究 |
| 2 | **兩組是不是同一個臨床決定？** | 共同條件（T2DM、腎病、ACEi／ARB）＋排除其他適應症 → 回到「要加哪一種 MRA」 |
| 3 | **TriNetX 做得出來嗎？** | 藥物、診斷、檢驗值和時間窗，都要能用平台原生的條件寫出來 |
| 4 | **結果會改變決定嗎？** | 差異可信 → 選 MRA 時可多考慮 AF；精確地沒有差異 → 少一個考量；**==無論如何都不能說 finerenone「預防」AF==** |

## 7. 事前估算人數與事件數

| 階段 | 數字 |
| --- | --- |
| 探索時粗略計數（還沒套用全部條件） | Finerenone 約 5,653 人、spironolactone 約 30,335 人 |
| 事先規定的門檻 | **人數較少的一組至少 800 人**才往下做 |
| 事前預估 | 配對後約 650–940 對，主要結局約 35–50 個事件 |
| 實際結果 | **780 對、42 個事件** |

> [!tip] 為什麼要估事件數？
> - HR 的精確度**==主要看事件數==**，不是看總人數
> - log HR 的標準誤約 **2 ÷ √(事件數)**
> - 42 個事件時，95% CI 上下限約差 **3.5 倍**（本篇 0.26–0.93）
> - 報告時可以主動說：「CI 寬是因為事件數只有 42 個，這是事前就預估到的」

## 相關筆記

- [[trinetx/c27-finerenone-af/index|C27 總覽]]
- [[trinetx/target-trial-emulation|目標試驗模擬 Target Trial Emulation（方法學）]]
- [[trinetx/c27-finerenone-af/c27-2-design|② 收案與分析（Methods）]]
- [[cardiology/atrial-fibrillation/index|心房顫動 Atrial Fibrillation]]

## 參考資料

- C27 教學資料包：研究發想與圖表解說（2026-11-21 版），第一部分「研究發想」。參考資料庫：`TriNetX/C27_教學資料包_研究發想與圖表解說.pdf`
- 文中各文獻依資料包所列（作者、期刊、年份、PMID）
