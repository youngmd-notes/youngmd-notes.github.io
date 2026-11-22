---
title: ⑥ 用 Target Trial 的眼光逐項檢查 C27（討論用）
aliases:
  - C27 TTE 檢查
  - C27 方法學檢查
tags:
  - TriNetX
  - Target trial emulation
  - 研究設計
---

> [!abstract] 一句話重點
> - 把 [[trinetx/target-trial-emulation|Target Trial Emulation 方法學]]的 15 個檢查點，逐項套到 C27：**TTE 要求什麼 → C27 怎麼做 → 做到什麼 → 還有什麼漏洞 → 可以問老師什麼**
> - **設計面大致做到了**：time zero 同步、new user、active comparator、flow diagram、Table S1／S2
> - **真正的弱點都在「資料偏差」**：==residual confounding（死亡也少一半）、detection bias（前 30 天看診較少）、competing risk、missing data==
> - 幾個值得和老師深入討論的觀念：**配對後的 estimand 是誰？**、**「沒有紀錄」不等於「沒有病」**、**能不能用 causal language？**
> - 最後附**==明天討論的問題清單==**（依優先順序）

> [!info] 怎麼讀這篇
> - 每一項都分成五格：**📘 TTE 要求**（四篇文獻）→ **🔍 C27 怎麼做**（資料包）→ **✅ 做到的**→ **⚠️ 漏洞**→ **💬 問老師**
> - 「⚠️ 漏洞」和「💬 問老師」裡有些是**我依方法學推論出來的討論點**，資料包沒有寫，會標 **💭（推論）**；明天請以老師的判斷為準

## 一頁總覽

| # | TTE 概念 | C27 | 評價 |
| --- | --- | --- | --- |
| 1 | Time zero 同步 | Index＝第一次處方日；條件在 day 0 或之前確認；結局從 day 1 算 | ✅ 設計對；💭「沒紀錄≠沒病」 |
| 2 | New user | 之前沒有該藥或 eplerenone；兩組互斥 | ✅；💭 look-back 長度不一 |
| 3 | Active comparator | Spironolactone | ✅；💭 開藥者、費用、適應症仍可能不同 |
| 4 | Time zero 選擇 | 第一次處方 | ✅ |
| 5 | Causal contrast | 第一次開的藥，之後不管（ITT 類比） | ⚠️ 沒有 per-protocol |
| 6 | Confounding 調整 | 1:1 PSM，354 個變項 | ⚠️ 無法驗證；死亡 HR 0.51 |
| 7 | Estimand 的族群 | 配對到的人 | 💭 只代表約一半的 finerenone、四分之一的 spironolactone 使用者 |
| 8 | Negative controls | 三個就醫相關的診斷 | ✅ 有做；⚠️ CI 寬、不走 ECG 路徑 |
| 9 | 結局偵測 | 第一次 I48 代碼；Figure 4 檢查看診與 ECG | ✅ 正視；⚠️ 前 30 天看診較少 |
| 10 | Competing events | 死亡沒有另外處理 | ⚠️ 寫進 limitations；💭 方向分析 |
| 11 | 絕對與相對效果 | HR＋day 730 KM 差距 | ✅；⚠️ 差距沒有 CI |
| 12 | Flow diagram | Figure 1 | ✅；⚠️ 兩次計數、HCO 回應 |
| 13 | Specification ↔ emulation | Table S2 | ✅ |
| 14 | TARGET checklist | Table S1 | ✅；💬 註冊、程式碼分享 |
| 15 | Missing data | K、eGFR、UACR 不強制 | ⚠️ TARGET 11 要報 missing 頻率 |
| 16 | Pragmatic、不盲 | EHR、醫師知道開什麼藥 | 結論寫 association；💬 causal language？ |

---

## 1. Time zero 同步

**📘 TTE 要求**
- 符合條件、被分派、開始追蹤三件事**同一個時間點**
- 收案條件只能用 time zero **當時或之前**的資訊；結局只算 time zero **之後**
- 錯位會造成 prevalent user bias 和 immortal time bias（HRT 與 CHD、statin 與 cancer 的教訓）

**🔍 C27 怎麼做**（Table S2、Method S1）
- Time zero（day 0）＝2021-07-09 到 2025-12-31 之間，**第一次**出現 finerenone 或 spironolactone 處方紀錄的日期
- 每個收案、排除條件都有自己的 look-back window，**全部在 day 0 或之前結束**
- 結局從 **day 1** 開始算；day 0 當天的 AF 紀錄不算結局（而且任何時間含 day 0 的 AF 會被排除）

**✅ 做到的**
- 沒有用「追蹤期間才發生的事」來選人或分組 → 沒有 immortal time
- 所有人從同一個起點開始追蹤 → 沒有 prevalent user bias

**⚠️ 漏洞**
- **處方紀錄日 ≠ 真正開始吃藥的日子**：EHR 記的是開立，不一定有領藥或服用（💭）
- 💭 **「沒有紀錄」不等於「沒有病」**：排除條件靠的是「網絡裡有沒有這個代碼」。如果病人在網絡外的醫院被診斷過 AF 或 HF，TriNetX 看不到 → 這些人會被當成「沒有 AF」收進來，之後一被記錄就算成「新的 AF」
  - 這正好可以解釋**==為什麼差距集中在前 90 天==**：早期事件可能有一部分是**基線就有、只是沒被記錄**的 AF
  - 如果 spironolactone 組（心臟超音波、急診較多）更常有這種「沒記錄的既有病」，偏差方向就是**讓 finerenone 看起來比較好**
- Hernán & Robins 2016 建議：可以只收「**基線前就固定在系統裡看診**」的人，讓「沒有紀錄」比較接近「真的沒有」

**💬 問老師**
1. 有沒有要求 index 前一段時間（例如前一年）在同一個網絡至少有幾次就診？如果沒有，能不能做一個 sensitivity analysis？
2. 處方紀錄是「開立」還是「調劑」？TriNetX 能區分嗎？

---

## 2. New user（initiators）

**📘 TTE 要求**
- 只比較「**開始**」某策略的人（initiators），才能模擬 RCT 的 ITT
- 收「正在用藥的人」會讓早期出事的人被篩掉

**🔍 C27 怎麼做**
- Index 前**任何時間**有同一種藥 → 排除
- Index **當天或之前**有另一種研究藥 → 排除（兩組互斥）
- Index 前有 **eplerenone** → 排除；其他 MRA「任何時間」也排除（Figure 1 那一列：370 vs 5,632 人）
- ACEi／ARB **不要求是新用的**：只要 index 前一年內有紀錄（背景治療）

**✅ 做到的**
- 兩組都是 MRA 的 new user，比較的是「**開始** finerenone vs **開始** spironolactone」

**⚠️ 漏洞**
- 💭「任何時間」的 look-back 實際上**受限於每個人在網絡裡的資料長度**：剛進入網絡的人，可能早就在別處用過 spironolactone，但這裡看不到 → 被誤當成 new user
  - Spironolactone 是老藥，這種「看起來新、其實是舊」的人在 spironolactone 組可能比較多（💭）
- ACEi／ARB「一年內有紀錄」不代表 day 0 還在用（資料包已寫進 limitations）

**💬 問老師**
1. 有沒有規定最短 look-back（例如 index 前至少有 1 年的資料）？
2. 稿件要不要明寫「new user 的定義受限於資料可見的期間」？

---

## 3. Active comparator

**📘 TTE 要求**
- Hernán & Robins 2016：和另一種有效治療比，confounding **比和「不治療」比輕微得多**
- 兩組最好是**同一個臨床決定**下的不同選擇

**🔍 C27 怎麼做**
- 對照組是 **spironolactone**，不是沒用 MRA 的人
- 共同條件：T2DM＋腎病證據＋ACEi／ARB → 都是「考慮加 MRA」的病人
- 排除 spironolactone 的其他適應症：HF、resistant HTN、hyperaldosteronism、水腫／loop diuretic、肝硬化腹水、antiandrogen 用途

**✅ 做到的**
- 84,338 位 spironolactone 使用者被排除到 4,677 人 → 大部分「其他適應症」的人被拿掉了
- 兩組回到「**要加哪一種 MRA**」的決定

**⚠️ 漏洞**（多半是 💭 推論，可以和老師討論）
- **開藥的人可能不同**：finerenone 多由腎臟科或內分泌科開，spironolactone 可能更多由心臟科或家醫科開 → 看診頻率、ECG 使用習慣不同 → 連到 detection bias
- **費用與保險**：finerenone 較貴 → 可能和社經地位、整體健康狀態有關（unmeasured）
- **配對前 Asian 23.0% vs 5.8%**：暗示可能有**特定醫院或地區**偏好開 finerenone（site clustering）
- **未編碼的適應症**：難控的 HTN 沒有被編碼成 resistant HTN 的人，仍可能被開 spironolactone → 資料包用「排除 thiazide」分析檢查（HR 0.61，CI 含 1）

**💬 問老師**
1. TriNetX 能看到**開藥科別**嗎？如果可以，能不能放進 PSM，或限制同一科別開藥的人？
2. 稿件 Discussion 要不要提「開藥科別與看診習慣」這個可能的 confounder？

---

## 4. Time zero 的選擇

**📘 TTE 要求**
- 同一個人可能在很多時間點都符合條件；兩種無偏差的做法：**選一個時間點**（例如第一次符合），或**所有時間點都用**（sequential trials）

**🔍 C27 怎麼做**
- 每個人只用**第一次**開始 MRA 的那一天

**✅ 做到的**
- 「開始用藥」本身就是 time zero 的定義，每個人只會有一次 → 不需要 sequential trials

**⚠️ 漏洞**
- 沒有明顯漏洞
- 💭 若改成「同時比較開始 MRA vs 沒開始」才需要 sequential trials 或 cloning；這也說明 active comparator 設計讓 time zero 問題變簡單

**💬 問老師**
- 不需要特別討論；評審問到時，可以說「兩組都是 initiators，time zero 自然對齊，不需要 cloning」

---

## 5. Causal contrast：ITT vs per-protocol

**📘 TTE 要求**
- 要明確寫出估的是 **ITT**（分派的效果）還是 **per-protocol**（完全照做的效果）
- Per-protocol 需要調整**隨時間變化的 confounders**，通常要 g-methods（IPW、g-formula）
- 「刪掉沒照做的人」不是正確的 per-protocol

**🔍 C27 怎麼做**
- 主分析只看**第一次開的藥**；之後換藥、停藥**不中止追蹤**（資料包寫「類似 intention-to-treat」）
- Table S5：day 31–365，finerenone 組 3.5%、spironolactone 組 1.7% 出現另一種研究藥紀錄
- Alternative analysis：只追到 day 365（換藥較少、較接近「真的在用」）→ 事件 ≤10，沒有結果

**✅ 做到的**
- ITT 類比清楚，換藥比例低 → **交叉換藥造成的稀釋不大**

**⚠️ 漏洞**
- **==沒有 per-protocol effect==**：TriNetX 只能做 baseline PSM＋Cox，做不到隨時間變化的加權
- **停藥和服藥遵從度完全看不到**：「有處方紀錄」不能證明有在吃（Table S5 寫得很清楚）
- 💭 RCT 的 ITT 包含「被分派但從沒吃藥」的人；這裡的對應是「被開立」的人，概念接近但不完全相同

**💬 問老師**
1. 稿件裡要怎麼稱呼這個 contrast？「effect of initiating」還是「ITT analogue」？
2. Limitations 要不要明確寫「無法估計 per-protocol effect，因為平台不支援時間變化的加權」？

---

## 6. Confounding 調整

**📘 TTE 要求**
- 隨機分派只能靠 **conditional exchangeability**（調整後沒有未測量的 confounding）來模擬
- 關鍵是**有沒有 confounder 資料**，不是用哪種調整方法
- 要寫出選了哪些 baseline 變項、為什麼（TARGET 7g）

**🔍 C27 怎麼做**
- 1:1 greedy nearest neighbor PSM，caliper 0.1 pooled SD，**354 個變項**（人口學、診斷、檢驗與生命徵象、用藥、醫療利用含 ECG、Holter、心臟超音波）
- 配對後可驗證的 SMD **全部 < 0.10**
- 檢查殘存 confounding：frailty-augmented PSM（加 32 個虛弱代碼）、排除 thiazide、排除 NP 升高、E-value

**✅ 做到的**
- 變項非常完整，連「醫療利用」都放進去（間接平衡「被檢查的機會」）
- 有針對特定 confounder 設計的 alternative analyses

**⚠️ 漏洞**
- **==死亡 HR 0.51==**：和 AF 一樣大，而且曲線也是前半年就分開 → **兩組預後可能本來就不同**
- **E-value 的 CI 上限只有 1.35** → 不需要很強的未測量因素就能讓結果失去統計意義
- 💭 可能沒量到的：真正的 BP 控制程度、未診斷的 HF、社經地位、開藥科別、虛弱程度（frailty 代碼只抓得到被編碼的）
- 平衡的是「**有紀錄的**」特徵；K、eGFR 的實際時間窗不確定（Table 1 註腳）

**💬 問老師**
1. 死亡也少一半，Discussion 要怎麼寫才不會削弱整篇？還是正好要誠實強調？
2. 有沒有考慮用「**AF or death** 的複合結局」或「把死亡當 negative control」來呈現？

---

## 7. 💭 Estimand 的族群：配對後到底在估誰的效果？

> [!important] 這一點資料包有提到，但值得深入談
> TARGET 說 causal estimand 由 **eligibility criteria** 定義「結果適用於誰」。但 PSM 會**再篩一次人**。

**📘 TTE 要求**
- TARGET 6a：eligibility criteria 定義 target population
- TARGET 9：報告調整前後的 baseline 特徵
- Positivity：每種變項組合的人都要有機會接受兩種藥

**🔍 C27 怎麼做**
- Finerenone 1,484 人中配到 **780（約 53%）**；spironolactone 2,894 人中配到 **780（約 27%）**
- 資料包已寫：「結果只代表配對到的人」

**⚠️ 漏洞**（💭 推論）
- 配不到的 finerenone 使用者，代表**沒有相似的 spironolactone 使用者**（例如 SGLT2i 使用率特別高、Asian 比例高的人）→ positivity 可能有問題
- 所以這篇估的不是「所有 finerenone 使用者」的效果，而是「**==兩組重疊區域==**」的效果
- 和 target trial 的 eligibility 定義的族群**不完全一樣** → TARGET 16（limitations）要求討論 target trial 和模擬的差異

**💬 問老師**
1. 稿件要怎麼描述這個族群？「matched cohort」就好，還是要說明它比較接近哪一群人？
2. 配不到的人和配到的人特徵差多少？要不要補一張比較表？

---

## 8. Negative outcome controls

**📘 TTE 要求**
- Hernán & Robins 2016：選一個藥物**不可能影響**、但和主要結局**有相同偏差來源**的結局
- 如果 negative control 也有差 → 暗示有 confounding 或偵測偏差

**🔍 C27 怎麼做**
- Seborrheic keratosis、impacted cerumen、presbyopia（day 1–730，每組 780 人）
- HR 0.84（0.48–1.47）、1.11（0.70–1.77）、0.81（0.49–1.33）

**✅ 做到的**
- 這三個都是「**要看醫生才會被診斷**」的病 → 檢查**整體就醫機會**是否不同
- 沒有明顯差異

**⚠️ 漏洞**
- 三個 CI 都很寬，**連 HR 約 0.5 都排除不了** → 只能有限地安心
- 這些病**不需要 ECG**，和 AF 被發現的路徑不同 → 抓不到「心律檢查頻率不同」造成的偏差
- 💭 也沒辦法偵測「**預後本來就不同**」的 confounding（死亡差異那種）
- 💭 Hernán 提到的其他方法這篇沒做：**treatment control**（換一種預期沒效果的藥比）、**reversed target trial**（比較繼續 vs 停藥）

**💬 問老師**
1. 💭 有沒有可能找一個「**需要 ECG 才會被發現、但 MRA 不影響**」的 negative control？（例如某些傳導異常代碼？需要老師判斷是否真的不受 MRA 影響）
2. 稿件要怎麼寫 negative control 的結論，才不會被評審說「CI 那麼寬，等於沒做」？

---

## 9. 結局偵測（outcome ascertainment）

**📘 TTE 要求**
- RCT 可以系統性、盲性地確認結局；觀察資料不行，因為醫師知道病人用什麼藥
- 如果某組被**檢查得比較多**，結局就會比較常被診斷，**即使藥物完全沒有效**
- 結局代碼最好有**驗證**（TARGET 7e）

**🔍 C27 怎麼做**
- 結局＝**第一次被記錄**的 I48 代碼（不是 AF 真正開始的時間）
- Figure 4：day 1–30 **任何看診** 79.4% vs 83.5%（RD −4.1，−8.0 到 −0.2）；ECG／Holter 3.3% vs 5.3%（不精確）
- Alternative analyses：day 1–30（事件 ≤10）、day 91–730 lag window（HR 0.51）

**✅ 做到的**
- **主動檢查偵測偏差**，而且把結局誠實命名為「first **recorded** AF」——這是很多 TriNetX 研究沒做到的

**⚠️ 漏洞**
- 前 30 天 finerenone 組看診較少 → **==早期 AF 可能較晚被記錄==** → 對得上 Figure 2 day 30 就分開
- I48 代碼的準確度（PPV）在 TriNetX 沒有驗證 → 💭 可以引用其他 EHR 研究的 I48 驗證文獻
- Figure 4 只看「有沒有紀錄」，不是次數；ECG 也可能是 AF 診斷**之後**才做的

**💬 問老師**
1. 有沒有 I48 代碼在 EHR 的驗證研究可以引用（TARGET 7e）？
2. 💭 能不能做「**至少兩次 I48 代碼**」或「I48＋抗凝血劑處方」的嚴格結局定義，當作 sensitivity analysis？

---

## 10. Competing events（死亡）

**📘 TTE 要求**
- TARGET 6f：有 competing events 時，要在 causal contrast **裡面**寫清楚怎麼處理
- 死亡後就不可能再被記錄 AF → 死亡是 AF 的 competing event

**🔍 C27 怎麼做**
- 死亡沒有另外處理：Cox 和 KM 都把死亡當成「離開追蹤」（censoring）
- 資料包已寫：KM 會**略為高估** AF 機率，所以寫「KM 估計的事件機率」，不寫 cumulative incidence

**✅ 做到的**
- 已寫進 limitations，用詞也正確

**⚠️ 漏洞**（💭 方向分析，可以拿來和老師討論）
- 把死亡當 censoring 的 Cox HR，估的是 **cause-specific hazard ratio**：「還活著、還在追蹤的人當中，AF 發生的速度比」→ 這本身是合理的 estimand，只是稿件要寫清楚
  - 死得多或少，不會直接改變這個「速度」；死亡者只是之後不再貢獻追蹤時間
- 受影響的是 **KM 的絕對風險**：KM 假設死者「之後仍可能得 AF」，所以會高估；**死亡越多的那一組高估越多**
  - Spironolactone 組死亡較多（27 vs 14）→ 它的 4.07% 被高估得比較多 → **真正的累積發生率差距應該比 −1.82 個百分點略小**
  - 但兩組死亡都只有約 2–4%，影響幅度應該不大
- 所以 competing risk **不是「finerenone AF 較少」的主要解釋**；它主要影響絕對風險的數值與用詞（KM 機率 vs cumulative incidence）
- 但「死亡較少」本身仍是 residual confounding 的警訊（見第 6 項）

**💬 問老師**
1. 稿件要不要明確寫出「HR 是 cause-specific」？
2. 能不能報 **AF or death 的複合結局**，讓讀者看到兩者合起來的差異？

---

## 11. 絕對與相對效果

**📘 TTE 要求**
- TARGET 12–13：報告各組**絕對風險隨時間**＋**相對與絕對效果**，都要有**精確度**
- Hernán 2022（JAMA）：只給 HR 對臨床決策幫助有限，最好給每組的累積風險曲線與差距

**🔍 C27 怎麼做**
- HR 0.49（0.26–0.93）
- Day 730 KM：2.25% vs 4.07%，差距 −1.82 個百分點
- Figure 2：day 30、90、180、365、730 的累積機率

**✅ 做到的**
- 相對＋絕對都有，還有多個時間點

**⚠️ 漏洞**
- **==絕對差距 −1.82 沒有 95% CI==**（資料包已註明「只能描述」）→ 不完全符合 TARGET 13
- TriNetX **不提供 number at risk** → 用 Figure S2 代替
- 💭 −1.82 個百分點換成 NNT 約 55，但沒有 CI、而且有偏差疑慮，**不建議在稿件裡寫 NNT**

**💬 問老師**
1. 絕對差距能不能用 KM 各組的 CI 粗略算出差距的 CI？還是維持「只描述」？
2. 摘要裡要放絕對差距嗎？

---

## 12. Flow diagram

**📘 TTE 要求**
- TARGET 8：報告評估、符合、分派的人數，**強烈建議 flow diagram**

**🔍 C27 怎麼做**
- Figure 1：77 家醫療機構、約 1.47 億人 → 6,719／84,338 → 逐條排除 → 2,234／4,677（Criteria Analysis）→ 2,281／4,851（Query Count）→ 1,484／2,894（當次有回應的醫院）→ 780／780

**✅ 做到的**
- 每一條排除條件的人數都列出來，讀者看得到 spironolactone 大部分用在別的適應症

**⚠️ 漏洞**
- **兩次計數不一致**（2,234 vs 2,281）、**每次分析回應的醫院不同** → 評審一定會問，Results 一定要解釋
- 排除條件**依序套用**，每列人數受順序影響（例如 AF 那列只有 707 人，因為同時有 HF 的已經在前面被算走）

**💬 問老師**
1. Figure 1 要不要加一行註解，直接說明 Criteria Analysis 和 Query Count 是兩次計數？
2. 沒回應的醫院比例大概多少？稿件不寫家數，但老師要不要心裡有數以備評審問？

---

## 13. Specification ↔ emulation 對照（Table S2）

**📘 TTE 要求**
- TARGET 6–7：target trial 的每個要素，**左右並排**寫出「理想」和「實際怎麼對應」
- Hernán 2025：estimand（前 6 項）、identifying assumptions、estimator 三層

**🔍 C27 怎麼做**
- Table S2（補充資料第 88–91 頁），左欄理想 RCT、右欄 TriNetX 對應
- 例如 eligibility：左欄寫「T2DM、CKD 或 albuminuria、ACEi／ARB…」；右欄寫成 ICD 代碼、檢驗值、look-back window，並註明「**K 值不強制**」

<div class="orig-fig" data-src="TriNetX/c27-originals/table-s2-p1.png" data-label="Table S2（第 88 頁）"></div>

**✅ 做到的**
- 完全照 TARGET 6／7 的格式；右欄**誠實寫出對應不完美的地方**（例如 K 不強制）

**⚠️ 漏洞**
- 資料包只放了第 88 頁；**identifying assumptions** 和 **data analysis plan** 那幾列（第 89–91 頁）我還沒看到

**💬 問老師**
1. Table S2 的 identifying assumptions 那一列，寫了哪些 baseline confounders 和假設？
2. Treatment strategies 那列有沒有寫劑量、grace period（例如處方後幾天內領藥）？

---

## 14. TARGET checklist（Table S1）

**📘 TTE 要求**
- 21 項，逐項寫出在稿件哪裡；**投稿必附**
- Abstract **不要寫「emulated trial」**，避免讀者誤以為是 RCT

**🔍 C27 怎麼做**
- Table S1（補充資料第 84–87 頁）

**✅ 做到的**
- 有附 checklist

**⚠️ 可能比較弱的項目**（💭 依 TARGET 推測，需要對照稿件確認）

| 項目 | 要求 | C27 可能的狀況 |
| --- | --- | --- |
| 1a | 標明是 TTE，不寫「emulated trial」 | 確認題目和摘要用詞 |
| 11 | 各變項的 **missing data 頻率** | K、eGFR、UACR 不強制 → 要報多少人沒有 |
| 13 | 絕對效果要有精確度 | 差距沒有 CI |
| 16 | 討論 target trial 和模擬的差異 | 例如沒有 per-protocol、結局不盲 |
| 18 | **Protocol 註冊** | 有沒有事先註冊？ |
| 19 | 資料與程式碼分享 | TriNetX query 條件（Method S1）算不算？ |

**💬 問老師**
1. Protocol 有沒有事先註冊（例如 OSF）？沒有的話，評審問「主要結局和 2 年追蹤是事先定的嗎」要怎麼回答？
2. 資料包說「事先規定人數較少的一組至少 800 人才往下做」，這個門檻有沒有寫在稿件裡？

---

## 15. Missing data

**📘 TTE 要求**
- TARGET 11：描述**所有變項**的 missing 頻率，依治療組分開
- TARGET 6h／7h：說明怎麼處理 missing data

**🔍 C27 怎麼做**
- 排除條件：「**有紀錄且超出範圍**」才排除（K 3.50–4.80、eGFR ≤ 29.99）；**沒驗的人照收**
- PSM：檢驗值分組呈現，同一人可能落在多組；實際時間窗可能比設定寬（Table 1 註腳）
- Alternative analyses：要求 K 值（310 對）、要求 UACR ≥ 30（393 對）→ 事件太少，沒有結果

**✅ 做到的**
- 沒有用「只收有檢驗值的人」來縮小樣本（保留了人數）；用 alternative analyses 檢查

**⚠️ 漏洞**
- 💭「沒有檢驗值」本身可能就是一個 confounder：沒驗 K 的人可能較少回診、較健康，或在網絡外驗
- 💭 兩組「有沒有驗」的比例是否不同？Table S5 顯示**前 30 天 finerenone 組驗 K 較少**（22.6% vs 31.8%）——基線時是否也不同？
- 最重要的臨床族群（有檢驗值、確定 CKD）**看不到結果** → 資料包已寫進 limitations

**💬 問老師**
1. 基線時兩組「有 K 值」「有 eGFR 值」「有 UACR 值」的比例各是多少？配對後平衡嗎？
2. 稿件要怎麼呈現 missing（TARGET 11）？

---

## 16. Pragmatic、不盲 → 結論能寫到哪裡？

**📘 TTE 要求**
- Target trial 本質上就是 **pragmatic、不盲**的試驗（觀察資料裡大家都知道用什麼藥）
- TARGET 15：在 identifying assumptions 成立的前提下解讀結果
- 💭 近年 JAMA 編輯部（Dahabreh & Bibbins-Domingo 2024，TARGET 引用）的立場：觀察研究**可以**討論因果，前提是**明確寫出假設**

**🔍 C27 怎麼做**
- 結論寫成 **association**：finerenone 起始和較少的第一次 AF 紀錄**有關**
- 明確寫：不能說 finerenone 預防 AF，不能建議為了降低 AF 改選 finerenone

**✅ 做到的**
- 用詞保守、和證據強度一致

**⚠️ 討論點**
- 💭 TTE 的精神是「把因果問題問清楚」，所以 Methods 用因果語言定義 estimand、結論用 association 描述結果，**==兩者不矛盾==**
- 但死亡差異、早期差距、E-value 1.35 → 目前證據確實**不足以支持因果解讀**

**💬 問老師**
1. Methods 要不要明確寫「我們的 causal estimand 是…」，但 Discussion 說因為 X、Y 假設可能不成立，所以解讀為 association？
2. 上台報告時，要怎麼一句話說明「為什麼用 TTE 但結論還是 association」？

---

## 📝 明天討論的問題清單（依優先順序）

> [!example] 建議帶這張表去
> 先問最可能被評審追問、又會影響報告主軸的問題。

| 優先 | 問題 | 對應項目 |
| --- | --- | --- |
| ⭐⭐⭐ | **死亡也少一半**：Discussion 要怎麼寫？要不要加 AF or death 複合結局？ | 6、10 |
| ⭐⭐⭐ | **差距集中在前 90 天**：除了看診較少，「網絡外已有 AF 但沒紀錄」的可能性要不要提？有沒有要求基線就診紀錄？ | 1、9 |
| ⭐⭐⭐ | **配對後的族群是誰**：只配到約一半與四分之一，稿件和報告怎麼描述？ | 7 |
| ⭐⭐ | Protocol 有沒有事先註冊？主要結局、2 年、800 人門檻是事先定的嗎？ | 14 |
| ⭐⭐ | 基線各組 K、eGFR、UACR 的 missing 比例？ | 15 |
| ⭐⭐ | Table S2 第 89–91 頁（identifying assumptions、analysis plan）寫了什麼？ | 13 |
| ⭐⭐ | 開藥科別能不能放進 PSM 或當 sensitivity analysis？ | 3 |
| ⭐ | I48 代碼的驗證文獻？「兩次 I48」的嚴格定義可行嗎？ | 9 |
| ⭐ | HR 要不要寫明是 cause-specific？絕對差距要不要給 CI？ | 10、11 |
| ⭐ | Methods 用因果語言、結論用 association，這樣寫可以嗎？ | 16 |

> [!tip] 討論時的姿態
> 這些問題不是在挑稿件的錯，而是在**準備評審可能的追問**。可以這樣開場：「我用 TARGET 和 Hernán 的框架逐項檢查了一遍，設計面都做到了；想跟老師確認幾個資料面的問題，評審問到時要怎麼回答。」

## 相關筆記

- [[trinetx/target-trial-emulation|目標試驗模擬 Target Trial Emulation（方法學總整理）]]
- [[trinetx/c27-finerenone-af/index|C27 總覽]]
- [[trinetx/c27-finerenone-af/c27-2-design|② 收案與分析]]
- [[trinetx/c27-finerenone-af/c27-3-results|③ 讀懂主文圖表]]
- [[trinetx/c27-finerenone-af/c27-4-supplement|④ 補充資料]]
- [[trinetx/c27-finerenone-af/c27-5-discussion|⑤ 故事線、Discussion 與上台準備]]

## 參考資料

- C27 教學資料包：研究發想與圖表解說（2026-11-21 版）。參考資料庫：`TriNetX/C27_教學資料包_研究發想與圖表解說.pdf`
- Hernán MA, Robins JM. *Am J Epidemiol*. 2016;183(8):758–764.（參考資料庫：`TriNetX/kwv254.pdf`）
- Hernán MA, Wang W, Leaf DE. *JAMA*. 2022;328(24):2446–2447.（參考資料庫：`TriNetX/P_jama_hernn_2022_gm_220007_1671489013.65036.pdf`）
- Hernán MA, Dahabreh IJ, Dickerman BA, Swanson SA. *Ann Intern Med*. 2025;178(3):402–407.（參考資料庫：`TriNetX/nihms-2063403.pdf`）
- Cashin AG, Hansford HJ, Hernán MA, et al. The TARGET statement. *JAMA*. 2025;334(12):1084–1093.（參考資料庫：`TriNetX/nihms-2159479.pdf`）
- Dahabreh IJ, Bibbins-Domingo K. Causal inference about the effects of interventions from observational studies in medical journals. *JAMA*. 2024;331(21):1845.（TARGET 引用文獻）
- 標示 💭 的內容為依上述方法學推論的討論點，非資料包原文
